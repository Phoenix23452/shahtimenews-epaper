
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
 * Model PageCategory
 * 
 */
export type PageCategory = $Result.DefaultSelection<Prisma.$PageCategoryPayload>
/**
 * Model NewspaperCategory
 * 
 */
export type NewspaperCategory = $Result.DefaultSelection<Prisma.$NewspaperCategoryPayload>
/**
 * Model Newspaper
 * 
 */
export type Newspaper = $Result.DefaultSelection<Prisma.$NewspaperPayload>
/**
 * Model NewsPage
 * 
 */
export type NewsPage = $Result.DefaultSelection<Prisma.$NewsPagePayload>
/**
 * Model MapData
 * 
 */
export type MapData = $Result.DefaultSelection<Prisma.$MapDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PageCategories
 * const pageCategories = await prisma.pageCategory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more PageCategories
   * const pageCategories = await prisma.pageCategory.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.pageCategory`: Exposes CRUD operations for the **PageCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageCategories
    * const pageCategories = await prisma.pageCategory.findMany()
    * ```
    */
  get pageCategory(): Prisma.PageCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newspaperCategory`: Exposes CRUD operations for the **NewspaperCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewspaperCategories
    * const newspaperCategories = await prisma.newspaperCategory.findMany()
    * ```
    */
  get newspaperCategory(): Prisma.NewspaperCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newspaper`: Exposes CRUD operations for the **Newspaper** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Newspapers
    * const newspapers = await prisma.newspaper.findMany()
    * ```
    */
  get newspaper(): Prisma.NewspaperDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsPage`: Exposes CRUD operations for the **NewsPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsPages
    * const newsPages = await prisma.newsPage.findMany()
    * ```
    */
  get newsPage(): Prisma.NewsPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapData`: Exposes CRUD operations for the **MapData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapData
    * const mapData = await prisma.mapData.findMany()
    * ```
    */
  get mapData(): Prisma.MapDataDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    PageCategory: 'PageCategory',
    NewspaperCategory: 'NewspaperCategory',
    Newspaper: 'Newspaper',
    NewsPage: 'NewsPage',
    MapData: 'MapData'
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
      modelProps: "pageCategory" | "newspaperCategory" | "newspaper" | "newsPage" | "mapData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PageCategory: {
        payload: Prisma.$PageCategoryPayload<ExtArgs>
        fields: Prisma.PageCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageCategoryPayload>
          }
          findFirst: {
            args: Prisma.PageCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageCategoryPayload>
          }
          findMany: {
            args: Prisma.PageCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageCategoryPayload>[]
          }
          create: {
            args: Prisma.PageCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageCategoryPayload>
          }
          createMany: {
            args: Prisma.PageCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageCategoryPayload>[]
          }
          delete: {
            args: Prisma.PageCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageCategoryPayload>
          }
          update: {
            args: Prisma.PageCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PageCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageCategoryPayload>[]
          }
          upsert: {
            args: Prisma.PageCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageCategoryPayload>
          }
          aggregate: {
            args: Prisma.PageCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageCategory>
          }
          groupBy: {
            args: Prisma.PageCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PageCategoryCountAggregateOutputType> | number
          }
        }
      }
      NewspaperCategory: {
        payload: Prisma.$NewspaperCategoryPayload<ExtArgs>
        fields: Prisma.NewspaperCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewspaperCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewspaperCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperCategoryPayload>
          }
          findFirst: {
            args: Prisma.NewspaperCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewspaperCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperCategoryPayload>
          }
          findMany: {
            args: Prisma.NewspaperCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperCategoryPayload>[]
          }
          create: {
            args: Prisma.NewspaperCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperCategoryPayload>
          }
          createMany: {
            args: Prisma.NewspaperCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewspaperCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperCategoryPayload>[]
          }
          delete: {
            args: Prisma.NewspaperCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperCategoryPayload>
          }
          update: {
            args: Prisma.NewspaperCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperCategoryPayload>
          }
          deleteMany: {
            args: Prisma.NewspaperCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewspaperCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewspaperCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperCategoryPayload>[]
          }
          upsert: {
            args: Prisma.NewspaperCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperCategoryPayload>
          }
          aggregate: {
            args: Prisma.NewspaperCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewspaperCategory>
          }
          groupBy: {
            args: Prisma.NewspaperCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewspaperCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewspaperCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<NewspaperCategoryCountAggregateOutputType> | number
          }
        }
      }
      Newspaper: {
        payload: Prisma.$NewspaperPayload<ExtArgs>
        fields: Prisma.NewspaperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewspaperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewspaperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperPayload>
          }
          findFirst: {
            args: Prisma.NewspaperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewspaperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperPayload>
          }
          findMany: {
            args: Prisma.NewspaperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperPayload>[]
          }
          create: {
            args: Prisma.NewspaperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperPayload>
          }
          createMany: {
            args: Prisma.NewspaperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewspaperCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperPayload>[]
          }
          delete: {
            args: Prisma.NewspaperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperPayload>
          }
          update: {
            args: Prisma.NewspaperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperPayload>
          }
          deleteMany: {
            args: Prisma.NewspaperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewspaperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewspaperUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperPayload>[]
          }
          upsert: {
            args: Prisma.NewspaperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewspaperPayload>
          }
          aggregate: {
            args: Prisma.NewspaperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewspaper>
          }
          groupBy: {
            args: Prisma.NewspaperGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewspaperGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewspaperCountArgs<ExtArgs>
            result: $Utils.Optional<NewspaperCountAggregateOutputType> | number
          }
        }
      }
      NewsPage: {
        payload: Prisma.$NewsPagePayload<ExtArgs>
        fields: Prisma.NewsPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPagePayload>
          }
          findFirst: {
            args: Prisma.NewsPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPagePayload>
          }
          findMany: {
            args: Prisma.NewsPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPagePayload>[]
          }
          create: {
            args: Prisma.NewsPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPagePayload>
          }
          createMany: {
            args: Prisma.NewsPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPagePayload>[]
          }
          delete: {
            args: Prisma.NewsPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPagePayload>
          }
          update: {
            args: Prisma.NewsPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPagePayload>
          }
          deleteMany: {
            args: Prisma.NewsPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPagePayload>[]
          }
          upsert: {
            args: Prisma.NewsPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPagePayload>
          }
          aggregate: {
            args: Prisma.NewsPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsPage>
          }
          groupBy: {
            args: Prisma.NewsPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsPageCountArgs<ExtArgs>
            result: $Utils.Optional<NewsPageCountAggregateOutputType> | number
          }
        }
      }
      MapData: {
        payload: Prisma.$MapDataPayload<ExtArgs>
        fields: Prisma.MapDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapDataPayload>
          }
          findFirst: {
            args: Prisma.MapDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapDataPayload>
          }
          findMany: {
            args: Prisma.MapDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapDataPayload>[]
          }
          create: {
            args: Prisma.MapDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapDataPayload>
          }
          createMany: {
            args: Prisma.MapDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapDataPayload>[]
          }
          delete: {
            args: Prisma.MapDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapDataPayload>
          }
          update: {
            args: Prisma.MapDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapDataPayload>
          }
          deleteMany: {
            args: Prisma.MapDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapDataPayload>[]
          }
          upsert: {
            args: Prisma.MapDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapDataPayload>
          }
          aggregate: {
            args: Prisma.MapDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapData>
          }
          groupBy: {
            args: Prisma.MapDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapDataCountArgs<ExtArgs>
            result: $Utils.Optional<MapDataCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    pageCategory?: PageCategoryOmit
    newspaperCategory?: NewspaperCategoryOmit
    newspaper?: NewspaperOmit
    newsPage?: NewsPageOmit
    mapData?: MapDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type PageCategoryCountOutputType
   */

  export type PageCategoryCountOutputType = {
    news_pages: number
  }

  export type PageCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news_pages?: boolean | PageCategoryCountOutputTypeCountNews_pagesArgs
  }

  // Custom InputTypes
  /**
   * PageCategoryCountOutputType without action
   */
  export type PageCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCategoryCountOutputType
     */
    select?: PageCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PageCategoryCountOutputType without action
   */
  export type PageCategoryCountOutputTypeCountNews_pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsPageWhereInput
  }


  /**
   * Count Type NewspaperCategoryCountOutputType
   */

  export type NewspaperCategoryCountOutputType = {
    newspapers: number
  }

  export type NewspaperCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newspapers?: boolean | NewspaperCategoryCountOutputTypeCountNewspapersArgs
  }

  // Custom InputTypes
  /**
   * NewspaperCategoryCountOutputType without action
   */
  export type NewspaperCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewspaperCategoryCountOutputType
     */
    select?: NewspaperCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewspaperCategoryCountOutputType without action
   */
  export type NewspaperCategoryCountOutputTypeCountNewspapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewspaperWhereInput
  }


  /**
   * Count Type NewsPageCountOutputType
   */

  export type NewsPageCountOutputType = {
    mapData: number
  }

  export type NewsPageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapData?: boolean | NewsPageCountOutputTypeCountMapDataArgs
  }

  // Custom InputTypes
  /**
   * NewsPageCountOutputType without action
   */
  export type NewsPageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPageCountOutputType
     */
    select?: NewsPageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsPageCountOutputType without action
   */
  export type NewsPageCountOutputTypeCountMapDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapDataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PageCategory
   */

  export type AggregatePageCategory = {
    _count: PageCategoryCountAggregateOutputType | null
    _avg: PageCategoryAvgAggregateOutputType | null
    _sum: PageCategorySumAggregateOutputType | null
    _min: PageCategoryMinAggregateOutputType | null
    _max: PageCategoryMaxAggregateOutputType | null
  }

  export type PageCategoryAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type PageCategorySumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type PageCategoryMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    order: number | null
  }

  export type PageCategoryMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    order: number | null
  }

  export type PageCategoryCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    order: number
    _all: number
  }


  export type PageCategoryAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type PageCategorySumAggregateInputType = {
    id?: true
    order?: true
  }

  export type PageCategoryMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    order?: true
  }

  export type PageCategoryMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    order?: true
  }

  export type PageCategoryCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    order?: true
    _all?: true
  }

  export type PageCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageCategory to aggregate.
     */
    where?: PageCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageCategories to fetch.
     */
    orderBy?: PageCategoryOrderByWithRelationInput | PageCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageCategories
    **/
    _count?: true | PageCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageCategoryMaxAggregateInputType
  }

  export type GetPageCategoryAggregateType<T extends PageCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePageCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageCategory[P]>
      : GetScalarType<T[P], AggregatePageCategory[P]>
  }




  export type PageCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageCategoryWhereInput
    orderBy?: PageCategoryOrderByWithAggregationInput | PageCategoryOrderByWithAggregationInput[]
    by: PageCategoryScalarFieldEnum[] | PageCategoryScalarFieldEnum
    having?: PageCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCategoryCountAggregateInputType | true
    _avg?: PageCategoryAvgAggregateInputType
    _sum?: PageCategorySumAggregateInputType
    _min?: PageCategoryMinAggregateInputType
    _max?: PageCategoryMaxAggregateInputType
  }

  export type PageCategoryGroupByOutputType = {
    id: number
    title: string | null
    slug: string
    order: number
    _count: PageCategoryCountAggregateOutputType | null
    _avg: PageCategoryAvgAggregateOutputType | null
    _sum: PageCategorySumAggregateOutputType | null
    _min: PageCategoryMinAggregateOutputType | null
    _max: PageCategoryMaxAggregateOutputType | null
  }

  type GetPageCategoryGroupByPayload<T extends PageCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PageCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PageCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    order?: boolean
    news_pages?: boolean | PageCategory$news_pagesArgs<ExtArgs>
    _count?: boolean | PageCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageCategory"]>

  export type PageCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    order?: boolean
  }, ExtArgs["result"]["pageCategory"]>

  export type PageCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    order?: boolean
  }, ExtArgs["result"]["pageCategory"]>

  export type PageCategorySelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    order?: boolean
  }

  export type PageCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "order", ExtArgs["result"]["pageCategory"]>
  export type PageCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news_pages?: boolean | PageCategory$news_pagesArgs<ExtArgs>
    _count?: boolean | PageCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PageCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PageCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PageCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageCategory"
    objects: {
      news_pages: Prisma.$NewsPagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      slug: string
      order: number
    }, ExtArgs["result"]["pageCategory"]>
    composites: {}
  }

  type PageCategoryGetPayload<S extends boolean | null | undefined | PageCategoryDefaultArgs> = $Result.GetResult<Prisma.$PageCategoryPayload, S>

  type PageCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCategoryCountAggregateInputType | true
    }

  export interface PageCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageCategory'], meta: { name: 'PageCategory' } }
    /**
     * Find zero or one PageCategory that matches the filter.
     * @param {PageCategoryFindUniqueArgs} args - Arguments to find a PageCategory
     * @example
     * // Get one PageCategory
     * const pageCategory = await prisma.pageCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageCategoryFindUniqueArgs>(args: SelectSubset<T, PageCategoryFindUniqueArgs<ExtArgs>>): Prisma__PageCategoryClient<$Result.GetResult<Prisma.$PageCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageCategoryFindUniqueOrThrowArgs} args - Arguments to find a PageCategory
     * @example
     * // Get one PageCategory
     * const pageCategory = await prisma.pageCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PageCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageCategoryClient<$Result.GetResult<Prisma.$PageCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCategoryFindFirstArgs} args - Arguments to find a PageCategory
     * @example
     * // Get one PageCategory
     * const pageCategory = await prisma.pageCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageCategoryFindFirstArgs>(args?: SelectSubset<T, PageCategoryFindFirstArgs<ExtArgs>>): Prisma__PageCategoryClient<$Result.GetResult<Prisma.$PageCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCategoryFindFirstOrThrowArgs} args - Arguments to find a PageCategory
     * @example
     * // Get one PageCategory
     * const pageCategory = await prisma.pageCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PageCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageCategoryClient<$Result.GetResult<Prisma.$PageCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageCategories
     * const pageCategories = await prisma.pageCategory.findMany()
     * 
     * // Get first 10 PageCategories
     * const pageCategories = await prisma.pageCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageCategoryWithIdOnly = await prisma.pageCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageCategoryFindManyArgs>(args?: SelectSubset<T, PageCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageCategory.
     * @param {PageCategoryCreateArgs} args - Arguments to create a PageCategory.
     * @example
     * // Create one PageCategory
     * const PageCategory = await prisma.pageCategory.create({
     *   data: {
     *     // ... data to create a PageCategory
     *   }
     * })
     * 
     */
    create<T extends PageCategoryCreateArgs>(args: SelectSubset<T, PageCategoryCreateArgs<ExtArgs>>): Prisma__PageCategoryClient<$Result.GetResult<Prisma.$PageCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageCategories.
     * @param {PageCategoryCreateManyArgs} args - Arguments to create many PageCategories.
     * @example
     * // Create many PageCategories
     * const pageCategory = await prisma.pageCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCategoryCreateManyArgs>(args?: SelectSubset<T, PageCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageCategories and returns the data saved in the database.
     * @param {PageCategoryCreateManyAndReturnArgs} args - Arguments to create many PageCategories.
     * @example
     * // Create many PageCategories
     * const pageCategory = await prisma.pageCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageCategories and only return the `id`
     * const pageCategoryWithIdOnly = await prisma.pageCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PageCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageCategory.
     * @param {PageCategoryDeleteArgs} args - Arguments to delete one PageCategory.
     * @example
     * // Delete one PageCategory
     * const PageCategory = await prisma.pageCategory.delete({
     *   where: {
     *     // ... filter to delete one PageCategory
     *   }
     * })
     * 
     */
    delete<T extends PageCategoryDeleteArgs>(args: SelectSubset<T, PageCategoryDeleteArgs<ExtArgs>>): Prisma__PageCategoryClient<$Result.GetResult<Prisma.$PageCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageCategory.
     * @param {PageCategoryUpdateArgs} args - Arguments to update one PageCategory.
     * @example
     * // Update one PageCategory
     * const pageCategory = await prisma.pageCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageCategoryUpdateArgs>(args: SelectSubset<T, PageCategoryUpdateArgs<ExtArgs>>): Prisma__PageCategoryClient<$Result.GetResult<Prisma.$PageCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageCategories.
     * @param {PageCategoryDeleteManyArgs} args - Arguments to filter PageCategories to delete.
     * @example
     * // Delete a few PageCategories
     * const { count } = await prisma.pageCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageCategoryDeleteManyArgs>(args?: SelectSubset<T, PageCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageCategories
     * const pageCategory = await prisma.pageCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageCategoryUpdateManyArgs>(args: SelectSubset<T, PageCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageCategories and returns the data updated in the database.
     * @param {PageCategoryUpdateManyAndReturnArgs} args - Arguments to update many PageCategories.
     * @example
     * // Update many PageCategories
     * const pageCategory = await prisma.pageCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageCategories and only return the `id`
     * const pageCategoryWithIdOnly = await prisma.pageCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends PageCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PageCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageCategory.
     * @param {PageCategoryUpsertArgs} args - Arguments to update or create a PageCategory.
     * @example
     * // Update or create a PageCategory
     * const pageCategory = await prisma.pageCategory.upsert({
     *   create: {
     *     // ... data to create a PageCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageCategory we want to update
     *   }
     * })
     */
    upsert<T extends PageCategoryUpsertArgs>(args: SelectSubset<T, PageCategoryUpsertArgs<ExtArgs>>): Prisma__PageCategoryClient<$Result.GetResult<Prisma.$PageCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCategoryCountArgs} args - Arguments to filter PageCategories to count.
     * @example
     * // Count the number of PageCategories
     * const count = await prisma.pageCategory.count({
     *   where: {
     *     // ... the filter for the PageCategories we want to count
     *   }
     * })
    **/
    count<T extends PageCategoryCountArgs>(
      args?: Subset<T, PageCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageCategoryAggregateArgs>(args: Subset<T, PageCategoryAggregateArgs>): Prisma.PrismaPromise<GetPageCategoryAggregateType<T>>

    /**
     * Group by PageCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCategoryGroupByArgs} args - Group by arguments.
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
      T extends PageCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PageCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PageCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageCategory model
   */
  readonly fields: PageCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news_pages<T extends PageCategory$news_pagesArgs<ExtArgs> = {}>(args?: Subset<T, PageCategory$news_pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PageCategory model
   */
  interface PageCategoryFieldRefs {
    readonly id: FieldRef<"PageCategory", 'Int'>
    readonly title: FieldRef<"PageCategory", 'String'>
    readonly slug: FieldRef<"PageCategory", 'String'>
    readonly order: FieldRef<"PageCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PageCategory findUnique
   */
  export type PageCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCategory
     */
    select?: PageCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageCategory
     */
    omit?: PageCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PageCategory to fetch.
     */
    where: PageCategoryWhereUniqueInput
  }

  /**
   * PageCategory findUniqueOrThrow
   */
  export type PageCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCategory
     */
    select?: PageCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageCategory
     */
    omit?: PageCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PageCategory to fetch.
     */
    where: PageCategoryWhereUniqueInput
  }

  /**
   * PageCategory findFirst
   */
  export type PageCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCategory
     */
    select?: PageCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageCategory
     */
    omit?: PageCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PageCategory to fetch.
     */
    where?: PageCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageCategories to fetch.
     */
    orderBy?: PageCategoryOrderByWithRelationInput | PageCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageCategories.
     */
    cursor?: PageCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageCategories.
     */
    distinct?: PageCategoryScalarFieldEnum | PageCategoryScalarFieldEnum[]
  }

  /**
   * PageCategory findFirstOrThrow
   */
  export type PageCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCategory
     */
    select?: PageCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageCategory
     */
    omit?: PageCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PageCategory to fetch.
     */
    where?: PageCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageCategories to fetch.
     */
    orderBy?: PageCategoryOrderByWithRelationInput | PageCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageCategories.
     */
    cursor?: PageCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageCategories.
     */
    distinct?: PageCategoryScalarFieldEnum | PageCategoryScalarFieldEnum[]
  }

  /**
   * PageCategory findMany
   */
  export type PageCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCategory
     */
    select?: PageCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageCategory
     */
    omit?: PageCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PageCategories to fetch.
     */
    where?: PageCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageCategories to fetch.
     */
    orderBy?: PageCategoryOrderByWithRelationInput | PageCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageCategories.
     */
    cursor?: PageCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageCategories.
     */
    skip?: number
    distinct?: PageCategoryScalarFieldEnum | PageCategoryScalarFieldEnum[]
  }

  /**
   * PageCategory create
   */
  export type PageCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCategory
     */
    select?: PageCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageCategory
     */
    omit?: PageCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PageCategory.
     */
    data: XOR<PageCategoryCreateInput, PageCategoryUncheckedCreateInput>
  }

  /**
   * PageCategory createMany
   */
  export type PageCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageCategories.
     */
    data: PageCategoryCreateManyInput | PageCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageCategory createManyAndReturn
   */
  export type PageCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCategory
     */
    select?: PageCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageCategory
     */
    omit?: PageCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many PageCategories.
     */
    data: PageCategoryCreateManyInput | PageCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageCategory update
   */
  export type PageCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCategory
     */
    select?: PageCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageCategory
     */
    omit?: PageCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PageCategory.
     */
    data: XOR<PageCategoryUpdateInput, PageCategoryUncheckedUpdateInput>
    /**
     * Choose, which PageCategory to update.
     */
    where: PageCategoryWhereUniqueInput
  }

  /**
   * PageCategory updateMany
   */
  export type PageCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageCategories.
     */
    data: XOR<PageCategoryUpdateManyMutationInput, PageCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PageCategories to update
     */
    where?: PageCategoryWhereInput
    /**
     * Limit how many PageCategories to update.
     */
    limit?: number
  }

  /**
   * PageCategory updateManyAndReturn
   */
  export type PageCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCategory
     */
    select?: PageCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageCategory
     */
    omit?: PageCategoryOmit<ExtArgs> | null
    /**
     * The data used to update PageCategories.
     */
    data: XOR<PageCategoryUpdateManyMutationInput, PageCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PageCategories to update
     */
    where?: PageCategoryWhereInput
    /**
     * Limit how many PageCategories to update.
     */
    limit?: number
  }

  /**
   * PageCategory upsert
   */
  export type PageCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCategory
     */
    select?: PageCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageCategory
     */
    omit?: PageCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PageCategory to update in case it exists.
     */
    where: PageCategoryWhereUniqueInput
    /**
     * In case the PageCategory found by the `where` argument doesn't exist, create a new PageCategory with this data.
     */
    create: XOR<PageCategoryCreateInput, PageCategoryUncheckedCreateInput>
    /**
     * In case the PageCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageCategoryUpdateInput, PageCategoryUncheckedUpdateInput>
  }

  /**
   * PageCategory delete
   */
  export type PageCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCategory
     */
    select?: PageCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageCategory
     */
    omit?: PageCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageCategoryInclude<ExtArgs> | null
    /**
     * Filter which PageCategory to delete.
     */
    where: PageCategoryWhereUniqueInput
  }

  /**
   * PageCategory deleteMany
   */
  export type PageCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageCategories to delete
     */
    where?: PageCategoryWhereInput
    /**
     * Limit how many PageCategories to delete.
     */
    limit?: number
  }

  /**
   * PageCategory.news_pages
   */
  export type PageCategory$news_pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPage
     */
    select?: NewsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPage
     */
    omit?: NewsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsPageInclude<ExtArgs> | null
    where?: NewsPageWhereInput
    orderBy?: NewsPageOrderByWithRelationInput | NewsPageOrderByWithRelationInput[]
    cursor?: NewsPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsPageScalarFieldEnum | NewsPageScalarFieldEnum[]
  }

  /**
   * PageCategory without action
   */
  export type PageCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCategory
     */
    select?: PageCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageCategory
     */
    omit?: PageCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageCategoryInclude<ExtArgs> | null
  }


  /**
   * Model NewspaperCategory
   */

  export type AggregateNewspaperCategory = {
    _count: NewspaperCategoryCountAggregateOutputType | null
    _avg: NewspaperCategoryAvgAggregateOutputType | null
    _sum: NewspaperCategorySumAggregateOutputType | null
    _min: NewspaperCategoryMinAggregateOutputType | null
    _max: NewspaperCategoryMaxAggregateOutputType | null
  }

  export type NewspaperCategoryAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type NewspaperCategorySumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type NewspaperCategoryMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    order: number | null
  }

  export type NewspaperCategoryMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    order: number | null
  }

  export type NewspaperCategoryCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    order: number
    _all: number
  }


  export type NewspaperCategoryAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type NewspaperCategorySumAggregateInputType = {
    id?: true
    order?: true
  }

  export type NewspaperCategoryMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    order?: true
  }

  export type NewspaperCategoryMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    order?: true
  }

  export type NewspaperCategoryCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    order?: true
    _all?: true
  }

  export type NewspaperCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewspaperCategory to aggregate.
     */
    where?: NewspaperCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewspaperCategories to fetch.
     */
    orderBy?: NewspaperCategoryOrderByWithRelationInput | NewspaperCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewspaperCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewspaperCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewspaperCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewspaperCategories
    **/
    _count?: true | NewspaperCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewspaperCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewspaperCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewspaperCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewspaperCategoryMaxAggregateInputType
  }

  export type GetNewspaperCategoryAggregateType<T extends NewspaperCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNewspaperCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewspaperCategory[P]>
      : GetScalarType<T[P], AggregateNewspaperCategory[P]>
  }




  export type NewspaperCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewspaperCategoryWhereInput
    orderBy?: NewspaperCategoryOrderByWithAggregationInput | NewspaperCategoryOrderByWithAggregationInput[]
    by: NewspaperCategoryScalarFieldEnum[] | NewspaperCategoryScalarFieldEnum
    having?: NewspaperCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewspaperCategoryCountAggregateInputType | true
    _avg?: NewspaperCategoryAvgAggregateInputType
    _sum?: NewspaperCategorySumAggregateInputType
    _min?: NewspaperCategoryMinAggregateInputType
    _max?: NewspaperCategoryMaxAggregateInputType
  }

  export type NewspaperCategoryGroupByOutputType = {
    id: number
    title: string | null
    slug: string
    order: number
    _count: NewspaperCategoryCountAggregateOutputType | null
    _avg: NewspaperCategoryAvgAggregateOutputType | null
    _sum: NewspaperCategorySumAggregateOutputType | null
    _min: NewspaperCategoryMinAggregateOutputType | null
    _max: NewspaperCategoryMaxAggregateOutputType | null
  }

  type GetNewspaperCategoryGroupByPayload<T extends NewspaperCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewspaperCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewspaperCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewspaperCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], NewspaperCategoryGroupByOutputType[P]>
        }
      >
    >


  export type NewspaperCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    order?: boolean
    newspapers?: boolean | NewspaperCategory$newspapersArgs<ExtArgs>
    _count?: boolean | NewspaperCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newspaperCategory"]>

  export type NewspaperCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    order?: boolean
  }, ExtArgs["result"]["newspaperCategory"]>

  export type NewspaperCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    order?: boolean
  }, ExtArgs["result"]["newspaperCategory"]>

  export type NewspaperCategorySelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    order?: boolean
  }

  export type NewspaperCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "order", ExtArgs["result"]["newspaperCategory"]>
  export type NewspaperCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newspapers?: boolean | NewspaperCategory$newspapersArgs<ExtArgs>
    _count?: boolean | NewspaperCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewspaperCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NewspaperCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewspaperCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewspaperCategory"
    objects: {
      newspapers: Prisma.$NewspaperPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      slug: string
      order: number
    }, ExtArgs["result"]["newspaperCategory"]>
    composites: {}
  }

  type NewspaperCategoryGetPayload<S extends boolean | null | undefined | NewspaperCategoryDefaultArgs> = $Result.GetResult<Prisma.$NewspaperCategoryPayload, S>

  type NewspaperCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewspaperCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewspaperCategoryCountAggregateInputType | true
    }

  export interface NewspaperCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewspaperCategory'], meta: { name: 'NewspaperCategory' } }
    /**
     * Find zero or one NewspaperCategory that matches the filter.
     * @param {NewspaperCategoryFindUniqueArgs} args - Arguments to find a NewspaperCategory
     * @example
     * // Get one NewspaperCategory
     * const newspaperCategory = await prisma.newspaperCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewspaperCategoryFindUniqueArgs>(args: SelectSubset<T, NewspaperCategoryFindUniqueArgs<ExtArgs>>): Prisma__NewspaperCategoryClient<$Result.GetResult<Prisma.$NewspaperCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewspaperCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewspaperCategoryFindUniqueOrThrowArgs} args - Arguments to find a NewspaperCategory
     * @example
     * // Get one NewspaperCategory
     * const newspaperCategory = await prisma.newspaperCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewspaperCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, NewspaperCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewspaperCategoryClient<$Result.GetResult<Prisma.$NewspaperCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewspaperCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperCategoryFindFirstArgs} args - Arguments to find a NewspaperCategory
     * @example
     * // Get one NewspaperCategory
     * const newspaperCategory = await prisma.newspaperCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewspaperCategoryFindFirstArgs>(args?: SelectSubset<T, NewspaperCategoryFindFirstArgs<ExtArgs>>): Prisma__NewspaperCategoryClient<$Result.GetResult<Prisma.$NewspaperCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewspaperCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperCategoryFindFirstOrThrowArgs} args - Arguments to find a NewspaperCategory
     * @example
     * // Get one NewspaperCategory
     * const newspaperCategory = await prisma.newspaperCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewspaperCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, NewspaperCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewspaperCategoryClient<$Result.GetResult<Prisma.$NewspaperCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewspaperCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewspaperCategories
     * const newspaperCategories = await prisma.newspaperCategory.findMany()
     * 
     * // Get first 10 NewspaperCategories
     * const newspaperCategories = await prisma.newspaperCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newspaperCategoryWithIdOnly = await prisma.newspaperCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewspaperCategoryFindManyArgs>(args?: SelectSubset<T, NewspaperCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewspaperCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewspaperCategory.
     * @param {NewspaperCategoryCreateArgs} args - Arguments to create a NewspaperCategory.
     * @example
     * // Create one NewspaperCategory
     * const NewspaperCategory = await prisma.newspaperCategory.create({
     *   data: {
     *     // ... data to create a NewspaperCategory
     *   }
     * })
     * 
     */
    create<T extends NewspaperCategoryCreateArgs>(args: SelectSubset<T, NewspaperCategoryCreateArgs<ExtArgs>>): Prisma__NewspaperCategoryClient<$Result.GetResult<Prisma.$NewspaperCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewspaperCategories.
     * @param {NewspaperCategoryCreateManyArgs} args - Arguments to create many NewspaperCategories.
     * @example
     * // Create many NewspaperCategories
     * const newspaperCategory = await prisma.newspaperCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewspaperCategoryCreateManyArgs>(args?: SelectSubset<T, NewspaperCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewspaperCategories and returns the data saved in the database.
     * @param {NewspaperCategoryCreateManyAndReturnArgs} args - Arguments to create many NewspaperCategories.
     * @example
     * // Create many NewspaperCategories
     * const newspaperCategory = await prisma.newspaperCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewspaperCategories and only return the `id`
     * const newspaperCategoryWithIdOnly = await prisma.newspaperCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewspaperCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, NewspaperCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewspaperCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewspaperCategory.
     * @param {NewspaperCategoryDeleteArgs} args - Arguments to delete one NewspaperCategory.
     * @example
     * // Delete one NewspaperCategory
     * const NewspaperCategory = await prisma.newspaperCategory.delete({
     *   where: {
     *     // ... filter to delete one NewspaperCategory
     *   }
     * })
     * 
     */
    delete<T extends NewspaperCategoryDeleteArgs>(args: SelectSubset<T, NewspaperCategoryDeleteArgs<ExtArgs>>): Prisma__NewspaperCategoryClient<$Result.GetResult<Prisma.$NewspaperCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewspaperCategory.
     * @param {NewspaperCategoryUpdateArgs} args - Arguments to update one NewspaperCategory.
     * @example
     * // Update one NewspaperCategory
     * const newspaperCategory = await prisma.newspaperCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewspaperCategoryUpdateArgs>(args: SelectSubset<T, NewspaperCategoryUpdateArgs<ExtArgs>>): Prisma__NewspaperCategoryClient<$Result.GetResult<Prisma.$NewspaperCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewspaperCategories.
     * @param {NewspaperCategoryDeleteManyArgs} args - Arguments to filter NewspaperCategories to delete.
     * @example
     * // Delete a few NewspaperCategories
     * const { count } = await prisma.newspaperCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewspaperCategoryDeleteManyArgs>(args?: SelectSubset<T, NewspaperCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewspaperCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewspaperCategories
     * const newspaperCategory = await prisma.newspaperCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewspaperCategoryUpdateManyArgs>(args: SelectSubset<T, NewspaperCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewspaperCategories and returns the data updated in the database.
     * @param {NewspaperCategoryUpdateManyAndReturnArgs} args - Arguments to update many NewspaperCategories.
     * @example
     * // Update many NewspaperCategories
     * const newspaperCategory = await prisma.newspaperCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewspaperCategories and only return the `id`
     * const newspaperCategoryWithIdOnly = await prisma.newspaperCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewspaperCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, NewspaperCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewspaperCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewspaperCategory.
     * @param {NewspaperCategoryUpsertArgs} args - Arguments to update or create a NewspaperCategory.
     * @example
     * // Update or create a NewspaperCategory
     * const newspaperCategory = await prisma.newspaperCategory.upsert({
     *   create: {
     *     // ... data to create a NewspaperCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewspaperCategory we want to update
     *   }
     * })
     */
    upsert<T extends NewspaperCategoryUpsertArgs>(args: SelectSubset<T, NewspaperCategoryUpsertArgs<ExtArgs>>): Prisma__NewspaperCategoryClient<$Result.GetResult<Prisma.$NewspaperCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewspaperCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperCategoryCountArgs} args - Arguments to filter NewspaperCategories to count.
     * @example
     * // Count the number of NewspaperCategories
     * const count = await prisma.newspaperCategory.count({
     *   where: {
     *     // ... the filter for the NewspaperCategories we want to count
     *   }
     * })
    **/
    count<T extends NewspaperCategoryCountArgs>(
      args?: Subset<T, NewspaperCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewspaperCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewspaperCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewspaperCategoryAggregateArgs>(args: Subset<T, NewspaperCategoryAggregateArgs>): Prisma.PrismaPromise<GetNewspaperCategoryAggregateType<T>>

    /**
     * Group by NewspaperCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperCategoryGroupByArgs} args - Group by arguments.
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
      T extends NewspaperCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewspaperCategoryGroupByArgs['orderBy'] }
        : { orderBy?: NewspaperCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewspaperCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewspaperCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewspaperCategory model
   */
  readonly fields: NewspaperCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewspaperCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewspaperCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    newspapers<T extends NewspaperCategory$newspapersArgs<ExtArgs> = {}>(args?: Subset<T, NewspaperCategory$newspapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewspaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NewspaperCategory model
   */
  interface NewspaperCategoryFieldRefs {
    readonly id: FieldRef<"NewspaperCategory", 'Int'>
    readonly title: FieldRef<"NewspaperCategory", 'String'>
    readonly slug: FieldRef<"NewspaperCategory", 'String'>
    readonly order: FieldRef<"NewspaperCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NewspaperCategory findUnique
   */
  export type NewspaperCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewspaperCategory
     */
    select?: NewspaperCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewspaperCategory
     */
    omit?: NewspaperCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewspaperCategory to fetch.
     */
    where: NewspaperCategoryWhereUniqueInput
  }

  /**
   * NewspaperCategory findUniqueOrThrow
   */
  export type NewspaperCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewspaperCategory
     */
    select?: NewspaperCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewspaperCategory
     */
    omit?: NewspaperCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewspaperCategory to fetch.
     */
    where: NewspaperCategoryWhereUniqueInput
  }

  /**
   * NewspaperCategory findFirst
   */
  export type NewspaperCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewspaperCategory
     */
    select?: NewspaperCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewspaperCategory
     */
    omit?: NewspaperCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewspaperCategory to fetch.
     */
    where?: NewspaperCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewspaperCategories to fetch.
     */
    orderBy?: NewspaperCategoryOrderByWithRelationInput | NewspaperCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewspaperCategories.
     */
    cursor?: NewspaperCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewspaperCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewspaperCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewspaperCategories.
     */
    distinct?: NewspaperCategoryScalarFieldEnum | NewspaperCategoryScalarFieldEnum[]
  }

  /**
   * NewspaperCategory findFirstOrThrow
   */
  export type NewspaperCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewspaperCategory
     */
    select?: NewspaperCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewspaperCategory
     */
    omit?: NewspaperCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewspaperCategory to fetch.
     */
    where?: NewspaperCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewspaperCategories to fetch.
     */
    orderBy?: NewspaperCategoryOrderByWithRelationInput | NewspaperCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewspaperCategories.
     */
    cursor?: NewspaperCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewspaperCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewspaperCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewspaperCategories.
     */
    distinct?: NewspaperCategoryScalarFieldEnum | NewspaperCategoryScalarFieldEnum[]
  }

  /**
   * NewspaperCategory findMany
   */
  export type NewspaperCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewspaperCategory
     */
    select?: NewspaperCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewspaperCategory
     */
    omit?: NewspaperCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewspaperCategories to fetch.
     */
    where?: NewspaperCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewspaperCategories to fetch.
     */
    orderBy?: NewspaperCategoryOrderByWithRelationInput | NewspaperCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewspaperCategories.
     */
    cursor?: NewspaperCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewspaperCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewspaperCategories.
     */
    skip?: number
    distinct?: NewspaperCategoryScalarFieldEnum | NewspaperCategoryScalarFieldEnum[]
  }

  /**
   * NewspaperCategory create
   */
  export type NewspaperCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewspaperCategory
     */
    select?: NewspaperCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewspaperCategory
     */
    omit?: NewspaperCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a NewspaperCategory.
     */
    data: XOR<NewspaperCategoryCreateInput, NewspaperCategoryUncheckedCreateInput>
  }

  /**
   * NewspaperCategory createMany
   */
  export type NewspaperCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewspaperCategories.
     */
    data: NewspaperCategoryCreateManyInput | NewspaperCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewspaperCategory createManyAndReturn
   */
  export type NewspaperCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewspaperCategory
     */
    select?: NewspaperCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewspaperCategory
     */
    omit?: NewspaperCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many NewspaperCategories.
     */
    data: NewspaperCategoryCreateManyInput | NewspaperCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewspaperCategory update
   */
  export type NewspaperCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewspaperCategory
     */
    select?: NewspaperCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewspaperCategory
     */
    omit?: NewspaperCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a NewspaperCategory.
     */
    data: XOR<NewspaperCategoryUpdateInput, NewspaperCategoryUncheckedUpdateInput>
    /**
     * Choose, which NewspaperCategory to update.
     */
    where: NewspaperCategoryWhereUniqueInput
  }

  /**
   * NewspaperCategory updateMany
   */
  export type NewspaperCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewspaperCategories.
     */
    data: XOR<NewspaperCategoryUpdateManyMutationInput, NewspaperCategoryUncheckedUpdateManyInput>
    /**
     * Filter which NewspaperCategories to update
     */
    where?: NewspaperCategoryWhereInput
    /**
     * Limit how many NewspaperCategories to update.
     */
    limit?: number
  }

  /**
   * NewspaperCategory updateManyAndReturn
   */
  export type NewspaperCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewspaperCategory
     */
    select?: NewspaperCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewspaperCategory
     */
    omit?: NewspaperCategoryOmit<ExtArgs> | null
    /**
     * The data used to update NewspaperCategories.
     */
    data: XOR<NewspaperCategoryUpdateManyMutationInput, NewspaperCategoryUncheckedUpdateManyInput>
    /**
     * Filter which NewspaperCategories to update
     */
    where?: NewspaperCategoryWhereInput
    /**
     * Limit how many NewspaperCategories to update.
     */
    limit?: number
  }

  /**
   * NewspaperCategory upsert
   */
  export type NewspaperCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewspaperCategory
     */
    select?: NewspaperCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewspaperCategory
     */
    omit?: NewspaperCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the NewspaperCategory to update in case it exists.
     */
    where: NewspaperCategoryWhereUniqueInput
    /**
     * In case the NewspaperCategory found by the `where` argument doesn't exist, create a new NewspaperCategory with this data.
     */
    create: XOR<NewspaperCategoryCreateInput, NewspaperCategoryUncheckedCreateInput>
    /**
     * In case the NewspaperCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewspaperCategoryUpdateInput, NewspaperCategoryUncheckedUpdateInput>
  }

  /**
   * NewspaperCategory delete
   */
  export type NewspaperCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewspaperCategory
     */
    select?: NewspaperCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewspaperCategory
     */
    omit?: NewspaperCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperCategoryInclude<ExtArgs> | null
    /**
     * Filter which NewspaperCategory to delete.
     */
    where: NewspaperCategoryWhereUniqueInput
  }

  /**
   * NewspaperCategory deleteMany
   */
  export type NewspaperCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewspaperCategories to delete
     */
    where?: NewspaperCategoryWhereInput
    /**
     * Limit how many NewspaperCategories to delete.
     */
    limit?: number
  }

  /**
   * NewspaperCategory.newspapers
   */
  export type NewspaperCategory$newspapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newspaper
     */
    select?: NewspaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newspaper
     */
    omit?: NewspaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperInclude<ExtArgs> | null
    where?: NewspaperWhereInput
    orderBy?: NewspaperOrderByWithRelationInput | NewspaperOrderByWithRelationInput[]
    cursor?: NewspaperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewspaperScalarFieldEnum | NewspaperScalarFieldEnum[]
  }

  /**
   * NewspaperCategory without action
   */
  export type NewspaperCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewspaperCategory
     */
    select?: NewspaperCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewspaperCategory
     */
    omit?: NewspaperCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Newspaper
   */

  export type AggregateNewspaper = {
    _count: NewspaperCountAggregateOutputType | null
    _avg: NewspaperAvgAggregateOutputType | null
    _sum: NewspaperSumAggregateOutputType | null
    _min: NewspaperMinAggregateOutputType | null
    _max: NewspaperMaxAggregateOutputType | null
  }

  export type NewspaperAvgAggregateOutputType = {
    id: number | null
    title_id: number | null
  }

  export type NewspaperSumAggregateOutputType = {
    id: number | null
    title_id: number | null
  }

  export type NewspaperMinAggregateOutputType = {
    id: number | null
    title_id: number | null
    date: string | null
  }

  export type NewspaperMaxAggregateOutputType = {
    id: number | null
    title_id: number | null
    date: string | null
  }

  export type NewspaperCountAggregateOutputType = {
    id: number
    title_id: number
    date: number
    _all: number
  }


  export type NewspaperAvgAggregateInputType = {
    id?: true
    title_id?: true
  }

  export type NewspaperSumAggregateInputType = {
    id?: true
    title_id?: true
  }

  export type NewspaperMinAggregateInputType = {
    id?: true
    title_id?: true
    date?: true
  }

  export type NewspaperMaxAggregateInputType = {
    id?: true
    title_id?: true
    date?: true
  }

  export type NewspaperCountAggregateInputType = {
    id?: true
    title_id?: true
    date?: true
    _all?: true
  }

  export type NewspaperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Newspaper to aggregate.
     */
    where?: NewspaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newspapers to fetch.
     */
    orderBy?: NewspaperOrderByWithRelationInput | NewspaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewspaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newspapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newspapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Newspapers
    **/
    _count?: true | NewspaperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewspaperAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewspaperSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewspaperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewspaperMaxAggregateInputType
  }

  export type GetNewspaperAggregateType<T extends NewspaperAggregateArgs> = {
        [P in keyof T & keyof AggregateNewspaper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewspaper[P]>
      : GetScalarType<T[P], AggregateNewspaper[P]>
  }




  export type NewspaperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewspaperWhereInput
    orderBy?: NewspaperOrderByWithAggregationInput | NewspaperOrderByWithAggregationInput[]
    by: NewspaperScalarFieldEnum[] | NewspaperScalarFieldEnum
    having?: NewspaperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewspaperCountAggregateInputType | true
    _avg?: NewspaperAvgAggregateInputType
    _sum?: NewspaperSumAggregateInputType
    _min?: NewspaperMinAggregateInputType
    _max?: NewspaperMaxAggregateInputType
  }

  export type NewspaperGroupByOutputType = {
    id: number
    title_id: number
    date: string
    _count: NewspaperCountAggregateOutputType | null
    _avg: NewspaperAvgAggregateOutputType | null
    _sum: NewspaperSumAggregateOutputType | null
    _min: NewspaperMinAggregateOutputType | null
    _max: NewspaperMaxAggregateOutputType | null
  }

  type GetNewspaperGroupByPayload<T extends NewspaperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewspaperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewspaperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewspaperGroupByOutputType[P]>
            : GetScalarType<T[P], NewspaperGroupByOutputType[P]>
        }
      >
    >


  export type NewspaperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_id?: boolean
    date?: boolean
    newspaper_categories?: boolean | NewspaperCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newspaper"]>

  export type NewspaperSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_id?: boolean
    date?: boolean
    newspaper_categories?: boolean | NewspaperCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newspaper"]>

  export type NewspaperSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_id?: boolean
    date?: boolean
    newspaper_categories?: boolean | NewspaperCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newspaper"]>

  export type NewspaperSelectScalar = {
    id?: boolean
    title_id?: boolean
    date?: boolean
  }

  export type NewspaperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title_id" | "date", ExtArgs["result"]["newspaper"]>
  export type NewspaperInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newspaper_categories?: boolean | NewspaperCategoryDefaultArgs<ExtArgs>
  }
  export type NewspaperIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newspaper_categories?: boolean | NewspaperCategoryDefaultArgs<ExtArgs>
  }
  export type NewspaperIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newspaper_categories?: boolean | NewspaperCategoryDefaultArgs<ExtArgs>
  }

  export type $NewspaperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Newspaper"
    objects: {
      newspaper_categories: Prisma.$NewspaperCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title_id: number
      date: string
    }, ExtArgs["result"]["newspaper"]>
    composites: {}
  }

  type NewspaperGetPayload<S extends boolean | null | undefined | NewspaperDefaultArgs> = $Result.GetResult<Prisma.$NewspaperPayload, S>

  type NewspaperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewspaperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewspaperCountAggregateInputType | true
    }

  export interface NewspaperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Newspaper'], meta: { name: 'Newspaper' } }
    /**
     * Find zero or one Newspaper that matches the filter.
     * @param {NewspaperFindUniqueArgs} args - Arguments to find a Newspaper
     * @example
     * // Get one Newspaper
     * const newspaper = await prisma.newspaper.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewspaperFindUniqueArgs>(args: SelectSubset<T, NewspaperFindUniqueArgs<ExtArgs>>): Prisma__NewspaperClient<$Result.GetResult<Prisma.$NewspaperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Newspaper that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewspaperFindUniqueOrThrowArgs} args - Arguments to find a Newspaper
     * @example
     * // Get one Newspaper
     * const newspaper = await prisma.newspaper.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewspaperFindUniqueOrThrowArgs>(args: SelectSubset<T, NewspaperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewspaperClient<$Result.GetResult<Prisma.$NewspaperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Newspaper that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperFindFirstArgs} args - Arguments to find a Newspaper
     * @example
     * // Get one Newspaper
     * const newspaper = await prisma.newspaper.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewspaperFindFirstArgs>(args?: SelectSubset<T, NewspaperFindFirstArgs<ExtArgs>>): Prisma__NewspaperClient<$Result.GetResult<Prisma.$NewspaperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Newspaper that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperFindFirstOrThrowArgs} args - Arguments to find a Newspaper
     * @example
     * // Get one Newspaper
     * const newspaper = await prisma.newspaper.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewspaperFindFirstOrThrowArgs>(args?: SelectSubset<T, NewspaperFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewspaperClient<$Result.GetResult<Prisma.$NewspaperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Newspapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Newspapers
     * const newspapers = await prisma.newspaper.findMany()
     * 
     * // Get first 10 Newspapers
     * const newspapers = await prisma.newspaper.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newspaperWithIdOnly = await prisma.newspaper.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewspaperFindManyArgs>(args?: SelectSubset<T, NewspaperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewspaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Newspaper.
     * @param {NewspaperCreateArgs} args - Arguments to create a Newspaper.
     * @example
     * // Create one Newspaper
     * const Newspaper = await prisma.newspaper.create({
     *   data: {
     *     // ... data to create a Newspaper
     *   }
     * })
     * 
     */
    create<T extends NewspaperCreateArgs>(args: SelectSubset<T, NewspaperCreateArgs<ExtArgs>>): Prisma__NewspaperClient<$Result.GetResult<Prisma.$NewspaperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Newspapers.
     * @param {NewspaperCreateManyArgs} args - Arguments to create many Newspapers.
     * @example
     * // Create many Newspapers
     * const newspaper = await prisma.newspaper.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewspaperCreateManyArgs>(args?: SelectSubset<T, NewspaperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Newspapers and returns the data saved in the database.
     * @param {NewspaperCreateManyAndReturnArgs} args - Arguments to create many Newspapers.
     * @example
     * // Create many Newspapers
     * const newspaper = await prisma.newspaper.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Newspapers and only return the `id`
     * const newspaperWithIdOnly = await prisma.newspaper.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewspaperCreateManyAndReturnArgs>(args?: SelectSubset<T, NewspaperCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewspaperPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Newspaper.
     * @param {NewspaperDeleteArgs} args - Arguments to delete one Newspaper.
     * @example
     * // Delete one Newspaper
     * const Newspaper = await prisma.newspaper.delete({
     *   where: {
     *     // ... filter to delete one Newspaper
     *   }
     * })
     * 
     */
    delete<T extends NewspaperDeleteArgs>(args: SelectSubset<T, NewspaperDeleteArgs<ExtArgs>>): Prisma__NewspaperClient<$Result.GetResult<Prisma.$NewspaperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Newspaper.
     * @param {NewspaperUpdateArgs} args - Arguments to update one Newspaper.
     * @example
     * // Update one Newspaper
     * const newspaper = await prisma.newspaper.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewspaperUpdateArgs>(args: SelectSubset<T, NewspaperUpdateArgs<ExtArgs>>): Prisma__NewspaperClient<$Result.GetResult<Prisma.$NewspaperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Newspapers.
     * @param {NewspaperDeleteManyArgs} args - Arguments to filter Newspapers to delete.
     * @example
     * // Delete a few Newspapers
     * const { count } = await prisma.newspaper.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewspaperDeleteManyArgs>(args?: SelectSubset<T, NewspaperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Newspapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Newspapers
     * const newspaper = await prisma.newspaper.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewspaperUpdateManyArgs>(args: SelectSubset<T, NewspaperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Newspapers and returns the data updated in the database.
     * @param {NewspaperUpdateManyAndReturnArgs} args - Arguments to update many Newspapers.
     * @example
     * // Update many Newspapers
     * const newspaper = await prisma.newspaper.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Newspapers and only return the `id`
     * const newspaperWithIdOnly = await prisma.newspaper.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewspaperUpdateManyAndReturnArgs>(args: SelectSubset<T, NewspaperUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewspaperPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Newspaper.
     * @param {NewspaperUpsertArgs} args - Arguments to update or create a Newspaper.
     * @example
     * // Update or create a Newspaper
     * const newspaper = await prisma.newspaper.upsert({
     *   create: {
     *     // ... data to create a Newspaper
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Newspaper we want to update
     *   }
     * })
     */
    upsert<T extends NewspaperUpsertArgs>(args: SelectSubset<T, NewspaperUpsertArgs<ExtArgs>>): Prisma__NewspaperClient<$Result.GetResult<Prisma.$NewspaperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Newspapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperCountArgs} args - Arguments to filter Newspapers to count.
     * @example
     * // Count the number of Newspapers
     * const count = await prisma.newspaper.count({
     *   where: {
     *     // ... the filter for the Newspapers we want to count
     *   }
     * })
    **/
    count<T extends NewspaperCountArgs>(
      args?: Subset<T, NewspaperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewspaperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Newspaper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewspaperAggregateArgs>(args: Subset<T, NewspaperAggregateArgs>): Prisma.PrismaPromise<GetNewspaperAggregateType<T>>

    /**
     * Group by Newspaper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewspaperGroupByArgs} args - Group by arguments.
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
      T extends NewspaperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewspaperGroupByArgs['orderBy'] }
        : { orderBy?: NewspaperGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewspaperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewspaperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Newspaper model
   */
  readonly fields: NewspaperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Newspaper.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewspaperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    newspaper_categories<T extends NewspaperCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewspaperCategoryDefaultArgs<ExtArgs>>): Prisma__NewspaperCategoryClient<$Result.GetResult<Prisma.$NewspaperCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Newspaper model
   */
  interface NewspaperFieldRefs {
    readonly id: FieldRef<"Newspaper", 'Int'>
    readonly title_id: FieldRef<"Newspaper", 'Int'>
    readonly date: FieldRef<"Newspaper", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Newspaper findUnique
   */
  export type NewspaperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newspaper
     */
    select?: NewspaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newspaper
     */
    omit?: NewspaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperInclude<ExtArgs> | null
    /**
     * Filter, which Newspaper to fetch.
     */
    where: NewspaperWhereUniqueInput
  }

  /**
   * Newspaper findUniqueOrThrow
   */
  export type NewspaperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newspaper
     */
    select?: NewspaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newspaper
     */
    omit?: NewspaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperInclude<ExtArgs> | null
    /**
     * Filter, which Newspaper to fetch.
     */
    where: NewspaperWhereUniqueInput
  }

  /**
   * Newspaper findFirst
   */
  export type NewspaperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newspaper
     */
    select?: NewspaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newspaper
     */
    omit?: NewspaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperInclude<ExtArgs> | null
    /**
     * Filter, which Newspaper to fetch.
     */
    where?: NewspaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newspapers to fetch.
     */
    orderBy?: NewspaperOrderByWithRelationInput | NewspaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Newspapers.
     */
    cursor?: NewspaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newspapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newspapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Newspapers.
     */
    distinct?: NewspaperScalarFieldEnum | NewspaperScalarFieldEnum[]
  }

  /**
   * Newspaper findFirstOrThrow
   */
  export type NewspaperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newspaper
     */
    select?: NewspaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newspaper
     */
    omit?: NewspaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperInclude<ExtArgs> | null
    /**
     * Filter, which Newspaper to fetch.
     */
    where?: NewspaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newspapers to fetch.
     */
    orderBy?: NewspaperOrderByWithRelationInput | NewspaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Newspapers.
     */
    cursor?: NewspaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newspapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newspapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Newspapers.
     */
    distinct?: NewspaperScalarFieldEnum | NewspaperScalarFieldEnum[]
  }

  /**
   * Newspaper findMany
   */
  export type NewspaperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newspaper
     */
    select?: NewspaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newspaper
     */
    omit?: NewspaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperInclude<ExtArgs> | null
    /**
     * Filter, which Newspapers to fetch.
     */
    where?: NewspaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newspapers to fetch.
     */
    orderBy?: NewspaperOrderByWithRelationInput | NewspaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Newspapers.
     */
    cursor?: NewspaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newspapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newspapers.
     */
    skip?: number
    distinct?: NewspaperScalarFieldEnum | NewspaperScalarFieldEnum[]
  }

  /**
   * Newspaper create
   */
  export type NewspaperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newspaper
     */
    select?: NewspaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newspaper
     */
    omit?: NewspaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperInclude<ExtArgs> | null
    /**
     * The data needed to create a Newspaper.
     */
    data: XOR<NewspaperCreateInput, NewspaperUncheckedCreateInput>
  }

  /**
   * Newspaper createMany
   */
  export type NewspaperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Newspapers.
     */
    data: NewspaperCreateManyInput | NewspaperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Newspaper createManyAndReturn
   */
  export type NewspaperCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newspaper
     */
    select?: NewspaperSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Newspaper
     */
    omit?: NewspaperOmit<ExtArgs> | null
    /**
     * The data used to create many Newspapers.
     */
    data: NewspaperCreateManyInput | NewspaperCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Newspaper update
   */
  export type NewspaperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newspaper
     */
    select?: NewspaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newspaper
     */
    omit?: NewspaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperInclude<ExtArgs> | null
    /**
     * The data needed to update a Newspaper.
     */
    data: XOR<NewspaperUpdateInput, NewspaperUncheckedUpdateInput>
    /**
     * Choose, which Newspaper to update.
     */
    where: NewspaperWhereUniqueInput
  }

  /**
   * Newspaper updateMany
   */
  export type NewspaperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Newspapers.
     */
    data: XOR<NewspaperUpdateManyMutationInput, NewspaperUncheckedUpdateManyInput>
    /**
     * Filter which Newspapers to update
     */
    where?: NewspaperWhereInput
    /**
     * Limit how many Newspapers to update.
     */
    limit?: number
  }

  /**
   * Newspaper updateManyAndReturn
   */
  export type NewspaperUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newspaper
     */
    select?: NewspaperSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Newspaper
     */
    omit?: NewspaperOmit<ExtArgs> | null
    /**
     * The data used to update Newspapers.
     */
    data: XOR<NewspaperUpdateManyMutationInput, NewspaperUncheckedUpdateManyInput>
    /**
     * Filter which Newspapers to update
     */
    where?: NewspaperWhereInput
    /**
     * Limit how many Newspapers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Newspaper upsert
   */
  export type NewspaperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newspaper
     */
    select?: NewspaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newspaper
     */
    omit?: NewspaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperInclude<ExtArgs> | null
    /**
     * The filter to search for the Newspaper to update in case it exists.
     */
    where: NewspaperWhereUniqueInput
    /**
     * In case the Newspaper found by the `where` argument doesn't exist, create a new Newspaper with this data.
     */
    create: XOR<NewspaperCreateInput, NewspaperUncheckedCreateInput>
    /**
     * In case the Newspaper was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewspaperUpdateInput, NewspaperUncheckedUpdateInput>
  }

  /**
   * Newspaper delete
   */
  export type NewspaperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newspaper
     */
    select?: NewspaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newspaper
     */
    omit?: NewspaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperInclude<ExtArgs> | null
    /**
     * Filter which Newspaper to delete.
     */
    where: NewspaperWhereUniqueInput
  }

  /**
   * Newspaper deleteMany
   */
  export type NewspaperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Newspapers to delete
     */
    where?: NewspaperWhereInput
    /**
     * Limit how many Newspapers to delete.
     */
    limit?: number
  }

  /**
   * Newspaper without action
   */
  export type NewspaperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newspaper
     */
    select?: NewspaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newspaper
     */
    omit?: NewspaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewspaperInclude<ExtArgs> | null
  }


  /**
   * Model NewsPage
   */

  export type AggregateNewsPage = {
    _count: NewsPageCountAggregateOutputType | null
    _avg: NewsPageAvgAggregateOutputType | null
    _sum: NewsPageSumAggregateOutputType | null
    _min: NewsPageMinAggregateOutputType | null
    _max: NewsPageMaxAggregateOutputType | null
  }

  export type NewsPageAvgAggregateOutputType = {
    id: number | null
    title_id: number | null
  }

  export type NewsPageSumAggregateOutputType = {
    id: number | null
    title_id: number | null
  }

  export type NewsPageMinAggregateOutputType = {
    id: number | null
    title_id: number | null
    date: string | null
    image: string | null
    lastModified: Date | null
  }

  export type NewsPageMaxAggregateOutputType = {
    id: number | null
    title_id: number | null
    date: string | null
    image: string | null
    lastModified: Date | null
  }

  export type NewsPageCountAggregateOutputType = {
    id: number
    title_id: number
    date: number
    image: number
    lastModified: number
    _all: number
  }


  export type NewsPageAvgAggregateInputType = {
    id?: true
    title_id?: true
  }

  export type NewsPageSumAggregateInputType = {
    id?: true
    title_id?: true
  }

  export type NewsPageMinAggregateInputType = {
    id?: true
    title_id?: true
    date?: true
    image?: true
    lastModified?: true
  }

  export type NewsPageMaxAggregateInputType = {
    id?: true
    title_id?: true
    date?: true
    image?: true
    lastModified?: true
  }

  export type NewsPageCountAggregateInputType = {
    id?: true
    title_id?: true
    date?: true
    image?: true
    lastModified?: true
    _all?: true
  }

  export type NewsPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsPage to aggregate.
     */
    where?: NewsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsPages to fetch.
     */
    orderBy?: NewsPageOrderByWithRelationInput | NewsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsPages
    **/
    _count?: true | NewsPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsPageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsPageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsPageMaxAggregateInputType
  }

  export type GetNewsPageAggregateType<T extends NewsPageAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsPage[P]>
      : GetScalarType<T[P], AggregateNewsPage[P]>
  }




  export type NewsPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsPageWhereInput
    orderBy?: NewsPageOrderByWithAggregationInput | NewsPageOrderByWithAggregationInput[]
    by: NewsPageScalarFieldEnum[] | NewsPageScalarFieldEnum
    having?: NewsPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsPageCountAggregateInputType | true
    _avg?: NewsPageAvgAggregateInputType
    _sum?: NewsPageSumAggregateInputType
    _min?: NewsPageMinAggregateInputType
    _max?: NewsPageMaxAggregateInputType
  }

  export type NewsPageGroupByOutputType = {
    id: number
    title_id: number
    date: string
    image: string
    lastModified: Date
    _count: NewsPageCountAggregateOutputType | null
    _avg: NewsPageAvgAggregateOutputType | null
    _sum: NewsPageSumAggregateOutputType | null
    _min: NewsPageMinAggregateOutputType | null
    _max: NewsPageMaxAggregateOutputType | null
  }

  type GetNewsPageGroupByPayload<T extends NewsPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsPageGroupByOutputType[P]>
            : GetScalarType<T[P], NewsPageGroupByOutputType[P]>
        }
      >
    >


  export type NewsPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_id?: boolean
    date?: boolean
    image?: boolean
    lastModified?: boolean
    mapData?: boolean | NewsPage$mapDataArgs<ExtArgs>
    page_categories?: boolean | PageCategoryDefaultArgs<ExtArgs>
    _count?: boolean | NewsPageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsPage"]>

  export type NewsPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_id?: boolean
    date?: boolean
    image?: boolean
    lastModified?: boolean
    page_categories?: boolean | PageCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsPage"]>

  export type NewsPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_id?: boolean
    date?: boolean
    image?: boolean
    lastModified?: boolean
    page_categories?: boolean | PageCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsPage"]>

  export type NewsPageSelectScalar = {
    id?: boolean
    title_id?: boolean
    date?: boolean
    image?: boolean
    lastModified?: boolean
  }

  export type NewsPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title_id" | "date" | "image" | "lastModified", ExtArgs["result"]["newsPage"]>
  export type NewsPageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapData?: boolean | NewsPage$mapDataArgs<ExtArgs>
    page_categories?: boolean | PageCategoryDefaultArgs<ExtArgs>
    _count?: boolean | NewsPageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsPageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page_categories?: boolean | PageCategoryDefaultArgs<ExtArgs>
  }
  export type NewsPageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page_categories?: boolean | PageCategoryDefaultArgs<ExtArgs>
  }

  export type $NewsPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsPage"
    objects: {
      mapData: Prisma.$MapDataPayload<ExtArgs>[]
      page_categories: Prisma.$PageCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title_id: number
      date: string
      image: string
      lastModified: Date
    }, ExtArgs["result"]["newsPage"]>
    composites: {}
  }

  type NewsPageGetPayload<S extends boolean | null | undefined | NewsPageDefaultArgs> = $Result.GetResult<Prisma.$NewsPagePayload, S>

  type NewsPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsPageCountAggregateInputType | true
    }

  export interface NewsPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsPage'], meta: { name: 'NewsPage' } }
    /**
     * Find zero or one NewsPage that matches the filter.
     * @param {NewsPageFindUniqueArgs} args - Arguments to find a NewsPage
     * @example
     * // Get one NewsPage
     * const newsPage = await prisma.newsPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsPageFindUniqueArgs>(args: SelectSubset<T, NewsPageFindUniqueArgs<ExtArgs>>): Prisma__NewsPageClient<$Result.GetResult<Prisma.$NewsPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsPageFindUniqueOrThrowArgs} args - Arguments to find a NewsPage
     * @example
     * // Get one NewsPage
     * const newsPage = await prisma.newsPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsPageFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsPageClient<$Result.GetResult<Prisma.$NewsPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPageFindFirstArgs} args - Arguments to find a NewsPage
     * @example
     * // Get one NewsPage
     * const newsPage = await prisma.newsPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsPageFindFirstArgs>(args?: SelectSubset<T, NewsPageFindFirstArgs<ExtArgs>>): Prisma__NewsPageClient<$Result.GetResult<Prisma.$NewsPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPageFindFirstOrThrowArgs} args - Arguments to find a NewsPage
     * @example
     * // Get one NewsPage
     * const newsPage = await prisma.newsPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsPageFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsPageClient<$Result.GetResult<Prisma.$NewsPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsPages
     * const newsPages = await prisma.newsPage.findMany()
     * 
     * // Get first 10 NewsPages
     * const newsPages = await prisma.newsPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsPageWithIdOnly = await prisma.newsPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsPageFindManyArgs>(args?: SelectSubset<T, NewsPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsPage.
     * @param {NewsPageCreateArgs} args - Arguments to create a NewsPage.
     * @example
     * // Create one NewsPage
     * const NewsPage = await prisma.newsPage.create({
     *   data: {
     *     // ... data to create a NewsPage
     *   }
     * })
     * 
     */
    create<T extends NewsPageCreateArgs>(args: SelectSubset<T, NewsPageCreateArgs<ExtArgs>>): Prisma__NewsPageClient<$Result.GetResult<Prisma.$NewsPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsPages.
     * @param {NewsPageCreateManyArgs} args - Arguments to create many NewsPages.
     * @example
     * // Create many NewsPages
     * const newsPage = await prisma.newsPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsPageCreateManyArgs>(args?: SelectSubset<T, NewsPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsPages and returns the data saved in the database.
     * @param {NewsPageCreateManyAndReturnArgs} args - Arguments to create many NewsPages.
     * @example
     * // Create many NewsPages
     * const newsPage = await prisma.newsPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsPages and only return the `id`
     * const newsPageWithIdOnly = await prisma.newsPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsPageCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsPage.
     * @param {NewsPageDeleteArgs} args - Arguments to delete one NewsPage.
     * @example
     * // Delete one NewsPage
     * const NewsPage = await prisma.newsPage.delete({
     *   where: {
     *     // ... filter to delete one NewsPage
     *   }
     * })
     * 
     */
    delete<T extends NewsPageDeleteArgs>(args: SelectSubset<T, NewsPageDeleteArgs<ExtArgs>>): Prisma__NewsPageClient<$Result.GetResult<Prisma.$NewsPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsPage.
     * @param {NewsPageUpdateArgs} args - Arguments to update one NewsPage.
     * @example
     * // Update one NewsPage
     * const newsPage = await prisma.newsPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsPageUpdateArgs>(args: SelectSubset<T, NewsPageUpdateArgs<ExtArgs>>): Prisma__NewsPageClient<$Result.GetResult<Prisma.$NewsPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsPages.
     * @param {NewsPageDeleteManyArgs} args - Arguments to filter NewsPages to delete.
     * @example
     * // Delete a few NewsPages
     * const { count } = await prisma.newsPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsPageDeleteManyArgs>(args?: SelectSubset<T, NewsPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsPages
     * const newsPage = await prisma.newsPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsPageUpdateManyArgs>(args: SelectSubset<T, NewsPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsPages and returns the data updated in the database.
     * @param {NewsPageUpdateManyAndReturnArgs} args - Arguments to update many NewsPages.
     * @example
     * // Update many NewsPages
     * const newsPage = await prisma.newsPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsPages and only return the `id`
     * const newsPageWithIdOnly = await prisma.newsPage.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsPageUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsPage.
     * @param {NewsPageUpsertArgs} args - Arguments to update or create a NewsPage.
     * @example
     * // Update or create a NewsPage
     * const newsPage = await prisma.newsPage.upsert({
     *   create: {
     *     // ... data to create a NewsPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsPage we want to update
     *   }
     * })
     */
    upsert<T extends NewsPageUpsertArgs>(args: SelectSubset<T, NewsPageUpsertArgs<ExtArgs>>): Prisma__NewsPageClient<$Result.GetResult<Prisma.$NewsPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPageCountArgs} args - Arguments to filter NewsPages to count.
     * @example
     * // Count the number of NewsPages
     * const count = await prisma.newsPage.count({
     *   where: {
     *     // ... the filter for the NewsPages we want to count
     *   }
     * })
    **/
    count<T extends NewsPageCountArgs>(
      args?: Subset<T, NewsPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsPageAggregateArgs>(args: Subset<T, NewsPageAggregateArgs>): Prisma.PrismaPromise<GetNewsPageAggregateType<T>>

    /**
     * Group by NewsPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsPageGroupByArgs} args - Group by arguments.
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
      T extends NewsPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsPageGroupByArgs['orderBy'] }
        : { orderBy?: NewsPageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsPage model
   */
  readonly fields: NewsPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mapData<T extends NewsPage$mapDataArgs<ExtArgs> = {}>(args?: Subset<T, NewsPage$mapDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    page_categories<T extends PageCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageCategoryDefaultArgs<ExtArgs>>): Prisma__PageCategoryClient<$Result.GetResult<Prisma.$PageCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NewsPage model
   */
  interface NewsPageFieldRefs {
    readonly id: FieldRef<"NewsPage", 'Int'>
    readonly title_id: FieldRef<"NewsPage", 'Int'>
    readonly date: FieldRef<"NewsPage", 'String'>
    readonly image: FieldRef<"NewsPage", 'String'>
    readonly lastModified: FieldRef<"NewsPage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsPage findUnique
   */
  export type NewsPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPage
     */
    select?: NewsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPage
     */
    omit?: NewsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsPageInclude<ExtArgs> | null
    /**
     * Filter, which NewsPage to fetch.
     */
    where: NewsPageWhereUniqueInput
  }

  /**
   * NewsPage findUniqueOrThrow
   */
  export type NewsPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPage
     */
    select?: NewsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPage
     */
    omit?: NewsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsPageInclude<ExtArgs> | null
    /**
     * Filter, which NewsPage to fetch.
     */
    where: NewsPageWhereUniqueInput
  }

  /**
   * NewsPage findFirst
   */
  export type NewsPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPage
     */
    select?: NewsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPage
     */
    omit?: NewsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsPageInclude<ExtArgs> | null
    /**
     * Filter, which NewsPage to fetch.
     */
    where?: NewsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsPages to fetch.
     */
    orderBy?: NewsPageOrderByWithRelationInput | NewsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsPages.
     */
    cursor?: NewsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsPages.
     */
    distinct?: NewsPageScalarFieldEnum | NewsPageScalarFieldEnum[]
  }

  /**
   * NewsPage findFirstOrThrow
   */
  export type NewsPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPage
     */
    select?: NewsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPage
     */
    omit?: NewsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsPageInclude<ExtArgs> | null
    /**
     * Filter, which NewsPage to fetch.
     */
    where?: NewsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsPages to fetch.
     */
    orderBy?: NewsPageOrderByWithRelationInput | NewsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsPages.
     */
    cursor?: NewsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsPages.
     */
    distinct?: NewsPageScalarFieldEnum | NewsPageScalarFieldEnum[]
  }

  /**
   * NewsPage findMany
   */
  export type NewsPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPage
     */
    select?: NewsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPage
     */
    omit?: NewsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsPageInclude<ExtArgs> | null
    /**
     * Filter, which NewsPages to fetch.
     */
    where?: NewsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsPages to fetch.
     */
    orderBy?: NewsPageOrderByWithRelationInput | NewsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsPages.
     */
    cursor?: NewsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsPages.
     */
    skip?: number
    distinct?: NewsPageScalarFieldEnum | NewsPageScalarFieldEnum[]
  }

  /**
   * NewsPage create
   */
  export type NewsPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPage
     */
    select?: NewsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPage
     */
    omit?: NewsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsPageInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsPage.
     */
    data: XOR<NewsPageCreateInput, NewsPageUncheckedCreateInput>
  }

  /**
   * NewsPage createMany
   */
  export type NewsPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsPages.
     */
    data: NewsPageCreateManyInput | NewsPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsPage createManyAndReturn
   */
  export type NewsPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPage
     */
    select?: NewsPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPage
     */
    omit?: NewsPageOmit<ExtArgs> | null
    /**
     * The data used to create many NewsPages.
     */
    data: NewsPageCreateManyInput | NewsPageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsPageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsPage update
   */
  export type NewsPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPage
     */
    select?: NewsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPage
     */
    omit?: NewsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsPageInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsPage.
     */
    data: XOR<NewsPageUpdateInput, NewsPageUncheckedUpdateInput>
    /**
     * Choose, which NewsPage to update.
     */
    where: NewsPageWhereUniqueInput
  }

  /**
   * NewsPage updateMany
   */
  export type NewsPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsPages.
     */
    data: XOR<NewsPageUpdateManyMutationInput, NewsPageUncheckedUpdateManyInput>
    /**
     * Filter which NewsPages to update
     */
    where?: NewsPageWhereInput
    /**
     * Limit how many NewsPages to update.
     */
    limit?: number
  }

  /**
   * NewsPage updateManyAndReturn
   */
  export type NewsPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPage
     */
    select?: NewsPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPage
     */
    omit?: NewsPageOmit<ExtArgs> | null
    /**
     * The data used to update NewsPages.
     */
    data: XOR<NewsPageUpdateManyMutationInput, NewsPageUncheckedUpdateManyInput>
    /**
     * Filter which NewsPages to update
     */
    where?: NewsPageWhereInput
    /**
     * Limit how many NewsPages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsPageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsPage upsert
   */
  export type NewsPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPage
     */
    select?: NewsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPage
     */
    omit?: NewsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsPageInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsPage to update in case it exists.
     */
    where: NewsPageWhereUniqueInput
    /**
     * In case the NewsPage found by the `where` argument doesn't exist, create a new NewsPage with this data.
     */
    create: XOR<NewsPageCreateInput, NewsPageUncheckedCreateInput>
    /**
     * In case the NewsPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsPageUpdateInput, NewsPageUncheckedUpdateInput>
  }

  /**
   * NewsPage delete
   */
  export type NewsPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPage
     */
    select?: NewsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPage
     */
    omit?: NewsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsPageInclude<ExtArgs> | null
    /**
     * Filter which NewsPage to delete.
     */
    where: NewsPageWhereUniqueInput
  }

  /**
   * NewsPage deleteMany
   */
  export type NewsPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsPages to delete
     */
    where?: NewsPageWhereInput
    /**
     * Limit how many NewsPages to delete.
     */
    limit?: number
  }

  /**
   * NewsPage.mapData
   */
  export type NewsPage$mapDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapData
     */
    select?: MapDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapData
     */
    omit?: MapDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapDataInclude<ExtArgs> | null
    where?: MapDataWhereInput
    orderBy?: MapDataOrderByWithRelationInput | MapDataOrderByWithRelationInput[]
    cursor?: MapDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapDataScalarFieldEnum | MapDataScalarFieldEnum[]
  }

  /**
   * NewsPage without action
   */
  export type NewsPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsPage
     */
    select?: NewsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsPage
     */
    omit?: NewsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsPageInclude<ExtArgs> | null
  }


  /**
   * Model MapData
   */

  export type AggregateMapData = {
    _count: MapDataCountAggregateOutputType | null
    _avg: MapDataAvgAggregateOutputType | null
    _sum: MapDataSumAggregateOutputType | null
    _min: MapDataMinAggregateOutputType | null
    _max: MapDataMaxAggregateOutputType | null
  }

  export type MapDataAvgAggregateOutputType = {
    id: number | null
    newsPageId: number | null
  }

  export type MapDataSumAggregateOutputType = {
    id: number | null
    newsPageId: number | null
  }

  export type MapDataMinAggregateOutputType = {
    id: number | null
    newsPageId: number | null
    coordinates: string | null
    title: string | null
    link: string | null
  }

  export type MapDataMaxAggregateOutputType = {
    id: number | null
    newsPageId: number | null
    coordinates: string | null
    title: string | null
    link: string | null
  }

  export type MapDataCountAggregateOutputType = {
    id: number
    newsPageId: number
    coordinates: number
    title: number
    link: number
    _all: number
  }


  export type MapDataAvgAggregateInputType = {
    id?: true
    newsPageId?: true
  }

  export type MapDataSumAggregateInputType = {
    id?: true
    newsPageId?: true
  }

  export type MapDataMinAggregateInputType = {
    id?: true
    newsPageId?: true
    coordinates?: true
    title?: true
    link?: true
  }

  export type MapDataMaxAggregateInputType = {
    id?: true
    newsPageId?: true
    coordinates?: true
    title?: true
    link?: true
  }

  export type MapDataCountAggregateInputType = {
    id?: true
    newsPageId?: true
    coordinates?: true
    title?: true
    link?: true
    _all?: true
  }

  export type MapDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapData to aggregate.
     */
    where?: MapDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapData to fetch.
     */
    orderBy?: MapDataOrderByWithRelationInput | MapDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapData
    **/
    _count?: true | MapDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapDataMaxAggregateInputType
  }

  export type GetMapDataAggregateType<T extends MapDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMapData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapData[P]>
      : GetScalarType<T[P], AggregateMapData[P]>
  }




  export type MapDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapDataWhereInput
    orderBy?: MapDataOrderByWithAggregationInput | MapDataOrderByWithAggregationInput[]
    by: MapDataScalarFieldEnum[] | MapDataScalarFieldEnum
    having?: MapDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapDataCountAggregateInputType | true
    _avg?: MapDataAvgAggregateInputType
    _sum?: MapDataSumAggregateInputType
    _min?: MapDataMinAggregateInputType
    _max?: MapDataMaxAggregateInputType
  }

  export type MapDataGroupByOutputType = {
    id: number
    newsPageId: number
    coordinates: string
    title: string | null
    link: string | null
    _count: MapDataCountAggregateOutputType | null
    _avg: MapDataAvgAggregateOutputType | null
    _sum: MapDataSumAggregateOutputType | null
    _min: MapDataMinAggregateOutputType | null
    _max: MapDataMaxAggregateOutputType | null
  }

  type GetMapDataGroupByPayload<T extends MapDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapDataGroupByOutputType[P]>
            : GetScalarType<T[P], MapDataGroupByOutputType[P]>
        }
      >
    >


  export type MapDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsPageId?: boolean
    coordinates?: boolean
    title?: boolean
    link?: boolean
    newsPage?: boolean | NewsPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapData"]>

  export type MapDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsPageId?: boolean
    coordinates?: boolean
    title?: boolean
    link?: boolean
    newsPage?: boolean | NewsPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapData"]>

  export type MapDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsPageId?: boolean
    coordinates?: boolean
    title?: boolean
    link?: boolean
    newsPage?: boolean | NewsPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapData"]>

  export type MapDataSelectScalar = {
    id?: boolean
    newsPageId?: boolean
    coordinates?: boolean
    title?: boolean
    link?: boolean
  }

  export type MapDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "newsPageId" | "coordinates" | "title" | "link", ExtArgs["result"]["mapData"]>
  export type MapDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsPage?: boolean | NewsPageDefaultArgs<ExtArgs>
  }
  export type MapDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsPage?: boolean | NewsPageDefaultArgs<ExtArgs>
  }
  export type MapDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsPage?: boolean | NewsPageDefaultArgs<ExtArgs>
  }

  export type $MapDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapData"
    objects: {
      newsPage: Prisma.$NewsPagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      newsPageId: number
      coordinates: string
      title: string | null
      link: string | null
    }, ExtArgs["result"]["mapData"]>
    composites: {}
  }

  type MapDataGetPayload<S extends boolean | null | undefined | MapDataDefaultArgs> = $Result.GetResult<Prisma.$MapDataPayload, S>

  type MapDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapDataCountAggregateInputType | true
    }

  export interface MapDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapData'], meta: { name: 'MapData' } }
    /**
     * Find zero or one MapData that matches the filter.
     * @param {MapDataFindUniqueArgs} args - Arguments to find a MapData
     * @example
     * // Get one MapData
     * const mapData = await prisma.mapData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapDataFindUniqueArgs>(args: SelectSubset<T, MapDataFindUniqueArgs<ExtArgs>>): Prisma__MapDataClient<$Result.GetResult<Prisma.$MapDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapDataFindUniqueOrThrowArgs} args - Arguments to find a MapData
     * @example
     * // Get one MapData
     * const mapData = await prisma.mapData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapDataFindUniqueOrThrowArgs>(args: SelectSubset<T, MapDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapDataClient<$Result.GetResult<Prisma.$MapDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapDataFindFirstArgs} args - Arguments to find a MapData
     * @example
     * // Get one MapData
     * const mapData = await prisma.mapData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapDataFindFirstArgs>(args?: SelectSubset<T, MapDataFindFirstArgs<ExtArgs>>): Prisma__MapDataClient<$Result.GetResult<Prisma.$MapDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapDataFindFirstOrThrowArgs} args - Arguments to find a MapData
     * @example
     * // Get one MapData
     * const mapData = await prisma.mapData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapDataFindFirstOrThrowArgs>(args?: SelectSubset<T, MapDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapDataClient<$Result.GetResult<Prisma.$MapDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapData
     * const mapData = await prisma.mapData.findMany()
     * 
     * // Get first 10 MapData
     * const mapData = await prisma.mapData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapDataWithIdOnly = await prisma.mapData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapDataFindManyArgs>(args?: SelectSubset<T, MapDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapData.
     * @param {MapDataCreateArgs} args - Arguments to create a MapData.
     * @example
     * // Create one MapData
     * const MapData = await prisma.mapData.create({
     *   data: {
     *     // ... data to create a MapData
     *   }
     * })
     * 
     */
    create<T extends MapDataCreateArgs>(args: SelectSubset<T, MapDataCreateArgs<ExtArgs>>): Prisma__MapDataClient<$Result.GetResult<Prisma.$MapDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapData.
     * @param {MapDataCreateManyArgs} args - Arguments to create many MapData.
     * @example
     * // Create many MapData
     * const mapData = await prisma.mapData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapDataCreateManyArgs>(args?: SelectSubset<T, MapDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapData and returns the data saved in the database.
     * @param {MapDataCreateManyAndReturnArgs} args - Arguments to create many MapData.
     * @example
     * // Create many MapData
     * const mapData = await prisma.mapData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapData and only return the `id`
     * const mapDataWithIdOnly = await prisma.mapData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapDataCreateManyAndReturnArgs>(args?: SelectSubset<T, MapDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapData.
     * @param {MapDataDeleteArgs} args - Arguments to delete one MapData.
     * @example
     * // Delete one MapData
     * const MapData = await prisma.mapData.delete({
     *   where: {
     *     // ... filter to delete one MapData
     *   }
     * })
     * 
     */
    delete<T extends MapDataDeleteArgs>(args: SelectSubset<T, MapDataDeleteArgs<ExtArgs>>): Prisma__MapDataClient<$Result.GetResult<Prisma.$MapDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapData.
     * @param {MapDataUpdateArgs} args - Arguments to update one MapData.
     * @example
     * // Update one MapData
     * const mapData = await prisma.mapData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapDataUpdateArgs>(args: SelectSubset<T, MapDataUpdateArgs<ExtArgs>>): Prisma__MapDataClient<$Result.GetResult<Prisma.$MapDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapData.
     * @param {MapDataDeleteManyArgs} args - Arguments to filter MapData to delete.
     * @example
     * // Delete a few MapData
     * const { count } = await prisma.mapData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapDataDeleteManyArgs>(args?: SelectSubset<T, MapDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapData
     * const mapData = await prisma.mapData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapDataUpdateManyArgs>(args: SelectSubset<T, MapDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapData and returns the data updated in the database.
     * @param {MapDataUpdateManyAndReturnArgs} args - Arguments to update many MapData.
     * @example
     * // Update many MapData
     * const mapData = await prisma.mapData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapData and only return the `id`
     * const mapDataWithIdOnly = await prisma.mapData.updateManyAndReturn({
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
    updateManyAndReturn<T extends MapDataUpdateManyAndReturnArgs>(args: SelectSubset<T, MapDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapData.
     * @param {MapDataUpsertArgs} args - Arguments to update or create a MapData.
     * @example
     * // Update or create a MapData
     * const mapData = await prisma.mapData.upsert({
     *   create: {
     *     // ... data to create a MapData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapData we want to update
     *   }
     * })
     */
    upsert<T extends MapDataUpsertArgs>(args: SelectSubset<T, MapDataUpsertArgs<ExtArgs>>): Prisma__MapDataClient<$Result.GetResult<Prisma.$MapDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapDataCountArgs} args - Arguments to filter MapData to count.
     * @example
     * // Count the number of MapData
     * const count = await prisma.mapData.count({
     *   where: {
     *     // ... the filter for the MapData we want to count
     *   }
     * })
    **/
    count<T extends MapDataCountArgs>(
      args?: Subset<T, MapDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapDataAggregateArgs>(args: Subset<T, MapDataAggregateArgs>): Prisma.PrismaPromise<GetMapDataAggregateType<T>>

    /**
     * Group by MapData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapDataGroupByArgs} args - Group by arguments.
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
      T extends MapDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapDataGroupByArgs['orderBy'] }
        : { orderBy?: MapDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapData model
   */
  readonly fields: MapDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    newsPage<T extends NewsPageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsPageDefaultArgs<ExtArgs>>): Prisma__NewsPageClient<$Result.GetResult<Prisma.$NewsPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MapData model
   */
  interface MapDataFieldRefs {
    readonly id: FieldRef<"MapData", 'Int'>
    readonly newsPageId: FieldRef<"MapData", 'Int'>
    readonly coordinates: FieldRef<"MapData", 'String'>
    readonly title: FieldRef<"MapData", 'String'>
    readonly link: FieldRef<"MapData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MapData findUnique
   */
  export type MapDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapData
     */
    select?: MapDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapData
     */
    omit?: MapDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapDataInclude<ExtArgs> | null
    /**
     * Filter, which MapData to fetch.
     */
    where: MapDataWhereUniqueInput
  }

  /**
   * MapData findUniqueOrThrow
   */
  export type MapDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapData
     */
    select?: MapDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapData
     */
    omit?: MapDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapDataInclude<ExtArgs> | null
    /**
     * Filter, which MapData to fetch.
     */
    where: MapDataWhereUniqueInput
  }

  /**
   * MapData findFirst
   */
  export type MapDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapData
     */
    select?: MapDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapData
     */
    omit?: MapDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapDataInclude<ExtArgs> | null
    /**
     * Filter, which MapData to fetch.
     */
    where?: MapDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapData to fetch.
     */
    orderBy?: MapDataOrderByWithRelationInput | MapDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapData.
     */
    cursor?: MapDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapData.
     */
    distinct?: MapDataScalarFieldEnum | MapDataScalarFieldEnum[]
  }

  /**
   * MapData findFirstOrThrow
   */
  export type MapDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapData
     */
    select?: MapDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapData
     */
    omit?: MapDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapDataInclude<ExtArgs> | null
    /**
     * Filter, which MapData to fetch.
     */
    where?: MapDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapData to fetch.
     */
    orderBy?: MapDataOrderByWithRelationInput | MapDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapData.
     */
    cursor?: MapDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapData.
     */
    distinct?: MapDataScalarFieldEnum | MapDataScalarFieldEnum[]
  }

  /**
   * MapData findMany
   */
  export type MapDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapData
     */
    select?: MapDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapData
     */
    omit?: MapDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapDataInclude<ExtArgs> | null
    /**
     * Filter, which MapData to fetch.
     */
    where?: MapDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapData to fetch.
     */
    orderBy?: MapDataOrderByWithRelationInput | MapDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapData.
     */
    cursor?: MapDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapData.
     */
    skip?: number
    distinct?: MapDataScalarFieldEnum | MapDataScalarFieldEnum[]
  }

  /**
   * MapData create
   */
  export type MapDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapData
     */
    select?: MapDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapData
     */
    omit?: MapDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapDataInclude<ExtArgs> | null
    /**
     * The data needed to create a MapData.
     */
    data: XOR<MapDataCreateInput, MapDataUncheckedCreateInput>
  }

  /**
   * MapData createMany
   */
  export type MapDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapData.
     */
    data: MapDataCreateManyInput | MapDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MapData createManyAndReturn
   */
  export type MapDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapData
     */
    select?: MapDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapData
     */
    omit?: MapDataOmit<ExtArgs> | null
    /**
     * The data used to create many MapData.
     */
    data: MapDataCreateManyInput | MapDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapData update
   */
  export type MapDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapData
     */
    select?: MapDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapData
     */
    omit?: MapDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapDataInclude<ExtArgs> | null
    /**
     * The data needed to update a MapData.
     */
    data: XOR<MapDataUpdateInput, MapDataUncheckedUpdateInput>
    /**
     * Choose, which MapData to update.
     */
    where: MapDataWhereUniqueInput
  }

  /**
   * MapData updateMany
   */
  export type MapDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapData.
     */
    data: XOR<MapDataUpdateManyMutationInput, MapDataUncheckedUpdateManyInput>
    /**
     * Filter which MapData to update
     */
    where?: MapDataWhereInput
    /**
     * Limit how many MapData to update.
     */
    limit?: number
  }

  /**
   * MapData updateManyAndReturn
   */
  export type MapDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapData
     */
    select?: MapDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapData
     */
    omit?: MapDataOmit<ExtArgs> | null
    /**
     * The data used to update MapData.
     */
    data: XOR<MapDataUpdateManyMutationInput, MapDataUncheckedUpdateManyInput>
    /**
     * Filter which MapData to update
     */
    where?: MapDataWhereInput
    /**
     * Limit how many MapData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapData upsert
   */
  export type MapDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapData
     */
    select?: MapDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapData
     */
    omit?: MapDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapDataInclude<ExtArgs> | null
    /**
     * The filter to search for the MapData to update in case it exists.
     */
    where: MapDataWhereUniqueInput
    /**
     * In case the MapData found by the `where` argument doesn't exist, create a new MapData with this data.
     */
    create: XOR<MapDataCreateInput, MapDataUncheckedCreateInput>
    /**
     * In case the MapData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapDataUpdateInput, MapDataUncheckedUpdateInput>
  }

  /**
   * MapData delete
   */
  export type MapDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapData
     */
    select?: MapDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapData
     */
    omit?: MapDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapDataInclude<ExtArgs> | null
    /**
     * Filter which MapData to delete.
     */
    where: MapDataWhereUniqueInput
  }

  /**
   * MapData deleteMany
   */
  export type MapDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapData to delete
     */
    where?: MapDataWhereInput
    /**
     * Limit how many MapData to delete.
     */
    limit?: number
  }

  /**
   * MapData without action
   */
  export type MapDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapData
     */
    select?: MapDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapData
     */
    omit?: MapDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapDataInclude<ExtArgs> | null
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


  export const PageCategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    order: 'order'
  };

  export type PageCategoryScalarFieldEnum = (typeof PageCategoryScalarFieldEnum)[keyof typeof PageCategoryScalarFieldEnum]


  export const NewspaperCategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    order: 'order'
  };

  export type NewspaperCategoryScalarFieldEnum = (typeof NewspaperCategoryScalarFieldEnum)[keyof typeof NewspaperCategoryScalarFieldEnum]


  export const NewspaperScalarFieldEnum: {
    id: 'id',
    title_id: 'title_id',
    date: 'date'
  };

  export type NewspaperScalarFieldEnum = (typeof NewspaperScalarFieldEnum)[keyof typeof NewspaperScalarFieldEnum]


  export const NewsPageScalarFieldEnum: {
    id: 'id',
    title_id: 'title_id',
    date: 'date',
    image: 'image',
    lastModified: 'lastModified'
  };

  export type NewsPageScalarFieldEnum = (typeof NewsPageScalarFieldEnum)[keyof typeof NewsPageScalarFieldEnum]


  export const MapDataScalarFieldEnum: {
    id: 'id',
    newsPageId: 'newsPageId',
    coordinates: 'coordinates',
    title: 'title',
    link: 'link'
  };

  export type MapDataScalarFieldEnum = (typeof MapDataScalarFieldEnum)[keyof typeof MapDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type PageCategoryWhereInput = {
    AND?: PageCategoryWhereInput | PageCategoryWhereInput[]
    OR?: PageCategoryWhereInput[]
    NOT?: PageCategoryWhereInput | PageCategoryWhereInput[]
    id?: IntFilter<"PageCategory"> | number
    title?: StringNullableFilter<"PageCategory"> | string | null
    slug?: StringFilter<"PageCategory"> | string
    order?: IntFilter<"PageCategory"> | number
    news_pages?: NewsPageListRelationFilter
  }

  export type PageCategoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    slug?: SortOrder
    order?: SortOrder
    news_pages?: NewsPageOrderByRelationAggregateInput
  }

  export type PageCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: PageCategoryWhereInput | PageCategoryWhereInput[]
    OR?: PageCategoryWhereInput[]
    NOT?: PageCategoryWhereInput | PageCategoryWhereInput[]
    title?: StringNullableFilter<"PageCategory"> | string | null
    order?: IntFilter<"PageCategory"> | number
    news_pages?: NewsPageListRelationFilter
  }, "id" | "slug">

  export type PageCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    slug?: SortOrder
    order?: SortOrder
    _count?: PageCategoryCountOrderByAggregateInput
    _avg?: PageCategoryAvgOrderByAggregateInput
    _max?: PageCategoryMaxOrderByAggregateInput
    _min?: PageCategoryMinOrderByAggregateInput
    _sum?: PageCategorySumOrderByAggregateInput
  }

  export type PageCategoryScalarWhereWithAggregatesInput = {
    AND?: PageCategoryScalarWhereWithAggregatesInput | PageCategoryScalarWhereWithAggregatesInput[]
    OR?: PageCategoryScalarWhereWithAggregatesInput[]
    NOT?: PageCategoryScalarWhereWithAggregatesInput | PageCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PageCategory"> | number
    title?: StringNullableWithAggregatesFilter<"PageCategory"> | string | null
    slug?: StringWithAggregatesFilter<"PageCategory"> | string
    order?: IntWithAggregatesFilter<"PageCategory"> | number
  }

  export type NewspaperCategoryWhereInput = {
    AND?: NewspaperCategoryWhereInput | NewspaperCategoryWhereInput[]
    OR?: NewspaperCategoryWhereInput[]
    NOT?: NewspaperCategoryWhereInput | NewspaperCategoryWhereInput[]
    id?: IntFilter<"NewspaperCategory"> | number
    title?: StringNullableFilter<"NewspaperCategory"> | string | null
    slug?: StringFilter<"NewspaperCategory"> | string
    order?: IntFilter<"NewspaperCategory"> | number
    newspapers?: NewspaperListRelationFilter
  }

  export type NewspaperCategoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    slug?: SortOrder
    order?: SortOrder
    newspapers?: NewspaperOrderByRelationAggregateInput
  }

  export type NewspaperCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: NewspaperCategoryWhereInput | NewspaperCategoryWhereInput[]
    OR?: NewspaperCategoryWhereInput[]
    NOT?: NewspaperCategoryWhereInput | NewspaperCategoryWhereInput[]
    title?: StringNullableFilter<"NewspaperCategory"> | string | null
    order?: IntFilter<"NewspaperCategory"> | number
    newspapers?: NewspaperListRelationFilter
  }, "id" | "slug">

  export type NewspaperCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    slug?: SortOrder
    order?: SortOrder
    _count?: NewspaperCategoryCountOrderByAggregateInput
    _avg?: NewspaperCategoryAvgOrderByAggregateInput
    _max?: NewspaperCategoryMaxOrderByAggregateInput
    _min?: NewspaperCategoryMinOrderByAggregateInput
    _sum?: NewspaperCategorySumOrderByAggregateInput
  }

  export type NewspaperCategoryScalarWhereWithAggregatesInput = {
    AND?: NewspaperCategoryScalarWhereWithAggregatesInput | NewspaperCategoryScalarWhereWithAggregatesInput[]
    OR?: NewspaperCategoryScalarWhereWithAggregatesInput[]
    NOT?: NewspaperCategoryScalarWhereWithAggregatesInput | NewspaperCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewspaperCategory"> | number
    title?: StringNullableWithAggregatesFilter<"NewspaperCategory"> | string | null
    slug?: StringWithAggregatesFilter<"NewspaperCategory"> | string
    order?: IntWithAggregatesFilter<"NewspaperCategory"> | number
  }

  export type NewspaperWhereInput = {
    AND?: NewspaperWhereInput | NewspaperWhereInput[]
    OR?: NewspaperWhereInput[]
    NOT?: NewspaperWhereInput | NewspaperWhereInput[]
    id?: IntFilter<"Newspaper"> | number
    title_id?: IntFilter<"Newspaper"> | number
    date?: StringFilter<"Newspaper"> | string
    newspaper_categories?: XOR<NewspaperCategoryScalarRelationFilter, NewspaperCategoryWhereInput>
  }

  export type NewspaperOrderByWithRelationInput = {
    id?: SortOrder
    title_id?: SortOrder
    date?: SortOrder
    newspaper_categories?: NewspaperCategoryOrderByWithRelationInput
  }

  export type NewspaperWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NewspaperWhereInput | NewspaperWhereInput[]
    OR?: NewspaperWhereInput[]
    NOT?: NewspaperWhereInput | NewspaperWhereInput[]
    title_id?: IntFilter<"Newspaper"> | number
    date?: StringFilter<"Newspaper"> | string
    newspaper_categories?: XOR<NewspaperCategoryScalarRelationFilter, NewspaperCategoryWhereInput>
  }, "id">

  export type NewspaperOrderByWithAggregationInput = {
    id?: SortOrder
    title_id?: SortOrder
    date?: SortOrder
    _count?: NewspaperCountOrderByAggregateInput
    _avg?: NewspaperAvgOrderByAggregateInput
    _max?: NewspaperMaxOrderByAggregateInput
    _min?: NewspaperMinOrderByAggregateInput
    _sum?: NewspaperSumOrderByAggregateInput
  }

  export type NewspaperScalarWhereWithAggregatesInput = {
    AND?: NewspaperScalarWhereWithAggregatesInput | NewspaperScalarWhereWithAggregatesInput[]
    OR?: NewspaperScalarWhereWithAggregatesInput[]
    NOT?: NewspaperScalarWhereWithAggregatesInput | NewspaperScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Newspaper"> | number
    title_id?: IntWithAggregatesFilter<"Newspaper"> | number
    date?: StringWithAggregatesFilter<"Newspaper"> | string
  }

  export type NewsPageWhereInput = {
    AND?: NewsPageWhereInput | NewsPageWhereInput[]
    OR?: NewsPageWhereInput[]
    NOT?: NewsPageWhereInput | NewsPageWhereInput[]
    id?: IntFilter<"NewsPage"> | number
    title_id?: IntFilter<"NewsPage"> | number
    date?: StringFilter<"NewsPage"> | string
    image?: StringFilter<"NewsPage"> | string
    lastModified?: DateTimeFilter<"NewsPage"> | Date | string
    mapData?: MapDataListRelationFilter
    page_categories?: XOR<PageCategoryScalarRelationFilter, PageCategoryWhereInput>
  }

  export type NewsPageOrderByWithRelationInput = {
    id?: SortOrder
    title_id?: SortOrder
    date?: SortOrder
    image?: SortOrder
    lastModified?: SortOrder
    mapData?: MapDataOrderByRelationAggregateInput
    page_categories?: PageCategoryOrderByWithRelationInput
  }

  export type NewsPageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NewsPageWhereInput | NewsPageWhereInput[]
    OR?: NewsPageWhereInput[]
    NOT?: NewsPageWhereInput | NewsPageWhereInput[]
    title_id?: IntFilter<"NewsPage"> | number
    date?: StringFilter<"NewsPage"> | string
    image?: StringFilter<"NewsPage"> | string
    lastModified?: DateTimeFilter<"NewsPage"> | Date | string
    mapData?: MapDataListRelationFilter
    page_categories?: XOR<PageCategoryScalarRelationFilter, PageCategoryWhereInput>
  }, "id">

  export type NewsPageOrderByWithAggregationInput = {
    id?: SortOrder
    title_id?: SortOrder
    date?: SortOrder
    image?: SortOrder
    lastModified?: SortOrder
    _count?: NewsPageCountOrderByAggregateInput
    _avg?: NewsPageAvgOrderByAggregateInput
    _max?: NewsPageMaxOrderByAggregateInput
    _min?: NewsPageMinOrderByAggregateInput
    _sum?: NewsPageSumOrderByAggregateInput
  }

  export type NewsPageScalarWhereWithAggregatesInput = {
    AND?: NewsPageScalarWhereWithAggregatesInput | NewsPageScalarWhereWithAggregatesInput[]
    OR?: NewsPageScalarWhereWithAggregatesInput[]
    NOT?: NewsPageScalarWhereWithAggregatesInput | NewsPageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewsPage"> | number
    title_id?: IntWithAggregatesFilter<"NewsPage"> | number
    date?: StringWithAggregatesFilter<"NewsPage"> | string
    image?: StringWithAggregatesFilter<"NewsPage"> | string
    lastModified?: DateTimeWithAggregatesFilter<"NewsPage"> | Date | string
  }

  export type MapDataWhereInput = {
    AND?: MapDataWhereInput | MapDataWhereInput[]
    OR?: MapDataWhereInput[]
    NOT?: MapDataWhereInput | MapDataWhereInput[]
    id?: IntFilter<"MapData"> | number
    newsPageId?: IntFilter<"MapData"> | number
    coordinates?: StringFilter<"MapData"> | string
    title?: StringNullableFilter<"MapData"> | string | null
    link?: StringNullableFilter<"MapData"> | string | null
    newsPage?: XOR<NewsPageScalarRelationFilter, NewsPageWhereInput>
  }

  export type MapDataOrderByWithRelationInput = {
    id?: SortOrder
    newsPageId?: SortOrder
    coordinates?: SortOrder
    title?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    newsPage?: NewsPageOrderByWithRelationInput
  }

  export type MapDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MapDataWhereInput | MapDataWhereInput[]
    OR?: MapDataWhereInput[]
    NOT?: MapDataWhereInput | MapDataWhereInput[]
    newsPageId?: IntFilter<"MapData"> | number
    coordinates?: StringFilter<"MapData"> | string
    title?: StringNullableFilter<"MapData"> | string | null
    link?: StringNullableFilter<"MapData"> | string | null
    newsPage?: XOR<NewsPageScalarRelationFilter, NewsPageWhereInput>
  }, "id">

  export type MapDataOrderByWithAggregationInput = {
    id?: SortOrder
    newsPageId?: SortOrder
    coordinates?: SortOrder
    title?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    _count?: MapDataCountOrderByAggregateInput
    _avg?: MapDataAvgOrderByAggregateInput
    _max?: MapDataMaxOrderByAggregateInput
    _min?: MapDataMinOrderByAggregateInput
    _sum?: MapDataSumOrderByAggregateInput
  }

  export type MapDataScalarWhereWithAggregatesInput = {
    AND?: MapDataScalarWhereWithAggregatesInput | MapDataScalarWhereWithAggregatesInput[]
    OR?: MapDataScalarWhereWithAggregatesInput[]
    NOT?: MapDataScalarWhereWithAggregatesInput | MapDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MapData"> | number
    newsPageId?: IntWithAggregatesFilter<"MapData"> | number
    coordinates?: StringWithAggregatesFilter<"MapData"> | string
    title?: StringNullableWithAggregatesFilter<"MapData"> | string | null
    link?: StringNullableWithAggregatesFilter<"MapData"> | string | null
  }

  export type PageCategoryCreateInput = {
    title?: string | null
    slug: string
    order?: number
    news_pages?: NewsPageCreateNestedManyWithoutPage_categoriesInput
  }

  export type PageCategoryUncheckedCreateInput = {
    id?: number
    title?: string | null
    slug: string
    order?: number
    news_pages?: NewsPageUncheckedCreateNestedManyWithoutPage_categoriesInput
  }

  export type PageCategoryUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    news_pages?: NewsPageUpdateManyWithoutPage_categoriesNestedInput
  }

  export type PageCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    news_pages?: NewsPageUncheckedUpdateManyWithoutPage_categoriesNestedInput
  }

  export type PageCategoryCreateManyInput = {
    id?: number
    title?: string | null
    slug: string
    order?: number
  }

  export type PageCategoryUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PageCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type NewspaperCategoryCreateInput = {
    title?: string | null
    slug: string
    order?: number
    newspapers?: NewspaperCreateNestedManyWithoutNewspaper_categoriesInput
  }

  export type NewspaperCategoryUncheckedCreateInput = {
    id?: number
    title?: string | null
    slug: string
    order?: number
    newspapers?: NewspaperUncheckedCreateNestedManyWithoutNewspaper_categoriesInput
  }

  export type NewspaperCategoryUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    newspapers?: NewspaperUpdateManyWithoutNewspaper_categoriesNestedInput
  }

  export type NewspaperCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    newspapers?: NewspaperUncheckedUpdateManyWithoutNewspaper_categoriesNestedInput
  }

  export type NewspaperCategoryCreateManyInput = {
    id?: number
    title?: string | null
    slug: string
    order?: number
  }

  export type NewspaperCategoryUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type NewspaperCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type NewspaperCreateInput = {
    date: string
    newspaper_categories?: NewspaperCategoryCreateNestedOneWithoutNewspapersInput
  }

  export type NewspaperUncheckedCreateInput = {
    id?: number
    title_id?: number
    date: string
  }

  export type NewspaperUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    newspaper_categories?: NewspaperCategoryUpdateOneRequiredWithoutNewspapersNestedInput
  }

  export type NewspaperUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type NewspaperCreateManyInput = {
    id?: number
    title_id?: number
    date: string
  }

  export type NewspaperUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
  }

  export type NewspaperUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type NewsPageCreateInput = {
    date: string
    image: string
    lastModified?: Date | string
    mapData?: MapDataCreateNestedManyWithoutNewsPageInput
    page_categories?: PageCategoryCreateNestedOneWithoutNews_pagesInput
  }

  export type NewsPageUncheckedCreateInput = {
    id?: number
    title_id?: number
    date: string
    image: string
    lastModified?: Date | string
    mapData?: MapDataUncheckedCreateNestedManyWithoutNewsPageInput
  }

  export type NewsPageUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    mapData?: MapDataUpdateManyWithoutNewsPageNestedInput
    page_categories?: PageCategoryUpdateOneRequiredWithoutNews_pagesNestedInput
  }

  export type NewsPageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    mapData?: MapDataUncheckedUpdateManyWithoutNewsPageNestedInput
  }

  export type NewsPageCreateManyInput = {
    id?: number
    title_id?: number
    date: string
    image: string
    lastModified?: Date | string
  }

  export type NewsPageUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsPageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapDataCreateInput = {
    coordinates: string
    title?: string | null
    link?: string | null
    newsPage?: NewsPageCreateNestedOneWithoutMapDataInput
  }

  export type MapDataUncheckedCreateInput = {
    id?: number
    newsPageId?: number
    coordinates: string
    title?: string | null
    link?: string | null
  }

  export type MapDataUpdateInput = {
    coordinates?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    newsPage?: NewsPageUpdateOneRequiredWithoutMapDataNestedInput
  }

  export type MapDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    newsPageId?: IntFieldUpdateOperationsInput | number
    coordinates?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MapDataCreateManyInput = {
    id?: number
    newsPageId?: number
    coordinates: string
    title?: string | null
    link?: string | null
  }

  export type MapDataUpdateManyMutationInput = {
    coordinates?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MapDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    newsPageId?: IntFieldUpdateOperationsInput | number
    coordinates?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type NewsPageListRelationFilter = {
    every?: NewsPageWhereInput
    some?: NewsPageWhereInput
    none?: NewsPageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NewsPageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    order?: SortOrder
  }

  export type PageCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type PageCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    order?: SortOrder
  }

  export type PageCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    order?: SortOrder
  }

  export type PageCategorySumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
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

  export type NewspaperListRelationFilter = {
    every?: NewspaperWhereInput
    some?: NewspaperWhereInput
    none?: NewspaperWhereInput
  }

  export type NewspaperOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewspaperCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    order?: SortOrder
  }

  export type NewspaperCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type NewspaperCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    order?: SortOrder
  }

  export type NewspaperCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    order?: SortOrder
  }

  export type NewspaperCategorySumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type NewspaperCategoryScalarRelationFilter = {
    is?: NewspaperCategoryWhereInput
    isNot?: NewspaperCategoryWhereInput
  }

  export type NewspaperCountOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    date?: SortOrder
  }

  export type NewspaperAvgOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
  }

  export type NewspaperMaxOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    date?: SortOrder
  }

  export type NewspaperMinOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    date?: SortOrder
  }

  export type NewspaperSumOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
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

  export type MapDataListRelationFilter = {
    every?: MapDataWhereInput
    some?: MapDataWhereInput
    none?: MapDataWhereInput
  }

  export type PageCategoryScalarRelationFilter = {
    is?: PageCategoryWhereInput
    isNot?: PageCategoryWhereInput
  }

  export type MapDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsPageCountOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    date?: SortOrder
    image?: SortOrder
    lastModified?: SortOrder
  }

  export type NewsPageAvgOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
  }

  export type NewsPageMaxOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    date?: SortOrder
    image?: SortOrder
    lastModified?: SortOrder
  }

  export type NewsPageMinOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    date?: SortOrder
    image?: SortOrder
    lastModified?: SortOrder
  }

  export type NewsPageSumOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
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

  export type NewsPageScalarRelationFilter = {
    is?: NewsPageWhereInput
    isNot?: NewsPageWhereInput
  }

  export type MapDataCountOrderByAggregateInput = {
    id?: SortOrder
    newsPageId?: SortOrder
    coordinates?: SortOrder
    title?: SortOrder
    link?: SortOrder
  }

  export type MapDataAvgOrderByAggregateInput = {
    id?: SortOrder
    newsPageId?: SortOrder
  }

  export type MapDataMaxOrderByAggregateInput = {
    id?: SortOrder
    newsPageId?: SortOrder
    coordinates?: SortOrder
    title?: SortOrder
    link?: SortOrder
  }

  export type MapDataMinOrderByAggregateInput = {
    id?: SortOrder
    newsPageId?: SortOrder
    coordinates?: SortOrder
    title?: SortOrder
    link?: SortOrder
  }

  export type MapDataSumOrderByAggregateInput = {
    id?: SortOrder
    newsPageId?: SortOrder
  }

  export type NewsPageCreateNestedManyWithoutPage_categoriesInput = {
    create?: XOR<NewsPageCreateWithoutPage_categoriesInput, NewsPageUncheckedCreateWithoutPage_categoriesInput> | NewsPageCreateWithoutPage_categoriesInput[] | NewsPageUncheckedCreateWithoutPage_categoriesInput[]
    connectOrCreate?: NewsPageCreateOrConnectWithoutPage_categoriesInput | NewsPageCreateOrConnectWithoutPage_categoriesInput[]
    createMany?: NewsPageCreateManyPage_categoriesInputEnvelope
    connect?: NewsPageWhereUniqueInput | NewsPageWhereUniqueInput[]
  }

  export type NewsPageUncheckedCreateNestedManyWithoutPage_categoriesInput = {
    create?: XOR<NewsPageCreateWithoutPage_categoriesInput, NewsPageUncheckedCreateWithoutPage_categoriesInput> | NewsPageCreateWithoutPage_categoriesInput[] | NewsPageUncheckedCreateWithoutPage_categoriesInput[]
    connectOrCreate?: NewsPageCreateOrConnectWithoutPage_categoriesInput | NewsPageCreateOrConnectWithoutPage_categoriesInput[]
    createMany?: NewsPageCreateManyPage_categoriesInputEnvelope
    connect?: NewsPageWhereUniqueInput | NewsPageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NewsPageUpdateManyWithoutPage_categoriesNestedInput = {
    create?: XOR<NewsPageCreateWithoutPage_categoriesInput, NewsPageUncheckedCreateWithoutPage_categoriesInput> | NewsPageCreateWithoutPage_categoriesInput[] | NewsPageUncheckedCreateWithoutPage_categoriesInput[]
    connectOrCreate?: NewsPageCreateOrConnectWithoutPage_categoriesInput | NewsPageCreateOrConnectWithoutPage_categoriesInput[]
    upsert?: NewsPageUpsertWithWhereUniqueWithoutPage_categoriesInput | NewsPageUpsertWithWhereUniqueWithoutPage_categoriesInput[]
    createMany?: NewsPageCreateManyPage_categoriesInputEnvelope
    set?: NewsPageWhereUniqueInput | NewsPageWhereUniqueInput[]
    disconnect?: NewsPageWhereUniqueInput | NewsPageWhereUniqueInput[]
    delete?: NewsPageWhereUniqueInput | NewsPageWhereUniqueInput[]
    connect?: NewsPageWhereUniqueInput | NewsPageWhereUniqueInput[]
    update?: NewsPageUpdateWithWhereUniqueWithoutPage_categoriesInput | NewsPageUpdateWithWhereUniqueWithoutPage_categoriesInput[]
    updateMany?: NewsPageUpdateManyWithWhereWithoutPage_categoriesInput | NewsPageUpdateManyWithWhereWithoutPage_categoriesInput[]
    deleteMany?: NewsPageScalarWhereInput | NewsPageScalarWhereInput[]
  }

  export type NewsPageUncheckedUpdateManyWithoutPage_categoriesNestedInput = {
    create?: XOR<NewsPageCreateWithoutPage_categoriesInput, NewsPageUncheckedCreateWithoutPage_categoriesInput> | NewsPageCreateWithoutPage_categoriesInput[] | NewsPageUncheckedCreateWithoutPage_categoriesInput[]
    connectOrCreate?: NewsPageCreateOrConnectWithoutPage_categoriesInput | NewsPageCreateOrConnectWithoutPage_categoriesInput[]
    upsert?: NewsPageUpsertWithWhereUniqueWithoutPage_categoriesInput | NewsPageUpsertWithWhereUniqueWithoutPage_categoriesInput[]
    createMany?: NewsPageCreateManyPage_categoriesInputEnvelope
    set?: NewsPageWhereUniqueInput | NewsPageWhereUniqueInput[]
    disconnect?: NewsPageWhereUniqueInput | NewsPageWhereUniqueInput[]
    delete?: NewsPageWhereUniqueInput | NewsPageWhereUniqueInput[]
    connect?: NewsPageWhereUniqueInput | NewsPageWhereUniqueInput[]
    update?: NewsPageUpdateWithWhereUniqueWithoutPage_categoriesInput | NewsPageUpdateWithWhereUniqueWithoutPage_categoriesInput[]
    updateMany?: NewsPageUpdateManyWithWhereWithoutPage_categoriesInput | NewsPageUpdateManyWithWhereWithoutPage_categoriesInput[]
    deleteMany?: NewsPageScalarWhereInput | NewsPageScalarWhereInput[]
  }

  export type NewspaperCreateNestedManyWithoutNewspaper_categoriesInput = {
    create?: XOR<NewspaperCreateWithoutNewspaper_categoriesInput, NewspaperUncheckedCreateWithoutNewspaper_categoriesInput> | NewspaperCreateWithoutNewspaper_categoriesInput[] | NewspaperUncheckedCreateWithoutNewspaper_categoriesInput[]
    connectOrCreate?: NewspaperCreateOrConnectWithoutNewspaper_categoriesInput | NewspaperCreateOrConnectWithoutNewspaper_categoriesInput[]
    createMany?: NewspaperCreateManyNewspaper_categoriesInputEnvelope
    connect?: NewspaperWhereUniqueInput | NewspaperWhereUniqueInput[]
  }

  export type NewspaperUncheckedCreateNestedManyWithoutNewspaper_categoriesInput = {
    create?: XOR<NewspaperCreateWithoutNewspaper_categoriesInput, NewspaperUncheckedCreateWithoutNewspaper_categoriesInput> | NewspaperCreateWithoutNewspaper_categoriesInput[] | NewspaperUncheckedCreateWithoutNewspaper_categoriesInput[]
    connectOrCreate?: NewspaperCreateOrConnectWithoutNewspaper_categoriesInput | NewspaperCreateOrConnectWithoutNewspaper_categoriesInput[]
    createMany?: NewspaperCreateManyNewspaper_categoriesInputEnvelope
    connect?: NewspaperWhereUniqueInput | NewspaperWhereUniqueInput[]
  }

  export type NewspaperUpdateManyWithoutNewspaper_categoriesNestedInput = {
    create?: XOR<NewspaperCreateWithoutNewspaper_categoriesInput, NewspaperUncheckedCreateWithoutNewspaper_categoriesInput> | NewspaperCreateWithoutNewspaper_categoriesInput[] | NewspaperUncheckedCreateWithoutNewspaper_categoriesInput[]
    connectOrCreate?: NewspaperCreateOrConnectWithoutNewspaper_categoriesInput | NewspaperCreateOrConnectWithoutNewspaper_categoriesInput[]
    upsert?: NewspaperUpsertWithWhereUniqueWithoutNewspaper_categoriesInput | NewspaperUpsertWithWhereUniqueWithoutNewspaper_categoriesInput[]
    createMany?: NewspaperCreateManyNewspaper_categoriesInputEnvelope
    set?: NewspaperWhereUniqueInput | NewspaperWhereUniqueInput[]
    disconnect?: NewspaperWhereUniqueInput | NewspaperWhereUniqueInput[]
    delete?: NewspaperWhereUniqueInput | NewspaperWhereUniqueInput[]
    connect?: NewspaperWhereUniqueInput | NewspaperWhereUniqueInput[]
    update?: NewspaperUpdateWithWhereUniqueWithoutNewspaper_categoriesInput | NewspaperUpdateWithWhereUniqueWithoutNewspaper_categoriesInput[]
    updateMany?: NewspaperUpdateManyWithWhereWithoutNewspaper_categoriesInput | NewspaperUpdateManyWithWhereWithoutNewspaper_categoriesInput[]
    deleteMany?: NewspaperScalarWhereInput | NewspaperScalarWhereInput[]
  }

  export type NewspaperUncheckedUpdateManyWithoutNewspaper_categoriesNestedInput = {
    create?: XOR<NewspaperCreateWithoutNewspaper_categoriesInput, NewspaperUncheckedCreateWithoutNewspaper_categoriesInput> | NewspaperCreateWithoutNewspaper_categoriesInput[] | NewspaperUncheckedCreateWithoutNewspaper_categoriesInput[]
    connectOrCreate?: NewspaperCreateOrConnectWithoutNewspaper_categoriesInput | NewspaperCreateOrConnectWithoutNewspaper_categoriesInput[]
    upsert?: NewspaperUpsertWithWhereUniqueWithoutNewspaper_categoriesInput | NewspaperUpsertWithWhereUniqueWithoutNewspaper_categoriesInput[]
    createMany?: NewspaperCreateManyNewspaper_categoriesInputEnvelope
    set?: NewspaperWhereUniqueInput | NewspaperWhereUniqueInput[]
    disconnect?: NewspaperWhereUniqueInput | NewspaperWhereUniqueInput[]
    delete?: NewspaperWhereUniqueInput | NewspaperWhereUniqueInput[]
    connect?: NewspaperWhereUniqueInput | NewspaperWhereUniqueInput[]
    update?: NewspaperUpdateWithWhereUniqueWithoutNewspaper_categoriesInput | NewspaperUpdateWithWhereUniqueWithoutNewspaper_categoriesInput[]
    updateMany?: NewspaperUpdateManyWithWhereWithoutNewspaper_categoriesInput | NewspaperUpdateManyWithWhereWithoutNewspaper_categoriesInput[]
    deleteMany?: NewspaperScalarWhereInput | NewspaperScalarWhereInput[]
  }

  export type NewspaperCategoryCreateNestedOneWithoutNewspapersInput = {
    create?: XOR<NewspaperCategoryCreateWithoutNewspapersInput, NewspaperCategoryUncheckedCreateWithoutNewspapersInput>
    connectOrCreate?: NewspaperCategoryCreateOrConnectWithoutNewspapersInput
    connect?: NewspaperCategoryWhereUniqueInput
  }

  export type NewspaperCategoryUpdateOneRequiredWithoutNewspapersNestedInput = {
    create?: XOR<NewspaperCategoryCreateWithoutNewspapersInput, NewspaperCategoryUncheckedCreateWithoutNewspapersInput>
    connectOrCreate?: NewspaperCategoryCreateOrConnectWithoutNewspapersInput
    upsert?: NewspaperCategoryUpsertWithoutNewspapersInput
    connect?: NewspaperCategoryWhereUniqueInput
    update?: XOR<XOR<NewspaperCategoryUpdateToOneWithWhereWithoutNewspapersInput, NewspaperCategoryUpdateWithoutNewspapersInput>, NewspaperCategoryUncheckedUpdateWithoutNewspapersInput>
  }

  export type MapDataCreateNestedManyWithoutNewsPageInput = {
    create?: XOR<MapDataCreateWithoutNewsPageInput, MapDataUncheckedCreateWithoutNewsPageInput> | MapDataCreateWithoutNewsPageInput[] | MapDataUncheckedCreateWithoutNewsPageInput[]
    connectOrCreate?: MapDataCreateOrConnectWithoutNewsPageInput | MapDataCreateOrConnectWithoutNewsPageInput[]
    createMany?: MapDataCreateManyNewsPageInputEnvelope
    connect?: MapDataWhereUniqueInput | MapDataWhereUniqueInput[]
  }

  export type PageCategoryCreateNestedOneWithoutNews_pagesInput = {
    create?: XOR<PageCategoryCreateWithoutNews_pagesInput, PageCategoryUncheckedCreateWithoutNews_pagesInput>
    connectOrCreate?: PageCategoryCreateOrConnectWithoutNews_pagesInput
    connect?: PageCategoryWhereUniqueInput
  }

  export type MapDataUncheckedCreateNestedManyWithoutNewsPageInput = {
    create?: XOR<MapDataCreateWithoutNewsPageInput, MapDataUncheckedCreateWithoutNewsPageInput> | MapDataCreateWithoutNewsPageInput[] | MapDataUncheckedCreateWithoutNewsPageInput[]
    connectOrCreate?: MapDataCreateOrConnectWithoutNewsPageInput | MapDataCreateOrConnectWithoutNewsPageInput[]
    createMany?: MapDataCreateManyNewsPageInputEnvelope
    connect?: MapDataWhereUniqueInput | MapDataWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MapDataUpdateManyWithoutNewsPageNestedInput = {
    create?: XOR<MapDataCreateWithoutNewsPageInput, MapDataUncheckedCreateWithoutNewsPageInput> | MapDataCreateWithoutNewsPageInput[] | MapDataUncheckedCreateWithoutNewsPageInput[]
    connectOrCreate?: MapDataCreateOrConnectWithoutNewsPageInput | MapDataCreateOrConnectWithoutNewsPageInput[]
    upsert?: MapDataUpsertWithWhereUniqueWithoutNewsPageInput | MapDataUpsertWithWhereUniqueWithoutNewsPageInput[]
    createMany?: MapDataCreateManyNewsPageInputEnvelope
    set?: MapDataWhereUniqueInput | MapDataWhereUniqueInput[]
    disconnect?: MapDataWhereUniqueInput | MapDataWhereUniqueInput[]
    delete?: MapDataWhereUniqueInput | MapDataWhereUniqueInput[]
    connect?: MapDataWhereUniqueInput | MapDataWhereUniqueInput[]
    update?: MapDataUpdateWithWhereUniqueWithoutNewsPageInput | MapDataUpdateWithWhereUniqueWithoutNewsPageInput[]
    updateMany?: MapDataUpdateManyWithWhereWithoutNewsPageInput | MapDataUpdateManyWithWhereWithoutNewsPageInput[]
    deleteMany?: MapDataScalarWhereInput | MapDataScalarWhereInput[]
  }

  export type PageCategoryUpdateOneRequiredWithoutNews_pagesNestedInput = {
    create?: XOR<PageCategoryCreateWithoutNews_pagesInput, PageCategoryUncheckedCreateWithoutNews_pagesInput>
    connectOrCreate?: PageCategoryCreateOrConnectWithoutNews_pagesInput
    upsert?: PageCategoryUpsertWithoutNews_pagesInput
    connect?: PageCategoryWhereUniqueInput
    update?: XOR<XOR<PageCategoryUpdateToOneWithWhereWithoutNews_pagesInput, PageCategoryUpdateWithoutNews_pagesInput>, PageCategoryUncheckedUpdateWithoutNews_pagesInput>
  }

  export type MapDataUncheckedUpdateManyWithoutNewsPageNestedInput = {
    create?: XOR<MapDataCreateWithoutNewsPageInput, MapDataUncheckedCreateWithoutNewsPageInput> | MapDataCreateWithoutNewsPageInput[] | MapDataUncheckedCreateWithoutNewsPageInput[]
    connectOrCreate?: MapDataCreateOrConnectWithoutNewsPageInput | MapDataCreateOrConnectWithoutNewsPageInput[]
    upsert?: MapDataUpsertWithWhereUniqueWithoutNewsPageInput | MapDataUpsertWithWhereUniqueWithoutNewsPageInput[]
    createMany?: MapDataCreateManyNewsPageInputEnvelope
    set?: MapDataWhereUniqueInput | MapDataWhereUniqueInput[]
    disconnect?: MapDataWhereUniqueInput | MapDataWhereUniqueInput[]
    delete?: MapDataWhereUniqueInput | MapDataWhereUniqueInput[]
    connect?: MapDataWhereUniqueInput | MapDataWhereUniqueInput[]
    update?: MapDataUpdateWithWhereUniqueWithoutNewsPageInput | MapDataUpdateWithWhereUniqueWithoutNewsPageInput[]
    updateMany?: MapDataUpdateManyWithWhereWithoutNewsPageInput | MapDataUpdateManyWithWhereWithoutNewsPageInput[]
    deleteMany?: MapDataScalarWhereInput | MapDataScalarWhereInput[]
  }

  export type NewsPageCreateNestedOneWithoutMapDataInput = {
    create?: XOR<NewsPageCreateWithoutMapDataInput, NewsPageUncheckedCreateWithoutMapDataInput>
    connectOrCreate?: NewsPageCreateOrConnectWithoutMapDataInput
    connect?: NewsPageWhereUniqueInput
  }

  export type NewsPageUpdateOneRequiredWithoutMapDataNestedInput = {
    create?: XOR<NewsPageCreateWithoutMapDataInput, NewsPageUncheckedCreateWithoutMapDataInput>
    connectOrCreate?: NewsPageCreateOrConnectWithoutMapDataInput
    upsert?: NewsPageUpsertWithoutMapDataInput
    connect?: NewsPageWhereUniqueInput
    update?: XOR<XOR<NewsPageUpdateToOneWithWhereWithoutMapDataInput, NewsPageUpdateWithoutMapDataInput>, NewsPageUncheckedUpdateWithoutMapDataInput>
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

  export type NewsPageCreateWithoutPage_categoriesInput = {
    date: string
    image: string
    lastModified?: Date | string
    mapData?: MapDataCreateNestedManyWithoutNewsPageInput
  }

  export type NewsPageUncheckedCreateWithoutPage_categoriesInput = {
    id?: number
    date: string
    image: string
    lastModified?: Date | string
    mapData?: MapDataUncheckedCreateNestedManyWithoutNewsPageInput
  }

  export type NewsPageCreateOrConnectWithoutPage_categoriesInput = {
    where: NewsPageWhereUniqueInput
    create: XOR<NewsPageCreateWithoutPage_categoriesInput, NewsPageUncheckedCreateWithoutPage_categoriesInput>
  }

  export type NewsPageCreateManyPage_categoriesInputEnvelope = {
    data: NewsPageCreateManyPage_categoriesInput | NewsPageCreateManyPage_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type NewsPageUpsertWithWhereUniqueWithoutPage_categoriesInput = {
    where: NewsPageWhereUniqueInput
    update: XOR<NewsPageUpdateWithoutPage_categoriesInput, NewsPageUncheckedUpdateWithoutPage_categoriesInput>
    create: XOR<NewsPageCreateWithoutPage_categoriesInput, NewsPageUncheckedCreateWithoutPage_categoriesInput>
  }

  export type NewsPageUpdateWithWhereUniqueWithoutPage_categoriesInput = {
    where: NewsPageWhereUniqueInput
    data: XOR<NewsPageUpdateWithoutPage_categoriesInput, NewsPageUncheckedUpdateWithoutPage_categoriesInput>
  }

  export type NewsPageUpdateManyWithWhereWithoutPage_categoriesInput = {
    where: NewsPageScalarWhereInput
    data: XOR<NewsPageUpdateManyMutationInput, NewsPageUncheckedUpdateManyWithoutPage_categoriesInput>
  }

  export type NewsPageScalarWhereInput = {
    AND?: NewsPageScalarWhereInput | NewsPageScalarWhereInput[]
    OR?: NewsPageScalarWhereInput[]
    NOT?: NewsPageScalarWhereInput | NewsPageScalarWhereInput[]
    id?: IntFilter<"NewsPage"> | number
    title_id?: IntFilter<"NewsPage"> | number
    date?: StringFilter<"NewsPage"> | string
    image?: StringFilter<"NewsPage"> | string
    lastModified?: DateTimeFilter<"NewsPage"> | Date | string
  }

  export type NewspaperCreateWithoutNewspaper_categoriesInput = {
    date: string
  }

  export type NewspaperUncheckedCreateWithoutNewspaper_categoriesInput = {
    id?: number
    date: string
  }

  export type NewspaperCreateOrConnectWithoutNewspaper_categoriesInput = {
    where: NewspaperWhereUniqueInput
    create: XOR<NewspaperCreateWithoutNewspaper_categoriesInput, NewspaperUncheckedCreateWithoutNewspaper_categoriesInput>
  }

  export type NewspaperCreateManyNewspaper_categoriesInputEnvelope = {
    data: NewspaperCreateManyNewspaper_categoriesInput | NewspaperCreateManyNewspaper_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type NewspaperUpsertWithWhereUniqueWithoutNewspaper_categoriesInput = {
    where: NewspaperWhereUniqueInput
    update: XOR<NewspaperUpdateWithoutNewspaper_categoriesInput, NewspaperUncheckedUpdateWithoutNewspaper_categoriesInput>
    create: XOR<NewspaperCreateWithoutNewspaper_categoriesInput, NewspaperUncheckedCreateWithoutNewspaper_categoriesInput>
  }

  export type NewspaperUpdateWithWhereUniqueWithoutNewspaper_categoriesInput = {
    where: NewspaperWhereUniqueInput
    data: XOR<NewspaperUpdateWithoutNewspaper_categoriesInput, NewspaperUncheckedUpdateWithoutNewspaper_categoriesInput>
  }

  export type NewspaperUpdateManyWithWhereWithoutNewspaper_categoriesInput = {
    where: NewspaperScalarWhereInput
    data: XOR<NewspaperUpdateManyMutationInput, NewspaperUncheckedUpdateManyWithoutNewspaper_categoriesInput>
  }

  export type NewspaperScalarWhereInput = {
    AND?: NewspaperScalarWhereInput | NewspaperScalarWhereInput[]
    OR?: NewspaperScalarWhereInput[]
    NOT?: NewspaperScalarWhereInput | NewspaperScalarWhereInput[]
    id?: IntFilter<"Newspaper"> | number
    title_id?: IntFilter<"Newspaper"> | number
    date?: StringFilter<"Newspaper"> | string
  }

  export type NewspaperCategoryCreateWithoutNewspapersInput = {
    title?: string | null
    slug: string
    order?: number
  }

  export type NewspaperCategoryUncheckedCreateWithoutNewspapersInput = {
    id?: number
    title?: string | null
    slug: string
    order?: number
  }

  export type NewspaperCategoryCreateOrConnectWithoutNewspapersInput = {
    where: NewspaperCategoryWhereUniqueInput
    create: XOR<NewspaperCategoryCreateWithoutNewspapersInput, NewspaperCategoryUncheckedCreateWithoutNewspapersInput>
  }

  export type NewspaperCategoryUpsertWithoutNewspapersInput = {
    update: XOR<NewspaperCategoryUpdateWithoutNewspapersInput, NewspaperCategoryUncheckedUpdateWithoutNewspapersInput>
    create: XOR<NewspaperCategoryCreateWithoutNewspapersInput, NewspaperCategoryUncheckedCreateWithoutNewspapersInput>
    where?: NewspaperCategoryWhereInput
  }

  export type NewspaperCategoryUpdateToOneWithWhereWithoutNewspapersInput = {
    where?: NewspaperCategoryWhereInput
    data: XOR<NewspaperCategoryUpdateWithoutNewspapersInput, NewspaperCategoryUncheckedUpdateWithoutNewspapersInput>
  }

  export type NewspaperCategoryUpdateWithoutNewspapersInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type NewspaperCategoryUncheckedUpdateWithoutNewspapersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type MapDataCreateWithoutNewsPageInput = {
    coordinates: string
    title?: string | null
    link?: string | null
  }

  export type MapDataUncheckedCreateWithoutNewsPageInput = {
    id?: number
    coordinates: string
    title?: string | null
    link?: string | null
  }

  export type MapDataCreateOrConnectWithoutNewsPageInput = {
    where: MapDataWhereUniqueInput
    create: XOR<MapDataCreateWithoutNewsPageInput, MapDataUncheckedCreateWithoutNewsPageInput>
  }

  export type MapDataCreateManyNewsPageInputEnvelope = {
    data: MapDataCreateManyNewsPageInput | MapDataCreateManyNewsPageInput[]
    skipDuplicates?: boolean
  }

  export type PageCategoryCreateWithoutNews_pagesInput = {
    title?: string | null
    slug: string
    order?: number
  }

  export type PageCategoryUncheckedCreateWithoutNews_pagesInput = {
    id?: number
    title?: string | null
    slug: string
    order?: number
  }

  export type PageCategoryCreateOrConnectWithoutNews_pagesInput = {
    where: PageCategoryWhereUniqueInput
    create: XOR<PageCategoryCreateWithoutNews_pagesInput, PageCategoryUncheckedCreateWithoutNews_pagesInput>
  }

  export type MapDataUpsertWithWhereUniqueWithoutNewsPageInput = {
    where: MapDataWhereUniqueInput
    update: XOR<MapDataUpdateWithoutNewsPageInput, MapDataUncheckedUpdateWithoutNewsPageInput>
    create: XOR<MapDataCreateWithoutNewsPageInput, MapDataUncheckedCreateWithoutNewsPageInput>
  }

  export type MapDataUpdateWithWhereUniqueWithoutNewsPageInput = {
    where: MapDataWhereUniqueInput
    data: XOR<MapDataUpdateWithoutNewsPageInput, MapDataUncheckedUpdateWithoutNewsPageInput>
  }

  export type MapDataUpdateManyWithWhereWithoutNewsPageInput = {
    where: MapDataScalarWhereInput
    data: XOR<MapDataUpdateManyMutationInput, MapDataUncheckedUpdateManyWithoutNewsPageInput>
  }

  export type MapDataScalarWhereInput = {
    AND?: MapDataScalarWhereInput | MapDataScalarWhereInput[]
    OR?: MapDataScalarWhereInput[]
    NOT?: MapDataScalarWhereInput | MapDataScalarWhereInput[]
    id?: IntFilter<"MapData"> | number
    newsPageId?: IntFilter<"MapData"> | number
    coordinates?: StringFilter<"MapData"> | string
    title?: StringNullableFilter<"MapData"> | string | null
    link?: StringNullableFilter<"MapData"> | string | null
  }

  export type PageCategoryUpsertWithoutNews_pagesInput = {
    update: XOR<PageCategoryUpdateWithoutNews_pagesInput, PageCategoryUncheckedUpdateWithoutNews_pagesInput>
    create: XOR<PageCategoryCreateWithoutNews_pagesInput, PageCategoryUncheckedCreateWithoutNews_pagesInput>
    where?: PageCategoryWhereInput
  }

  export type PageCategoryUpdateToOneWithWhereWithoutNews_pagesInput = {
    where?: PageCategoryWhereInput
    data: XOR<PageCategoryUpdateWithoutNews_pagesInput, PageCategoryUncheckedUpdateWithoutNews_pagesInput>
  }

  export type PageCategoryUpdateWithoutNews_pagesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PageCategoryUncheckedUpdateWithoutNews_pagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type NewsPageCreateWithoutMapDataInput = {
    date: string
    image: string
    lastModified?: Date | string
    page_categories?: PageCategoryCreateNestedOneWithoutNews_pagesInput
  }

  export type NewsPageUncheckedCreateWithoutMapDataInput = {
    id?: number
    title_id?: number
    date: string
    image: string
    lastModified?: Date | string
  }

  export type NewsPageCreateOrConnectWithoutMapDataInput = {
    where: NewsPageWhereUniqueInput
    create: XOR<NewsPageCreateWithoutMapDataInput, NewsPageUncheckedCreateWithoutMapDataInput>
  }

  export type NewsPageUpsertWithoutMapDataInput = {
    update: XOR<NewsPageUpdateWithoutMapDataInput, NewsPageUncheckedUpdateWithoutMapDataInput>
    create: XOR<NewsPageCreateWithoutMapDataInput, NewsPageUncheckedCreateWithoutMapDataInput>
    where?: NewsPageWhereInput
  }

  export type NewsPageUpdateToOneWithWhereWithoutMapDataInput = {
    where?: NewsPageWhereInput
    data: XOR<NewsPageUpdateWithoutMapDataInput, NewsPageUncheckedUpdateWithoutMapDataInput>
  }

  export type NewsPageUpdateWithoutMapDataInput = {
    date?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    page_categories?: PageCategoryUpdateOneRequiredWithoutNews_pagesNestedInput
  }

  export type NewsPageUncheckedUpdateWithoutMapDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsPageCreateManyPage_categoriesInput = {
    id?: number
    date: string
    image: string
    lastModified?: Date | string
  }

  export type NewsPageUpdateWithoutPage_categoriesInput = {
    date?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    mapData?: MapDataUpdateManyWithoutNewsPageNestedInput
  }

  export type NewsPageUncheckedUpdateWithoutPage_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    mapData?: MapDataUncheckedUpdateManyWithoutNewsPageNestedInput
  }

  export type NewsPageUncheckedUpdateManyWithoutPage_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewspaperCreateManyNewspaper_categoriesInput = {
    id?: number
    date: string
  }

  export type NewspaperUpdateWithoutNewspaper_categoriesInput = {
    date?: StringFieldUpdateOperationsInput | string
  }

  export type NewspaperUncheckedUpdateWithoutNewspaper_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type NewspaperUncheckedUpdateManyWithoutNewspaper_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type MapDataCreateManyNewsPageInput = {
    id?: number
    coordinates: string
    title?: string | null
    link?: string | null
  }

  export type MapDataUpdateWithoutNewsPageInput = {
    coordinates?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MapDataUncheckedUpdateWithoutNewsPageInput = {
    id?: IntFieldUpdateOperationsInput | number
    coordinates?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MapDataUncheckedUpdateManyWithoutNewsPageInput = {
    id?: IntFieldUpdateOperationsInput | number
    coordinates?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
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