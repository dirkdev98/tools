import { environment, isProduction, isStaging, mainFn } from "@compas/stdlib";
import { initializeServices } from "../src/service.js";
import { app } from "../src/services/app.js";
import { serviceLogger } from "../src/services/logger.js";

mainFn(import.meta, main);

async function main() {
  await initializeServices();

  const port = environment.PORT || 3000;

  app.listen(Number(port), () => {
    serviceLogger.info({
      message: "listening",
      port,
      isProduction: isProduction(),
      isStaging: isStaging(),
    });
  });
}
