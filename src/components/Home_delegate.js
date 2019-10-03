import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, ScrollView, I18nManager, FlatList} from "react-native";
import {Container, Content,  Header, Button, Item, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'
import Swiper from 'react-native-swiper';


const height = Dimensions.get('window').height;

const orders=[
    {id:1 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:2 , name:'اسم الاسرة', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:3 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:4 , name:'اسم الاسرة', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
]

class Home_delegate extends Component {
    constructor(props){
        super(props);

        this.state={
            orders,
        }
    }

    static navigationOptions = () => ({
        drawerLabel: i18n.t('home') ,
        drawerIcon: (<Image source={require('../../assets/images/noun_home.png')} style={styles.drawerImg} resizeMode={'contain'} /> )
    })

    renderOrders = (item) => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('orderDet_delegate')} style={[styles.notiBlock , {padding:7}]}>
                <Image source={item.image} resizeMode={'cover'} style={styles.restImg}/>
                <View style={[styles.directionColumn , {flex:1}]}>
                    <View style={[styles.directionRow ]}>
                        <Text style={[styles.boldGrayText ]}>{item.name}</Text>
                    </View>
                    <View style={[styles.locationView]}>
                        <Text style={[styles.grayText , {fontSize:12} ]}>{item.date}</Text>
                    </View>
                </View>
                <View style={[styles.directionColumnCenter , { borderLeftWidth : 1 , borderLeftColor:'#f2f2f2' , paddingLeft:10}]}>
                    <View style={[styles.directionRow ]}>
                        <Text style={[styles.boldGrayText , {color:COLORS.yellow} ]}>{ i18n.t('orderNum') }</Text>
                    </View>
                    <View style={[styles.locationView]}>
                        <Text style={[styles.grayText, {fontSize:12} ]}>{item.orderNo}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {


        return (
            <Container>

                <Header style={[styles.header ]} noShadow>
                    <Button onPress={() => this.props.navigation.openDrawer()} transparent style={styles.headerBtn}>
                        <Image source={require('../../assets/images/noun_menu.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                    </Button>

                    <Text style={[styles.headerText , {right:0} ]}>{ i18n.t('home') }</Text>

                    <Button onPress={() => this.props.navigation.navigate('notification_delegate')} transparent style={styles.headerBtn}>
                        <Image source={require('../../assets/images/notification.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                    </Button>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={{}} >
                    <View style={[styles.homeSection, {marginTop:20} ]}>
                        <FlatList
                            data={this.state.orders}
                            renderItem={({item}) => this.renderOrders(item)}
                            numColumns={1}
                            keyExtractor={this._keyExtractor}
                        />
                    </View>
                </Content>
            </Container>

        );
    }
}

export default Home_delegate;