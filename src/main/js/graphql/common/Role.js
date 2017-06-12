'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */
 
 
const def = `

type Role implements Model {
    id: ID!
    code: String!
    name: String!
    comment: String!
    users(filter: UserFilter, orderBy: UserOrderBy, before: String, after: String, skip: Int, first: Int, last: Int): UserConnection    
    createdAt: DateTime!
    updatedAt: DateTime!
}

# A connection to a list of items.
type RoleConnection {
    # Information to aid in pagination.
    pageInfo: PageInfo!

    # A list of edges.
    edges: [RoleEdge]

    # Count of filtered result set without considering pagination arguments
    count: Int!
}

# An edge in a connection.
type RoleEdge {
    # The item at the end of the edge.
    model: Role!

    # A cursor for use in pagination.
    cursor: String!
}

input RoleFilter {
    AND: [RoleFilter!]
    OR: [RoleFilter!]
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
    users_every: UserFilter
    users_some: UserFilter
    users_none: UserFilter
}

enum RoleOrderBy {
    id_ASC
    id_DESC
    code_ASC
    code_DESC
    name_ASC
    name_DESC
    comment_ASC
    comment_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
}

input CreateRole {
    code: String!
    name: String!
    comment: String!
    usersIds: [ID!]
    users: [RoleusersUser!]
}

input CreateRoleInput {
    code: String!
    name: String!
    comment: String!
    usersIds: [ID!]
    users: [RoleusersUser!]
    clientMutationId: String!
}

type CreateRolePayload {
    viewer: Viewer!
    clientMutationId: String!
    role: Role
    edge: RoleEdge
}

input UpdateRole {
    id: ID!
    code: String
    name: String
    comment: String
    usersIds: [ID!]
    users: [RoleusersUser!]
}

input UpdateRoleInput {
    id: ID!
    code: String
    name: String
    comment: String
    usersIds: [ID!]
    users: [RoleusersUser!]
    clientMutationId: String!
}

type UpdateRolePayload {
    viewer: Viewer!
    role: Role
    edge: RoleEdge
    clientMutationId: String!
}

input UpdateOrCreateRoleInput {
    update: UpdateRole!
    create: CreateRole!
    clientMutationId: String!
}

type UpdateOrCreateRolePayload {
    viewer: Viewer!
    clientMutationId: String!
    role: Role
    edge: RoleEdge
}

input RevokeRoleInput {
    id: ID!
    clientMutationId: String!
}

type RevokeRolePayload {
    viewer: Viewer!
    clientMutationId: String!
    role: Role
    edge: RoleEdge
    revokedId: ID
}
`;

const viewer = `
    Role(code: String, id: ID, name: String): Role
    allRoles(filter: RoleFilter, orderBy: RoleOrderBy, before: String, after: String, skip: Int, first: Int, last: Int): RoleConnection!
`;

const mutation = `
    createRole(input: CreateRoleInput!): CreateRolePayload
    updateRole(input: UpdateRoleInput!): UpdateRolePayload
    updateOrCreateRole(input: UpdateOrCreateRoleInput!): UpdateOrCreateRolePayload
    revokeRole(input: RevokeRoleInput!): RevokeRolePayload
`;

export default {def, viewer, mutation};