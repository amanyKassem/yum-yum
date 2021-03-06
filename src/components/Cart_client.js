import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, ScrollView, I18nManager, FlatList} from "react-native";
import {Container, Content,  Header, Button, Item, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'
import StarRating from "./Restaurants_client";


const height = Dimensions.get('window').height;
const restaurants=[
    {id:1 , name:'اسم المطعم', location:'الرياض - المملكة العربية السعودية', image:require('../../assets/images/blurred.png')},
    {id:2 , name:'اسم المطعم', location:'الرياض - المملكة العربية السعودية', image:require('../../assets/images/blurred.png')},
    {id:3 , name:'اسم المطعم', location:'الرياض - المملكة العربية السعودية', image:require('../../assets/images/blurred.png')},
    {id:4 , name:'اسم المطعم', location:'الرياض - المملكة العربية السعودية', image:require('../../assets/images/blurred.png')},
]
class Cart_client extends Component {
    constructor(props){
        super(props);

        this.state={
            search:'',
            restaurants,
        }
    }

    static navigationOptions = () => ({
        drawerLabel: i18n.t('cart') ,
        drawerIcon: (<Image source={require('../../assets/images/noun_basket.png')} style={styles.drawerImg} resizeMode={'contain'} /> )
    })


    _keyExtractor = (item, index) => item.id;

    renderItems = (item) => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('orderNow_client')} style={[styles.notiBlock , {padding:7}]}>
                <Image source={item.image} resizeMode={'cover'} style={styles.restImg}/>
                <View style={[styles.directionColumn , {flex:1}]}>
                    <View style={[styles.directionRowSpace ]}>
                        <Text style={[styles.boldGrayText ]}>{item.name}</Text>
                    </View>
                    <View style={[styles.locationView]}>
                        <Image source={require('../../assets/images/maps.png')} style={[styles.locationImg]} resizeMode={'contain'} />
                        <Text style={[styles.grayText , {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',fontSize:12} ]}>{item.location}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
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

                    <Text style={[styles.headerText ]}>{i18n.t('cart')}</Text>

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
                    <View style={styles.topHead}>
                        <View style={styles.inputView}>
                            <Item  style={styles.inputItem} bordered>
                                <Input autoCapitalize='none'  onChangeText={(search) => this.setState({ search })} placeholder={ i18n.t('search') } placeholderTextColor={'#fff'} style={styles.modalInput}   />
                            </Item>
                            <Image source={require('../../assets/images/magnifying.png')} style={[styles.searchImg , styles.transform]} resizeMode={'contain'}/>
                        </View>
                    </View>
                    <View style={[styles.homeSection , {marginTop:20}]}>

                        <FlatList
                            data={this.state.restaurants}
                            renderItem={({item}) => this.renderItems(item)}
                            numColumns={1}
                            keyExtractor={this._keyExtractor}
                        />

                    </View>
                </Content>

            </Container>

        );
    }
}

export default Cart_client;