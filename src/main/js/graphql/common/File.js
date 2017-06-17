'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */
 
 
const def = `

type File implements Model {
    id: ID!
    name: String!
    contentType: String!
    contentLength: Int!
    hashType: String!
    hashCode: String!
    url: String!
    comment: String!
    createdAt: DateTime!
    updatedAt: DateTime!
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
    contentLength: Int
    contentLength_not: Int
    contentLength_in: [Int!]
    contentLength_not_in: [Int!]
    contentLength_lt: Int
    contentLength_lte: Int
    contentLength_gt: Int
    contentLength_gte: Int    
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
    hashCode: String
    hashCode_not: String
    hashCode_in: [String!]
    hashCode_not_in: [String!]
    hashCode_lt: String
    hashCode_lte: String
    hashCode_gt: String
    hashCode_gte: String
    hashCode_contains: String
    hashCode_not_contains: String
    hashCode_starts_with: String
    hashCode_not_starts_with: String
    hashCode_ends_with: String
    hashCode_not_ends_with: String
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

enum FileOrderBy {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    contentType_ASC
    contentType_DESC
    contentLength_ASC
    contentLength_DESC
    hashType_ASC
    hashType_DESC
    hashCode_ASC
    hashCode_DESC
    url_ASC
    url_DESC
    comment_ASC
    comment_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC  
}

input CreateFile {
    name: String!
    contentType: String!
    contentLength: Int!
    hashType: String!
    hashCode: String!
    url: String!
    comment: String!
}

input CreateFileInput {
    name: String!
    contentType: String!
    contentLength: Int!
    hashType: String!
    hashCode: String!
    url: String!
    comment: String!
    clientMutationId: String!
}

type CreateFilePayload {
    viewer: Viewer!
    file: File
    edge: FileEdge
    clientMutationId: String!
}

input UpdateFile {
    id: ID!
    name: String!
    contentType: String!
    contentLength: Int!
    hashType: String!
    hashCode: String!
    url: String!
    comment: String!
}

input UpdateFileInput {
    id: ID!
    name: String!
    contentType: String!
    contentLength: Int!
    hashType: String!
    hashCode: String!
    url: String!
    comment: String!
    clientMutationId: String!
}

type UpdateFilePayload {
    viewer: Viewer!
    file: File
    edge: FileEdge
    clientMutationId: String!
}

input UpdateOrCreateFileInput {
    create: CreateFile!
    update: UpdateFile!
    clientMutationId: String!
}

type UpdateOrCreateFilePayload {
    viewer: Viewer!
    file: File
    edge: FileEdge
    clientMutationId: String!
}

input RevokeFileInput {
    id: ID!
    clientMutationId: String!
}

type RevokeFilePayload {
    viewer: Viewer!
    file: File
    edge: FileEdge
    revokedId: ID
    clientMutationId: String!
}
`;

const viewer = `
    File(id: ID, hashCode: String, url: String): File
    allFiles(filter: FileFilter, orderBy: FileOrderBy, before: String, after: String, skip: Int, first: Int, last: Int): FileConnection!
`;

const mutation = `
    createFile(input: CreateFileInput!): CreateFilePayload
    updateFile(input: UpdateFileInput!): UpdateFilePayload
    updateOrCreateFile(input: UpdateOrCreateFileInput!): UpdateOrCreateFilePayload
    revokeFile(input: RevokeFileInput!): RevokeFilePayload
`;

export default {def, viewer, mutation};