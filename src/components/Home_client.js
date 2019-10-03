import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions,  ScrollView, I18nManager} from "react-native";
import {Container, Content,  Header, Button, Item, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'
import Swiper from 'react-native-swiper';


const height = Dimensions.get('window').height;

class Home_client extends Component {
    constructor(props){
        super(props);

        this.state={
        }
    }

    static navigationOptions = () => ({
        drawerLabel: i18n.t('home') ,
        drawerIcon: (<Image source={require('../../assets/images/noun_home.png')} style={styles.drawerImg} resizeMode={'contain'} /> )
    })

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

                    <Text style={[styles.headerText ]}>{ i18n.t('home') }</Text>

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
                    <View style={styles.topHead}/>
                    <View style={styles.eventswiper}>
                        <Swiper dotStyle={styles.eventdoteStyle} activeDotStyle={styles.eventactiveDot}
                                containerStyle={{}} showsButtons={false} autoplay={true}>
                            <View style={styles.swiperimageEvent}>
                                <Image source={require('../../assets/images/imagee.png')} style={styles.swiperimage} resizeMode={'cover'}/>
                            </View>
                            <View style={styles.swiperimageEvent}>
                                <Image source={require('../../assets/images/blurred.png')} style={styles.swiperimage} resizeMode={'cover'}/>
                            </View>
                            <View style={styles.swiperimageEvent}>
                                <Image source={require('../../assets/images/imagee.png')}  style={styles.swiperimage} resizeMode={'cover'}/>
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.homeSection}>
                        <Text style={[styles.titleText , {alignSelf:'flex-start'}]}>{ i18n.t('categories') }</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('restaurants_client')} style={styles.catView}>
                            <Image source={require('../../assets/images/blurred.png')} style={styles.swiperimage} resizeMode={'cover'}/>
                            <View style={styles.overlay}>
                                <Image source={require('../../assets/images/dinner.png')} style={[styles.catImg , styles.transform]} resizeMode={'contain'} />
                                <Text style={[styles.catText]}>{ i18n.t('restaurants') }</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('families_client')} style={styles.catView}>
                            <Image source={require('../../assets/images/cake.png')} style={styles.swiperimage} resizeMode={'cover'}/>
                            <View style={styles.overlay}>
                                <Image source={require('../../assets/images/home.png')} style={[styles.catImg , styles.transform]} resizeMode={'contain'} />
                                <Text style={[styles.catText]}>{ i18n.t('prodFamilies') }</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>

        );
    }
}

export default Home_client;