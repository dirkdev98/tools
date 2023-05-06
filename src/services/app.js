import { createBodyParser, getApp } from "@compas/server";
import {
  fetchCatchErrorAndWrapWithAppError,
  fetchWithBaseUrl,
} from "../generated/application/common/api-client.js";
import { router } from "../generated/application/common/router.js";
import { serviceLogger } from "./logger.js";

/**
 * @type {Application}
 */
export let app = undefined;

/**
 * @type {FetchFn}
 */
export let testFetchFn = undefined;

/**
 * Create a new Koa app instance.
 *
 * @returns {void}
 */
export function serviceAppInit() {
  serviceLogger.info("setting app");

  app = getApp({
    headers: {
      cors: {
        maxAge: 7200,
      },
    },
    logOptions: {
      requestInformation: {
        includeEventName: true,
        includePath: false,
        includeValidatedParams: true,
        includeValidatedQuery: true,
      },
    },
  });
}

/**
 * Load all controllers and mount the generated router.
 *
 * @returns {Promise<void>}
 */
export async function serviceAppLoadAndInjectRoutes() {
  serviceLogger.info("loading app");

  await Promise.all([
    import("../date/controller.js"),
    import("../spec/controller.js"),
  ]);

  app.use(router(createBodyParser({})));
}

/**
 * Setup the test fetch function
 *
 * @returns {Promise<void>}
 */
export async function serviceAppLoadApiClient() {
  await new Promise((resolve, reject) => {
    let isListening = false;
    // @ts-ignore
    app._server = app.listen();

    // @ts-ignore
    app._server.on("listening", () => {
      isListening = true;
      // @ts-ignore
      resolve();
    });

    // @ts-ignore
    app._server.on("error", (err) => {
      if (!isListening) {
        reject(err);
      }
    });
  });

  // @ts-ignore
  const { port } = app._server.address();

  testFetchFn = fetchWithBaseUrl(
    fetchCatchErrorAndWrapWithAppError(fetch),
    `http://127.0.0.1:${port}/`,
  );
}
