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


const orders=[
    {id:1 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:2 , name:'اسم الاسرة', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:3 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:4 , name:'اسم الاسرة', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
]
const finishedOrders=[
    {id:1 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:2 , name:'اسم الاسرة', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:3 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:3 , name:'اسم الاسرة', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
    {id:4 , name:'اسم المطعم', date:'9/7/2019', orderNo :'123456' ,  image:require('../../assets/images/blurred.png')},
]


const height = Dimensions.get('window').height;

class MyOrders_delegate extends Component {
    constructor(props){
        super(props);

        this.state={
            orderType:0,
            orders,
            finishedOrders,
        }
    }

    static navigationOptions = () => ({
        drawerLabel:  i18n.t('orders')  ,
        drawerIcon: (<Image source={require('../../assets/images/noun_order.png')} style={styles.drawerImg} resizeMode={'contain'} /> )
    })

    _keyExtractor = (item, index) => item.id;

    underOrders = (item) => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('followOrder_delegate')} style={[styles.notiBlock , {padding:7}]}>
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
                        <Text style={[styles.boldGrayText , {color:COLORS.yellow} ]}>{i18n.t('orderNum')}</Text>
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
            <View style={[styles.notiBlock , {padding:7}]}>
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
                        <Text style={[styles.boldGrayText , {color:COLORS.yellow} ]}>{i18n.t('orderNum')}</Text>
                    </View>
                    <View style={[styles.locationView]}>
                        <Text style={[styles.grayText, {fontSize:12} ]}>{item.orderNo}</Text>
                    </View>
                </View>
            </View>
        );
    }


    renderOrders(){
        if(this.state.orderType === 0){
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
                    <Button onPress={() => this.props.navigation.openDrawer()} transparent style={styles.headerBtn}>
                        <Image source={require('../../assets/images/noun_menu.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                    </Button>

                    <Text style={[styles.headerText , {right:0} ]}>{i18n.t('myOrders')}</Text>

                    <Button onPress={() => this.props.navigation.navigate('notification_delegate')} transparent style={styles.headerBtn}>
                        <Image source={require('../../assets/images/notification.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                    </Button>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={{}} >
                    <ImageBackground source={require('../../assets/images/bg.png')} resizeMode={'cover'} style={styles.imageBackground}>


                        <View style={styles.orderTabs}>
                            <TouchableOpacity onPress={ () => this.setState({orderType:0})} style={this.state.orderType === 0 ? styles.activeTab : styles.normalTab}>
                                <Text style={this.state.orderType === 0 ? styles.activeTabText :styles.normalTabText} >{i18n.t('orderInProgress')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => this.setState({orderType:1})} style={this.state.orderType === 1 ? styles.activeTab : styles.normalTab}>
                                <Text style={this.state.orderType === 1 ? styles.activeTabText :styles.normalTabText} >{i18n.t('finishedOrders')}</Text>
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

export default MyOrders_delegate;