import { TypeCreator } from "@compas/code-gen";

/**
 *
 * @param {import("@compas/code-gen").Generator} generator
 */
export function extendWithSpec(generator) {
  const T = new TypeCreator("spec");
  const R = T.router("/spec");

  generator.add(
    T.string("url").pattern(/^https?:\/\/(\w+\.?)+(:\d{3,})?$/gi),

    R.get("/openapi", "openApi")
      .query({
        url: T.reference("spec", "url"),
      })
      .response(T.any())
      .docs(
        "Retrieve the Compas structure from the provided URL and convert it to an OpenAPI spec.",
      ),

    R.get("/openapi/editor", "openApiEditor")
      .query({
        url: T.reference("spec", "url"),
      })
      .response(T.any())
      .docs(
        "Open the OpenAPI editor with the structure from the provided url opened.",
      ),
  );
}
