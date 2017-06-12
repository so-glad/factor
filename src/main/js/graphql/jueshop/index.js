'use strict';

/**
 * @author palmtale
 * @since 2017/6/10.
 */
 
import Goods from './Goods';
import GoodsAttribute from './GoodsAttribute';
import GoodsCategory from './GoodsCategory';

const def = Goods.def + GoodsAttribute.def + GoodsCategory.def;

const viewer = Goods.viewer + GoodsAttribute.viewer + GoodsCategory.viewer;

const mutation = Goods.mutation + GoodsAttribute.mutation + GoodsCategory.mutation;

export default {def, viewer, mutation};