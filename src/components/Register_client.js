import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, ImageBackground, I18nManager , KeyboardAvoidingView} from "react-native";
import {Container, Content, Item, Input, Label, Form, Icon, CheckBox} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'


const height = Dimensions.get('window').height;

class Register_client extends Component {
    constructor(props){
        super(props);

        this.state={
            username: '',
            phone: '',
            password: '',
            email: '',
            showPass:true,
            checkTerms:false,
        }
    }


    render() {
        return (
            <Container>
                <Content  contentContainerStyle={styles.flexGrow}>
                    <TouchableOpacity style={styles.authBack} onPress={() => this.props.navigation.goBack()}>
                        <Icon type={'FontAwesome'} name={'angle-right'} style={[styles.transform]} />
                    </TouchableOpacity>
                    <ImageBackground source={require('../../assets/images/bg.png')} resizeMode={'cover'} style={styles.imageBackground}>
                        <View>
                            <Image source={require('../../assets/images/headerlogin.png')} style={styles.headerbg} resizeMode={'cover'} />
                            <Image source={require('../../assets/images/logo.png')} style={styles.headerLogo} resizeMode={'contain'} />
                        </View>
                        <View style={styles.authMainView}>
                            <Text style={[styles.yellowText , styles.mb15]}>{ i18n.t('registerButton') }</Text>
                            <Text style={[styles.grayText , styles.tAC]}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</Text>

                                <Form style={{ width: '100%' , marginTop:30}}>

                                    <KeyboardAvoidingView behavior={'padding'} style={styles.keyboardAvoid}>
                                    <Item style={styles.loginItem} bordered>
                                        <Label style={[styles.label ]}>{ i18n.t('username') }</Label>
                                        <Input placeholder={i18n.t('enterUsername')} placeholderTextColor={COLORS.placeholderColor} onChangeText={(username) => this.setState({username})} autoCapitalize='none' style={styles.input}  />
                                    </Item>

                                    <Item style={styles.loginItem} bordered>
                                        <Label style={[styles.label ]}>{ i18n.t('phoneNumber') }</Label>
                                        <Input placeholder={ i18n.t('enterPhone') } placeholderTextColor={COLORS.placeholderColor} onChangeText={(phone) => this.setState({phone})} keyboardType={'number-pad'} style={styles.input}  />
                                    </Item>


                                    <Item style={styles.loginItem} bordered>
                                        <Label style={[styles.label ]}>{ i18n.t('email') }</Label>
                                        <Input placeholder={ i18n.t('enterMail') } placeholderTextColor={COLORS.placeholderColor} onChangeText={(email) => this.setState({email})} keyboardType={'email-address'} style={styles.input}  />
                                    </Item>

                                    <Item style={styles.loginItem} bordered>
                                        <Label style={[styles.label ]}>{ i18n.t('password') }</Label>
                                        <Input placeholder={i18n.t('enterPass')} placeholderTextColor={COLORS.placeholderColor} autoCapitalize='none' onChangeText={(password) => this.setState({password})} secureTextEntry={this.state.showPass === true ? true : false} style={[styles.input , {paddingRight:40}]}  />

                                        <TouchableOpacity style={styles.eye} onPress={() => this.setState({showPass: !this.state.showPass})}>
                                            <Icon type={'FontAwesome'} name={ this.state.showPass === true ? 'eye' : 'eye-slash'} style={[styles.eyeIcon]} />
                                        </TouchableOpacity>
                                    </Item>

                                    </KeyboardAvoidingView>

                                    <View style={[styles.directionRow , styles.mb15]}>
                                        <CheckBox onPress={() => this.setState({checkTerms: !this.state.checkTerms})} checked={this.state.checkTerms} color={COLORS.yellow} style={styles.checkBox} />
                                        <TouchableOpacity>
                                            <Text style={[styles.grayText , {fontSize:12} ]}> { i18n.t('byRegister') } <Text  style={styles.termText}>{ i18n.t('terms') }</Text></Text>
                                        </TouchableOpacity>
                                    </View>

                                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('accActivation_client')} style={[styles.yellowBtn , styles.mt15, styles.mb10]}>
                                        <Text style={styles.whiteText}>{ i18n.t('registerButton') }</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('login_delegate')} style={[styles.forgetPass , styles.mb100]}>
                                        <Text style={[styles.grayText , {fontSize:14} ]}>{ i18n.t('haveAcc') } </Text>
                                        <Text style={[styles.grayText , {fontSize:14 , color:COLORS.yellow} ]}>{ i18n.t('clickHere') }</Text>
                                    </TouchableOpacity>


                                </Form>
                        </View>
                    </ImageBackground>
                </Content>
            </Container>

        );
    }
}

export default Register_client;