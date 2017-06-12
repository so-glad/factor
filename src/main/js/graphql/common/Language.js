'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */
 
 
const def = `

type Language implements Model {
    id: ID!
    name: String!
    code: String!
    nativeName: String!
    sort: Int!
    comment: String!
    createdAt: DateTime!
    updatedAt: DateTime!
}

# An edge in a connection.
type LanguageEdge {
    # The item at the end of the edge.
    model: Language!

    # A cursor for use in pagination.
    cursor: String!
}

# A connection to a list of items.
type LanguageConnection {
    # Information to aid in pagination.
    pageInfo: PageInfo!

    # A list of edges.
    edges: [LanguageEdge]

    # Count of filtered result set without considering pagination arguments
    count: Int!
}

input LanguageFilter {
    AND: [LanguageFilter!]
    OR: [LanguageFilter!]
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
    nativeName: String
    nativeName_not: String
    nativeName_in: [String!]
    nativeName_not_in: [String!]
    nativeName_lt: String
    nativeName_lte: String
    nativeName_gt: String
    nativeName_gte: String
    nativeName_contains: String
    nativeName_not_contains: String
    nativeName_starts_with: String
    nativeName_not_starts_with: String
    nativeName_ends_with: String
    nativeName_not_ends_with: String
    sort: Int
    sort_not: Int
    sort_in: [Int!]
    sort_not_in: [Int!]
    sort_lt: Int
    sort_lte: Int
    sort_gt: Int
    sort_gte: Int
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

enum LanguageOrderBy {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    code_ASC
    code_DESC
    nativeName_ASC
    nativeName_DESC
    sort_ASC
    sort_DESC
    comment_ASC
    comment_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
}

input CreateLanguage {
    name: String!
    code: String
    nativeName: String!
    sort: Int
    comment: String!
}

input CreateLanguageInput {
    name: String!
    code: String
    nativeName: String!
    sort: Int
    comment: String!
    clientMutationId: String!
}

type CreateLanguagePayload {
    viewer: Viewer!
    language: Language
    edge: LanguageEdge
    clientMutationId: String!
}

input UpdateLanguage {
    id: ID!
    name: String!
    code: String
    nativeName: String!
    sort: Int
    comment: String!
}

input UpdateLanguageInput {
    id: ID!
    name: String!
    code: String
    nativeName: String!
    sort: Int
    comment: String!
    clientMutationId: String!
}

type UpdateLanguagePayload {
    viewer: Viewer!
    language: Language
    edge: LanguageEdge
    clientMutationId: String!
}

input UpdateOrCreateLanguageInput {
    update: UpdateLanguage!
    create: CreateLanguage!
    clientMutationId: String!
}

type UpdateOrCreateLanguagePayload {
    viewer: Viewer!
    language: Language
    edge: LanguageEdge
    clientMutationId: String!
}

input RevokeLanguageInput {
    id: ID!
    clientMutationId: String!
}

type RevokeLanguagePayload {
    viewer: Viewer!
    language: Language
    edge: LanguageEdge
    revokedId: ID
    clientMutationId: String!
}
`;

const viewer = `
    Language(code: String, id: ID): Language
    allLanguages(filter: LanguageFilter, orderBy: LanguageOrderBy, before: String, after: String, skip: Int, first: Int, last: Int): LanguageConnection!
`;

const mutation = `
    createLanguage(input: CreateLanguageInput!): CreateLanguagePayload
    updateLanguage(input: UpdateLanguageInput!): UpdateLanguagePayload
    updateOrCreateLanguage(input: UpdateOrCreateLanguageInput!): UpdateOrCreateLanguagePayload
    revokeLanguage(input: RevokeLanguageInput!): RevokeLanguagePayload
`;

export default {def, viewer, mutation};