'use strict';

/**
 * @author palmtale
 * @since 2017/6/10.
 */
 
 
import Role from './Role';
import User from './User';
import Currency from './Currency';
import File from './File';
import Language from './Language';
import Region from './Region';
import Project from './Project';

const def = Project.def + File.def + Currency.def +
 Language.def + Region.def + Role.def + User.def;

const viewer = Project.viewer + File.viewer + Currency.viewer +
    Language.viewer + Region.viewer + Role.viewer + User.viewer;

const mutation = Project.mutation + File.mutation + Currency.mutation +
    Language.mutation + Region.mutation + Role.mutation + User.mutation;

export default {def, viewer, mutation};