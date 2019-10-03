import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, ImageBackground, I18nManager , KeyboardAvoidingView} from "react-native";
import {Container, Content, Item, Input, Label, Form, Icon, CheckBox} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const height = Dimensions.get('window').height;

class Register_delegate extends Component {
    constructor(props){
        super(props);

        this.state={
            username: '',
            phone: '',
            password: '',
            email: '',
            IdNumber: '',
            plateNum: '',
            showPass:true,
            checkTerms:false,
            base64: null,
            carImg: '',
            vehicleLicenses: '',
        }
    }

    askPermissionsAsync = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);

    };

    _carImg = async () => {

        this.askPermissionsAsync();

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64:true,

        });

        let localUri = result.uri;
        let filename = localUri.split('/').pop();
        console.log(result);

        // check if there is image then set it and make button not disabled
        if (!result.cancelled) {
            this.setState({ userImage: result.uri ,base64:result.base64 ,carImg:filename});
        }
    };


    _vehicleLicensesImage = async () => {

        this.askPermissionsAsync();

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64:true,

        });

        let localUri = result.uri;
        let filename = localUri.split('/').pop();
        console.log(result);

        // check if there is image then set it and make button not disabled
        if (!result.cancelled) {
            this.setState({ userImage: result.uri ,base64:result.base64 ,vehicleLicenses:filename});
        }
    };


    async componentDidMount(){
        await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
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

                                    {/*<KeyboardAvoidingView behavior={'padding'} style={styles.keyboardAvoid}>*/}
                                    <Item style={styles.loginItem} bordered>
                                        <Label style={[styles.label ]}>{ i18n.t('delegateName') }</Label>
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
                                        <Label style={[styles.label ]}>{ i18n.t('idNum') }</Label>
                                        <Input placeholder={ i18n.t('enterId') } placeholderTextColor={COLORS.placeholderColor} onChangeText={(IdNumber) => this.setState({IdNumber})} keyboardType={'number-pad'} style={styles.input}  />
                                    </Item>

                                    <TouchableOpacity style={styles.loginItem} onPress={this._vehicleLicensesImage}>
                                        <Label style={[styles.label ]}>{ i18n.t('licenseImg') }</Label>
                                        <Input placeholder={ i18n.t('enterLicense') } placeholderTextColor={COLORS.placeholderColor} utoCapitalize='none' disabled value={this.state.vehicleLicenses} style={[styles.input , {paddingRight:40}]}  />

                                        <View style={styles.cameraView} onPress={() => this.setState({showPass: !this.state.showPass})}>
                                            <Icon type={'FontAwesome'} name={'camera'} style={[styles.cameraIcon]} />
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.loginItem} onPress={this._carImg}>
                                        <Label style={[styles.label ]}>{ i18n.t('carImg') }</Label>
                                        <Input placeholder={i18n.t('enterCarImg')} placeholderTextColor={COLORS.placeholderColor} utoCapitalize='none' disabled value={this.state.carImg} style={[styles.input , {paddingRight:40}]}/>

                                        <View style={styles.cameraView} onPress={() => this.setState({showPass: !this.state.showPass})}>
                                            <Icon type={'FontAwesome'} name={'camera'} style={[styles.cameraIcon]} />
                                        </View>
                                    </TouchableOpacity>

                                    <Item style={styles.loginItem} bordered>
                                        <Label style={[styles.label ]}>{ i18n.t('carNum') }</Label>
                                        <Input placeholder={i18n.t('enterCarNum')} placeholderTextColor={COLORS.placeholderColor} onChangeText={(plateNum) => this.setState({plateNum})} keyboardType={'number-pad'} style={styles.input}  />
                                    </Item>

                                    <Item style={styles.loginItem} bordered>
                                        <Label style={[styles.label ]}>{ i18n.t('password') }</Label>
                                        <Input placeholder={i18n.t('enterPass')} placeholderTextColor={COLORS.placeholderColor} autoCapitalize='none' onChangeText={(password) => this.setState({password})} secureTextEntry={this.state.showPass === true ? true : false} style={[styles.input , {paddingRight:40}]}  />

                                        <TouchableOpacity style={styles.eye} onPress={() => this.setState({showPass: !this.state.showPass})}>
                                            <Icon type={'FontAwesome'} name={ this.state.showPass === true ? 'eye' : 'eye-slash'} style={[styles.eyeIcon]} />
                                        </TouchableOpacity>
                                    </Item>

                                    <View style={[styles.directionRow , styles.mb15]}>
                                        <CheckBox onPress={() => this.setState({checkTerms: !this.state.checkTerms})} checked={this.state.checkTerms} color={COLORS.yellow} style={styles.checkBox} />
                                        <TouchableOpacity>
                                            <Text style={[styles.grayText , {fontSize:12} ]}> { i18n.t('byRegister') } <Text  style={styles.termText}>{ i18n.t('terms') }</Text></Text>
                                        </TouchableOpacity>
                                    </View>

                                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('dataSent_delegate')} style={[styles.yellowBtn , styles.mt15, styles.mb10]}>
                                        <Text style={styles.whiteText}>{ i18n.t('registerButton') }</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('login_delegate')} style={[styles.forgetPass , styles.mb100]}>
                                        <Text style={[styles.grayText , {fontSize:14} ]}>{ i18n.t('haveAcc') } </Text>
                                        <Text style={[styles.grayText , {fontSize:14 , color:COLORS.yellow} ]}>{ i18n.t('clickHere') }</Text>
                                    </TouchableOpacity>

                                    {/*</KeyboardAvoidingView>*/}

                                </Form>
                        </View>
                    </ImageBackground>
                </Content>
            </Container>

        );
    }
}

export default Register_delegate;