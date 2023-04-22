import { newEventFromEvent } from "@compas/stdlib";
import { specHandlers } from "../generated/application/spec/controller.js";
import {
  specConvertStructureToOpenApi,
  specRetrieveStructureFromUrl,
} from "./events.js";

specHandlers.openApi = async (ctx) => {
  const resolvedSpec = await specRetrieveStructureFromUrl(
    newEventFromEvent(ctx.event),
    ctx.validatedQuery.url,
  );

  const openApiSpec = specConvertStructureToOpenApi(
    newEventFromEvent(ctx.event),
    resolvedSpec,
    ctx.validatedQuery.url,
  );

  ctx.body = openApiSpec;
};

specHandlers.openApiEditor = (ctx) => {
  ctx.redirect(
    `https://editor.swagger.io?url=${encodeURIComponent(
      `https://ddv.tools/spec/openapi?url=${ctx.validatedQuery.url}`,
    )}`,
    302,
  );
};
