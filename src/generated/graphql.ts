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
  image?: Maybe<ImageNode>;
  imageList?: Maybe<ImageNodeConnection>;
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
  /** The ID of the object */
  user?: Maybe<UserNode>;
  userList?: Maybe<UserNodeConnection>;
  getProduct?: Maybe<ShopNode>;
};


export type QueryShopArgs = {
  id: Scalars['ID'];
};


export type QueryShopListArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


export type QueryImageArgs = {
  id: Scalars['ID'];
};


export type QueryImageListArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  wooId?: Maybe<Scalars['Int']>;
};


export type QueryAffiliateArgs = {
  id: Scalars['ID'];
};


export type QueryAffiliateListArgs = {
  offset?: Maybe<Scalars['Int']>;
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
  offset?: Maybe<Scalars['Int']>;
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
  offset?: Maybe<Scalars['Int']>;
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
  offset?: Maybe<Scalars['Int']>;
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
  offset?: Maybe<Scalars['Int']>;
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
  offset?: Maybe<Scalars['Int']>;
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


export type QueryUserListArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};


export type QueryGetProductArgs = {
  id?: Maybe<Scalars['String']>;
};

export type ShopNode = Node & {
  __typename?: 'ShopNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  slug: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: BaseModelStatus;
  address: Scalars['String'];
  email: Scalars['String'];
  shopManager: UserNode;
  commission: Scalars['Int'];
  consumerKey?: Maybe<Scalars['String']>;
  consumerSecret?: Maybe<Scalars['String']>;
  lastSyncTime?: Maybe<Scalars['DateTime']>;
  images: ImageNodeConnection;
  productSet: ProductNodeConnection;
};


export type ShopNodeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  wooId?: Maybe<Scalars['Int']>;
};


export type ShopNodeProductSetArgs = {
  offset?: Maybe<Scalars['Int']>;
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

export type UserNode = Node & {
  __typename?: 'UserNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  password: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
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
  affiliateSet: AffiliateNodeConnection;
};


export type UserNodeShopSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


export type UserNodeAffiliateSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type ShopNodeConnection = {
  __typename?: 'ShopNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ShopNodeEdge>>;
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

export type AffiliateNode = Node & {
  __typename?: 'AffiliateNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  slug: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: BaseModelStatus;
  user?: Maybe<UserNode>;
  walletSet: WalletNodeConnection;
  receiptSet: RecieptNodeConnection;
  transactionSet: TransactionNodeConnection;
};


export type AffiliateNodeWalletSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};


export type AffiliateNodeReceiptSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};


export type AffiliateNodeTransactionSetArgs = {
  offset?: Maybe<Scalars['Int']>;
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

export type ProductNode = Node & {
  __typename?: 'ProductNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  slug: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: BaseModelStatus;
  relatedShop: ShopNode;
  stock?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  categories: CategoryNodeConnection;
  wooId?: Maybe<Scalars['Int']>;
  images: ImageNodeConnection;
  receiptSet: RecieptNodeConnection;
};


export type ProductNodeCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type ProductNodeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  wooId?: Maybe<Scalars['Int']>;
};


export type ProductNodeReceiptSetArgs = {
  offset?: Maybe<Scalars['Int']>;
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
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type ProductNodeConnection = {
  __typename?: 'ProductNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductNodeEdge>>;
};

/** A Relay edge containing a `ProductNode` and its cursor. */
export type ProductNodeEdge = {
  __typename?: 'ProductNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ProductNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ImageNodeConnection = {
  __typename?: 'ImageNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ImageNodeEdge>>;
};

/** A Relay edge containing a `ImageNode` and its cursor. */
export type ImageNodeEdge = {
  __typename?: 'ImageNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ImageNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ImageNode = Node & {
  __typename?: 'ImageNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  image: Scalars['String'];
  wooId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  originalSrc?: Maybe<Scalars['String']>;
  shopSet: ShopNodeConnection;
  productSet: ProductNodeConnection;
};


export type ImageNodeShopSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


export type ImageNodeProductSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
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
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
};


export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationRefreshTokenArgs = {
  refreshToken?: Maybe<Scalars['String']>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};


