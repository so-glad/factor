'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */
 
 
const def = `

type User implements Model {
    id: ID!
    username: String!
    alias: String!
    avatar: String!
    email: String!
    emailVerified: Boolean!
    mobile: String!
    mobileVerified: Boolean!
    status: String!
    role(filter: RoleFilter): Role
    createdAt: DateTime!
    updatedAt: DateTime!
}

# An edge in a connection.
type UserEdge {
    # The item at the end of the edge.
    model: User!

    # A cursor for use in pagination.
    cursor: String!
}

# A connection to a list of items.
type UserConnection {
    # Information to aid in pagination.
    pageInfo: PageInfo!

    # A list of edges.
    edges: [UserEdge]

    # Count of filtered result set without considering pagination arguments
    count: Int!
}

input UserFilter {
    AND: [UserFilter!]
    OR: [UserFilter!]
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
    username: String
    username_not: String
    username_in: [String!]
    username_not_in: [String!]
    username_lt: String
    username_lte: String
    username_gt: String
    username_gte: String
    username_contains: String
    username_not_contains: String
    username_starts_with: String
    username_not_starts_with: String
    username_ends_with: String
    username_not_ends_with: String
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
    avatar: String
    avatar_not: String
    avatar_in: [String!]
    avatar_not_in: [String!]
    avatar_lt: String
    avatar_lte: String
    avatar_gt: String
    avatar_gte: String
    avatar_contains: String
    avatar_not_contains: String
    avatar_starts_with: String
    avatar_not_starts_with: String
    avatar_ends_with: String
    avatar_not_ends_with: String
    email: String
    email_not: String
    email_in: [String!]
    email_not_in: [String!]
    email_lt: String
    email_lte: String
    email_gt: String
    email_gte: String
    email_contains: String
    email_not_contains: String
    email_starts_with: String
    email_not_starts_with: String
    email_ends_with: String
    email_not_ends_with: String
    emailVerified: Boolean
    emailVerified_not: Boolean
    mobile: String
    mobile_not: String
    mobile_in: [String!]
    mobile_not_in: [String!]
    mobile_lt: String
    mobile_lte: String
    mobile_gt: String
    mobile_gte: String
    mobile_contains: String
    mobile_not_contains: String
    mobile_starts_with: String
    mobile_not_starts_with: String
    mobile_ends_with: String
    mobile_not_ends_with: String
    mobileVerified: Boolean
    mobileVerified_not: Boolean
    status: String
    status_not: String
    status_in: [String!]
    status_not_in: [String!]
    status_lt: String
    status_lte: String
    status_gt: String
    status_gte: String
    status_contains: String
    status_not_contains: String
    status_starts_with: String
    status_not_starts_with: String
    status_ends_with: String
    status_not_ends_with: String
    role: RoleFilter
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

enum UserOrderBy {
    id_ASC
    id_DESC
    username_ASC
    username_DESC
    alias_ASC
    alias_DESC
    avatar_ASC
    avatar_DESC
    email_ASC
    email_DESC
    emailVerified_ASC
    emailVerified_DESC
    mobile_ASC
    mobile_DESC
    mobileVerified_ASC
    mobileVerified_DESC
    status_ASC
    status_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC  
}

input CreateUser {
    username: String!
    alias: String!
    avatar: String!
    email: String!
    mobile: String!
    password: String!
    roleId: ID
    role: UserroleRole
}

input CreateUserInput {
    username: String!
    alias: String!
    avatar: String!
    email: String!
    mobile: String!
    password: String!
    roleId: ID
    role: UserroleRole
    clientMutationId: String!
}

input SignupUserInput {
    username: String!
    alias: String!
    avatar: String!
    email: String!
    emailVerified: Boolean
    mobile: String!
    mobileVerified: Boolean
    password: String!
    clientMutationId: String!
}

type CreateUserPayload {
    user: User
    viewer: Viewer!
    clientMutationId: String
}

input UpdateUser {
    id: ID!
    username: String
    alias: String
    avatar: String
    email: String
    emailVerified: Boolean
    mobile: String
    mobileVerified: Boolean
    password: String
    status: String
    roleId: ID
    role: UserroleRole
}

input UpdateUserInput {
    id: ID!
    username: String
    alias: String
    avatar: String
    email: String
    emailVerified: Boolean
    mobile: String
    mobileVerified: Boolean
    password: String
    status: String
    roleId: ID
    role: UserroleRole
    clientMutationId: String!
}

type UpdateUserPayload {
    viewer: Viewer!
    user: User
    edge: UserEdge
    role: Role
    clientMutationId: String!
}

input UpdateOrCreateUserInput {
    update: UpdateUser!
    create: CreateUser!
    clientMutationId: String!
}

type UpdateOrCreateUserPayload {
    viewer: Viewer!
    user: User
    edge: UserEdge
    role: Role
    clientMutationId: String!
}

input RevokeUserInput {
    id: ID!
    clientMutationId: String!
}

type RevokeUserPayload {
    viewer: Viewer! 
    user: User
    edge: UserEdge
    role: Role
    revokedId: ID
    clientMutationId: String!
}

input RoleusersUser {
    username: String!
    alias: String!
    avatar: String!
    email: String!
    emailVerified: Boolean
    mobile: String!
    mobileVerified: Boolean
    status: String!
}

input UserroleRole {
  code: String!
  comment: String!
  name: String!
  usersIds: [ID!]
  users: [User!]
}

type AddToUserOnRolePayload {
    viewer: Viewer!
    usersUser: User
    roleRole: Role
    usersUserEdge: UserEdge
    roleRoleEdge: RoleEdge
    clientMutationId: String!
}

input AddToUserOnRoleUserInput {
    roleRoleId: ID!
    usersUserId: ID!
    clientMutationId: String!
}

type RemoveFromUserOnRolePayload {
    viewer: Viewer!
    clientMutationId: String!
    usersUser: User
    roleRole: Role
    usersUserEdge: UserEdge
    roleRoleEdge: RoleEdge
}

input RemoveFromUserOnRoleUserInput {
    roleRoleId: ID!
    usersUserId: ID!
    clientMutationId: String!
}

type AuthenticatePayload {
    user: User
    accessToken: String!
    expiresIn: Int!
    refreshToken: String!
    remindIn: Int!
}
`;

const viewer = `
    user: User
    allUsers(filter: UserFilter, orderBy: UserOrderBy, before: String, after: String, skip: Int, first: Int, last: Int): UserConnection!
    User(email: String, id: ID, mobile: String, username: String): User
`;

const mutation = `
    login(username: String, password: String): AuthenticatePayload
    signUp(input: SignupUserInput): AuthenticatePayload
    createUser(input: CreateUserInput!): CreateUserPayload!
    updateUser(input: UpdateUserInput!): UpdateUserPayload
    updateOrCreateUser(input: UpdateOrCreateUserInput!): UpdateOrCreateUserPayload
    revokeUser(input: RevokeUserInput!): RevokeUserPayload
    addToUserOnRole(input: AddToUserOnRoleUserInput!): AddToUserOnRolePayload
    removeFromUserOnRole(input: RemoveFromUserOnRoleUserInput!): RemoveFromUserOnRolePayload
`;

export default {def, viewer, mutation};
