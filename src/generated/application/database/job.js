// Generated by @compas/code-gen

import { wrapQueryPart } from "../common/database-helpers.js";
import { validateQueryResultStoreJob } from "../queryResult/validators.js";
import {
  validateStoreJob,
  validateStoreJobInsertValidated,
  validateStoreJobOrderBySpec,
  validateStoreJobOrderByValidated,
  validateStoreJobQueryBuilderValidated,
  validateStoreJobUpdateValidated,
  validateStoreJobWhereValidated,
} from "../store/validators.js";
import { AppError, isNil } from "@compas/stdlib";
import {
  generatedQueryBuilderHelper,
  generatedUpdateHelper,
  generatedWhereBuilderHelper,
  isQueryPart,
  query,
} from "@compas/store";

export const jobQueries = {
  jobCount,
  jobInsert,
  jobUpdate,
  jobDelete,
  jobUpsertOnId,
};

/** @type {any} */
export const jobWhereSpec = {
  fieldSpecification: [
    {
      tableKey: "id",
      keyType: "int",
      matchers: [
        {
          matcherKey: "id",
          matcherType: "equal",
        },
        {
          matcherKey: "idNotEqual",
          matcherType: "notEqual",
        },
        {
          matcherKey: "idIn",
          matcherType: "in",
        },
        {
          matcherKey: "idNotIn",
          matcherType: "notIn",
        },
        {
          matcherKey: "idGreaterThan",
          matcherType: "greaterThan",
        },
        {
          matcherKey: "idLowerThan",
          matcherType: "lowerThan",
        },
      ],
    },
    {
      tableKey: "isComplete",
      keyType: "uuid",
      matchers: [
        {
          matcherKey: "isComplete",
          matcherType: "equal",
        },
        {
          matcherKey: "isCompleteIsNull",
          matcherType: "isNull",
        },
        {
          matcherKey: "isCompleteIsNotNull",
          matcherType: "isNotNull",
        },
      ],
    },
    {
      tableKey: "name",
      keyType: "varchar",
      matchers: [
        {
          matcherKey: "name",
          matcherType: "equal",
        },
        {
          matcherKey: "nameNotEqual",
          matcherType: "notEqual",
        },
        {
          matcherKey: "nameIn",
          matcherType: "in",
        },
        {
          matcherKey: "nameNotIn",
          matcherType: "notIn",
        },
        {
          matcherKey: "nameLike",
          matcherType: "like",
        },
        {
          matcherKey: "nameILike",
          matcherType: "iLike",
        },
        {
          matcherKey: "nameNotLike",
          matcherType: "notLike",
        },
      ],
    },
    {
      tableKey: "scheduledAt",
      keyType: "timestamptz",
      matchers: [
        {
          matcherKey: "scheduledAt",
          matcherType: "equal",
        },
        {
          matcherKey: "scheduledAtNotEqual",
          matcherType: "notEqual",
        },
        {
          matcherKey: "scheduledAtIn",
          matcherType: "in",
        },
        {
          matcherKey: "scheduledAtNotIn",
          matcherType: "notIn",
        },
        {
          matcherKey: "scheduledAtGreaterThan",
          matcherType: "greaterThan",
        },
        {
          matcherKey: "scheduledAtLowerThan",
          matcherType: "lowerThan",
        },
        {
          matcherKey: "scheduledAtIsNull",
          matcherType: "isNull",
        },
        {
          matcherKey: "scheduledAtIsNotNull",
          matcherType: "isNotNull",
        },
      ],
    },
    {
      tableKey: "createdAt",
      keyType: "timestamptz",
      matchers: [
        {
          matcherKey: "createdAt",
          matcherType: "equal",
        },
        {
          matcherKey: "createdAtNotEqual",
          matcherType: "notEqual",
        },
        {
          matcherKey: "createdAtIn",
          matcherType: "in",
        },
        {
          matcherKey: "createdAtNotIn",
          matcherType: "notIn",
        },
        {
          matcherKey: "createdAtGreaterThan",
          matcherType: "greaterThan",
        },
        {
          matcherKey: "createdAtLowerThan",
          matcherType: "lowerThan",
        },
      ],
    },
    {
      tableKey: "updatedAt",
      keyType: "timestamptz",
      matchers: [
        {
          matcherKey: "updatedAt",
          matcherType: "equal",
        },
        {
          matcherKey: "updatedAtNotEqual",
          matcherType: "notEqual",
        },
        {
          matcherKey: "updatedAtIn",
          matcherType: "in",
        },
        {
          matcherKey: "updatedAtNotIn",
          matcherType: "notIn",
        },
        {
          matcherKey: "updatedAtGreaterThan",
          matcherType: "greaterThan",
        },
        {
          matcherKey: "updatedAtLowerThan",
          matcherType: "lowerThan",
        },
      ],
    },
  ],
};

