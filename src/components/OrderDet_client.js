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
import {Container, Content, Header, Button, Item, Input, Form, Label, Radio} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'


const height = Dimensions.get('window').height;


class OrderDet_client extends Component {
    constructor(props){
        super(props);

        this.state={
            address: '',
            addressStatus: 0,
            selectedId: 1,
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null,
    });

    checkPay(payID){
        this.setState({ selectedId: payID });

    }
    activeInput(type){
        if (type === 'address'){
            this.setState({ addressStatus: 1 })
        }
    }

    unActiveInput(type){
        if (type === 'address'){
            this.setState({ addressStatus: 0 })
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
                    <View style={[styles.homeSection , {marginTop:20}]}>
                        <KeyboardAvoidingView behavior={'padding'} style={styles.keyboardAvoid}>
                            <Form style={{ width: '100%' }}>

                                <Item style={styles.loginItem} bordered>
                                    <Label style={[styles.label , {color:'#575757'}]}>موقع التسليم</Label>
                                    <Input placeholder={'الرجاء ادخال موقع التسليم'} onBlur={() => this.unActiveInput('address')} onFocus={() => this.activeInput('address')} placeholderTextColor={COLORS.placeholderColor}
                                           onChangeText={(address) => this.setState({address})} autoCapitalize='none'
                                           style={[styles.input , {borderTopRightRadius:25  ,
                                               borderColor: this.state.addressStatus === 1 ? COLORS.yellow : COLORS.lightGray ,
                                               backgroundColor: this.state.addressStatus === 1 ? '#fff' : COLORS.lightGray }]}  />
                                </Item>
                            </Form>
                        </KeyboardAvoidingView>
                        <Text style={[styles.label , {color:'#575757'} ]}>برجاء تحديد طريقة الدفع</Text>
                        <View style={[styles.locationView , styles.directionColumn]}>
                            <View style={[styles.directionRow  , styles.w100 , styles.mt15]}>
                                <Radio onPress={ () => this.checkPay(1)} selected={this.state.selectedId == 1 ? true : false}  color={'#575757'} selectedColor={COLORS.yellow} style={styles.quesCheckBox} />
                                <Text style={[styles.check]}>الدفع عند الاستلام</Text>
                            </View>
                            <View style={[styles.directionRow  , styles.w100 , styles.mt15]}>
                                <Radio onPress={ () => this.checkPay(2)} selected={this.state.selectedId == 2 ? true : false} color={'#575757'} selectedColor={COLORS.yellow} style={styles.quesCheckBox} />
                                <Text style={[styles.check]}>الدفع عن طريق الفيزا</Text>
                            </View>
                            <View style={[styles.directionRow  , styles.w100 , styles.mt15]}>
                                <Radio onPress={ () => this.checkPay(3)} selected={this.state.selectedId == 3 ? true : false}  color={'#575757'} selectedColor={COLORS.yellow} style={styles.quesCheckBox} />
                                <Text style={[styles.check]}>الدفع عن طريق المحفظة</Text>
                            </View>
                            <View style={[styles.directionRow  , styles.w100 , styles.mt15]}>
                                <Radio onPress={ () => this.checkPay(4)} selected={this.state.selectedId == 4 ? true : false}  color={'#575757'} selectedColor={COLORS.yellow} style={styles.quesCheckBox} />
                                <Text style={[styles.check]}>الدفع عن طريق مدي</Text>
                            </View>
                            <View style={[styles.directionRow  , styles.w100 , styles.mt15]}>
                                <Radio onPress={ () => this.checkPay(4)} selected={this.state.selectedId == 4 ? true : false}  color={'#575757'} selectedColor={COLORS.yellow} style={styles.quesCheckBox} />
                                <Text style={[styles.check]}>الدفع عن طريق Apple Pay</Text>
                            </View>
                        </View>

                        <TouchableOpacity onPress={ () => this.props.navigation.navigate("orderSent_client")} style={[styles.yellowBtn , styles.mt50, styles.mb10]}>
                            <Text style={styles.whiteText}>{ i18n.t('confirm') }</Text>
                        </TouchableOpacity>

                    </View>
                </Content>
            </Container>

        );
    }
}

export default OrderDet_client;