'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */
 
 
const def = `

type Project implements Model {
  comment: String!
  createdAt: DateTime!
  id: ID!
  name: String!
  revoked: Boolean!
  sign: String!
  types: [String!]!
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
  revoked: Boolean
  revoked_not: Boolean
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
  comment_ASC
  comment_DESC
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  revoked_ASC
  revoked_DESC
  sign_ASC
  sign_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input CreateProject {
  comment: String!
  name: String!
  revoked: Boolean
  sign: String!
  types: [String!]!
}

input CreateProjectInput {
  comment: String!
  name: String!
  revoked: Boolean
  sign: String!
  types: [String!]!
  clientMutationId: String!
}

type CreateProjectPayload {
  viewer: Viewer!
  clientMutationId: String!
  project: Project
  edge: ProjectEdge
}

input UpdateProject {
  comment: String
  id: ID!
  name: String
  revoked: Boolean
  sign: String
  types: [String!]
}

input UpdateProjectInput {
  comment: String
  id: ID!
  name: String
  revoked: Boolean
  sign: String
  types: [String!]
  clientMutationId: String!
}

type UpdateProjectPayload {
  viewer: Viewer!
  clientMutationId: String!
  project: Project
  edge: ProjectEdge
}

input UpdateOrCreateProjectInput {
  update: UpdateProject!
  create: CreateProject!
  clientMutationId: String!
}

type UpdateOrCreateProjectPayload {
  viewer: Viewer!
  clientMutationId: String!
  project: Project
  edge: ProjectEdge
}

input DeleteProjectInput {
  id: ID!
  clientMutationId: String!
}

type DeleteProjectPayload {
  viewer: Viewer!
  clientMutationId: String!
  project: Project
  edge: ProjectEdge
  deletedId: ID
}
`;

const viewer = `
    allProjects(filter: ProjectFilter, orderBy: ProjectOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
    Project(id: ID, sign: String): Project
`;

const mutation = `
    createProject(input: CreateProjectInput!): CreateProjectPayload
    updateProject(input: UpdateProjectInput!): UpdateProjectPayload
    updateOrCreateProject(input: UpdateOrCreateProjectInput!): UpdateOrCreateProjectPayload
    deleteProject(input: DeleteProjectInput!): DeleteProjectPayload
`;

export default {def, viewer, mutation};