'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */
 
 
const def = `

type Goods implements Model {
    id: ID!
    serialNumber: String!
    name: String!
    imageUrl: String!
    price: Float!
    inSale: Boolean!
    summary: String!
    goodsAttributes(filter: GoodsAttributeFilter, orderBy: GoodsAttributeOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): GoodsAttributeConnection
    goodsCategory(filter: GoodsCategoryFilter): GoodsCategory
    createdAt: DateTime!
    updatedAt: DateTime!
}

# An edge in a connection.
type GoodsEdge {
    # The item at the end of the edge.
    model: Goods!

    # A cursor for use in pagination.
    cursor: String!
}

# A connection to a list of items.
type GoodsConnection {
    # Information to aid in pagination.
    pageInfo: PageInfo!

    # A list of edges.
    edges: [GoodsEdge]

    # Count of filtered result set without considering pagination arguments
    count: Int!
}

input GoodsFilter {
    AND: [GoodsFilter!]
    OR: [GoodsFilter!]
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    serialNumber: String
    serialNumber_not: String
    serialNumber_in: [String!]
    serialNumber_not_in: [String!]
    serialNumber_lt: String
    serialNumber_lte: String
    serialNumber_gt: String
    serialNumber_gte: String
    serialNumber_contains: String
    serialNumber_not_contains: String
    serialNumber_starts_with: String
    serialNumber_not_starts_with: String
    serialNumber_ends_with: String
    serialNumber_not_ends_with: String
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    imageUrl: String
    imageUrl_not: String
    imageUrl_in: [String!]
    imageUrl_not_in: [String!]
    imageUrl_lt: String
    imageUrl_lte: String
    imageUrl_gt: String
    imageUrl_gte: String
    imageUrl_contains: String
    imageUrl_not_contains: String
    imageUrl_starts_with: String
    imageUrl_not_starts_with: String
    imageUrl_ends_with: String
    imageUrl_not_ends_with: String
    price: Float
    price_not: Float
    price_in: [Float!]
    price_not_in: [Float!]
    price_lt: Float
    price_lte: Float
    price_gt: Float
    price_gte: Float
    inSale: Boolean
    inSale_not: Boolean
    summary: String
    summary_not: String
    summary_in: [String!]
    summary_not_in: [String!]
    summary_lt: String
    summary_lte: String
    summary_gt: String
    summary_gte: String
    summary_contains: String
    summary_not_contains: String
    summary_starts_with: String
    summary_not_starts_with: String
    summary_ends_with: String
    summary_not_ends_with: String
    goodsAttributes_every: GoodsAttributeFilter
    goodsAttributes_some: GoodsAttributeFilter
    goodsAttributes_none: GoodsAttributeFilter
    goodsCategory: GoodsCategoryFilter
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
}

enum GoodsOrderBy {
    id_ASC
    id_DESC
    serialNumber_ASC
    serialNumber_DESC
    name_ASC
    name_DESC
    imageUrl_ASC
    imageUrl_DESC
    price_ASC
    price_DESC
    inSale_ASC
    inSale_DESC
    summary_ASC
    summary_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
}

input CreateGoods {
    serialNumber: String!
    name: String!
    imageUrl: String!
    price: Float!
    inSale: Boolean
    summary: String!
    goodsCategoryId: ID
    goodsAttributesIds: [ID!]
}

input CreateGoodsInput {
    serialNumber: String!
    name: String!
    imageUrl: String!
    price: Float!
    inSale: Boolean
    summary: String!
    goodsCategoryId: ID
    goodsAttributesIds: [ID!]
    clientMutationId: String!
}

type CreateGoodsPayload {
    viewer: Viewer!
    goods: Goods
    edge: GoodsEdge
    goodsCategory: GoodsCategory
    clientMutationId: String!
}

input UpdateGoods {
    id: ID!
    serialNumber: String!
    name: String!
    imageUrl: String!
    price: Float!
    inSale: Boolean
    summary: String!
    goodsCategoryId: ID
    goodsAttributesIds: [ID!]
}

input UpdateGoodsInput {
    id: ID!
    serialNumber: String!
    name: String!
    imageUrl: String!
    price: Float!
    inSale: Boolean
    summary: String!
    goodsCategoryId: ID
    goodsAttributesIds: [ID!]
    clientMutationId: String!
}

type UpdateGoodsPayload {
    viewer: Viewer!
    goods: Goods
    edge: GoodsEdge
    goodsCategory: GoodsCategory
    clientMutationId: String!
}

input UpdateOrCreateGoodsInput {
    update: UpdateGoods!
    create: CreateGoods!
    clientMutationId: String!
}

type UpdateOrCreateGoodsPayload {
    viewer: Viewer!
    goods: Goods
    edge: GoodsEdge
    goodsCategory: GoodsCategory
    clientMutationId: String!
}

input RevokeGoodsInput {
  id: ID!
  clientMutationId: String!
}

type RevokeGoodsPayload {
    viewer: Viewer!
    goods: Goods
    edge: GoodsEdge
    goodsCategory: GoodsCategory
    revokedId: ID
    clientMutationId: String!
}
`;


const viewer = `
    Goods(id: ID, serialNumber: String): Goods
    allGoodses(filter: GoodsFilter, orderBy: GoodsOrderBy, before: String, after: String, skip: Int, first: Int, last: Int): GoodsConnection!
`;

const mutation = `
    createGoods(input: CreateGoodsInput!): CreateGoodsPayload
    updateGoods(input: UpdateGoodsInput!): UpdateGoodsPayload
    updateOrCreateGoods(input: UpdateOrCreateGoodsInput!): UpdateOrCreateGoodsPayload
    revokeGoods(input: RevokeGoodsInput!): RevokeGoodsPayload  
`;

export default {def, viewer, mutation};
