'use strict';

/**
 * @author palmtale
 * @since 2017/6/11.
 */
 
 
const def  = `
    input UpdateOrCreateCompanyInput {
        update: UpdateCompany!
        create: CreateCompany!
        clientMutationId: String!
    }

    type UpdateOrCreateCompanyPayload {
        viewer: Viewer!
        clientMutationId: String!
        company: Company
        edge: CompanyEdge
    }
`;

const viewer = ``;

const mutation = ``;

export default {def, viewer, mutaion};