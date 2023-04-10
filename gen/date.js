import { TypeCreator } from "@compas/code-gen";

/**
 *
 * @param {import("@compas/code-gen/experimental").Generator} generator
 */
export function extendWithDate(generator) {
  const T = new TypeCreator("date");
  const R = T.router("/date");

  generator.add(R.get("/tmp", "tmp").response(T.string()));
}
