import React, { Component } from "react";
import { Image} from "react-native";
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'


class Logout_client extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }

    static navigationOptions = () => ({
        drawerLabel:  i18n.t('logout')  ,
        drawerIcon: (<Image source={require('../../assets/images/logout.png')} style={[styles.drawerImg , styles.transform ]} resizeMode={'contain'} /> )
    });

    render() {
        return false
    }
}

export default Logout_client;

