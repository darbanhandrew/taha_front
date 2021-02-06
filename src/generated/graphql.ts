import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   *
   *     Errors messages and codes mapped to
   *     fields or non fields errors.
   *     Example:
   *     {
   *         field_name: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         other_field: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         nonFieldErrors: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ]
   *     }
   *
   */
  ExpectedErrorType: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};



export type Query = {
  __typename?: 'Query';
  /** The ID of the object */
  shop?: Maybe<ShopNode>;
  shopList?: Maybe<ShopNodeConnection>;
  /** The ID of the object */
  affiliate?: Maybe<AffiliateNode>;
  affiliateList?: Maybe<AffiliateNodeConnection>;
  /** The ID of the object */
  product?: Maybe<ProductNode>;
  productList?: Maybe<ProductNodeConnection>;
  /** The ID of the object */
  receipt?: Maybe<RecieptNode>;
  receiptList?: Maybe<RecieptNodeConnection>;
  /** The ID of the object */
  transaction?: Maybe<TransactionNode>;
  transactionList?: Maybe<TransactionNodeConnection>;
  /** The ID of the object */
  wallet?: Maybe<WalletNode>;
  walletList?: Maybe<WalletNodeConnection>;
  /** The ID of the object */
  category?: Maybe<CategoryNode>;
  categoryList?: Maybe<CategoryNodeConnection>;
  me?: Maybe<UserNode>;
  /** The ID of the object */
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
};


export type QueryShopArgs = {
  id: Scalars['ID'];
};


export type QueryShopListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


export type QueryAffiliateArgs = {
  id: Scalars['ID'];
};


export type QueryAffiliateListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


export type QueryReceiptArgs = {
  id: Scalars['ID'];
};


export type QueryReceiptListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
};


export type QueryTransactionListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};


export type QueryWalletArgs = {
  id: Scalars['ID'];
};


export type QueryWalletListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryCategoryListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  status_Archived?: Maybe<Scalars['Boolean']>;
  status_Verified?: Maybe<Scalars['Boolean']>;
  status_SecondaryEmail?: Maybe<Scalars['String']>;
};

export type ShopNode = Node & {
  __typename?: 'ShopNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  slug: Scalars['String'];
  image: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: BaseModelStatus;
  address: Scalars['String'];
  email: Scalars['String'];
  commission: Scalars['Int'];
  productSet: ProductNodeConnection;
};


export type ShopNodeProductSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};


/** An enumeration. */
export enum BaseModelStatus {
  /** Active */
  A = 'A',
  /** Deactive */
  D = 'D'
}

export type ProductNodeConnection = {
  __typename?: 'ProductNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductNodeEdge>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** A Relay edge containing a `ProductNode` and its cursor. */
export type ProductNodeEdge = {
  __typename?: 'ProductNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ProductNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ProductNode = Node & {
  __typename?: 'ProductNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  slug: Scalars['String'];
  image: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: BaseModelStatus;
  relatedShop: ShopNode;
  stock?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  categories: CategoryNodeConnection;
  receiptSet: RecieptNodeConnection;
};


export type ProductNodeCategoriesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type ProductNodeReceiptSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryNodeConnection = {
  __typename?: 'CategoryNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CategoryNodeEdge>>;
};

/** A Relay edge containing a `CategoryNode` and its cursor. */
export type CategoryNodeEdge = {
  __typename?: 'CategoryNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CategoryNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CategoryNode = Node & {
  __typename?: 'CategoryNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  path: Scalars['String'];
  depth: Scalars['Int'];
  numchild: Scalars['Int'];
  name: Scalars['String'];
  productSet: ProductNodeConnection;
};


export type CategoryNodeProductSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type RecieptNodeConnection = {
  __typename?: 'RecieptNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RecieptNodeEdge>>;
};

/** A Relay edge containing a `RecieptNode` and its cursor. */
export type RecieptNodeEdge = {
  __typename?: 'RecieptNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<RecieptNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type RecieptNode = Node & {
  __typename?: 'RecieptNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  relatedProduct: ProductNode;
  totalAmount?: Maybe<Scalars['Int']>;
  affiliateAmount?: Maybe<Scalars['Int']>;
  relatedAffiliate: AffiliateNode;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type AffiliateNode = Node & {
  __typename?: 'AffiliateNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  slug: Scalars['String'];
  image: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: BaseModelStatus;
  walletSet: WalletNodeConnection;
  receiptSet: RecieptNodeConnection;
  transactionSet: TransactionNodeConnection;
};


export type AffiliateNodeWalletSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};


export type AffiliateNodeReceiptSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};


export type AffiliateNodeTransactionSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type WalletNodeConnection = {
  __typename?: 'WalletNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WalletNodeEdge>>;
};

/** A Relay edge containing a `WalletNode` and its cursor. */
export type WalletNodeEdge = {
  __typename?: 'WalletNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<WalletNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type WalletNode = Node & {
  __typename?: 'WalletNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  relatedAffiliate: AffiliateNode;
  amount?: Maybe<Scalars['Int']>;
};

export type TransactionNodeConnection = {
  __typename?: 'TransactionNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TransactionNodeEdge>>;
};

