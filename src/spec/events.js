import { Generator } from "@compas/code-gen/experimental";
import { AppError, eventStart, eventStop } from "@compas/stdlib";

/**
 * Retrieve the Compas structure from a specific host
 *
 * @param {InsightEvent} event
 * @param {string} url
 * @returns {Promise<any>}
 */
export async function specRetrieveStructureFromUrl(event, url) {
  eventStart(event, "spec.retrieveStructureFromUrl");

  const response = await fetch(new URL("_compas/structure.json", url), {
    method: "GET",
  });

  if (!response.ok) {
    throw AppError.validationError(`${event.name}.couldNotRetrieveUrl`, {
      response: await response.json(),
    });
  }

  const structure = await response.json();

  eventStop(event);

  return structure;
}

/**
 *
 * @param {InsightEvent} event
 * @param {any} structure
 * @param {string} baseUrl
 */
export function specConvertStructureToOpenApi(event, structure, baseUrl) {
  eventStart(event, "spec.convertStructureToOpenApi");

  const generator = new Generator(event.log);
  generator.addStructure(structure);

  const outputFiles = generator.generate({
    targetLanguage: "js",
    generators: {
      openApi: {},
    },
  });

  const openApiSpec = JSON.parse(
    outputFiles.find((it) => it.relativePath === "common/openapi.json")
      ?.contents ?? "{}",
  );

  openApiSpec.servers = [
    {
      url: baseUrl,
    },
  ];

  eventStop(event);

  return openApiSpec;
}
