import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, ImageBackground, I18nManager} from "react-native";
import {Container, Content} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'


const height = Dimensions.get('window').height;

class User extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }



    render() {
        return (
            <Container>
                <Content  contentContainerStyle={styles.flexGrow} >
                   <ImageBackground source={require('../../assets/images/bg.png')} resizeMode={'cover'} style={styles.imageBackground}>
                        <View>
                            <Image source={require('../../assets/images/headerlogin.png')} style={styles.headerbg} resizeMode={'cover'} />
                            <Image source={require('../../assets/images/logo.png')} style={styles.headerLogo} resizeMode={'contain'} />
                        </View>
                       <View style={styles.authMainView}>
                            <Text style={[styles.yellowText , styles.mb15]}>{ i18n.t('register') }</Text>
                           <Text style={[styles.grayText , styles.tAC]}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</Text>

                            <TouchableOpacity onPress={ () => this.props.navigation.navigate('login_client')} style={[styles.yellowBtn , styles.mt50 , styles.mb10]}>
                                <Text style={styles.whiteText}>{ i18n.t('asUser') }</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={ () => this.props.navigation.navigate('login_delegate')} style={styles.redBtn}>
                                <Text style={styles.whiteText}>{ i18n.t('asDelegate') }</Text>
                            </TouchableOpacity>

                       </View>
                   </ImageBackground>
                </Content>
            </Container>

        );
    }
}

export default User;