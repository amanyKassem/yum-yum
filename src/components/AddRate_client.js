import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager, Platform} from "react-native";
import {Container, Content, Header, Button, Item, Input, Label, Textarea} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import StarRating from 'react-native-star-rating';
import COLORS from '../../src/consts/colors'


const height = Dimensions.get('window').height;


class AddRate_client extends Component {
    constructor(props){
        super(props);

        this.state={
            starCount:3,
            starCount2:4,
            msg: '',
            msgDelegate: '',
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null,
    });

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    onStarRatingPress2(rating) {
        this.setState({
            starCount2: rating
        });
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

                    <Text style={[styles.headerText , {right:0} ]}>{i18n.t('addRate')}</Text>

                    <View style={styles.directionRow}>
                        <View>
                            <Button onPress={() => this.props.navigation.navigate('cart_client')} transparent  style={styles.headerBtn}>
                                <Image source={require('../../assets/images/shopping_basket.png')} style={styles.headerMenu} resizeMode={'contain'} />
                            </Button>
                            <View style={styles.cartNum}>
                                <Text style={styles.cartNumText}>12</Text>
                            </View>
                        </View>
                        <Button onPress={() => this.props.navigation.goBack()} transparent  style={styles.headerBtn}>
                            <Image source={require('../../assets/images/arrow_left.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                        </Button>
                    </View>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={{}} >
                    <View style={[styles.w100 , styles.mt15]}>

                        <View style={[styles.backTitle , {backgroundColor :COLORS.yellow}]}>
                            <Text style={[styles.whiteText , styles.tAC , {fontSize:15}]}>{i18n.t('restRating')}</Text>
                        </View>
                        <View style={[styles.sideImgView , styles.w100 ,{position:'relative',top:0}]}>
                            <View style={[styles.resProfileImg , styles.mt15 , {borderRadius:15}]}>
                                <Image source={require('../../assets/images/imagee.png')} resizeMode={'cover'} style={[styles.swiperimage ,  {borderRadius:Platform.OS === 'ios' ?10:0}]}/>
                            </View>
                            <Text style={[styles.titleText , styles.mb10, {fontSize:15}]}>اسم المطعم</Text>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                fullStarColor={COLORS.yellow}
                                starSize={13}
                                starStyle={styles.starStyle}
                            />
                        </View>
                        <Item style={[styles.loginItem , styles.w100 , styles.mt15 , {paddingHorizontal:30 }]} bordered>
                            <Textarea placeholderTextColor={COLORS.placeholderColor}
                                      onChangeText={(msg) => this.setState({msg})} autoCapitalize='none'
                                      style={[styles.input , {borderRadius:10 ,borderTopRightRadius:10,borderTopLeftRadius:10,
                                          height:100 , paddingVertical:10}]} placeholder={i18n.t('typeComment')} />
                        </Item>

                        <View style={[styles.backTitle, styles.mt15 , {backgroundColor :COLORS.yellow}]}>
                            <Text style={[styles.whiteText , styles.tAC , {fontSize:15}]}>{i18n.t('delegateRating')}</Text>
                        </View>
                        <View style={[styles.sideImgView , styles.w100 ,{position:'relative',top:0}]}>
                            <View style={[styles.resProfileImg , styles.mt15 , {borderRadius:15}]}>
                                <Image source={require('../../assets/images/profile_pic.png')} resizeMode={'cover'} style={[styles.swiperimage ,  {borderRadius:Platform.OS === 'ios' ?10:0}]}/>
                            </View>
                            <Text style={[styles.titleText , styles.mb10, {fontSize:15}]}>اسم المندوب</Text>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.state.starCount2}
                                selectedStar={(rating) => this.onStarRatingPress2(rating)}
                                fullStarColor={COLORS.yellow}
                                starSize={13}
                                starStyle={styles.starStyle}
                            />
                        </View>
                        <Item style={[styles.loginItem , styles.w100 , styles.mt15 , {paddingHorizontal:30 }]} bordered>
                            <Textarea placeholderTextColor={COLORS.placeholderColor}
                                      onChangeText={(msgDelegate) => this.setState({msgDelegate})} autoCapitalize='none'
                                      style={[styles.input , {borderRadius:10 ,borderTopRightRadius:10,borderTopLeftRadius:10,
                                          height:100 , paddingVertical:10}]} placeholder={i18n.t('typeComment')} />
                        </Item>

                        <TouchableOpacity onPress={ () => this.props.navigation.navigate("rate_client")} style={[styles.yellowBtn , styles.mt15, styles.mb10 , {width:'90%' , alignSelf:'center'}]}>
                            <Text style={styles.whiteText}>{i18n.t('evaluation')}</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>

        );
    }
}

export default AddRate_client;