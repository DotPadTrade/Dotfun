
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Launch
 * 
 */
export type Launch = $Result.DefaultSelection<Prisma.$LaunchPayload>
/**
 * Model LaunchEvent
 * 
 */
export type LaunchEvent = $Result.DefaultSelection<Prisma.$LaunchEventPayload>
/**
 * Model UploadAudit
 * 
 */
export type UploadAudit = $Result.DefaultSelection<Prisma.$UploadAuditPayload>
/**
 * Model RelayOfficialActivity
 * 
 */
export type RelayOfficialActivity = $Result.DefaultSelection<Prisma.$RelayOfficialActivityPayload>
/**
 * Model RelayOfficialIndexState
 * 
 */
export type RelayOfficialIndexState = $Result.DefaultSelection<Prisma.$RelayOfficialIndexStatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LaunchRoute: {
  PUMP_PUMPSWAP: 'PUMP_PUMPSWAP',
  LAUNCHLAB_CPMM: 'LAUNCHLAB_CPMM'
};

export type LaunchRoute = (typeof LaunchRoute)[keyof typeof LaunchRoute]


export const LaunchStatus: {
  PREPARATION: 'PREPARATION',
  SUBMITTED: 'SUBMITTED',
  CONFIRMED: 'CONFIRMED',
  CURVE_TRADING: 'CURVE_TRADING',
  GRADUATION_DETECTED: 'GRADUATION_DETECTED',
  POOL_VERIFIED: 'POOL_VERIFIED',
  FAILED: 'FAILED',
  UNRESOLVED: 'UNRESOLVED'
};

export type LaunchStatus = (typeof LaunchStatus)[keyof typeof LaunchStatus]

}

export type LaunchRoute = $Enums.LaunchRoute

export const LaunchRoute: typeof $Enums.LaunchRoute

export type LaunchStatus = $Enums.LaunchStatus

