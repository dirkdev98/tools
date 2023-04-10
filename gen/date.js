import { TypeCreator } from "@compas/code-gen";

/**
 *
 * @param {import("@compas/code-gen/experimental").Generator} generator
 */
export function extendWithDate(generator) {
  const T = new TypeCreator("date");
  const R = T.router("/date");

  generator.add(
    T.object("converted").keys({
      epochInSeconds: T.number(),
      epochInMs: T.number().max(Number.MAX_SAFE_INTEGER),
      isoString: T.string(),
      dateOnly: T.date().dateOnly(),
      timeOnly: T.date().timeOnly(),
    }),

    R.get("/n/:value", "convertNumber")
      .params({
        value: T.number().max(Number.MAX_SAFE_INTEGER),
      })
      .response(T.reference(T.group, "converted"))
      .docs(
        "Convert the inputted milliseconds since epoch to various date formats.",
      ),

    R.get("/:value", "convertDate")
      .params({
        value: T.date(),
      })
      .response(T.reference(T.group, "converted"))
      .docs("Convert the inputted date(-string) to various date formats."),
  );
}
