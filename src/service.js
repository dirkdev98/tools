import {
  serviceAppInit,
  serviceAppLoadAndInjectRoutes,
  serviceAppLoadApiClient,
} from "./services/app.js";
import { serviceLoggerInit } from "./services/logger.js";

/**
 * Set the services that can be used throughout your app
 */
export async function initializeServices() {
  serviceLoggerInit();
  serviceAppInit();

  await serviceAppLoadAndInjectRoutes();
}

/**
 * Set test variants of services that are used throughout your app.
 */
export async function initializeTestServices() {
  serviceLoggerInit();
  serviceAppInit();

  await serviceAppLoadAndInjectRoutes();
  await serviceAppLoadApiClient();
}