/**
 * Reusable where clause generator. This is used by other generated queries, and can be used inline in custom queries.
 *
 * @param {import("../common/types").StoreJobWhere} [where]
 * @param {{ skipValidator?: boolean, shortName?: string }} [options]
 * @returns {QueryPart<any>}
 */
export function jobWhere(where, options = {}) {
  options.shortName ??= "j.";
  if (!options.shortName.endsWith(".")) {
    options.shortName += ".";
  }
  if (!options.skipValidator) {
    const { error, value } = validateStoreJobWhereValidated(where ?? {});
    if (error) {
      throw AppError.serverError({ message: "Invalid where object", error });
    }
    where = value;
  }
  return generatedWhereBuilderHelper(
    jobWhereSpec,
    where ?? {},
    options.shortName,
  );
}

/**
 * Reusable ORDER BY clause generator. This is used by other generated queries, and can be used inline in custom queries.
 *
 * @param {import("../common/types").StoreJobOrderBy} [orderBy]
 * @param {import("../common/types").StoreJobOrderBySpec} [orderBySpec]
 * @param {{ skipValidator?: boolean, shortName?: string }} [options]
 * @returns {QueryPart<any>}
 */
export function jobOrderBy(orderBy, orderBySpec, options = {}) {
  options.shortName ??= "j.";
  if (!options.shortName.endsWith(".")) {
    options.shortName += ".";
  }
  orderBy ??= ["createdAt", "updatedAt", "id"];
  orderBySpec ??= {};
  if (!options.skipValidator) {
    const validatedOrderBy = validateStoreJobOrderByValidated(orderBy);
    if (validatedOrderBy.error) {
      throw AppError.serverError({
        message: "Invalid orderBy array",
        error: validatedOrderBy.error,
      });
    }
    orderBy = validatedOrderBy.value;
    const validatedOrderBySpec = validateStoreJobOrderBySpec(orderBySpec);
    if (validatedOrderBySpec.error) {
      throw AppError.serverError({
        message: "Invalid orderBySpec object",
        error: validatedOrderBySpec.error,
      });
    }
    orderBySpec = validatedOrderBySpec.value;
  }
  if (isQueryPart(orderBy)) {
    return orderBy;
  }
  let str = "";
  for (const value of orderBy) {
    if (str.length !== 0) {
      str += ", ";
    }
    str += `${options.shortName}"${value}" ${orderBySpec[value] ?? "ASC"}`;
  }
  return query([str]);
}

/**
 * Count the records in the 'job' table
 *
 * @param {import("@compas/store").Postgres} sql
 * @param {import("../common/types").StoreJobWhere} where
 * @returns {Promise<number>}
 */
async function jobCount(sql, where) {
  const [result] =
    await query`select count(j."id") as "recordCount" FROM "job" j WHERE ${jobWhere(
      where,
    )}`.exec(sql);
  return Number(result?.recordCount ?? "0");
}

/**
 * Insert a record in the 'job' table
 *
 * @param {import("@compas/store").Postgres} sql
 * @param {import("../common/types").StoreJobInsert["insert"]} insert
 * @param {{ withPrimaryKey?: boolean }} [options={}]
 * @returns {Promise<import("../common/types").StoreJob[]>}
 */
function jobInsert(sql, insert, options = {}) {
  if (insert === undefined || (Array.isArray(insert) && insert.length === 0)) {
    return Promise.resolve([]);
  }
  return jobInsertInternal({ insert, returning: "*" }).exec(sql);
}

/**
 * Insert a record in the 'job' table
 *
 * @param {import("../common/types").StoreJobInsert} input
 * @returns {import("@compas/store").WrappedQueryPart<import("../common/types").StoreJob>}
 */
