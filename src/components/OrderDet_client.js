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
import DateTimePicker from "react-native-modal-datetime-picker";


const height = Dimensions.get('window').height;


class OrderDet_client extends Component {
    constructor(props){
        super(props);

        this.state={
            address: '',
            addressStatus: 0,
            selectedId: 1,
            time: i18n.t('dlevTime'),
            isFamilyProduct:true,
            isTimePickerVisible: false,
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

    showTimePicker = () => {
        this.setState({ isTimePickerVisible: true });
    };

    hideTimePicker = () => {
        this.setState({ isTimePickerVisible: false });
    };

    handleTimePicked = time => {
        console.log("A time has been picked: ", time);
        let formatedTime = time.getHours() + ":" + time.getMinutes()
        this.setState({ time : formatedTime })
        this.hideTimePicker();
    };


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

                    <Text style={[styles.headerText , {right:0} ]}>{i18n.t('orderDet')}</Text>

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
                    <View style={[styles.homeSection , {marginTop:20}]}>
                        <KeyboardAvoidingView behavior={'padding'} style={styles.keyboardAvoid}>
                            <Form style={{ width: '100%' }}>

                                <Item style={styles.loginItem} bordered>
                                    <Label style={[styles.label , {color:'#575757'}]}>{i18n.t('deliveryLocation')}</Label>
                                    <Input placeholder={i18n.t('enterDlevLocation')} onBlur={() => this.unActiveInput('address')} onFocus={() => this.activeInput('address')} placeholderTextColor={COLORS.placeholderColor}
                                           onChangeText={(address) => this.setState({address})} autoCapitalize='none'
                                           style={[styles.input , {borderTopRightRadius:25  ,
                                               borderColor: this.state.addressStatus === 1 ? COLORS.yellow : COLORS.lightGray ,
                                               backgroundColor: this.state.addressStatus === 1 ? '#fff' : COLORS.lightGray }]}  />
                                </Item>

                                { this.state.isFamilyProduct?
                                    <View style={[styles.loginItem ]}>
                                        <TouchableOpacity onPress={this.showTimePicker}>
                                            <Label style={[styles.label , {color:'#575757'}]}>{ i18n.t('time') }</Label>
                                            <Text style={[styles.touchText ]} > {this.state.time.toString()} </Text>
                                        </TouchableOpacity>
                                        <DateTimePicker
                                            isVisible={this.state.isTimePickerVisible}
                                            onConfirm={this.handleTimePicked}
                                            onCancel={this.hideTimePicker}
                                            mode={'time'}
                                        />
                                    </View>:<View/>
                                }



                            </Form>
                        </KeyboardAvoidingView>
                        <Text style={[styles.label , {color:'#575757'} ]}>{ i18n.t('selectPay') }</Text>
                        <View style={[styles.locationView , styles.directionColumn]}>
                            <View style={[styles.directionRow  , styles.w100 , styles.mt15]}>
                                <Radio onPress={ () => this.checkPay(1)} selected={this.state.selectedId == 1 ? true : false}  color={'#575757'} selectedColor={COLORS.yellow} style={styles.quesCheckBox} />
                                <Text onPress={ () => this.checkPay(1)} style={[styles.check]}>{ i18n.t('recievePay') }</Text>
                            </View>
                            <View style={[styles.directionRow  , styles.w100 , styles.mt15]}>
                                <Radio onPress={ () => this.checkPay(2)} selected={this.state.selectedId == 2 ? true : false} color={'#575757'} selectedColor={COLORS.yellow} style={styles.quesCheckBox} />
                                <Text onPress={ () => this.checkPay(2)} style={[styles.check]}>{ i18n.t('byVisa') }</Text>
                            </View>
                            <View style={[styles.directionRow  , styles.w100 , styles.mt15]}>
                                <Radio onPress={ () => this.checkPay(3)} selected={this.state.selectedId == 3 ? true : false}  color={'#575757'} selectedColor={COLORS.yellow} style={styles.quesCheckBox} />
                                <Text onPress={ () => this.checkPay(3)} style={[styles.check]}>{ i18n.t('byWallet') }</Text>
                            </View>
                            <View style={[styles.directionRow  , styles.w100 , styles.mt15]}>
                                <Radio onPress={ () => this.checkPay(4)} selected={this.state.selectedId == 4 ? true : false}  color={'#575757'} selectedColor={COLORS.yellow} style={styles.quesCheckBox} />
                                <Text onPress={ () => this.checkPay(4)} style={[styles.check]}>{ i18n.t('byMada') }</Text>
                            </View>
                            <View style={[styles.directionRow  , styles.w100 , styles.mt15]}>
                                <Radio onPress={ () => this.checkPay(5)} selected={this.state.selectedId == 5 ? true : false}  color={'#575757'} selectedColor={COLORS.yellow} style={styles.quesCheckBox} />
                                <Text onPress={ () => this.checkPay(5)} style={[styles.check]}>{ i18n.t('byApple') }</Text>
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