/** A Relay edge containing a `TransactionNode` and its cursor. */
export type TransactionNodeEdge = {
  __typename?: 'TransactionNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TransactionNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TransactionNode = Node & {
  __typename?: 'TransactionNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  amount?: Maybe<Scalars['Int']>;
  relatedAffiliate: AffiliateNode;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  types: TransactionTypes;
};

/** An enumeration. */
export enum TransactionTypes {
  /** Add */
  A = 'A',
  /** Minus */
  M = 'M'
}

export type ShopNodeConnection = {
  __typename?: 'ShopNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ShopNodeEdge>>;
};

/** A Relay edge containing a `ShopNode` and its cursor. */
export type ShopNodeEdge = {
  __typename?: 'ShopNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ShopNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AffiliateNodeConnection = {
  __typename?: 'AffiliateNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AffiliateNodeEdge>>;
};

/** A Relay edge containing a `AffiliateNode` and its cursor. */
export type AffiliateNodeEdge = {
  __typename?: 'AffiliateNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AffiliateNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  shopSet: ShopNodeConnection;
  User: AffiliateNodeConnection;
  pk?: Maybe<Scalars['Int']>;
  archived?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  secondaryEmail?: Maybe<Scalars['String']>;
};


export type UserNodeShopSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


export type UserNodeUserArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   */
  passwordReset?: Maybe<PasswordReset>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccount>;
  /**
   * Delete account permanently or make `user.is_active=False`.
   *
   * The behavior is defined on settings.
   * Anyway user refresh tokens are revoked.
   *
   * User must be verified and confirm password.
   */
  deleteAccount?: Maybe<DeleteAccount>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  /**
   * Send activation to secondary email.
   *
   * User must be verified and confirm password.
   */
  sendSecondaryEmailActivation?: Maybe<SendSecondaryEmailActivation>;
  /**
   * Verify user secondary email.
   *
   * Receive the token that was sent by email.
   * User is already verified when using this mutation.
   *
   * If the token is valid, add the secondary email
   * to `user.status.secondary_email` field.
   *
   * Note that until the secondary email is verified,
   * it has not been saved anywhere beyond the token,
   * so it can still be used to create a new account.
   * After being verified, it will no longer be available.
   */
  verifySecondaryEmail?: Maybe<VerifySecondaryEmail>;
  /**
   * Swap between primary and secondary emails.
   *
   * Require password confirmation.
   */
  swapEmails?: Maybe<SwapEmails>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  verifyToken?: Maybe<VerifyToken>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshToken>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  username: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};


export type MutationResendActivationEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationPasswordResetArgs = {
  token: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};


export type MutationPasswordChangeArgs = {
  oldPassword: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};


export type MutationArchiveAccountArgs = {
  password: Scalars['String'];
};


export type MutationDeleteAccountArgs = {
  password: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};


export type MutationSendSecondaryEmailActivationArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVerifySecondaryEmailArgs = {
  token: Scalars['String'];
};


export type MutationSwapEmailsArgs = {
  password: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  password: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationRevokeTokenArgs = {
  refreshToken: Scalars['String'];
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: 'SendPasswordResetEmail';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 */
export type PasswordReset = {
  __typename?: 'PasswordReset';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
  __typename?: 'ArchiveAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccount = {
  __typename?: 'DeleteAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Send activation to secondary email.
 *
 * User must be verified and confirm password.
 */
export type SendSecondaryEmailActivation = {
  __typename?: 'SendSecondaryEmailActivation';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Verify user secondary email.
 *
 * Receive the token that was sent by email.
 * User is already verified when using this mutation.
 *
 * If the token is valid, add the secondary email
 * to `user.status.secondary_email` field.
 *
 * Note that until the secondary email is verified,
 * it has not been saved anywhere beyond the token,
 * so it can still be used to create a new account.
 * After being verified, it will no longer be available.
 */
export type VerifySecondaryEmail = {
  __typename?: 'VerifySecondaryEmail';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Swap between primary and secondary emails.
 *
 * Require password confirmation.
 */
export type SwapEmails = {
  __typename?: 'SwapEmails';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  token?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  user?: Maybe<UserNode>;
  unarchiving?: Maybe<Scalars['Boolean']>;
  refreshToken?: Maybe<Scalars['String']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};


/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  token?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type ShopListQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopListQuery = (
  { __typename?: 'Query' }
  & { shopList?: Maybe<(
    { __typename?: 'ShopNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'ShopNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'ShopNode' }
        & Pick<ShopNode, 'id' | 'title' | 'image' | 'url' | 'commission' | 'body'>
      )> }
    )>> }
  )> }
);

export const ShopListDocument = gql`
    query ShopList {
  shopList {
    edges {
      node {
        id
        title
        image
        url
        commission
        body
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShopListGQL extends Apollo.Query<ShopListQuery, ShopListQueryVariables> {
    document = ShopListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

export const ShopList = gql`
    query ShopList {
  shopList {
    edges {
      node {
        id
        title
        image
        url
        commission
        body
      }
    }
  }
}
    `;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Node": [
      "ShopNode",
      "ProductNode",
      "CategoryNode",
      "RecieptNode",
      "AffiliateNode",
      "WalletNode",
      "TransactionNode",
      "UserNode"
    ]
  }
};
      export default result;
    