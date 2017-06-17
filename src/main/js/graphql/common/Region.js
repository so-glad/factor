'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */
 
 
const def = `

type Region implements Model {
    id: ID!
    name: String!
    code: String!
    sign: String!
    sort: Int!
    comment: String!
    parent(filter: RegionFilter): Region
    children(filter: RegionFilter, orderBy: RegionOrderBy, before: String, after: String, skip: Int, first: Int, last: Int): RegionConnection
    createdAt: DateTime!
    updatedAt: DateTime!
}

# An edge in a connection.
type RegionEdge {
    # The item at the end of the edge.
    model: Region!

    # A cursor for use in pagination.
    cursor: String!
}

# A connection to a list of items.
type RegionConnection {
    # Information to aid in pagination.
    pageInfo: PageInfo!

    # A list of edges.
    edges: [RegionEdge]

    # Count of filtered result set without considering pagination arguments
    count: Int!
}

input RegionFilter {
    AND: [RegionFilter!]
    OR: [RegionFilter!]
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
    sign: String
    sign_not: String
    sign_in: [String!]
    sign_not_in: [String!]
    sign_lt: String
    sign_lte: String
    sign_gt: String
    sign_gte: String
    sign_contains: String
    sign_not_contains: String
    sign_starts_with: String
    sign_not_starts_with: String
    sign_ends_with: String
    sign_not_ends_with: String
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
    parent: RegionFilter
    children_every: RegionFilter
    children_some: RegionFilter
    children_none: RegionFilter
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

enum RegionOrderBy {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    code_ASC
    code_DESC
    sign_ASC
    sign_DESC 
    sort_ASC
    sort_DESC
    comment_ASC
    comment_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
}

input CreateRegion {
    name: String!
    code: String!
    sign: String!
    sort: Int!
    comment: String!
    parentId: ID
    childrenIds: [ID!]
}

input CreateRegionInput {
    name: String!
    code: String!
    sign: String!
    sort: Int!
    comment: String!
    parentId: ID
    childrenIds: [ID!]
    clientMutationId: String!
}

type CreateRegionPayload {
    viewer: Viewer!
    region: Region
    edge: RegionEdge
    parent: Region
    clientMutationId: String!
}

input UpdateRegion {
    id: ID!
    code: String
    name: String
    sign: String
    sort: Int
    comment: String
    parentId: ID
    childrenIds: [ID!]
}

input UpdateRegionInput {
    id: ID!
    code: String
    name: String
    sign: String
    sort: Int
    comment: String
    parentId: ID
    childrenIds: [ID!]
    clientMutationId: String!
}

type UpdateRegionPayload {
    viewer: Viewer!
    region: Region
    edge: RegionEdge
    parent: Region
    clientMutationId: String!
}

input UpdateOrCreateRegionInput {
    update: UpdateRegion!
    create: CreateRegion!
    clientMutationId: String!
}

type UpdateOrCreateRegionPayload {
    viewer: Viewer!
    region: Region
    edge: RegionEdge
    parent: Region
    clientMutationId: String!
}

input RevokeRegionInput {
    id: ID!
    clientMutationId: String!
}

type RevokeRegionPayload {
    viewer: Viewer!
    region: Region
    edge: RegionEdge
    parent: Region
    revokedId: ID
    clientMutationId: String!
}

type AddToRegionOnRegionPayload {
    viewer: Viewer!
    clientMutationId: String!
    childrenRegion: Region
    parentRegion: Region
    childrenRegionEdge: RegionEdge
    parentRegionEdge: RegionEdge
}

input AddToRegionOnRegionRegionInput {
    parentRegionId: ID!
    childrenRegionId: ID!
    clientMutationId: String!
}

type RemoveFromRegionOnRegionPayload {
    viewer: Viewer!
    clientMutationId: String!
    childrenRegion: Region
    parentRegion: Region
    childrenRegionEdge: RegionEdge
    parentRegionEdge: RegionEdge
}

input RemoveFromRegionOnRegionRegionInput {
    parentRegionId: ID!
    childrenRegionId: ID!
    clientMutationId: String!
}
`;

const viewer = `
    Region(id: ID, code: String, name: String, sign: String): Region
    allRegions(filter: RegionFilter, orderBy: RegionOrderBy, before: String, after: String, skip: Int, first: Int, last: Int): RegionConnection!
`;

const mutation = `
    createRegion(input: CreateRegionInput!): CreateRegionPayload
    updateRegion(input: UpdateRegionInput!): UpdateRegionPayload
    updateOrCreateRegion(input: UpdateOrCreateRegionInput!): UpdateOrCreateRegionPayload
    revokeRegion(input: RevokeRegionInput!): RevokeRegionPayload
`;

export default {def, viewer, mutation};