export const LaunchStatus: typeof $Enums.LaunchStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Launches
 * const launches = await prisma.launch.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Launches
   * const launches = await prisma.launch.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.launch`: Exposes CRUD operations for the **Launch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Launches
    * const launches = await prisma.launch.findMany()
    * ```
    */
  get launch(): Prisma.LaunchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.launchEvent`: Exposes CRUD operations for the **LaunchEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LaunchEvents
    * const launchEvents = await prisma.launchEvent.findMany()
    * ```
    */
  get launchEvent(): Prisma.LaunchEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploadAudit`: Exposes CRUD operations for the **UploadAudit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadAudits
    * const uploadAudits = await prisma.uploadAudit.findMany()
    * ```
    */
  get uploadAudit(): Prisma.UploadAuditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relayOfficialActivity`: Exposes CRUD operations for the **RelayOfficialActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelayOfficialActivities
    * const relayOfficialActivities = await prisma.relayOfficialActivity.findMany()
    * ```
    */
  get relayOfficialActivity(): Prisma.RelayOfficialActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relayOfficialIndexState`: Exposes CRUD operations for the **RelayOfficialIndexState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelayOfficialIndexStates
    * const relayOfficialIndexStates = await prisma.relayOfficialIndexState.findMany()
    * ```
    */
  get relayOfficialIndexState(): Prisma.RelayOfficialIndexStateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Launch: 'Launch',
    LaunchEvent: 'LaunchEvent',
    UploadAudit: 'UploadAudit',
    RelayOfficialActivity: 'RelayOfficialActivity',
    RelayOfficialIndexState: 'RelayOfficialIndexState'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "launch" | "launchEvent" | "uploadAudit" | "relayOfficialActivity" | "relayOfficialIndexState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Launch: {
        payload: Prisma.$LaunchPayload<ExtArgs>
        fields: Prisma.LaunchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaunchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaunchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchPayload>
          }
          findFirst: {
            args: Prisma.LaunchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaunchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchPayload>
          }
          findMany: {
            args: Prisma.LaunchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchPayload>[]
          }
          create: {
            args: Prisma.LaunchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchPayload>
          }
          createMany: {
            args: Prisma.LaunchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaunchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchPayload>[]
          }
          delete: {
            args: Prisma.LaunchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchPayload>
          }
          update: {
            args: Prisma.LaunchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchPayload>
          }
          deleteMany: {
            args: Prisma.LaunchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaunchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LaunchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchPayload>[]
          }
          upsert: {
            args: Prisma.LaunchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchPayload>
          }
          aggregate: {
            args: Prisma.LaunchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaunch>
          }
          groupBy: {
            args: Prisma.LaunchGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaunchGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaunchCountArgs<ExtArgs>
            result: $Utils.Optional<LaunchCountAggregateOutputType> | number
          }
        }
      }
      LaunchEvent: {
        payload: Prisma.$LaunchEventPayload<ExtArgs>
        fields: Prisma.LaunchEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaunchEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaunchEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchEventPayload>
          }
          findFirst: {
            args: Prisma.LaunchEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaunchEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchEventPayload>
          }
          findMany: {
            args: Prisma.LaunchEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchEventPayload>[]
          }
          create: {
            args: Prisma.LaunchEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchEventPayload>
          }
          createMany: {
            args: Prisma.LaunchEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaunchEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchEventPayload>[]
          }
          delete: {
            args: Prisma.LaunchEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchEventPayload>
          }
          update: {
            args: Prisma.LaunchEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchEventPayload>
          }
          deleteMany: {
            args: Prisma.LaunchEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaunchEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LaunchEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchEventPayload>[]
          }
          upsert: {
            args: Prisma.LaunchEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchEventPayload>
          }
          aggregate: {
            args: Prisma.LaunchEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaunchEvent>
          }
          groupBy: {
            args: Prisma.LaunchEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaunchEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaunchEventCountArgs<ExtArgs>
            result: $Utils.Optional<LaunchEventCountAggregateOutputType> | number
          }
        }
      }
      UploadAudit: {
        payload: Prisma.$UploadAuditPayload<ExtArgs>
        fields: Prisma.UploadAuditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadAuditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadAuditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadAuditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadAuditPayload>
          }
          findFirst: {
            args: Prisma.UploadAuditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadAuditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadAuditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadAuditPayload>
          }
          findMany: {
            args: Prisma.UploadAuditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadAuditPayload>[]
          }
          create: {
            args: Prisma.UploadAuditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadAuditPayload>
          }
          createMany: {
            args: Prisma.UploadAuditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadAuditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadAuditPayload>[]
          }
          delete: {
            args: Prisma.UploadAuditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadAuditPayload>
          }
          update: {
            args: Prisma.UploadAuditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadAuditPayload>
          }
          deleteMany: {
            args: Prisma.UploadAuditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadAuditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UploadAuditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadAuditPayload>[]
          }
          upsert: {
            args: Prisma.UploadAuditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadAuditPayload>
          }
          aggregate: {
            args: Prisma.UploadAuditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadAudit>
          }
          groupBy: {
            args: Prisma.UploadAuditGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadAuditGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadAuditCountArgs<ExtArgs>
            result: $Utils.Optional<UploadAuditCountAggregateOutputType> | number
          }
        }
      }
      RelayOfficialActivity: {
        payload: Prisma.$RelayOfficialActivityPayload<ExtArgs>
        fields: Prisma.RelayOfficialActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelayOfficialActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelayOfficialActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialActivityPayload>
          }
          findFirst: {
            args: Prisma.RelayOfficialActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelayOfficialActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialActivityPayload>
          }
          findMany: {
            args: Prisma.RelayOfficialActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialActivityPayload>[]
          }
          create: {
            args: Prisma.RelayOfficialActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialActivityPayload>
          }
          createMany: {
            args: Prisma.RelayOfficialActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelayOfficialActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialActivityPayload>[]
          }
          delete: {
            args: Prisma.RelayOfficialActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialActivityPayload>
          }
          update: {
            args: Prisma.RelayOfficialActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialActivityPayload>
          }
          deleteMany: {
            args: Prisma.RelayOfficialActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelayOfficialActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelayOfficialActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialActivityPayload>[]
          }
          upsert: {
            args: Prisma.RelayOfficialActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialActivityPayload>
          }
          aggregate: {
            args: Prisma.RelayOfficialActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelayOfficialActivity>
          }
          groupBy: {
            args: Prisma.RelayOfficialActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelayOfficialActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelayOfficialActivityCountArgs<ExtArgs>
            result: $Utils.Optional<RelayOfficialActivityCountAggregateOutputType> | number
          }
        }
      }
      RelayOfficialIndexState: {
        payload: Prisma.$RelayOfficialIndexStatePayload<ExtArgs>
        fields: Prisma.RelayOfficialIndexStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelayOfficialIndexStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialIndexStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelayOfficialIndexStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialIndexStatePayload>
          }
          findFirst: {
            args: Prisma.RelayOfficialIndexStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialIndexStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelayOfficialIndexStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialIndexStatePayload>
          }
          findMany: {
            args: Prisma.RelayOfficialIndexStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialIndexStatePayload>[]
          }
          create: {
            args: Prisma.RelayOfficialIndexStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialIndexStatePayload>
          }
          createMany: {
            args: Prisma.RelayOfficialIndexStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelayOfficialIndexStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialIndexStatePayload>[]
          }
          delete: {
            args: Prisma.RelayOfficialIndexStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialIndexStatePayload>
          }
          update: {
            args: Prisma.RelayOfficialIndexStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialIndexStatePayload>
          }
          deleteMany: {
            args: Prisma.RelayOfficialIndexStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelayOfficialIndexStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelayOfficialIndexStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialIndexStatePayload>[]
          }
          upsert: {
            args: Prisma.RelayOfficialIndexStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelayOfficialIndexStatePayload>
          }
          aggregate: {
            args: Prisma.RelayOfficialIndexStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelayOfficialIndexState>
          }
          groupBy: {
            args: Prisma.RelayOfficialIndexStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelayOfficialIndexStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelayOfficialIndexStateCountArgs<ExtArgs>
            result: $Utils.Optional<RelayOfficialIndexStateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    launch?: LaunchOmit
    launchEvent?: LaunchEventOmit
    uploadAudit?: UploadAuditOmit
    relayOfficialActivity?: RelayOfficialActivityOmit
    relayOfficialIndexState?: RelayOfficialIndexStateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LaunchCountOutputType
   */

  export type LaunchCountOutputType = {
    timeline: number
  }

  export type LaunchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeline?: boolean | LaunchCountOutputTypeCountTimelineArgs
  }

  // Custom InputTypes
  /**
   * LaunchCountOutputType without action
   */
  export type LaunchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchCountOutputType
     */
    select?: LaunchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LaunchCountOutputType without action
   */
  export type LaunchCountOutputTypeCountTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaunchEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Launch
   */

  export type AggregateLaunch = {
    _count: LaunchCountAggregateOutputType | null
    _avg: LaunchAvgAggregateOutputType | null
    _sum: LaunchSumAggregateOutputType | null
    _min: LaunchMinAggregateOutputType | null
    _max: LaunchMaxAggregateOutputType | null
  }

  export type LaunchAvgAggregateOutputType = {
    slot: number | null
  }

  export type LaunchSumAggregateOutputType = {
    slot: number | null
  }

  export type LaunchMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorWallet: string | null
    route: $Enums.LaunchRoute | null
    status: $Enums.LaunchStatus | null
    name: string | null
    symbol: string | null
    description: string | null
    metadataUri: string | null
    imageUrl: string | null
    network: string | null
    mintAddress: string | null
    signature: string | null
    slot: number | null
    blockTime: Date | null
    idempotencyKey: string | null
    poolAddress: string | null
    poolVerifiedAt: Date | null
    lastError: string | null
  }

  export type LaunchMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorWallet: string | null
    route: $Enums.LaunchRoute | null
    status: $Enums.LaunchStatus | null
    name: string | null
    symbol: string | null
    description: string | null
    metadataUri: string | null
    imageUrl: string | null
    network: string | null
    mintAddress: string | null
    signature: string | null
    slot: number | null
    blockTime: Date | null
    idempotencyKey: string | null
    poolAddress: string | null
    poolVerifiedAt: Date | null
    lastError: string | null
  }

  export type LaunchCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    creatorWallet: number
    route: number
    status: number
    name: number
    symbol: number
    description: number
    metadataUri: number
    imageUrl: number
    network: number
    mintAddress: number
    signature: number
    slot: number
    blockTime: number
    idempotencyKey: number
    poolAddress: number
    poolVerifiedAt: number
    curveState: number
    lastError: number
    _all: number
  }


  export type LaunchAvgAggregateInputType = {
    slot?: true
  }

  export type LaunchSumAggregateInputType = {
    slot?: true
  }

  export type LaunchMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    creatorWallet?: true
    route?: true
    status?: true
    name?: true
    symbol?: true
    description?: true
    metadataUri?: true
    imageUrl?: true
    network?: true
    mintAddress?: true
    signature?: true
    slot?: true
    blockTime?: true
    idempotencyKey?: true
    poolAddress?: true
    poolVerifiedAt?: true
    lastError?: true
  }

  export type LaunchMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    creatorWallet?: true
    route?: true
    status?: true
    name?: true
    symbol?: true
    description?: true
    metadataUri?: true
    imageUrl?: true
    network?: true
    mintAddress?: true
    signature?: true
    slot?: true
    blockTime?: true
    idempotencyKey?: true
    poolAddress?: true
    poolVerifiedAt?: true
    lastError?: true
  }

  export type LaunchCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    creatorWallet?: true
    route?: true
    status?: true
    name?: true
    symbol?: true
    description?: true
    metadataUri?: true
    imageUrl?: true
    network?: true
    mintAddress?: true
    signature?: true
    slot?: true
    blockTime?: true
    idempotencyKey?: true
    poolAddress?: true
    poolVerifiedAt?: true
    curveState?: true
    lastError?: true
    _all?: true
  }

  export type LaunchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Launch to aggregate.
     */
    where?: LaunchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Launches to fetch.
     */
    orderBy?: LaunchOrderByWithRelationInput | LaunchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaunchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Launches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Launches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Launches
    **/
    _count?: true | LaunchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaunchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaunchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaunchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaunchMaxAggregateInputType
  }

  export type GetLaunchAggregateType<T extends LaunchAggregateArgs> = {
        [P in keyof T & keyof AggregateLaunch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaunch[P]>
      : GetScalarType<T[P], AggregateLaunch[P]>
  }




  export type LaunchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaunchWhereInput
    orderBy?: LaunchOrderByWithAggregationInput | LaunchOrderByWithAggregationInput[]
    by: LaunchScalarFieldEnum[] | LaunchScalarFieldEnum
    having?: LaunchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaunchCountAggregateInputType | true
    _avg?: LaunchAvgAggregateInputType
    _sum?: LaunchSumAggregateInputType
    _min?: LaunchMinAggregateInputType
    _max?: LaunchMaxAggregateInputType
  }

  export type LaunchGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    creatorWallet: string
    route: $Enums.LaunchRoute
    status: $Enums.LaunchStatus
    name: string
    symbol: string
    description: string | null
    metadataUri: string | null
    imageUrl: string | null
    network: string
    mintAddress: string | null
    signature: string | null
    slot: number | null
    blockTime: Date | null
    idempotencyKey: string
    poolAddress: string | null
    poolVerifiedAt: Date | null
    curveState: JsonValue | null
    lastError: string | null
    _count: LaunchCountAggregateOutputType | null
    _avg: LaunchAvgAggregateOutputType | null
    _sum: LaunchSumAggregateOutputType | null
    _min: LaunchMinAggregateOutputType | null
    _max: LaunchMaxAggregateOutputType | null
  }

  type GetLaunchGroupByPayload<T extends LaunchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaunchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaunchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaunchGroupByOutputType[P]>
            : GetScalarType<T[P], LaunchGroupByOutputType[P]>
        }
      >
    >


  export type LaunchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorWallet?: boolean
    route?: boolean
    status?: boolean
    name?: boolean
    symbol?: boolean
    description?: boolean
    metadataUri?: boolean
    imageUrl?: boolean
    network?: boolean
    mintAddress?: boolean
    signature?: boolean
    slot?: boolean
    blockTime?: boolean
    idempotencyKey?: boolean
    poolAddress?: boolean
    poolVerifiedAt?: boolean
    curveState?: boolean
    lastError?: boolean
    timeline?: boolean | Launch$timelineArgs<ExtArgs>
    _count?: boolean | LaunchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["launch"]>

  export type LaunchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorWallet?: boolean
    route?: boolean
    status?: boolean
    name?: boolean
    symbol?: boolean
    description?: boolean
    metadataUri?: boolean
    imageUrl?: boolean
    network?: boolean
    mintAddress?: boolean
    signature?: boolean
    slot?: boolean
    blockTime?: boolean
    idempotencyKey?: boolean
    poolAddress?: boolean
    poolVerifiedAt?: boolean
    curveState?: boolean
    lastError?: boolean
  }, ExtArgs["result"]["launch"]>

  export type LaunchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorWallet?: boolean
    route?: boolean
    status?: boolean
    name?: boolean
    symbol?: boolean
    description?: boolean
    metadataUri?: boolean
    imageUrl?: boolean
    network?: boolean
    mintAddress?: boolean
    signature?: boolean
    slot?: boolean
    blockTime?: boolean
    idempotencyKey?: boolean
    poolAddress?: boolean
    poolVerifiedAt?: boolean
    curveState?: boolean
    lastError?: boolean
  }, ExtArgs["result"]["launch"]>

  export type LaunchSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorWallet?: boolean
    route?: boolean
    status?: boolean
    name?: boolean
    symbol?: boolean
    description?: boolean
    metadataUri?: boolean
    imageUrl?: boolean
    network?: boolean
    mintAddress?: boolean
    signature?: boolean
    slot?: boolean
    blockTime?: boolean
    idempotencyKey?: boolean
    poolAddress?: boolean
    poolVerifiedAt?: boolean
    curveState?: boolean
    lastError?: boolean
  }

  export type LaunchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "creatorWallet" | "route" | "status" | "name" | "symbol" | "description" | "metadataUri" | "imageUrl" | "network" | "mintAddress" | "signature" | "slot" | "blockTime" | "idempotencyKey" | "poolAddress" | "poolVerifiedAt" | "curveState" | "lastError", ExtArgs["result"]["launch"]>
  export type LaunchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeline?: boolean | Launch$timelineArgs<ExtArgs>
    _count?: boolean | LaunchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LaunchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LaunchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LaunchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Launch"
    objects: {
      timeline: Prisma.$LaunchEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      creatorWallet: string
      route: $Enums.LaunchRoute
      status: $Enums.LaunchStatus
      name: string
      symbol: string
      description: string | null
      metadataUri: string | null
      imageUrl: string | null
      network: string
      mintAddress: string | null
      signature: string | null
      slot: number | null
      blockTime: Date | null
      idempotencyKey: string
      poolAddress: string | null
      poolVerifiedAt: Date | null
      curveState: Prisma.JsonValue | null
      lastError: string | null
    }, ExtArgs["result"]["launch"]>
    composites: {}
  }

  type LaunchGetPayload<S extends boolean | null | undefined | LaunchDefaultArgs> = $Result.GetResult<Prisma.$LaunchPayload, S>

  type LaunchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LaunchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaunchCountAggregateInputType | true
    }

  export interface LaunchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Launch'], meta: { name: 'Launch' } }
    /**
     * Find zero or one Launch that matches the filter.
     * @param {LaunchFindUniqueArgs} args - Arguments to find a Launch
     * @example
     * // Get one Launch
     * const launch = await prisma.launch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaunchFindUniqueArgs>(args: SelectSubset<T, LaunchFindUniqueArgs<ExtArgs>>): Prisma__LaunchClient<$Result.GetResult<Prisma.$LaunchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Launch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaunchFindUniqueOrThrowArgs} args - Arguments to find a Launch
     * @example
     * // Get one Launch
     * const launch = await prisma.launch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaunchFindUniqueOrThrowArgs>(args: SelectSubset<T, LaunchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaunchClient<$Result.GetResult<Prisma.$LaunchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Launch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchFindFirstArgs} args - Arguments to find a Launch
     * @example
     * // Get one Launch
     * const launch = await prisma.launch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaunchFindFirstArgs>(args?: SelectSubset<T, LaunchFindFirstArgs<ExtArgs>>): Prisma__LaunchClient<$Result.GetResult<Prisma.$LaunchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Launch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchFindFirstOrThrowArgs} args - Arguments to find a Launch
     * @example
     * // Get one Launch
     * const launch = await prisma.launch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaunchFindFirstOrThrowArgs>(args?: SelectSubset<T, LaunchFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaunchClient<$Result.GetResult<Prisma.$LaunchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Launches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Launches
     * const launches = await prisma.launch.findMany()
     * 
     * // Get first 10 Launches
     * const launches = await prisma.launch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const launchWithIdOnly = await prisma.launch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaunchFindManyArgs>(args?: SelectSubset<T, LaunchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaunchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Launch.
     * @param {LaunchCreateArgs} args - Arguments to create a Launch.
     * @example
     * // Create one Launch
     * const Launch = await prisma.launch.create({
     *   data: {
     *     // ... data to create a Launch
     *   }
     * })
     * 
     */
    create<T extends LaunchCreateArgs>(args: SelectSubset<T, LaunchCreateArgs<ExtArgs>>): Prisma__LaunchClient<$Result.GetResult<Prisma.$LaunchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Launches.
     * @param {LaunchCreateManyArgs} args - Arguments to create many Launches.
     * @example
     * // Create many Launches
     * const launch = await prisma.launch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaunchCreateManyArgs>(args?: SelectSubset<T, LaunchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Launches and returns the data saved in the database.
     * @param {LaunchCreateManyAndReturnArgs} args - Arguments to create many Launches.
     * @example
     * // Create many Launches
     * const launch = await prisma.launch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Launches and only return the `id`
     * const launchWithIdOnly = await prisma.launch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaunchCreateManyAndReturnArgs>(args?: SelectSubset<T, LaunchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaunchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Launch.
     * @param {LaunchDeleteArgs} args - Arguments to delete one Launch.
     * @example
     * // Delete one Launch
     * const Launch = await prisma.launch.delete({
     *   where: {
     *     // ... filter to delete one Launch
     *   }
     * })
     * 
     */
    delete<T extends LaunchDeleteArgs>(args: SelectSubset<T, LaunchDeleteArgs<ExtArgs>>): Prisma__LaunchClient<$Result.GetResult<Prisma.$LaunchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Launch.
     * @param {LaunchUpdateArgs} args - Arguments to update one Launch.
     * @example
     * // Update one Launch
     * const launch = await prisma.launch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaunchUpdateArgs>(args: SelectSubset<T, LaunchUpdateArgs<ExtArgs>>): Prisma__LaunchClient<$Result.GetResult<Prisma.$LaunchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Launches.
     * @param {LaunchDeleteManyArgs} args - Arguments to filter Launches to delete.
     * @example
     * // Delete a few Launches
     * const { count } = await prisma.launch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaunchDeleteManyArgs>(args?: SelectSubset<T, LaunchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Launches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Launches
     * const launch = await prisma.launch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaunchUpdateManyArgs>(args: SelectSubset<T, LaunchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Launches and returns the data updated in the database.
     * @param {LaunchUpdateManyAndReturnArgs} args - Arguments to update many Launches.
     * @example
     * // Update many Launches
     * const launch = await prisma.launch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Launches and only return the `id`
     * const launchWithIdOnly = await prisma.launch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LaunchUpdateManyAndReturnArgs>(args: SelectSubset<T, LaunchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaunchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Launch.
     * @param {LaunchUpsertArgs} args - Arguments to update or create a Launch.
     * @example
     * // Update or create a Launch
     * const launch = await prisma.launch.upsert({
     *   create: {
     *     // ... data to create a Launch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Launch we want to update
     *   }
     * })
     */
    upsert<T extends LaunchUpsertArgs>(args: SelectSubset<T, LaunchUpsertArgs<ExtArgs>>): Prisma__LaunchClient<$Result.GetResult<Prisma.$LaunchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Launches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchCountArgs} args - Arguments to filter Launches to count.
     * @example
     * // Count the number of Launches
     * const count = await prisma.launch.count({
     *   where: {
     *     // ... the filter for the Launches we want to count
     *   }
     * })
    **/
    count<T extends LaunchCountArgs>(
      args?: Subset<T, LaunchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaunchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Launch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaunchAggregateArgs>(args: Subset<T, LaunchAggregateArgs>): Prisma.PrismaPromise<GetLaunchAggregateType<T>>

    /**
     * Group by Launch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LaunchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaunchGroupByArgs['orderBy'] }
        : { orderBy?: LaunchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaunchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaunchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Launch model
   */
  readonly fields: LaunchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Launch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaunchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    timeline<T extends Launch$timelineArgs<ExtArgs> = {}>(args?: Subset<T, Launch$timelineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaunchEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Launch model
   */
  interface LaunchFieldRefs {
    readonly id: FieldRef<"Launch", 'String'>
    readonly createdAt: FieldRef<"Launch", 'DateTime'>
    readonly updatedAt: FieldRef<"Launch", 'DateTime'>
    readonly creatorWallet: FieldRef<"Launch", 'String'>
    readonly route: FieldRef<"Launch", 'LaunchRoute'>
    readonly status: FieldRef<"Launch", 'LaunchStatus'>
    readonly name: FieldRef<"Launch", 'String'>
    readonly symbol: FieldRef<"Launch", 'String'>
    readonly description: FieldRef<"Launch", 'String'>
    readonly metadataUri: FieldRef<"Launch", 'String'>
    readonly imageUrl: FieldRef<"Launch", 'String'>
    readonly network: FieldRef<"Launch", 'String'>
    readonly mintAddress: FieldRef<"Launch", 'String'>
    readonly signature: FieldRef<"Launch", 'String'>
    readonly slot: FieldRef<"Launch", 'Int'>
    readonly blockTime: FieldRef<"Launch", 'DateTime'>
    readonly idempotencyKey: FieldRef<"Launch", 'String'>
    readonly poolAddress: FieldRef<"Launch", 'String'>
    readonly poolVerifiedAt: FieldRef<"Launch", 'DateTime'>
    readonly curveState: FieldRef<"Launch", 'Json'>
    readonly lastError: FieldRef<"Launch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Launch findUnique
   */
  export type LaunchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Launch
     */
    select?: LaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Launch
     */
    omit?: LaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchInclude<ExtArgs> | null
    /**
     * Filter, which Launch to fetch.
     */
    where: LaunchWhereUniqueInput
  }

  /**
   * Launch findUniqueOrThrow
   */
  export type LaunchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Launch
     */
    select?: LaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Launch
     */
    omit?: LaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchInclude<ExtArgs> | null
    /**
     * Filter, which Launch to fetch.
     */
    where: LaunchWhereUniqueInput
  }

  /**
   * Launch findFirst
   */
  export type LaunchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Launch
     */
    select?: LaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Launch
     */
    omit?: LaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchInclude<ExtArgs> | null
    /**
     * Filter, which Launch to fetch.
     */
    where?: LaunchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Launches to fetch.
     */
    orderBy?: LaunchOrderByWithRelationInput | LaunchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Launches.
     */
    cursor?: LaunchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Launches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Launches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Launches.
     */
    distinct?: LaunchScalarFieldEnum | LaunchScalarFieldEnum[]
  }

  /**
   * Launch findFirstOrThrow
   */
  export type LaunchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Launch
     */
    select?: LaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Launch
     */
    omit?: LaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchInclude<ExtArgs> | null
    /**
     * Filter, which Launch to fetch.
     */
    where?: LaunchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Launches to fetch.
     */
    orderBy?: LaunchOrderByWithRelationInput | LaunchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Launches.
     */
    cursor?: LaunchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Launches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Launches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Launches.
     */
    distinct?: LaunchScalarFieldEnum | LaunchScalarFieldEnum[]
  }

  /**
   * Launch findMany
   */
  export type LaunchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Launch
     */
    select?: LaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Launch
     */
    omit?: LaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchInclude<ExtArgs> | null
    /**
     * Filter, which Launches to fetch.
     */
    where?: LaunchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Launches to fetch.
     */
    orderBy?: LaunchOrderByWithRelationInput | LaunchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Launches.
     */
    cursor?: LaunchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Launches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Launches.
     */
    skip?: number
    distinct?: LaunchScalarFieldEnum | LaunchScalarFieldEnum[]
  }

  /**
   * Launch create
   */
  export type LaunchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Launch
     */
    select?: LaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Launch
     */
    omit?: LaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchInclude<ExtArgs> | null
    /**
     * The data needed to create a Launch.
     */
    data: XOR<LaunchCreateInput, LaunchUncheckedCreateInput>
  }

  /**
   * Launch createMany
   */
  export type LaunchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Launches.
     */
    data: LaunchCreateManyInput | LaunchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Launch createManyAndReturn
   */
  export type LaunchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Launch
     */
    select?: LaunchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Launch
     */
    omit?: LaunchOmit<ExtArgs> | null
    /**
     * The data used to create many Launches.
     */
    data: LaunchCreateManyInput | LaunchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Launch update
   */
  export type LaunchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Launch
     */
    select?: LaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Launch
     */
    omit?: LaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchInclude<ExtArgs> | null
    /**
     * The data needed to update a Launch.
     */
    data: XOR<LaunchUpdateInput, LaunchUncheckedUpdateInput>
    /**
     * Choose, which Launch to update.
     */
    where: LaunchWhereUniqueInput
  }

  /**
   * Launch updateMany
   */
  export type LaunchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Launches.
     */
    data: XOR<LaunchUpdateManyMutationInput, LaunchUncheckedUpdateManyInput>
    /**
     * Filter which Launches to update
     */
    where?: LaunchWhereInput
    /**
     * Limit how many Launches to update.
     */
    limit?: number
  }

  /**
   * Launch updateManyAndReturn
   */
  export type LaunchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Launch
     */
    select?: LaunchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Launch
     */
    omit?: LaunchOmit<ExtArgs> | null
    /**
     * The data used to update Launches.
     */
    data: XOR<LaunchUpdateManyMutationInput, LaunchUncheckedUpdateManyInput>
    /**
     * Filter which Launches to update
     */
    where?: LaunchWhereInput
    /**
     * Limit how many Launches to update.
     */
    limit?: number
  }

  /**
   * Launch upsert
   */
  export type LaunchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Launch
     */
    select?: LaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Launch
     */
    omit?: LaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchInclude<ExtArgs> | null
    /**
     * The filter to search for the Launch to update in case it exists.
     */
    where: LaunchWhereUniqueInput
    /**
     * In case the Launch found by the `where` argument doesn't exist, create a new Launch with this data.
     */
    create: XOR<LaunchCreateInput, LaunchUncheckedCreateInput>
    /**
     * In case the Launch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaunchUpdateInput, LaunchUncheckedUpdateInput>
  }

  /**
   * Launch delete
   */
  export type LaunchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Launch
     */
    select?: LaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Launch
     */
    omit?: LaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchInclude<ExtArgs> | null
    /**
     * Filter which Launch to delete.
     */
    where: LaunchWhereUniqueInput
  }

  /**
   * Launch deleteMany
   */
  export type LaunchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Launches to delete
     */
    where?: LaunchWhereInput
    /**
     * Limit how many Launches to delete.
     */
    limit?: number
  }

  /**
   * Launch.timeline
   */
  export type Launch$timelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchEvent
     */
    select?: LaunchEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchEvent
     */
    omit?: LaunchEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchEventInclude<ExtArgs> | null
    where?: LaunchEventWhereInput
    orderBy?: LaunchEventOrderByWithRelationInput | LaunchEventOrderByWithRelationInput[]
    cursor?: LaunchEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaunchEventScalarFieldEnum | LaunchEventScalarFieldEnum[]
  }

  /**
   * Launch without action
   */
  export type LaunchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Launch
     */
    select?: LaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Launch
     */
    omit?: LaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchInclude<ExtArgs> | null
  }


  /**
   * Model LaunchEvent
   */

  export type AggregateLaunchEvent = {
    _count: LaunchEventCountAggregateOutputType | null
    _min: LaunchEventMinAggregateOutputType | null
    _max: LaunchEventMaxAggregateOutputType | null
  }

  export type LaunchEventMinAggregateOutputType = {
    id: string | null
    launchId: string | null
    createdAt: Date | null
    kind: string | null
    dedupeKey: string | null
  }

  export type LaunchEventMaxAggregateOutputType = {
    id: string | null
    launchId: string | null
    createdAt: Date | null
    kind: string | null
    dedupeKey: string | null
  }

  export type LaunchEventCountAggregateOutputType = {
    id: number
    launchId: number
    createdAt: number
    kind: number
    detail: number
    dedupeKey: number
    _all: number
  }


  export type LaunchEventMinAggregateInputType = {
    id?: true
    launchId?: true
    createdAt?: true
    kind?: true
    dedupeKey?: true
  }

  export type LaunchEventMaxAggregateInputType = {
    id?: true
    launchId?: true
    createdAt?: true
    kind?: true
    dedupeKey?: true
  }

  export type LaunchEventCountAggregateInputType = {
    id?: true
    launchId?: true
    createdAt?: true
    kind?: true
    detail?: true
    dedupeKey?: true
    _all?: true
  }

  export type LaunchEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaunchEvent to aggregate.
     */
    where?: LaunchEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaunchEvents to fetch.
     */
    orderBy?: LaunchEventOrderByWithRelationInput | LaunchEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaunchEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaunchEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaunchEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LaunchEvents
    **/
    _count?: true | LaunchEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaunchEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaunchEventMaxAggregateInputType
  }

  export type GetLaunchEventAggregateType<T extends LaunchEventAggregateArgs> = {
        [P in keyof T & keyof AggregateLaunchEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaunchEvent[P]>
      : GetScalarType<T[P], AggregateLaunchEvent[P]>
  }




  export type LaunchEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaunchEventWhereInput
    orderBy?: LaunchEventOrderByWithAggregationInput | LaunchEventOrderByWithAggregationInput[]
    by: LaunchEventScalarFieldEnum[] | LaunchEventScalarFieldEnum
    having?: LaunchEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaunchEventCountAggregateInputType | true
    _min?: LaunchEventMinAggregateInputType
    _max?: LaunchEventMaxAggregateInputType
  }

  export type LaunchEventGroupByOutputType = {
    id: string
    launchId: string
    createdAt: Date
    kind: string
    detail: JsonValue | null
    dedupeKey: string
    _count: LaunchEventCountAggregateOutputType | null
    _min: LaunchEventMinAggregateOutputType | null
    _max: LaunchEventMaxAggregateOutputType | null
  }

  type GetLaunchEventGroupByPayload<T extends LaunchEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaunchEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaunchEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaunchEventGroupByOutputType[P]>
            : GetScalarType<T[P], LaunchEventGroupByOutputType[P]>
        }
      >
    >


  export type LaunchEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    launchId?: boolean
    createdAt?: boolean
    kind?: boolean
    detail?: boolean
    dedupeKey?: boolean
    launch?: boolean | LaunchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["launchEvent"]>

  export type LaunchEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    launchId?: boolean
    createdAt?: boolean
    kind?: boolean
    detail?: boolean
    dedupeKey?: boolean
    launch?: boolean | LaunchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["launchEvent"]>

  export type LaunchEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    launchId?: boolean
    createdAt?: boolean
    kind?: boolean
    detail?: boolean
    dedupeKey?: boolean
    launch?: boolean | LaunchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["launchEvent"]>

  export type LaunchEventSelectScalar = {
    id?: boolean
    launchId?: boolean
    createdAt?: boolean
    kind?: boolean
    detail?: boolean
    dedupeKey?: boolean
  }

  export type LaunchEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "launchId" | "createdAt" | "kind" | "detail" | "dedupeKey", ExtArgs["result"]["launchEvent"]>
  export type LaunchEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    launch?: boolean | LaunchDefaultArgs<ExtArgs>
  }
  export type LaunchEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    launch?: boolean | LaunchDefaultArgs<ExtArgs>
  }
  export type LaunchEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    launch?: boolean | LaunchDefaultArgs<ExtArgs>
  }

  export type $LaunchEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LaunchEvent"
    objects: {
      launch: Prisma.$LaunchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      launchId: string
      createdAt: Date
      kind: string
      detail: Prisma.JsonValue | null
      dedupeKey: string
    }, ExtArgs["result"]["launchEvent"]>
    composites: {}
  }

  type LaunchEventGetPayload<S extends boolean | null | undefined | LaunchEventDefaultArgs> = $Result.GetResult<Prisma.$LaunchEventPayload, S>

  type LaunchEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LaunchEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaunchEventCountAggregateInputType | true
    }

  export interface LaunchEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LaunchEvent'], meta: { name: 'LaunchEvent' } }
    /**
     * Find zero or one LaunchEvent that matches the filter.
     * @param {LaunchEventFindUniqueArgs} args - Arguments to find a LaunchEvent
     * @example
     * // Get one LaunchEvent
     * const launchEvent = await prisma.launchEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaunchEventFindUniqueArgs>(args: SelectSubset<T, LaunchEventFindUniqueArgs<ExtArgs>>): Prisma__LaunchEventClient<$Result.GetResult<Prisma.$LaunchEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LaunchEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaunchEventFindUniqueOrThrowArgs} args - Arguments to find a LaunchEvent
     * @example
     * // Get one LaunchEvent
     * const launchEvent = await prisma.launchEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaunchEventFindUniqueOrThrowArgs>(args: SelectSubset<T, LaunchEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaunchEventClient<$Result.GetResult<Prisma.$LaunchEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LaunchEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchEventFindFirstArgs} args - Arguments to find a LaunchEvent
     * @example
     * // Get one LaunchEvent
     * const launchEvent = await prisma.launchEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaunchEventFindFirstArgs>(args?: SelectSubset<T, LaunchEventFindFirstArgs<ExtArgs>>): Prisma__LaunchEventClient<$Result.GetResult<Prisma.$LaunchEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LaunchEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchEventFindFirstOrThrowArgs} args - Arguments to find a LaunchEvent
     * @example
     * // Get one LaunchEvent
     * const launchEvent = await prisma.launchEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaunchEventFindFirstOrThrowArgs>(args?: SelectSubset<T, LaunchEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaunchEventClient<$Result.GetResult<Prisma.$LaunchEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LaunchEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LaunchEvents
     * const launchEvents = await prisma.launchEvent.findMany()
     * 
     * // Get first 10 LaunchEvents
     * const launchEvents = await prisma.launchEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const launchEventWithIdOnly = await prisma.launchEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaunchEventFindManyArgs>(args?: SelectSubset<T, LaunchEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaunchEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LaunchEvent.
     * @param {LaunchEventCreateArgs} args - Arguments to create a LaunchEvent.
     * @example
     * // Create one LaunchEvent
     * const LaunchEvent = await prisma.launchEvent.create({
     *   data: {
     *     // ... data to create a LaunchEvent
     *   }
     * })
     * 
     */
    create<T extends LaunchEventCreateArgs>(args: SelectSubset<T, LaunchEventCreateArgs<ExtArgs>>): Prisma__LaunchEventClient<$Result.GetResult<Prisma.$LaunchEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LaunchEvents.
     * @param {LaunchEventCreateManyArgs} args - Arguments to create many LaunchEvents.
     * @example
     * // Create many LaunchEvents
     * const launchEvent = await prisma.launchEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaunchEventCreateManyArgs>(args?: SelectSubset<T, LaunchEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LaunchEvents and returns the data saved in the database.
     * @param {LaunchEventCreateManyAndReturnArgs} args - Arguments to create many LaunchEvents.
     * @example
     * // Create many LaunchEvents
     * const launchEvent = await prisma.launchEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LaunchEvents and only return the `id`
     * const launchEventWithIdOnly = await prisma.launchEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaunchEventCreateManyAndReturnArgs>(args?: SelectSubset<T, LaunchEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaunchEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LaunchEvent.
     * @param {LaunchEventDeleteArgs} args - Arguments to delete one LaunchEvent.
     * @example
     * // Delete one LaunchEvent
     * const LaunchEvent = await prisma.launchEvent.delete({
     *   where: {
     *     // ... filter to delete one LaunchEvent
     *   }
     * })
     * 
     */
    delete<T extends LaunchEventDeleteArgs>(args: SelectSubset<T, LaunchEventDeleteArgs<ExtArgs>>): Prisma__LaunchEventClient<$Result.GetResult<Prisma.$LaunchEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LaunchEvent.
     * @param {LaunchEventUpdateArgs} args - Arguments to update one LaunchEvent.
     * @example
     * // Update one LaunchEvent
     * const launchEvent = await prisma.launchEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaunchEventUpdateArgs>(args: SelectSubset<T, LaunchEventUpdateArgs<ExtArgs>>): Prisma__LaunchEventClient<$Result.GetResult<Prisma.$LaunchEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LaunchEvents.
     * @param {LaunchEventDeleteManyArgs} args - Arguments to filter LaunchEvents to delete.
     * @example
     * // Delete a few LaunchEvents
     * const { count } = await prisma.launchEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaunchEventDeleteManyArgs>(args?: SelectSubset<T, LaunchEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaunchEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LaunchEvents
     * const launchEvent = await prisma.launchEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaunchEventUpdateManyArgs>(args: SelectSubset<T, LaunchEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaunchEvents and returns the data updated in the database.
     * @param {LaunchEventUpdateManyAndReturnArgs} args - Arguments to update many LaunchEvents.
     * @example
     * // Update many LaunchEvents
     * const launchEvent = await prisma.launchEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LaunchEvents and only return the `id`
     * const launchEventWithIdOnly = await prisma.launchEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LaunchEventUpdateManyAndReturnArgs>(args: SelectSubset<T, LaunchEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaunchEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LaunchEvent.
     * @param {LaunchEventUpsertArgs} args - Arguments to update or create a LaunchEvent.
     * @example
     * // Update or create a LaunchEvent
     * const launchEvent = await prisma.launchEvent.upsert({
     *   create: {
     *     // ... data to create a LaunchEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LaunchEvent we want to update
     *   }
     * })
     */
    upsert<T extends LaunchEventUpsertArgs>(args: SelectSubset<T, LaunchEventUpsertArgs<ExtArgs>>): Prisma__LaunchEventClient<$Result.GetResult<Prisma.$LaunchEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LaunchEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchEventCountArgs} args - Arguments to filter LaunchEvents to count.
     * @example
     * // Count the number of LaunchEvents
     * const count = await prisma.launchEvent.count({
     *   where: {
     *     // ... the filter for the LaunchEvents we want to count
     *   }
     * })
    **/
    count<T extends LaunchEventCountArgs>(
      args?: Subset<T, LaunchEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaunchEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LaunchEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaunchEventAggregateArgs>(args: Subset<T, LaunchEventAggregateArgs>): Prisma.PrismaPromise<GetLaunchEventAggregateType<T>>

    /**
     * Group by LaunchEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LaunchEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaunchEventGroupByArgs['orderBy'] }
        : { orderBy?: LaunchEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaunchEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaunchEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LaunchEvent model
   */
  readonly fields: LaunchEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LaunchEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaunchEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    launch<T extends LaunchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LaunchDefaultArgs<ExtArgs>>): Prisma__LaunchClient<$Result.GetResult<Prisma.$LaunchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LaunchEvent model
   */
  interface LaunchEventFieldRefs {
    readonly id: FieldRef<"LaunchEvent", 'String'>
    readonly launchId: FieldRef<"LaunchEvent", 'String'>
    readonly createdAt: FieldRef<"LaunchEvent", 'DateTime'>
    readonly kind: FieldRef<"LaunchEvent", 'String'>
    readonly detail: FieldRef<"LaunchEvent", 'Json'>
    readonly dedupeKey: FieldRef<"LaunchEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LaunchEvent findUnique
   */
  export type LaunchEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchEvent
     */
    select?: LaunchEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchEvent
     */
    omit?: LaunchEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchEventInclude<ExtArgs> | null
    /**
     * Filter, which LaunchEvent to fetch.
     */
    where: LaunchEventWhereUniqueInput
  }

  /**
   * LaunchEvent findUniqueOrThrow
   */
  export type LaunchEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchEvent
     */
    select?: LaunchEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchEvent
     */
    omit?: LaunchEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchEventInclude<ExtArgs> | null
    /**
     * Filter, which LaunchEvent to fetch.
     */
    where: LaunchEventWhereUniqueInput
  }

  /**
   * LaunchEvent findFirst
   */
  export type LaunchEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchEvent
     */
    select?: LaunchEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchEvent
     */
    omit?: LaunchEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchEventInclude<ExtArgs> | null
    /**
     * Filter, which LaunchEvent to fetch.
     */
    where?: LaunchEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaunchEvents to fetch.
     */
    orderBy?: LaunchEventOrderByWithRelationInput | LaunchEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaunchEvents.
     */
    cursor?: LaunchEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaunchEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaunchEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaunchEvents.
     */
    distinct?: LaunchEventScalarFieldEnum | LaunchEventScalarFieldEnum[]
  }

  /**
   * LaunchEvent findFirstOrThrow
   */
  export type LaunchEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchEvent
     */
    select?: LaunchEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchEvent
     */
    omit?: LaunchEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchEventInclude<ExtArgs> | null
    /**
     * Filter, which LaunchEvent to fetch.
     */
    where?: LaunchEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaunchEvents to fetch.
     */
    orderBy?: LaunchEventOrderByWithRelationInput | LaunchEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaunchEvents.
     */
    cursor?: LaunchEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaunchEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaunchEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaunchEvents.
     */
    distinct?: LaunchEventScalarFieldEnum | LaunchEventScalarFieldEnum[]
  }

  /**
   * LaunchEvent findMany
   */
  export type LaunchEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchEvent
     */
    select?: LaunchEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchEvent
     */
    omit?: LaunchEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchEventInclude<ExtArgs> | null
    /**
     * Filter, which LaunchEvents to fetch.
     */
    where?: LaunchEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaunchEvents to fetch.
     */
    orderBy?: LaunchEventOrderByWithRelationInput | LaunchEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LaunchEvents.
     */
    cursor?: LaunchEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaunchEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaunchEvents.
     */
    skip?: number
    distinct?: LaunchEventScalarFieldEnum | LaunchEventScalarFieldEnum[]
  }

  /**
   * LaunchEvent create
   */
  export type LaunchEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchEvent
     */
    select?: LaunchEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchEvent
     */
    omit?: LaunchEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchEventInclude<ExtArgs> | null
    /**
     * The data needed to create a LaunchEvent.
     */
    data: XOR<LaunchEventCreateInput, LaunchEventUncheckedCreateInput>
  }

  /**
   * LaunchEvent createMany
   */
  export type LaunchEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LaunchEvents.
     */
    data: LaunchEventCreateManyInput | LaunchEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LaunchEvent createManyAndReturn
   */
  export type LaunchEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchEvent
     */
    select?: LaunchEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchEvent
     */
    omit?: LaunchEventOmit<ExtArgs> | null
    /**
     * The data used to create many LaunchEvents.
     */
    data: LaunchEventCreateManyInput | LaunchEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LaunchEvent update
   */
  export type LaunchEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchEvent
     */
    select?: LaunchEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchEvent
     */
    omit?: LaunchEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchEventInclude<ExtArgs> | null
    /**
     * The data needed to update a LaunchEvent.
     */
    data: XOR<LaunchEventUpdateInput, LaunchEventUncheckedUpdateInput>
    /**
     * Choose, which LaunchEvent to update.
     */
    where: LaunchEventWhereUniqueInput
  }

  /**
   * LaunchEvent updateMany
   */
  export type LaunchEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LaunchEvents.
     */
    data: XOR<LaunchEventUpdateManyMutationInput, LaunchEventUncheckedUpdateManyInput>
    /**
     * Filter which LaunchEvents to update
     */
    where?: LaunchEventWhereInput
    /**
     * Limit how many LaunchEvents to update.
     */
    limit?: number
  }

  /**
   * LaunchEvent updateManyAndReturn
   */
  export type LaunchEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchEvent
     */
    select?: LaunchEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchEvent
     */
    omit?: LaunchEventOmit<ExtArgs> | null
    /**
     * The data used to update LaunchEvents.
     */
    data: XOR<LaunchEventUpdateManyMutationInput, LaunchEventUncheckedUpdateManyInput>
    /**
     * Filter which LaunchEvents to update
     */
    where?: LaunchEventWhereInput
    /**
     * Limit how many LaunchEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LaunchEvent upsert
   */
  export type LaunchEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchEvent
     */
    select?: LaunchEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchEvent
     */
    omit?: LaunchEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchEventInclude<ExtArgs> | null
    /**
     * The filter to search for the LaunchEvent to update in case it exists.
     */
    where: LaunchEventWhereUniqueInput
    /**
     * In case the LaunchEvent found by the `where` argument doesn't exist, create a new LaunchEvent with this data.
     */
    create: XOR<LaunchEventCreateInput, LaunchEventUncheckedCreateInput>
    /**
     * In case the LaunchEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaunchEventUpdateInput, LaunchEventUncheckedUpdateInput>
  }

  /**
   * LaunchEvent delete
   */
  export type LaunchEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchEvent
     */
    select?: LaunchEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchEvent
     */
    omit?: LaunchEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchEventInclude<ExtArgs> | null
    /**
     * Filter which LaunchEvent to delete.
     */
    where: LaunchEventWhereUniqueInput
  }

  /**
   * LaunchEvent deleteMany
   */
  export type LaunchEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaunchEvents to delete
     */
    where?: LaunchEventWhereInput
    /**
     * Limit how many LaunchEvents to delete.
     */
    limit?: number
  }

  /**
   * LaunchEvent without action
   */
  export type LaunchEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchEvent
     */
    select?: LaunchEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchEvent
     */
    omit?: LaunchEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaunchEventInclude<ExtArgs> | null
  }


  /**
   * Model UploadAudit
   */

  export type AggregateUploadAudit = {
    _count: UploadAuditCountAggregateOutputType | null
    _avg: UploadAuditAvgAggregateOutputType | null
    _sum: UploadAuditSumAggregateOutputType | null
    _min: UploadAuditMinAggregateOutputType | null
    _max: UploadAuditMaxAggregateOutputType | null
  }

  export type UploadAuditAvgAggregateOutputType = {
    sizeBytes: number | null
  }

  export type UploadAuditSumAggregateOutputType = {
    sizeBytes: number | null
  }

  export type UploadAuditMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    uploader: string | null
    fileName: string | null
    sizeBytes: number | null
    mime: string | null
    cid: string | null
    status: string | null
    reason: string | null
  }

  export type UploadAuditMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    uploader: string | null
    fileName: string | null
    sizeBytes: number | null
    mime: string | null
    cid: string | null
    status: string | null
    reason: string | null
  }

  export type UploadAuditCountAggregateOutputType = {
    id: number
    createdAt: number
    uploader: number
    fileName: number
    sizeBytes: number
    mime: number
    cid: number
    status: number
    reason: number
    _all: number
  }


  export type UploadAuditAvgAggregateInputType = {
    sizeBytes?: true
  }

  export type UploadAuditSumAggregateInputType = {
    sizeBytes?: true
  }

  export type UploadAuditMinAggregateInputType = {
    id?: true
    createdAt?: true
    uploader?: true
    fileName?: true
    sizeBytes?: true
    mime?: true
    cid?: true
    status?: true
    reason?: true
  }

  export type UploadAuditMaxAggregateInputType = {
    id?: true
    createdAt?: true
    uploader?: true
    fileName?: true
    sizeBytes?: true
    mime?: true
    cid?: true
    status?: true
    reason?: true
  }

  export type UploadAuditCountAggregateInputType = {
    id?: true
    createdAt?: true
    uploader?: true
    fileName?: true
    sizeBytes?: true
    mime?: true
    cid?: true
    status?: true
    reason?: true
    _all?: true
  }

  export type UploadAuditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadAudit to aggregate.
     */
    where?: UploadAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadAudits to fetch.
     */
    orderBy?: UploadAuditOrderByWithRelationInput | UploadAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadAudits
    **/
    _count?: true | UploadAuditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadAuditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadAuditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadAuditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadAuditMaxAggregateInputType
  }

  export type GetUploadAuditAggregateType<T extends UploadAuditAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadAudit[P]>
      : GetScalarType<T[P], AggregateUploadAudit[P]>
  }




  export type UploadAuditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadAuditWhereInput
    orderBy?: UploadAuditOrderByWithAggregationInput | UploadAuditOrderByWithAggregationInput[]
    by: UploadAuditScalarFieldEnum[] | UploadAuditScalarFieldEnum
    having?: UploadAuditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadAuditCountAggregateInputType | true
    _avg?: UploadAuditAvgAggregateInputType
    _sum?: UploadAuditSumAggregateInputType
    _min?: UploadAuditMinAggregateInputType
    _max?: UploadAuditMaxAggregateInputType
  }

  export type UploadAuditGroupByOutputType = {
    id: string
    createdAt: Date
    uploader: string
    fileName: string
    sizeBytes: number
    mime: string
    cid: string | null
    status: string
    reason: string | null
    _count: UploadAuditCountAggregateOutputType | null
    _avg: UploadAuditAvgAggregateOutputType | null
    _sum: UploadAuditSumAggregateOutputType | null
    _min: UploadAuditMinAggregateOutputType | null
    _max: UploadAuditMaxAggregateOutputType | null
  }

  type GetUploadAuditGroupByPayload<T extends UploadAuditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadAuditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadAuditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadAuditGroupByOutputType[P]>
            : GetScalarType<T[P], UploadAuditGroupByOutputType[P]>
        }
      >
    >


  export type UploadAuditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    uploader?: boolean
    fileName?: boolean
    sizeBytes?: boolean
    mime?: boolean
    cid?: boolean
    status?: boolean
    reason?: boolean
  }, ExtArgs["result"]["uploadAudit"]>

  export type UploadAuditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    uploader?: boolean
    fileName?: boolean
    sizeBytes?: boolean
    mime?: boolean
    cid?: boolean
    status?: boolean
    reason?: boolean
  }, ExtArgs["result"]["uploadAudit"]>

  export type UploadAuditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    uploader?: boolean
    fileName?: boolean
    sizeBytes?: boolean
    mime?: boolean
    cid?: boolean
    status?: boolean
    reason?: boolean
  }, ExtArgs["result"]["uploadAudit"]>

  export type UploadAuditSelectScalar = {
    id?: boolean
    createdAt?: boolean
    uploader?: boolean
    fileName?: boolean
    sizeBytes?: boolean
    mime?: boolean
    cid?: boolean
    status?: boolean
    reason?: boolean
  }

  export type UploadAuditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "uploader" | "fileName" | "sizeBytes" | "mime" | "cid" | "status" | "reason", ExtArgs["result"]["uploadAudit"]>

  export type $UploadAuditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadAudit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      uploader: string
      fileName: string
      sizeBytes: number
      mime: string
      cid: string | null
      status: string
      reason: string | null
    }, ExtArgs["result"]["uploadAudit"]>
    composites: {}
  }

  type UploadAuditGetPayload<S extends boolean | null | undefined | UploadAuditDefaultArgs> = $Result.GetResult<Prisma.$UploadAuditPayload, S>

  type UploadAuditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadAuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadAuditCountAggregateInputType | true
    }

  export interface UploadAuditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadAudit'], meta: { name: 'UploadAudit' } }
    /**
     * Find zero or one UploadAudit that matches the filter.
     * @param {UploadAuditFindUniqueArgs} args - Arguments to find a UploadAudit
     * @example
     * // Get one UploadAudit
     * const uploadAudit = await prisma.uploadAudit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadAuditFindUniqueArgs>(args: SelectSubset<T, UploadAuditFindUniqueArgs<ExtArgs>>): Prisma__UploadAuditClient<$Result.GetResult<Prisma.$UploadAuditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UploadAudit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadAuditFindUniqueOrThrowArgs} args - Arguments to find a UploadAudit
     * @example
     * // Get one UploadAudit
     * const uploadAudit = await prisma.uploadAudit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadAuditFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadAuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadAuditClient<$Result.GetResult<Prisma.$UploadAuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadAudit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadAuditFindFirstArgs} args - Arguments to find a UploadAudit
     * @example
     * // Get one UploadAudit
     * const uploadAudit = await prisma.uploadAudit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadAuditFindFirstArgs>(args?: SelectSubset<T, UploadAuditFindFirstArgs<ExtArgs>>): Prisma__UploadAuditClient<$Result.GetResult<Prisma.$UploadAuditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadAudit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadAuditFindFirstOrThrowArgs} args - Arguments to find a UploadAudit
     * @example
     * // Get one UploadAudit
     * const uploadAudit = await prisma.uploadAudit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadAuditFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadAuditFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadAuditClient<$Result.GetResult<Prisma.$UploadAuditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UploadAudits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadAuditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadAudits
     * const uploadAudits = await prisma.uploadAudit.findMany()
     * 
     * // Get first 10 UploadAudits
     * const uploadAudits = await prisma.uploadAudit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadAuditWithIdOnly = await prisma.uploadAudit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadAuditFindManyArgs>(args?: SelectSubset<T, UploadAuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UploadAudit.
     * @param {UploadAuditCreateArgs} args - Arguments to create a UploadAudit.
     * @example
     * // Create one UploadAudit
     * const UploadAudit = await prisma.uploadAudit.create({
     *   data: {
     *     // ... data to create a UploadAudit
     *   }
     * })
     * 
     */
    create<T extends UploadAuditCreateArgs>(args: SelectSubset<T, UploadAuditCreateArgs<ExtArgs>>): Prisma__UploadAuditClient<$Result.GetResult<Prisma.$UploadAuditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UploadAudits.
     * @param {UploadAuditCreateManyArgs} args - Arguments to create many UploadAudits.
     * @example
     * // Create many UploadAudits
     * const uploadAudit = await prisma.uploadAudit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadAuditCreateManyArgs>(args?: SelectSubset<T, UploadAuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UploadAudits and returns the data saved in the database.
     * @param {UploadAuditCreateManyAndReturnArgs} args - Arguments to create many UploadAudits.
     * @example
     * // Create many UploadAudits
     * const uploadAudit = await prisma.uploadAudit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UploadAudits and only return the `id`
     * const uploadAuditWithIdOnly = await prisma.uploadAudit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadAuditCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadAuditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadAuditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UploadAudit.
     * @param {UploadAuditDeleteArgs} args - Arguments to delete one UploadAudit.
     * @example
     * // Delete one UploadAudit
     * const UploadAudit = await prisma.uploadAudit.delete({
     *   where: {
     *     // ... filter to delete one UploadAudit
     *   }
     * })
     * 
     */
    delete<T extends UploadAuditDeleteArgs>(args: SelectSubset<T, UploadAuditDeleteArgs<ExtArgs>>): Prisma__UploadAuditClient<$Result.GetResult<Prisma.$UploadAuditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UploadAudit.
     * @param {UploadAuditUpdateArgs} args - Arguments to update one UploadAudit.
     * @example
     * // Update one UploadAudit
     * const uploadAudit = await prisma.uploadAudit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadAuditUpdateArgs>(args: SelectSubset<T, UploadAuditUpdateArgs<ExtArgs>>): Prisma__UploadAuditClient<$Result.GetResult<Prisma.$UploadAuditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UploadAudits.
     * @param {UploadAuditDeleteManyArgs} args - Arguments to filter UploadAudits to delete.
     * @example
     * // Delete a few UploadAudits
     * const { count } = await prisma.uploadAudit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadAuditDeleteManyArgs>(args?: SelectSubset<T, UploadAuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadAudits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadAuditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadAudits
     * const uploadAudit = await prisma.uploadAudit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadAuditUpdateManyArgs>(args: SelectSubset<T, UploadAuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadAudits and returns the data updated in the database.
     * @param {UploadAuditUpdateManyAndReturnArgs} args - Arguments to update many UploadAudits.
     * @example
     * // Update many UploadAudits
     * const uploadAudit = await prisma.uploadAudit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UploadAudits and only return the `id`
     * const uploadAuditWithIdOnly = await prisma.uploadAudit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UploadAuditUpdateManyAndReturnArgs>(args: SelectSubset<T, UploadAuditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadAuditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UploadAudit.
     * @param {UploadAuditUpsertArgs} args - Arguments to update or create a UploadAudit.
     * @example
     * // Update or create a UploadAudit
     * const uploadAudit = await prisma.uploadAudit.upsert({
     *   create: {
     *     // ... data to create a UploadAudit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadAudit we want to update
     *   }
     * })
     */
    upsert<T extends UploadAuditUpsertArgs>(args: SelectSubset<T, UploadAuditUpsertArgs<ExtArgs>>): Prisma__UploadAuditClient<$Result.GetResult<Prisma.$UploadAuditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UploadAudits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadAuditCountArgs} args - Arguments to filter UploadAudits to count.
     * @example
     * // Count the number of UploadAudits
     * const count = await prisma.uploadAudit.count({
     *   where: {
     *     // ... the filter for the UploadAudits we want to count
     *   }
     * })
    **/
    count<T extends UploadAuditCountArgs>(
      args?: Subset<T, UploadAuditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadAuditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadAudit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadAuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadAuditAggregateArgs>(args: Subset<T, UploadAuditAggregateArgs>): Prisma.PrismaPromise<GetUploadAuditAggregateType<T>>

    /**
     * Group by UploadAudit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadAuditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UploadAuditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadAuditGroupByArgs['orderBy'] }
        : { orderBy?: UploadAuditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UploadAuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadAudit model
   */
  readonly fields: UploadAuditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadAudit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadAuditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UploadAudit model
   */
  interface UploadAuditFieldRefs {
    readonly id: FieldRef<"UploadAudit", 'String'>
    readonly createdAt: FieldRef<"UploadAudit", 'DateTime'>
    readonly uploader: FieldRef<"UploadAudit", 'String'>
    readonly fileName: FieldRef<"UploadAudit", 'String'>
    readonly sizeBytes: FieldRef<"UploadAudit", 'Int'>
    readonly mime: FieldRef<"UploadAudit", 'String'>
    readonly cid: FieldRef<"UploadAudit", 'String'>
    readonly status: FieldRef<"UploadAudit", 'String'>
    readonly reason: FieldRef<"UploadAudit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UploadAudit findUnique
   */
  export type UploadAuditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadAudit
     */
    select?: UploadAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadAudit
     */
    omit?: UploadAuditOmit<ExtArgs> | null
    /**
     * Filter, which UploadAudit to fetch.
     */
    where: UploadAuditWhereUniqueInput
  }

  /**
   * UploadAudit findUniqueOrThrow
   */
  export type UploadAuditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadAudit
     */
    select?: UploadAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadAudit
     */
    omit?: UploadAuditOmit<ExtArgs> | null
    /**
     * Filter, which UploadAudit to fetch.
     */
    where: UploadAuditWhereUniqueInput
  }

  /**
   * UploadAudit findFirst
   */
  export type UploadAuditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadAudit
     */
    select?: UploadAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadAudit
     */
    omit?: UploadAuditOmit<ExtArgs> | null
    /**
     * Filter, which UploadAudit to fetch.
     */
    where?: UploadAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadAudits to fetch.
     */
    orderBy?: UploadAuditOrderByWithRelationInput | UploadAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadAudits.
     */
    cursor?: UploadAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadAudits.
     */
    distinct?: UploadAuditScalarFieldEnum | UploadAuditScalarFieldEnum[]
  }

  /**
   * UploadAudit findFirstOrThrow
   */
  export type UploadAuditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadAudit
     */
    select?: UploadAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadAudit
     */
    omit?: UploadAuditOmit<ExtArgs> | null
    /**
     * Filter, which UploadAudit to fetch.
     */
    where?: UploadAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadAudits to fetch.
     */
    orderBy?: UploadAuditOrderByWithRelationInput | UploadAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadAudits.
     */
    cursor?: UploadAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadAudits.
     */
    distinct?: UploadAuditScalarFieldEnum | UploadAuditScalarFieldEnum[]
  }

  /**
   * UploadAudit findMany
   */
  export type UploadAuditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadAudit
     */
    select?: UploadAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadAudit
     */
    omit?: UploadAuditOmit<ExtArgs> | null
    /**
     * Filter, which UploadAudits to fetch.
     */
    where?: UploadAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadAudits to fetch.
     */
    orderBy?: UploadAuditOrderByWithRelationInput | UploadAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadAudits.
     */
    cursor?: UploadAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadAudits.
     */
    skip?: number
    distinct?: UploadAuditScalarFieldEnum | UploadAuditScalarFieldEnum[]
  }

  /**
   * UploadAudit create
   */
  export type UploadAuditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadAudit
     */
    select?: UploadAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadAudit
     */
    omit?: UploadAuditOmit<ExtArgs> | null
    /**
     * The data needed to create a UploadAudit.
     */
    data: XOR<UploadAuditCreateInput, UploadAuditUncheckedCreateInput>
  }

  /**
   * UploadAudit createMany
   */
  export type UploadAuditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadAudits.
     */
    data: UploadAuditCreateManyInput | UploadAuditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadAudit createManyAndReturn
   */
  export type UploadAuditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadAudit
     */
    select?: UploadAuditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadAudit
     */
    omit?: UploadAuditOmit<ExtArgs> | null
    /**
     * The data used to create many UploadAudits.
     */
    data: UploadAuditCreateManyInput | UploadAuditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadAudit update
   */
  export type UploadAuditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadAudit
     */
    select?: UploadAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadAudit
     */
    omit?: UploadAuditOmit<ExtArgs> | null
    /**
     * The data needed to update a UploadAudit.
     */
    data: XOR<UploadAuditUpdateInput, UploadAuditUncheckedUpdateInput>
    /**
     * Choose, which UploadAudit to update.
     */
    where: UploadAuditWhereUniqueInput
  }

  /**
   * UploadAudit updateMany
   */
  export type UploadAuditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadAudits.
     */
    data: XOR<UploadAuditUpdateManyMutationInput, UploadAuditUncheckedUpdateManyInput>
    /**
     * Filter which UploadAudits to update
     */
    where?: UploadAuditWhereInput
    /**
     * Limit how many UploadAudits to update.
     */
    limit?: number
  }

  /**
   * UploadAudit updateManyAndReturn
   */
  export type UploadAuditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadAudit
     */
    select?: UploadAuditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadAudit
     */
    omit?: UploadAuditOmit<ExtArgs> | null
    /**
     * The data used to update UploadAudits.
     */
    data: XOR<UploadAuditUpdateManyMutationInput, UploadAuditUncheckedUpdateManyInput>
    /**
     * Filter which UploadAudits to update
     */
    where?: UploadAuditWhereInput
    /**
     * Limit how many UploadAudits to update.
     */
    limit?: number
  }

  /**
   * UploadAudit upsert
   */
  export type UploadAuditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadAudit
     */
    select?: UploadAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadAudit
     */
    omit?: UploadAuditOmit<ExtArgs> | null
    /**
     * The filter to search for the UploadAudit to update in case it exists.
     */
    where: UploadAuditWhereUniqueInput
    /**
     * In case the UploadAudit found by the `where` argument doesn't exist, create a new UploadAudit with this data.
     */
    create: XOR<UploadAuditCreateInput, UploadAuditUncheckedCreateInput>
    /**
     * In case the UploadAudit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadAuditUpdateInput, UploadAuditUncheckedUpdateInput>
  }

  /**
   * UploadAudit delete
   */
  export type UploadAuditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadAudit
     */
    select?: UploadAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadAudit
     */
    omit?: UploadAuditOmit<ExtArgs> | null
    /**
     * Filter which UploadAudit to delete.
     */
    where: UploadAuditWhereUniqueInput
  }

  /**
   * UploadAudit deleteMany
   */
  export type UploadAuditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadAudits to delete
     */
    where?: UploadAuditWhereInput
    /**
     * Limit how many UploadAudits to delete.
     */
    limit?: number
  }

  /**
   * UploadAudit without action
   */
  export type UploadAuditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadAudit
     */
    select?: UploadAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadAudit
     */
    omit?: UploadAuditOmit<ExtArgs> | null
  }


  /**
   * Model RelayOfficialActivity
   */

  export type AggregateRelayOfficialActivity = {
    _count: RelayOfficialActivityCountAggregateOutputType | null
    _avg: RelayOfficialActivityAvgAggregateOutputType | null
    _sum: RelayOfficialActivitySumAggregateOutputType | null
    _min: RelayOfficialActivityMinAggregateOutputType | null
    _max: RelayOfficialActivityMaxAggregateOutputType | null
  }

  export type RelayOfficialActivityAvgAggregateOutputType = {
    slot: number | null
    inputDecimals: number | null
    outputDecimals: number | null
  }

  export type RelayOfficialActivitySumAggregateOutputType = {
    slot: number | null
    inputDecimals: number | null
    outputDecimals: number | null
  }

  export type RelayOfficialActivityMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    signature: string | null
    entryKey: string | null
    type: string | null
    status: string | null
    slot: number | null
    blockTime: Date | null
    walletRole: string | null
    sender: string | null
    recipient: string | null
    inputAmount: string | null
    inputAsset: string | null
    inputDecimals: number | null
    outputAmount: string | null
    outputAsset: string | null
    outputDecimals: number | null
    burnMint: string | null
    burnVerified: boolean | null
    programId: string | null
    network: string | null
    onChainVerified: boolean | null
    verifiedAt: Date | null
  }

  export type RelayOfficialActivityMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    signature: string | null
    entryKey: string | null
    type: string | null
    status: string | null
    slot: number | null
    blockTime: Date | null
    walletRole: string | null
    sender: string | null
    recipient: string | null
    inputAmount: string | null
    inputAsset: string | null
    inputDecimals: number | null
    outputAmount: string | null
    outputAsset: string | null
    outputDecimals: number | null
    burnMint: string | null
    burnVerified: boolean | null
    programId: string | null
    network: string | null
    onChainVerified: boolean | null
    verifiedAt: Date | null
  }

  export type RelayOfficialActivityCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    signature: number
    entryKey: number
    type: number
    status: number
    slot: number
    blockTime: number
    walletRole: number
    sender: number
    recipient: number
    inputAmount: number
    inputAsset: number
    inputDecimals: number
    outputAmount: number
    outputAsset: number
    outputDecimals: number
    burnMint: number
    burnVerified: number
    programId: number
    network: number
    detail: number
    onChainVerified: number
    verifiedAt: number
    _all: number
  }


  export type RelayOfficialActivityAvgAggregateInputType = {
    slot?: true
    inputDecimals?: true
    outputDecimals?: true
  }

  export type RelayOfficialActivitySumAggregateInputType = {
    slot?: true
    inputDecimals?: true
    outputDecimals?: true
  }

  export type RelayOfficialActivityMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    signature?: true
    entryKey?: true
    type?: true
    status?: true
    slot?: true
    blockTime?: true
    walletRole?: true
    sender?: true
    recipient?: true
    inputAmount?: true
    inputAsset?: true
    inputDecimals?: true
    outputAmount?: true
    outputAsset?: true
    outputDecimals?: true
    burnMint?: true
    burnVerified?: true
    programId?: true
    network?: true
    onChainVerified?: true
    verifiedAt?: true
  }

  export type RelayOfficialActivityMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    signature?: true
    entryKey?: true
    type?: true
    status?: true
    slot?: true
    blockTime?: true
    walletRole?: true
    sender?: true
    recipient?: true
    inputAmount?: true
    inputAsset?: true
    inputDecimals?: true
    outputAmount?: true
    outputAsset?: true
    outputDecimals?: true
    burnMint?: true
    burnVerified?: true
    programId?: true
    network?: true
    onChainVerified?: true
    verifiedAt?: true
  }

  export type RelayOfficialActivityCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    signature?: true
    entryKey?: true
    type?: true
    status?: true
    slot?: true
    blockTime?: true
    walletRole?: true
    sender?: true
    recipient?: true
    inputAmount?: true
    inputAsset?: true
    inputDecimals?: true
    outputAmount?: true
    outputAsset?: true
    outputDecimals?: true
    burnMint?: true
    burnVerified?: true
    programId?: true
    network?: true
    detail?: true
    onChainVerified?: true
    verifiedAt?: true
    _all?: true
  }

  export type RelayOfficialActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelayOfficialActivity to aggregate.
     */
    where?: RelayOfficialActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayOfficialActivities to fetch.
     */
    orderBy?: RelayOfficialActivityOrderByWithRelationInput | RelayOfficialActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelayOfficialActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayOfficialActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayOfficialActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelayOfficialActivities
    **/
    _count?: true | RelayOfficialActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelayOfficialActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelayOfficialActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelayOfficialActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelayOfficialActivityMaxAggregateInputType
  }

  export type GetRelayOfficialActivityAggregateType<T extends RelayOfficialActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateRelayOfficialActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelayOfficialActivity[P]>
      : GetScalarType<T[P], AggregateRelayOfficialActivity[P]>
  }




  export type RelayOfficialActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelayOfficialActivityWhereInput
    orderBy?: RelayOfficialActivityOrderByWithAggregationInput | RelayOfficialActivityOrderByWithAggregationInput[]
    by: RelayOfficialActivityScalarFieldEnum[] | RelayOfficialActivityScalarFieldEnum
    having?: RelayOfficialActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelayOfficialActivityCountAggregateInputType | true
    _avg?: RelayOfficialActivityAvgAggregateInputType
    _sum?: RelayOfficialActivitySumAggregateInputType
    _min?: RelayOfficialActivityMinAggregateInputType
    _max?: RelayOfficialActivityMaxAggregateInputType
  }

  export type RelayOfficialActivityGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    signature: string
    entryKey: string
    type: string
    status: string
    slot: number | null
    blockTime: Date | null
    walletRole: string | null
    sender: string | null
    recipient: string | null
    inputAmount: string | null
    inputAsset: string | null
    inputDecimals: number | null
    outputAmount: string | null
    outputAsset: string | null
    outputDecimals: number | null
    burnMint: string | null
    burnVerified: boolean
    programId: string | null
    network: string
    detail: JsonValue | null
    onChainVerified: boolean
    verifiedAt: Date | null
    _count: RelayOfficialActivityCountAggregateOutputType | null
    _avg: RelayOfficialActivityAvgAggregateOutputType | null
    _sum: RelayOfficialActivitySumAggregateOutputType | null
    _min: RelayOfficialActivityMinAggregateOutputType | null
    _max: RelayOfficialActivityMaxAggregateOutputType | null
  }

  type GetRelayOfficialActivityGroupByPayload<T extends RelayOfficialActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelayOfficialActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelayOfficialActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelayOfficialActivityGroupByOutputType[P]>
            : GetScalarType<T[P], RelayOfficialActivityGroupByOutputType[P]>
        }
      >
    >


  export type RelayOfficialActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    signature?: boolean
    entryKey?: boolean
    type?: boolean
    status?: boolean
    slot?: boolean
    blockTime?: boolean
    walletRole?: boolean
    sender?: boolean
    recipient?: boolean
    inputAmount?: boolean
    inputAsset?: boolean
    inputDecimals?: boolean
    outputAmount?: boolean
    outputAsset?: boolean
    outputDecimals?: boolean
    burnMint?: boolean
    burnVerified?: boolean
    programId?: boolean
    network?: boolean
    detail?: boolean
    onChainVerified?: boolean
    verifiedAt?: boolean
  }, ExtArgs["result"]["relayOfficialActivity"]>

  export type RelayOfficialActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    signature?: boolean
    entryKey?: boolean
    type?: boolean
    status?: boolean
    slot?: boolean
    blockTime?: boolean
    walletRole?: boolean
    sender?: boolean
    recipient?: boolean
    inputAmount?: boolean
    inputAsset?: boolean
    inputDecimals?: boolean
    outputAmount?: boolean
    outputAsset?: boolean
    outputDecimals?: boolean
    burnMint?: boolean
    burnVerified?: boolean
    programId?: boolean
    network?: boolean
    detail?: boolean
    onChainVerified?: boolean
    verifiedAt?: boolean
  }, ExtArgs["result"]["relayOfficialActivity"]>

  export type RelayOfficialActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    signature?: boolean
    entryKey?: boolean
    type?: boolean
    status?: boolean
    slot?: boolean
    blockTime?: boolean
    walletRole?: boolean
    sender?: boolean
    recipient?: boolean
    inputAmount?: boolean
    inputAsset?: boolean
    inputDecimals?: boolean
    outputAmount?: boolean
    outputAsset?: boolean
    outputDecimals?: boolean
    burnMint?: boolean
    burnVerified?: boolean
    programId?: boolean
    network?: boolean
    detail?: boolean
    onChainVerified?: boolean
    verifiedAt?: boolean
  }, ExtArgs["result"]["relayOfficialActivity"]>

  export type RelayOfficialActivitySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    signature?: boolean
    entryKey?: boolean
    type?: boolean
    status?: boolean
    slot?: boolean
    blockTime?: boolean
    walletRole?: boolean
    sender?: boolean
    recipient?: boolean
    inputAmount?: boolean
    inputAsset?: boolean
    inputDecimals?: boolean
    outputAmount?: boolean
    outputAsset?: boolean
    outputDecimals?: boolean
    burnMint?: boolean
    burnVerified?: boolean
    programId?: boolean
    network?: boolean
    detail?: boolean
    onChainVerified?: boolean
    verifiedAt?: boolean
  }

  export type RelayOfficialActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "signature" | "entryKey" | "type" | "status" | "slot" | "blockTime" | "walletRole" | "sender" | "recipient" | "inputAmount" | "inputAsset" | "inputDecimals" | "outputAmount" | "outputAsset" | "outputDecimals" | "burnMint" | "burnVerified" | "programId" | "network" | "detail" | "onChainVerified" | "verifiedAt", ExtArgs["result"]["relayOfficialActivity"]>

  export type $RelayOfficialActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelayOfficialActivity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      signature: string
      entryKey: string
      type: string
      status: string
      slot: number | null
      blockTime: Date | null
      walletRole: string | null
      sender: string | null
      recipient: string | null
      inputAmount: string | null
      inputAsset: string | null
      inputDecimals: number | null
      outputAmount: string | null
      outputAsset: string | null
      outputDecimals: number | null
      burnMint: string | null
      burnVerified: boolean
      programId: string | null
      network: string
      detail: Prisma.JsonValue | null
      onChainVerified: boolean
      verifiedAt: Date | null
    }, ExtArgs["result"]["relayOfficialActivity"]>
    composites: {}
  }

  type RelayOfficialActivityGetPayload<S extends boolean | null | undefined | RelayOfficialActivityDefaultArgs> = $Result.GetResult<Prisma.$RelayOfficialActivityPayload, S>

  type RelayOfficialActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelayOfficialActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelayOfficialActivityCountAggregateInputType | true
    }

  export interface RelayOfficialActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelayOfficialActivity'], meta: { name: 'RelayOfficialActivity' } }
    /**
     * Find zero or one RelayOfficialActivity that matches the filter.
     * @param {RelayOfficialActivityFindUniqueArgs} args - Arguments to find a RelayOfficialActivity
     * @example
     * // Get one RelayOfficialActivity
     * const relayOfficialActivity = await prisma.relayOfficialActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelayOfficialActivityFindUniqueArgs>(args: SelectSubset<T, RelayOfficialActivityFindUniqueArgs<ExtArgs>>): Prisma__RelayOfficialActivityClient<$Result.GetResult<Prisma.$RelayOfficialActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RelayOfficialActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelayOfficialActivityFindUniqueOrThrowArgs} args - Arguments to find a RelayOfficialActivity
     * @example
     * // Get one RelayOfficialActivity
     * const relayOfficialActivity = await prisma.relayOfficialActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelayOfficialActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, RelayOfficialActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelayOfficialActivityClient<$Result.GetResult<Prisma.$RelayOfficialActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelayOfficialActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialActivityFindFirstArgs} args - Arguments to find a RelayOfficialActivity
     * @example
     * // Get one RelayOfficialActivity
     * const relayOfficialActivity = await prisma.relayOfficialActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelayOfficialActivityFindFirstArgs>(args?: SelectSubset<T, RelayOfficialActivityFindFirstArgs<ExtArgs>>): Prisma__RelayOfficialActivityClient<$Result.GetResult<Prisma.$RelayOfficialActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelayOfficialActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialActivityFindFirstOrThrowArgs} args - Arguments to find a RelayOfficialActivity
     * @example
     * // Get one RelayOfficialActivity
     * const relayOfficialActivity = await prisma.relayOfficialActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelayOfficialActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, RelayOfficialActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelayOfficialActivityClient<$Result.GetResult<Prisma.$RelayOfficialActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RelayOfficialActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelayOfficialActivities
     * const relayOfficialActivities = await prisma.relayOfficialActivity.findMany()
     * 
     * // Get first 10 RelayOfficialActivities
     * const relayOfficialActivities = await prisma.relayOfficialActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relayOfficialActivityWithIdOnly = await prisma.relayOfficialActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelayOfficialActivityFindManyArgs>(args?: SelectSubset<T, RelayOfficialActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelayOfficialActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RelayOfficialActivity.
     * @param {RelayOfficialActivityCreateArgs} args - Arguments to create a RelayOfficialActivity.
     * @example
     * // Create one RelayOfficialActivity
     * const RelayOfficialActivity = await prisma.relayOfficialActivity.create({
     *   data: {
     *     // ... data to create a RelayOfficialActivity
     *   }
     * })
     * 
     */
    create<T extends RelayOfficialActivityCreateArgs>(args: SelectSubset<T, RelayOfficialActivityCreateArgs<ExtArgs>>): Prisma__RelayOfficialActivityClient<$Result.GetResult<Prisma.$RelayOfficialActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RelayOfficialActivities.
     * @param {RelayOfficialActivityCreateManyArgs} args - Arguments to create many RelayOfficialActivities.
     * @example
     * // Create many RelayOfficialActivities
     * const relayOfficialActivity = await prisma.relayOfficialActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelayOfficialActivityCreateManyArgs>(args?: SelectSubset<T, RelayOfficialActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RelayOfficialActivities and returns the data saved in the database.
     * @param {RelayOfficialActivityCreateManyAndReturnArgs} args - Arguments to create many RelayOfficialActivities.
     * @example
     * // Create many RelayOfficialActivities
     * const relayOfficialActivity = await prisma.relayOfficialActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RelayOfficialActivities and only return the `id`
     * const relayOfficialActivityWithIdOnly = await prisma.relayOfficialActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelayOfficialActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, RelayOfficialActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelayOfficialActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RelayOfficialActivity.
     * @param {RelayOfficialActivityDeleteArgs} args - Arguments to delete one RelayOfficialActivity.
     * @example
     * // Delete one RelayOfficialActivity
     * const RelayOfficialActivity = await prisma.relayOfficialActivity.delete({
     *   where: {
     *     // ... filter to delete one RelayOfficialActivity
     *   }
     * })
     * 
     */
    delete<T extends RelayOfficialActivityDeleteArgs>(args: SelectSubset<T, RelayOfficialActivityDeleteArgs<ExtArgs>>): Prisma__RelayOfficialActivityClient<$Result.GetResult<Prisma.$RelayOfficialActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RelayOfficialActivity.
     * @param {RelayOfficialActivityUpdateArgs} args - Arguments to update one RelayOfficialActivity.
     * @example
     * // Update one RelayOfficialActivity
     * const relayOfficialActivity = await prisma.relayOfficialActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelayOfficialActivityUpdateArgs>(args: SelectSubset<T, RelayOfficialActivityUpdateArgs<ExtArgs>>): Prisma__RelayOfficialActivityClient<$Result.GetResult<Prisma.$RelayOfficialActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RelayOfficialActivities.
     * @param {RelayOfficialActivityDeleteManyArgs} args - Arguments to filter RelayOfficialActivities to delete.
     * @example
     * // Delete a few RelayOfficialActivities
     * const { count } = await prisma.relayOfficialActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelayOfficialActivityDeleteManyArgs>(args?: SelectSubset<T, RelayOfficialActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelayOfficialActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelayOfficialActivities
     * const relayOfficialActivity = await prisma.relayOfficialActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelayOfficialActivityUpdateManyArgs>(args: SelectSubset<T, RelayOfficialActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelayOfficialActivities and returns the data updated in the database.
     * @param {RelayOfficialActivityUpdateManyAndReturnArgs} args - Arguments to update many RelayOfficialActivities.
     * @example
     * // Update many RelayOfficialActivities
     * const relayOfficialActivity = await prisma.relayOfficialActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RelayOfficialActivities and only return the `id`
     * const relayOfficialActivityWithIdOnly = await prisma.relayOfficialActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RelayOfficialActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, RelayOfficialActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelayOfficialActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RelayOfficialActivity.
     * @param {RelayOfficialActivityUpsertArgs} args - Arguments to update or create a RelayOfficialActivity.
     * @example
     * // Update or create a RelayOfficialActivity
     * const relayOfficialActivity = await prisma.relayOfficialActivity.upsert({
     *   create: {
     *     // ... data to create a RelayOfficialActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelayOfficialActivity we want to update
     *   }
     * })
     */
    upsert<T extends RelayOfficialActivityUpsertArgs>(args: SelectSubset<T, RelayOfficialActivityUpsertArgs<ExtArgs>>): Prisma__RelayOfficialActivityClient<$Result.GetResult<Prisma.$RelayOfficialActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RelayOfficialActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialActivityCountArgs} args - Arguments to filter RelayOfficialActivities to count.
     * @example
     * // Count the number of RelayOfficialActivities
     * const count = await prisma.relayOfficialActivity.count({
     *   where: {
     *     // ... the filter for the RelayOfficialActivities we want to count
     *   }
     * })
    **/
    count<T extends RelayOfficialActivityCountArgs>(
      args?: Subset<T, RelayOfficialActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelayOfficialActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelayOfficialActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelayOfficialActivityAggregateArgs>(args: Subset<T, RelayOfficialActivityAggregateArgs>): Prisma.PrismaPromise<GetRelayOfficialActivityAggregateType<T>>

    /**
     * Group by RelayOfficialActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelayOfficialActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelayOfficialActivityGroupByArgs['orderBy'] }
        : { orderBy?: RelayOfficialActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelayOfficialActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelayOfficialActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelayOfficialActivity model
   */
  readonly fields: RelayOfficialActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelayOfficialActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelayOfficialActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RelayOfficialActivity model
   */
  interface RelayOfficialActivityFieldRefs {
    readonly id: FieldRef<"RelayOfficialActivity", 'String'>
    readonly createdAt: FieldRef<"RelayOfficialActivity", 'DateTime'>
    readonly updatedAt: FieldRef<"RelayOfficialActivity", 'DateTime'>
    readonly signature: FieldRef<"RelayOfficialActivity", 'String'>
    readonly entryKey: FieldRef<"RelayOfficialActivity", 'String'>
    readonly type: FieldRef<"RelayOfficialActivity", 'String'>
    readonly status: FieldRef<"RelayOfficialActivity", 'String'>
    readonly slot: FieldRef<"RelayOfficialActivity", 'Int'>
    readonly blockTime: FieldRef<"RelayOfficialActivity", 'DateTime'>
    readonly walletRole: FieldRef<"RelayOfficialActivity", 'String'>
    readonly sender: FieldRef<"RelayOfficialActivity", 'String'>
    readonly recipient: FieldRef<"RelayOfficialActivity", 'String'>
    readonly inputAmount: FieldRef<"RelayOfficialActivity", 'String'>
    readonly inputAsset: FieldRef<"RelayOfficialActivity", 'String'>
    readonly inputDecimals: FieldRef<"RelayOfficialActivity", 'Int'>
    readonly outputAmount: FieldRef<"RelayOfficialActivity", 'String'>
    readonly outputAsset: FieldRef<"RelayOfficialActivity", 'String'>
    readonly outputDecimals: FieldRef<"RelayOfficialActivity", 'Int'>
    readonly burnMint: FieldRef<"RelayOfficialActivity", 'String'>
    readonly burnVerified: FieldRef<"RelayOfficialActivity", 'Boolean'>
    readonly programId: FieldRef<"RelayOfficialActivity", 'String'>
    readonly network: FieldRef<"RelayOfficialActivity", 'String'>
    readonly detail: FieldRef<"RelayOfficialActivity", 'Json'>
    readonly onChainVerified: FieldRef<"RelayOfficialActivity", 'Boolean'>
    readonly verifiedAt: FieldRef<"RelayOfficialActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RelayOfficialActivity findUnique
   */
  export type RelayOfficialActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialActivity
     */
    select?: RelayOfficialActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialActivity
     */
    omit?: RelayOfficialActivityOmit<ExtArgs> | null
    /**
     * Filter, which RelayOfficialActivity to fetch.
     */
    where: RelayOfficialActivityWhereUniqueInput
  }

  /**
   * RelayOfficialActivity findUniqueOrThrow
   */
  export type RelayOfficialActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialActivity
     */
    select?: RelayOfficialActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialActivity
     */
    omit?: RelayOfficialActivityOmit<ExtArgs> | null
    /**
     * Filter, which RelayOfficialActivity to fetch.
     */
    where: RelayOfficialActivityWhereUniqueInput
  }

  /**
   * RelayOfficialActivity findFirst
   */
  export type RelayOfficialActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialActivity
     */
    select?: RelayOfficialActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialActivity
     */
    omit?: RelayOfficialActivityOmit<ExtArgs> | null
    /**
     * Filter, which RelayOfficialActivity to fetch.
     */
    where?: RelayOfficialActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayOfficialActivities to fetch.
     */
    orderBy?: RelayOfficialActivityOrderByWithRelationInput | RelayOfficialActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelayOfficialActivities.
     */
    cursor?: RelayOfficialActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayOfficialActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayOfficialActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelayOfficialActivities.
     */
    distinct?: RelayOfficialActivityScalarFieldEnum | RelayOfficialActivityScalarFieldEnum[]
  }

  /**
   * RelayOfficialActivity findFirstOrThrow
   */
  export type RelayOfficialActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialActivity
     */
    select?: RelayOfficialActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialActivity
     */
    omit?: RelayOfficialActivityOmit<ExtArgs> | null
    /**
     * Filter, which RelayOfficialActivity to fetch.
     */
    where?: RelayOfficialActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayOfficialActivities to fetch.
     */
    orderBy?: RelayOfficialActivityOrderByWithRelationInput | RelayOfficialActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelayOfficialActivities.
     */
    cursor?: RelayOfficialActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayOfficialActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayOfficialActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelayOfficialActivities.
     */
    distinct?: RelayOfficialActivityScalarFieldEnum | RelayOfficialActivityScalarFieldEnum[]
  }

  /**
   * RelayOfficialActivity findMany
   */
  export type RelayOfficialActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialActivity
     */
    select?: RelayOfficialActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialActivity
     */
    omit?: RelayOfficialActivityOmit<ExtArgs> | null
    /**
     * Filter, which RelayOfficialActivities to fetch.
     */
    where?: RelayOfficialActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayOfficialActivities to fetch.
     */
    orderBy?: RelayOfficialActivityOrderByWithRelationInput | RelayOfficialActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelayOfficialActivities.
     */
    cursor?: RelayOfficialActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayOfficialActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayOfficialActivities.
     */
    skip?: number
    distinct?: RelayOfficialActivityScalarFieldEnum | RelayOfficialActivityScalarFieldEnum[]
  }

  /**
   * RelayOfficialActivity create
   */
  export type RelayOfficialActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialActivity
     */
    select?: RelayOfficialActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialActivity
     */
    omit?: RelayOfficialActivityOmit<ExtArgs> | null
    /**
     * The data needed to create a RelayOfficialActivity.
     */
    data: XOR<RelayOfficialActivityCreateInput, RelayOfficialActivityUncheckedCreateInput>
  }

  /**
   * RelayOfficialActivity createMany
   */
  export type RelayOfficialActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelayOfficialActivities.
     */
    data: RelayOfficialActivityCreateManyInput | RelayOfficialActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelayOfficialActivity createManyAndReturn
   */
  export type RelayOfficialActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialActivity
     */
    select?: RelayOfficialActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialActivity
     */
    omit?: RelayOfficialActivityOmit<ExtArgs> | null
    /**
     * The data used to create many RelayOfficialActivities.
     */
    data: RelayOfficialActivityCreateManyInput | RelayOfficialActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelayOfficialActivity update
   */
  export type RelayOfficialActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialActivity
     */
    select?: RelayOfficialActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialActivity
     */
    omit?: RelayOfficialActivityOmit<ExtArgs> | null
    /**
     * The data needed to update a RelayOfficialActivity.
     */
    data: XOR<RelayOfficialActivityUpdateInput, RelayOfficialActivityUncheckedUpdateInput>
    /**
     * Choose, which RelayOfficialActivity to update.
     */
    where: RelayOfficialActivityWhereUniqueInput
  }

  /**
   * RelayOfficialActivity updateMany
   */
  export type RelayOfficialActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelayOfficialActivities.
     */
    data: XOR<RelayOfficialActivityUpdateManyMutationInput, RelayOfficialActivityUncheckedUpdateManyInput>
    /**
     * Filter which RelayOfficialActivities to update
     */
    where?: RelayOfficialActivityWhereInput
    /**
     * Limit how many RelayOfficialActivities to update.
     */
    limit?: number
  }

  /**
   * RelayOfficialActivity updateManyAndReturn
   */
  export type RelayOfficialActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialActivity
     */
    select?: RelayOfficialActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialActivity
     */
    omit?: RelayOfficialActivityOmit<ExtArgs> | null
    /**
     * The data used to update RelayOfficialActivities.
     */
    data: XOR<RelayOfficialActivityUpdateManyMutationInput, RelayOfficialActivityUncheckedUpdateManyInput>
    /**
     * Filter which RelayOfficialActivities to update
     */
    where?: RelayOfficialActivityWhereInput
    /**
     * Limit how many RelayOfficialActivities to update.
     */
    limit?: number
  }

  /**
   * RelayOfficialActivity upsert
   */
  export type RelayOfficialActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialActivity
     */
    select?: RelayOfficialActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialActivity
     */
    omit?: RelayOfficialActivityOmit<ExtArgs> | null
    /**
     * The filter to search for the RelayOfficialActivity to update in case it exists.
     */
    where: RelayOfficialActivityWhereUniqueInput
    /**
     * In case the RelayOfficialActivity found by the `where` argument doesn't exist, create a new RelayOfficialActivity with this data.
     */
    create: XOR<RelayOfficialActivityCreateInput, RelayOfficialActivityUncheckedCreateInput>
    /**
     * In case the RelayOfficialActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelayOfficialActivityUpdateInput, RelayOfficialActivityUncheckedUpdateInput>
  }

  /**
   * RelayOfficialActivity delete
   */
  export type RelayOfficialActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialActivity
     */
    select?: RelayOfficialActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialActivity
     */
    omit?: RelayOfficialActivityOmit<ExtArgs> | null
    /**
     * Filter which RelayOfficialActivity to delete.
     */
    where: RelayOfficialActivityWhereUniqueInput
  }

  /**
   * RelayOfficialActivity deleteMany
   */
  export type RelayOfficialActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelayOfficialActivities to delete
     */
    where?: RelayOfficialActivityWhereInput
    /**
     * Limit how many RelayOfficialActivities to delete.
     */
    limit?: number
  }

  /**
   * RelayOfficialActivity without action
   */
  export type RelayOfficialActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialActivity
     */
    select?: RelayOfficialActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialActivity
     */
    omit?: RelayOfficialActivityOmit<ExtArgs> | null
  }


  /**
   * Model RelayOfficialIndexState
   */

  export type AggregateRelayOfficialIndexState = {
    _count: RelayOfficialIndexStateCountAggregateOutputType | null
    _min: RelayOfficialIndexStateMinAggregateOutputType | null
    _max: RelayOfficialIndexStateMaxAggregateOutputType | null
  }

  export type RelayOfficialIndexStateMinAggregateOutputType = {
    id: string | null
    key: string | null
    lastRunAt: Date | null
    lastStatus: string | null
    lastError: string | null
    lastSignature: string | null
    lastReconciledAt: Date | null
  }

  export type RelayOfficialIndexStateMaxAggregateOutputType = {
    id: string | null
    key: string | null
    lastRunAt: Date | null
    lastStatus: string | null
    lastError: string | null
    lastSignature: string | null
    lastReconciledAt: Date | null
  }

  export type RelayOfficialIndexStateCountAggregateOutputType = {
    id: number
    key: number
    lastRunAt: number
    lastStatus: number
    lastError: number
    lastSignature: number
    lastReconciledAt: number
    _all: number
  }


  export type RelayOfficialIndexStateMinAggregateInputType = {
    id?: true
    key?: true
    lastRunAt?: true
    lastStatus?: true
    lastError?: true
    lastSignature?: true
    lastReconciledAt?: true
  }

  export type RelayOfficialIndexStateMaxAggregateInputType = {
    id?: true
    key?: true
    lastRunAt?: true
    lastStatus?: true
    lastError?: true
    lastSignature?: true
    lastReconciledAt?: true
  }

  export type RelayOfficialIndexStateCountAggregateInputType = {
    id?: true
    key?: true
    lastRunAt?: true
    lastStatus?: true
    lastError?: true
    lastSignature?: true
    lastReconciledAt?: true
    _all?: true
  }

  export type RelayOfficialIndexStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelayOfficialIndexState to aggregate.
     */
    where?: RelayOfficialIndexStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayOfficialIndexStates to fetch.
     */
    orderBy?: RelayOfficialIndexStateOrderByWithRelationInput | RelayOfficialIndexStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelayOfficialIndexStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayOfficialIndexStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayOfficialIndexStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelayOfficialIndexStates
    **/
    _count?: true | RelayOfficialIndexStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelayOfficialIndexStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelayOfficialIndexStateMaxAggregateInputType
  }

  export type GetRelayOfficialIndexStateAggregateType<T extends RelayOfficialIndexStateAggregateArgs> = {
        [P in keyof T & keyof AggregateRelayOfficialIndexState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelayOfficialIndexState[P]>
      : GetScalarType<T[P], AggregateRelayOfficialIndexState[P]>
  }




  export type RelayOfficialIndexStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelayOfficialIndexStateWhereInput
    orderBy?: RelayOfficialIndexStateOrderByWithAggregationInput | RelayOfficialIndexStateOrderByWithAggregationInput[]
    by: RelayOfficialIndexStateScalarFieldEnum[] | RelayOfficialIndexStateScalarFieldEnum
    having?: RelayOfficialIndexStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelayOfficialIndexStateCountAggregateInputType | true
    _min?: RelayOfficialIndexStateMinAggregateInputType
    _max?: RelayOfficialIndexStateMaxAggregateInputType
  }

  export type RelayOfficialIndexStateGroupByOutputType = {
    id: string
    key: string
    lastRunAt: Date | null
    lastStatus: string | null
    lastError: string | null
    lastSignature: string | null
    lastReconciledAt: Date | null
    _count: RelayOfficialIndexStateCountAggregateOutputType | null
    _min: RelayOfficialIndexStateMinAggregateOutputType | null
    _max: RelayOfficialIndexStateMaxAggregateOutputType | null
  }

  type GetRelayOfficialIndexStateGroupByPayload<T extends RelayOfficialIndexStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelayOfficialIndexStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelayOfficialIndexStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelayOfficialIndexStateGroupByOutputType[P]>
            : GetScalarType<T[P], RelayOfficialIndexStateGroupByOutputType[P]>
        }
      >
    >


  export type RelayOfficialIndexStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    lastRunAt?: boolean
    lastStatus?: boolean
    lastError?: boolean
    lastSignature?: boolean
    lastReconciledAt?: boolean
  }, ExtArgs["result"]["relayOfficialIndexState"]>

  export type RelayOfficialIndexStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    lastRunAt?: boolean
    lastStatus?: boolean
    lastError?: boolean
    lastSignature?: boolean
    lastReconciledAt?: boolean
  }, ExtArgs["result"]["relayOfficialIndexState"]>

  export type RelayOfficialIndexStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    lastRunAt?: boolean
    lastStatus?: boolean
    lastError?: boolean
    lastSignature?: boolean
    lastReconciledAt?: boolean
  }, ExtArgs["result"]["relayOfficialIndexState"]>

  export type RelayOfficialIndexStateSelectScalar = {
    id?: boolean
    key?: boolean
    lastRunAt?: boolean
    lastStatus?: boolean
    lastError?: boolean
    lastSignature?: boolean
    lastReconciledAt?: boolean
  }

  export type RelayOfficialIndexStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "lastRunAt" | "lastStatus" | "lastError" | "lastSignature" | "lastReconciledAt", ExtArgs["result"]["relayOfficialIndexState"]>

  export type $RelayOfficialIndexStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelayOfficialIndexState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      lastRunAt: Date | null
      lastStatus: string | null
      lastError: string | null
      lastSignature: string | null
      lastReconciledAt: Date | null
    }, ExtArgs["result"]["relayOfficialIndexState"]>
    composites: {}
  }

  type RelayOfficialIndexStateGetPayload<S extends boolean | null | undefined | RelayOfficialIndexStateDefaultArgs> = $Result.GetResult<Prisma.$RelayOfficialIndexStatePayload, S>

  type RelayOfficialIndexStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelayOfficialIndexStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelayOfficialIndexStateCountAggregateInputType | true
    }

  export interface RelayOfficialIndexStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelayOfficialIndexState'], meta: { name: 'RelayOfficialIndexState' } }
    /**
     * Find zero or one RelayOfficialIndexState that matches the filter.
     * @param {RelayOfficialIndexStateFindUniqueArgs} args - Arguments to find a RelayOfficialIndexState
     * @example
     * // Get one RelayOfficialIndexState
     * const relayOfficialIndexState = await prisma.relayOfficialIndexState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelayOfficialIndexStateFindUniqueArgs>(args: SelectSubset<T, RelayOfficialIndexStateFindUniqueArgs<ExtArgs>>): Prisma__RelayOfficialIndexStateClient<$Result.GetResult<Prisma.$RelayOfficialIndexStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RelayOfficialIndexState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelayOfficialIndexStateFindUniqueOrThrowArgs} args - Arguments to find a RelayOfficialIndexState
     * @example
     * // Get one RelayOfficialIndexState
     * const relayOfficialIndexState = await prisma.relayOfficialIndexState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelayOfficialIndexStateFindUniqueOrThrowArgs>(args: SelectSubset<T, RelayOfficialIndexStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelayOfficialIndexStateClient<$Result.GetResult<Prisma.$RelayOfficialIndexStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelayOfficialIndexState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialIndexStateFindFirstArgs} args - Arguments to find a RelayOfficialIndexState
     * @example
     * // Get one RelayOfficialIndexState
     * const relayOfficialIndexState = await prisma.relayOfficialIndexState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelayOfficialIndexStateFindFirstArgs>(args?: SelectSubset<T, RelayOfficialIndexStateFindFirstArgs<ExtArgs>>): Prisma__RelayOfficialIndexStateClient<$Result.GetResult<Prisma.$RelayOfficialIndexStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelayOfficialIndexState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialIndexStateFindFirstOrThrowArgs} args - Arguments to find a RelayOfficialIndexState
     * @example
     * // Get one RelayOfficialIndexState
     * const relayOfficialIndexState = await prisma.relayOfficialIndexState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelayOfficialIndexStateFindFirstOrThrowArgs>(args?: SelectSubset<T, RelayOfficialIndexStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelayOfficialIndexStateClient<$Result.GetResult<Prisma.$RelayOfficialIndexStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RelayOfficialIndexStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialIndexStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelayOfficialIndexStates
     * const relayOfficialIndexStates = await prisma.relayOfficialIndexState.findMany()
     * 
     * // Get first 10 RelayOfficialIndexStates
     * const relayOfficialIndexStates = await prisma.relayOfficialIndexState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relayOfficialIndexStateWithIdOnly = await prisma.relayOfficialIndexState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelayOfficialIndexStateFindManyArgs>(args?: SelectSubset<T, RelayOfficialIndexStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelayOfficialIndexStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RelayOfficialIndexState.
     * @param {RelayOfficialIndexStateCreateArgs} args - Arguments to create a RelayOfficialIndexState.
     * @example
     * // Create one RelayOfficialIndexState
     * const RelayOfficialIndexState = await prisma.relayOfficialIndexState.create({
     *   data: {
     *     // ... data to create a RelayOfficialIndexState
     *   }
     * })
     * 
     */
    create<T extends RelayOfficialIndexStateCreateArgs>(args: SelectSubset<T, RelayOfficialIndexStateCreateArgs<ExtArgs>>): Prisma__RelayOfficialIndexStateClient<$Result.GetResult<Prisma.$RelayOfficialIndexStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RelayOfficialIndexStates.
     * @param {RelayOfficialIndexStateCreateManyArgs} args - Arguments to create many RelayOfficialIndexStates.
     * @example
     * // Create many RelayOfficialIndexStates
     * const relayOfficialIndexState = await prisma.relayOfficialIndexState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelayOfficialIndexStateCreateManyArgs>(args?: SelectSubset<T, RelayOfficialIndexStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RelayOfficialIndexStates and returns the data saved in the database.
     * @param {RelayOfficialIndexStateCreateManyAndReturnArgs} args - Arguments to create many RelayOfficialIndexStates.
     * @example
     * // Create many RelayOfficialIndexStates
     * const relayOfficialIndexState = await prisma.relayOfficialIndexState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RelayOfficialIndexStates and only return the `id`
     * const relayOfficialIndexStateWithIdOnly = await prisma.relayOfficialIndexState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelayOfficialIndexStateCreateManyAndReturnArgs>(args?: SelectSubset<T, RelayOfficialIndexStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelayOfficialIndexStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RelayOfficialIndexState.
     * @param {RelayOfficialIndexStateDeleteArgs} args - Arguments to delete one RelayOfficialIndexState.
     * @example
     * // Delete one RelayOfficialIndexState
     * const RelayOfficialIndexState = await prisma.relayOfficialIndexState.delete({
     *   where: {
     *     // ... filter to delete one RelayOfficialIndexState
     *   }
     * })
     * 
     */
    delete<T extends RelayOfficialIndexStateDeleteArgs>(args: SelectSubset<T, RelayOfficialIndexStateDeleteArgs<ExtArgs>>): Prisma__RelayOfficialIndexStateClient<$Result.GetResult<Prisma.$RelayOfficialIndexStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RelayOfficialIndexState.
     * @param {RelayOfficialIndexStateUpdateArgs} args - Arguments to update one RelayOfficialIndexState.
     * @example
     * // Update one RelayOfficialIndexState
     * const relayOfficialIndexState = await prisma.relayOfficialIndexState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelayOfficialIndexStateUpdateArgs>(args: SelectSubset<T, RelayOfficialIndexStateUpdateArgs<ExtArgs>>): Prisma__RelayOfficialIndexStateClient<$Result.GetResult<Prisma.$RelayOfficialIndexStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RelayOfficialIndexStates.
     * @param {RelayOfficialIndexStateDeleteManyArgs} args - Arguments to filter RelayOfficialIndexStates to delete.
     * @example
     * // Delete a few RelayOfficialIndexStates
     * const { count } = await prisma.relayOfficialIndexState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelayOfficialIndexStateDeleteManyArgs>(args?: SelectSubset<T, RelayOfficialIndexStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelayOfficialIndexStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialIndexStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelayOfficialIndexStates
     * const relayOfficialIndexState = await prisma.relayOfficialIndexState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelayOfficialIndexStateUpdateManyArgs>(args: SelectSubset<T, RelayOfficialIndexStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelayOfficialIndexStates and returns the data updated in the database.
     * @param {RelayOfficialIndexStateUpdateManyAndReturnArgs} args - Arguments to update many RelayOfficialIndexStates.
     * @example
     * // Update many RelayOfficialIndexStates
     * const relayOfficialIndexState = await prisma.relayOfficialIndexState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RelayOfficialIndexStates and only return the `id`
     * const relayOfficialIndexStateWithIdOnly = await prisma.relayOfficialIndexState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RelayOfficialIndexStateUpdateManyAndReturnArgs>(args: SelectSubset<T, RelayOfficialIndexStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelayOfficialIndexStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RelayOfficialIndexState.
     * @param {RelayOfficialIndexStateUpsertArgs} args - Arguments to update or create a RelayOfficialIndexState.
     * @example
     * // Update or create a RelayOfficialIndexState
     * const relayOfficialIndexState = await prisma.relayOfficialIndexState.upsert({
     *   create: {
     *     // ... data to create a RelayOfficialIndexState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelayOfficialIndexState we want to update
     *   }
     * })
     */
    upsert<T extends RelayOfficialIndexStateUpsertArgs>(args: SelectSubset<T, RelayOfficialIndexStateUpsertArgs<ExtArgs>>): Prisma__RelayOfficialIndexStateClient<$Result.GetResult<Prisma.$RelayOfficialIndexStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RelayOfficialIndexStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialIndexStateCountArgs} args - Arguments to filter RelayOfficialIndexStates to count.
     * @example
     * // Count the number of RelayOfficialIndexStates
     * const count = await prisma.relayOfficialIndexState.count({
     *   where: {
     *     // ... the filter for the RelayOfficialIndexStates we want to count
     *   }
     * })
    **/
    count<T extends RelayOfficialIndexStateCountArgs>(
      args?: Subset<T, RelayOfficialIndexStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelayOfficialIndexStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelayOfficialIndexState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialIndexStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelayOfficialIndexStateAggregateArgs>(args: Subset<T, RelayOfficialIndexStateAggregateArgs>): Prisma.PrismaPromise<GetRelayOfficialIndexStateAggregateType<T>>

    /**
     * Group by RelayOfficialIndexState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayOfficialIndexStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelayOfficialIndexStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelayOfficialIndexStateGroupByArgs['orderBy'] }
        : { orderBy?: RelayOfficialIndexStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelayOfficialIndexStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelayOfficialIndexStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelayOfficialIndexState model
   */
  readonly fields: RelayOfficialIndexStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelayOfficialIndexState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelayOfficialIndexStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RelayOfficialIndexState model
   */
  interface RelayOfficialIndexStateFieldRefs {
    readonly id: FieldRef<"RelayOfficialIndexState", 'String'>
    readonly key: FieldRef<"RelayOfficialIndexState", 'String'>
    readonly lastRunAt: FieldRef<"RelayOfficialIndexState", 'DateTime'>
    readonly lastStatus: FieldRef<"RelayOfficialIndexState", 'String'>
    readonly lastError: FieldRef<"RelayOfficialIndexState", 'String'>
    readonly lastSignature: FieldRef<"RelayOfficialIndexState", 'String'>
    readonly lastReconciledAt: FieldRef<"RelayOfficialIndexState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RelayOfficialIndexState findUnique
   */
  export type RelayOfficialIndexStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialIndexState
     */
    select?: RelayOfficialIndexStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialIndexState
     */
    omit?: RelayOfficialIndexStateOmit<ExtArgs> | null
    /**
     * Filter, which RelayOfficialIndexState to fetch.
     */
    where: RelayOfficialIndexStateWhereUniqueInput
  }

  /**
   * RelayOfficialIndexState findUniqueOrThrow
   */
  export type RelayOfficialIndexStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialIndexState
     */
    select?: RelayOfficialIndexStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialIndexState
     */
    omit?: RelayOfficialIndexStateOmit<ExtArgs> | null
    /**
     * Filter, which RelayOfficialIndexState to fetch.
     */
    where: RelayOfficialIndexStateWhereUniqueInput
  }

  /**
   * RelayOfficialIndexState findFirst
   */
  export type RelayOfficialIndexStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialIndexState
     */
    select?: RelayOfficialIndexStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialIndexState
     */
    omit?: RelayOfficialIndexStateOmit<ExtArgs> | null
    /**
     * Filter, which RelayOfficialIndexState to fetch.
     */
    where?: RelayOfficialIndexStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayOfficialIndexStates to fetch.
     */
    orderBy?: RelayOfficialIndexStateOrderByWithRelationInput | RelayOfficialIndexStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelayOfficialIndexStates.
     */
    cursor?: RelayOfficialIndexStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayOfficialIndexStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayOfficialIndexStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelayOfficialIndexStates.
     */
    distinct?: RelayOfficialIndexStateScalarFieldEnum | RelayOfficialIndexStateScalarFieldEnum[]
  }

  /**
   * RelayOfficialIndexState findFirstOrThrow
   */
  export type RelayOfficialIndexStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialIndexState
     */
    select?: RelayOfficialIndexStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialIndexState
     */
    omit?: RelayOfficialIndexStateOmit<ExtArgs> | null
    /**
     * Filter, which RelayOfficialIndexState to fetch.
     */
    where?: RelayOfficialIndexStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayOfficialIndexStates to fetch.
     */
    orderBy?: RelayOfficialIndexStateOrderByWithRelationInput | RelayOfficialIndexStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelayOfficialIndexStates.
     */
    cursor?: RelayOfficialIndexStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayOfficialIndexStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayOfficialIndexStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelayOfficialIndexStates.
     */
    distinct?: RelayOfficialIndexStateScalarFieldEnum | RelayOfficialIndexStateScalarFieldEnum[]
  }

  /**
   * RelayOfficialIndexState findMany
   */
  export type RelayOfficialIndexStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialIndexState
     */
    select?: RelayOfficialIndexStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialIndexState
     */
    omit?: RelayOfficialIndexStateOmit<ExtArgs> | null
    /**
     * Filter, which RelayOfficialIndexStates to fetch.
     */
    where?: RelayOfficialIndexStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayOfficialIndexStates to fetch.
     */
    orderBy?: RelayOfficialIndexStateOrderByWithRelationInput | RelayOfficialIndexStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelayOfficialIndexStates.
     */
    cursor?: RelayOfficialIndexStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayOfficialIndexStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayOfficialIndexStates.
     */
    skip?: number
    distinct?: RelayOfficialIndexStateScalarFieldEnum | RelayOfficialIndexStateScalarFieldEnum[]
  }

  /**
   * RelayOfficialIndexState create
   */
  export type RelayOfficialIndexStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialIndexState
     */
    select?: RelayOfficialIndexStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialIndexState
     */
    omit?: RelayOfficialIndexStateOmit<ExtArgs> | null
    /**
     * The data needed to create a RelayOfficialIndexState.
     */
    data: XOR<RelayOfficialIndexStateCreateInput, RelayOfficialIndexStateUncheckedCreateInput>
  }

  /**
   * RelayOfficialIndexState createMany
   */
  export type RelayOfficialIndexStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelayOfficialIndexStates.
     */
    data: RelayOfficialIndexStateCreateManyInput | RelayOfficialIndexStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelayOfficialIndexState createManyAndReturn
   */
  export type RelayOfficialIndexStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialIndexState
     */
    select?: RelayOfficialIndexStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialIndexState
     */
    omit?: RelayOfficialIndexStateOmit<ExtArgs> | null
    /**
     * The data used to create many RelayOfficialIndexStates.
     */
    data: RelayOfficialIndexStateCreateManyInput | RelayOfficialIndexStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelayOfficialIndexState update
   */
  export type RelayOfficialIndexStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialIndexState
     */
    select?: RelayOfficialIndexStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialIndexState
     */
    omit?: RelayOfficialIndexStateOmit<ExtArgs> | null
    /**
     * The data needed to update a RelayOfficialIndexState.
     */
    data: XOR<RelayOfficialIndexStateUpdateInput, RelayOfficialIndexStateUncheckedUpdateInput>
    /**
     * Choose, which RelayOfficialIndexState to update.
     */
    where: RelayOfficialIndexStateWhereUniqueInput
  }

  /**
   * RelayOfficialIndexState updateMany
   */
  export type RelayOfficialIndexStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelayOfficialIndexStates.
     */
    data: XOR<RelayOfficialIndexStateUpdateManyMutationInput, RelayOfficialIndexStateUncheckedUpdateManyInput>
    /**
     * Filter which RelayOfficialIndexStates to update
     */
    where?: RelayOfficialIndexStateWhereInput
    /**
     * Limit how many RelayOfficialIndexStates to update.
     */
    limit?: number
  }

  /**
   * RelayOfficialIndexState updateManyAndReturn
   */
  export type RelayOfficialIndexStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialIndexState
     */
    select?: RelayOfficialIndexStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialIndexState
     */
    omit?: RelayOfficialIndexStateOmit<ExtArgs> | null
    /**
     * The data used to update RelayOfficialIndexStates.
     */
    data: XOR<RelayOfficialIndexStateUpdateManyMutationInput, RelayOfficialIndexStateUncheckedUpdateManyInput>
    /**
     * Filter which RelayOfficialIndexStates to update
     */
    where?: RelayOfficialIndexStateWhereInput
    /**
     * Limit how many RelayOfficialIndexStates to update.
     */
    limit?: number
  }

  /**
   * RelayOfficialIndexState upsert
   */
  export type RelayOfficialIndexStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialIndexState
     */
    select?: RelayOfficialIndexStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialIndexState
     */
    omit?: RelayOfficialIndexStateOmit<ExtArgs> | null
    /**
     * The filter to search for the RelayOfficialIndexState to update in case it exists.
     */
    where: RelayOfficialIndexStateWhereUniqueInput
    /**
     * In case the RelayOfficialIndexState found by the `where` argument doesn't exist, create a new RelayOfficialIndexState with this data.
     */
    create: XOR<RelayOfficialIndexStateCreateInput, RelayOfficialIndexStateUncheckedCreateInput>
    /**
     * In case the RelayOfficialIndexState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelayOfficialIndexStateUpdateInput, RelayOfficialIndexStateUncheckedUpdateInput>
  }

  /**
   * RelayOfficialIndexState delete
   */
  export type RelayOfficialIndexStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialIndexState
     */
    select?: RelayOfficialIndexStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialIndexState
     */
    omit?: RelayOfficialIndexStateOmit<ExtArgs> | null
    /**
     * Filter which RelayOfficialIndexState to delete.
     */
    where: RelayOfficialIndexStateWhereUniqueInput
  }

  /**
   * RelayOfficialIndexState deleteMany
   */
  export type RelayOfficialIndexStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelayOfficialIndexStates to delete
     */
    where?: RelayOfficialIndexStateWhereInput
    /**
     * Limit how many RelayOfficialIndexStates to delete.
     */
    limit?: number
  }

  /**
   * RelayOfficialIndexState without action
   */
  export type RelayOfficialIndexStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelayOfficialIndexState
     */
    select?: RelayOfficialIndexStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelayOfficialIndexState
     */
    omit?: RelayOfficialIndexStateOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LaunchScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creatorWallet: 'creatorWallet',
    route: 'route',
    status: 'status',
    name: 'name',
    symbol: 'symbol',
    description: 'description',
    metadataUri: 'metadataUri',
    imageUrl: 'imageUrl',
    network: 'network',
    mintAddress: 'mintAddress',
    signature: 'signature',
    slot: 'slot',
    blockTime: 'blockTime',
    idempotencyKey: 'idempotencyKey',
    poolAddress: 'poolAddress',
    poolVerifiedAt: 'poolVerifiedAt',
    curveState: 'curveState',
    lastError: 'lastError'
  };

  export type LaunchScalarFieldEnum = (typeof LaunchScalarFieldEnum)[keyof typeof LaunchScalarFieldEnum]


  export const LaunchEventScalarFieldEnum: {
    id: 'id',
    launchId: 'launchId',
    createdAt: 'createdAt',
    kind: 'kind',
    detail: 'detail',
    dedupeKey: 'dedupeKey'
  };

  export type LaunchEventScalarFieldEnum = (typeof LaunchEventScalarFieldEnum)[keyof typeof LaunchEventScalarFieldEnum]


  export const UploadAuditScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    uploader: 'uploader',
    fileName: 'fileName',
    sizeBytes: 'sizeBytes',
    mime: 'mime',
    cid: 'cid',
    status: 'status',
    reason: 'reason'
  };

  export type UploadAuditScalarFieldEnum = (typeof UploadAuditScalarFieldEnum)[keyof typeof UploadAuditScalarFieldEnum]


  export const RelayOfficialActivityScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    signature: 'signature',
    entryKey: 'entryKey',
    type: 'type',
    status: 'status',
    slot: 'slot',
    blockTime: 'blockTime',
    walletRole: 'walletRole',
    sender: 'sender',
    recipient: 'recipient',
    inputAmount: 'inputAmount',
    inputAsset: 'inputAsset',
    inputDecimals: 'inputDecimals',
    outputAmount: 'outputAmount',
    outputAsset: 'outputAsset',
    outputDecimals: 'outputDecimals',
    burnMint: 'burnMint',
    burnVerified: 'burnVerified',
    programId: 'programId',
    network: 'network',
    detail: 'detail',
    onChainVerified: 'onChainVerified',
    verifiedAt: 'verifiedAt'
  };

  export type RelayOfficialActivityScalarFieldEnum = (typeof RelayOfficialActivityScalarFieldEnum)[keyof typeof RelayOfficialActivityScalarFieldEnum]


  export const RelayOfficialIndexStateScalarFieldEnum: {
    id: 'id',
    key: 'key',
    lastRunAt: 'lastRunAt',
    lastStatus: 'lastStatus',
    lastError: 'lastError',
    lastSignature: 'lastSignature',
    lastReconciledAt: 'lastReconciledAt'
  };

  export type RelayOfficialIndexStateScalarFieldEnum = (typeof RelayOfficialIndexStateScalarFieldEnum)[keyof typeof RelayOfficialIndexStateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LaunchRoute'
   */
  export type EnumLaunchRouteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LaunchRoute'>
    


  /**
   * Reference to a field of type 'LaunchRoute[]'
   */
  export type ListEnumLaunchRouteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LaunchRoute[]'>
    


  /**
   * Reference to a field of type 'LaunchStatus'
   */
  export type EnumLaunchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LaunchStatus'>
    


  /**
   * Reference to a field of type 'LaunchStatus[]'
   */
  export type ListEnumLaunchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LaunchStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LaunchWhereInput = {
    AND?: LaunchWhereInput | LaunchWhereInput[]
    OR?: LaunchWhereInput[]
    NOT?: LaunchWhereInput | LaunchWhereInput[]
    id?: StringFilter<"Launch"> | string
    createdAt?: DateTimeFilter<"Launch"> | Date | string
    updatedAt?: DateTimeFilter<"Launch"> | Date | string
    creatorWallet?: StringFilter<"Launch"> | string
    route?: EnumLaunchRouteFilter<"Launch"> | $Enums.LaunchRoute
    status?: EnumLaunchStatusFilter<"Launch"> | $Enums.LaunchStatus
    name?: StringFilter<"Launch"> | string
    symbol?: StringFilter<"Launch"> | string
    description?: StringNullableFilter<"Launch"> | string | null
    metadataUri?: StringNullableFilter<"Launch"> | string | null
    imageUrl?: StringNullableFilter<"Launch"> | string | null
    network?: StringFilter<"Launch"> | string
    mintAddress?: StringNullableFilter<"Launch"> | string | null
    signature?: StringNullableFilter<"Launch"> | string | null
    slot?: IntNullableFilter<"Launch"> | number | null
    blockTime?: DateTimeNullableFilter<"Launch"> | Date | string | null
    idempotencyKey?: StringFilter<"Launch"> | string
    poolAddress?: StringNullableFilter<"Launch"> | string | null
    poolVerifiedAt?: DateTimeNullableFilter<"Launch"> | Date | string | null
    curveState?: JsonNullableFilter<"Launch">
    lastError?: StringNullableFilter<"Launch"> | string | null
    timeline?: LaunchEventListRelationFilter
  }

  export type LaunchOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorWallet?: SortOrder
    route?: SortOrder
    status?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    description?: SortOrderInput | SortOrder
    metadataUri?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    network?: SortOrder
    mintAddress?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    slot?: SortOrderInput | SortOrder
    blockTime?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrder
    poolAddress?: SortOrderInput | SortOrder
    poolVerifiedAt?: SortOrderInput | SortOrder
    curveState?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    timeline?: LaunchEventOrderByRelationAggregateInput
  }

  export type LaunchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mintAddress?: string
    idempotencyKey?: string
    AND?: LaunchWhereInput | LaunchWhereInput[]
    OR?: LaunchWhereInput[]
    NOT?: LaunchWhereInput | LaunchWhereInput[]
    createdAt?: DateTimeFilter<"Launch"> | Date | string
    updatedAt?: DateTimeFilter<"Launch"> | Date | string
    creatorWallet?: StringFilter<"Launch"> | string
    route?: EnumLaunchRouteFilter<"Launch"> | $Enums.LaunchRoute
    status?: EnumLaunchStatusFilter<"Launch"> | $Enums.LaunchStatus
    name?: StringFilter<"Launch"> | string
    symbol?: StringFilter<"Launch"> | string
    description?: StringNullableFilter<"Launch"> | string | null
    metadataUri?: StringNullableFilter<"Launch"> | string | null
    imageUrl?: StringNullableFilter<"Launch"> | string | null
    network?: StringFilter<"Launch"> | string
    signature?: StringNullableFilter<"Launch"> | string | null
    slot?: IntNullableFilter<"Launch"> | number | null
    blockTime?: DateTimeNullableFilter<"Launch"> | Date | string | null
    poolAddress?: StringNullableFilter<"Launch"> | string | null
    poolVerifiedAt?: DateTimeNullableFilter<"Launch"> | Date | string | null
    curveState?: JsonNullableFilter<"Launch">
    lastError?: StringNullableFilter<"Launch"> | string | null
    timeline?: LaunchEventListRelationFilter
  }, "id" | "mintAddress" | "idempotencyKey">

  export type LaunchOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorWallet?: SortOrder
    route?: SortOrder
    status?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    description?: SortOrderInput | SortOrder
    metadataUri?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    network?: SortOrder
    mintAddress?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    slot?: SortOrderInput | SortOrder
    blockTime?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrder
    poolAddress?: SortOrderInput | SortOrder
    poolVerifiedAt?: SortOrderInput | SortOrder
    curveState?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    _count?: LaunchCountOrderByAggregateInput
    _avg?: LaunchAvgOrderByAggregateInput
    _max?: LaunchMaxOrderByAggregateInput
    _min?: LaunchMinOrderByAggregateInput
    _sum?: LaunchSumOrderByAggregateInput
  }

  export type LaunchScalarWhereWithAggregatesInput = {
    AND?: LaunchScalarWhereWithAggregatesInput | LaunchScalarWhereWithAggregatesInput[]
    OR?: LaunchScalarWhereWithAggregatesInput[]
    NOT?: LaunchScalarWhereWithAggregatesInput | LaunchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Launch"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Launch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Launch"> | Date | string
    creatorWallet?: StringWithAggregatesFilter<"Launch"> | string
    route?: EnumLaunchRouteWithAggregatesFilter<"Launch"> | $Enums.LaunchRoute
    status?: EnumLaunchStatusWithAggregatesFilter<"Launch"> | $Enums.LaunchStatus
    name?: StringWithAggregatesFilter<"Launch"> | string
    symbol?: StringWithAggregatesFilter<"Launch"> | string
    description?: StringNullableWithAggregatesFilter<"Launch"> | string | null
    metadataUri?: StringNullableWithAggregatesFilter<"Launch"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Launch"> | string | null
    network?: StringWithAggregatesFilter<"Launch"> | string
    mintAddress?: StringNullableWithAggregatesFilter<"Launch"> | string | null
    signature?: StringNullableWithAggregatesFilter<"Launch"> | string | null
    slot?: IntNullableWithAggregatesFilter<"Launch"> | number | null
    blockTime?: DateTimeNullableWithAggregatesFilter<"Launch"> | Date | string | null
    idempotencyKey?: StringWithAggregatesFilter<"Launch"> | string
    poolAddress?: StringNullableWithAggregatesFilter<"Launch"> | string | null
    poolVerifiedAt?: DateTimeNullableWithAggregatesFilter<"Launch"> | Date | string | null
    curveState?: JsonNullableWithAggregatesFilter<"Launch">
    lastError?: StringNullableWithAggregatesFilter<"Launch"> | string | null
  }

  export type LaunchEventWhereInput = {
    AND?: LaunchEventWhereInput | LaunchEventWhereInput[]
    OR?: LaunchEventWhereInput[]
    NOT?: LaunchEventWhereInput | LaunchEventWhereInput[]
    id?: StringFilter<"LaunchEvent"> | string
    launchId?: StringFilter<"LaunchEvent"> | string
    createdAt?: DateTimeFilter<"LaunchEvent"> | Date | string
    kind?: StringFilter<"LaunchEvent"> | string
    detail?: JsonNullableFilter<"LaunchEvent">
    dedupeKey?: StringFilter<"LaunchEvent"> | string
    launch?: XOR<LaunchScalarRelationFilter, LaunchWhereInput>
  }

  export type LaunchEventOrderByWithRelationInput = {
    id?: SortOrder
    launchId?: SortOrder
    createdAt?: SortOrder
    kind?: SortOrder
    detail?: SortOrderInput | SortOrder
    dedupeKey?: SortOrder
    launch?: LaunchOrderByWithRelationInput
  }

  export type LaunchEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    launchId_dedupeKey?: LaunchEventLaunchIdDedupeKeyCompoundUniqueInput
    AND?: LaunchEventWhereInput | LaunchEventWhereInput[]
    OR?: LaunchEventWhereInput[]
    NOT?: LaunchEventWhereInput | LaunchEventWhereInput[]
    launchId?: StringFilter<"LaunchEvent"> | string
    createdAt?: DateTimeFilter<"LaunchEvent"> | Date | string
    kind?: StringFilter<"LaunchEvent"> | string
    detail?: JsonNullableFilter<"LaunchEvent">
    dedupeKey?: StringFilter<"LaunchEvent"> | string
    launch?: XOR<LaunchScalarRelationFilter, LaunchWhereInput>
  }, "id" | "launchId_dedupeKey">

  export type LaunchEventOrderByWithAggregationInput = {
    id?: SortOrder
    launchId?: SortOrder
    createdAt?: SortOrder
    kind?: SortOrder
    detail?: SortOrderInput | SortOrder
    dedupeKey?: SortOrder
    _count?: LaunchEventCountOrderByAggregateInput
    _max?: LaunchEventMaxOrderByAggregateInput
    _min?: LaunchEventMinOrderByAggregateInput
  }

  export type LaunchEventScalarWhereWithAggregatesInput = {
    AND?: LaunchEventScalarWhereWithAggregatesInput | LaunchEventScalarWhereWithAggregatesInput[]
    OR?: LaunchEventScalarWhereWithAggregatesInput[]
    NOT?: LaunchEventScalarWhereWithAggregatesInput | LaunchEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LaunchEvent"> | string
    launchId?: StringWithAggregatesFilter<"LaunchEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LaunchEvent"> | Date | string
    kind?: StringWithAggregatesFilter<"LaunchEvent"> | string
    detail?: JsonNullableWithAggregatesFilter<"LaunchEvent">
    dedupeKey?: StringWithAggregatesFilter<"LaunchEvent"> | string
  }

  export type UploadAuditWhereInput = {
    AND?: UploadAuditWhereInput | UploadAuditWhereInput[]
    OR?: UploadAuditWhereInput[]
    NOT?: UploadAuditWhereInput | UploadAuditWhereInput[]
    id?: StringFilter<"UploadAudit"> | string
    createdAt?: DateTimeFilter<"UploadAudit"> | Date | string
    uploader?: StringFilter<"UploadAudit"> | string
    fileName?: StringFilter<"UploadAudit"> | string
    sizeBytes?: IntFilter<"UploadAudit"> | number
    mime?: StringFilter<"UploadAudit"> | string
    cid?: StringNullableFilter<"UploadAudit"> | string | null
    status?: StringFilter<"UploadAudit"> | string
    reason?: StringNullableFilter<"UploadAudit"> | string | null
  }

  export type UploadAuditOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    uploader?: SortOrder
    fileName?: SortOrder
    sizeBytes?: SortOrder
    mime?: SortOrder
    cid?: SortOrderInput | SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
  }

  export type UploadAuditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UploadAuditWhereInput | UploadAuditWhereInput[]
    OR?: UploadAuditWhereInput[]
    NOT?: UploadAuditWhereInput | UploadAuditWhereInput[]
    createdAt?: DateTimeFilter<"UploadAudit"> | Date | string
    uploader?: StringFilter<"UploadAudit"> | string
    fileName?: StringFilter<"UploadAudit"> | string
    sizeBytes?: IntFilter<"UploadAudit"> | number
    mime?: StringFilter<"UploadAudit"> | string
    cid?: StringNullableFilter<"UploadAudit"> | string | null
    status?: StringFilter<"UploadAudit"> | string
    reason?: StringNullableFilter<"UploadAudit"> | string | null
  }, "id">

  export type UploadAuditOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    uploader?: SortOrder
    fileName?: SortOrder
    sizeBytes?: SortOrder
    mime?: SortOrder
    cid?: SortOrderInput | SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    _count?: UploadAuditCountOrderByAggregateInput
    _avg?: UploadAuditAvgOrderByAggregateInput
    _max?: UploadAuditMaxOrderByAggregateInput
    _min?: UploadAuditMinOrderByAggregateInput
    _sum?: UploadAuditSumOrderByAggregateInput
  }

  export type UploadAuditScalarWhereWithAggregatesInput = {
    AND?: UploadAuditScalarWhereWithAggregatesInput | UploadAuditScalarWhereWithAggregatesInput[]
    OR?: UploadAuditScalarWhereWithAggregatesInput[]
    NOT?: UploadAuditScalarWhereWithAggregatesInput | UploadAuditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UploadAudit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UploadAudit"> | Date | string
    uploader?: StringWithAggregatesFilter<"UploadAudit"> | string
    fileName?: StringWithAggregatesFilter<"UploadAudit"> | string
    sizeBytes?: IntWithAggregatesFilter<"UploadAudit"> | number
    mime?: StringWithAggregatesFilter<"UploadAudit"> | string
    cid?: StringNullableWithAggregatesFilter<"UploadAudit"> | string | null
    status?: StringWithAggregatesFilter<"UploadAudit"> | string
    reason?: StringNullableWithAggregatesFilter<"UploadAudit"> | string | null
  }

  export type RelayOfficialActivityWhereInput = {
    AND?: RelayOfficialActivityWhereInput | RelayOfficialActivityWhereInput[]
    OR?: RelayOfficialActivityWhereInput[]
    NOT?: RelayOfficialActivityWhereInput | RelayOfficialActivityWhereInput[]
    id?: StringFilter<"RelayOfficialActivity"> | string
    createdAt?: DateTimeFilter<"RelayOfficialActivity"> | Date | string
    updatedAt?: DateTimeFilter<"RelayOfficialActivity"> | Date | string
    signature?: StringFilter<"RelayOfficialActivity"> | string
    entryKey?: StringFilter<"RelayOfficialActivity"> | string
    type?: StringFilter<"RelayOfficialActivity"> | string
    status?: StringFilter<"RelayOfficialActivity"> | string
    slot?: IntNullableFilter<"RelayOfficialActivity"> | number | null
    blockTime?: DateTimeNullableFilter<"RelayOfficialActivity"> | Date | string | null
    walletRole?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    sender?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    recipient?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    inputAmount?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    inputAsset?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    inputDecimals?: IntNullableFilter<"RelayOfficialActivity"> | number | null
    outputAmount?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    outputAsset?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    outputDecimals?: IntNullableFilter<"RelayOfficialActivity"> | number | null
    burnMint?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    burnVerified?: BoolFilter<"RelayOfficialActivity"> | boolean
    programId?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    network?: StringFilter<"RelayOfficialActivity"> | string
    detail?: JsonNullableFilter<"RelayOfficialActivity">
    onChainVerified?: BoolFilter<"RelayOfficialActivity"> | boolean
    verifiedAt?: DateTimeNullableFilter<"RelayOfficialActivity"> | Date | string | null
  }

  export type RelayOfficialActivityOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    signature?: SortOrder
    entryKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    slot?: SortOrderInput | SortOrder
    blockTime?: SortOrderInput | SortOrder
    walletRole?: SortOrderInput | SortOrder
    sender?: SortOrderInput | SortOrder
    recipient?: SortOrderInput | SortOrder
    inputAmount?: SortOrderInput | SortOrder
    inputAsset?: SortOrderInput | SortOrder
    inputDecimals?: SortOrderInput | SortOrder
    outputAmount?: SortOrderInput | SortOrder
    outputAsset?: SortOrderInput | SortOrder
    outputDecimals?: SortOrderInput | SortOrder
    burnMint?: SortOrderInput | SortOrder
    burnVerified?: SortOrder
    programId?: SortOrderInput | SortOrder
    network?: SortOrder
    detail?: SortOrderInput | SortOrder
    onChainVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
  }

  export type RelayOfficialActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    signature_entryKey?: RelayOfficialActivitySignatureEntryKeyCompoundUniqueInput
    AND?: RelayOfficialActivityWhereInput | RelayOfficialActivityWhereInput[]
    OR?: RelayOfficialActivityWhereInput[]
    NOT?: RelayOfficialActivityWhereInput | RelayOfficialActivityWhereInput[]
    createdAt?: DateTimeFilter<"RelayOfficialActivity"> | Date | string
    updatedAt?: DateTimeFilter<"RelayOfficialActivity"> | Date | string
    signature?: StringFilter<"RelayOfficialActivity"> | string
    entryKey?: StringFilter<"RelayOfficialActivity"> | string
    type?: StringFilter<"RelayOfficialActivity"> | string
    status?: StringFilter<"RelayOfficialActivity"> | string
    slot?: IntNullableFilter<"RelayOfficialActivity"> | number | null
    blockTime?: DateTimeNullableFilter<"RelayOfficialActivity"> | Date | string | null
    walletRole?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    sender?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    recipient?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    inputAmount?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    inputAsset?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    inputDecimals?: IntNullableFilter<"RelayOfficialActivity"> | number | null
    outputAmount?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    outputAsset?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    outputDecimals?: IntNullableFilter<"RelayOfficialActivity"> | number | null
    burnMint?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    burnVerified?: BoolFilter<"RelayOfficialActivity"> | boolean
    programId?: StringNullableFilter<"RelayOfficialActivity"> | string | null
    network?: StringFilter<"RelayOfficialActivity"> | string
    detail?: JsonNullableFilter<"RelayOfficialActivity">
    onChainVerified?: BoolFilter<"RelayOfficialActivity"> | boolean
    verifiedAt?: DateTimeNullableFilter<"RelayOfficialActivity"> | Date | string | null
  }, "id" | "signature_entryKey">

  export type RelayOfficialActivityOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    signature?: SortOrder
    entryKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    slot?: SortOrderInput | SortOrder
    blockTime?: SortOrderInput | SortOrder
    walletRole?: SortOrderInput | SortOrder
    sender?: SortOrderInput | SortOrder
    recipient?: SortOrderInput | SortOrder
    inputAmount?: SortOrderInput | SortOrder
    inputAsset?: SortOrderInput | SortOrder
    inputDecimals?: SortOrderInput | SortOrder
    outputAmount?: SortOrderInput | SortOrder
    outputAsset?: SortOrderInput | SortOrder
    outputDecimals?: SortOrderInput | SortOrder
    burnMint?: SortOrderInput | SortOrder
    burnVerified?: SortOrder
    programId?: SortOrderInput | SortOrder
    network?: SortOrder
    detail?: SortOrderInput | SortOrder
    onChainVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    _count?: RelayOfficialActivityCountOrderByAggregateInput
    _avg?: RelayOfficialActivityAvgOrderByAggregateInput
    _max?: RelayOfficialActivityMaxOrderByAggregateInput
    _min?: RelayOfficialActivityMinOrderByAggregateInput
    _sum?: RelayOfficialActivitySumOrderByAggregateInput
  }

  export type RelayOfficialActivityScalarWhereWithAggregatesInput = {
    AND?: RelayOfficialActivityScalarWhereWithAggregatesInput | RelayOfficialActivityScalarWhereWithAggregatesInput[]
    OR?: RelayOfficialActivityScalarWhereWithAggregatesInput[]
    NOT?: RelayOfficialActivityScalarWhereWithAggregatesInput | RelayOfficialActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RelayOfficialActivity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RelayOfficialActivity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RelayOfficialActivity"> | Date | string
    signature?: StringWithAggregatesFilter<"RelayOfficialActivity"> | string
    entryKey?: StringWithAggregatesFilter<"RelayOfficialActivity"> | string
    type?: StringWithAggregatesFilter<"RelayOfficialActivity"> | string
    status?: StringWithAggregatesFilter<"RelayOfficialActivity"> | string
    slot?: IntNullableWithAggregatesFilter<"RelayOfficialActivity"> | number | null
    blockTime?: DateTimeNullableWithAggregatesFilter<"RelayOfficialActivity"> | Date | string | null
    walletRole?: StringNullableWithAggregatesFilter<"RelayOfficialActivity"> | string | null
    sender?: StringNullableWithAggregatesFilter<"RelayOfficialActivity"> | string | null
    recipient?: StringNullableWithAggregatesFilter<"RelayOfficialActivity"> | string | null
    inputAmount?: StringNullableWithAggregatesFilter<"RelayOfficialActivity"> | string | null
    inputAsset?: StringNullableWithAggregatesFilter<"RelayOfficialActivity"> | string | null
    inputDecimals?: IntNullableWithAggregatesFilter<"RelayOfficialActivity"> | number | null
    outputAmount?: StringNullableWithAggregatesFilter<"RelayOfficialActivity"> | string | null
    outputAsset?: StringNullableWithAggregatesFilter<"RelayOfficialActivity"> | string | null
    outputDecimals?: IntNullableWithAggregatesFilter<"RelayOfficialActivity"> | number | null
    burnMint?: StringNullableWithAggregatesFilter<"RelayOfficialActivity"> | string | null
    burnVerified?: BoolWithAggregatesFilter<"RelayOfficialActivity"> | boolean
    programId?: StringNullableWithAggregatesFilter<"RelayOfficialActivity"> | string | null
    network?: StringWithAggregatesFilter<"RelayOfficialActivity"> | string
    detail?: JsonNullableWithAggregatesFilter<"RelayOfficialActivity">
    onChainVerified?: BoolWithAggregatesFilter<"RelayOfficialActivity"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"RelayOfficialActivity"> | Date | string | null
  }

  export type RelayOfficialIndexStateWhereInput = {
    AND?: RelayOfficialIndexStateWhereInput | RelayOfficialIndexStateWhereInput[]
    OR?: RelayOfficialIndexStateWhereInput[]
    NOT?: RelayOfficialIndexStateWhereInput | RelayOfficialIndexStateWhereInput[]
    id?: StringFilter<"RelayOfficialIndexState"> | string
    key?: StringFilter<"RelayOfficialIndexState"> | string
    lastRunAt?: DateTimeNullableFilter<"RelayOfficialIndexState"> | Date | string | null
    lastStatus?: StringNullableFilter<"RelayOfficialIndexState"> | string | null
    lastError?: StringNullableFilter<"RelayOfficialIndexState"> | string | null
    lastSignature?: StringNullableFilter<"RelayOfficialIndexState"> | string | null
    lastReconciledAt?: DateTimeNullableFilter<"RelayOfficialIndexState"> | Date | string | null
  }

  export type RelayOfficialIndexStateOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    lastRunAt?: SortOrderInput | SortOrder
    lastStatus?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    lastSignature?: SortOrderInput | SortOrder
    lastReconciledAt?: SortOrderInput | SortOrder
  }

  export type RelayOfficialIndexStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: RelayOfficialIndexStateWhereInput | RelayOfficialIndexStateWhereInput[]
    OR?: RelayOfficialIndexStateWhereInput[]
    NOT?: RelayOfficialIndexStateWhereInput | RelayOfficialIndexStateWhereInput[]
    lastRunAt?: DateTimeNullableFilter<"RelayOfficialIndexState"> | Date | string | null
    lastStatus?: StringNullableFilter<"RelayOfficialIndexState"> | string | null
    lastError?: StringNullableFilter<"RelayOfficialIndexState"> | string | null
    lastSignature?: StringNullableFilter<"RelayOfficialIndexState"> | string | null
    lastReconciledAt?: DateTimeNullableFilter<"RelayOfficialIndexState"> | Date | string | null
  }, "id" | "key">

  export type RelayOfficialIndexStateOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    lastRunAt?: SortOrderInput | SortOrder
    lastStatus?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    lastSignature?: SortOrderInput | SortOrder
    lastReconciledAt?: SortOrderInput | SortOrder
    _count?: RelayOfficialIndexStateCountOrderByAggregateInput
    _max?: RelayOfficialIndexStateMaxOrderByAggregateInput
    _min?: RelayOfficialIndexStateMinOrderByAggregateInput
  }

  export type RelayOfficialIndexStateScalarWhereWithAggregatesInput = {
    AND?: RelayOfficialIndexStateScalarWhereWithAggregatesInput | RelayOfficialIndexStateScalarWhereWithAggregatesInput[]
    OR?: RelayOfficialIndexStateScalarWhereWithAggregatesInput[]
    NOT?: RelayOfficialIndexStateScalarWhereWithAggregatesInput | RelayOfficialIndexStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RelayOfficialIndexState"> | string
    key?: StringWithAggregatesFilter<"RelayOfficialIndexState"> | string
    lastRunAt?: DateTimeNullableWithAggregatesFilter<"RelayOfficialIndexState"> | Date | string | null
    lastStatus?: StringNullableWithAggregatesFilter<"RelayOfficialIndexState"> | string | null
    lastError?: StringNullableWithAggregatesFilter<"RelayOfficialIndexState"> | string | null
    lastSignature?: StringNullableWithAggregatesFilter<"RelayOfficialIndexState"> | string | null
    lastReconciledAt?: DateTimeNullableWithAggregatesFilter<"RelayOfficialIndexState"> | Date | string | null
  }

  export type LaunchCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorWallet: string
    route: $Enums.LaunchRoute
    status?: $Enums.LaunchStatus
    name: string
    symbol: string
    description?: string | null
    metadataUri?: string | null
    imageUrl?: string | null
    network: string
    mintAddress?: string | null
    signature?: string | null
    slot?: number | null
    blockTime?: Date | string | null
    idempotencyKey: string
    poolAddress?: string | null
    poolVerifiedAt?: Date | string | null
    curveState?: NullableJsonNullValueInput | InputJsonValue
    lastError?: string | null
    timeline?: LaunchEventCreateNestedManyWithoutLaunchInput
  }

  export type LaunchUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorWallet: string
    route: $Enums.LaunchRoute
    status?: $Enums.LaunchStatus
    name: string
    symbol: string
    description?: string | null
    metadataUri?: string | null
    imageUrl?: string | null
    network: string
    mintAddress?: string | null
    signature?: string | null
    slot?: number | null
    blockTime?: Date | string | null
    idempotencyKey: string
    poolAddress?: string | null
    poolVerifiedAt?: Date | string | null
    curveState?: NullableJsonNullValueInput | InputJsonValue
    lastError?: string | null
    timeline?: LaunchEventUncheckedCreateNestedManyWithoutLaunchInput
  }

  export type LaunchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorWallet?: StringFieldUpdateOperationsInput | string
    route?: EnumLaunchRouteFieldUpdateOperationsInput | $Enums.LaunchRoute
    status?: EnumLaunchStatusFieldUpdateOperationsInput | $Enums.LaunchStatus
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadataUri?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    network?: StringFieldUpdateOperationsInput | string
    mintAddress?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    slot?: NullableIntFieldUpdateOperationsInput | number | null
    blockTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    poolVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curveState?: NullableJsonNullValueInput | InputJsonValue
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    timeline?: LaunchEventUpdateManyWithoutLaunchNestedInput
  }

  export type LaunchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorWallet?: StringFieldUpdateOperationsInput | string
    route?: EnumLaunchRouteFieldUpdateOperationsInput | $Enums.LaunchRoute
    status?: EnumLaunchStatusFieldUpdateOperationsInput | $Enums.LaunchStatus
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadataUri?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    network?: StringFieldUpdateOperationsInput | string
    mintAddress?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    slot?: NullableIntFieldUpdateOperationsInput | number | null
    blockTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    poolVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curveState?: NullableJsonNullValueInput | InputJsonValue
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    timeline?: LaunchEventUncheckedUpdateManyWithoutLaunchNestedInput
  }

  export type LaunchCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorWallet: string
    route: $Enums.LaunchRoute
    status?: $Enums.LaunchStatus
    name: string
    symbol: string
    description?: string | null
    metadataUri?: string | null
    imageUrl?: string | null
    network: string
    mintAddress?: string | null
    signature?: string | null
    slot?: number | null
    blockTime?: Date | string | null
    idempotencyKey: string
    poolAddress?: string | null
    poolVerifiedAt?: Date | string | null
    curveState?: NullableJsonNullValueInput | InputJsonValue
    lastError?: string | null
  }

  export type LaunchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorWallet?: StringFieldUpdateOperationsInput | string
    route?: EnumLaunchRouteFieldUpdateOperationsInput | $Enums.LaunchRoute
    status?: EnumLaunchStatusFieldUpdateOperationsInput | $Enums.LaunchStatus
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadataUri?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    network?: StringFieldUpdateOperationsInput | string
    mintAddress?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    slot?: NullableIntFieldUpdateOperationsInput | number | null
    blockTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    poolVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curveState?: NullableJsonNullValueInput | InputJsonValue
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LaunchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorWallet?: StringFieldUpdateOperationsInput | string
    route?: EnumLaunchRouteFieldUpdateOperationsInput | $Enums.LaunchRoute
    status?: EnumLaunchStatusFieldUpdateOperationsInput | $Enums.LaunchStatus
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadataUri?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    network?: StringFieldUpdateOperationsInput | string
    mintAddress?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    slot?: NullableIntFieldUpdateOperationsInput | number | null
    blockTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    poolVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curveState?: NullableJsonNullValueInput | InputJsonValue
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LaunchEventCreateInput = {
    id?: string
    createdAt?: Date | string
    kind: string
    detail?: NullableJsonNullValueInput | InputJsonValue
    dedupeKey: string
    launch: LaunchCreateNestedOneWithoutTimelineInput
  }

  export type LaunchEventUncheckedCreateInput = {
    id?: string
    launchId: string
    createdAt?: Date | string
    kind: string
    detail?: NullableJsonNullValueInput | InputJsonValue
    dedupeKey: string
  }

  export type LaunchEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kind?: StringFieldUpdateOperationsInput | string
    detail?: NullableJsonNullValueInput | InputJsonValue
    dedupeKey?: StringFieldUpdateOperationsInput | string
    launch?: LaunchUpdateOneRequiredWithoutTimelineNestedInput
  }

  export type LaunchEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    launchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kind?: StringFieldUpdateOperationsInput | string
    detail?: NullableJsonNullValueInput | InputJsonValue
    dedupeKey?: StringFieldUpdateOperationsInput | string
  }

  export type LaunchEventCreateManyInput = {
    id?: string
    launchId: string
    createdAt?: Date | string
    kind: string
    detail?: NullableJsonNullValueInput | InputJsonValue
    dedupeKey: string
  }

  export type LaunchEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kind?: StringFieldUpdateOperationsInput | string
    detail?: NullableJsonNullValueInput | InputJsonValue
    dedupeKey?: StringFieldUpdateOperationsInput | string
  }

  export type LaunchEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    launchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kind?: StringFieldUpdateOperationsInput | string
    detail?: NullableJsonNullValueInput | InputJsonValue
    dedupeKey?: StringFieldUpdateOperationsInput | string
  }

  export type UploadAuditCreateInput = {
    id?: string
    createdAt?: Date | string
    uploader: string
    fileName: string
    sizeBytes: number
    mime: string
    cid?: string | null
    status: string
    reason?: string | null
  }

  export type UploadAuditUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    uploader: string
    fileName: string
    sizeBytes: number
    mime: string
    cid?: string | null
    status: string
    reason?: string | null
  }

  export type UploadAuditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    mime?: StringFieldUpdateOperationsInput | string
    cid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UploadAuditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    mime?: StringFieldUpdateOperationsInput | string
    cid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UploadAuditCreateManyInput = {
    id?: string
    createdAt?: Date | string
    uploader: string
    fileName: string
    sizeBytes: number
    mime: string
    cid?: string | null
    status: string
    reason?: string | null
  }

  export type UploadAuditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    mime?: StringFieldUpdateOperationsInput | string
    cid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UploadAuditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    mime?: StringFieldUpdateOperationsInput | string
    cid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelayOfficialActivityCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    signature: string
    entryKey: string
    type: string
    status: string
    slot?: number | null
    blockTime?: Date | string | null
    walletRole?: string | null
    sender?: string | null
    recipient?: string | null
    inputAmount?: string | null
    inputAsset?: string | null
    inputDecimals?: number | null
    outputAmount?: string | null
    outputAsset?: string | null
    outputDecimals?: number | null
    burnMint?: string | null
    burnVerified?: boolean
    programId?: string | null
    network: string
    detail?: NullableJsonNullValueInput | InputJsonValue
    onChainVerified?: boolean
    verifiedAt?: Date | string | null
  }

  export type RelayOfficialActivityUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    signature: string
    entryKey: string
    type: string
    status: string
    slot?: number | null
    blockTime?: Date | string | null
    walletRole?: string | null
    sender?: string | null
    recipient?: string | null
    inputAmount?: string | null
    inputAsset?: string | null
    inputDecimals?: number | null
    outputAmount?: string | null
    outputAsset?: string | null
    outputDecimals?: number | null
    burnMint?: string | null
    burnVerified?: boolean
    programId?: string | null
    network: string
    detail?: NullableJsonNullValueInput | InputJsonValue
    onChainVerified?: boolean
    verifiedAt?: Date | string | null
  }

  export type RelayOfficialActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    entryKey?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    slot?: NullableIntFieldUpdateOperationsInput | number | null
    blockTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    walletRole?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    inputAmount?: NullableStringFieldUpdateOperationsInput | string | null
    inputAsset?: NullableStringFieldUpdateOperationsInput | string | null
    inputDecimals?: NullableIntFieldUpdateOperationsInput | number | null
    outputAmount?: NullableStringFieldUpdateOperationsInput | string | null
    outputAsset?: NullableStringFieldUpdateOperationsInput | string | null
    outputDecimals?: NullableIntFieldUpdateOperationsInput | number | null
    burnMint?: NullableStringFieldUpdateOperationsInput | string | null
    burnVerified?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    network?: StringFieldUpdateOperationsInput | string
    detail?: NullableJsonNullValueInput | InputJsonValue
    onChainVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RelayOfficialActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    entryKey?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    slot?: NullableIntFieldUpdateOperationsInput | number | null
    blockTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    walletRole?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    inputAmount?: NullableStringFieldUpdateOperationsInput | string | null
    inputAsset?: NullableStringFieldUpdateOperationsInput | string | null
    inputDecimals?: NullableIntFieldUpdateOperationsInput | number | null
    outputAmount?: NullableStringFieldUpdateOperationsInput | string | null
    outputAsset?: NullableStringFieldUpdateOperationsInput | string | null
    outputDecimals?: NullableIntFieldUpdateOperationsInput | number | null
    burnMint?: NullableStringFieldUpdateOperationsInput | string | null
    burnVerified?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    network?: StringFieldUpdateOperationsInput | string
    detail?: NullableJsonNullValueInput | InputJsonValue
    onChainVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RelayOfficialActivityCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    signature: string
    entryKey: string
    type: string
    status: string
    slot?: number | null
    blockTime?: Date | string | null
    walletRole?: string | null
    sender?: string | null
    recipient?: string | null
    inputAmount?: string | null
    inputAsset?: string | null
    inputDecimals?: number | null
    outputAmount?: string | null
    outputAsset?: string | null
    outputDecimals?: number | null
    burnMint?: string | null
    burnVerified?: boolean
    programId?: string | null
    network: string
    detail?: NullableJsonNullValueInput | InputJsonValue
    onChainVerified?: boolean
    verifiedAt?: Date | string | null
  }

  export type RelayOfficialActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    entryKey?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    slot?: NullableIntFieldUpdateOperationsInput | number | null
    blockTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    walletRole?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    inputAmount?: NullableStringFieldUpdateOperationsInput | string | null
    inputAsset?: NullableStringFieldUpdateOperationsInput | string | null
    inputDecimals?: NullableIntFieldUpdateOperationsInput | number | null
    outputAmount?: NullableStringFieldUpdateOperationsInput | string | null
    outputAsset?: NullableStringFieldUpdateOperationsInput | string | null
    outputDecimals?: NullableIntFieldUpdateOperationsInput | number | null
    burnMint?: NullableStringFieldUpdateOperationsInput | string | null
    burnVerified?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    network?: StringFieldUpdateOperationsInput | string
    detail?: NullableJsonNullValueInput | InputJsonValue
    onChainVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RelayOfficialActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    entryKey?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    slot?: NullableIntFieldUpdateOperationsInput | number | null
    blockTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    walletRole?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    inputAmount?: NullableStringFieldUpdateOperationsInput | string | null
    inputAsset?: NullableStringFieldUpdateOperationsInput | string | null
    inputDecimals?: NullableIntFieldUpdateOperationsInput | number | null
    outputAmount?: NullableStringFieldUpdateOperationsInput | string | null
    outputAsset?: NullableStringFieldUpdateOperationsInput | string | null
    outputDecimals?: NullableIntFieldUpdateOperationsInput | number | null
    burnMint?: NullableStringFieldUpdateOperationsInput | string | null
    burnVerified?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    network?: StringFieldUpdateOperationsInput | string
    detail?: NullableJsonNullValueInput | InputJsonValue
    onChainVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RelayOfficialIndexStateCreateInput = {
    id?: string
    key: string
    lastRunAt?: Date | string | null
    lastStatus?: string | null
    lastError?: string | null
    lastSignature?: string | null
    lastReconciledAt?: Date | string | null
  }

  export type RelayOfficialIndexStateUncheckedCreateInput = {
    id?: string
    key: string
    lastRunAt?: Date | string | null
    lastStatus?: string | null
    lastError?: string | null
    lastSignature?: string | null
    lastReconciledAt?: Date | string | null
  }

  export type RelayOfficialIndexStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSignature?: NullableStringFieldUpdateOperationsInput | string | null
    lastReconciledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RelayOfficialIndexStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSignature?: NullableStringFieldUpdateOperationsInput | string | null
    lastReconciledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RelayOfficialIndexStateCreateManyInput = {
    id?: string
    key: string
    lastRunAt?: Date | string | null
    lastStatus?: string | null
    lastError?: string | null
    lastSignature?: string | null
    lastReconciledAt?: Date | string | null
  }

  export type RelayOfficialIndexStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSignature?: NullableStringFieldUpdateOperationsInput | string | null
    lastReconciledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RelayOfficialIndexStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSignature?: NullableStringFieldUpdateOperationsInput | string | null
    lastReconciledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumLaunchRouteFilter<$PrismaModel = never> = {
    equals?: $Enums.LaunchRoute | EnumLaunchRouteFieldRefInput<$PrismaModel>
    in?: $Enums.LaunchRoute[] | ListEnumLaunchRouteFieldRefInput<$PrismaModel>
    notIn?: $Enums.LaunchRoute[] | ListEnumLaunchRouteFieldRefInput<$PrismaModel>
    not?: NestedEnumLaunchRouteFilter<$PrismaModel> | $Enums.LaunchRoute
  }

  export type EnumLaunchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LaunchStatus | EnumLaunchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LaunchStatus[] | ListEnumLaunchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LaunchStatus[] | ListEnumLaunchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLaunchStatusFilter<$PrismaModel> | $Enums.LaunchStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LaunchEventListRelationFilter = {
    every?: LaunchEventWhereInput
    some?: LaunchEventWhereInput
    none?: LaunchEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LaunchEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LaunchCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorWallet?: SortOrder
    route?: SortOrder
    status?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    description?: SortOrder
    metadataUri?: SortOrder
    imageUrl?: SortOrder
    network?: SortOrder
    mintAddress?: SortOrder
    signature?: SortOrder
    slot?: SortOrder
    blockTime?: SortOrder
    idempotencyKey?: SortOrder
    poolAddress?: SortOrder
    poolVerifiedAt?: SortOrder
    curveState?: SortOrder
    lastError?: SortOrder
  }

  export type LaunchAvgOrderByAggregateInput = {
    slot?: SortOrder
  }

  export type LaunchMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorWallet?: SortOrder
    route?: SortOrder
    status?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    description?: SortOrder
    metadataUri?: SortOrder
    imageUrl?: SortOrder
    network?: SortOrder
    mintAddress?: SortOrder
    signature?: SortOrder
    slot?: SortOrder
    blockTime?: SortOrder
    idempotencyKey?: SortOrder
    poolAddress?: SortOrder
    poolVerifiedAt?: SortOrder
    lastError?: SortOrder
  }

  export type LaunchMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorWallet?: SortOrder
    route?: SortOrder
    status?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    description?: SortOrder
    metadataUri?: SortOrder
    imageUrl?: SortOrder
    network?: SortOrder
    mintAddress?: SortOrder
    signature?: SortOrder
    slot?: SortOrder
    blockTime?: SortOrder
    idempotencyKey?: SortOrder
    poolAddress?: SortOrder
    poolVerifiedAt?: SortOrder
    lastError?: SortOrder
  }

  export type LaunchSumOrderByAggregateInput = {
    slot?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumLaunchRouteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LaunchRoute | EnumLaunchRouteFieldRefInput<$PrismaModel>
    in?: $Enums.LaunchRoute[] | ListEnumLaunchRouteFieldRefInput<$PrismaModel>
    notIn?: $Enums.LaunchRoute[] | ListEnumLaunchRouteFieldRefInput<$PrismaModel>
    not?: NestedEnumLaunchRouteWithAggregatesFilter<$PrismaModel> | $Enums.LaunchRoute
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLaunchRouteFilter<$PrismaModel>
    _max?: NestedEnumLaunchRouteFilter<$PrismaModel>
  }

  export type EnumLaunchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LaunchStatus | EnumLaunchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LaunchStatus[] | ListEnumLaunchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LaunchStatus[] | ListEnumLaunchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLaunchStatusWithAggregatesFilter<$PrismaModel> | $Enums.LaunchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLaunchStatusFilter<$PrismaModel>
    _max?: NestedEnumLaunchStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type LaunchScalarRelationFilter = {
    is?: LaunchWhereInput
    isNot?: LaunchWhereInput
  }

  export type LaunchEventLaunchIdDedupeKeyCompoundUniqueInput = {
    launchId: string
    dedupeKey: string
  }

  export type LaunchEventCountOrderByAggregateInput = {
    id?: SortOrder
    launchId?: SortOrder
    createdAt?: SortOrder
    kind?: SortOrder
    detail?: SortOrder
    dedupeKey?: SortOrder
  }

  export type LaunchEventMaxOrderByAggregateInput = {
    id?: SortOrder
    launchId?: SortOrder
    createdAt?: SortOrder
    kind?: SortOrder
    dedupeKey?: SortOrder
  }

  export type LaunchEventMinOrderByAggregateInput = {
    id?: SortOrder
    launchId?: SortOrder
    createdAt?: SortOrder
    kind?: SortOrder
    dedupeKey?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UploadAuditCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    uploader?: SortOrder
    fileName?: SortOrder
    sizeBytes?: SortOrder
    mime?: SortOrder
    cid?: SortOrder
    status?: SortOrder
    reason?: SortOrder
  }

  export type UploadAuditAvgOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type UploadAuditMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    uploader?: SortOrder
    fileName?: SortOrder
    sizeBytes?: SortOrder
    mime?: SortOrder
    cid?: SortOrder
    status?: SortOrder
    reason?: SortOrder
  }

  export type UploadAuditMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    uploader?: SortOrder
    fileName?: SortOrder
    sizeBytes?: SortOrder
    mime?: SortOrder
    cid?: SortOrder
    status?: SortOrder
    reason?: SortOrder
  }

  export type UploadAuditSumOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RelayOfficialActivitySignatureEntryKeyCompoundUniqueInput = {
    signature: string
    entryKey: string
  }

  export type RelayOfficialActivityCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    signature?: SortOrder
    entryKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    slot?: SortOrder
    blockTime?: SortOrder
    walletRole?: SortOrder
    sender?: SortOrder
    recipient?: SortOrder
    inputAmount?: SortOrder
    inputAsset?: SortOrder
    inputDecimals?: SortOrder
    outputAmount?: SortOrder
    outputAsset?: SortOrder
    outputDecimals?: SortOrder
    burnMint?: SortOrder
    burnVerified?: SortOrder
    programId?: SortOrder
    network?: SortOrder
    detail?: SortOrder
    onChainVerified?: SortOrder
    verifiedAt?: SortOrder
  }

  export type RelayOfficialActivityAvgOrderByAggregateInput = {
    slot?: SortOrder
    inputDecimals?: SortOrder
    outputDecimals?: SortOrder
  }

  export type RelayOfficialActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    signature?: SortOrder
    entryKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    slot?: SortOrder
    blockTime?: SortOrder
    walletRole?: SortOrder
    sender?: SortOrder
    recipient?: SortOrder
    inputAmount?: SortOrder
    inputAsset?: SortOrder
    inputDecimals?: SortOrder
    outputAmount?: SortOrder
    outputAsset?: SortOrder
    outputDecimals?: SortOrder
    burnMint?: SortOrder
    burnVerified?: SortOrder
    programId?: SortOrder
    network?: SortOrder
    onChainVerified?: SortOrder
    verifiedAt?: SortOrder
  }

  export type RelayOfficialActivityMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    signature?: SortOrder
    entryKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    slot?: SortOrder
    blockTime?: SortOrder
    walletRole?: SortOrder
    sender?: SortOrder
    recipient?: SortOrder
    inputAmount?: SortOrder
    inputAsset?: SortOrder
    inputDecimals?: SortOrder
    outputAmount?: SortOrder
    outputAsset?: SortOrder
    outputDecimals?: SortOrder
    burnMint?: SortOrder
    burnVerified?: SortOrder
    programId?: SortOrder
    network?: SortOrder
    onChainVerified?: SortOrder
    verifiedAt?: SortOrder
  }

  export type RelayOfficialActivitySumOrderByAggregateInput = {
    slot?: SortOrder
    inputDecimals?: SortOrder
    outputDecimals?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RelayOfficialIndexStateCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    lastRunAt?: SortOrder
    lastStatus?: SortOrder
    lastError?: SortOrder
    lastSignature?: SortOrder
    lastReconciledAt?: SortOrder
  }

  export type RelayOfficialIndexStateMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    lastRunAt?: SortOrder
    lastStatus?: SortOrder
    lastError?: SortOrder
    lastSignature?: SortOrder
    lastReconciledAt?: SortOrder
  }

  export type RelayOfficialIndexStateMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    lastRunAt?: SortOrder
    lastStatus?: SortOrder
    lastError?: SortOrder
    lastSignature?: SortOrder
    lastReconciledAt?: SortOrder
  }

  export type LaunchEventCreateNestedManyWithoutLaunchInput = {
    create?: XOR<LaunchEventCreateWithoutLaunchInput, LaunchEventUncheckedCreateWithoutLaunchInput> | LaunchEventCreateWithoutLaunchInput[] | LaunchEventUncheckedCreateWithoutLaunchInput[]
    connectOrCreate?: LaunchEventCreateOrConnectWithoutLaunchInput | LaunchEventCreateOrConnectWithoutLaunchInput[]
    createMany?: LaunchEventCreateManyLaunchInputEnvelope
    connect?: LaunchEventWhereUniqueInput | LaunchEventWhereUniqueInput[]
  }

  export type LaunchEventUncheckedCreateNestedManyWithoutLaunchInput = {
    create?: XOR<LaunchEventCreateWithoutLaunchInput, LaunchEventUncheckedCreateWithoutLaunchInput> | LaunchEventCreateWithoutLaunchInput[] | LaunchEventUncheckedCreateWithoutLaunchInput[]
    connectOrCreate?: LaunchEventCreateOrConnectWithoutLaunchInput | LaunchEventCreateOrConnectWithoutLaunchInput[]
    createMany?: LaunchEventCreateManyLaunchInputEnvelope
    connect?: LaunchEventWhereUniqueInput | LaunchEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumLaunchRouteFieldUpdateOperationsInput = {
    set?: $Enums.LaunchRoute
  }

  export type EnumLaunchStatusFieldUpdateOperationsInput = {
    set?: $Enums.LaunchStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LaunchEventUpdateManyWithoutLaunchNestedInput = {
    create?: XOR<LaunchEventCreateWithoutLaunchInput, LaunchEventUncheckedCreateWithoutLaunchInput> | LaunchEventCreateWithoutLaunchInput[] | LaunchEventUncheckedCreateWithoutLaunchInput[]
    connectOrCreate?: LaunchEventCreateOrConnectWithoutLaunchInput | LaunchEventCreateOrConnectWithoutLaunchInput[]
    upsert?: LaunchEventUpsertWithWhereUniqueWithoutLaunchInput | LaunchEventUpsertWithWhereUniqueWithoutLaunchInput[]
    createMany?: LaunchEventCreateManyLaunchInputEnvelope
    set?: LaunchEventWhereUniqueInput | LaunchEventWhereUniqueInput[]
    disconnect?: LaunchEventWhereUniqueInput | LaunchEventWhereUniqueInput[]
    delete?: LaunchEventWhereUniqueInput | LaunchEventWhereUniqueInput[]
    connect?: LaunchEventWhereUniqueInput | LaunchEventWhereUniqueInput[]
    update?: LaunchEventUpdateWithWhereUniqueWithoutLaunchInput | LaunchEventUpdateWithWhereUniqueWithoutLaunchInput[]
    updateMany?: LaunchEventUpdateManyWithWhereWithoutLaunchInput | LaunchEventUpdateManyWithWhereWithoutLaunchInput[]
    deleteMany?: LaunchEventScalarWhereInput | LaunchEventScalarWhereInput[]
  }

  export type LaunchEventUncheckedUpdateManyWithoutLaunchNestedInput = {
    create?: XOR<LaunchEventCreateWithoutLaunchInput, LaunchEventUncheckedCreateWithoutLaunchInput> | LaunchEventCreateWithoutLaunchInput[] | LaunchEventUncheckedCreateWithoutLaunchInput[]
    connectOrCreate?: LaunchEventCreateOrConnectWithoutLaunchInput | LaunchEventCreateOrConnectWithoutLaunchInput[]
    upsert?: LaunchEventUpsertWithWhereUniqueWithoutLaunchInput | LaunchEventUpsertWithWhereUniqueWithoutLaunchInput[]
    createMany?: LaunchEventCreateManyLaunchInputEnvelope
    set?: LaunchEventWhereUniqueInput | LaunchEventWhereUniqueInput[]
    disconnect?: LaunchEventWhereUniqueInput | LaunchEventWhereUniqueInput[]
    delete?: LaunchEventWhereUniqueInput | LaunchEventWhereUniqueInput[]
    connect?: LaunchEventWhereUniqueInput | LaunchEventWhereUniqueInput[]
    update?: LaunchEventUpdateWithWhereUniqueWithoutLaunchInput | LaunchEventUpdateWithWhereUniqueWithoutLaunchInput[]
    updateMany?: LaunchEventUpdateManyWithWhereWithoutLaunchInput | LaunchEventUpdateManyWithWhereWithoutLaunchInput[]
    deleteMany?: LaunchEventScalarWhereInput | LaunchEventScalarWhereInput[]
  }

  export type LaunchCreateNestedOneWithoutTimelineInput = {
    create?: XOR<LaunchCreateWithoutTimelineInput, LaunchUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: LaunchCreateOrConnectWithoutTimelineInput
    connect?: LaunchWhereUniqueInput
  }

  export type LaunchUpdateOneRequiredWithoutTimelineNestedInput = {
    create?: XOR<LaunchCreateWithoutTimelineInput, LaunchUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: LaunchCreateOrConnectWithoutTimelineInput
    upsert?: LaunchUpsertWithoutTimelineInput
    connect?: LaunchWhereUniqueInput
    update?: XOR<XOR<LaunchUpdateToOneWithWhereWithoutTimelineInput, LaunchUpdateWithoutTimelineInput>, LaunchUncheckedUpdateWithoutTimelineInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumLaunchRouteFilter<$PrismaModel = never> = {
    equals?: $Enums.LaunchRoute | EnumLaunchRouteFieldRefInput<$PrismaModel>
    in?: $Enums.LaunchRoute[] | ListEnumLaunchRouteFieldRefInput<$PrismaModel>
    notIn?: $Enums.LaunchRoute[] | ListEnumLaunchRouteFieldRefInput<$PrismaModel>
    not?: NestedEnumLaunchRouteFilter<$PrismaModel> | $Enums.LaunchRoute
  }

  export type NestedEnumLaunchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LaunchStatus | EnumLaunchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LaunchStatus[] | ListEnumLaunchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LaunchStatus[] | ListEnumLaunchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLaunchStatusFilter<$PrismaModel> | $Enums.LaunchStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLaunchRouteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LaunchRoute | EnumLaunchRouteFieldRefInput<$PrismaModel>
    in?: $Enums.LaunchRoute[] | ListEnumLaunchRouteFieldRefInput<$PrismaModel>
    notIn?: $Enums.LaunchRoute[] | ListEnumLaunchRouteFieldRefInput<$PrismaModel>
    not?: NestedEnumLaunchRouteWithAggregatesFilter<$PrismaModel> | $Enums.LaunchRoute
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLaunchRouteFilter<$PrismaModel>
    _max?: NestedEnumLaunchRouteFilter<$PrismaModel>
  }

  export type NestedEnumLaunchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LaunchStatus | EnumLaunchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LaunchStatus[] | ListEnumLaunchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LaunchStatus[] | ListEnumLaunchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLaunchStatusWithAggregatesFilter<$PrismaModel> | $Enums.LaunchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLaunchStatusFilter<$PrismaModel>
    _max?: NestedEnumLaunchStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LaunchEventCreateWithoutLaunchInput = {
    id?: string
    createdAt?: Date | string
    kind: string
    detail?: NullableJsonNullValueInput | InputJsonValue
    dedupeKey: string
  }

  export type LaunchEventUncheckedCreateWithoutLaunchInput = {
    id?: string
    createdAt?: Date | string
    kind: string
    detail?: NullableJsonNullValueInput | InputJsonValue
    dedupeKey: string
  }

  export type LaunchEventCreateOrConnectWithoutLaunchInput = {
    where: LaunchEventWhereUniqueInput
    create: XOR<LaunchEventCreateWithoutLaunchInput, LaunchEventUncheckedCreateWithoutLaunchInput>
  }

  export type LaunchEventCreateManyLaunchInputEnvelope = {
    data: LaunchEventCreateManyLaunchInput | LaunchEventCreateManyLaunchInput[]
    skipDuplicates?: boolean
  }

  export type LaunchEventUpsertWithWhereUniqueWithoutLaunchInput = {
    where: LaunchEventWhereUniqueInput
    update: XOR<LaunchEventUpdateWithoutLaunchInput, LaunchEventUncheckedUpdateWithoutLaunchInput>
    create: XOR<LaunchEventCreateWithoutLaunchInput, LaunchEventUncheckedCreateWithoutLaunchInput>
  }

  export type LaunchEventUpdateWithWhereUniqueWithoutLaunchInput = {
    where: LaunchEventWhereUniqueInput
    data: XOR<LaunchEventUpdateWithoutLaunchInput, LaunchEventUncheckedUpdateWithoutLaunchInput>
  }

  export type LaunchEventUpdateManyWithWhereWithoutLaunchInput = {
    where: LaunchEventScalarWhereInput
    data: XOR<LaunchEventUpdateManyMutationInput, LaunchEventUncheckedUpdateManyWithoutLaunchInput>
  }

  export type LaunchEventScalarWhereInput = {
    AND?: LaunchEventScalarWhereInput | LaunchEventScalarWhereInput[]
    OR?: LaunchEventScalarWhereInput[]
    NOT?: LaunchEventScalarWhereInput | LaunchEventScalarWhereInput[]
    id?: StringFilter<"LaunchEvent"> | string
    launchId?: StringFilter<"LaunchEvent"> | string
    createdAt?: DateTimeFilter<"LaunchEvent"> | Date | string
    kind?: StringFilter<"LaunchEvent"> | string
    detail?: JsonNullableFilter<"LaunchEvent">
    dedupeKey?: StringFilter<"LaunchEvent"> | string
  }

  export type LaunchCreateWithoutTimelineInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorWallet: string
    route: $Enums.LaunchRoute
    status?: $Enums.LaunchStatus
    name: string
    symbol: string
    description?: string | null
    metadataUri?: string | null
    imageUrl?: string | null
    network: string
    mintAddress?: string | null
    signature?: string | null
    slot?: number | null
    blockTime?: Date | string | null
    idempotencyKey: string
    poolAddress?: string | null
    poolVerifiedAt?: Date | string | null
    curveState?: NullableJsonNullValueInput | InputJsonValue
    lastError?: string | null
  }

  export type LaunchUncheckedCreateWithoutTimelineInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorWallet: string
    route: $Enums.LaunchRoute
    status?: $Enums.LaunchStatus
    name: string
    symbol: string
    description?: string | null
    metadataUri?: string | null
    imageUrl?: string | null
    network: string
    mintAddress?: string | null
    signature?: string | null
    slot?: number | null
    blockTime?: Date | string | null
    idempotencyKey: string
    poolAddress?: string | null
    poolVerifiedAt?: Date | string | null
    curveState?: NullableJsonNullValueInput | InputJsonValue
    lastError?: string | null
  }

  export type LaunchCreateOrConnectWithoutTimelineInput = {
    where: LaunchWhereUniqueInput
    create: XOR<LaunchCreateWithoutTimelineInput, LaunchUncheckedCreateWithoutTimelineInput>
  }

  export type LaunchUpsertWithoutTimelineInput = {
    update: XOR<LaunchUpdateWithoutTimelineInput, LaunchUncheckedUpdateWithoutTimelineInput>
    create: XOR<LaunchCreateWithoutTimelineInput, LaunchUncheckedCreateWithoutTimelineInput>
    where?: LaunchWhereInput
  }

  export type LaunchUpdateToOneWithWhereWithoutTimelineInput = {
    where?: LaunchWhereInput
    data: XOR<LaunchUpdateWithoutTimelineInput, LaunchUncheckedUpdateWithoutTimelineInput>
  }

  export type LaunchUpdateWithoutTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorWallet?: StringFieldUpdateOperationsInput | string
    route?: EnumLaunchRouteFieldUpdateOperationsInput | $Enums.LaunchRoute
    status?: EnumLaunchStatusFieldUpdateOperationsInput | $Enums.LaunchStatus
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadataUri?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    network?: StringFieldUpdateOperationsInput | string
    mintAddress?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    slot?: NullableIntFieldUpdateOperationsInput | number | null
    blockTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    poolVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curveState?: NullableJsonNullValueInput | InputJsonValue
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LaunchUncheckedUpdateWithoutTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorWallet?: StringFieldUpdateOperationsInput | string
    route?: EnumLaunchRouteFieldUpdateOperationsInput | $Enums.LaunchRoute
    status?: EnumLaunchStatusFieldUpdateOperationsInput | $Enums.LaunchStatus
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadataUri?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    network?: StringFieldUpdateOperationsInput | string
    mintAddress?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    slot?: NullableIntFieldUpdateOperationsInput | number | null
    blockTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    poolVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curveState?: NullableJsonNullValueInput | InputJsonValue
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LaunchEventCreateManyLaunchInput = {
    id?: string
    createdAt?: Date | string
    kind: string
    detail?: NullableJsonNullValueInput | InputJsonValue
    dedupeKey: string
  }

  export type LaunchEventUpdateWithoutLaunchInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kind?: StringFieldUpdateOperationsInput | string
    detail?: NullableJsonNullValueInput | InputJsonValue
    dedupeKey?: StringFieldUpdateOperationsInput | string
  }

  export type LaunchEventUncheckedUpdateWithoutLaunchInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kind?: StringFieldUpdateOperationsInput | string
    detail?: NullableJsonNullValueInput | InputJsonValue
    dedupeKey?: StringFieldUpdateOperationsInput | string
  }

  export type LaunchEventUncheckedUpdateManyWithoutLaunchInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kind?: StringFieldUpdateOperationsInput | string
    detail?: NullableJsonNullValueInput | InputJsonValue
    dedupeKey?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}