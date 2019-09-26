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


const height = Dimensions.get('window').height;

const orderDetArray = [
    { title: "تفاصيل الطلب"},
];
const delegateArray = [
    { title: "معلومات المندوب"},
];

class FollowOrder_client extends Component {
    constructor(props){
        super(props);

        this.state={
            selectedId: 4,
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
                <View style={[styles.notiBlock , {paddingHorizontal:30 , paddingVertical:7 , marginTop:5  , marginBottom:0}]}>
                    <View style={{flex:1}}>
                        <Text style={[styles.boldGrayText ]}>اسم المنتج</Text>
                    </View>
                    <View style={[styles.directionRow , { borderLeftWidth : 1 , borderLeftColor:'#f2f2f2' , paddingLeft:10}]}>
                        <Text style={[styles.boldGrayText , {color:COLORS.yellow , marginRight:5} ]}>25.00</Text>
                        <Text style={[styles.boldGrayText ]}>رس</Text>
                    </View>
                </View>
                <View style={[styles.notiBlock , {paddingHorizontal:30 , paddingVertical:7 , marginTop:5 , marginBottom:0 }]}>
                    <View style={{flex:1}}>
                        <Text style={[styles.boldGrayText ]}>اسم المنتج</Text>
                    </View>
                    <View style={[styles.directionRow , { borderLeftWidth : 1 , borderLeftColor:'#f2f2f2' , paddingLeft:10}]}>
                        <Text style={[styles.boldGrayText , {color:COLORS.yellow , marginRight:5} ]}>25.00</Text>
                        <Text style={[styles.boldGrayText ]}>رس</Text>
                    </View>
                </View>
                <View style={[styles.notiBlock , {paddingHorizontal:30 , paddingVertical:7 , marginTop:5 , marginBottom:0 }]}>
                    <View style={{flex:1}}>
                        <Text style={[styles.boldGrayText ]}>اسم المنتج</Text>
                    </View>
                    <View style={[styles.directionRow , { borderLeftWidth : 1 , borderLeftColor:'#f2f2f2' , paddingLeft:10}]}>
                        <Text style={[styles.boldGrayText , {color:COLORS.yellow , marginRight:5} ]}>25.00</Text>
                        <Text style={[styles.boldGrayText ]}>رس</Text>
                    </View>
                </View>


                <View style={styles.mb15}>
                    <View style={[styles.backTitle , styles.mt25 , styles.mb15]}>
                        <Text style={[styles.yellowText , {fontSize:15}]}>طريقة الدفع</Text>
                    </View>
                    <Text style={[styles.check , {marginHorizontal: 30}]}>الدفع عند الاستلام</Text>
                </View>

                <View style={styles.mb15}>
                    <View style={[styles.backTitle , styles.mb15]}>
                        <Text style={[styles.yellowText , {fontSize:15}]}>تفاصيل التسليم</Text>
                    </View>
                    <View style={{paddingHorizontal:30}}>
                        <Text style={[styles.check , {fontSize: 13}]}>موقع التسليم</Text>
                        <View style={[styles.directionRowSpace , styles.mt15]}>
                            <View style={[styles.locationView , {marginTop:0}]}>
                                <Image source={require('../../assets/images/maps.png')} style={[styles.locationImg]} resizeMode={'contain'} />
                                <Text style={[styles.grayText , {fontSize:12} ]}>الرياض - المملكة العربية السعودية</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={[styles.grayText , {color:COLORS.yellow,fontSize:12} ]}>( مشاهده الموقع )</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        );
    }