export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'token' | 'payload'>
  )> }
);

export type ImageQueryVariables = Exact<{ [key: string]: never; }>;


export type ImageQuery = (
  { __typename?: 'Query' }
  & { imageList?: Maybe<(
    { __typename?: 'ImageNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'ImageNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'ImageNode' }
        & Pick<ImageNode, 'image' | 'alt'>
      )> }
    )>> }
  )> }
);

export type PListQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PListQuery = (
  { __typename?: 'Query' }
  & { shop?: Maybe<(
    { __typename?: 'ShopNode' }
    & Pick<ShopNode, 'title'>
    & { images: (
      { __typename?: 'ImageNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'ImageNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'ImageNode' }
          & Pick<ImageNode, 'image' | 'alt'>
        )> }
      )>> }
    ), productSet: (
      { __typename?: 'ProductNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'ProductNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'ProductNode' }
          & Pick<ProductNode, 'title' | 'id' | 'url' | 'status' | 'price'>
          & { images: (
            { __typename?: 'ImageNodeConnection' }
            & { edges: Array<Maybe<(
              { __typename?: 'ImageNodeEdge' }
              & { node?: Maybe<(
                { __typename?: 'ImageNode' }
                & Pick<ImageNode, 'image' | 'alt'>
              )> }
            )>> }
          ) }
        )> }
      )>> }
    ) }
  )> }
);

export type Shop_FilterQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type Shop_FilterQuery = (
  { __typename?: 'Query' }
  & { shopList?: Maybe<(
    { __typename?: 'ShopNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'ShopNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'ShopNode' }
        & Pick<ShopNode, 'id' | 'title' | 'url' | 'commission' | 'body'>
        & { images: (
          { __typename?: 'ImageNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'ImageNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'ImageNode' }
              & Pick<ImageNode, 'alt' | 'name' | 'image'>
            )> }
          )>> }
        ) }
      )> }
    )>> }
  )> }
);

export type ShopListQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopListQuery = (
  { __typename?: 'Query' }
  & { shopList?: Maybe<(
    { __typename?: 'ShopNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'ShopNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'ShopNode' }
        & Pick<ShopNode, 'id' | 'title' | 'url' | 'commission' | 'body'>
        & { images: (
          { __typename?: 'ImageNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'ImageNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'ImageNode' }
              & Pick<ImageNode, 'alt' | 'name' | 'image'>
            )> }
          )>> }
        ) }
      )> }
    )>> }
  )> }
);

export type WalletQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WalletQuery = (
  { __typename?: 'Query' }
  & { affiliate?: Maybe<(
    { __typename?: 'AffiliateNode' }
    & { walletSet: (
      { __typename?: 'WalletNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'WalletNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'WalletNode' }
          & Pick<WalletNode, 'amount'>
        )> }
      )>> }
    ), transactionSet: (
      { __typename?: 'TransactionNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TransactionNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'TransactionNode' }
          & Pick<TransactionNode, 'amount' | 'createdAt' | 'types'>
        )> }
      )>> }
    ), receiptSet: (
      { __typename?: 'RecieptNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'RecieptNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'RecieptNode' }
          & Pick<RecieptNode, 'totalAmount' | 'affiliateAmount'>
        )> }
      )>> }
    ) }
  )> }
);

export type User_IdQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type User_IdQuery = (
  { __typename?: 'Query' }
  & { userList?: Maybe<(
    { __typename?: 'UserNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UserNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'UserNode' }
        & Pick<UserNode, 'username' | 'id'>
        & { affiliateSet: (
          { __typename?: 'AffiliateNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'AffiliateNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'AffiliateNode' }
              & Pick<AffiliateNode, 'id' | 'title'>
            )> }
          )>> }
        ) }
      )> }
    )>> }
  )> }
);

export type VerifyMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyMutation = (
  { __typename?: 'Mutation' }
  & { verifyToken?: Maybe<(
    { __typename?: 'Verify' }
    & Pick<Verify, 'payload'>
  )> }
);

