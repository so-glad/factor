'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */
 
 
const def = `

type Currency implements Model {
    id: ID!
    code: String!
    name: String!
    symbol: String!
    comment: String!
    createdAt: DateTime!
    updatedAt: DateTime!
}

# An edge in a connection.
type CurrencyEdge {
    # The item at the end of the edge.
    model: Currency!
    
    # A cursor for use in pagination.
    cursor: String!
}

# A connection to a list of items.
type CurrencyConnection {
    # Information to aid in pagination.
    pageInfo: PageInfo!

    # A list of edges.
    edges: [CurrencyEdge]

     # Count of filtered result set without considering pagination arguments
    count: Int!
}

input CurrencyFilter {
    AND: [CurrencyFilter!]
    OR: [CurrencyFilter!]
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
    code: String
    code_not: String
    code_in: [String!]
    code_not_in: [String!]
    code_lt: String
    code_lte: String
    code_gt: String
    code_gte: String
    code_contains: String
    code_not_contains: String
    code_starts_with: String
    code_not_starts_with: String
    code_ends_with: String
    code_not_ends_with: String
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
    symbol: String
    symbol_not: String
    symbol_in: [String!]
    symbol_not_in: [String!]
    symbol_lt: String
    symbol_lte: String
    symbol_gt: String
    symbol_gte: String
    symbol_contains: String
    symbol_not_contains: String
    symbol_starts_with: String
    symbol_not_starts_with: String
    symbol_ends_with: String
    symbol_not_ends_with: String
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

enum CurrencyOrderBy {
    id_ASC
    id_DESC
    code_ASC
    code_DESC
    name_ASC
    name_DESC
    symbol_ASC
    symbol_DESC
    comment_ASC
    comment_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
}

input CreateCurrency {
    code: String!
    name: String!
    symbol: String!
    comment: String!
}

input CreateCurrencyInput {
    code: String!
    name: String!
    symbol: String!
    comment: String!
    clientMutationId: String!
}

type CreateCurrencyPayload {
    viewer: Viewer!
    currency: Currency
    edge: CurrencyEdge
    clientMutationId: String!
}

input UpdateCurrency {
    id: ID!
    code: String
    name: String
    symbol: String
    comment: String
}

input UpdateCurrencyInput {
    id: ID!
    code: String
    name: String
    symbol: String
    comment: String
    clientMutationId: String!
}

type UpdateCurrencyPayload {
    viewer: Viewer!
    currency: Currency
    edge: CurrencyEdge
    clientMutationId: String!
}

input UpdateOrCreateCurrencyInput {
    update: UpdateCurrency!
    create: CreateCurrency!
    clientMutationId: String!
}

type UpdateOrCreateCurrencyPayload {
    viewer: Viewer!
    currency: Currency
    edge: CurrencyEdge
    clientMutationId: String!
}

input RevokeCurrencyInput {
    id: ID!
    clientMutationId: String!
}

type RevokeCurrencyPayload {
    viewer: Viewer!
    currency: Currency
    edge: CurrencyEdge
    revokedId: ID
    clientMutationId: String!
}
`;

const viewer = `
    Currency(id: ID, code: String, name: String, symbol: String): Currency
    allCurrencies(filter: CurrencyFilter, orderBy: CurrencyOrderBy, before: String, after: String, skip: Int, first: Int, last: Int): CurrencyConnection! 
`;

const mutation = `
    createCurrency(input: CreateCurrencyInput!): CreateCurrencyPayload
    updateCurrency(input: UpdateCurrencyInput!): UpdateCurrencyPayload
    updateOrCreateCurrency(input: UpdateOrCreateCurrencyInput!): UpdateOrCreateCurrencyPayload
    revokeCurrency(input: RevokeCurrencyInput!): RevokeCurrencyPayload
`;

export default {def, viewer, mutation};