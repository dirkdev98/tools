import { Generator } from "@compas/code-gen";
import { mainFn } from "@compas/stdlib";
import { extendWithDate } from "../gen/date.js";
import { extendWithSpec } from "../gen/spec.js";

mainFn(import.meta, main);

function main() {
  const generator = new Generator();

  extendWithDate(generator);
  extendWithSpec(generator);

  generator.generate({
    targetLanguage: "js",
    outputDirectory: "./src/generated/application",
    generators: {
      types: {
        declareGlobalTypes: true,
      },
      validators: {
        includeBaseTypes: true,
      },
      router: {
        target: {
          library: "koa",
        },
        exposeApiStructure: true,
      },
      apiClient: {
        target: {
          library: "fetch",
          targetRuntime: "node.js",
        },
        responseValidation: {
          looseObjectValidation: false,
        },
      },
    },
  });
}
