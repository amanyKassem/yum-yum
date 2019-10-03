import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    I18nManager,
    Animated,
    KeyboardAvoidingView
} from "react-native";
import {Container, Content, Header, Button, Item, Input, Form, Accordion, Icon} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'
import Communications from "react-native-communications";


const height = Dimensions.get('window').height;

const orderDetArray = [
    { title: i18n.t('orderDet') },
];
const clientArray = [
    { title: i18n.t('customerInfo')},
];

class FollowOrder_delegate extends Component {
    constructor(props){
        super(props);

        this.state={
            anotherDetails:false,
            selectedId:1,
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null,
    });

    orderStep(stepId){
        this.setState({ selectedId: stepId });

    }

    _renderHeader(item, expanded) {
        return (
            <View style={[styles.backTitle,styles.directionRowSpace]}>
                <Text style={[styles.yellowText , {color:expanded ? COLORS.yellow:'#575757',fontSize:15}]}>{item.title}</Text>
                {expanded
                    ? <Icon style={[styles.arrowIcon , {color:COLORS.yellow}]} type={'Ionicons'} name="md-arrow-dropup" />
                    : <Icon style={styles.arrowIcon} type={'Ionicons'} name="md-arrow-dropdown" />}
            </View>
        );
    }
    _renderContent(item) {
        return (
            <View>
                {
                    this.state.anotherDetails ?
                        <Text style={[styles.boldGrayText, {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',marginHorizontal:30}]}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربىالمساحة، لقد تم توليد هذا النص من مولد النص العربى</Text>
                        :
                        <View>
                            <View style={[styles.notiBlock , {paddingHorizontal:30 , paddingVertical:7 , marginTop:5  , marginBottom:0}]}>
                                <View style={{flex:1}}>
                                    <Text style={[styles.boldGrayText  , styles.asfs ]}>اسم المنتج</Text>
                                </View>
                                <View style={[styles.directionRow , { borderLeftWidth : 1 , borderLeftColor:'#f2f2f2' , paddingLeft:10}]}>
                                    <Text style={[styles.boldGrayText , {color:COLORS.yellow , marginRight:5} ]}>25.00</Text>
                                    <Text style={[styles.boldGrayText ]}>{i18n.t('RS')}</Text>
                                </View>
                            </View>
                            <View style={[styles.notiBlock , {paddingHorizontal:30 , paddingVertical:7 , marginTop:5 , marginBottom:0 }]}>
                                <View style={{flex:1}}>
                                    <Text style={[styles.boldGrayText  , styles.asfs ]}>اسم المنتج</Text>
                                </View>
                                <View style={[styles.directionRow , { borderLeftWidth : 1 , borderLeftColor:'#f2f2f2' , paddingLeft:10}]}>
                                    <Text style={[styles.boldGrayText , {color:COLORS.yellow , marginRight:5} ]}>25.00</Text>
                                    <Text style={[styles.boldGrayText ]}>{i18n.t('RS')}</Text>
                                </View>
                            </View>
                            <View style={[styles.notiBlock , {paddingHorizontal:30 , paddingVertical:7 , marginTop:5 , marginBottom:0 }]}>
                                <View style={{flex:1}}>
                                    <Text style={[styles.boldGrayText  , styles.asfs ]}>اسم المنتج</Text>
                                </View>
                                <View style={[styles.directionRow , { borderLeftWidth : 1 , borderLeftColor:'#f2f2f2' , paddingLeft:10}]}>
                                    <Text style={[styles.boldGrayText , {color:COLORS.yellow , marginRight:5} ]}>25.00</Text>
                                    <Text style={[styles.boldGrayText ]}>{i18n.t('RS')}</Text>
                                </View>
                            </View>
                        </View>
                }


                <View style={styles.mb15}>
                    <View style={[styles.backTitle , styles.mt25 , styles.mb15]}>
                        <Text style={[styles.yellowText , styles.asfs , {fontSize:15}]}>{i18n.t('paymentMethod')}</Text>
                    </View>
                    <Text style={[styles.check  , styles.asfs , {marginHorizontal: 30}]}>الدفع عند الاستلام</Text>
                </View>

                <View style={styles.mb15}>
                    <View style={[styles.backTitle , styles.mb15]}>
                        <Text style={[styles.yellowText  , styles.asfs , {fontSize:15}]}>{i18n.t('deliveryDetails')}</Text>
                    </View>
                    <View style={[ styles.mb15 , {paddingHorizontal:30}]}>
                        <Text style={[styles.check  , styles.asfs , {fontSize: 13}]}>{i18n.t('deliveryLocation')}</Text>
                        <View style={[styles.directionRowSpace , styles.mt15]}>
                            <View style={[styles.locationView , {marginTop:0}]}>
                                <Image source={require('../../assets/images/maps.png')} style={[styles.locationImg]} resizeMode={'contain'} />
                                <Text style={[styles.grayText , {fontSize:12} ]}>الرياض - المملكة العربية السعودية</Text>
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('location_delegate')}>
                                <Text style={[styles.grayText , {color:COLORS.yellow,fontSize:12} ]}>( {i18n.t('seeLocation')} )</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {
                        this.state.anotherDetails?
                            <View style={{paddingHorizontal:30}}>
                                <Text style={[styles.check ,  styles.asfs , {fontSize: 13}]}>{i18n.t('deliveryTime')}</Text>
                                <View style={[styles.directionRowSpace , styles.mt15]}>
                                    <Text style={[styles.grayText , {fontSize:12} ]}>9/7/2020</Text>
                                    <Text style={[styles.grayText , {fontSize:12} ]}>8:00ص</Text>
                                </View>
                            </View>:<View/>
                    }

                </View>

            </View>
        );
    }

    _renderClientHeader(item, expanded) {
        return (
            <View style={[styles.backTitle,styles.directionRowSpace]}>
                <Text style={[styles.yellowText , {color:expanded ? COLORS.yellow:'#575757',fontSize:15}]}>{item.title}</Text>
                {expanded
                    ? <Icon style={[styles.arrowIcon , {color:COLORS.yellow}]} type={'Ionicons'} name="md-arrow-dropup" />
                    : <Icon style={styles.arrowIcon} type={'Ionicons'} name="md-arrow-dropdown" />}
            </View>
        );
    }
    _renderClientContent(item) {
        return (
            <View style={{paddingHorizontal:30}}>
                <Text style={[styles.check ,styles.mt15  , styles.asfs , styles.mb15 , {fontSize: 13}]}>{i18n.t('customerName')}</Text>
                <View style={[styles.backTitle , styles.mb15]}>
                    <Text style={[styles.check  , styles.asfs , {fontSize:13}]}>اماني قاسم</Text>
                </View>
                <Text style={[styles.check ,  styles.asfs , styles.mb15 , {fontSize: 13}]}>{i18n.t('phoneNumber')}</Text>
                <View style={styles.directionRowSpace}>
                    <View style={[styles.backTitle , {width:'79%'}]}>
                        <Text style={[styles.check , {fontSize:13 , alignSelf:'flex-start'}]}>0123456789</Text>
                    </View>
                    <TouchableOpacity onPress={() => Communications.phonecall('0123654789', true)} style={[styles.callBtn]}>
                        <Text style={styles.whiteText}>{i18n.t('call')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {


        return (
            <Container>


                <Header style={[styles.header ]} noShadow>
                    <Button onPress={() => this.props.navigation.openDrawer()} transparent style={styles.headerBtn}>
                        <Image source={require('../../assets/images/noun_menu.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                    </Button>

                    <Text style={[styles.headerText , {right:-19}]}>{i18n.t('orderDet')}</Text>

                    <View style={styles.directionRow}>
                        <Button onPress={() => this.props.navigation.navigate('notification_delegate')} transparent style={styles.headerBtn}>
                            <Image source={require('../../assets/images/notification.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                        </Button>
                        <Button onPress={() => this.props.navigation.goBack()} transparent  style={styles.headerBtn}>
                            <Image source={require('../../assets/images/arrow_left.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                        </Button>
                    </View>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={{}} >
                    <View style={[styles.w100 , styles.mt15 , {flex:1}]}>
                        <View style={[styles.notiBlock , {padding:3 , marginBottom:15 , marginHorizontal:23}]}>
                            <Image source={require('../../assets/images/blurred.png')} resizeMode={'cover'} style={[styles.restImg , {marginRight:6}]}/>
                            <View style={[styles.directionColumn , {flex:1, marginRight:2}]}>
                                <Text style={[styles.boldGrayText  ,  styles.asfs]}>اسم الاسرة</Text>
                                <View style={[styles.locationView]}>
                                    <Image source={require('../../assets/images/maps.png')} style={[styles.locationImg]} resizeMode={'contain'} />
                                    <Text style={[styles.grayText , {fontSize:10} ]}>الرياض - المملكة العربية السعودية</Text>
                                </View>
                                <View style={[styles.locationView]}>
                                    <Image source={require('../../assets/images/maps.png')}
                                           style={[styles.locationImg]} resizeMode={'contain'}/>
                                    <Text style={[styles.grayText, {fontSize: 10}]}>0123456789</Text>
                                </View>
                            </View>
                            <View style={[styles.directionColumnCenter , { borderLeftWidth : 1 , borderLeftColor:'#f2f2f2' , paddingLeft:5}]}>
                                <View style={[styles.directionRow ]}>
                                    <Text style={[styles.boldGrayText , {color:COLORS.yellow} ]}>{i18n.t('orderNum')}</Text>
                                </View>
                                <View style={[styles.locationView]}>
                                    <Text style={[styles.grayText, {fontSize:12} ]}>12345</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.backTitle}>
                            <Text style={[styles.yellowText ,  styles.asfs , {fontSize:15}]}>{i18n.t('followOrder')}</Text>
                        </View>

                        <View style={styles.followBlock}>

                            <View style={styles.followStep}>
                                <View style={[styles.yellowCircle ,
                                    {backgroundColor:this.state.selectedId == 1 || this.state.selectedId == 2 || this.state.selectedId == 3 || this.state.selectedId == 4 ?COLORS.yellow :'#fff',
                                        borderColor:this.state.selectedId == 1 || this.state.selectedId == 2 || this.state.selectedId == 3 || this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray}]}>
                                    <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                                </View>
                                <Text style={[styles.check]}>{i18n.t('orderProcessed')}</Text>
                                <View style={[styles.stepLine ,
                                    {backgroundColor:this.state.selectedId == 1 || this.state.selectedId == 2 || this.state.selectedId == 3 || this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray,}]}/>
                            </View>

                            <View style={[styles.followStep ]}>
                                <View style={[styles.yellowCircle ,
                                    {backgroundColor:this.state.selectedId == 2 || this.state.selectedId == 3 || this.state.selectedId == 4 ?COLORS.yellow :'#fff',
                                        borderColor:this.state.selectedId == 2 || this.state.selectedId == 3 || this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray}]}>
                                    <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                                </View>
                                <Text style={[styles.check]}>{i18n.t('orderReceived')}</Text>
                                <View style={[styles.stepLine ,
                                    {backgroundColor:this.state.selectedId == 2 || this.state.selectedId == 3 || this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray,}]}/>
                            </View>

                            <View style={[styles.followStep ]}>
                                <View style={[styles.yellowCircle ,
                                    {backgroundColor:this.state.selectedId == 3 || this.state.selectedId == 4 ?COLORS.yellow :'#fff',
                                        borderColor:this.state.selectedId == 3 || this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray}]}>
                                    <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                                </View>
                                <Text style={[styles.check]}>{i18n.t('orderHasSent')}</Text>
                                <View style={[styles.stepLine ,
                                    {backgroundColor:this.state.selectedId == 3 || this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray,}]}/>
                            </View>

                            <View style={[styles.followStep ]}>
                                <View style={[styles.yellowCircle ,
                                    {backgroundColor:this.state.selectedId == 4 ?COLORS.yellow :'#fff',
                                        borderColor:this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray}]}>
                                    <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                                </View>
                                <Text style={[styles.check]}>{i18n.t('orderHasReceived')}</Text>
                            </View>

                        </View>


                        <Accordion
                            dataArray={orderDetArray}
                            animation={true}
                            expanded={true}
                            renderHeader={this._renderHeader}
                            renderContent={() => this._renderContent()}
                            style={styles.accordion}
                        />

                        <Accordion
                            dataArray={clientArray}
                            animation={true}
                            expanded={true}
                            renderHeader={this._renderClientHeader}
                            renderContent={() => this._renderClientContent() }
                            style={styles.accordion}
                        />



                        {
                            this.state.selectedId == 1?
                                <TouchableOpacity onPress={ () => this.orderStep(2)} style={[styles.yellowBtn , styles.mt15, styles.mb10 , {width:'90%' , alignSelf: 'center'}]}>
                                    <Text style={styles.whiteText}>{i18n.t('orderHasReceived')}</Text>
                                </TouchableOpacity>
                                :<View/>
                        }

                        {
                            this.state.selectedId == 2?
                                <TouchableOpacity onPress={ () => this.orderStep(4)} style={[styles.yellowBtn , styles.mt15, styles.mb10 , {width:'90%' , alignSelf: 'center'}]}>
                                    <Text style={styles.whiteText}>{i18n.t('orderHasSent')}</Text>
                                </TouchableOpacity>
                                :<View/>
                        }

                        {
                            this.state.selectedId == 4?
                                <TouchableOpacity onPress={ () => this.props.navigation.navigate("home_delegate")} style={[styles.yellowBtn , styles.mt15, styles.mb10 , {width:'90%' , alignSelf: 'center'}]}>
                                    <Text style={styles.whiteText}>{i18n.t('home')}</Text>
                                </TouchableOpacity>
                                :<View/>
                        }


                    </View>
                </Content>


            </Container>

        );
    }
}

export default FollowOrder_delegate;