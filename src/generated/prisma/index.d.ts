
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tower
 * 
 */
export type Tower = $Result.DefaultSelection<Prisma.$TowerPayload>
/**
 * Model Zone
 * 
 */
export type Zone = $Result.DefaultSelection<Prisma.$ZonePayload>
/**
 * Model ZoneImage
 * 
 */
export type ZoneImage = $Result.DefaultSelection<Prisma.$ZoneImagePayload>
/**
 * Model Facility
 * 
 */
export type Facility = $Result.DefaultSelection<Prisma.$FacilityPayload>
/**
 * Model FacilityImage
 * 
 */
export type FacilityImage = $Result.DefaultSelection<Prisma.$FacilityImagePayload>
/**
 * Model UnitType
 * 
 */
export type UnitType = $Result.DefaultSelection<Prisma.$UnitTypePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tower`: Exposes CRUD operations for the **Tower** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Towers
    * const towers = await prisma.tower.findMany()
    * ```
    */
  get tower(): Prisma.TowerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zone`: Exposes CRUD operations for the **Zone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zones
    * const zones = await prisma.zone.findMany()
    * ```
    */
  get zone(): Prisma.ZoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zoneImage`: Exposes CRUD operations for the **ZoneImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZoneImages
    * const zoneImages = await prisma.zoneImage.findMany()
    * ```
    */
  get zoneImage(): Prisma.ZoneImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facility`: Exposes CRUD operations for the **Facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.FacilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facilityImage`: Exposes CRUD operations for the **FacilityImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacilityImages
    * const facilityImages = await prisma.facilityImage.findMany()
    * ```
    */
  get facilityImage(): Prisma.FacilityImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unitType`: Exposes CRUD operations for the **UnitType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnitTypes
    * const unitTypes = await prisma.unitType.findMany()
    * ```
    */
  get unitType(): Prisma.UnitTypeDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    User: 'User',
    Tower: 'Tower',
    Zone: 'Zone',
    ZoneImage: 'ZoneImage',
    Facility: 'Facility',
    FacilityImage: 'FacilityImage',
    UnitType: 'UnitType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tower" | "zone" | "zoneImage" | "facility" | "facilityImage" | "unitType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tower: {
        payload: Prisma.$TowerPayload<ExtArgs>
        fields: Prisma.TowerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TowerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TowerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>
          }
          findFirst: {
            args: Prisma.TowerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TowerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>
          }
          findMany: {
            args: Prisma.TowerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>[]
          }
          create: {
            args: Prisma.TowerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>
          }
          createMany: {
            args: Prisma.TowerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TowerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>[]
          }
          delete: {
            args: Prisma.TowerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>
          }
          update: {
            args: Prisma.TowerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>
          }
          deleteMany: {
            args: Prisma.TowerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TowerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TowerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>[]
          }
          upsert: {
            args: Prisma.TowerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowerPayload>
          }
          aggregate: {
            args: Prisma.TowerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTower>
          }
          groupBy: {
            args: Prisma.TowerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TowerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TowerCountArgs<ExtArgs>
            result: $Utils.Optional<TowerCountAggregateOutputType> | number
          }
        }
      }
      Zone: {
        payload: Prisma.$ZonePayload<ExtArgs>
        fields: Prisma.ZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          findFirst: {
            args: Prisma.ZoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          findMany: {
            args: Prisma.ZoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>[]
          }
          create: {
            args: Prisma.ZoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          createMany: {
            args: Prisma.ZoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>[]
          }
          delete: {
            args: Prisma.ZoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          update: {
            args: Prisma.ZoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          deleteMany: {
            args: Prisma.ZoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>[]
          }
          upsert: {
            args: Prisma.ZoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          aggregate: {
            args: Prisma.ZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZone>
          }
          groupBy: {
            args: Prisma.ZoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZoneCountArgs<ExtArgs>
            result: $Utils.Optional<ZoneCountAggregateOutputType> | number
          }
        }
      }
      ZoneImage: {
        payload: Prisma.$ZoneImagePayload<ExtArgs>
        fields: Prisma.ZoneImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZoneImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZoneImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneImagePayload>
          }
          findFirst: {
            args: Prisma.ZoneImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZoneImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneImagePayload>
          }
          findMany: {
            args: Prisma.ZoneImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneImagePayload>[]
          }
          create: {
            args: Prisma.ZoneImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneImagePayload>
          }
          createMany: {
            args: Prisma.ZoneImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZoneImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneImagePayload>[]
          }
          delete: {
            args: Prisma.ZoneImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneImagePayload>
          }
          update: {
            args: Prisma.ZoneImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneImagePayload>
          }
          deleteMany: {
            args: Prisma.ZoneImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZoneImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZoneImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneImagePayload>[]
          }
          upsert: {
            args: Prisma.ZoneImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneImagePayload>
          }
          aggregate: {
            args: Prisma.ZoneImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZoneImage>
          }
          groupBy: {
            args: Prisma.ZoneImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZoneImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZoneImageCountArgs<ExtArgs>
            result: $Utils.Optional<ZoneImageCountAggregateOutputType> | number
          }
        }
      }
      Facility: {
        payload: Prisma.$FacilityPayload<ExtArgs>
        fields: Prisma.FacilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findFirst: {
            args: Prisma.FacilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findMany: {
            args: Prisma.FacilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          create: {
            args: Prisma.FacilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          createMany: {
            args: Prisma.FacilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          delete: {
            args: Prisma.FacilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          update: {
            args: Prisma.FacilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          deleteMany: {
            args: Prisma.FacilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          upsert: {
            args: Prisma.FacilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          aggregate: {
            args: Prisma.FacilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacility>
          }
          groupBy: {
            args: Prisma.FacilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilityCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityCountAggregateOutputType> | number
          }
        }
      }
      FacilityImage: {
        payload: Prisma.$FacilityImagePayload<ExtArgs>
        fields: Prisma.FacilityImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilityImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilityImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityImagePayload>
          }
          findFirst: {
            args: Prisma.FacilityImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilityImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityImagePayload>
          }
          findMany: {
            args: Prisma.FacilityImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityImagePayload>[]
          }
          create: {
            args: Prisma.FacilityImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityImagePayload>
          }
          createMany: {
            args: Prisma.FacilityImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacilityImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityImagePayload>[]
          }
          delete: {
            args: Prisma.FacilityImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityImagePayload>
          }
          update: {
            args: Prisma.FacilityImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityImagePayload>
          }
          deleteMany: {
            args: Prisma.FacilityImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilityImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacilityImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityImagePayload>[]
          }
          upsert: {
            args: Prisma.FacilityImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityImagePayload>
          }
          aggregate: {
            args: Prisma.FacilityImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacilityImage>
          }
          groupBy: {
            args: Prisma.FacilityImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilityImageCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityImageCountAggregateOutputType> | number
          }
        }
      }
      UnitType: {
        payload: Prisma.$UnitTypePayload<ExtArgs>
        fields: Prisma.UnitTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>
          }
          findFirst: {
            args: Prisma.UnitTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>
          }
          findMany: {
            args: Prisma.UnitTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>[]
          }
          create: {
            args: Prisma.UnitTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>
          }
          createMany: {
            args: Prisma.UnitTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>[]
          }
          delete: {
            args: Prisma.UnitTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>
          }
          update: {
            args: Prisma.UnitTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>
          }
          deleteMany: {
            args: Prisma.UnitTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>[]
          }
          upsert: {
            args: Prisma.UnitTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>
          }
          aggregate: {
            args: Prisma.UnitTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnitType>
          }
          groupBy: {
            args: Prisma.UnitTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitTypeCountArgs<ExtArgs>
            result: $Utils.Optional<UnitTypeCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tower?: TowerOmit
    zone?: ZoneOmit
    zoneImage?: ZoneImageOmit
    facility?: FacilityOmit
    facilityImage?: FacilityImageOmit
    unitType?: UnitTypeOmit
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
   * Count Type TowerCountOutputType
   */

  export type TowerCountOutputType = {
    zones: number
  }

  export type TowerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zones?: boolean | TowerCountOutputTypeCountZonesArgs
  }

  // Custom InputTypes
  /**
   * TowerCountOutputType without action
   */
  export type TowerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TowerCountOutputType
     */
    select?: TowerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TowerCountOutputType without action
   */
  export type TowerCountOutputTypeCountZonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoneWhereInput
  }


  /**
   * Count Type ZoneCountOutputType
   */

  export type ZoneCountOutputType = {
    facilities: number
    images: number
  }

  export type ZoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facilities?: boolean | ZoneCountOutputTypeCountFacilitiesArgs
    images?: boolean | ZoneCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneCountOutputType
     */
    select?: ZoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeCountFacilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityWhereInput
  }

  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoneImageWhereInput
  }


  /**
   * Count Type FacilityCountOutputType
   */

  export type FacilityCountOutputType = {
    images: number
    unitTypes: number
  }

  export type FacilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | FacilityCountOutputTypeCountImagesArgs
    unitTypes?: boolean | FacilityCountOutputTypeCountUnitTypesArgs
  }

  // Custom InputTypes
  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityCountOutputType
     */
    select?: FacilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityImageWhereInput
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountUnitTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitTypeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Tower
   */

  export type AggregateTower = {
    _count: TowerCountAggregateOutputType | null
    _min: TowerMinAggregateOutputType | null
    _max: TowerMaxAggregateOutputType | null
  }

  export type TowerMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type TowerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type TowerCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    _all: number
  }


  export type TowerMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type TowerMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type TowerCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type TowerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tower to aggregate.
     */
    where?: TowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towers to fetch.
     */
    orderBy?: TowerOrderByWithRelationInput | TowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Towers
    **/
    _count?: true | TowerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TowerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TowerMaxAggregateInputType
  }

  export type GetTowerAggregateType<T extends TowerAggregateArgs> = {
        [P in keyof T & keyof AggregateTower]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTower[P]>
      : GetScalarType<T[P], AggregateTower[P]>
  }




  export type TowerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TowerWhereInput
    orderBy?: TowerOrderByWithAggregationInput | TowerOrderByWithAggregationInput[]
    by: TowerScalarFieldEnum[] | TowerScalarFieldEnum
    having?: TowerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TowerCountAggregateInputType | true
    _min?: TowerMinAggregateInputType
    _max?: TowerMaxAggregateInputType
  }

  export type TowerGroupByOutputType = {
    id: string
    name: string
    slug: string
    _count: TowerCountAggregateOutputType | null
    _min: TowerMinAggregateOutputType | null
    _max: TowerMaxAggregateOutputType | null
  }

  type GetTowerGroupByPayload<T extends TowerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TowerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TowerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TowerGroupByOutputType[P]>
            : GetScalarType<T[P], TowerGroupByOutputType[P]>
        }
      >
    >


  export type TowerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    zones?: boolean | Tower$zonesArgs<ExtArgs>
    _count?: boolean | TowerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tower"]>

  export type TowerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["tower"]>

  export type TowerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["tower"]>

  export type TowerSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
  }

  export type TowerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug", ExtArgs["result"]["tower"]>
  export type TowerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zones?: boolean | Tower$zonesArgs<ExtArgs>
    _count?: boolean | TowerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TowerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TowerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TowerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tower"
    objects: {
      zones: Prisma.$ZonePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
    }, ExtArgs["result"]["tower"]>
    composites: {}
  }

  type TowerGetPayload<S extends boolean | null | undefined | TowerDefaultArgs> = $Result.GetResult<Prisma.$TowerPayload, S>

  type TowerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TowerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TowerCountAggregateInputType | true
    }

  export interface TowerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tower'], meta: { name: 'Tower' } }
    /**
     * Find zero or one Tower that matches the filter.
     * @param {TowerFindUniqueArgs} args - Arguments to find a Tower
     * @example
     * // Get one Tower
     * const tower = await prisma.tower.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TowerFindUniqueArgs>(args: SelectSubset<T, TowerFindUniqueArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tower that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TowerFindUniqueOrThrowArgs} args - Arguments to find a Tower
     * @example
     * // Get one Tower
     * const tower = await prisma.tower.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TowerFindUniqueOrThrowArgs>(args: SelectSubset<T, TowerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tower that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerFindFirstArgs} args - Arguments to find a Tower
     * @example
     * // Get one Tower
     * const tower = await prisma.tower.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TowerFindFirstArgs>(args?: SelectSubset<T, TowerFindFirstArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tower that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerFindFirstOrThrowArgs} args - Arguments to find a Tower
     * @example
     * // Get one Tower
     * const tower = await prisma.tower.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TowerFindFirstOrThrowArgs>(args?: SelectSubset<T, TowerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Towers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Towers
     * const towers = await prisma.tower.findMany()
     * 
     * // Get first 10 Towers
     * const towers = await prisma.tower.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const towerWithIdOnly = await prisma.tower.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TowerFindManyArgs>(args?: SelectSubset<T, TowerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tower.
     * @param {TowerCreateArgs} args - Arguments to create a Tower.
     * @example
     * // Create one Tower
     * const Tower = await prisma.tower.create({
     *   data: {
     *     // ... data to create a Tower
     *   }
     * })
     * 
     */
    create<T extends TowerCreateArgs>(args: SelectSubset<T, TowerCreateArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Towers.
     * @param {TowerCreateManyArgs} args - Arguments to create many Towers.
     * @example
     * // Create many Towers
     * const tower = await prisma.tower.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TowerCreateManyArgs>(args?: SelectSubset<T, TowerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Towers and returns the data saved in the database.
     * @param {TowerCreateManyAndReturnArgs} args - Arguments to create many Towers.
     * @example
     * // Create many Towers
     * const tower = await prisma.tower.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Towers and only return the `id`
     * const towerWithIdOnly = await prisma.tower.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TowerCreateManyAndReturnArgs>(args?: SelectSubset<T, TowerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tower.
     * @param {TowerDeleteArgs} args - Arguments to delete one Tower.
     * @example
     * // Delete one Tower
     * const Tower = await prisma.tower.delete({
     *   where: {
     *     // ... filter to delete one Tower
     *   }
     * })
     * 
     */
    delete<T extends TowerDeleteArgs>(args: SelectSubset<T, TowerDeleteArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tower.
     * @param {TowerUpdateArgs} args - Arguments to update one Tower.
     * @example
     * // Update one Tower
     * const tower = await prisma.tower.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TowerUpdateArgs>(args: SelectSubset<T, TowerUpdateArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Towers.
     * @param {TowerDeleteManyArgs} args - Arguments to filter Towers to delete.
     * @example
     * // Delete a few Towers
     * const { count } = await prisma.tower.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TowerDeleteManyArgs>(args?: SelectSubset<T, TowerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Towers
     * const tower = await prisma.tower.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TowerUpdateManyArgs>(args: SelectSubset<T, TowerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Towers and returns the data updated in the database.
     * @param {TowerUpdateManyAndReturnArgs} args - Arguments to update many Towers.
     * @example
     * // Update many Towers
     * const tower = await prisma.tower.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Towers and only return the `id`
     * const towerWithIdOnly = await prisma.tower.updateManyAndReturn({
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
    updateManyAndReturn<T extends TowerUpdateManyAndReturnArgs>(args: SelectSubset<T, TowerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tower.
     * @param {TowerUpsertArgs} args - Arguments to update or create a Tower.
     * @example
     * // Update or create a Tower
     * const tower = await prisma.tower.upsert({
     *   create: {
     *     // ... data to create a Tower
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tower we want to update
     *   }
     * })
     */
    upsert<T extends TowerUpsertArgs>(args: SelectSubset<T, TowerUpsertArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerCountArgs} args - Arguments to filter Towers to count.
     * @example
     * // Count the number of Towers
     * const count = await prisma.tower.count({
     *   where: {
     *     // ... the filter for the Towers we want to count
     *   }
     * })
    **/
    count<T extends TowerCountArgs>(
      args?: Subset<T, TowerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TowerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TowerAggregateArgs>(args: Subset<T, TowerAggregateArgs>): Prisma.PrismaPromise<GetTowerAggregateType<T>>

    /**
     * Group by Tower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerGroupByArgs} args - Group by arguments.
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
      T extends TowerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TowerGroupByArgs['orderBy'] }
        : { orderBy?: TowerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TowerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTowerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tower model
   */
  readonly fields: TowerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tower.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TowerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zones<T extends Tower$zonesArgs<ExtArgs> = {}>(args?: Subset<T, Tower$zonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tower model
   */
  interface TowerFieldRefs {
    readonly id: FieldRef<"Tower", 'String'>
    readonly name: FieldRef<"Tower", 'String'>
    readonly slug: FieldRef<"Tower", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tower findUnique
   */
  export type TowerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * Filter, which Tower to fetch.
     */
    where: TowerWhereUniqueInput
  }

  /**
   * Tower findUniqueOrThrow
   */
  export type TowerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * Filter, which Tower to fetch.
     */
    where: TowerWhereUniqueInput
  }

  /**
   * Tower findFirst
   */
  export type TowerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * Filter, which Tower to fetch.
     */
    where?: TowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towers to fetch.
     */
    orderBy?: TowerOrderByWithRelationInput | TowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Towers.
     */
    cursor?: TowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Towers.
     */
    distinct?: TowerScalarFieldEnum | TowerScalarFieldEnum[]
  }

  /**
   * Tower findFirstOrThrow
   */
  export type TowerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * Filter, which Tower to fetch.
     */
    where?: TowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towers to fetch.
     */
    orderBy?: TowerOrderByWithRelationInput | TowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Towers.
     */
    cursor?: TowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Towers.
     */
    distinct?: TowerScalarFieldEnum | TowerScalarFieldEnum[]
  }

  /**
   * Tower findMany
   */
  export type TowerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * Filter, which Towers to fetch.
     */
    where?: TowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towers to fetch.
     */
    orderBy?: TowerOrderByWithRelationInput | TowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Towers.
     */
    cursor?: TowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Towers.
     */
    distinct?: TowerScalarFieldEnum | TowerScalarFieldEnum[]
  }

  /**
   * Tower create
   */
  export type TowerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * The data needed to create a Tower.
     */
    data: XOR<TowerCreateInput, TowerUncheckedCreateInput>
  }

  /**
   * Tower createMany
   */
  export type TowerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Towers.
     */
    data: TowerCreateManyInput | TowerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tower createManyAndReturn
   */
  export type TowerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * The data used to create many Towers.
     */
    data: TowerCreateManyInput | TowerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tower update
   */
  export type TowerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * The data needed to update a Tower.
     */
    data: XOR<TowerUpdateInput, TowerUncheckedUpdateInput>
    /**
     * Choose, which Tower to update.
     */
    where: TowerWhereUniqueInput
  }

  /**
   * Tower updateMany
   */
  export type TowerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Towers.
     */
    data: XOR<TowerUpdateManyMutationInput, TowerUncheckedUpdateManyInput>
    /**
     * Filter which Towers to update
     */
    where?: TowerWhereInput
    /**
     * Limit how many Towers to update.
     */
    limit?: number
  }

  /**
   * Tower updateManyAndReturn
   */
  export type TowerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * The data used to update Towers.
     */
    data: XOR<TowerUpdateManyMutationInput, TowerUncheckedUpdateManyInput>
    /**
     * Filter which Towers to update
     */
    where?: TowerWhereInput
    /**
     * Limit how many Towers to update.
     */
    limit?: number
  }

  /**
   * Tower upsert
   */
  export type TowerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * The filter to search for the Tower to update in case it exists.
     */
    where: TowerWhereUniqueInput
    /**
     * In case the Tower found by the `where` argument doesn't exist, create a new Tower with this data.
     */
    create: XOR<TowerCreateInput, TowerUncheckedCreateInput>
    /**
     * In case the Tower was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TowerUpdateInput, TowerUncheckedUpdateInput>
  }

  /**
   * Tower delete
   */
  export type TowerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
    /**
     * Filter which Tower to delete.
     */
    where: TowerWhereUniqueInput
  }

  /**
   * Tower deleteMany
   */
  export type TowerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Towers to delete
     */
    where?: TowerWhereInput
    /**
     * Limit how many Towers to delete.
     */
    limit?: number
  }

  /**
   * Tower.zones
   */
  export type Tower$zonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    where?: ZoneWhereInput
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    cursor?: ZoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Tower without action
   */
  export type TowerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tower
     */
    select?: TowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tower
     */
    omit?: TowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowerInclude<ExtArgs> | null
  }


  /**
   * Model Zone
   */

  export type AggregateZone = {
    _count: ZoneCountAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  export type ZoneMinAggregateOutputType = {
    id: string | null
    towerId: string | null
    categoryName: string | null
    floorsRange: string | null
    points: string | null
    imageUrl: string | null
  }

  export type ZoneMaxAggregateOutputType = {
    id: string | null
    towerId: string | null
    categoryName: string | null
    floorsRange: string | null
    points: string | null
    imageUrl: string | null
  }

  export type ZoneCountAggregateOutputType = {
    id: number
    towerId: number
    categoryName: number
    floorsRange: number
    points: number
    imageUrl: number
    _all: number
  }


  export type ZoneMinAggregateInputType = {
    id?: true
    towerId?: true
    categoryName?: true
    floorsRange?: true
    points?: true
    imageUrl?: true
  }

  export type ZoneMaxAggregateInputType = {
    id?: true
    towerId?: true
    categoryName?: true
    floorsRange?: true
    points?: true
    imageUrl?: true
  }

  export type ZoneCountAggregateInputType = {
    id?: true
    towerId?: true
    categoryName?: true
    floorsRange?: true
    points?: true
    imageUrl?: true
    _all?: true
  }

  export type ZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zone to aggregate.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zones
    **/
    _count?: true | ZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZoneMaxAggregateInputType
  }

  export type GetZoneAggregateType<T extends ZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZone[P]>
      : GetScalarType<T[P], AggregateZone[P]>
  }




  export type ZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoneWhereInput
    orderBy?: ZoneOrderByWithAggregationInput | ZoneOrderByWithAggregationInput[]
    by: ZoneScalarFieldEnum[] | ZoneScalarFieldEnum
    having?: ZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZoneCountAggregateInputType | true
    _min?: ZoneMinAggregateInputType
    _max?: ZoneMaxAggregateInputType
  }

  export type ZoneGroupByOutputType = {
    id: string
    towerId: string
    categoryName: string
    floorsRange: string
    points: string | null
    imageUrl: string | null
    _count: ZoneCountAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  type GetZoneGroupByPayload<T extends ZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZoneGroupByOutputType[P]>
            : GetScalarType<T[P], ZoneGroupByOutputType[P]>
        }
      >
    >


  export type ZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    towerId?: boolean
    categoryName?: boolean
    floorsRange?: boolean
    points?: boolean
    imageUrl?: boolean
    tower?: boolean | TowerDefaultArgs<ExtArgs>
    facilities?: boolean | Zone$facilitiesArgs<ExtArgs>
    images?: boolean | Zone$imagesArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zone"]>

  export type ZoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    towerId?: boolean
    categoryName?: boolean
    floorsRange?: boolean
    points?: boolean
    imageUrl?: boolean
    tower?: boolean | TowerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zone"]>

  export type ZoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    towerId?: boolean
    categoryName?: boolean
    floorsRange?: boolean
    points?: boolean
    imageUrl?: boolean
    tower?: boolean | TowerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zone"]>

  export type ZoneSelectScalar = {
    id?: boolean
    towerId?: boolean
    categoryName?: boolean
    floorsRange?: boolean
    points?: boolean
    imageUrl?: boolean
  }

  export type ZoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "towerId" | "categoryName" | "floorsRange" | "points" | "imageUrl", ExtArgs["result"]["zone"]>
  export type ZoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tower?: boolean | TowerDefaultArgs<ExtArgs>
    facilities?: boolean | Zone$facilitiesArgs<ExtArgs>
    images?: boolean | Zone$imagesArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ZoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tower?: boolean | TowerDefaultArgs<ExtArgs>
  }
  export type ZoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tower?: boolean | TowerDefaultArgs<ExtArgs>
  }

  export type $ZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zone"
    objects: {
      tower: Prisma.$TowerPayload<ExtArgs>
      facilities: Prisma.$FacilityPayload<ExtArgs>[]
      images: Prisma.$ZoneImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      towerId: string
      categoryName: string
      floorsRange: string
      points: string | null
      imageUrl: string | null
    }, ExtArgs["result"]["zone"]>
    composites: {}
  }

  type ZoneGetPayload<S extends boolean | null | undefined | ZoneDefaultArgs> = $Result.GetResult<Prisma.$ZonePayload, S>

  type ZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZoneCountAggregateInputType | true
    }

  export interface ZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zone'], meta: { name: 'Zone' } }
    /**
     * Find zero or one Zone that matches the filter.
     * @param {ZoneFindUniqueArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZoneFindUniqueArgs>(args: SelectSubset<T, ZoneFindUniqueArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZoneFindUniqueOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZoneFindUniqueOrThrowArgs>(args: SelectSubset<T, ZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindFirstArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZoneFindFirstArgs>(args?: SelectSubset<T, ZoneFindFirstArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindFirstOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZoneFindFirstOrThrowArgs>(args?: SelectSubset<T, ZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zones
     * const zones = await prisma.zone.findMany()
     * 
     * // Get first 10 Zones
     * const zones = await prisma.zone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zoneWithIdOnly = await prisma.zone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZoneFindManyArgs>(args?: SelectSubset<T, ZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zone.
     * @param {ZoneCreateArgs} args - Arguments to create a Zone.
     * @example
     * // Create one Zone
     * const Zone = await prisma.zone.create({
     *   data: {
     *     // ... data to create a Zone
     *   }
     * })
     * 
     */
    create<T extends ZoneCreateArgs>(args: SelectSubset<T, ZoneCreateArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zones.
     * @param {ZoneCreateManyArgs} args - Arguments to create many Zones.
     * @example
     * // Create many Zones
     * const zone = await prisma.zone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZoneCreateManyArgs>(args?: SelectSubset<T, ZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zones and returns the data saved in the database.
     * @param {ZoneCreateManyAndReturnArgs} args - Arguments to create many Zones.
     * @example
     * // Create many Zones
     * const zone = await prisma.zone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zones and only return the `id`
     * const zoneWithIdOnly = await prisma.zone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZoneCreateManyAndReturnArgs>(args?: SelectSubset<T, ZoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zone.
     * @param {ZoneDeleteArgs} args - Arguments to delete one Zone.
     * @example
     * // Delete one Zone
     * const Zone = await prisma.zone.delete({
     *   where: {
     *     // ... filter to delete one Zone
     *   }
     * })
     * 
     */
    delete<T extends ZoneDeleteArgs>(args: SelectSubset<T, ZoneDeleteArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zone.
     * @param {ZoneUpdateArgs} args - Arguments to update one Zone.
     * @example
     * // Update one Zone
     * const zone = await prisma.zone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZoneUpdateArgs>(args: SelectSubset<T, ZoneUpdateArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zones.
     * @param {ZoneDeleteManyArgs} args - Arguments to filter Zones to delete.
     * @example
     * // Delete a few Zones
     * const { count } = await prisma.zone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZoneDeleteManyArgs>(args?: SelectSubset<T, ZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zones
     * const zone = await prisma.zone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZoneUpdateManyArgs>(args: SelectSubset<T, ZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zones and returns the data updated in the database.
     * @param {ZoneUpdateManyAndReturnArgs} args - Arguments to update many Zones.
     * @example
     * // Update many Zones
     * const zone = await prisma.zone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Zones and only return the `id`
     * const zoneWithIdOnly = await prisma.zone.updateManyAndReturn({
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
    updateManyAndReturn<T extends ZoneUpdateManyAndReturnArgs>(args: SelectSubset<T, ZoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Zone.
     * @param {ZoneUpsertArgs} args - Arguments to update or create a Zone.
     * @example
     * // Update or create a Zone
     * const zone = await prisma.zone.upsert({
     *   create: {
     *     // ... data to create a Zone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zone we want to update
     *   }
     * })
     */
    upsert<T extends ZoneUpsertArgs>(args: SelectSubset<T, ZoneUpsertArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneCountArgs} args - Arguments to filter Zones to count.
     * @example
     * // Count the number of Zones
     * const count = await prisma.zone.count({
     *   where: {
     *     // ... the filter for the Zones we want to count
     *   }
     * })
    **/
    count<T extends ZoneCountArgs>(
      args?: Subset<T, ZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZoneAggregateArgs>(args: Subset<T, ZoneAggregateArgs>): Prisma.PrismaPromise<GetZoneAggregateType<T>>

    /**
     * Group by Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneGroupByArgs} args - Group by arguments.
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
      T extends ZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZoneGroupByArgs['orderBy'] }
        : { orderBy?: ZoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zone model
   */
  readonly fields: ZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tower<T extends TowerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TowerDefaultArgs<ExtArgs>>): Prisma__TowerClient<$Result.GetResult<Prisma.$TowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    facilities<T extends Zone$facilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Zone$facilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Zone$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Zone$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoneImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Zone model
   */
  interface ZoneFieldRefs {
    readonly id: FieldRef<"Zone", 'String'>
    readonly towerId: FieldRef<"Zone", 'String'>
    readonly categoryName: FieldRef<"Zone", 'String'>
    readonly floorsRange: FieldRef<"Zone", 'String'>
    readonly points: FieldRef<"Zone", 'String'>
    readonly imageUrl: FieldRef<"Zone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Zone findUnique
   */
  export type ZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone findUniqueOrThrow
   */
  export type ZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone findFirst
   */
  export type ZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone findFirstOrThrow
   */
  export type ZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone findMany
   */
  export type ZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zones to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone create
   */
  export type ZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Zone.
     */
    data: XOR<ZoneCreateInput, ZoneUncheckedCreateInput>
  }

  /**
   * Zone createMany
   */
  export type ZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zones.
     */
    data: ZoneCreateManyInput | ZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zone createManyAndReturn
   */
  export type ZoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * The data used to create many Zones.
     */
    data: ZoneCreateManyInput | ZoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Zone update
   */
  export type ZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Zone.
     */
    data: XOR<ZoneUpdateInput, ZoneUncheckedUpdateInput>
    /**
     * Choose, which Zone to update.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone updateMany
   */
  export type ZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zones.
     */
    data: XOR<ZoneUpdateManyMutationInput, ZoneUncheckedUpdateManyInput>
    /**
     * Filter which Zones to update
     */
    where?: ZoneWhereInput
    /**
     * Limit how many Zones to update.
     */
    limit?: number
  }

  /**
   * Zone updateManyAndReturn
   */
  export type ZoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * The data used to update Zones.
     */
    data: XOR<ZoneUpdateManyMutationInput, ZoneUncheckedUpdateManyInput>
    /**
     * Filter which Zones to update
     */
    where?: ZoneWhereInput
    /**
     * Limit how many Zones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Zone upsert
   */
  export type ZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Zone to update in case it exists.
     */
    where: ZoneWhereUniqueInput
    /**
     * In case the Zone found by the `where` argument doesn't exist, create a new Zone with this data.
     */
    create: XOR<ZoneCreateInput, ZoneUncheckedCreateInput>
    /**
     * In case the Zone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZoneUpdateInput, ZoneUncheckedUpdateInput>
  }

  /**
   * Zone delete
   */
  export type ZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter which Zone to delete.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone deleteMany
   */
  export type ZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zones to delete
     */
    where?: ZoneWhereInput
    /**
     * Limit how many Zones to delete.
     */
    limit?: number
  }

  /**
   * Zone.facilities
   */
  export type Zone$facilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    where?: FacilityWhereInput
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    cursor?: FacilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Zone.images
   */
  export type Zone$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneImage
     */
    select?: ZoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneImage
     */
    omit?: ZoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneImageInclude<ExtArgs> | null
    where?: ZoneImageWhereInput
    orderBy?: ZoneImageOrderByWithRelationInput | ZoneImageOrderByWithRelationInput[]
    cursor?: ZoneImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZoneImageScalarFieldEnum | ZoneImageScalarFieldEnum[]
  }

  /**
   * Zone without action
   */
  export type ZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
  }


  /**
   * Model ZoneImage
   */

  export type AggregateZoneImage = {
    _count: ZoneImageCountAggregateOutputType | null
    _avg: ZoneImageAvgAggregateOutputType | null
    _sum: ZoneImageSumAggregateOutputType | null
    _min: ZoneImageMinAggregateOutputType | null
    _max: ZoneImageMaxAggregateOutputType | null
  }

  export type ZoneImageAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ZoneImageSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ZoneImageMinAggregateOutputType = {
    id: string | null
    zoneId: string | null
    imageUrl: string | null
    sortOrder: number | null
  }

  export type ZoneImageMaxAggregateOutputType = {
    id: string | null
    zoneId: string | null
    imageUrl: string | null
    sortOrder: number | null
  }

  export type ZoneImageCountAggregateOutputType = {
    id: number
    zoneId: number
    imageUrl: number
    sortOrder: number
    _all: number
  }


  export type ZoneImageAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ZoneImageSumAggregateInputType = {
    sortOrder?: true
  }

  export type ZoneImageMinAggregateInputType = {
    id?: true
    zoneId?: true
    imageUrl?: true
    sortOrder?: true
  }

  export type ZoneImageMaxAggregateInputType = {
    id?: true
    zoneId?: true
    imageUrl?: true
    sortOrder?: true
  }

  export type ZoneImageCountAggregateInputType = {
    id?: true
    zoneId?: true
    imageUrl?: true
    sortOrder?: true
    _all?: true
  }

  export type ZoneImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZoneImage to aggregate.
     */
    where?: ZoneImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoneImages to fetch.
     */
    orderBy?: ZoneImageOrderByWithRelationInput | ZoneImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZoneImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoneImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoneImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZoneImages
    **/
    _count?: true | ZoneImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZoneImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZoneImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZoneImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZoneImageMaxAggregateInputType
  }

  export type GetZoneImageAggregateType<T extends ZoneImageAggregateArgs> = {
        [P in keyof T & keyof AggregateZoneImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZoneImage[P]>
      : GetScalarType<T[P], AggregateZoneImage[P]>
  }




  export type ZoneImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoneImageWhereInput
    orderBy?: ZoneImageOrderByWithAggregationInput | ZoneImageOrderByWithAggregationInput[]
    by: ZoneImageScalarFieldEnum[] | ZoneImageScalarFieldEnum
    having?: ZoneImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZoneImageCountAggregateInputType | true
    _avg?: ZoneImageAvgAggregateInputType
    _sum?: ZoneImageSumAggregateInputType
    _min?: ZoneImageMinAggregateInputType
    _max?: ZoneImageMaxAggregateInputType
  }

  export type ZoneImageGroupByOutputType = {
    id: string
    zoneId: string
    imageUrl: string
    sortOrder: number
    _count: ZoneImageCountAggregateOutputType | null
    _avg: ZoneImageAvgAggregateOutputType | null
    _sum: ZoneImageSumAggregateOutputType | null
    _min: ZoneImageMinAggregateOutputType | null
    _max: ZoneImageMaxAggregateOutputType | null
  }

  type GetZoneImageGroupByPayload<T extends ZoneImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZoneImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZoneImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZoneImageGroupByOutputType[P]>
            : GetScalarType<T[P], ZoneImageGroupByOutputType[P]>
        }
      >
    >


  export type ZoneImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoneId?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zoneImage"]>

  export type ZoneImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoneId?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zoneImage"]>

  export type ZoneImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoneId?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zoneImage"]>

  export type ZoneImageSelectScalar = {
    id?: boolean
    zoneId?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
  }

  export type ZoneImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zoneId" | "imageUrl" | "sortOrder", ExtArgs["result"]["zoneImage"]>
  export type ZoneImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }
  export type ZoneImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }
  export type ZoneImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }

  export type $ZoneImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZoneImage"
    objects: {
      zone: Prisma.$ZonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zoneId: string
      imageUrl: string
      sortOrder: number
    }, ExtArgs["result"]["zoneImage"]>
    composites: {}
  }

  type ZoneImageGetPayload<S extends boolean | null | undefined | ZoneImageDefaultArgs> = $Result.GetResult<Prisma.$ZoneImagePayload, S>

  type ZoneImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZoneImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZoneImageCountAggregateInputType | true
    }

  export interface ZoneImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZoneImage'], meta: { name: 'ZoneImage' } }
    /**
     * Find zero or one ZoneImage that matches the filter.
     * @param {ZoneImageFindUniqueArgs} args - Arguments to find a ZoneImage
     * @example
     * // Get one ZoneImage
     * const zoneImage = await prisma.zoneImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZoneImageFindUniqueArgs>(args: SelectSubset<T, ZoneImageFindUniqueArgs<ExtArgs>>): Prisma__ZoneImageClient<$Result.GetResult<Prisma.$ZoneImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZoneImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZoneImageFindUniqueOrThrowArgs} args - Arguments to find a ZoneImage
     * @example
     * // Get one ZoneImage
     * const zoneImage = await prisma.zoneImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZoneImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ZoneImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZoneImageClient<$Result.GetResult<Prisma.$ZoneImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZoneImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneImageFindFirstArgs} args - Arguments to find a ZoneImage
     * @example
     * // Get one ZoneImage
     * const zoneImage = await prisma.zoneImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZoneImageFindFirstArgs>(args?: SelectSubset<T, ZoneImageFindFirstArgs<ExtArgs>>): Prisma__ZoneImageClient<$Result.GetResult<Prisma.$ZoneImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZoneImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneImageFindFirstOrThrowArgs} args - Arguments to find a ZoneImage
     * @example
     * // Get one ZoneImage
     * const zoneImage = await prisma.zoneImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZoneImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ZoneImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZoneImageClient<$Result.GetResult<Prisma.$ZoneImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZoneImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZoneImages
     * const zoneImages = await prisma.zoneImage.findMany()
     * 
     * // Get first 10 ZoneImages
     * const zoneImages = await prisma.zoneImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zoneImageWithIdOnly = await prisma.zoneImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZoneImageFindManyArgs>(args?: SelectSubset<T, ZoneImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoneImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZoneImage.
     * @param {ZoneImageCreateArgs} args - Arguments to create a ZoneImage.
     * @example
     * // Create one ZoneImage
     * const ZoneImage = await prisma.zoneImage.create({
     *   data: {
     *     // ... data to create a ZoneImage
     *   }
     * })
     * 
     */
    create<T extends ZoneImageCreateArgs>(args: SelectSubset<T, ZoneImageCreateArgs<ExtArgs>>): Prisma__ZoneImageClient<$Result.GetResult<Prisma.$ZoneImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZoneImages.
     * @param {ZoneImageCreateManyArgs} args - Arguments to create many ZoneImages.
     * @example
     * // Create many ZoneImages
     * const zoneImage = await prisma.zoneImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZoneImageCreateManyArgs>(args?: SelectSubset<T, ZoneImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZoneImages and returns the data saved in the database.
     * @param {ZoneImageCreateManyAndReturnArgs} args - Arguments to create many ZoneImages.
     * @example
     * // Create many ZoneImages
     * const zoneImage = await prisma.zoneImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZoneImages and only return the `id`
     * const zoneImageWithIdOnly = await prisma.zoneImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZoneImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ZoneImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoneImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZoneImage.
     * @param {ZoneImageDeleteArgs} args - Arguments to delete one ZoneImage.
     * @example
     * // Delete one ZoneImage
     * const ZoneImage = await prisma.zoneImage.delete({
     *   where: {
     *     // ... filter to delete one ZoneImage
     *   }
     * })
     * 
     */
    delete<T extends ZoneImageDeleteArgs>(args: SelectSubset<T, ZoneImageDeleteArgs<ExtArgs>>): Prisma__ZoneImageClient<$Result.GetResult<Prisma.$ZoneImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZoneImage.
     * @param {ZoneImageUpdateArgs} args - Arguments to update one ZoneImage.
     * @example
     * // Update one ZoneImage
     * const zoneImage = await prisma.zoneImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZoneImageUpdateArgs>(args: SelectSubset<T, ZoneImageUpdateArgs<ExtArgs>>): Prisma__ZoneImageClient<$Result.GetResult<Prisma.$ZoneImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZoneImages.
     * @param {ZoneImageDeleteManyArgs} args - Arguments to filter ZoneImages to delete.
     * @example
     * // Delete a few ZoneImages
     * const { count } = await prisma.zoneImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZoneImageDeleteManyArgs>(args?: SelectSubset<T, ZoneImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZoneImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZoneImages
     * const zoneImage = await prisma.zoneImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZoneImageUpdateManyArgs>(args: SelectSubset<T, ZoneImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZoneImages and returns the data updated in the database.
     * @param {ZoneImageUpdateManyAndReturnArgs} args - Arguments to update many ZoneImages.
     * @example
     * // Update many ZoneImages
     * const zoneImage = await prisma.zoneImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZoneImages and only return the `id`
     * const zoneImageWithIdOnly = await prisma.zoneImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ZoneImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ZoneImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoneImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZoneImage.
     * @param {ZoneImageUpsertArgs} args - Arguments to update or create a ZoneImage.
     * @example
     * // Update or create a ZoneImage
     * const zoneImage = await prisma.zoneImage.upsert({
     *   create: {
     *     // ... data to create a ZoneImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZoneImage we want to update
     *   }
     * })
     */
    upsert<T extends ZoneImageUpsertArgs>(args: SelectSubset<T, ZoneImageUpsertArgs<ExtArgs>>): Prisma__ZoneImageClient<$Result.GetResult<Prisma.$ZoneImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZoneImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneImageCountArgs} args - Arguments to filter ZoneImages to count.
     * @example
     * // Count the number of ZoneImages
     * const count = await prisma.zoneImage.count({
     *   where: {
     *     // ... the filter for the ZoneImages we want to count
     *   }
     * })
    **/
    count<T extends ZoneImageCountArgs>(
      args?: Subset<T, ZoneImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZoneImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZoneImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZoneImageAggregateArgs>(args: Subset<T, ZoneImageAggregateArgs>): Prisma.PrismaPromise<GetZoneImageAggregateType<T>>

    /**
     * Group by ZoneImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneImageGroupByArgs} args - Group by arguments.
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
      T extends ZoneImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZoneImageGroupByArgs['orderBy'] }
        : { orderBy?: ZoneImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZoneImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoneImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZoneImage model
   */
  readonly fields: ZoneImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZoneImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZoneImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zone<T extends ZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZoneDefaultArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ZoneImage model
   */
  interface ZoneImageFieldRefs {
    readonly id: FieldRef<"ZoneImage", 'String'>
    readonly zoneId: FieldRef<"ZoneImage", 'String'>
    readonly imageUrl: FieldRef<"ZoneImage", 'String'>
    readonly sortOrder: FieldRef<"ZoneImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ZoneImage findUnique
   */
  export type ZoneImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneImage
     */
    select?: ZoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneImage
     */
    omit?: ZoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneImageInclude<ExtArgs> | null
    /**
     * Filter, which ZoneImage to fetch.
     */
    where: ZoneImageWhereUniqueInput
  }

  /**
   * ZoneImage findUniqueOrThrow
   */
  export type ZoneImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneImage
     */
    select?: ZoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneImage
     */
    omit?: ZoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneImageInclude<ExtArgs> | null
    /**
     * Filter, which ZoneImage to fetch.
     */
    where: ZoneImageWhereUniqueInput
  }

  /**
   * ZoneImage findFirst
   */
  export type ZoneImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneImage
     */
    select?: ZoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneImage
     */
    omit?: ZoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneImageInclude<ExtArgs> | null
    /**
     * Filter, which ZoneImage to fetch.
     */
    where?: ZoneImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoneImages to fetch.
     */
    orderBy?: ZoneImageOrderByWithRelationInput | ZoneImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZoneImages.
     */
    cursor?: ZoneImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoneImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoneImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZoneImages.
     */
    distinct?: ZoneImageScalarFieldEnum | ZoneImageScalarFieldEnum[]
  }

  /**
   * ZoneImage findFirstOrThrow
   */
  export type ZoneImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneImage
     */
    select?: ZoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneImage
     */
    omit?: ZoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneImageInclude<ExtArgs> | null
    /**
     * Filter, which ZoneImage to fetch.
     */
    where?: ZoneImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoneImages to fetch.
     */
    orderBy?: ZoneImageOrderByWithRelationInput | ZoneImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZoneImages.
     */
    cursor?: ZoneImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoneImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoneImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZoneImages.
     */
    distinct?: ZoneImageScalarFieldEnum | ZoneImageScalarFieldEnum[]
  }

  /**
   * ZoneImage findMany
   */
  export type ZoneImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneImage
     */
    select?: ZoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneImage
     */
    omit?: ZoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneImageInclude<ExtArgs> | null
    /**
     * Filter, which ZoneImages to fetch.
     */
    where?: ZoneImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoneImages to fetch.
     */
    orderBy?: ZoneImageOrderByWithRelationInput | ZoneImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZoneImages.
     */
    cursor?: ZoneImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoneImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoneImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZoneImages.
     */
    distinct?: ZoneImageScalarFieldEnum | ZoneImageScalarFieldEnum[]
  }

  /**
   * ZoneImage create
   */
  export type ZoneImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneImage
     */
    select?: ZoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneImage
     */
    omit?: ZoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ZoneImage.
     */
    data: XOR<ZoneImageCreateInput, ZoneImageUncheckedCreateInput>
  }

  /**
   * ZoneImage createMany
   */
  export type ZoneImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZoneImages.
     */
    data: ZoneImageCreateManyInput | ZoneImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZoneImage createManyAndReturn
   */
  export type ZoneImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneImage
     */
    select?: ZoneImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneImage
     */
    omit?: ZoneImageOmit<ExtArgs> | null
    /**
     * The data used to create many ZoneImages.
     */
    data: ZoneImageCreateManyInput | ZoneImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZoneImage update
   */
  export type ZoneImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneImage
     */
    select?: ZoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneImage
     */
    omit?: ZoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ZoneImage.
     */
    data: XOR<ZoneImageUpdateInput, ZoneImageUncheckedUpdateInput>
    /**
     * Choose, which ZoneImage to update.
     */
    where: ZoneImageWhereUniqueInput
  }

  /**
   * ZoneImage updateMany
   */
  export type ZoneImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZoneImages.
     */
    data: XOR<ZoneImageUpdateManyMutationInput, ZoneImageUncheckedUpdateManyInput>
    /**
     * Filter which ZoneImages to update
     */
    where?: ZoneImageWhereInput
    /**
     * Limit how many ZoneImages to update.
     */
    limit?: number
  }

  /**
   * ZoneImage updateManyAndReturn
   */
  export type ZoneImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneImage
     */
    select?: ZoneImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneImage
     */
    omit?: ZoneImageOmit<ExtArgs> | null
    /**
     * The data used to update ZoneImages.
     */
    data: XOR<ZoneImageUpdateManyMutationInput, ZoneImageUncheckedUpdateManyInput>
    /**
     * Filter which ZoneImages to update
     */
    where?: ZoneImageWhereInput
    /**
     * Limit how many ZoneImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZoneImage upsert
   */
  export type ZoneImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneImage
     */
    select?: ZoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneImage
     */
    omit?: ZoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ZoneImage to update in case it exists.
     */
    where: ZoneImageWhereUniqueInput
    /**
     * In case the ZoneImage found by the `where` argument doesn't exist, create a new ZoneImage with this data.
     */
    create: XOR<ZoneImageCreateInput, ZoneImageUncheckedCreateInput>
    /**
     * In case the ZoneImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZoneImageUpdateInput, ZoneImageUncheckedUpdateInput>
  }

  /**
   * ZoneImage delete
   */
  export type ZoneImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneImage
     */
    select?: ZoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneImage
     */
    omit?: ZoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneImageInclude<ExtArgs> | null
    /**
     * Filter which ZoneImage to delete.
     */
    where: ZoneImageWhereUniqueInput
  }

  /**
   * ZoneImage deleteMany
   */
  export type ZoneImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZoneImages to delete
     */
    where?: ZoneImageWhereInput
    /**
     * Limit how many ZoneImages to delete.
     */
    limit?: number
  }

  /**
   * ZoneImage without action
   */
  export type ZoneImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneImage
     */
    select?: ZoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneImage
     */
    omit?: ZoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneImageInclude<ExtArgs> | null
  }


  /**
   * Model Facility
   */

  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityMinAggregateOutputType = {
    id: string | null
    zoneId: string | null
    title: string | null
    category: string | null
    description: string | null
  }

  export type FacilityMaxAggregateOutputType = {
    id: string | null
    zoneId: string | null
    title: string | null
    category: string | null
    description: string | null
  }

  export type FacilityCountAggregateOutputType = {
    id: number
    zoneId: number
    title: number
    category: number
    description: number
    _all: number
  }


  export type FacilityMinAggregateInputType = {
    id?: true
    zoneId?: true
    title?: true
    category?: true
    description?: true
  }

  export type FacilityMaxAggregateInputType = {
    id?: true
    zoneId?: true
    title?: true
    category?: true
    description?: true
  }

  export type FacilityCountAggregateInputType = {
    id?: true
    zoneId?: true
    title?: true
    category?: true
    description?: true
    _all?: true
  }

  export type FacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facility to aggregate.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type FacilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityWhereInput
    orderBy?: FacilityOrderByWithAggregationInput | FacilityOrderByWithAggregationInput[]
    by: FacilityScalarFieldEnum[] | FacilityScalarFieldEnum
    having?: FacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }

  export type FacilityGroupByOutputType = {
    id: string
    zoneId: string
    title: string
    category: string
    description: string | null
    _count: FacilityCountAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends FacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type FacilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoneId?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    images?: boolean | Facility$imagesArgs<ExtArgs>
    unitTypes?: boolean | Facility$unitTypesArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoneId?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoneId?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectScalar = {
    id?: boolean
    zoneId?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
  }

  export type FacilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zoneId" | "title" | "category" | "description", ExtArgs["result"]["facility"]>
  export type FacilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    images?: boolean | Facility$imagesArgs<ExtArgs>
    unitTypes?: boolean | Facility$unitTypesArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }
  export type FacilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }

  export type $FacilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facility"
    objects: {
      zone: Prisma.$ZonePayload<ExtArgs>
      images: Prisma.$FacilityImagePayload<ExtArgs>[]
      unitTypes: Prisma.$UnitTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zoneId: string
      title: string
      category: string
      description: string | null
    }, ExtArgs["result"]["facility"]>
    composites: {}
  }

  type FacilityGetPayload<S extends boolean | null | undefined | FacilityDefaultArgs> = $Result.GetResult<Prisma.$FacilityPayload, S>

  type FacilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface FacilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facility'], meta: { name: 'Facility' } }
    /**
     * Find zero or one Facility that matches the filter.
     * @param {FacilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilityFindUniqueArgs>(args: SelectSubset<T, FacilityFindUniqueArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilityFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilityFindFirstArgs>(args?: SelectSubset<T, FacilityFindFirstArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilityFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityWithIdOnly = await prisma.facility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilityFindManyArgs>(args?: SelectSubset<T, FacilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facility.
     * @param {FacilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
     */
    create<T extends FacilityCreateArgs>(args: SelectSubset<T, FacilityCreateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facilities.
     * @param {FacilityCreateManyArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilityCreateManyArgs>(args?: SelectSubset<T, FacilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facilities and returns the data saved in the database.
     * @param {FacilityCreateManyAndReturnArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facilities and only return the `id`
     * const facilityWithIdOnly = await prisma.facility.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacilityCreateManyAndReturnArgs>(args?: SelectSubset<T, FacilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facility.
     * @param {FacilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
     */
    delete<T extends FacilityDeleteArgs>(args: SelectSubset<T, FacilityDeleteArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facility.
     * @param {FacilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilityUpdateArgs>(args: SelectSubset<T, FacilityUpdateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facilities.
     * @param {FacilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilityDeleteManyArgs>(args?: SelectSubset<T, FacilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilityUpdateManyArgs>(args: SelectSubset<T, FacilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities and returns the data updated in the database.
     * @param {FacilityUpdateManyAndReturnArgs} args - Arguments to update many Facilities.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facilities and only return the `id`
     * const facilityWithIdOnly = await prisma.facility.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacilityUpdateManyAndReturnArgs>(args: SelectSubset<T, FacilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facility.
     * @param {FacilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
     */
    upsert<T extends FacilityUpsertArgs>(args: SelectSubset<T, FacilityUpsertArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends FacilityCountArgs>(
      args?: Subset<T, FacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityGroupByArgs} args - Group by arguments.
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
      T extends FacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityGroupByArgs['orderBy'] }
        : { orderBy?: FacilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facility model
   */
  readonly fields: FacilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zone<T extends ZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZoneDefaultArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Facility$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Facility$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unitTypes<T extends Facility$unitTypesArgs<ExtArgs> = {}>(args?: Subset<T, Facility$unitTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Facility model
   */
  interface FacilityFieldRefs {
    readonly id: FieldRef<"Facility", 'String'>
    readonly zoneId: FieldRef<"Facility", 'String'>
    readonly title: FieldRef<"Facility", 'String'>
    readonly category: FieldRef<"Facility", 'String'>
    readonly description: FieldRef<"Facility", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Facility findUnique
   */
  export type FacilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findUniqueOrThrow
   */
  export type FacilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findFirst
   */
  export type FacilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findFirstOrThrow
   */
  export type FacilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findMany
   */
  export type FacilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facilities to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility create
   */
  export type FacilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Facility.
     */
    data: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
  }

  /**
   * Facility createMany
   */
  export type FacilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facility createManyAndReturn
   */
  export type FacilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Facility update
   */
  export type FacilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Facility.
     */
    data: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
    /**
     * Choose, which Facility to update.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility updateMany
   */
  export type FacilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to update.
     */
    limit?: number
  }

  /**
   * Facility updateManyAndReturn
   */
  export type FacilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Facility upsert
   */
  export type FacilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Facility to update in case it exists.
     */
    where: FacilityWhereUniqueInput
    /**
     * In case the Facility found by the `where` argument doesn't exist, create a new Facility with this data.
     */
    create: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
    /**
     * In case the Facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
  }

  /**
   * Facility delete
   */
  export type FacilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter which Facility to delete.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility deleteMany
   */
  export type FacilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facilities to delete
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to delete.
     */
    limit?: number
  }

  /**
   * Facility.images
   */
  export type Facility$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityImage
     */
    select?: FacilityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityImage
     */
    omit?: FacilityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityImageInclude<ExtArgs> | null
    where?: FacilityImageWhereInput
    orderBy?: FacilityImageOrderByWithRelationInput | FacilityImageOrderByWithRelationInput[]
    cursor?: FacilityImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilityImageScalarFieldEnum | FacilityImageScalarFieldEnum[]
  }

  /**
   * Facility.unitTypes
   */
  export type Facility$unitTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitTypeInclude<ExtArgs> | null
    where?: UnitTypeWhereInput
    orderBy?: UnitTypeOrderByWithRelationInput | UnitTypeOrderByWithRelationInput[]
    cursor?: UnitTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitTypeScalarFieldEnum | UnitTypeScalarFieldEnum[]
  }

  /**
   * Facility without action
   */
  export type FacilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
  }


  /**
   * Model FacilityImage
   */

  export type AggregateFacilityImage = {
    _count: FacilityImageCountAggregateOutputType | null
    _avg: FacilityImageAvgAggregateOutputType | null
    _sum: FacilityImageSumAggregateOutputType | null
    _min: FacilityImageMinAggregateOutputType | null
    _max: FacilityImageMaxAggregateOutputType | null
  }

  export type FacilityImageAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type FacilityImageSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type FacilityImageMinAggregateOutputType = {
    id: string | null
    facilityId: string | null
    imageUrl: string | null
    isPrimary: boolean | null
    sortOrder: number | null
  }

  export type FacilityImageMaxAggregateOutputType = {
    id: string | null
    facilityId: string | null
    imageUrl: string | null
    isPrimary: boolean | null
    sortOrder: number | null
  }

  export type FacilityImageCountAggregateOutputType = {
    id: number
    facilityId: number
    imageUrl: number
    isPrimary: number
    sortOrder: number
    _all: number
  }


  export type FacilityImageAvgAggregateInputType = {
    sortOrder?: true
  }

  export type FacilityImageSumAggregateInputType = {
    sortOrder?: true
  }

  export type FacilityImageMinAggregateInputType = {
    id?: true
    facilityId?: true
    imageUrl?: true
    isPrimary?: true
    sortOrder?: true
  }

  export type FacilityImageMaxAggregateInputType = {
    id?: true
    facilityId?: true
    imageUrl?: true
    isPrimary?: true
    sortOrder?: true
  }

  export type FacilityImageCountAggregateInputType = {
    id?: true
    facilityId?: true
    imageUrl?: true
    isPrimary?: true
    sortOrder?: true
    _all?: true
  }

  export type FacilityImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilityImage to aggregate.
     */
    where?: FacilityImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityImages to fetch.
     */
    orderBy?: FacilityImageOrderByWithRelationInput | FacilityImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacilityImages
    **/
    _count?: true | FacilityImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilityImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityImageMaxAggregateInputType
  }

  export type GetFacilityImageAggregateType<T extends FacilityImageAggregateArgs> = {
        [P in keyof T & keyof AggregateFacilityImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacilityImage[P]>
      : GetScalarType<T[P], AggregateFacilityImage[P]>
  }




  export type FacilityImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityImageWhereInput
    orderBy?: FacilityImageOrderByWithAggregationInput | FacilityImageOrderByWithAggregationInput[]
    by: FacilityImageScalarFieldEnum[] | FacilityImageScalarFieldEnum
    having?: FacilityImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityImageCountAggregateInputType | true
    _avg?: FacilityImageAvgAggregateInputType
    _sum?: FacilityImageSumAggregateInputType
    _min?: FacilityImageMinAggregateInputType
    _max?: FacilityImageMaxAggregateInputType
  }

  export type FacilityImageGroupByOutputType = {
    id: string
    facilityId: string
    imageUrl: string
    isPrimary: boolean
    sortOrder: number
    _count: FacilityImageCountAggregateOutputType | null
    _avg: FacilityImageAvgAggregateOutputType | null
    _sum: FacilityImageSumAggregateOutputType | null
    _min: FacilityImageMinAggregateOutputType | null
    _max: FacilityImageMaxAggregateOutputType | null
  }

  type GetFacilityImageGroupByPayload<T extends FacilityImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityImageGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityImageGroupByOutputType[P]>
        }
      >
    >


  export type FacilityImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    imageUrl?: boolean
    isPrimary?: boolean
    sortOrder?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilityImage"]>

  export type FacilityImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    imageUrl?: boolean
    isPrimary?: boolean
    sortOrder?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilityImage"]>

  export type FacilityImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    imageUrl?: boolean
    isPrimary?: boolean
    sortOrder?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilityImage"]>

  export type FacilityImageSelectScalar = {
    id?: boolean
    facilityId?: boolean
    imageUrl?: boolean
    isPrimary?: boolean
    sortOrder?: boolean
  }

  export type FacilityImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facilityId" | "imageUrl" | "isPrimary" | "sortOrder", ExtArgs["result"]["facilityImage"]>
  export type FacilityImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type FacilityImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type FacilityImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }

  export type $FacilityImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacilityImage"
    objects: {
      facility: Prisma.$FacilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      facilityId: string
      imageUrl: string
      isPrimary: boolean
      sortOrder: number
    }, ExtArgs["result"]["facilityImage"]>
    composites: {}
  }

  type FacilityImageGetPayload<S extends boolean | null | undefined | FacilityImageDefaultArgs> = $Result.GetResult<Prisma.$FacilityImagePayload, S>

  type FacilityImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacilityImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilityImageCountAggregateInputType | true
    }

  export interface FacilityImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacilityImage'], meta: { name: 'FacilityImage' } }
    /**
     * Find zero or one FacilityImage that matches the filter.
     * @param {FacilityImageFindUniqueArgs} args - Arguments to find a FacilityImage
     * @example
     * // Get one FacilityImage
     * const facilityImage = await prisma.facilityImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilityImageFindUniqueArgs>(args: SelectSubset<T, FacilityImageFindUniqueArgs<ExtArgs>>): Prisma__FacilityImageClient<$Result.GetResult<Prisma.$FacilityImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacilityImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacilityImageFindUniqueOrThrowArgs} args - Arguments to find a FacilityImage
     * @example
     * // Get one FacilityImage
     * const facilityImage = await prisma.facilityImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilityImageFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilityImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilityImageClient<$Result.GetResult<Prisma.$FacilityImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilityImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityImageFindFirstArgs} args - Arguments to find a FacilityImage
     * @example
     * // Get one FacilityImage
     * const facilityImage = await prisma.facilityImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilityImageFindFirstArgs>(args?: SelectSubset<T, FacilityImageFindFirstArgs<ExtArgs>>): Prisma__FacilityImageClient<$Result.GetResult<Prisma.$FacilityImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilityImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityImageFindFirstOrThrowArgs} args - Arguments to find a FacilityImage
     * @example
     * // Get one FacilityImage
     * const facilityImage = await prisma.facilityImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilityImageFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilityImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilityImageClient<$Result.GetResult<Prisma.$FacilityImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacilityImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacilityImages
     * const facilityImages = await prisma.facilityImage.findMany()
     * 
     * // Get first 10 FacilityImages
     * const facilityImages = await prisma.facilityImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityImageWithIdOnly = await prisma.facilityImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilityImageFindManyArgs>(args?: SelectSubset<T, FacilityImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacilityImage.
     * @param {FacilityImageCreateArgs} args - Arguments to create a FacilityImage.
     * @example
     * // Create one FacilityImage
     * const FacilityImage = await prisma.facilityImage.create({
     *   data: {
     *     // ... data to create a FacilityImage
     *   }
     * })
     * 
     */
    create<T extends FacilityImageCreateArgs>(args: SelectSubset<T, FacilityImageCreateArgs<ExtArgs>>): Prisma__FacilityImageClient<$Result.GetResult<Prisma.$FacilityImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacilityImages.
     * @param {FacilityImageCreateManyArgs} args - Arguments to create many FacilityImages.
     * @example
     * // Create many FacilityImages
     * const facilityImage = await prisma.facilityImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilityImageCreateManyArgs>(args?: SelectSubset<T, FacilityImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacilityImages and returns the data saved in the database.
     * @param {FacilityImageCreateManyAndReturnArgs} args - Arguments to create many FacilityImages.
     * @example
     * // Create many FacilityImages
     * const facilityImage = await prisma.facilityImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacilityImages and only return the `id`
     * const facilityImageWithIdOnly = await prisma.facilityImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacilityImageCreateManyAndReturnArgs>(args?: SelectSubset<T, FacilityImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacilityImage.
     * @param {FacilityImageDeleteArgs} args - Arguments to delete one FacilityImage.
     * @example
     * // Delete one FacilityImage
     * const FacilityImage = await prisma.facilityImage.delete({
     *   where: {
     *     // ... filter to delete one FacilityImage
     *   }
     * })
     * 
     */
    delete<T extends FacilityImageDeleteArgs>(args: SelectSubset<T, FacilityImageDeleteArgs<ExtArgs>>): Prisma__FacilityImageClient<$Result.GetResult<Prisma.$FacilityImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacilityImage.
     * @param {FacilityImageUpdateArgs} args - Arguments to update one FacilityImage.
     * @example
     * // Update one FacilityImage
     * const facilityImage = await prisma.facilityImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilityImageUpdateArgs>(args: SelectSubset<T, FacilityImageUpdateArgs<ExtArgs>>): Prisma__FacilityImageClient<$Result.GetResult<Prisma.$FacilityImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacilityImages.
     * @param {FacilityImageDeleteManyArgs} args - Arguments to filter FacilityImages to delete.
     * @example
     * // Delete a few FacilityImages
     * const { count } = await prisma.facilityImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilityImageDeleteManyArgs>(args?: SelectSubset<T, FacilityImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilityImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacilityImages
     * const facilityImage = await prisma.facilityImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilityImageUpdateManyArgs>(args: SelectSubset<T, FacilityImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilityImages and returns the data updated in the database.
     * @param {FacilityImageUpdateManyAndReturnArgs} args - Arguments to update many FacilityImages.
     * @example
     * // Update many FacilityImages
     * const facilityImage = await prisma.facilityImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacilityImages and only return the `id`
     * const facilityImageWithIdOnly = await prisma.facilityImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacilityImageUpdateManyAndReturnArgs>(args: SelectSubset<T, FacilityImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacilityImage.
     * @param {FacilityImageUpsertArgs} args - Arguments to update or create a FacilityImage.
     * @example
     * // Update or create a FacilityImage
     * const facilityImage = await prisma.facilityImage.upsert({
     *   create: {
     *     // ... data to create a FacilityImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacilityImage we want to update
     *   }
     * })
     */
    upsert<T extends FacilityImageUpsertArgs>(args: SelectSubset<T, FacilityImageUpsertArgs<ExtArgs>>): Prisma__FacilityImageClient<$Result.GetResult<Prisma.$FacilityImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacilityImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityImageCountArgs} args - Arguments to filter FacilityImages to count.
     * @example
     * // Count the number of FacilityImages
     * const count = await prisma.facilityImage.count({
     *   where: {
     *     // ... the filter for the FacilityImages we want to count
     *   }
     * })
    **/
    count<T extends FacilityImageCountArgs>(
      args?: Subset<T, FacilityImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacilityImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacilityImageAggregateArgs>(args: Subset<T, FacilityImageAggregateArgs>): Prisma.PrismaPromise<GetFacilityImageAggregateType<T>>

    /**
     * Group by FacilityImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityImageGroupByArgs} args - Group by arguments.
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
      T extends FacilityImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityImageGroupByArgs['orderBy'] }
        : { orderBy?: FacilityImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacilityImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacilityImage model
   */
  readonly fields: FacilityImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacilityImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilityImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FacilityImage model
   */
  interface FacilityImageFieldRefs {
    readonly id: FieldRef<"FacilityImage", 'String'>
    readonly facilityId: FieldRef<"FacilityImage", 'String'>
    readonly imageUrl: FieldRef<"FacilityImage", 'String'>
    readonly isPrimary: FieldRef<"FacilityImage", 'Boolean'>
    readonly sortOrder: FieldRef<"FacilityImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FacilityImage findUnique
   */
  export type FacilityImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityImage
     */
    select?: FacilityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityImage
     */
    omit?: FacilityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityImageInclude<ExtArgs> | null
    /**
     * Filter, which FacilityImage to fetch.
     */
    where: FacilityImageWhereUniqueInput
  }

  /**
   * FacilityImage findUniqueOrThrow
   */
  export type FacilityImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityImage
     */
    select?: FacilityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityImage
     */
    omit?: FacilityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityImageInclude<ExtArgs> | null
    /**
     * Filter, which FacilityImage to fetch.
     */
    where: FacilityImageWhereUniqueInput
  }

  /**
   * FacilityImage findFirst
   */
  export type FacilityImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityImage
     */
    select?: FacilityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityImage
     */
    omit?: FacilityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityImageInclude<ExtArgs> | null
    /**
     * Filter, which FacilityImage to fetch.
     */
    where?: FacilityImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityImages to fetch.
     */
    orderBy?: FacilityImageOrderByWithRelationInput | FacilityImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityImages.
     */
    cursor?: FacilityImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityImages.
     */
    distinct?: FacilityImageScalarFieldEnum | FacilityImageScalarFieldEnum[]
  }

  /**
   * FacilityImage findFirstOrThrow
   */
  export type FacilityImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityImage
     */
    select?: FacilityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityImage
     */
    omit?: FacilityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityImageInclude<ExtArgs> | null
    /**
     * Filter, which FacilityImage to fetch.
     */
    where?: FacilityImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityImages to fetch.
     */
    orderBy?: FacilityImageOrderByWithRelationInput | FacilityImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityImages.
     */
    cursor?: FacilityImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityImages.
     */
    distinct?: FacilityImageScalarFieldEnum | FacilityImageScalarFieldEnum[]
  }

  /**
   * FacilityImage findMany
   */
  export type FacilityImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityImage
     */
    select?: FacilityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityImage
     */
    omit?: FacilityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityImageInclude<ExtArgs> | null
    /**
     * Filter, which FacilityImages to fetch.
     */
    where?: FacilityImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityImages to fetch.
     */
    orderBy?: FacilityImageOrderByWithRelationInput | FacilityImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacilityImages.
     */
    cursor?: FacilityImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityImages.
     */
    distinct?: FacilityImageScalarFieldEnum | FacilityImageScalarFieldEnum[]
  }

  /**
   * FacilityImage create
   */
  export type FacilityImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityImage
     */
    select?: FacilityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityImage
     */
    omit?: FacilityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityImageInclude<ExtArgs> | null
    /**
     * The data needed to create a FacilityImage.
     */
    data: XOR<FacilityImageCreateInput, FacilityImageUncheckedCreateInput>
  }

  /**
   * FacilityImage createMany
   */
  export type FacilityImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacilityImages.
     */
    data: FacilityImageCreateManyInput | FacilityImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacilityImage createManyAndReturn
   */
  export type FacilityImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityImage
     */
    select?: FacilityImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityImage
     */
    omit?: FacilityImageOmit<ExtArgs> | null
    /**
     * The data used to create many FacilityImages.
     */
    data: FacilityImageCreateManyInput | FacilityImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacilityImage update
   */
  export type FacilityImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityImage
     */
    select?: FacilityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityImage
     */
    omit?: FacilityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityImageInclude<ExtArgs> | null
    /**
     * The data needed to update a FacilityImage.
     */
    data: XOR<FacilityImageUpdateInput, FacilityImageUncheckedUpdateInput>
    /**
     * Choose, which FacilityImage to update.
     */
    where: FacilityImageWhereUniqueInput
  }

  /**
   * FacilityImage updateMany
   */
  export type FacilityImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacilityImages.
     */
    data: XOR<FacilityImageUpdateManyMutationInput, FacilityImageUncheckedUpdateManyInput>
    /**
     * Filter which FacilityImages to update
     */
    where?: FacilityImageWhereInput
    /**
     * Limit how many FacilityImages to update.
     */
    limit?: number
  }

  /**
   * FacilityImage updateManyAndReturn
   */
  export type FacilityImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityImage
     */
    select?: FacilityImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityImage
     */
    omit?: FacilityImageOmit<ExtArgs> | null
    /**
     * The data used to update FacilityImages.
     */
    data: XOR<FacilityImageUpdateManyMutationInput, FacilityImageUncheckedUpdateManyInput>
    /**
     * Filter which FacilityImages to update
     */
    where?: FacilityImageWhereInput
    /**
     * Limit how many FacilityImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacilityImage upsert
   */
  export type FacilityImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityImage
     */
    select?: FacilityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityImage
     */
    omit?: FacilityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityImageInclude<ExtArgs> | null
    /**
     * The filter to search for the FacilityImage to update in case it exists.
     */
    where: FacilityImageWhereUniqueInput
    /**
     * In case the FacilityImage found by the `where` argument doesn't exist, create a new FacilityImage with this data.
     */
    create: XOR<FacilityImageCreateInput, FacilityImageUncheckedCreateInput>
    /**
     * In case the FacilityImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityImageUpdateInput, FacilityImageUncheckedUpdateInput>
  }

  /**
   * FacilityImage delete
   */
  export type FacilityImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityImage
     */
    select?: FacilityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityImage
     */
    omit?: FacilityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityImageInclude<ExtArgs> | null
    /**
     * Filter which FacilityImage to delete.
     */
    where: FacilityImageWhereUniqueInput
  }

  /**
   * FacilityImage deleteMany
   */
  export type FacilityImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilityImages to delete
     */
    where?: FacilityImageWhereInput
    /**
     * Limit how many FacilityImages to delete.
     */
    limit?: number
  }

  /**
   * FacilityImage without action
   */
  export type FacilityImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityImage
     */
    select?: FacilityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityImage
     */
    omit?: FacilityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityImageInclude<ExtArgs> | null
  }


  /**
   * Model UnitType
   */

  export type AggregateUnitType = {
    _count: UnitTypeCountAggregateOutputType | null
    _avg: UnitTypeAvgAggregateOutputType | null
    _sum: UnitTypeSumAggregateOutputType | null
    _min: UnitTypeMinAggregateOutputType | null
    _max: UnitTypeMaxAggregateOutputType | null
  }

  export type UnitTypeAvgAggregateOutputType = {
    totalUnits: number | null
    areaSGA: number | null
  }

  export type UnitTypeSumAggregateOutputType = {
    totalUnits: number | null
    areaSGA: number | null
  }

  export type UnitTypeMinAggregateOutputType = {
    id: string | null
    facilityId: string | null
    name: string | null
    category: string | null
    totalUnits: number | null
    areaSGA: number | null
    description: string | null
  }

  export type UnitTypeMaxAggregateOutputType = {
    id: string | null
    facilityId: string | null
    name: string | null
    category: string | null
    totalUnits: number | null
    areaSGA: number | null
    description: string | null
  }

  export type UnitTypeCountAggregateOutputType = {
    id: number
    facilityId: number
    name: number
    category: number
    totalUnits: number
    areaSGA: number
    description: number
    images: number
    _all: number
  }


  export type UnitTypeAvgAggregateInputType = {
    totalUnits?: true
    areaSGA?: true
  }

  export type UnitTypeSumAggregateInputType = {
    totalUnits?: true
    areaSGA?: true
  }

  export type UnitTypeMinAggregateInputType = {
    id?: true
    facilityId?: true
    name?: true
    category?: true
    totalUnits?: true
    areaSGA?: true
    description?: true
  }

  export type UnitTypeMaxAggregateInputType = {
    id?: true
    facilityId?: true
    name?: true
    category?: true
    totalUnits?: true
    areaSGA?: true
    description?: true
  }

  export type UnitTypeCountAggregateInputType = {
    id?: true
    facilityId?: true
    name?: true
    category?: true
    totalUnits?: true
    areaSGA?: true
    description?: true
    images?: true
    _all?: true
  }

  export type UnitTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitType to aggregate.
     */
    where?: UnitTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitTypes to fetch.
     */
    orderBy?: UnitTypeOrderByWithRelationInput | UnitTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnitTypes
    **/
    _count?: true | UnitTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitTypeMaxAggregateInputType
  }

  export type GetUnitTypeAggregateType<T extends UnitTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateUnitType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnitType[P]>
      : GetScalarType<T[P], AggregateUnitType[P]>
  }




  export type UnitTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitTypeWhereInput
    orderBy?: UnitTypeOrderByWithAggregationInput | UnitTypeOrderByWithAggregationInput[]
    by: UnitTypeScalarFieldEnum[] | UnitTypeScalarFieldEnum
    having?: UnitTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitTypeCountAggregateInputType | true
    _avg?: UnitTypeAvgAggregateInputType
    _sum?: UnitTypeSumAggregateInputType
    _min?: UnitTypeMinAggregateInputType
    _max?: UnitTypeMaxAggregateInputType
  }

  export type UnitTypeGroupByOutputType = {
    id: string
    facilityId: string
    name: string
    category: string
    totalUnits: number | null
    areaSGA: number | null
    description: string | null
    images: string[]
    _count: UnitTypeCountAggregateOutputType | null
    _avg: UnitTypeAvgAggregateOutputType | null
    _sum: UnitTypeSumAggregateOutputType | null
    _min: UnitTypeMinAggregateOutputType | null
    _max: UnitTypeMaxAggregateOutputType | null
  }

  type GetUnitTypeGroupByPayload<T extends UnitTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitTypeGroupByOutputType[P]>
            : GetScalarType<T[P], UnitTypeGroupByOutputType[P]>
        }
      >
    >


  export type UnitTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    name?: boolean
    category?: boolean
    totalUnits?: boolean
    areaSGA?: boolean
    description?: boolean
    images?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitType"]>

  export type UnitTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    name?: boolean
    category?: boolean
    totalUnits?: boolean
    areaSGA?: boolean
    description?: boolean
    images?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitType"]>

  export type UnitTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    name?: boolean
    category?: boolean
    totalUnits?: boolean
    areaSGA?: boolean
    description?: boolean
    images?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitType"]>

  export type UnitTypeSelectScalar = {
    id?: boolean
    facilityId?: boolean
    name?: boolean
    category?: boolean
    totalUnits?: boolean
    areaSGA?: boolean
    description?: boolean
    images?: boolean
  }

  export type UnitTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facilityId" | "name" | "category" | "totalUnits" | "areaSGA" | "description" | "images", ExtArgs["result"]["unitType"]>
  export type UnitTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type UnitTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type UnitTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }

  export type $UnitTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnitType"
    objects: {
      facility: Prisma.$FacilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      facilityId: string
      name: string
      category: string
      totalUnits: number | null
      areaSGA: number | null
      description: string | null
      images: string[]
    }, ExtArgs["result"]["unitType"]>
    composites: {}
  }

  type UnitTypeGetPayload<S extends boolean | null | undefined | UnitTypeDefaultArgs> = $Result.GetResult<Prisma.$UnitTypePayload, S>

  type UnitTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitTypeCountAggregateInputType | true
    }

  export interface UnitTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnitType'], meta: { name: 'UnitType' } }
    /**
     * Find zero or one UnitType that matches the filter.
     * @param {UnitTypeFindUniqueArgs} args - Arguments to find a UnitType
     * @example
     * // Get one UnitType
     * const unitType = await prisma.unitType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitTypeFindUniqueArgs>(args: SelectSubset<T, UnitTypeFindUniqueArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnitType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitTypeFindUniqueOrThrowArgs} args - Arguments to find a UnitType
     * @example
     * // Get one UnitType
     * const unitType = await prisma.unitType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeFindFirstArgs} args - Arguments to find a UnitType
     * @example
     * // Get one UnitType
     * const unitType = await prisma.unitType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitTypeFindFirstArgs>(args?: SelectSubset<T, UnitTypeFindFirstArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeFindFirstOrThrowArgs} args - Arguments to find a UnitType
     * @example
     * // Get one UnitType
     * const unitType = await prisma.unitType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnitTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnitTypes
     * const unitTypes = await prisma.unitType.findMany()
     * 
     * // Get first 10 UnitTypes
     * const unitTypes = await prisma.unitType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitTypeWithIdOnly = await prisma.unitType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitTypeFindManyArgs>(args?: SelectSubset<T, UnitTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnitType.
     * @param {UnitTypeCreateArgs} args - Arguments to create a UnitType.
     * @example
     * // Create one UnitType
     * const UnitType = await prisma.unitType.create({
     *   data: {
     *     // ... data to create a UnitType
     *   }
     * })
     * 
     */
    create<T extends UnitTypeCreateArgs>(args: SelectSubset<T, UnitTypeCreateArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnitTypes.
     * @param {UnitTypeCreateManyArgs} args - Arguments to create many UnitTypes.
     * @example
     * // Create many UnitTypes
     * const unitType = await prisma.unitType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitTypeCreateManyArgs>(args?: SelectSubset<T, UnitTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnitTypes and returns the data saved in the database.
     * @param {UnitTypeCreateManyAndReturnArgs} args - Arguments to create many UnitTypes.
     * @example
     * // Create many UnitTypes
     * const unitType = await prisma.unitType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnitTypes and only return the `id`
     * const unitTypeWithIdOnly = await prisma.unitType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnitType.
     * @param {UnitTypeDeleteArgs} args - Arguments to delete one UnitType.
     * @example
     * // Delete one UnitType
     * const UnitType = await prisma.unitType.delete({
     *   where: {
     *     // ... filter to delete one UnitType
     *   }
     * })
     * 
     */
    delete<T extends UnitTypeDeleteArgs>(args: SelectSubset<T, UnitTypeDeleteArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnitType.
     * @param {UnitTypeUpdateArgs} args - Arguments to update one UnitType.
     * @example
     * // Update one UnitType
     * const unitType = await prisma.unitType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitTypeUpdateArgs>(args: SelectSubset<T, UnitTypeUpdateArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnitTypes.
     * @param {UnitTypeDeleteManyArgs} args - Arguments to filter UnitTypes to delete.
     * @example
     * // Delete a few UnitTypes
     * const { count } = await prisma.unitType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitTypeDeleteManyArgs>(args?: SelectSubset<T, UnitTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnitTypes
     * const unitType = await prisma.unitType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitTypeUpdateManyArgs>(args: SelectSubset<T, UnitTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitTypes and returns the data updated in the database.
     * @param {UnitTypeUpdateManyAndReturnArgs} args - Arguments to update many UnitTypes.
     * @example
     * // Update many UnitTypes
     * const unitType = await prisma.unitType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnitTypes and only return the `id`
     * const unitTypeWithIdOnly = await prisma.unitType.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnitTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnitType.
     * @param {UnitTypeUpsertArgs} args - Arguments to update or create a UnitType.
     * @example
     * // Update or create a UnitType
     * const unitType = await prisma.unitType.upsert({
     *   create: {
     *     // ... data to create a UnitType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnitType we want to update
     *   }
     * })
     */
    upsert<T extends UnitTypeUpsertArgs>(args: SelectSubset<T, UnitTypeUpsertArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnitTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeCountArgs} args - Arguments to filter UnitTypes to count.
     * @example
     * // Count the number of UnitTypes
     * const count = await prisma.unitType.count({
     *   where: {
     *     // ... the filter for the UnitTypes we want to count
     *   }
     * })
    **/
    count<T extends UnitTypeCountArgs>(
      args?: Subset<T, UnitTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnitType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitTypeAggregateArgs>(args: Subset<T, UnitTypeAggregateArgs>): Prisma.PrismaPromise<GetUnitTypeAggregateType<T>>

    /**
     * Group by UnitType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeGroupByArgs} args - Group by arguments.
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
      T extends UnitTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitTypeGroupByArgs['orderBy'] }
        : { orderBy?: UnitTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnitType model
   */
  readonly fields: UnitTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnitType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UnitType model
   */
  interface UnitTypeFieldRefs {
    readonly id: FieldRef<"UnitType", 'String'>
    readonly facilityId: FieldRef<"UnitType", 'String'>
    readonly name: FieldRef<"UnitType", 'String'>
    readonly category: FieldRef<"UnitType", 'String'>
    readonly totalUnits: FieldRef<"UnitType", 'Int'>
    readonly areaSGA: FieldRef<"UnitType", 'Float'>
    readonly description: FieldRef<"UnitType", 'String'>
    readonly images: FieldRef<"UnitType", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * UnitType findUnique
   */
  export type UnitTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitTypeInclude<ExtArgs> | null
    /**
     * Filter, which UnitType to fetch.
     */
    where: UnitTypeWhereUniqueInput
  }

  /**
   * UnitType findUniqueOrThrow
   */
  export type UnitTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitTypeInclude<ExtArgs> | null
    /**
     * Filter, which UnitType to fetch.
     */
    where: UnitTypeWhereUniqueInput
  }

  /**
   * UnitType findFirst
   */
  export type UnitTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitTypeInclude<ExtArgs> | null
    /**
     * Filter, which UnitType to fetch.
     */
    where?: UnitTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitTypes to fetch.
     */
    orderBy?: UnitTypeOrderByWithRelationInput | UnitTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitTypes.
     */
    cursor?: UnitTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitTypes.
     */
    distinct?: UnitTypeScalarFieldEnum | UnitTypeScalarFieldEnum[]
  }

  /**
   * UnitType findFirstOrThrow
   */
  export type UnitTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitTypeInclude<ExtArgs> | null
    /**
     * Filter, which UnitType to fetch.
     */
    where?: UnitTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitTypes to fetch.
     */
    orderBy?: UnitTypeOrderByWithRelationInput | UnitTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitTypes.
     */
    cursor?: UnitTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitTypes.
     */
    distinct?: UnitTypeScalarFieldEnum | UnitTypeScalarFieldEnum[]
  }

  /**
   * UnitType findMany
   */
  export type UnitTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitTypeInclude<ExtArgs> | null
    /**
     * Filter, which UnitTypes to fetch.
     */
    where?: UnitTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitTypes to fetch.
     */
    orderBy?: UnitTypeOrderByWithRelationInput | UnitTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnitTypes.
     */
    cursor?: UnitTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitTypes.
     */
    distinct?: UnitTypeScalarFieldEnum | UnitTypeScalarFieldEnum[]
  }

  /**
   * UnitType create
   */
  export type UnitTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a UnitType.
     */
    data: XOR<UnitTypeCreateInput, UnitTypeUncheckedCreateInput>
  }

  /**
   * UnitType createMany
   */
  export type UnitTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnitTypes.
     */
    data: UnitTypeCreateManyInput | UnitTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnitType createManyAndReturn
   */
  export type UnitTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * The data used to create many UnitTypes.
     */
    data: UnitTypeCreateManyInput | UnitTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnitType update
   */
  export type UnitTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a UnitType.
     */
    data: XOR<UnitTypeUpdateInput, UnitTypeUncheckedUpdateInput>
    /**
     * Choose, which UnitType to update.
     */
    where: UnitTypeWhereUniqueInput
  }

  /**
   * UnitType updateMany
   */
  export type UnitTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnitTypes.
     */
    data: XOR<UnitTypeUpdateManyMutationInput, UnitTypeUncheckedUpdateManyInput>
    /**
     * Filter which UnitTypes to update
     */
    where?: UnitTypeWhereInput
    /**
     * Limit how many UnitTypes to update.
     */
    limit?: number
  }

  /**
   * UnitType updateManyAndReturn
   */
  export type UnitTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * The data used to update UnitTypes.
     */
    data: XOR<UnitTypeUpdateManyMutationInput, UnitTypeUncheckedUpdateManyInput>
    /**
     * Filter which UnitTypes to update
     */
    where?: UnitTypeWhereInput
    /**
     * Limit how many UnitTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnitType upsert
   */
  export type UnitTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the UnitType to update in case it exists.
     */
    where: UnitTypeWhereUniqueInput
    /**
     * In case the UnitType found by the `where` argument doesn't exist, create a new UnitType with this data.
     */
    create: XOR<UnitTypeCreateInput, UnitTypeUncheckedCreateInput>
    /**
     * In case the UnitType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitTypeUpdateInput, UnitTypeUncheckedUpdateInput>
  }

  /**
   * UnitType delete
   */
  export type UnitTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitTypeInclude<ExtArgs> | null
    /**
     * Filter which UnitType to delete.
     */
    where: UnitTypeWhereUniqueInput
  }

  /**
   * UnitType deleteMany
   */
  export type UnitTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitTypes to delete
     */
    where?: UnitTypeWhereInput
    /**
     * Limit how many UnitTypes to delete.
     */
    limit?: number
  }

  /**
   * UnitType without action
   */
  export type UnitTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitTypeInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TowerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type TowerScalarFieldEnum = (typeof TowerScalarFieldEnum)[keyof typeof TowerScalarFieldEnum]


  export const ZoneScalarFieldEnum: {
    id: 'id',
    towerId: 'towerId',
    categoryName: 'categoryName',
    floorsRange: 'floorsRange',
    points: 'points',
    imageUrl: 'imageUrl'
  };

  export type ZoneScalarFieldEnum = (typeof ZoneScalarFieldEnum)[keyof typeof ZoneScalarFieldEnum]


  export const ZoneImageScalarFieldEnum: {
    id: 'id',
    zoneId: 'zoneId',
    imageUrl: 'imageUrl',
    sortOrder: 'sortOrder'
  };

  export type ZoneImageScalarFieldEnum = (typeof ZoneImageScalarFieldEnum)[keyof typeof ZoneImageScalarFieldEnum]


  export const FacilityScalarFieldEnum: {
    id: 'id',
    zoneId: 'zoneId',
    title: 'title',
    category: 'category',
    description: 'description'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const FacilityImageScalarFieldEnum: {
    id: 'id',
    facilityId: 'facilityId',
    imageUrl: 'imageUrl',
    isPrimary: 'isPrimary',
    sortOrder: 'sortOrder'
  };

  export type FacilityImageScalarFieldEnum = (typeof FacilityImageScalarFieldEnum)[keyof typeof FacilityImageScalarFieldEnum]


  export const UnitTypeScalarFieldEnum: {
    id: 'id',
    facilityId: 'facilityId',
    name: 'name',
    category: 'category',
    totalUnits: 'totalUnits',
    areaSGA: 'areaSGA',
    description: 'description',
    images: 'images'
  };

  export type UnitTypeScalarFieldEnum = (typeof UnitTypeScalarFieldEnum)[keyof typeof UnitTypeScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TowerWhereInput = {
    AND?: TowerWhereInput | TowerWhereInput[]
    OR?: TowerWhereInput[]
    NOT?: TowerWhereInput | TowerWhereInput[]
    id?: StringFilter<"Tower"> | string
    name?: StringFilter<"Tower"> | string
    slug?: StringFilter<"Tower"> | string
    zones?: ZoneListRelationFilter
  }

  export type TowerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    zones?: ZoneOrderByRelationAggregateInput
  }

  export type TowerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TowerWhereInput | TowerWhereInput[]
    OR?: TowerWhereInput[]
    NOT?: TowerWhereInput | TowerWhereInput[]
    name?: StringFilter<"Tower"> | string
    zones?: ZoneListRelationFilter
  }, "id" | "slug">

  export type TowerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: TowerCountOrderByAggregateInput
    _max?: TowerMaxOrderByAggregateInput
    _min?: TowerMinOrderByAggregateInput
  }

  export type TowerScalarWhereWithAggregatesInput = {
    AND?: TowerScalarWhereWithAggregatesInput | TowerScalarWhereWithAggregatesInput[]
    OR?: TowerScalarWhereWithAggregatesInput[]
    NOT?: TowerScalarWhereWithAggregatesInput | TowerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tower"> | string
    name?: StringWithAggregatesFilter<"Tower"> | string
    slug?: StringWithAggregatesFilter<"Tower"> | string
  }

  export type ZoneWhereInput = {
    AND?: ZoneWhereInput | ZoneWhereInput[]
    OR?: ZoneWhereInput[]
    NOT?: ZoneWhereInput | ZoneWhereInput[]
    id?: StringFilter<"Zone"> | string
    towerId?: StringFilter<"Zone"> | string
    categoryName?: StringFilter<"Zone"> | string
    floorsRange?: StringFilter<"Zone"> | string
    points?: StringNullableFilter<"Zone"> | string | null
    imageUrl?: StringNullableFilter<"Zone"> | string | null
    tower?: XOR<TowerScalarRelationFilter, TowerWhereInput>
    facilities?: FacilityListRelationFilter
    images?: ZoneImageListRelationFilter
  }

  export type ZoneOrderByWithRelationInput = {
    id?: SortOrder
    towerId?: SortOrder
    categoryName?: SortOrder
    floorsRange?: SortOrder
    points?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    tower?: TowerOrderByWithRelationInput
    facilities?: FacilityOrderByRelationAggregateInput
    images?: ZoneImageOrderByRelationAggregateInput
  }

  export type ZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZoneWhereInput | ZoneWhereInput[]
    OR?: ZoneWhereInput[]
    NOT?: ZoneWhereInput | ZoneWhereInput[]
    towerId?: StringFilter<"Zone"> | string
    categoryName?: StringFilter<"Zone"> | string
    floorsRange?: StringFilter<"Zone"> | string
    points?: StringNullableFilter<"Zone"> | string | null
    imageUrl?: StringNullableFilter<"Zone"> | string | null
    tower?: XOR<TowerScalarRelationFilter, TowerWhereInput>
    facilities?: FacilityListRelationFilter
    images?: ZoneImageListRelationFilter
  }, "id">

  export type ZoneOrderByWithAggregationInput = {
    id?: SortOrder
    towerId?: SortOrder
    categoryName?: SortOrder
    floorsRange?: SortOrder
    points?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: ZoneCountOrderByAggregateInput
    _max?: ZoneMaxOrderByAggregateInput
    _min?: ZoneMinOrderByAggregateInput
  }

  export type ZoneScalarWhereWithAggregatesInput = {
    AND?: ZoneScalarWhereWithAggregatesInput | ZoneScalarWhereWithAggregatesInput[]
    OR?: ZoneScalarWhereWithAggregatesInput[]
    NOT?: ZoneScalarWhereWithAggregatesInput | ZoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Zone"> | string
    towerId?: StringWithAggregatesFilter<"Zone"> | string
    categoryName?: StringWithAggregatesFilter<"Zone"> | string
    floorsRange?: StringWithAggregatesFilter<"Zone"> | string
    points?: StringNullableWithAggregatesFilter<"Zone"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Zone"> | string | null
  }

  export type ZoneImageWhereInput = {
    AND?: ZoneImageWhereInput | ZoneImageWhereInput[]
    OR?: ZoneImageWhereInput[]
    NOT?: ZoneImageWhereInput | ZoneImageWhereInput[]
    id?: StringFilter<"ZoneImage"> | string
    zoneId?: StringFilter<"ZoneImage"> | string
    imageUrl?: StringFilter<"ZoneImage"> | string
    sortOrder?: IntFilter<"ZoneImage"> | number
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
  }

  export type ZoneImageOrderByWithRelationInput = {
    id?: SortOrder
    zoneId?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
    zone?: ZoneOrderByWithRelationInput
  }

  export type ZoneImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZoneImageWhereInput | ZoneImageWhereInput[]
    OR?: ZoneImageWhereInput[]
    NOT?: ZoneImageWhereInput | ZoneImageWhereInput[]
    zoneId?: StringFilter<"ZoneImage"> | string
    imageUrl?: StringFilter<"ZoneImage"> | string
    sortOrder?: IntFilter<"ZoneImage"> | number
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
  }, "id">

  export type ZoneImageOrderByWithAggregationInput = {
    id?: SortOrder
    zoneId?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
    _count?: ZoneImageCountOrderByAggregateInput
    _avg?: ZoneImageAvgOrderByAggregateInput
    _max?: ZoneImageMaxOrderByAggregateInput
    _min?: ZoneImageMinOrderByAggregateInput
    _sum?: ZoneImageSumOrderByAggregateInput
  }

  export type ZoneImageScalarWhereWithAggregatesInput = {
    AND?: ZoneImageScalarWhereWithAggregatesInput | ZoneImageScalarWhereWithAggregatesInput[]
    OR?: ZoneImageScalarWhereWithAggregatesInput[]
    NOT?: ZoneImageScalarWhereWithAggregatesInput | ZoneImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ZoneImage"> | string
    zoneId?: StringWithAggregatesFilter<"ZoneImage"> | string
    imageUrl?: StringWithAggregatesFilter<"ZoneImage"> | string
    sortOrder?: IntWithAggregatesFilter<"ZoneImage"> | number
  }

  export type FacilityWhereInput = {
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    id?: StringFilter<"Facility"> | string
    zoneId?: StringFilter<"Facility"> | string
    title?: StringFilter<"Facility"> | string
    category?: StringFilter<"Facility"> | string
    description?: StringNullableFilter<"Facility"> | string | null
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
    images?: FacilityImageListRelationFilter
    unitTypes?: UnitTypeListRelationFilter
  }

  export type FacilityOrderByWithRelationInput = {
    id?: SortOrder
    zoneId?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    zone?: ZoneOrderByWithRelationInput
    images?: FacilityImageOrderByRelationAggregateInput
    unitTypes?: UnitTypeOrderByRelationAggregateInput
  }

  export type FacilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    zoneId?: StringFilter<"Facility"> | string
    title?: StringFilter<"Facility"> | string
    category?: StringFilter<"Facility"> | string
    description?: StringNullableFilter<"Facility"> | string | null
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
    images?: FacilityImageListRelationFilter
    unitTypes?: UnitTypeListRelationFilter
  }, "id">

  export type FacilityOrderByWithAggregationInput = {
    id?: SortOrder
    zoneId?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: FacilityCountOrderByAggregateInput
    _max?: FacilityMaxOrderByAggregateInput
    _min?: FacilityMinOrderByAggregateInput
  }

  export type FacilityScalarWhereWithAggregatesInput = {
    AND?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    OR?: FacilityScalarWhereWithAggregatesInput[]
    NOT?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Facility"> | string
    zoneId?: StringWithAggregatesFilter<"Facility"> | string
    title?: StringWithAggregatesFilter<"Facility"> | string
    category?: StringWithAggregatesFilter<"Facility"> | string
    description?: StringNullableWithAggregatesFilter<"Facility"> | string | null
  }

  export type FacilityImageWhereInput = {
    AND?: FacilityImageWhereInput | FacilityImageWhereInput[]
    OR?: FacilityImageWhereInput[]
    NOT?: FacilityImageWhereInput | FacilityImageWhereInput[]
    id?: StringFilter<"FacilityImage"> | string
    facilityId?: StringFilter<"FacilityImage"> | string
    imageUrl?: StringFilter<"FacilityImage"> | string
    isPrimary?: BoolFilter<"FacilityImage"> | boolean
    sortOrder?: IntFilter<"FacilityImage"> | number
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }

  export type FacilityImageOrderByWithRelationInput = {
    id?: SortOrder
    facilityId?: SortOrder
    imageUrl?: SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
    facility?: FacilityOrderByWithRelationInput
  }

  export type FacilityImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacilityImageWhereInput | FacilityImageWhereInput[]
    OR?: FacilityImageWhereInput[]
    NOT?: FacilityImageWhereInput | FacilityImageWhereInput[]
    facilityId?: StringFilter<"FacilityImage"> | string
    imageUrl?: StringFilter<"FacilityImage"> | string
    isPrimary?: BoolFilter<"FacilityImage"> | boolean
    sortOrder?: IntFilter<"FacilityImage"> | number
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }, "id">

  export type FacilityImageOrderByWithAggregationInput = {
    id?: SortOrder
    facilityId?: SortOrder
    imageUrl?: SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
    _count?: FacilityImageCountOrderByAggregateInput
    _avg?: FacilityImageAvgOrderByAggregateInput
    _max?: FacilityImageMaxOrderByAggregateInput
    _min?: FacilityImageMinOrderByAggregateInput
    _sum?: FacilityImageSumOrderByAggregateInput
  }

  export type FacilityImageScalarWhereWithAggregatesInput = {
    AND?: FacilityImageScalarWhereWithAggregatesInput | FacilityImageScalarWhereWithAggregatesInput[]
    OR?: FacilityImageScalarWhereWithAggregatesInput[]
    NOT?: FacilityImageScalarWhereWithAggregatesInput | FacilityImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacilityImage"> | string
    facilityId?: StringWithAggregatesFilter<"FacilityImage"> | string
    imageUrl?: StringWithAggregatesFilter<"FacilityImage"> | string
    isPrimary?: BoolWithAggregatesFilter<"FacilityImage"> | boolean
    sortOrder?: IntWithAggregatesFilter<"FacilityImage"> | number
  }

  export type UnitTypeWhereInput = {
    AND?: UnitTypeWhereInput | UnitTypeWhereInput[]
    OR?: UnitTypeWhereInput[]
    NOT?: UnitTypeWhereInput | UnitTypeWhereInput[]
    id?: StringFilter<"UnitType"> | string
    facilityId?: StringFilter<"UnitType"> | string
    name?: StringFilter<"UnitType"> | string
    category?: StringFilter<"UnitType"> | string
    totalUnits?: IntNullableFilter<"UnitType"> | number | null
    areaSGA?: FloatNullableFilter<"UnitType"> | number | null
    description?: StringNullableFilter<"UnitType"> | string | null
    images?: StringNullableListFilter<"UnitType">
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }

  export type UnitTypeOrderByWithRelationInput = {
    id?: SortOrder
    facilityId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    totalUnits?: SortOrderInput | SortOrder
    areaSGA?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    images?: SortOrder
    facility?: FacilityOrderByWithRelationInput
  }

  export type UnitTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitTypeWhereInput | UnitTypeWhereInput[]
    OR?: UnitTypeWhereInput[]
    NOT?: UnitTypeWhereInput | UnitTypeWhereInput[]
    facilityId?: StringFilter<"UnitType"> | string
    name?: StringFilter<"UnitType"> | string
    category?: StringFilter<"UnitType"> | string
    totalUnits?: IntNullableFilter<"UnitType"> | number | null
    areaSGA?: FloatNullableFilter<"UnitType"> | number | null
    description?: StringNullableFilter<"UnitType"> | string | null
    images?: StringNullableListFilter<"UnitType">
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }, "id">

  export type UnitTypeOrderByWithAggregationInput = {
    id?: SortOrder
    facilityId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    totalUnits?: SortOrderInput | SortOrder
    areaSGA?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    images?: SortOrder
    _count?: UnitTypeCountOrderByAggregateInput
    _avg?: UnitTypeAvgOrderByAggregateInput
    _max?: UnitTypeMaxOrderByAggregateInput
    _min?: UnitTypeMinOrderByAggregateInput
    _sum?: UnitTypeSumOrderByAggregateInput
  }

  export type UnitTypeScalarWhereWithAggregatesInput = {
    AND?: UnitTypeScalarWhereWithAggregatesInput | UnitTypeScalarWhereWithAggregatesInput[]
    OR?: UnitTypeScalarWhereWithAggregatesInput[]
    NOT?: UnitTypeScalarWhereWithAggregatesInput | UnitTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UnitType"> | string
    facilityId?: StringWithAggregatesFilter<"UnitType"> | string
    name?: StringWithAggregatesFilter<"UnitType"> | string
    category?: StringWithAggregatesFilter<"UnitType"> | string
    totalUnits?: IntNullableWithAggregatesFilter<"UnitType"> | number | null
    areaSGA?: FloatNullableWithAggregatesFilter<"UnitType"> | number | null
    description?: StringNullableWithAggregatesFilter<"UnitType"> | string | null
    images?: StringNullableListFilter<"UnitType">
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TowerCreateInput = {
    id?: string
    name: string
    slug: string
    zones?: ZoneCreateNestedManyWithoutTowerInput
  }

  export type TowerUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    zones?: ZoneUncheckedCreateNestedManyWithoutTowerInput
  }

  export type TowerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    zones?: ZoneUpdateManyWithoutTowerNestedInput
  }

  export type TowerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    zones?: ZoneUncheckedUpdateManyWithoutTowerNestedInput
  }

  export type TowerCreateManyInput = {
    id?: string
    name: string
    slug: string
  }

  export type TowerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TowerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ZoneCreateInput = {
    id?: string
    categoryName: string
    floorsRange: string
    points?: string | null
    imageUrl?: string | null
    tower: TowerCreateNestedOneWithoutZonesInput
    facilities?: FacilityCreateNestedManyWithoutZoneInput
    images?: ZoneImageCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateInput = {
    id?: string
    towerId: string
    categoryName: string
    floorsRange: string
    points?: string | null
    imageUrl?: string | null
    facilities?: FacilityUncheckedCreateNestedManyWithoutZoneInput
    images?: ZoneImageUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    floorsRange?: StringFieldUpdateOperationsInput | string
    points?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tower?: TowerUpdateOneRequiredWithoutZonesNestedInput
    facilities?: FacilityUpdateManyWithoutZoneNestedInput
    images?: ZoneImageUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    towerId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    floorsRange?: StringFieldUpdateOperationsInput | string
    points?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: FacilityUncheckedUpdateManyWithoutZoneNestedInput
    images?: ZoneImageUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type ZoneCreateManyInput = {
    id?: string
    towerId: string
    categoryName: string
    floorsRange: string
    points?: string | null
    imageUrl?: string | null
  }

  export type ZoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    floorsRange?: StringFieldUpdateOperationsInput | string
    points?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ZoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    towerId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    floorsRange?: StringFieldUpdateOperationsInput | string
    points?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ZoneImageCreateInput = {
    id?: string
    imageUrl: string
    sortOrder?: number
    zone: ZoneCreateNestedOneWithoutImagesInput
  }

  export type ZoneImageUncheckedCreateInput = {
    id?: string
    zoneId: string
    imageUrl: string
    sortOrder?: number
  }

  export type ZoneImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    zone?: ZoneUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ZoneImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ZoneImageCreateManyInput = {
    id?: string
    zoneId: string
    imageUrl: string
    sortOrder?: number
  }

  export type ZoneImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ZoneImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type FacilityCreateInput = {
    id?: string
    title: string
    category: string
    description?: string | null
    zone: ZoneCreateNestedOneWithoutFacilitiesInput
    images?: FacilityImageCreateNestedManyWithoutFacilityInput
    unitTypes?: UnitTypeCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateInput = {
    id?: string
    zoneId: string
    title: string
    category: string
    description?: string | null
    images?: FacilityImageUncheckedCreateNestedManyWithoutFacilityInput
    unitTypes?: UnitTypeUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: ZoneUpdateOneRequiredWithoutFacilitiesNestedInput
    images?: FacilityImageUpdateManyWithoutFacilityNestedInput
    unitTypes?: UnitTypeUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: FacilityImageUncheckedUpdateManyWithoutFacilityNestedInput
    unitTypes?: UnitTypeUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityCreateManyInput = {
    id?: string
    zoneId: string
    title: string
    category: string
    description?: string | null
  }

  export type FacilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacilityImageCreateInput = {
    id?: string
    imageUrl: string
    isPrimary?: boolean
    sortOrder?: number
    facility: FacilityCreateNestedOneWithoutImagesInput
  }

  export type FacilityImageUncheckedCreateInput = {
    id?: string
    facilityId: string
    imageUrl: string
    isPrimary?: boolean
    sortOrder?: number
  }

  export type FacilityImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    facility?: FacilityUpdateOneRequiredWithoutImagesNestedInput
  }

  export type FacilityImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type FacilityImageCreateManyInput = {
    id?: string
    facilityId: string
    imageUrl: string
    isPrimary?: boolean
    sortOrder?: number
  }

  export type FacilityImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type FacilityImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type UnitTypeCreateInput = {
    id?: string
    name: string
    category: string
    totalUnits?: number | null
    areaSGA?: number | null
    description?: string | null
    images?: UnitTypeCreateimagesInput | string[]
    facility: FacilityCreateNestedOneWithoutUnitTypesInput
  }

  export type UnitTypeUncheckedCreateInput = {
    id?: string
    facilityId: string
    name: string
    category: string
    totalUnits?: number | null
    areaSGA?: number | null
    description?: string | null
    images?: UnitTypeCreateimagesInput | string[]
  }

  export type UnitTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    areaSGA?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UnitTypeUpdateimagesInput | string[]
    facility?: FacilityUpdateOneRequiredWithoutUnitTypesNestedInput
  }

  export type UnitTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    areaSGA?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UnitTypeUpdateimagesInput | string[]
  }

  export type UnitTypeCreateManyInput = {
    id?: string
    facilityId: string
    name: string
    category: string
    totalUnits?: number | null
    areaSGA?: number | null
    description?: string | null
    images?: UnitTypeCreateimagesInput | string[]
  }

  export type UnitTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    areaSGA?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UnitTypeUpdateimagesInput | string[]
  }

  export type UnitTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    areaSGA?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UnitTypeUpdateimagesInput | string[]
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type ZoneListRelationFilter = {
    every?: ZoneWhereInput
    some?: ZoneWhereInput
    none?: ZoneWhereInput
  }

  export type ZoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TowerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type TowerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type TowerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
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

  export type TowerScalarRelationFilter = {
    is?: TowerWhereInput
    isNot?: TowerWhereInput
  }

  export type FacilityListRelationFilter = {
    every?: FacilityWhereInput
    some?: FacilityWhereInput
    none?: FacilityWhereInput
  }

  export type ZoneImageListRelationFilter = {
    every?: ZoneImageWhereInput
    some?: ZoneImageWhereInput
    none?: ZoneImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FacilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZoneImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZoneCountOrderByAggregateInput = {
    id?: SortOrder
    towerId?: SortOrder
    categoryName?: SortOrder
    floorsRange?: SortOrder
    points?: SortOrder
    imageUrl?: SortOrder
  }

  export type ZoneMaxOrderByAggregateInput = {
    id?: SortOrder
    towerId?: SortOrder
    categoryName?: SortOrder
    floorsRange?: SortOrder
    points?: SortOrder
    imageUrl?: SortOrder
  }

  export type ZoneMinOrderByAggregateInput = {
    id?: SortOrder
    towerId?: SortOrder
    categoryName?: SortOrder
    floorsRange?: SortOrder
    points?: SortOrder
    imageUrl?: SortOrder
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

  export type ZoneScalarRelationFilter = {
    is?: ZoneWhereInput
    isNot?: ZoneWhereInput
  }

  export type ZoneImageCountOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
  }

  export type ZoneImageAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ZoneImageMaxOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
  }

  export type ZoneImageMinOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
  }

  export type ZoneImageSumOrderByAggregateInput = {
    sortOrder?: SortOrder
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

  export type FacilityImageListRelationFilter = {
    every?: FacilityImageWhereInput
    some?: FacilityImageWhereInput
    none?: FacilityImageWhereInput
  }

  export type UnitTypeListRelationFilter = {
    every?: UnitTypeWhereInput
    some?: UnitTypeWhereInput
    none?: UnitTypeWhereInput
  }

  export type FacilityImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilityCountOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type FacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type FacilityMinOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FacilityScalarRelationFilter = {
    is?: FacilityWhereInput
    isNot?: FacilityWhereInput
  }

  export type FacilityImageCountOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    imageUrl?: SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
  }

  export type FacilityImageAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type FacilityImageMaxOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    imageUrl?: SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
  }

  export type FacilityImageMinOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    imageUrl?: SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
  }

  export type FacilityImageSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UnitTypeCountOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    totalUnits?: SortOrder
    areaSGA?: SortOrder
    description?: SortOrder
    images?: SortOrder
  }

  export type UnitTypeAvgOrderByAggregateInput = {
    totalUnits?: SortOrder
    areaSGA?: SortOrder
  }

  export type UnitTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    totalUnits?: SortOrder
    areaSGA?: SortOrder
    description?: SortOrder
  }

  export type UnitTypeMinOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    totalUnits?: SortOrder
    areaSGA?: SortOrder
    description?: SortOrder
  }

  export type UnitTypeSumOrderByAggregateInput = {
    totalUnits?: SortOrder
    areaSGA?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ZoneCreateNestedManyWithoutTowerInput = {
    create?: XOR<ZoneCreateWithoutTowerInput, ZoneUncheckedCreateWithoutTowerInput> | ZoneCreateWithoutTowerInput[] | ZoneUncheckedCreateWithoutTowerInput[]
    connectOrCreate?: ZoneCreateOrConnectWithoutTowerInput | ZoneCreateOrConnectWithoutTowerInput[]
    createMany?: ZoneCreateManyTowerInputEnvelope
    connect?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
  }

  export type ZoneUncheckedCreateNestedManyWithoutTowerInput = {
    create?: XOR<ZoneCreateWithoutTowerInput, ZoneUncheckedCreateWithoutTowerInput> | ZoneCreateWithoutTowerInput[] | ZoneUncheckedCreateWithoutTowerInput[]
    connectOrCreate?: ZoneCreateOrConnectWithoutTowerInput | ZoneCreateOrConnectWithoutTowerInput[]
    createMany?: ZoneCreateManyTowerInputEnvelope
    connect?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
  }

  export type ZoneUpdateManyWithoutTowerNestedInput = {
    create?: XOR<ZoneCreateWithoutTowerInput, ZoneUncheckedCreateWithoutTowerInput> | ZoneCreateWithoutTowerInput[] | ZoneUncheckedCreateWithoutTowerInput[]
    connectOrCreate?: ZoneCreateOrConnectWithoutTowerInput | ZoneCreateOrConnectWithoutTowerInput[]
    upsert?: ZoneUpsertWithWhereUniqueWithoutTowerInput | ZoneUpsertWithWhereUniqueWithoutTowerInput[]
    createMany?: ZoneCreateManyTowerInputEnvelope
    set?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    disconnect?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    delete?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    connect?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    update?: ZoneUpdateWithWhereUniqueWithoutTowerInput | ZoneUpdateWithWhereUniqueWithoutTowerInput[]
    updateMany?: ZoneUpdateManyWithWhereWithoutTowerInput | ZoneUpdateManyWithWhereWithoutTowerInput[]
    deleteMany?: ZoneScalarWhereInput | ZoneScalarWhereInput[]
  }

  export type ZoneUncheckedUpdateManyWithoutTowerNestedInput = {
    create?: XOR<ZoneCreateWithoutTowerInput, ZoneUncheckedCreateWithoutTowerInput> | ZoneCreateWithoutTowerInput[] | ZoneUncheckedCreateWithoutTowerInput[]
    connectOrCreate?: ZoneCreateOrConnectWithoutTowerInput | ZoneCreateOrConnectWithoutTowerInput[]
    upsert?: ZoneUpsertWithWhereUniqueWithoutTowerInput | ZoneUpsertWithWhereUniqueWithoutTowerInput[]
    createMany?: ZoneCreateManyTowerInputEnvelope
    set?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    disconnect?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    delete?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    connect?: ZoneWhereUniqueInput | ZoneWhereUniqueInput[]
    update?: ZoneUpdateWithWhereUniqueWithoutTowerInput | ZoneUpdateWithWhereUniqueWithoutTowerInput[]
    updateMany?: ZoneUpdateManyWithWhereWithoutTowerInput | ZoneUpdateManyWithWhereWithoutTowerInput[]
    deleteMany?: ZoneScalarWhereInput | ZoneScalarWhereInput[]
  }

  export type TowerCreateNestedOneWithoutZonesInput = {
    create?: XOR<TowerCreateWithoutZonesInput, TowerUncheckedCreateWithoutZonesInput>
    connectOrCreate?: TowerCreateOrConnectWithoutZonesInput
    connect?: TowerWhereUniqueInput
  }

  export type FacilityCreateNestedManyWithoutZoneInput = {
    create?: XOR<FacilityCreateWithoutZoneInput, FacilityUncheckedCreateWithoutZoneInput> | FacilityCreateWithoutZoneInput[] | FacilityUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: FacilityCreateOrConnectWithoutZoneInput | FacilityCreateOrConnectWithoutZoneInput[]
    createMany?: FacilityCreateManyZoneInputEnvelope
    connect?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
  }

  export type ZoneImageCreateNestedManyWithoutZoneInput = {
    create?: XOR<ZoneImageCreateWithoutZoneInput, ZoneImageUncheckedCreateWithoutZoneInput> | ZoneImageCreateWithoutZoneInput[] | ZoneImageUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: ZoneImageCreateOrConnectWithoutZoneInput | ZoneImageCreateOrConnectWithoutZoneInput[]
    createMany?: ZoneImageCreateManyZoneInputEnvelope
    connect?: ZoneImageWhereUniqueInput | ZoneImageWhereUniqueInput[]
  }

  export type FacilityUncheckedCreateNestedManyWithoutZoneInput = {
    create?: XOR<FacilityCreateWithoutZoneInput, FacilityUncheckedCreateWithoutZoneInput> | FacilityCreateWithoutZoneInput[] | FacilityUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: FacilityCreateOrConnectWithoutZoneInput | FacilityCreateOrConnectWithoutZoneInput[]
    createMany?: FacilityCreateManyZoneInputEnvelope
    connect?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
  }

  export type ZoneImageUncheckedCreateNestedManyWithoutZoneInput = {
    create?: XOR<ZoneImageCreateWithoutZoneInput, ZoneImageUncheckedCreateWithoutZoneInput> | ZoneImageCreateWithoutZoneInput[] | ZoneImageUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: ZoneImageCreateOrConnectWithoutZoneInput | ZoneImageCreateOrConnectWithoutZoneInput[]
    createMany?: ZoneImageCreateManyZoneInputEnvelope
    connect?: ZoneImageWhereUniqueInput | ZoneImageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TowerUpdateOneRequiredWithoutZonesNestedInput = {
    create?: XOR<TowerCreateWithoutZonesInput, TowerUncheckedCreateWithoutZonesInput>
    connectOrCreate?: TowerCreateOrConnectWithoutZonesInput
    upsert?: TowerUpsertWithoutZonesInput
    connect?: TowerWhereUniqueInput
    update?: XOR<XOR<TowerUpdateToOneWithWhereWithoutZonesInput, TowerUpdateWithoutZonesInput>, TowerUncheckedUpdateWithoutZonesInput>
  }

  export type FacilityUpdateManyWithoutZoneNestedInput = {
    create?: XOR<FacilityCreateWithoutZoneInput, FacilityUncheckedCreateWithoutZoneInput> | FacilityCreateWithoutZoneInput[] | FacilityUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: FacilityCreateOrConnectWithoutZoneInput | FacilityCreateOrConnectWithoutZoneInput[]
    upsert?: FacilityUpsertWithWhereUniqueWithoutZoneInput | FacilityUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: FacilityCreateManyZoneInputEnvelope
    set?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    disconnect?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    delete?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    connect?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    update?: FacilityUpdateWithWhereUniqueWithoutZoneInput | FacilityUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: FacilityUpdateManyWithWhereWithoutZoneInput | FacilityUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: FacilityScalarWhereInput | FacilityScalarWhereInput[]
  }

  export type ZoneImageUpdateManyWithoutZoneNestedInput = {
    create?: XOR<ZoneImageCreateWithoutZoneInput, ZoneImageUncheckedCreateWithoutZoneInput> | ZoneImageCreateWithoutZoneInput[] | ZoneImageUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: ZoneImageCreateOrConnectWithoutZoneInput | ZoneImageCreateOrConnectWithoutZoneInput[]
    upsert?: ZoneImageUpsertWithWhereUniqueWithoutZoneInput | ZoneImageUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: ZoneImageCreateManyZoneInputEnvelope
    set?: ZoneImageWhereUniqueInput | ZoneImageWhereUniqueInput[]
    disconnect?: ZoneImageWhereUniqueInput | ZoneImageWhereUniqueInput[]
    delete?: ZoneImageWhereUniqueInput | ZoneImageWhereUniqueInput[]
    connect?: ZoneImageWhereUniqueInput | ZoneImageWhereUniqueInput[]
    update?: ZoneImageUpdateWithWhereUniqueWithoutZoneInput | ZoneImageUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: ZoneImageUpdateManyWithWhereWithoutZoneInput | ZoneImageUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: ZoneImageScalarWhereInput | ZoneImageScalarWhereInput[]
  }

  export type FacilityUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: XOR<FacilityCreateWithoutZoneInput, FacilityUncheckedCreateWithoutZoneInput> | FacilityCreateWithoutZoneInput[] | FacilityUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: FacilityCreateOrConnectWithoutZoneInput | FacilityCreateOrConnectWithoutZoneInput[]
    upsert?: FacilityUpsertWithWhereUniqueWithoutZoneInput | FacilityUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: FacilityCreateManyZoneInputEnvelope
    set?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    disconnect?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    delete?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    connect?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    update?: FacilityUpdateWithWhereUniqueWithoutZoneInput | FacilityUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: FacilityUpdateManyWithWhereWithoutZoneInput | FacilityUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: FacilityScalarWhereInput | FacilityScalarWhereInput[]
  }

  export type ZoneImageUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: XOR<ZoneImageCreateWithoutZoneInput, ZoneImageUncheckedCreateWithoutZoneInput> | ZoneImageCreateWithoutZoneInput[] | ZoneImageUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: ZoneImageCreateOrConnectWithoutZoneInput | ZoneImageCreateOrConnectWithoutZoneInput[]
    upsert?: ZoneImageUpsertWithWhereUniqueWithoutZoneInput | ZoneImageUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: ZoneImageCreateManyZoneInputEnvelope
    set?: ZoneImageWhereUniqueInput | ZoneImageWhereUniqueInput[]
    disconnect?: ZoneImageWhereUniqueInput | ZoneImageWhereUniqueInput[]
    delete?: ZoneImageWhereUniqueInput | ZoneImageWhereUniqueInput[]
    connect?: ZoneImageWhereUniqueInput | ZoneImageWhereUniqueInput[]
    update?: ZoneImageUpdateWithWhereUniqueWithoutZoneInput | ZoneImageUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: ZoneImageUpdateManyWithWhereWithoutZoneInput | ZoneImageUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: ZoneImageScalarWhereInput | ZoneImageScalarWhereInput[]
  }

  export type ZoneCreateNestedOneWithoutImagesInput = {
    create?: XOR<ZoneCreateWithoutImagesInput, ZoneUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutImagesInput
    connect?: ZoneWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ZoneUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ZoneCreateWithoutImagesInput, ZoneUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutImagesInput
    upsert?: ZoneUpsertWithoutImagesInput
    connect?: ZoneWhereUniqueInput
    update?: XOR<XOR<ZoneUpdateToOneWithWhereWithoutImagesInput, ZoneUpdateWithoutImagesInput>, ZoneUncheckedUpdateWithoutImagesInput>
  }

  export type ZoneCreateNestedOneWithoutFacilitiesInput = {
    create?: XOR<ZoneCreateWithoutFacilitiesInput, ZoneUncheckedCreateWithoutFacilitiesInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutFacilitiesInput
    connect?: ZoneWhereUniqueInput
  }

  export type FacilityImageCreateNestedManyWithoutFacilityInput = {
    create?: XOR<FacilityImageCreateWithoutFacilityInput, FacilityImageUncheckedCreateWithoutFacilityInput> | FacilityImageCreateWithoutFacilityInput[] | FacilityImageUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityImageCreateOrConnectWithoutFacilityInput | FacilityImageCreateOrConnectWithoutFacilityInput[]
    createMany?: FacilityImageCreateManyFacilityInputEnvelope
    connect?: FacilityImageWhereUniqueInput | FacilityImageWhereUniqueInput[]
  }

  export type UnitTypeCreateNestedManyWithoutFacilityInput = {
    create?: XOR<UnitTypeCreateWithoutFacilityInput, UnitTypeUncheckedCreateWithoutFacilityInput> | UnitTypeCreateWithoutFacilityInput[] | UnitTypeUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: UnitTypeCreateOrConnectWithoutFacilityInput | UnitTypeCreateOrConnectWithoutFacilityInput[]
    createMany?: UnitTypeCreateManyFacilityInputEnvelope
    connect?: UnitTypeWhereUniqueInput | UnitTypeWhereUniqueInput[]
  }

  export type FacilityImageUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<FacilityImageCreateWithoutFacilityInput, FacilityImageUncheckedCreateWithoutFacilityInput> | FacilityImageCreateWithoutFacilityInput[] | FacilityImageUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityImageCreateOrConnectWithoutFacilityInput | FacilityImageCreateOrConnectWithoutFacilityInput[]
    createMany?: FacilityImageCreateManyFacilityInputEnvelope
    connect?: FacilityImageWhereUniqueInput | FacilityImageWhereUniqueInput[]
  }

  export type UnitTypeUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<UnitTypeCreateWithoutFacilityInput, UnitTypeUncheckedCreateWithoutFacilityInput> | UnitTypeCreateWithoutFacilityInput[] | UnitTypeUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: UnitTypeCreateOrConnectWithoutFacilityInput | UnitTypeCreateOrConnectWithoutFacilityInput[]
    createMany?: UnitTypeCreateManyFacilityInputEnvelope
    connect?: UnitTypeWhereUniqueInput | UnitTypeWhereUniqueInput[]
  }

  export type ZoneUpdateOneRequiredWithoutFacilitiesNestedInput = {
    create?: XOR<ZoneCreateWithoutFacilitiesInput, ZoneUncheckedCreateWithoutFacilitiesInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutFacilitiesInput
    upsert?: ZoneUpsertWithoutFacilitiesInput
    connect?: ZoneWhereUniqueInput
    update?: XOR<XOR<ZoneUpdateToOneWithWhereWithoutFacilitiesInput, ZoneUpdateWithoutFacilitiesInput>, ZoneUncheckedUpdateWithoutFacilitiesInput>
  }

  export type FacilityImageUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<FacilityImageCreateWithoutFacilityInput, FacilityImageUncheckedCreateWithoutFacilityInput> | FacilityImageCreateWithoutFacilityInput[] | FacilityImageUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityImageCreateOrConnectWithoutFacilityInput | FacilityImageCreateOrConnectWithoutFacilityInput[]
    upsert?: FacilityImageUpsertWithWhereUniqueWithoutFacilityInput | FacilityImageUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: FacilityImageCreateManyFacilityInputEnvelope
    set?: FacilityImageWhereUniqueInput | FacilityImageWhereUniqueInput[]
    disconnect?: FacilityImageWhereUniqueInput | FacilityImageWhereUniqueInput[]
    delete?: FacilityImageWhereUniqueInput | FacilityImageWhereUniqueInput[]
    connect?: FacilityImageWhereUniqueInput | FacilityImageWhereUniqueInput[]
    update?: FacilityImageUpdateWithWhereUniqueWithoutFacilityInput | FacilityImageUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: FacilityImageUpdateManyWithWhereWithoutFacilityInput | FacilityImageUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: FacilityImageScalarWhereInput | FacilityImageScalarWhereInput[]
  }

  export type UnitTypeUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<UnitTypeCreateWithoutFacilityInput, UnitTypeUncheckedCreateWithoutFacilityInput> | UnitTypeCreateWithoutFacilityInput[] | UnitTypeUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: UnitTypeCreateOrConnectWithoutFacilityInput | UnitTypeCreateOrConnectWithoutFacilityInput[]
    upsert?: UnitTypeUpsertWithWhereUniqueWithoutFacilityInput | UnitTypeUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: UnitTypeCreateManyFacilityInputEnvelope
    set?: UnitTypeWhereUniqueInput | UnitTypeWhereUniqueInput[]
    disconnect?: UnitTypeWhereUniqueInput | UnitTypeWhereUniqueInput[]
    delete?: UnitTypeWhereUniqueInput | UnitTypeWhereUniqueInput[]
    connect?: UnitTypeWhereUniqueInput | UnitTypeWhereUniqueInput[]
    update?: UnitTypeUpdateWithWhereUniqueWithoutFacilityInput | UnitTypeUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: UnitTypeUpdateManyWithWhereWithoutFacilityInput | UnitTypeUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: UnitTypeScalarWhereInput | UnitTypeScalarWhereInput[]
  }

  export type FacilityImageUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<FacilityImageCreateWithoutFacilityInput, FacilityImageUncheckedCreateWithoutFacilityInput> | FacilityImageCreateWithoutFacilityInput[] | FacilityImageUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityImageCreateOrConnectWithoutFacilityInput | FacilityImageCreateOrConnectWithoutFacilityInput[]
    upsert?: FacilityImageUpsertWithWhereUniqueWithoutFacilityInput | FacilityImageUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: FacilityImageCreateManyFacilityInputEnvelope
    set?: FacilityImageWhereUniqueInput | FacilityImageWhereUniqueInput[]
    disconnect?: FacilityImageWhereUniqueInput | FacilityImageWhereUniqueInput[]
    delete?: FacilityImageWhereUniqueInput | FacilityImageWhereUniqueInput[]
    connect?: FacilityImageWhereUniqueInput | FacilityImageWhereUniqueInput[]
    update?: FacilityImageUpdateWithWhereUniqueWithoutFacilityInput | FacilityImageUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: FacilityImageUpdateManyWithWhereWithoutFacilityInput | FacilityImageUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: FacilityImageScalarWhereInput | FacilityImageScalarWhereInput[]
  }

  export type UnitTypeUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<UnitTypeCreateWithoutFacilityInput, UnitTypeUncheckedCreateWithoutFacilityInput> | UnitTypeCreateWithoutFacilityInput[] | UnitTypeUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: UnitTypeCreateOrConnectWithoutFacilityInput | UnitTypeCreateOrConnectWithoutFacilityInput[]
    upsert?: UnitTypeUpsertWithWhereUniqueWithoutFacilityInput | UnitTypeUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: UnitTypeCreateManyFacilityInputEnvelope
    set?: UnitTypeWhereUniqueInput | UnitTypeWhereUniqueInput[]
    disconnect?: UnitTypeWhereUniqueInput | UnitTypeWhereUniqueInput[]
    delete?: UnitTypeWhereUniqueInput | UnitTypeWhereUniqueInput[]
    connect?: UnitTypeWhereUniqueInput | UnitTypeWhereUniqueInput[]
    update?: UnitTypeUpdateWithWhereUniqueWithoutFacilityInput | UnitTypeUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: UnitTypeUpdateManyWithWhereWithoutFacilityInput | UnitTypeUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: UnitTypeScalarWhereInput | UnitTypeScalarWhereInput[]
  }

  export type FacilityCreateNestedOneWithoutImagesInput = {
    create?: XOR<FacilityCreateWithoutImagesInput, FacilityUncheckedCreateWithoutImagesInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutImagesInput
    connect?: FacilityWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FacilityUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<FacilityCreateWithoutImagesInput, FacilityUncheckedCreateWithoutImagesInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutImagesInput
    upsert?: FacilityUpsertWithoutImagesInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutImagesInput, FacilityUpdateWithoutImagesInput>, FacilityUncheckedUpdateWithoutImagesInput>
  }

  export type UnitTypeCreateimagesInput = {
    set: string[]
  }

  export type FacilityCreateNestedOneWithoutUnitTypesInput = {
    create?: XOR<FacilityCreateWithoutUnitTypesInput, FacilityUncheckedCreateWithoutUnitTypesInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutUnitTypesInput
    connect?: FacilityWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UnitTypeUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FacilityUpdateOneRequiredWithoutUnitTypesNestedInput = {
    create?: XOR<FacilityCreateWithoutUnitTypesInput, FacilityUncheckedCreateWithoutUnitTypesInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutUnitTypesInput
    upsert?: FacilityUpsertWithoutUnitTypesInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutUnitTypesInput, FacilityUpdateWithoutUnitTypesInput>, FacilityUncheckedUpdateWithoutUnitTypesInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ZoneCreateWithoutTowerInput = {
    id?: string
    categoryName: string
    floorsRange: string
    points?: string | null
    imageUrl?: string | null
    facilities?: FacilityCreateNestedManyWithoutZoneInput
    images?: ZoneImageCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateWithoutTowerInput = {
    id?: string
    categoryName: string
    floorsRange: string
    points?: string | null
    imageUrl?: string | null
    facilities?: FacilityUncheckedCreateNestedManyWithoutZoneInput
    images?: ZoneImageUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneCreateOrConnectWithoutTowerInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutTowerInput, ZoneUncheckedCreateWithoutTowerInput>
  }

  export type ZoneCreateManyTowerInputEnvelope = {
    data: ZoneCreateManyTowerInput | ZoneCreateManyTowerInput[]
    skipDuplicates?: boolean
  }

  export type ZoneUpsertWithWhereUniqueWithoutTowerInput = {
    where: ZoneWhereUniqueInput
    update: XOR<ZoneUpdateWithoutTowerInput, ZoneUncheckedUpdateWithoutTowerInput>
    create: XOR<ZoneCreateWithoutTowerInput, ZoneUncheckedCreateWithoutTowerInput>
  }

  export type ZoneUpdateWithWhereUniqueWithoutTowerInput = {
    where: ZoneWhereUniqueInput
    data: XOR<ZoneUpdateWithoutTowerInput, ZoneUncheckedUpdateWithoutTowerInput>
  }

  export type ZoneUpdateManyWithWhereWithoutTowerInput = {
    where: ZoneScalarWhereInput
    data: XOR<ZoneUpdateManyMutationInput, ZoneUncheckedUpdateManyWithoutTowerInput>
  }

  export type ZoneScalarWhereInput = {
    AND?: ZoneScalarWhereInput | ZoneScalarWhereInput[]
    OR?: ZoneScalarWhereInput[]
    NOT?: ZoneScalarWhereInput | ZoneScalarWhereInput[]
    id?: StringFilter<"Zone"> | string
    towerId?: StringFilter<"Zone"> | string
    categoryName?: StringFilter<"Zone"> | string
    floorsRange?: StringFilter<"Zone"> | string
    points?: StringNullableFilter<"Zone"> | string | null
    imageUrl?: StringNullableFilter<"Zone"> | string | null
  }

  export type TowerCreateWithoutZonesInput = {
    id?: string
    name: string
    slug: string
  }

  export type TowerUncheckedCreateWithoutZonesInput = {
    id?: string
    name: string
    slug: string
  }

  export type TowerCreateOrConnectWithoutZonesInput = {
    where: TowerWhereUniqueInput
    create: XOR<TowerCreateWithoutZonesInput, TowerUncheckedCreateWithoutZonesInput>
  }

  export type FacilityCreateWithoutZoneInput = {
    id?: string
    title: string
    category: string
    description?: string | null
    images?: FacilityImageCreateNestedManyWithoutFacilityInput
    unitTypes?: UnitTypeCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutZoneInput = {
    id?: string
    title: string
    category: string
    description?: string | null
    images?: FacilityImageUncheckedCreateNestedManyWithoutFacilityInput
    unitTypes?: UnitTypeUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutZoneInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutZoneInput, FacilityUncheckedCreateWithoutZoneInput>
  }

  export type FacilityCreateManyZoneInputEnvelope = {
    data: FacilityCreateManyZoneInput | FacilityCreateManyZoneInput[]
    skipDuplicates?: boolean
  }

  export type ZoneImageCreateWithoutZoneInput = {
    id?: string
    imageUrl: string
    sortOrder?: number
  }

  export type ZoneImageUncheckedCreateWithoutZoneInput = {
    id?: string
    imageUrl: string
    sortOrder?: number
  }

  export type ZoneImageCreateOrConnectWithoutZoneInput = {
    where: ZoneImageWhereUniqueInput
    create: XOR<ZoneImageCreateWithoutZoneInput, ZoneImageUncheckedCreateWithoutZoneInput>
  }

  export type ZoneImageCreateManyZoneInputEnvelope = {
    data: ZoneImageCreateManyZoneInput | ZoneImageCreateManyZoneInput[]
    skipDuplicates?: boolean
  }

  export type TowerUpsertWithoutZonesInput = {
    update: XOR<TowerUpdateWithoutZonesInput, TowerUncheckedUpdateWithoutZonesInput>
    create: XOR<TowerCreateWithoutZonesInput, TowerUncheckedCreateWithoutZonesInput>
    where?: TowerWhereInput
  }

  export type TowerUpdateToOneWithWhereWithoutZonesInput = {
    where?: TowerWhereInput
    data: XOR<TowerUpdateWithoutZonesInput, TowerUncheckedUpdateWithoutZonesInput>
  }

  export type TowerUpdateWithoutZonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TowerUncheckedUpdateWithoutZonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type FacilityUpsertWithWhereUniqueWithoutZoneInput = {
    where: FacilityWhereUniqueInput
    update: XOR<FacilityUpdateWithoutZoneInput, FacilityUncheckedUpdateWithoutZoneInput>
    create: XOR<FacilityCreateWithoutZoneInput, FacilityUncheckedCreateWithoutZoneInput>
  }

  export type FacilityUpdateWithWhereUniqueWithoutZoneInput = {
    where: FacilityWhereUniqueInput
    data: XOR<FacilityUpdateWithoutZoneInput, FacilityUncheckedUpdateWithoutZoneInput>
  }

  export type FacilityUpdateManyWithWhereWithoutZoneInput = {
    where: FacilityScalarWhereInput
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyWithoutZoneInput>
  }

  export type FacilityScalarWhereInput = {
    AND?: FacilityScalarWhereInput | FacilityScalarWhereInput[]
    OR?: FacilityScalarWhereInput[]
    NOT?: FacilityScalarWhereInput | FacilityScalarWhereInput[]
    id?: StringFilter<"Facility"> | string
    zoneId?: StringFilter<"Facility"> | string
    title?: StringFilter<"Facility"> | string
    category?: StringFilter<"Facility"> | string
    description?: StringNullableFilter<"Facility"> | string | null
  }

  export type ZoneImageUpsertWithWhereUniqueWithoutZoneInput = {
    where: ZoneImageWhereUniqueInput
    update: XOR<ZoneImageUpdateWithoutZoneInput, ZoneImageUncheckedUpdateWithoutZoneInput>
    create: XOR<ZoneImageCreateWithoutZoneInput, ZoneImageUncheckedCreateWithoutZoneInput>
  }

  export type ZoneImageUpdateWithWhereUniqueWithoutZoneInput = {
    where: ZoneImageWhereUniqueInput
    data: XOR<ZoneImageUpdateWithoutZoneInput, ZoneImageUncheckedUpdateWithoutZoneInput>
  }

  export type ZoneImageUpdateManyWithWhereWithoutZoneInput = {
    where: ZoneImageScalarWhereInput
    data: XOR<ZoneImageUpdateManyMutationInput, ZoneImageUncheckedUpdateManyWithoutZoneInput>
  }

  export type ZoneImageScalarWhereInput = {
    AND?: ZoneImageScalarWhereInput | ZoneImageScalarWhereInput[]
    OR?: ZoneImageScalarWhereInput[]
    NOT?: ZoneImageScalarWhereInput | ZoneImageScalarWhereInput[]
    id?: StringFilter<"ZoneImage"> | string
    zoneId?: StringFilter<"ZoneImage"> | string
    imageUrl?: StringFilter<"ZoneImage"> | string
    sortOrder?: IntFilter<"ZoneImage"> | number
  }

  export type ZoneCreateWithoutImagesInput = {
    id?: string
    categoryName: string
    floorsRange: string
    points?: string | null
    imageUrl?: string | null
    tower: TowerCreateNestedOneWithoutZonesInput
    facilities?: FacilityCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateWithoutImagesInput = {
    id?: string
    towerId: string
    categoryName: string
    floorsRange: string
    points?: string | null
    imageUrl?: string | null
    facilities?: FacilityUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneCreateOrConnectWithoutImagesInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutImagesInput, ZoneUncheckedCreateWithoutImagesInput>
  }

  export type ZoneUpsertWithoutImagesInput = {
    update: XOR<ZoneUpdateWithoutImagesInput, ZoneUncheckedUpdateWithoutImagesInput>
    create: XOR<ZoneCreateWithoutImagesInput, ZoneUncheckedCreateWithoutImagesInput>
    where?: ZoneWhereInput
  }

  export type ZoneUpdateToOneWithWhereWithoutImagesInput = {
    where?: ZoneWhereInput
    data: XOR<ZoneUpdateWithoutImagesInput, ZoneUncheckedUpdateWithoutImagesInput>
  }

  export type ZoneUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    floorsRange?: StringFieldUpdateOperationsInput | string
    points?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tower?: TowerUpdateOneRequiredWithoutZonesNestedInput
    facilities?: FacilityUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    towerId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    floorsRange?: StringFieldUpdateOperationsInput | string
    points?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: FacilityUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type ZoneCreateWithoutFacilitiesInput = {
    id?: string
    categoryName: string
    floorsRange: string
    points?: string | null
    imageUrl?: string | null
    tower: TowerCreateNestedOneWithoutZonesInput
    images?: ZoneImageCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateWithoutFacilitiesInput = {
    id?: string
    towerId: string
    categoryName: string
    floorsRange: string
    points?: string | null
    imageUrl?: string | null
    images?: ZoneImageUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneCreateOrConnectWithoutFacilitiesInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutFacilitiesInput, ZoneUncheckedCreateWithoutFacilitiesInput>
  }

  export type FacilityImageCreateWithoutFacilityInput = {
    id?: string
    imageUrl: string
    isPrimary?: boolean
    sortOrder?: number
  }

  export type FacilityImageUncheckedCreateWithoutFacilityInput = {
    id?: string
    imageUrl: string
    isPrimary?: boolean
    sortOrder?: number
  }

  export type FacilityImageCreateOrConnectWithoutFacilityInput = {
    where: FacilityImageWhereUniqueInput
    create: XOR<FacilityImageCreateWithoutFacilityInput, FacilityImageUncheckedCreateWithoutFacilityInput>
  }

  export type FacilityImageCreateManyFacilityInputEnvelope = {
    data: FacilityImageCreateManyFacilityInput | FacilityImageCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type UnitTypeCreateWithoutFacilityInput = {
    id?: string
    name: string
    category: string
    totalUnits?: number | null
    areaSGA?: number | null
    description?: string | null
    images?: UnitTypeCreateimagesInput | string[]
  }

  export type UnitTypeUncheckedCreateWithoutFacilityInput = {
    id?: string
    name: string
    category: string
    totalUnits?: number | null
    areaSGA?: number | null
    description?: string | null
    images?: UnitTypeCreateimagesInput | string[]
  }

  export type UnitTypeCreateOrConnectWithoutFacilityInput = {
    where: UnitTypeWhereUniqueInput
    create: XOR<UnitTypeCreateWithoutFacilityInput, UnitTypeUncheckedCreateWithoutFacilityInput>
  }

  export type UnitTypeCreateManyFacilityInputEnvelope = {
    data: UnitTypeCreateManyFacilityInput | UnitTypeCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type ZoneUpsertWithoutFacilitiesInput = {
    update: XOR<ZoneUpdateWithoutFacilitiesInput, ZoneUncheckedUpdateWithoutFacilitiesInput>
    create: XOR<ZoneCreateWithoutFacilitiesInput, ZoneUncheckedCreateWithoutFacilitiesInput>
    where?: ZoneWhereInput
  }

  export type ZoneUpdateToOneWithWhereWithoutFacilitiesInput = {
    where?: ZoneWhereInput
    data: XOR<ZoneUpdateWithoutFacilitiesInput, ZoneUncheckedUpdateWithoutFacilitiesInput>
  }

  export type ZoneUpdateWithoutFacilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    floorsRange?: StringFieldUpdateOperationsInput | string
    points?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tower?: TowerUpdateOneRequiredWithoutZonesNestedInput
    images?: ZoneImageUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateWithoutFacilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    towerId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    floorsRange?: StringFieldUpdateOperationsInput | string
    points?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ZoneImageUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type FacilityImageUpsertWithWhereUniqueWithoutFacilityInput = {
    where: FacilityImageWhereUniqueInput
    update: XOR<FacilityImageUpdateWithoutFacilityInput, FacilityImageUncheckedUpdateWithoutFacilityInput>
    create: XOR<FacilityImageCreateWithoutFacilityInput, FacilityImageUncheckedCreateWithoutFacilityInput>
  }

  export type FacilityImageUpdateWithWhereUniqueWithoutFacilityInput = {
    where: FacilityImageWhereUniqueInput
    data: XOR<FacilityImageUpdateWithoutFacilityInput, FacilityImageUncheckedUpdateWithoutFacilityInput>
  }

  export type FacilityImageUpdateManyWithWhereWithoutFacilityInput = {
    where: FacilityImageScalarWhereInput
    data: XOR<FacilityImageUpdateManyMutationInput, FacilityImageUncheckedUpdateManyWithoutFacilityInput>
  }

  export type FacilityImageScalarWhereInput = {
    AND?: FacilityImageScalarWhereInput | FacilityImageScalarWhereInput[]
    OR?: FacilityImageScalarWhereInput[]
    NOT?: FacilityImageScalarWhereInput | FacilityImageScalarWhereInput[]
    id?: StringFilter<"FacilityImage"> | string
    facilityId?: StringFilter<"FacilityImage"> | string
    imageUrl?: StringFilter<"FacilityImage"> | string
    isPrimary?: BoolFilter<"FacilityImage"> | boolean
    sortOrder?: IntFilter<"FacilityImage"> | number
  }

  export type UnitTypeUpsertWithWhereUniqueWithoutFacilityInput = {
    where: UnitTypeWhereUniqueInput
    update: XOR<UnitTypeUpdateWithoutFacilityInput, UnitTypeUncheckedUpdateWithoutFacilityInput>
    create: XOR<UnitTypeCreateWithoutFacilityInput, UnitTypeUncheckedCreateWithoutFacilityInput>
  }

  export type UnitTypeUpdateWithWhereUniqueWithoutFacilityInput = {
    where: UnitTypeWhereUniqueInput
    data: XOR<UnitTypeUpdateWithoutFacilityInput, UnitTypeUncheckedUpdateWithoutFacilityInput>
  }

  export type UnitTypeUpdateManyWithWhereWithoutFacilityInput = {
    where: UnitTypeScalarWhereInput
    data: XOR<UnitTypeUpdateManyMutationInput, UnitTypeUncheckedUpdateManyWithoutFacilityInput>
  }

  export type UnitTypeScalarWhereInput = {
    AND?: UnitTypeScalarWhereInput | UnitTypeScalarWhereInput[]
    OR?: UnitTypeScalarWhereInput[]
    NOT?: UnitTypeScalarWhereInput | UnitTypeScalarWhereInput[]
    id?: StringFilter<"UnitType"> | string
    facilityId?: StringFilter<"UnitType"> | string
    name?: StringFilter<"UnitType"> | string
    category?: StringFilter<"UnitType"> | string
    totalUnits?: IntNullableFilter<"UnitType"> | number | null
    areaSGA?: FloatNullableFilter<"UnitType"> | number | null
    description?: StringNullableFilter<"UnitType"> | string | null
    images?: StringNullableListFilter<"UnitType">
  }

  export type FacilityCreateWithoutImagesInput = {
    id?: string
    title: string
    category: string
    description?: string | null
    zone: ZoneCreateNestedOneWithoutFacilitiesInput
    unitTypes?: UnitTypeCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutImagesInput = {
    id?: string
    zoneId: string
    title: string
    category: string
    description?: string | null
    unitTypes?: UnitTypeUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutImagesInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutImagesInput, FacilityUncheckedCreateWithoutImagesInput>
  }

  export type FacilityUpsertWithoutImagesInput = {
    update: XOR<FacilityUpdateWithoutImagesInput, FacilityUncheckedUpdateWithoutImagesInput>
    create: XOR<FacilityCreateWithoutImagesInput, FacilityUncheckedCreateWithoutImagesInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutImagesInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutImagesInput, FacilityUncheckedUpdateWithoutImagesInput>
  }

  export type FacilityUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: ZoneUpdateOneRequiredWithoutFacilitiesNestedInput
    unitTypes?: UnitTypeUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unitTypes?: UnitTypeUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityCreateWithoutUnitTypesInput = {
    id?: string
    title: string
    category: string
    description?: string | null
    zone: ZoneCreateNestedOneWithoutFacilitiesInput
    images?: FacilityImageCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutUnitTypesInput = {
    id?: string
    zoneId: string
    title: string
    category: string
    description?: string | null
    images?: FacilityImageUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutUnitTypesInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutUnitTypesInput, FacilityUncheckedCreateWithoutUnitTypesInput>
  }

  export type FacilityUpsertWithoutUnitTypesInput = {
    update: XOR<FacilityUpdateWithoutUnitTypesInput, FacilityUncheckedUpdateWithoutUnitTypesInput>
    create: XOR<FacilityCreateWithoutUnitTypesInput, FacilityUncheckedCreateWithoutUnitTypesInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutUnitTypesInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutUnitTypesInput, FacilityUncheckedUpdateWithoutUnitTypesInput>
  }

  export type FacilityUpdateWithoutUnitTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: ZoneUpdateOneRequiredWithoutFacilitiesNestedInput
    images?: FacilityImageUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutUnitTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: FacilityImageUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type ZoneCreateManyTowerInput = {
    id?: string
    categoryName: string
    floorsRange: string
    points?: string | null
    imageUrl?: string | null
  }

  export type ZoneUpdateWithoutTowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    floorsRange?: StringFieldUpdateOperationsInput | string
    points?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: FacilityUpdateManyWithoutZoneNestedInput
    images?: ZoneImageUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateWithoutTowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    floorsRange?: StringFieldUpdateOperationsInput | string
    points?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: FacilityUncheckedUpdateManyWithoutZoneNestedInput
    images?: ZoneImageUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateManyWithoutTowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    floorsRange?: StringFieldUpdateOperationsInput | string
    points?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacilityCreateManyZoneInput = {
    id?: string
    title: string
    category: string
    description?: string | null
  }

  export type ZoneImageCreateManyZoneInput = {
    id?: string
    imageUrl: string
    sortOrder?: number
  }

  export type FacilityUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: FacilityImageUpdateManyWithoutFacilityNestedInput
    unitTypes?: UnitTypeUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: FacilityImageUncheckedUpdateManyWithoutFacilityNestedInput
    unitTypes?: UnitTypeUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateManyWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ZoneImageUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ZoneImageUncheckedUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ZoneImageUncheckedUpdateManyWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type FacilityImageCreateManyFacilityInput = {
    id?: string
    imageUrl: string
    isPrimary?: boolean
    sortOrder?: number
  }

  export type UnitTypeCreateManyFacilityInput = {
    id?: string
    name: string
    category: string
    totalUnits?: number | null
    areaSGA?: number | null
    description?: string | null
    images?: UnitTypeCreateimagesInput | string[]
  }

  export type FacilityImageUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type FacilityImageUncheckedUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type FacilityImageUncheckedUpdateManyWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type UnitTypeUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    areaSGA?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UnitTypeUpdateimagesInput | string[]
  }

  export type UnitTypeUncheckedUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    areaSGA?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UnitTypeUpdateimagesInput | string[]
  }

  export type UnitTypeUncheckedUpdateManyWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    areaSGA?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: UnitTypeUpdateimagesInput | string[]
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