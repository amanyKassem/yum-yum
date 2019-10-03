import React, { Component } from "react";
import { View, Text, Image , TouchableOpacity , Share } from "react-native";
import {Container, Content, Icon} from 'native-base';
import {DrawerItems} from 'react-navigation';
import styles from "../../assets/styles";


class DrawerCustomization_delegate extends Component {
    constructor(props){
        super(props);
        this.state={
            user: [],
        }
    }

    logout(){
        this.props.navigation.navigate('login_delegate');
    }



    render() {
        return (
            <Container>
                <Content style={{backgroundColor:'#fff'}}>
                    <View style={styles.sideView}>
                        <Image source={require('../../assets/images/bgsidemenu.png')} resizeMode={'cover'} style={styles.bgSideMenu}/>
                        <View style={styles.sideImgView}>
                            <View style={styles.sideProfileImg}>
                                <Image source={require('../../assets/images/profile_pic.png')} resizeMode={'cover'} style={styles.swiperimage}/>
                            </View>
                            <Text style={styles.sideName}>اماني قاسم</Text>
                        </View>
                    </View>
                    <DrawerItems {...this.props}
                                 onItemPress={
                                     (route, focused) => {
                                         if (route.route.key === 'logout_delegate') {
                                             this.logout()
                                         }else {
                                             this.props.navigation.navigate(route.route.key)
                                         }
                                     }
                                 }
                                 activeBackgroundColor='transparent' inactiveBackgroundColor='transparent' activeLabelStyle={{color:'#5d5d5d'}}
                                 labelStyle={styles.drawerLabel} iconContainerStyle ={styles.drawerIcon}
                                 itemStyle  = {styles.drawerItemStyle} itemsContainerStyle ={{}}
                    />

                </Content>

            </Container>
        );
    }
}


export default DrawerCustomization_delegate;