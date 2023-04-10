import { dateHandlers } from "../generated/application/date/controller.js";
import { dateConvert } from "./events.js";

dateHandlers.convertNumber = (ctx) => {
  ctx.body = dateConvert(new Date(ctx.validatedParams.value));
};

dateHandlers.convertDate = (ctx) => {
  ctx.body = dateConvert(ctx.validatedParams.value);
};