function jobInsertInternal(input) {
  const { error, value: validatedInput } =
    validateStoreJobInsertValidated(input);
  if (error) {
    throw AppError.serverError({
      message: "Insert input validation failed",
      error,
    });
  }
  const qb = query`
  INSERT INTO "job"
    ("id","isComplete","handlerTimeout","priority","retryCount","name","scheduledAt","data","createdAt","updatedAt")
  VALUES
  `;
  /** @type {string[]} */
  const str = [];
  const args = [];
  for (const insert of validatedInput.insert) {
    if (str.length) {
      str.push(", (");
    } else {
      str.push("(");
    }
    if (isNil(insert.id)) {
      args.push(undefined);
      str.push("DEFAULT, ");
    } else {
      args.push(insert.id);
      str.push(", ");
    }
    args.push(insert.isComplete ?? null);
    str.push(", ");
    args.push(insert.handlerTimeout ?? null);
    str.push(", ");
    args.push(insert.priority ?? null);
    str.push(", ");
    args.push(insert.retryCount ?? null);
    str.push(", ");
    args.push(insert.name ?? null);
    str.push(", ");
    args.push(insert.scheduledAt ?? null);
    str.push(", ");
    if (!isNil(insert.data)) {
      args.push(JSON.stringify(insert.data));
    } else {
      args.push(null);
    }
    str.push(", ");
    if (isNil(insert.createdAt)) {
      args.push(undefined);
      str.push("DEFAULT, ");
    } else {
      args.push(insert.createdAt);
      str.push(", ");
    }
    if (isNil(insert.updatedAt)) {
      args.push(undefined);
      str.push("DEFAULT, ");
    } else {
      args.push(insert.updatedAt);
      str.push(", ");
    }
    // We have added an extra comma, so remove it.
    str[str.length - 1] = str.at(-1)?.slice(0, -2) ?? "";
    args.push(undefined);
    str.push(")");
    args.push(undefined);
  }
  if (validatedInput.returning === "*") {
    str.push(
      ` RETURNING "id","isComplete","handlerTimeout","priority","retryCount","name","scheduledAt","data","createdAt","updatedAt"`,
    );
    args.push(undefined);
  } else if (Array.isArray(validatedInput.returning)) {
    str.push(
      ` RETURNING ${JSON.stringify(validatedInput.returning).slice(1, -1)}`,
    );
    args.push(undefined);
  }
  qb.append(query(str, ...args));
  return wrapQueryPart(qb, validateStoreJob, {
    hasCustomReturning: Array.isArray(validatedInput.returning),
  });
}

/**
 * Upsert a record in the 'job' table
 *
 * @param {import("@compas/store").Postgres} sql
 * @param {import("../common/types").StoreJobInsert["insert"]} insert
 * @returns {Promise<import("../common/types").StoreJob[]>}
 */
function jobUpsertOnId(sql, insert) {
  return jobUpsertOnIdInternal({ insert, returning: "*" }).exec(sql);
}

/**
 * Upsert a record in the 'job' table based on the primary key.
 *
 * @param {import("../common/types").StoreJobInsert} input
 * @returns {import("@compas/store").WrappedQueryPart<import("../common/types").StoreJob>}
 */
function jobUpsertOnIdInternal(input) {
  const { error, value: validatedInput } =
    validateStoreJobInsertValidated(input);
  if (error) {
    throw AppError.serverError({
      message: "Insert input validation failed",
      error,
    });
  }
  const { queryPart } = jobInsertInternal({ insert: input.insert });
  /** @type {string[]} */
  const str = [];
  const args = [];
  str.push(`ON CONFLICT ("id") DO UPDATE SET
    "isComplete" = COALESCE(EXCLUDED."isComplete", "job"."isComplete"),
    "handlerTimeout" = COALESCE(EXCLUDED."handlerTimeout", "job"."handlerTimeout"),
    "priority" = COALESCE(EXCLUDED."priority", "job"."priority"),
    "retryCount" = COALESCE(EXCLUDED."retryCount", "job"."retryCount"),
    "name" = COALESCE(EXCLUDED."name", "job"."name"),
    "scheduledAt" = COALESCE(EXCLUDED."scheduledAt", "job"."scheduledAt"),
    "data" = COALESCE(EXCLUDED."data", "job"."data"),
    "updatedAt" = COALESCE(EXCLUDED."updatedAt", "job"."updatedAt")`);
  if (validatedInput.returning === "*") {
    str.push(
      ` RETURNING "id","isComplete","handlerTimeout","priority","retryCount","name","scheduledAt","data","createdAt","updatedAt"`,
    );
    args.push(undefined);
  } else if (Array.isArray(validatedInput.returning)) {
    str.push(
      ` RETURNING ${JSON.stringify(validatedInput.returning).slice(1, -1)}`,
    );
    args.push(undefined);
  }
  queryPart.append(query(str, ...args));
  return wrapQueryPart(queryPart, validateStoreJob, {
    hasCustomReturning: Array.isArray(validatedInput.returning),
  });
}

