'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */
 
 
const def = `

type UserAddress implements Model {
    id: ID!
    alias: String!
    region(filter: RegionFilter): Region
    content: String!
    zipCode: String!
    contact: String!
    telNumber: String!
    sort: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
}

# A connection to a list of items.
type UserAddressConnection {
    # Information to aid in pagination.
    pageInfo: PageInfo!

    # A list of edges.
    edges: [UserAddressEdge]

    # Count of filtered result set without considering pagination arguments
    count: Int!
}

# An edge in a connection.
type UserAddressEdge {
    # The item at the end of the edge.
    model: UserAddress!

    # A cursor for use in pagination.
    cursor: String!
}

input UserAddressFilter {
    AND: [UserAddressFilter!]
    OR: [UserAddressFilter!]
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
    alias: String
    alias_not: String
    alias_in: [String!]
    alias_not_in: [String!]
    alias_lt: String
    alias_lte: String
    alias_gt: String
    alias_gte: String
    alias_contains: String
    alias_not_contains: String
    alias_starts_with: String
    alias_not_starts_with: String
    alias_ends_with: String
    alias_not_ends_with: String
    content: String
    content_not: String
    content_in: [String!]
    content_not_in: [String!]
    content_lt: String
    content_lte: String
    content_gt: String
    content_gte: String
    content_contains: String
    content_not_contains: String
    content_starts_with: String
    content_not_starts_with: String
    content_ends_with: String
    content_not_ends_with: String
    region: RegionFilter
    contact: String
    contact_not: String
    contact_in: [String!]
    contact_not_in: [String!]
    contact_lt: String
    contact_lte: String
    contact_gt: String
    contact_gte: String
    contact_contains: String
    contact_not_contains: String
    contact_starts_with: String
    contact_not_starts_with: String
    contact_ends_with: String
    contact_not_ends_with: String
    telNumber: String
    telNumber_not: String
    telNumber_in: [String!]
    telNumber_not_in: [String!]
    telNumber_lt: String
    telNumber_lte: String
    telNumber_gt: String
    telNumber_gte: String
    telNumber_contains: String
    telNumber_not_contains: String
    telNumber_starts_with: String
    telNumber_not_starts_with: String
    telNumber_ends_with: String
    telNumber_not_ends_with: String
    zipCode: String
    zipCode_not: String
    zipCode_in: [String!]
    zipCode_not_in: [String!]
    zipCode_lt: String
    zipCode_lte: String
    zipCode_gt: String
    zipCode_gte: String
    zipCode_contains: String
    zipCode_not_contains: String
    zipCode_starts_with: String
    zipCode_not_starts_with: String
    zipCode_ends_with: String
    zipCode_not_ends_with: String
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

enum UserAddressOrderBy {
    id_ASC
    id_DESC
    alias_ASC
    alias_DESC
    content_ASC
    content_DESC
    zipCode_ASC
    zipCode_DESC
    contact_ASC
    contact_DESC
    telNumber_ASC
    telNumber_DESC
    sort_ASC
    sort_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
}

input CreateUserAddress {
    alias: String!
    content: String!
    zipCode: String!
    contact: String!
    telNumber: String!
    sort: Int
    regionId: ID
    region: Region
}

input CreateUserAddressInput {
    alias: String!
    content: String!
    zipCode: String!
    contact: String!
    telNumber: String!
    sort: Int
    regionId: ID
    region: Region
    clientMutationId: String!
}

type CreateUserAddressPayload {
    viewer: Viewer!
    userAddress: UserAddress
    edge: UserAddressEdge
    region: Region
    clientMutationId: String!
}

input UpdateUserAddress {
    id: ID!
    alias: String!
    content: String!
    zipCode: String!
    contact: String!
    telNumber: String!
    sort: Int
    regionId: ID
    region: Region
}

input UpdateUserAddressInput {
  id: ID!
    alias: String!
    content: String!
    zipCode: String!
    contact: String!
    telNumber: String!
    sort: Int
    regionId: ID
    region: Region
    clientMutationId: String!
}

type UpdateUserAddressPayload {
    viewer: Viewer!
    clientMutationId: String!
    userAddress: UserAddress
    edge: UserAddressEdge
    region: Region
}

input UpdateOrCreateUserAddressInput {
    update: UpdateUserAddress!
    create: CreateUserAddress!
    clientMutationId: String!
}

type UpdateOrCreateUserAddressPayload {
    viewer: Viewer!
    userAddress: UserAddress
    edge: UserAddressEdge
    region: Region
    clientMutationId: String!
}

input RevokeUserAddressInput {
    id: ID!
    clientMutationId: String!
}

type RevokeUserAddressPayload {
    viewer: Viewer!
    userAddress: UserAddress
    edge: UserAddressEdge
    region: Region
    revokedId: ID
    clientMutationId: String!
}
`;

const viewer = `
    UserAddress(id: ID): UserAddress
    allUserAddresses(filter: UserAddressFilter, orderBy: UserAddressOrderBy, before: String, after: String, skip: Int, first: Int, last: Int): UserAddressConnection!
`;

const mutation = `
    createUserAddress(input: CreateUserAddressInput!): CreateUserAddressPayload
    updateUserAddress(input: UpdateUserAddressInput!): UpdateUserAddressPayload
    updateOrCreateUserAddress(input: UpdateOrCreateUserAddressInput!): UpdateOrCreateUserAddressPayload
    revokeUserAddress(input: RevokeUserAddressInput!): RevokeUserAddressPayloads
`;

export default {def, viewer, mutation};

