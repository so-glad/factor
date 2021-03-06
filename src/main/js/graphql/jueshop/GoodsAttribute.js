'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */
 
 
const def = `

type GoodsAttributeChosen {
    key: String!
    value: String!
}

type GoodsAttribute implements Model {
    id: ID!
    name: String!
    options: [String!]!
    comment: String!
    goods(filter: GoodsFilter): Goods
    createdAt: DateTime!
    updatedAt: DateTime!
}

# An edge in a connection.
type GoodsAttributeEdge {
    # The item at the end of the edge.
    model: GoodsAttribute!

    # A cursor for use in pagination.
    cursor: String!
}

# A connection to a list of items.
type GoodsAttributeConnection {
    # Information to aid in pagination.
    pageInfo: PageInfo!

    # A list of edges.
    edges: [GoodsAttributeEdge]

     # Count of filtered result set without considering pagination arguments
    count: Int!
}

input GoodsAttributeFilter {
  AND: [GoodsAttributeFilter!]
  OR: [GoodsAttributeFilter!]
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
  goods: GoodsFilter
  comment: String
  comment_not: String
  comment_in: [String!]
  comment_not_in: [String!]
  comment_lt: String
  comment_lte: String
  comment_gt: String
  comment_gte: String
  comment_contains: String
  comment_not_contains: String
  comment_starts_with: String
  comment_not_starts_with: String
  comment_ends_with: String
  comment_not_ends_with: String
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

enum GoodsAttributeOrderBy {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  comment_ASC
  comment_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input CreateGoodsAttribute {
    name: String!
    options: [String!]!
    goodsId: ID
    comment: String!
}

input CreateGoodsAttributeInput {
    name: String!
    options: [String!]!
    goodsId: ID
    comment: String!
}

type CreateGoodsAttributePayload {
    viewer: Viewer!
    goodsAttribute: GoodsAttribute
    edge: GoodsAttributeEdge
    goods: Goods
    clientMutationId: String!
}

input UpdateGoodsAttribute {
    id: ID!
    name: String!
    options: [String!]!
    goodsId: ID
    comment: String!
}

input UpdateGoodsAttributeInput {
    id: ID!
    name: String!
    options: [String!]!
    goodsId: ID
    comment: String!
    clientMutationId: String!
}

type UpdateGoodsAttributePayload {
    viewer: Viewer!
    goodsAttribute: GoodsAttribute
    edge: GoodsAttributeEdge
    goods: Goods
    clientMutationId: String!
}

input UpdateOrCreateGoodsAttributeInput {
    update: UpdateGoodsAttribute!
    create: CreateGoodsAttribute!
    clientMutationId: String!
}

type UpdateOrCreateGoodsAttributePayload {
    viewer: Viewer!
    goodsAttribute: GoodsAttribute
    edge: GoodsAttributeEdge
    goods: Goods
    clientMutationId: String!
}

input RevokeGoodsAttributeInput {
    id: ID!
    clientMutationId: String!
}

type RevokeGoodsAttributePayload {
    viewer: Viewer!
    goodsAttribute: GoodsAttribute
    edge: GoodsAttributeEdge
    goods: Goods
    revokedId: ID
    clientMutationId: String!
}
`;

const viewer = `
    GoodsAttribute(id: ID): GoodsAttribute
    allGoodsAttributes(filter: GoodsAttributeFilter, orderBy: GoodsAttributeOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): GoodsAttributeConnection!
`;

const mutation = `
    createGoodsAttribute(input: CreateGoodsAttributeInput!): CreateGoodsAttributePayload
    updateGoodsAttribute(input: UpdateGoodsAttributeInput!): UpdateGoodsAttributePayload
    updateOrCreateGoodsAttribute(input: UpdateOrCreateGoodsAttributeInput!): UpdateOrCreateGoodsAttributePayload
    revokeGoodsAttribute(input: RevokeGoodsAttributeInput!): RevokeGoodsAttributePayload
`;

export default {def, viewer, mutation};