export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    payload
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ImageDocument = gql`
    query image {
  imageList {
    edges {
      node {
        image
        alt
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ImageGQL extends Apollo.Query<ImageQuery, ImageQueryVariables> {
    document = ImageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PListDocument = gql`
    query pList($id: ID!) {
  shop(id: $id) {
    title
    images {
      edges {
        node {
          image
          alt
        }
      }
    }
    productSet {
      edges {
        node {
          title
          id
          url
          status
          price
          images {
            edges {
              node {
                image
                alt
              }
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PListGQL extends Apollo.Query<PListQuery, PListQueryVariables> {
    document = PListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Shop_FilterDocument = gql`
    query shop_filter($title: String!) {
  shopList(title: $title) {
    edges {
      node {
        id
        title
        url
        commission
        body
        images {
          edges {
            node {
              alt
              name
              image
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Shop_FilterGQL extends Apollo.Query<Shop_FilterQuery, Shop_FilterQueryVariables> {
    document = Shop_FilterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShopListDocument = gql`
    query ShopList {
  shopList {
    edges {
      node {
        id
        title
        url
        commission
        body
        images {
          edges {
            node {
              alt
              name
              image
            }
          }
        }
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
export const WalletDocument = gql`
    query wallet($id: ID!) {
  affiliate(id: $id) {
    walletSet {
      edges {
        node {
          amount
        }
      }
    }
    transactionSet {
      edges {
        node {
          amount
          createdAt
          types
        }
      }
    }
    receiptSet {
      edges {
        node {
          totalAmount
          affiliateAmount
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class WalletGQL extends Apollo.Query<WalletQuery, WalletQueryVariables> {
    document = WalletDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const User_IdDocument = gql`
    query user_id($username: String!) {
  userList(username: $username) {
    edges {
      node {
        username
        affiliateSet {
          edges {
            node {
              id
              title
            }
          }
        }
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class User_IdGQL extends Apollo.Query<User_IdQuery, User_IdQueryVariables> {
    document = User_IdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VerifyDocument = gql`
    mutation verify($token: String!) {
  verifyToken(token: $token) {
    payload
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyGQL extends Apollo.Mutation<VerifyMutation, VerifyMutationVariables> {
    document = VerifyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

export const Login = gql`
    mutation login($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    payload
  }
}
    `;
export const Image = gql`
    query image {
  imageList {
    edges {
      node {
        image
        alt
      }
    }
  }
}
    `;
export const PList = gql`
    query pList($id: ID!) {
  shop(id: $id) {
    title
    images {
      edges {
        node {
          image
          alt
        }
      }
    }
    productSet {
      edges {
        node {
          title
          id
          url
          status
          price
          images {
            edges {
              node {
                image
                alt
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const Shop_Filter = gql`
    query shop_filter($title: String!) {
  shopList(title: $title) {
    edges {
      node {
        id
        title
        url
        commission
        body
        images {
          edges {
            node {
              alt
              name
              image
            }
          }
        }
      }
    }
  }
}
    `;
export const ShopList = gql`
    query ShopList {
  shopList {
    edges {
      node {
        id
        title
        url
        commission
        body
        images {
          edges {
            node {
              alt
              name
              image
            }
          }
        }
      }
    }
  }
}
    `;
export const Wallet = gql`
    query wallet($id: ID!) {
  affiliate(id: $id) {
    walletSet {
      edges {
        node {
          amount
        }
      }
    }
    transactionSet {
      edges {
        node {
          amount
          createdAt
          types
        }
      }
    }
    receiptSet {
      edges {
        node {
          totalAmount
          affiliateAmount
        }
      }
    }
  }
}
    `;
export const User_Id = gql`
    query user_id($username: String!) {
  userList(username: $username) {
    edges {
      node {
        username
        affiliateSet {
          edges {
            node {
              id
              title
            }
          }
        }
        id
      }
    }
  }
}
    `;
export const Verify = gql`
    mutation verify($token: String!) {
  verifyToken(token: $token) {
    payload
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
      "UserNode",
      "AffiliateNode",
      "WalletNode",
      "RecieptNode",
      "ProductNode",
      "CategoryNode",
      "ImageNode",
      "TransactionNode"
    ]
  }
};
      export default result;
    