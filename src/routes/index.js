import React from "react";
import { createStackNavigator, createAppContainer , createDrawerNavigator } from "react-navigation";
import {I18nManager} from "react-native";

import Home_client from "../components/Home_client";
import DrawerCustomization_client from "./DrawerCustomization_client";
import Login_client from "../components/Login_client";
import User from "../components/User";
import ForgetPassword_client from "../components/ForgetPassword_client";
import VerifyCode_client from "../components/VerifyCode_client";
import Register_client from "../components/Register_client";
import AccActivation_client from "../components/AccActivation_client";
import Notification_client from "../components/Notification_client";
import Restaurants_client from "../components/Restaurants_client";
import RestDet_client from "../components/RestDet_client";
import ProductDet_client from "../components/ProductDet_client";
import OrderNow_client from "../components/OrderNow_client";
import Profile_client from "../components/Profile_client";
import Cart_client from "../components/Cart_client";
import Wallet_client from "../components/Wallet_client";
import AboutApp_client from "../components/AboutApp_client";
import Policy_client from "../components/Policy_client";
import ContactUa_client from "../components/ContactUa_client";

const drawerCust = (props) => (<DrawerCustomization_client {...props} />)
const DrawerNavigator = createDrawerNavigator({
    home_client:Home_client,
    notification_client:Notification_client,
    restaurants_client:Restaurants_client,
    restDet_client:RestDet_client,
    productDet_client:ProductDet_client,
    orderNow_client:OrderNow_client,
    profile_client:Profile_client,
    cart_client:Cart_client,
    wallet_client:Wallet_client,
    aboutApp_client:AboutApp_client,
    policy_client:Policy_client,
    contactUa_client:ContactUa_client,

},{
    initialRouteName:'home_client',
    drawerPosition:I18nManager.isRTL ?'right' : 'left',
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    gesturesEnabled:false,
    drawerToggleRoute:'DrawerToggle',
    contentComponent:drawerCust
})
const AppNavigator = createStackNavigator({

    contactUa_client: {
        screen: ContactUa_client,
        navigationOptions: {
            header: null
        }
    },
    drawerNavigator_client: {
        screen: DrawerNavigator,
        navigationOptions: {
            header: null
        }
    },
    policy_client: {
        screen: Policy_client,
        navigationOptions: {
            header: null
        }
    },
    aboutApp_client: {
        screen: AboutApp_client,
        navigationOptions: {
            header: null
        }
    },
    wallet_client: {
        screen: Wallet_client,
        navigationOptions: {
            header: null
        }
    },
    cart_client: {
        screen: Cart_client,
        navigationOptions: {
            header: null
        }
    },
    profile_client: {
        screen: Profile_client,
        navigationOptions: {
            header: null
        }
    },
    orderNow_client: {
        screen: OrderNow_client,
        navigationOptions: {
            header: null
        }
    },
    productDet_client: {
        screen: ProductDet_client,
        navigationOptions: {
            header: null
        }
    },
    restDet_client: {
        screen: RestDet_client,
        navigationOptions: {
            header: null
        }
    },
    restaurants_client: {
        screen: Restaurants_client,
        navigationOptions: {
            header: null
        }
    },
    notification_client: {
        screen: Notification_client,
        navigationOptions: {
            header: null
        }
    },
    register_client: {
        screen: Register_client,
        navigationOptions: {
            header: null
        }
    },
    accActivation_client: {
        screen: AccActivation_client,
        navigationOptions: {
            header: null
        }
    },
    login_client: {
        screen: Login_client,
        navigationOptions: {
            header: null
        }
    },
    verifyCode_client: {
        screen: VerifyCode_client,
        navigationOptions: {
            header: null
        }
    },
    forgetPassword_client: {
        screen: ForgetPassword_client,
        navigationOptions: {
            header: null
        }
    },
    user: {
        screen: User,
        navigationOptions: {
            header: null
        }
    },
});

export default createAppContainer(AppNavigator);