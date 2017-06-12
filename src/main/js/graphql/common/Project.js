'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */
 
 
const def = `

type Project implements Model {
    id: ID!
    name: String!
    sign: String!
    types: [String!]!
    comment: String!
    createdAt: DateTime!
    updatedAt: DateTime!
}

# An edge in a connection.
type ProjectEdge {
    # The item at the end of the edge.
    model: Project!

    # A cursor for use in pagination.
    cursor: String!
}

# A connection to a list of items.
type ProjectConnection {
    # Information to aid in pagination.
    pageInfo: PageInfo!

    # A list of edges.
    edges: [ProjectEdge]

    # Count of filtered result set without considering pagination arguments
    count: Int!
}

input ProjectFilter {
    AND: [ProjectFilter!]
    OR: [ProjectFilter!]
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

enum ProjectOrderBy {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    sign_ASC
    sign_DESC
    comment_ASC
    comment_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
}

input CreateProject {
    name: String!
    sign: String!
    types: [String!]!
    comment: String!
}

input CreateProjectInput {
    name: String!
    sign: String!
    types: [String!]!
    comment: String!
    clientMutationId: String!
}

type CreateProjectPayload {
    viewer: Viewer!
    project: Project
    edge: ProjectEdge
    clientMutationId: String!
}

input UpdateProject {
    id: ID!
    name: String
    sign: String
    types: [String!]
    comment: String 
}

input UpdateProjectInput {
    id: ID!
    name: String
    sign: String
    types: [String!]
    comment: String 
    clientMutationId: String!
}

type UpdateProjectPayload {
    viewer: Viewer!
    project: Project
    edge: ProjectEdge
    clientMutationId: String!
}

input UpdateOrCreateProjectInput {
    update: UpdateProject!
    create: CreateProject!
    clientMutationId: String!
}

type UpdateOrCreateProjectPayload {
    viewer: Viewer!
    project: Project
    edge: ProjectEdge
    clientMutationId: String!
}

input RevokeProjectInput {
    id: ID!
    clientMutationId: String!
}

type RevokeProjectPayload {
    viewer: Viewer!
    project: Project
    edge: ProjectEdge
    revokedId: ID
    clientMutationId: String!
}
`;

const viewer = `
    Project(id: ID, sign: String): Project
    allProjects(filter: ProjectFilter, orderBy: ProjectOrderBy, before: String, after: String, skip: Int, first: Int, last: Int): ProjectConnection!
`;

const mutation = `
    createProject(input: CreateProjectInput!): CreateProjectPayload
    updateProject(input: UpdateProjectInput!): UpdateProjectPayload
    updateOrCreateProject(input: UpdateOrCreateProjectInput!): UpdateOrCreateProjectPayload
    revokeProject(input: RevokeProjectInput!): RevokeProjectPayload
`;

export default {def, viewer, mutation};
