'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */


const def = `

type UserLikeGoods implements Node {
    id: ID!
    user: User
    goods: Goods
    sort: Int
    createdAt: DateTime!
    updatedAt: DateTime!
}

# A connection to a list of items.
type UserLikeGoodsConnection {
# Information to aid in pagination.
    pageInfo: PageInfo!

    # A list of edges.
    edges: [UserLikeGoodsEdge]

    # Count of filtered result set without considering pagination arguments
    count: Int!
}

# An edge in a connection.
type UserLikeGoodsEdge {
# The item at the end of the edge.
    model: UserLikeGoods!

    # A cursor for use in pagination.
    cursor: String!
}

input UserLikeGoodsFilter {
    AND: [UserLikeGoodsFilter!]
    OR: [UserLikeGoodsFilter!]
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
    sort: Int
    sort_not: Int
    sort_in: [Int!]
    sort_not_in: [Int!]
    sort_lt: Int
    sort_lte: Int
    sort_gt: Int
    sort_gte: Int
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

enum UserLikeGoodsOrderBy {
    id_ASC
    id_DESC
    sort_ASC
    sort_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
}
`;

const viewer = ``;

const mutation = `
    createUserLikeGoods(input: CreateUserLikeGoodsInput!): CreateUserLikeGoodsPayload
    updateUserLikeGoods(input: UpdateUserLikeGoodsInput!): UpdateUserLikeGoodsPayload
    updateOrCreateUserLikeGoods(input: UpdateOrCreateUserLikeGoodsInput!): UpdateOrCreateUserLikeGoodsPayload
    revokeUserLikeGoods(input: RevokeUserLikeGoodsInput!): RevokeUserLikeGoodsPayload
`;

export default {def, viewer, mutation};