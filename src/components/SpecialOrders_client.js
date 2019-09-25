import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    ImageBackground, FlatList,
} from "react-native";
import {Container, Content, Header, Button , } from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'


const priceOrders=[
    {id:1 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:2 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:3 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
]
const orders=[
    {id:1 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:2 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:3 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:4 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
]
const finishedOrders=[
    {id:1 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:2 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:3 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:3 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:4 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
]


const height = Dimensions.get('window').height;

class SpecialOrders_client extends Component {
    constructor(props){
        super(props);

        this.state={
            orderType:0,
            orders,
            finishedOrders,
            priceOrders,
        }
    }

    static navigationOptions = () => ({
        drawerLabel:  i18n.t('specialOrders')  ,
        drawerIcon: (<Image source={require('../../assets/images/noun_orderr.png')} style={styles.drawerImg} resizeMode={'contain'} /> )
    })

    _keyExtractor = (item, index) => item.id;

    priceOrder = (item) => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('priceOrderDet_client')} style={[styles.notiBlock , {padding:7}]}>
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
                        <Text style={[styles.boldGrayText , {color:COLORS.yellow} ]}>رقم الطلب</Text>
                    </View>
                    <View style={[styles.locationView]}>
                        <Text style={[styles.grayText, {fontSize:12} ]}>{item.orderNo}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    underOrders = (item) => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('orderDet_client')} style={[styles.notiBlock , {padding:7}]}>
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
                        <Text style={[styles.boldGrayText , {color:COLORS.yellow} ]}>رقم الطلب</Text>
                    </View>
                    <View style={[styles.locationView]}>
                        <Text style={[styles.grayText, {fontSize:12} ]}>{item.orderNo}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    finishedOrder = (item) => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('orderDet_client')} style={[styles.notiBlock , {padding:7}]}>
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
                        <Text style={[styles.boldGrayText , {color:COLORS.yellow} ]}>رقم الطلب</Text>
                    </View>
                    <View style={[styles.locationView]}>
                        <Text style={[styles.grayText, {fontSize:12} ]}>{item.orderNo}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }


    renderOrders(){
        if(this.state.orderType === 0){
            return(
                <FlatList
                    data={this.state.priceOrders}
                    renderItem={({item}) => this.priceOrder(item)}
                    numColumns={1}
                    keyExtractor={this._keyExtractor}
                />
            )
        } else if(this.state.orderType === 1){
            return(
                <FlatList
                    data={this.state.orders}
                    renderItem={({item}) => this.underOrders(item)}
                    numColumns={1}
                    keyExtractor={this._keyExtractor}
                />
            )
        }   else {
            return(
                <FlatList
                    data={this.state.finishedOrders}
                    renderItem={({item}) => this.finishedOrder(item)}
                    numColumns={1}
                    keyExtractor={this._keyExtractor}
                />
            )
        }
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

                    <Text style={[styles.headerText ]}>{i18n.t('specialOrders')}</Text>

                    <View style={styles.directionRow}>
                        <Button onPress={() => this.props.navigation.navigate('cart_client')} transparent  style={styles.headerBtn}>
                            <Image source={require('../../assets/images/shopping_basket.png')} style={styles.headerMenu} resizeMode={'contain'} />
                        </Button>
                        <Text style={styles.cartNum}>1</Text>
                    </View>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={{}} >
                    <ImageBackground source={require('../../assets/images/bg.png')} resizeMode={'cover'} style={styles.imageBackground}>


                        <View style={styles.orderTabs}>
                            <TouchableOpacity onPress={ () => this.setState({orderType:0})} style={[this.state.orderType === 0 ? styles.activeTab : styles.normalTab , {width:'auto'}]}>
                                <Text style={this.state.orderType === 0 ? styles.activeTabText :styles.normalTabText} >طلبات تحتاج لسعر</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => this.setState({orderType:1})} style={[this.state.orderType === 1 ? styles.activeTab : styles.normalTab , {width:'auto'}]}>
                                <Text style={this.state.orderType === 1 ? styles.activeTabText :styles.normalTabText} >طلبات قيد التنفيذ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => this.setState({orderType:2})} style={[this.state.orderType === 2 ? styles.activeTab : styles.normalTab , {width:'auto'}]}>
                                <Text style={this.state.orderType === 2 ? styles.activeTabText :styles.normalTabText} >طلبات منتهية</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.homeSection, {marginTop:20} ]}>
                            { this.renderOrders() }
                        </View>
                    </ImageBackground>
                </Content>
            </Container>

        );
    }
}

export default SpecialOrders_client;