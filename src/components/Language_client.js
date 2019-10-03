import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    I18nManager,
    ImageBackground,
} from "react-native";
import {Container, Content, Header, Button , Radio} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'


const height = Dimensions.get('window').height;

class Language_client extends Component {
    constructor(props){
        super(props);

        this.state={
            lang:'ar'
        }
    }

    static navigationOptions = () => ({
        drawerLabel:  i18n.t('appLang')  ,
        drawerIcon: (<Image source={require('../../assets/images/world.png')} style={styles.drawerImg} resizeMode={'contain'} /> )
    })


    selectLang(type){
        this.setState({lang:type})
    }



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

                    <Text style={[styles.headerText ]}>{i18n.t('appLang')}</Text>

                    <View style={styles.directionRow}>
                        <Button onPress={() => this.props.navigation.navigate('cart_client')} transparent  style={styles.headerBtn}>
                            <Image source={require('../../assets/images/shopping_basket.png')} style={styles.headerMenu} resizeMode={'contain'} />
                        </Button>
                        <View style={styles.cartNum}>
                            <Text style={styles.cartNumText}>12</Text>
                        </View>
                    </View>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={{}} >
                    <ImageBackground source={require('../../assets/images/bg.png')} resizeMode={'cover'} style={styles.imageBackground}>
                        <View style={[styles.backTitle, {marginTop:20}]}>
                            <Text style={[styles.titleText , styles.asfs]}>{i18n.t('chooseLang')}</Text>
                        </View>
                        <View style={[styles.homeSection, {marginTop:20} ]}>

                            <View style={[styles.directionRow , styles.mb15]}>
                                <Radio onPress={() => this.selectLang('ar')} color={'#575757'} selectedColor={COLORS.yellow} selected={this.state.lang === 'ar' ? true : false} />
                                <Text onPress={() => this.selectLang('ar')} style={[styles.titleText , styles.ml10 ]}>العربية</Text>
                            </View>

                            <View style={styles.directionRow}>
                                <Radio onPress={() => this.selectLang('en')} color={'#575757'} selectedColor={COLORS.yellow} selected={this.state.lang === 'en' ? true : false} />
                                <Text onPress={() => this.selectLang('en')} style={[styles.titleText , styles.ml10 ]}>English</Text>
                            </View>

                        </View>
                    </ImageBackground>
                </Content>
            </Container>

        );
    }
}

export default Language_client;