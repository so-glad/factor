'use strict';

/**
 * @author palmtale
 * @since 2017/6/11.
 */
 
 
const def  = `
    
type Company implements Model {
    id: ID!
    identity: String!
    name: String!
    alias: String!
    category: String!
    capital: Float!
    foundDate: DateTime!
    chairman: String!
    address: String!alias: String!
    industry: String!
    business: String!
    size: Int!
    summary: String!
    createdAt: DateTime!
    updatedAt: DateTime!
}

# A connection to a list of items.
type CompanyConnection {
    # Information to aid in pagination.
    pageInfo: PageInfo!

    # A list of edges.
    edges: [CompanyEdge]

    # Count of filtered result set without considering pagination arguments
    count: Int!
}

# An edge in a connection.
type CompanyEdge {
    # The item at the end of the edge.
    model: Company!

    # A cursor for use in pagination.
    cursor: String!
}

input CompanyFilter {
    AND: [CompanyFilter!]
    OR: [CompanyFilter!]
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
    identity: String
    identity_not: String
    identity_in: [String!]
    identity_not_in: [String!]
    identity_lt: String
    identity_lte: String
    identity_gt: String
    identity_gte: String
    identity_contains: String
    identity_not_contains: String
    identity_starts_with: String
    identity_not_starts_with: String
    identity_ends_with: String
    identity_not_ends_with: String
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
    category: String
    category_not: String
    category_in: [String!]
    category_not_in: [String!]
    category_lt: String
    category_lte: String
    category_gt: String
    category_gte: String
    category_contains: String
    category_not_contains: String
    category_starts_with: String
    category_not_starts_with: String
    category_ends_with: String
    category_not_ends_with: String
    capital: Float
    capital_not: Float
    capital_in: [Float!]
    capital_not_in: [Float!]
    capital_lt: Float
    capital_lte: Float
    capital_gt: Float
    capital_gte: Float
    foundDate: DateTime
    foundDate_not: DateTime
    foundDate_in: [DateTime!]
    foundDate_not_in: [DateTime!]
    foundDate_lt: DateTime
    foundDate_lte: DateTime
    foundDate_gt: DateTime
    foundDate_gte: DateTime
    chairman: String
    chairman_not: String
    chairman_in: [String!]
    chairman_not_in: [String!]
    chairman_lt: String
    chairman_lte: String
    chairman_gt: String
    chairman_gte: String
    chairman_contains: String
    chairman_not_contains: String
    chairman_starts_with: String
    chairman_not_starts_with: String
    chairman_ends_with: String
    chairman_not_ends_with: String
    address: String
    address_not: String
    address_in: [String!]
    address_not_in: [String!]
    address_lt: String
    address_lte: String
    address_gt: String
    address_gte: String
    address_contains: String
    address_not_contains: String
    address_starts_with: String
    address_not_starts_with: String
    address_ends_with: String
    address_not_ends_with: String
    industry: String
    industry_not: String
    industry_in: [String!]
    industry_not_in: [String!]
    industry_lt: String
    industry_lte: String
    industry_gt: String
    industry_gte: String
    industry_contains: String
    industry_not_contains: String
    industry_starts_with: String
    industry_not_starts_with: String
    industry_ends_with: String
    industry_not_ends_with: String
    business: String
    business_not: String
    business_in: [String!]
    business_not_in: [String!]
    business_lt: String
    business_lte: String
    business_gt: String
    business_gte: String
    business_contains: String
    business_not_contains: String
    business_starts_with: String
    business_not_starts_with: String
    business_ends_with: String
    business_not_ends_with: String
    size: Int
    size_not: Int
    size_in: [Int!]
    size_not_in: [Int!]
    size_lt: Int
    size_lte: Int
    size_gt: Int
    size_gte: Int
    summary: String
    summary_not: String
    summary_in: [String!]
    summary_not_in: [String!]
    summary_lt: String
    summary_lte: String
    summary_gt: String
    summary_gte: String
    summary_contains: String
    summary_not_contains: String
    summary_starts_with: String
    summary_not_starts_with: String
    summary_ends_with: String
    summary_not_ends_with: String
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

enum CompanyOrderBy {
    id_ASC
    id_DESC
    identity_ASC
    identity_DESC
    name_ASC
    name_DESC
    alias_ASC
    alias_DESC
    category_ASC
    category_DESC
    capital_ASC
    capital_DESC
    foundDate_ASC
    foundDate_DESC
    chairman_ASC
    chairman_DESC
    address_ASC
    address_DESC
    industry_ASC
    industry_DESC
    business_ASC
    business_DESC
    size_ASC
    size_DESC
    summary_ASC
    summary_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
}

input CreateCompany {
    identity: String!
    name: String!
    alias: String!
    category: String!
    capital: Float!
    foundDate: DateTime!
    chairman: String!
    address: String!
    industry: String!
    business: String!
    size: Int!
    summary: String!
}

input CreateCompanyInput {
    identity: String!
    name: String!
    alias: String!
    category: String!
    capital: Float!
    foundDate: DateTime!
    chairman: String!
    address: String!
    industry: String!
    business: String!
    size: Int!
    summary: String!
    clientMutationId: String!
}

type CreateCompanyPayload {
    viewer: Viewer!
    company: Company
    edge: CompanyEdge
    clientMutationId: String!
}

input UpdateCompany {
    id: ID!
    identity: String!
    name: String!
    alias: String!
    category: String!
    capital: Float!
    foundDate: DateTime!
    chairman: String!
    address: String!
    industry: String!
    business: String!
    size: Int!
    summary: String!
}

input UpdateCompanyInput {
    id: ID!
    identity: String!
    name: String!
    alias: String!
    category: String!
    capital: Float!
    foundDate: DateTime!
    chairman: String!
    address: String!
    industry: String!
    business: String!
    size: Int!
    summary: String!
    clientMutationId: String!
}

type UpdateCompanyPayload {
    viewer: Viewer!
    company: Company
    edge: CompanyEdge
    clientMutationId: String!
}

input UpdateOrCreateCompanyInput {
    update: UpdateCompany!
    create: CreateCompany!
    clientMutationId: String!
}

type UpdateOrCreateCompanyPayload {
    viewer: Viewer!
    company: Company
    edge: CompanyEdge
    clientMutationId: String!
}

input RevokeCompanyInput {
    id: ID!
    clientMutationId: String!
}

type RevokeCompanyPayload {
    viewer: Viewer!
    company: Company
    edge: CompanyEdge
    revokedId: ID
    clientMutationId: String!
}

`;

const viewer = `
    Company(id: ID, identity: String): Company
    allCompanies(filter: CompanyFilter, orderBy: CompanyOrderBy, before: String, after: String, skip: Int, first: Int, last: Int): CompanyConnection!
`;

const mutation = `
    createCompany(input: CreateCompanyInput!): CreateCompanyPayload
    updateCompany(input: UpdateCompanyInput!): UpdateCompanyPayload
    updateOrCreateCompany(input: UpdateOrCreateCompanyInput!): UpdateOrCreateCompanyPayload
    revokeCompany(input: RevokeCompanyInput!): RevokeCompanyPayload
`;

export default {def, viewer, mutaion};

