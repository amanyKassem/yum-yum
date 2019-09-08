import React, { Component } from "react";
import {View, Text, Image, Animated, Dimensions, ScrollView, TouchableOpacity, FlatList} from "react-native";
import {Container, Content, Header, Button, Item, Input, CheckBox, Icon} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'
import StarRating from 'react-native-star-rating';


const height = Dimensions.get('window').height;

class ProductDet_client extends Component {
    constructor(props){
        super(props);

        this.state={
            backgroundColor: new Animated.Value(0),
            availabel: 0,
            starCount:3,
            activeType:0,
            value:0
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null,
    });


    setAnimate(availabel){
        if (availabel === 0){
            Animated.timing(
                this.state.backgroundColor,
                {
                    toValue: 1,
                    duration: 1000,
                },
            ).start();
            this.setState({ availabel: 1 });
        }else {
            Animated.timing(
                this.state.backgroundColor,
                {
                    toValue: 0,
                    duration: 1000,
                },
            ).start();
            this.setState({ availabel: 0 });
        }

        console.log(availabel);
    }

    headerScrollingAnimation(e){
        if (e.nativeEvent.contentOffset.y > 30){
            console.log(e.nativeEvent.contentOffset.y);
            this.setAnimate(0)
        } else{
            this.setAnimate(1)
        }
    }



    increment(){
        this.setState({value: this.state.value + 1 })
    }

    decrement(){
        if (this.state.value === 0){
            this.setState({value: 0})
        } else {
            this.setState({value: this.state.value - 1})
        }
    }



    render() {
        const backgroundColor = this.state.backgroundColor.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(0, 0, 0, 0)', '#00000099']
        });

        return (
            <Container>

                <Header style={[styles.header , {backgroundColor:'transparent' , paddingLeft:0 , paddingRight:0} ]} noShadow>
                    <Animated.View style={[styles.animatedHeader ,{ backgroundColor: backgroundColor}]}>
                        <View style={styles.directionRow}>
                            <Button onPress={() => this.props.navigation.openDrawer()} transparent style={styles.headerBtn}>
                                <Image source={require('../../assets/images/noun_menu.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                            </Button>
                            <Button onPress={() => this.props.navigation.navigate('notification_client')} transparent style={styles.headerBtn}>
                                <Image source={require('../../assets/images/notification.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                            </Button>
                        </View>

                        <Text style={[styles.headerText , {right:0} ]}>تفاصيل المنتج</Text>

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
                    </Animated.View>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={styles.homecontent} onScroll={e => this.headerScrollingAnimation(e) }>

                    <View style={[styles.headImg, {borderBottomLeftRadius:25 ,borderBottomRightRadius:25 , height:250 , overflow:'hidden'}]}>
                        <Image source={require('../../assets/images/blurred.png')} style={styles.swiperimage} resizeMode={'cover'}/>
                    </View>


                    <View style={[styles.homeSection , {marginTop:20}]}>
                        <View style={[styles.directionColumn , {flex:1}]}>
                            <View style={[styles.directionRowSpace ]}>
                                <Text style={[styles.productName ]}>اسم المنتج</Text>
                                <Text style={[styles.productName , {color:COLORS.yellow} ]}>25 ر.س</Text>
                            </View>
                            <View style={[styles.locationView]}>
                                <Text style={[styles.grayText , {lineHeight:22} ]}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة </Text>
                            </View>
                        </View>

                        <View style={styles.line}/>

                        <View style={[styles.directionColumn , {flex:1}]}>
                            <View style={[styles.directionRow , styles.locationView , {marginTop:0} ]}>
                                <Text style={[styles.productName ]}>اضافات</Text>
                                <Text style={[styles.grayText ,{marginLeft:5}]}>(اختياري)</Text>
                            </View>
                            <View style={[styles.locationView , styles.directionColumn]}>
                                <View style={[styles.directionRowSpace  , styles.w100 , styles.mt15]}>
                                    <View style={[ styles.directionRow]}>
                                        <CheckBox checked={false}  color={COLORS.yellow} style={styles.quesCheckBox} />
                                        <Text style={[styles.check]}>اسم الاضافة</Text>
                                    </View>
                                    <Text style={[styles.check, {color:COLORS.yellow}]}>500 ر.س</Text>
                                </View>
                                <View style={[styles.directionRowSpace  , styles.w100 , styles.mt15]}>
                                    <View style={[ styles.directionRow]}>
                                        <CheckBox checked={true}  color={COLORS.yellow} style={styles.quesCheckBox} />
                                        <Text style={[styles.check]}>اسم الاضافة</Text>
                                    </View>
                                    <Text style={[styles.check, {color:COLORS.yellow}]}>500 ر.س</Text>
                                </View>
                                <View style={[styles.directionRowSpace  , styles.w100 , styles.mt15]}>
                                    <View style={[ styles.directionRow]}>
                                        <CheckBox checked={false}  color={COLORS.yellow} style={styles.quesCheckBox} />
                                        <Text style={[styles.check]}>اسم الاضافة</Text>
                                    </View>
                                    <Text style={[styles.check, {color:COLORS.yellow}]}>500 ر.س</Text>
                                </View>
                                <View style={[styles.directionRowSpace  , styles.w100 , styles.mt15]}>
                                    <View style={[ styles.directionRow]}>
                                        <CheckBox checked={false}  color={COLORS.yellow} style={styles.quesCheckBox} />
                                        <Text style={[styles.check]}>اسم الاضافة</Text>
                                    </View>
                                    <Text style={[styles.check, {color:COLORS.yellow}]}>500 ر.س</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.line}/>

                        <View style={[styles.directionColumn , {flex:1}]}>
                            <View style={[styles.locationView , {marginTop:0} ]}>
                                <Text style={[styles.productName ]}>حدد الكمية المطلوبة</Text>
                            </View>
                            <View style={[styles.locationView , styles.directionColumn ]}>
                                <View style={styles.counterParent}>
                                    <TouchableOpacity onPress={() => this.increment()} style={styles.touchPlus}>
                                        <Icon type={'Entypo'} name={'plus'} style={styles.plus} />
                                    </TouchableOpacity>
                                    <Text style={[styles.countText ]}>{this.state.value}</Text>
                                    <TouchableOpacity onPress={() => this.decrement()} style={styles.touchMinus}>
                                        <Icon type={'Entypo'} name={'minus'} style={styles.minus} />
                                    </TouchableOpacity>
                                </View>
                                <View style={[ styles.total]}>
                                    <Text style={[styles.check]}>الاجمالي</Text>
                                    <Text style={[styles.check, {color:COLORS.yellow , marginLeft:10}]}>20.00 ر.س</Text>
                                </View>
                                <TouchableOpacity onPress={ () => this.props.navigation.navigate('orderNow_client')} style={[styles.orderNowBtn]}>
                                    <Text style={styles.whiteText}>اطلب الآن</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </Content>
            </Container>

        );
    }
}

export default ProductDet_client;