import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions,  ScrollView, I18nManager} from "react-native";
import {Container, Content,  Header, Button, Item, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'


const height = Dimensions.get('window').height;

class Notification_client extends Component {
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

                <Header style={[styles.header ]} noShadow>
                    <View style={styles.directionRow}>
                        <Button onPress={() => this.props.navigation.openDrawer()} transparent style={styles.headerBtn}>
                            <Image source={require('../../assets/images/noun_menu.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('notification_client')} transparent style={styles.headerBtn}>
                            <Image source={require('../../assets/images/notification.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                        </Button>
                    </View>

                    <Text style={[styles.headerText ]}>{ i18n.t('notifications') }</Text>

                    <View style={styles.directionRow}>
                        <Button onPress={() => this.props.navigation.navigate('cart_client')} transparent  style={styles.headerBtn}>
                            <Image source={require('../../assets/images/shopping_basket.png')} style={styles.headerMenu} resizeMode={'contain'} />
                        </Button>
                        <Text style={styles.cartNum}>1</Text>
                    </View>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={{}} >
                    <View style={[styles.homeSection , {marginTop:20}]}>
                        <TouchableOpacity style={styles.notiBlock}>
                            <Image source={require('../../assets/images/profile_pic.png')} resizeMode={'cover'} style={styles.notiImg}/>
                            <Text style={[styles.grayText , {flex:1} ]}>تم الموافقة علي طلبك من قبل مطعم اوامر</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notiBlock}>
                            <Image source={require('../../assets/images/profile_pic.png')} resizeMode={'cover'} style={styles.notiImg}/>
                            <Text style={[styles.grayText , {flex:1} ]}>قامت اسرة اوامر بعرض سعر عليك</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notiBlock}>
                            <Image source={require('../../assets/images/profile_pic.png')} resizeMode={'cover'} style={styles.notiImg}/>
                            <Text style={[styles.grayText , {flex:1} ]}>تم توصيل الطلب من قبل مندوب</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>

        );
    }
}

export default Notification_client;