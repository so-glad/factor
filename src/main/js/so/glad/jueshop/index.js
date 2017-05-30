'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import UserAddressClass from './UserAddress';
import GoodsClass from './Goods';
import OrderClass from './Order';

export default class JueShop {

    _models = {};

    get models () {
        return this._models;
    }

    UserAddressClass = UserAddressClass;
    GoodsClass = GoodsClass;
    OrderClass = OrderClass;

    constructor(provider, options) {
        const {User} = options.models;
        UserAddressClass.addBelongTo(User.delegate, 'user', 'user_id');
        const UserAddress = new UserAddressClass(provider, options);
        this._models.UserAddress = UserAddress;
    }
}