import { mainTestFn, test } from "@compas/cli";
import {
  apiDateConvertDate,
  apiDateConvertNumber,
} from "../generated/application/date/apiClient.js";
import { testFetchFn } from "../services/app.js";

mainTestFn(import.meta);

test("date/controller", (t) => {
  t.test("convertNumber", (t) => {
    t.test("date.convert.invalid", async (t) => {
      try {
        await apiDateConvertNumber(testFetchFn, {
          value: -9999999,
        });
      } catch (e) {
        t.equal(e.key, "date.convert.invalid");
      }
    });

    t.test("millisecond input", async (t) => {
      const response = await apiDateConvertNumber(testFetchFn, {
        value: 1681120967831,
      });

      t.equal(response.epochInSeconds, 1681120967);
      t.equal(response.epochInMs, 1681120967831);
      t.equal(response.dateOnly, "2023-04-10");
      t.equal(response.timeOnly, "10:02:47.831");
      t.equal(response.isoString, "2023-04-10T10:02:47.831Z");
    });
  });

  t.test("convertDate", (t) => {
    t.test("validator.error", async (t) => {
      try {
        await apiDateConvertDate(testFetchFn, {
          value: "2TE",
        });
      } catch (e) {
        t.equal(e.key, "validator.error");
      }
    });

    t.test("string input", async (t) => {
      const response = await apiDateConvertDate(testFetchFn, {
        value: "2023-04-10T10:02:47.831Z",
      });

      t.equal(response.epochInSeconds, 1681120967);
      t.equal(response.epochInMs, 1681120967831);
      t.equal(response.dateOnly, "2023-04-10");
      t.equal(response.timeOnly, "10:02:47.831");
      t.equal(response.isoString, "2023-04-10T10:02:47.831Z");
    });
  });
});
