'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */
 
 
const def = `

type GoodsCategory implements Model {  
    id: ID!
    name: String!
    level: Int!
    sort: Int!
    comment: String!
    parent(filter: GoodsCategoryFilter): GoodsCategory
    children(filter: GoodsCategoryFilter, orderBy: GoodsCategoryOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): GoodsCategoryConnection
    goodses(filter: GoodsFilter, orderBy: GoodsOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): GoodsConnection
    createdAt: DateTime!
    updatedAt: DateTime!
}

# An edge in a connection.
type GoodsCategoryEdge {
  # The item at the end of the edge.
  model: GoodsCategory!

  # A cursor for use in pagination.
  cursor: String!
}

# A connection to a list of items.
type GoodsCategoryConnection {
  # Information to aid in pagination.
  pageInfo: PageInfo!

  # A list of edges.
  edges: [GoodsCategoryEdge]

  # Count of filtered result set without considering pagination arguments
  count: Int!
}

input GoodsCategoryFilter {
  AND: [GoodsCategoryFilter!]
  OR: [GoodsCategoryFilter!]
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
  level: Int
  level_not: Int
  level_in: [Int!]
  level_not_in: [Int!]
  level_lt: Int
  level_lte: Int
  level_gt: Int
  level_gte: Int
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
  sort: Int
  sort_not: Int
  sort_in: [Int!]
  sort_not_in: [Int!]
  sort_lt: Int
  sort_lte: Int
  sort_gt: Int
  sort_gte: Int
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  children_every: GoodsCategoryFilter
  children_some: GoodsCategoryFilter
  children_none: GoodsCategoryFilter
  goodses_every: GoodsFilter
  goodses_some: GoodsFilter
  goodses_none: GoodsFilter
  parent: GoodsCategoryFilter
}

enum GoodsCategoryOrderBy {
  comment_ASC
  comment_DESC
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  level_ASC
  level_DESC
  name_ASC
  name_DESC
  sort_ASC
  sort_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input CreateGoodsCategory {
  comment: String!
  level: Int
  name: String!
  sort: Int
  parentId: ID
  childrenIds: [ID!]
  goodsesIds: [ID!]
}

input CreateGoodsCategoryInput {
  comment: String!
  level: Int
  name: String!
  sort: Int
  parentId: ID
  childrenIds: [ID!]
  goodsesIds: [ID!]
  clientMutationId: String!
}

type CreateGoodsCategoryPayload {
  viewer: Viewer!
  clientMutationId: String!
  goodsCategory: GoodsCategory
  edge: GoodsCategoryEdge
  parent: GoodsCategory
}

input UpdateGoodsCategory {
  comment: String
  id: ID!
  level: Int
  name: String
  sort: Int
  parentId: ID
  childrenIds: [ID!]
  goodsesIds: [ID!]
}

input UpdateGoodsCategoryInput {
  comment: String
  id: ID!
  level: Int
  name: String
  sort: Int
  parentId: ID
  childrenIds: [ID!]
  goodsesIds: [ID!]
  clientMutationId: String!
}

type UpdateGoodsCategoryPayload {
  viewer: Viewer!
  clientMutationId: String!
  goodsCategory: GoodsCategory
  edge: GoodsCategoryEdge
  parent: GoodsCategory
}

input DeleteGoodsCategoryInput {
  id: ID!
  clientMutationId: String!
}

type DeleteGoodsCategoryPayload {
  viewer: Viewer!
  clientMutationId: String!
  goodsCategory: GoodsCategory
  edge: GoodsCategoryEdge
  parent: GoodsCategory
  deletedId: ID
}


input UpdateOrCreateGoodsCategoryInput {
  update: UpdateGoodsCategory!
  create: CreateGoodsCategory!
  clientMutationId: String!
}

type UpdateOrCreateGoodsCategoryPayload {
  viewer: Viewer!
  clientMutationId: String!
  goodsCategory: GoodsCategory
  edge: GoodsCategoryEdge
  parent: GoodsCategory
}
`;

const viewer = `
    GoodsCategory(id: ID): GoodsCategory
    allGoodsCategories(filter: GoodsCategoryFilter, orderBy: GoodsCategoryOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): GoodsCategoryConnection!
`;

const mutation = `
    createGoodsCategory(input: CreateGoodsCategoryInput!): CreateGoodsCategoryPayload
    updateGoodsCategory(input: UpdateGoodsCategoryInput!): UpdateGoodsCategoryPayload
    updateOrCreateGoodsCategory(input: UpdateOrCreateGoodsCategoryInput!): UpdateOrCreateGoodsCategoryPayload
    deleteGoodsCategory(input: DeleteGoodsCategoryInput!): DeleteGoodsCategoryPayload
`;

export default {def, viewer, mutation};