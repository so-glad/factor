'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */

import common from './common';
import jueshop from './jueshop';

const mergeDefs = (...defs) => {
    const result = {def: ``, viewer: ``, mutation: ``};
    for(const i in defs) {
        result.def += defs[i].def;
        result.viewer += defs[i].viewer;
        result.mutation += defs[i].mutation;
    }
    return result;
};

const finalDefs = (def) =>
    def.def +
    `type Viewer {
        id: ID!` +
        def.viewer +
    `}
    
     type Mutation {` +
        def.mutation +`
     }
    `;

const baseDef = `
scalar Long

scalar BigDecimal

scalar BigInt

scalar DateTime

interface Model {
    # The id of the object.
    id: ID!
}

# Information about pagination in a connection.
type PageInfo {
    # When paginating forwards, are there more items?
    hasNextPage: Boolean!

    # When paginating backwards, are there more items?
    hasPreviousPage: Boolean!

    # When paginating backwards, the cursor to continue.
    startCursor: String

    # When paginating forwards, the cursor to continue.
    endCursor: String
}

type Query {
  viewer: Viewer!

  # Fetches an object given its ID
  model(
    # The ID of an object
    id: ID!
  ): Model
}
`;

const commonDef = baseDef + finalDefs(common);

const jueshopDef = baseDef + finalDefs(mergeDefs(common, jueshop));

export default {commonDef, jueshopDef};