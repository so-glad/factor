'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import UserAddressClass from './UserAddress';
import UserCartClass from './UserCart';
import GoodsCategoryClass from './GoodsCategory';
import GoodsClass from './Goods';
import GoodsAttributeClass from './GoodsAttribute';

import PaymentRouterClass from './PaymentRouter';
import PaymentMethodClass from './PaymentMethod';
import ShipmentMethodClass from './ShipmentMethod';

import OrderClass from './Order';
import OrderGoodsClass from './OrderGoods';


export default class JueShop {

    static UserAddressClass = UserAddressClass;
    static UserCartClass = UserCartClass;
    static GoodsCategoryClass = GoodsCategoryClass;
    static GoodsClass = GoodsClass;
    static GoodsAttributeClass = GoodsAttributeClass;
    static PaymentRouterClass = PaymentRouterClass;
    static PaymentMethodClass = PaymentMethodClass;
    static ShipmentMethodClass = ShipmentMethodClass;
    static OrderClass = OrderClass;
    static OrderGoodsClass = OrderGoodsClass;

    _models = {};

    get models () {
        return this._models;
    }

    constructor(provider, options) {
        const {User, Region, Currency} = options.models;
        UserAddressClass.addBelongTo(User.delegate, 'user', 'user_id');
        UserAddressClass.addBelongTo(Region.delegate, 'region', 'region_id');
        const UserAddress = new UserAddressClass(provider, options);
        this._models.UserAddress = UserAddress;

        UserCartClass.addBelongTo(User.delegate, 'user', 'user_id');
        const UserCart = new UserCartClass(provider, options);
        this._models.UserCart = UserCart;

        const categoryOptions = Object.assign({belongsToDefines: [{as:'Parent', foreignKey: 'parent_id'}]}, options);
        const GoodsCategory = new GoodsCategoryClass(provider, categoryOptions);
        this._models.GoodsCategory = GoodsCategory;

        GoodsClass.addBelongTo(User.delegate, 'user', 'user_id');
        GoodsClass.addBelongTo(GoodsCategory.delegate, 'category', 'category_id');
        const Goods = new GoodsClass(provider, options);
        this._models.Goods = Goods;

        GoodsAttributeClass.addBelongTo(Goods.delegate, 'goods', 'goods_id');
        const GoodsAttribute = new GoodsAttributeClass(provider, options);
        this._models.GoodsAttribute = GoodsAttribute;

        const PaymentRouter = new PaymentRouterClass(provider, options);
        this._models.PaymentRouter = PaymentRouter;

        PaymentMethodClass.addBelongTo(PaymentRouter.delegate, 'router', 'router_id');
        const PaymentMethod = new PaymentMethodClass(provider, options);
        this._models.PaymentMethod = PaymentMethod;

        const ShipmentMethod = new ShipmentMethodClass(provider, options);
        this._models.ShipmentMethod = ShipmentMethod;

        OrderClass.addBelongTo(PaymentMethod.delegate, 'paymentMethod', 'payment_method_id');
        OrderClass.addBelongTo(ShipmentMethod.delegate, 'shipmentMethod', 'shipment_method_id');
        OrderClass.addBelongTo(UserAddress.delegate, 'address', 'user_address_id');
        OrderClass.addBelongTo(User.delegate, 'user', 'user_id');
        OrderClass.addBelongTo(Currency.delegate, 'currency', 'currency_id');
        const Order = new OrderClass(provider, options);
        this._models.Order = Order;
    }
}