'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */


const def = `

type CartGoods {
    id: ID!
    name: String
    category: String
    attributes: [GoodsAttributeChosen]
    price: Float
    quantity: Int
}

type UserCart {
    user: User
    goodses: [CartGoods]
    createdAt: DateTime!
    updatedAt: DateTime!
}

input CartGoodsInput {
    id: ID!
    attributes: [GoodsAttributeChosen]
    quantity: Int
}

# A connection to a list of items.
type UserCartConnection {
    # Information to aid in pagination.
    pageInfo: PageInfo!

    # A list of edges.
    edges: [UserCartEdge]

    # Count of filtered result set without considering pagination arguments
    count: Int!
}

# An edge in a connection.
type UserCartEdge {
    # The item at the end of the edge.
    model: UserCart!

    # A cursor for use in pagination.
    cursor: String!
}

input UserCartFilter {
    AND: [UserCartFilter!]
    OR: [UserCartFilter!]
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
    user: UserFilter
    goodses_every: GoodsFilter
    goodses_some: GoodsFilter
    goodses_none: GoodsFilter
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

enum UserCartOrderBy {
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
}

input CreateUserCart {
    userId: ID
    goodsesIds: [ID!]
    goodses: [Goods!]
}

input CreateUserCartInput {
    userId: ID
    goodsesIds: [ID!]
    goodses: [Goods!]
    clientMutationId: String!
}

type CreateUserCartPayload {
    viewer: Viewer!
    userCart: UserCart
    edge: UserCartEdge
    user: User
    clientMutationId: String!
}

input UpdateUserCart {
    id: ID!
    userId: ID
    goodsesIds: [ID!]
    goodses: [Goods!]
}

input UpdateUserCartInput {
    id: ID!
    userId: ID
    goodsesIds: [ID!]
    goodses: [Goods!]
    clientMutationId: String!
}

type UpdateUserCartPayload {
    viewer: Viewer!
    userCart: UserCart
    edge: UserCartEdge
    user: User
    clientMutationId: String!
}

input UpdateOrCreateUserCartInput {
    update: UpdateUserCart!
    create: CreateUserCart!
    clientMutationId: String!
}

type UpdateOrCreateUserCartPayload {
    viewer: Viewer!
    userCart: UserCart
    edge: UserCartEdge
    user: User
    clientMutationId: String!
}

input RevokeUserCartInput {
    id: ID!
    clientMutationId: String!
}

type RevokeUserCartPayload {
    viewer: Viewer!
    userCart: UserCart
    edge: UserCartEdge
    user: User
    revokedId: ID
    clientMutationId: String!
}
`;

const viewer = `
    cart: UserCart
    allUserCarts(filter: UserCartFilter, orderBy: UserCartOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): UserCartConnection!
`;

const mutation = `
    addGoodsToCart: (input CartGoodsInput): UserCart
`;

export default {def, viewer, mutation};