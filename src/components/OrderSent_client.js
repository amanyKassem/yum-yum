import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, ScrollView, I18nManager, ImageBackground} from "react-native";
import {Container, Content, Header, Button, Item, Input, Form} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'


const height = Dimensions.get('window').height;

class OrderSent_client extends Component {
    constructor(props){
        super(props);

        this.state={
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null,
    });


    render() {


        return (
            <Container>

                <Content contentContainerStyle={styles.flexGrow} style={{}} >
                    <ImageBackground source={require('../../assets/images/bg.png')} resizeMode={'cover'} style={styles.imageBackground}>
                        <View style={[styles.homeSection ]}>
                            <View style={styles.directionColumnCenter}>
                                <Image source={require('../../assets/images/send.png')} style={[styles.wallet , styles.transform]} resizeMode={'contain'} />
                                <Text style={[styles.yellowText , styles.mt25 , styles.mb15]}>تم ارسال طلبك بنجاح</Text>
                                <Text style={[styles.grayText , styles.tAC]}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
                                <TouchableOpacity onPress={ () => this.props.navigation.navigate("followOrder_client")} style={[styles.yellowBtn , styles.mt50, styles.mb10]}>
                                    <Text style={styles.whiteText}>تتبع الطلب</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={ () => this.props.navigation.navigate("drawerNavigator_client")} style={[styles.yellowBtn , styles.mb10]}>
                                    <Text style={styles.whiteText}>الرجوع للرئيسية</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </Content>
            </Container>

        );
    }
}

export default OrderSent_client;