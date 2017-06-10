'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import ProjectClass from './Project';
import UserAgentClass from './UserAgent';
import RoleClass from './Role';
import UserClass from './User';
import CurrencyClass from './Currency';
import RegionClass from './Region';
import LanguageClass from './Language';
import LocaleClass from './Locale';
import CompanyClass from './Company';
import FileClass from './File';

import OAuthClientClass from './OAuthClient';
import OAuthCodeClass from './OAuthCode';
import OAuthTokenClass from './OAuthToken';
import OAuthProviderClass from './OAuthProvider';
import OAuthAccessClass from './OAuthAccess';
import OAuthUserClass from './OAuthUser';

export default class {

    static ProjectClass = ProjectClass;
    static UserAgentClass = UserAgentClass;
    static RoleClass = RoleClass;
    static UserClass = UserClass;
    static CurrencyClass = CurrencyClass;
    static RegionClass = RegionClass;
    static LanguageClass = LanguageClass;
    static LocaleClass = LocaleClass;
    static CompanyClass = CompanyClass;

    static OAuthClientClass = OAuthClientClass;
    static OAuthCodeClass = OAuthCodeClass;
    static OAuthTokenClass = OAuthTokenClass;
    static OAuthProviderClass = OAuthProviderClass;
    static OAuthAccessClass = OAuthAccessClass;
    static OAuthUserClass = OAuthUserClass;
    static FileClass = FileClass;

    _models = {};

    get models () {
        return this._models;
    }

    constructor(provider, options) {
        const Project = new ProjectClass(provider, options);
        this._models.Project = Project;

        const UserAgent = new UserAgentClass(provider, options);
        this._models.UserAgent = UserAgent;

        const Role = new RoleClass(provider, options);
        this._models.Role = Role;

        UserClass.addBelongTo(Role.delegate, 'role', 'role_id');
        const User = new UserClass(provider, options);
        this._models.User = User;

        const Currency = new CurrencyClass(provider, options);
        this._models.Currency = Currency;

        const regionOptions = Object.assign({belongsToDefines: [{as:'Parent', foreignKey: 'parent_id'}]}, options);
        const Region = new RegionClass(provider, regionOptions);
        this._models.Region = Region;

        const Language = new LanguageClass(provider, options);
        this._models.Language = Language;

        LocaleClass.addBelongTo(Language.delegate, 'language', 'language_id');
        LocaleClass.addBelongTo(Region.delegate, 'region', 'region_id');
        const Locale = new LocaleClass(provider, options);
        this._models.Locale = Locale;

        CompanyClass.addBelongTo(Currency.delegate, 'currency', 'currency_id');
        const Company = new CompanyClass(provider, options);
        this._models.Company = Company;

        const File = new FileClass(provider, options);
        this._models.File = File;

        OAuthClientClass.addBelongTo(User.delegate, 'user', 'user_id');
        const OAuthClient = new OAuthClientClass(provider, options);
        this._models.OAuthClient = OAuthClient;

        OAuthCodeClass.addBelongTo(User.delegate, 'user', 'user_id');
        OAuthCodeClass.addBelongTo(OAuthClient.delegate, 'client', 'client_id');
        const OAuthCode = new OAuthCodeClass(provider, options);
        this._models.OAuthCode = OAuthCode;

        OAuthTokenClass.addBelongTo(User.delegate, 'user', 'user_id');
        OAuthTokenClass.addBelongTo(OAuthClient.delegate, 'client', 'client_id');
        const OAuthToken = new OAuthTokenClass(provider, options);
        this._models.OAuthToken = OAuthToken;

        const OAuthProvider = new OAuthProviderClass(provider, options);
        this._models.OAuthProvider = OAuthProvider;
    };

}