    _renderDelegateHeader(item, expanded) {
        return (
            <View style={[styles.backTitle,styles.directionRowSpace]}>
                <Text style={[styles.yellowText , {color:expanded ? COLORS.yellow:'#575757',fontSize:15}]}>{item.title}</Text>
                {expanded
                    ? <Icon style={[styles.arrowIcon , {color:COLORS.yellow}]} type={'Ionicons'} name="md-arrow-dropup" />
                    : <Icon style={styles.arrowIcon} type={'Ionicons'} name="md-arrow-dropdown" />}
            </View>
        );
    }
    _renderDelegateContent(item) {
        return (
            <View style={{paddingHorizontal:30}}>
                <Text style={[styles.check ,styles.mt15 , styles.mb15 , {fontSize: 13}]}>اسم العميل</Text>
                <View style={[styles.backTitle , styles.mb15]}>
                    <Text style={[styles.check , {fontSize:13}]}>اماني قاسم</Text>
                </View>
                <TouchableOpacity style={[styles.mb15,{alignSelf:'center'}]}>
                    <Text style={[styles.yellowText , {fontSize:13} ]}>( مشاهده تتبع المندوب )</Text>
                </TouchableOpacity>
            </View>
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

                    <Text style={[styles.headerText , {right:0} ]}>تفاصيل الطلب</Text>

                    <View style={styles.directionRow}>
                        <View>
                            <Button onPress={() => this.props.navigation.navigate('cart_client')} transparent  style={styles.headerBtn}>
                                <Image source={require('../../assets/images/shopping_basket.png')} style={styles.headerMenu} resizeMode={'contain'} />
                            </Button>
                            <Text style={styles.cartNum}>1</Text>
                        </View>
                        <Button onPress={() => this.props.navigation.goBack()} transparent  style={styles.headerBtn}>
                            <Image source={require('../../assets/images/arrow_left.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                        </Button>
                    </View>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={{}} >
                    <View style={[styles.w100 , styles.mt15 , {flex:1}]}>
                        <View style={[styles.notiBlock , {padding:7 , marginBottom:15 , marginHorizontal:23}]}>
                            <Image source={require('../../assets/images/blurred.png')} resizeMode={'cover'} style={styles.restImg}/>
                            <View style={[styles.directionColumn , {flex:1}]}>
                                <View style={[styles.directionRow ]}>
                                    <Text style={[styles.boldGrayText ]}>اسم المطعم</Text>
                                </View>
                                <View style={[styles.locationView]}>
                                    <Text style={[styles.grayText , {fontSize:12} ]}>9/7/2019</Text>
                                </View>
                            </View>
                            <View style={[styles.directionColumnCenter , { borderLeftWidth : 1 , borderLeftColor:'#f2f2f2' , paddingLeft:10}]}>
                                <View style={[styles.directionRow ]}>
                                    <Text style={[styles.boldGrayText , {color:COLORS.yellow} ]}>رقم الطلب</Text>
                                </View>
                                <View style={[styles.locationView]}>
                                    <Text style={[styles.grayText, {fontSize:12} ]}>12345</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.backTitle}>
                            <Text style={[styles.yellowText , {fontSize:15}]}>متابعة الطلب</Text>
                        </View>

                        <View style={styles.followBlock}>

                            <View style={styles.followStep}>
                                <View style={[styles.yellowCircle ,
                                    {backgroundColor:this.state.selectedId == 1 || this.state.selectedId == 2 || this.state.selectedId == 3 || this.state.selectedId == 4 ?COLORS.yellow :'#fff',
                                        borderColor:this.state.selectedId == 1 || this.state.selectedId == 2 || this.state.selectedId == 3 || this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray}]}>
                                    <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                                </View>
                                <Text style={[styles.check]}>تم استلام الطلب</Text>
                                <View style={[styles.stepLine ,
                                    {backgroundColor:this.state.selectedId == 1 || this.state.selectedId == 2 || this.state.selectedId == 3 || this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray,}]}/>
                            </View>

                            <View style={[styles.followStep ]}>
                                <View style={[styles.yellowCircle ,
                                    {backgroundColor:this.state.selectedId == 2 || this.state.selectedId == 3 || this.state.selectedId == 4 ?COLORS.yellow :'#fff',
                                    borderColor:this.state.selectedId == 2 || this.state.selectedId == 3 || this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray}]}>
                                    <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                                </View>
                                <Text style={[styles.check]}>جاري تجهيز الطلب</Text>
                                <View style={[styles.stepLine ,
                                    {backgroundColor:this.state.selectedId == 2 || this.state.selectedId == 3 || this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray,}]}/>
                            </View>

                            <View style={[styles.followStep ]}>
                                <View style={[styles.yellowCircle ,
                                    {backgroundColor:this.state.selectedId == 3 || this.state.selectedId == 4 ?COLORS.yellow :'#fff',
                                        borderColor:this.state.selectedId == 3 || this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray}]}>
                                    <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                                </View>
                                <Text style={[styles.check]}>تم تسليم الطلب للمندوب</Text>
                                <View style={[styles.stepLine ,
                                    {backgroundColor:this.state.selectedId == 3 || this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray,}]}/>
                            </View>

                            <View style={[styles.followStep ]}>
                                <View style={[styles.yellowCircle ,
                                    {backgroundColor:this.state.selectedId == 4 ?COLORS.yellow :'#fff',
                                        borderColor:this.state.selectedId == 4  ?COLORS.yellow :COLORS.boldGray}]}>
                                    <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                                </View>
                                <Text style={[styles.check]}>تم توصيل الطلب</Text>
                            </View>

                        </View>


                        <Accordion
                            dataArray={orderDetArray}
                            animation={true}
                            expanded={true}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                            style={styles.accordion}
                        />


                        {
                            this.state.selectedId == 3 || this.state.selectedId == 4 ?
                                <Accordion
                                    dataArray={delegateArray}
                                    animation={true}
                                    expanded={true}
                                    renderHeader={this._renderDelegateHeader}
                                    renderContent={this._renderDelegateContent}
                                    style={styles.accordion}
                                /> :<View/>
                        }

                        {
                            this.state.selectedId == 4 ?
                                <TouchableOpacity onPress={ () => this.props.navigation.navigate("addRate_client")} style={[styles.yellowBtn, {borderRadius: 0, height: 50 }]}>
                                    <Text style={styles.whiteText}>اضف تقييمك</Text>
                                </TouchableOpacity>
                                : <View/>
                        }

                    </View>
                </Content>


            </Container>

        );
    }
}

export default FollowOrder_client;