/** @type {any} */
const jobUpdateSpec = {
  schemaName: "",
  name: "job",
  shortName: "j",
  columns: [
    "id",
    "isComplete",
    "handlerTimeout",
    "priority",
    "retryCount",
    "name",
    "scheduledAt",
    "data",
    "createdAt",
    "updatedAt",
  ],
  where: jobWhereSpec,
  injectUpdatedAt: true,
  fields: {
    id: {
      type: "number",
      atomicUpdates: ["$add", "$subtract", "$multiply", "$divide"],
    },
    isComplete: {
      type: "boolean",
      atomicUpdates: ["$negate"],
    },
    handlerTimeout: {
      type: "number",
      atomicUpdates: ["$add", "$subtract", "$multiply", "$divide"],
    },
    priority: {
      type: "number",
      atomicUpdates: ["$add", "$subtract", "$multiply", "$divide"],
    },
    retryCount: {
      type: "number",
      atomicUpdates: ["$add", "$subtract", "$multiply", "$divide"],
    },
    name: {
      type: "string",
      atomicUpdates: ["$append"],
    },
    scheduledAt: {
      type: "date",
      atomicUpdates: ["$add", "$subtract"],
    },
    data: {
      type: "jsonb",
      atomicUpdates: ["$set", "$remove"],
    },
    createdAt: {
      type: "date",
      atomicUpdates: ["$add", "$subtract"],
    },
    updatedAt: {
      type: "date",
      atomicUpdates: ["$add", "$subtract"],
    },
  },
};

/**
 * Insert a record in the 'job' table
 *
 * @param {import("@compas/store").Postgres} sql
 * @param {import("../common/types").StoreJobUpdate} update
 * @returns {Promise<import("../common/types").StoreJob[]>}
 */
function jobUpdate(sql, update) {
  if (update?.returning === "*" || !update?.returning) {
    return jobUpdateInternal(update).exec(sql);
  }
  // @ts-expect-error
  return jobUpdateInternal(update).execRaw(sql);
}

/**
 * Update records in the 'job' table
 *
 * @param {import("../common/types").StoreJobUpdate} input
 * @returns {import("@compas/store").WrappedQueryPart<import("../common/types").StoreJob>}
 */
function jobUpdateInternal(input) {
  const { error, value: validatedInput } =
    validateStoreJobUpdateValidated(input);
  if (error) {
    throw AppError.serverError({
      message: "Update input validation failed",
      error,
    });
  }
  return wrapQueryPart(
    generatedUpdateHelper(jobUpdateSpec, validatedInput),
    validateStoreJob,
    { hasCustomReturning: Array.isArray(validatedInput.returning) },
  );
}

/**
 * Insert a record in the 'job' table
 *
 * @param {import("@compas/store").Postgres} sql
 * @param {import("../common/types").StoreJobWhere} [where]
 * @returns {Promise<void>}
 */
function jobDelete(sql, where = {}) {
  return jobDeleteInternal(where).exec(sql);
}

/**
 * Remove records from the 'job' table
 *
 * @param {import("../common/types").StoreJobWhere} [where]
 * @returns {import("@compas/store").QueryPart<any>}
 */
function jobDeleteInternal(where = {}) {
  return query`DELETE FROM "job" j WHERE ${jobWhere(where)}`;
}

/** @type {any} */
export const jobQueryBuilderSpec = {
  name: "job",
  shortName: "j",
  orderByExperimental: jobOrderBy,
  where: jobWhereSpec,
  columns: [
    "id",
    "isComplete",
    "handlerTimeout",
    "priority",
    "retryCount",
    "name",
    "scheduledAt",
    "data",
    "createdAt",
    "updatedAt",
  ],
  relations: [],
};

/**
 * Query records in the 'job' table, optionally joining related tables.
 *
 * @param {import("../common/types").StoreJobQueryBuilder} [input]
 * @returns {import("@compas/store").WrappedQueryPart<import("../common/types").QueryResultStoreJob>}
 */
export function queryJob(input = {}) {
  const { error, value: validatedInput } =
    validateStoreJobQueryBuilderValidated(input);
  if (error) {
    throw AppError.serverError({
      message: "Query builder input validation failed",
      error,
    });
  }
  return wrapQueryPart(
    generatedQueryBuilderHelper(jobQueryBuilderSpec, validatedInput, {}),
    validateQueryResultStoreJob,
    { hasCustomReturning: validatedInput.select?.length !== 10 },
  );
}