'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */
 
 
const def = `

type File implements Model {
  comment: String!
  contentType: String!
  createdAt: DateTime!
  hashType: String!
  id: ID!
  name: String!
  revoked: Boolean!
  secret: String!
  size: Int!
  updatedAt: DateTime!
  url: String!
}

# An edge in a connection.
type FileEdge {
  # The item at the end of the edge.
  model: File!

  # A cursor for use in pagination.
  cursor: String!
}

# A connection to a list of items.
type FileConnection {
  # Information to aid in pagination.
  pageInfo: PageInfo!

  # A list of edges.
  edges: [FileEdge]

  # Count of filtered result set without considering pagination arguments
  count: Int!
}

input FileFilter {
  AND: [FileFilter!]
  OR: [FileFilter!]
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
  contentType: String
  contentType_not: String
  contentType_in: [String!]
  contentType_not_in: [String!]
  contentType_lt: String
  contentType_lte: String
  contentType_gt: String
  contentType_gte: String
  contentType_contains: String
  contentType_not_contains: String
  contentType_starts_with: String
  contentType_not_starts_with: String
  contentType_ends_with: String
  contentType_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  hashType: String
  hashType_not: String
  hashType_in: [String!]
  hashType_not_in: [String!]
  hashType_lt: String
  hashType_lte: String
  hashType_gt: String
  hashType_gte: String
  hashType_contains: String
  hashType_not_contains: String
  hashType_starts_with: String
  hashType_not_starts_with: String
  hashType_ends_with: String
  hashType_not_ends_with: String
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
  secret: String
  secret_not: String
  secret_in: [String!]
  secret_not_in: [String!]
  secret_lt: String
  secret_lte: String
  secret_gt: String
  secret_gte: String
  secret_contains: String
  secret_not_contains: String
  secret_starts_with: String
  secret_not_starts_with: String
  secret_ends_with: String
  secret_not_ends_with: String
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
}

enum FileOrderBy {
  comment_ASC
  comment_DESC
  contentType_ASC
  contentType_DESC
  createdAt_ASC
  createdAt_DESC
  hashType_ASC
  hashType_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  revoked_ASC
  revoked_DESC
  secret_ASC
  secret_DESC
  size_ASC
  size_DESC
  updatedAt_ASC
  updatedAt_DESC
  url_ASC
  url_DESC
}

input CreateFile {
  comment: String!
  hashType: String!
  name: String!
  revoked: Boolean
}

input CreateFileInput {
  comment: String!
  hashType: String!
  name: String!
  revoked: Boolean
  clientMutationId: String!
}

type CreateFilePayload {
  viewer: Viewer!
  clientMutationId: String!
  file: File
  edge: FileEdge
}

input UpdateFile {
  comment: String
  hashType: String
  id: ID!
  name: String
  revoked: Boolean
}

input UpdateFileInput {
  comment: String
  hashType: String
  id: ID!
  name: String
  revoked: Boolean
  clientMutationId: String!
}

type UpdateFilePayload {
  viewer: Viewer!
  clientMutationId: String!
  file: File
  edge: FileEdge
}

input UpdateOrCreateFileInput {
  update: UpdateFile!
  create: CreateFile!
  clientMutationId: String!
}

type UpdateOrCreateFilePayload {
  viewer: Viewer!
  clientMutationId: String!
  file: File
  edge: FileEdge
}

input DeleteFileInput {
  id: ID!
  clientMutationId: String!
}

type DeleteFilePayload {
  viewer: Viewer!
  clientMutationId: String!
  file: File
  edge: FileEdge
  deletedId: ID
}
`;

const viewer = `
    File(id: ID, secret: String, url: String): File
    allFiles(filter: FileFilter, orderBy: FileOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
`;

const mutation = `
    createFile(input: CreateFileInput!): CreateFilePayload
    updateFile(input: UpdateFileInput!): UpdateFilePayload
    updateOrCreateFile(input: UpdateOrCreateFileInput!): UpdateOrCreateFilePayload
    deleteFile(input: DeleteFileInput!): DeleteFilePayload
`;

export default {def, viewer, mutation};