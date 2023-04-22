import { mainTestFn, test } from "@compas/cli";
import { apiSpecOpenApi } from "../generated/application/spec/apiClient.js";
import { app, testFetchFn } from "../services/app.js";

mainTestFn(import.meta);

test("spec/controller", (t) => {
  t.test("openApi", async (t) => {
    await apiSpecOpenApi(testFetchFn, {
      url: `http://localhost:${app._server.address().port}`,
    });

    t.pass();
  });
});
