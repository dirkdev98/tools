import { AppError } from "@compas/stdlib";

/**
 * Convert the provided date to various formats
 *
 * @param {Date} date
 * @returns {DateConverted}
 */
export function dateConvert(date) {
  if (isNaN(date?.getTime() ?? undefined) || date.getTime() < 0) {
    throw AppError.validationError(`date.convert.invalid`);
  }

  return {
    epochInSeconds: Math.floor(date.getTime() / 1000),
    epochInMs: date.getTime(),
    isoString: date.toISOString(),
    dateOnly: `${String(date.getUTCFullYear()).padStart(4, "0")}-${String(
      date.getUTCMonth() + 1,
    ).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`,
    timeOnly: `${String(date.getUTCHours()).padStart(2, "0")}:${String(
      date.getUTCMinutes(),
    ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}.${String(
      date.getMilliseconds(),
    ).padStart(3, "0")}`,
  };
}
