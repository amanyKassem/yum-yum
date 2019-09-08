import React, { Component } from "react";
import {View, Text, Image, Animated, Dimensions, ScrollView, TouchableOpacity, FlatList} from "react-native";
import {Container, Content,  Header, Button, Item, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'
import StarRating from 'react-native-star-rating';


const height = Dimensions.get('window').height;
const restaurants=[
    {id:1 , name:'اسم المنتج', price:'25 ر.س', image:require('../../assets/images/blurred.png')},
    {id:2 , name:'اسم المنتج', price:'25 ر.س', image:require('../../assets/images/blurred.png')},
    {id:3 , name:'اسم المنتج', price:'25 ر.س', image:require('../../assets/images/blurred.png')},
    {id:4 , name:'اسم المنتج', price:'25 ر.س', image:require('../../assets/images/blurred.png')},
]


class RestDet_client extends Component {
    constructor(props){
        super(props);

        this.state={
            backgroundColor: new Animated.Value(0),
            availabel: 0,
            starCount:3,
            activeType:0,
            restaurants,
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null,
    });

    _keyExtractor = (item, index) => item.id;

    renderItems = (item) => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('productDet_client')} style={[styles.notiBlock , {padding:7}]}>
                <Image source={item.image} resizeMode={'cover'} style={styles.restImg}/>
                <View style={[styles.directionColumn , {flex:1}]}>
                    <View style={[styles.directionRowSpace ]}>
                        <Text style={[styles.boldGrayText ]}>{item.name}</Text>
                        <Text style={[styles.boldGrayText , {color:COLORS.yellow} ]}>{item.price}</Text>

                    </View>
                    <View style={[styles.locationView]}>
                        <Text style={[styles.grayText , {fontSize:13 , lineHeight:16} ]}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

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

                        <Text style={[styles.headerText , {right:0} ]}>تفاصيل المطعم</Text>

                        <View style={styles.directionRow}>
                            <View>
                                <Button onPress={() => this.props.navigation.navigate('cart_client')} transparent  style={styles.headerBtn}>
                                    <Image source={require('../../assets/images/shopping_basket.png')} style={styles.headerMenu} resizeMode={'contain'} />
                                </Button>
                                <Text style={styles.cartNum}>1</Text>
                            </View>
                            <Button onPress={() => this.props.navigation.goBack() } transparent  style={styles.headerBtn}>
                                <Image source={require('../../assets/images/arrow_left.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                            </Button>
                        </View>
                    </Animated.View>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={styles.homecontent} onScroll={e => this.headerScrollingAnimation(e) }>

                    <View style={styles.headImg}>
                        <Image source={require('../../assets/images/imagee.png')} style={styles.swiperimage} resizeMode={'cover'}/>
                        <View style={[styles.sideImgView , styles.w100 , { top:120}]}>
                            <View style={[styles.resProfileImg]}>
                                <Image source={require('../../assets/images/profile_pic.png')} resizeMode={'cover'} style={styles.swiperimage}/>
                            </View>
                            <Text style={[styles.sideName, {fontSize:15}]}>اماني قاسم</Text>
                            <View style={[styles.locationView, styles.mb10 , {marginTop:7}]}>
                                <Image source={require('../../assets/images/maps.png')} style={[styles.locationImg]} resizeMode={'contain'} />
                                <Text style={[styles.whiteText , styles.normalText]}>الرياض - المملكة العربية السعودية</Text>
                            </View>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={this.state.starCount}
                                fullStarColor={COLORS.yellow}
                                starSize={13}
                                starStyle={styles.starStyle}
                            />
                        </View>
                    </View>

                    <View style={styles.mainScroll}>
                        <ScrollView style={{}} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={ () => this.setState({activeType:0})} style={styles.scrollView}>
                                <Text style={[styles.scrollText,{color:this.state.activeType === 0 ? COLORS.yellow : COLORS.boldGray}]}>الكل</Text>
                                <View style={[styles.triangle , {borderBottomColor:this.state.activeType === 0 ? COLORS.yellow : 'transparent'}]} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => this.setState({activeType:1})} style={styles.scrollView}>
                                <Text style={[styles.scrollText,{color:this.state.activeType === 1 ? COLORS.yellow : COLORS.boldGray}]}>مشويات</Text>
                                <View style={[styles.triangle , {borderBottomColor:this.state.activeType === 1 ? COLORS.yellow : 'transparent'}]} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => this.setState({activeType:2})} style={styles.scrollView}>
                                <Text style={[styles.scrollText,{color:this.state.activeType === 2 ? COLORS.yellow : COLORS.boldGray}]}>حلويات</Text>
                                <View style={[styles.triangle , {borderBottomColor:this.state.activeType === 2 ? COLORS.yellow : 'transparent'}]} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => this.setState({activeType:3})} style={styles.scrollView}>
                                <Text style={[styles.scrollText,{color:this.state.activeType === 3 ? COLORS.yellow : COLORS.boldGray}]}>سلطات</Text>
                                <View style={[styles.triangle , {borderBottomColor:this.state.activeType === 3 ? COLORS.yellow : 'transparent'}]} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => this.setState({activeType:4})} style={styles.scrollView}>
                                <Text style={[styles.scrollText,{color:this.state.activeType === 4 ? COLORS.yellow : COLORS.boldGray}]}>معجنات</Text>
                                <View style={[styles.triangle , {borderBottomColor:this.state.activeType === 4 ? COLORS.yellow : 'transparent'}]} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => this.setState({activeType:5})} style={styles.scrollView}>
                                <Text style={[styles.scrollText,{color:this.state.activeType === 5 ? COLORS.yellow : COLORS.boldGray}]}>مشروبات</Text>
                                <View style={[styles.triangle , {borderBottomColor:this.state.activeType === 5 ? COLORS.yellow : 'transparent'}]} />
                            </TouchableOpacity>
                        </ScrollView>
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

export default RestDet_client;