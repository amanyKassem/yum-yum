import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    I18nManager,
    KeyboardAvoidingView
} from "react-native";
import {Container, Content, Header, Button, Item, Input, Form, Label, Icon} from 'native-base'
import styles from '../../assets/styles'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'
import Modal from "react-native-modal";


const height = Dimensions.get('window').height;

class Profile_client extends Component {
    constructor(props){
        super(props);

        this.state={
            userImage: null,
            username: '',
            phone: '',
            email: '',
            usernameStatus: 0,
            phoneStatus: 0,
            emailStatus: 0,
            isModalVisible: false,
            oldPass: '',
            newPass: '',
            verifyNewPass: '',
            showOldPass: true,
            showNewPass: true,
            showVerifiedPass: true,
        }
    }

    static navigationOptions = () => ({
        drawerLabel: i18n.t('profile') ,
        drawerIcon: (<Image source={require('../../assets/images/noun_profile.png')} style={styles.drawerImg} resizeMode={'contain'} /> )
    })


    _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

    activeInput(type){
        if (type === 'username'){
            this.setState({ usernameStatus: 1 })
        }else if (type === 'phone'){
            this.setState({ phoneStatus: 1 })
        }else
            this.setState({ emailStatus: 1 })
    }

    unActiveInput(type){
        if (type === 'username'){
            this.setState({ usernameStatus: 0 })
        }else if (type === 'phone'){
            this.setState({ phoneStatus: 0 })
        }else
            this.setState({ emailStatus: 0 })
    }


    askPermissionsAsync = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);

    };

    _pickImage = async () => {

        this.askPermissionsAsync();

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64:true
        });

        console.log(result);

        // check if there is image then set it and make button not disabled
        if (!result.cancelled) {
            this.setState({ userImage: result.uri ,base64:result.base64});
        }
    };

    render() {

        let image = this.state.userImage;

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

                    <Text style={[styles.headerText ]}>{i18n.t('profile')}</Text>

                    <View style={styles.directionRow}>
                        <Button onPress={() => this.props.navigation.navigate('cart_client')} transparent  style={styles.headerBtn}>
                            <Image source={require('../../assets/images/shopping_basket.png')} style={styles.headerMenu} resizeMode={'contain'} />
                        </Button>
                        <View style={styles.cartNum}>
                            <Text style={styles.cartNumText}>12</Text>
                        </View>
                    </View>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={{}} >
                    <View style={[styles.homeSection , {marginTop:20}]}>
                        <View style={[styles.profileImgView ]}>

                            {image != null?
                                <View style={[styles.profileImg]}>
                                    <Image source={{uri: image }} resizeMode={'cover'} style={styles.profImg}/>
                                    <TouchableOpacity onPress={this._pickImage} style={styles.cameraTouch}>
                                        <Image source={require('../../assets/images/camera.png')} resizeMode={'contain'} style={styles.camera}/>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style={[styles.profileImg]}>
                                    <Image source={require('../../assets/images/profile_pic.png')} resizeMode={'cover'} style={styles.profImg}/>
                                    <TouchableOpacity onPress={this._pickImage} style={styles.cameraTouch}>
                                        <Image source={require('../../assets/images/camera.png')} resizeMode={'contain'} style={styles.camera}/>
                                    </TouchableOpacity>
                                </View>
                            }

                            <Text style={styles.profileName}>اماني قاسم</Text>
                        </View>
                        <KeyboardAvoidingView behavior={'padding'} style={styles.keyboardAvoid}>
                            <Form style={{ width: '100%' , marginTop:30}}>

                                <Item style={styles.loginItem} bordered>
                                    <Label style={[styles.label ]}>{ i18n.t('username') }</Label>
                                    <Input placeholder={ i18n.t('enterUsername') } onBlur={() => this.unActiveInput('username')} onFocus={() => this.activeInput('username')} placeholderTextColor={COLORS.placeholderColor}
                                           onChangeText={(username) => this.setState({username})} autoCapitalize='none'
                                           style={[styles.input , {borderTopRightRadius:25 , paddingRight:33 ,
                                               borderColor: this.state.usernameStatus === 1 ? COLORS.yellow : COLORS.lightGray ,
                                               backgroundColor: this.state.usernameStatus === 1 ? '#fff' : COLORS.lightGray }]}  />
                                    <Image source={require('../../assets/images/noun_editt.png')} style={styles.img} resizeMode={'contain'}/>
                                </Item>

                                <Item style={styles.loginItem} bordered>
                                    <Label style={[styles.label ]}>{ i18n.t('phoneNumber') }</Label>
                                    <Input placeholder={ i18n.t('enterPhone') } onBlur={() => this.unActiveInput('phone')} onFocus={() => this.activeInput('phone')} placeholderTextColor={COLORS.placeholderColor}
                                           onChangeText={(phone) => this.setState({phone})} keyboardType={'number-pad'}
                                           style={[styles.input , {borderTopRightRadius:25 , paddingRight:33 ,
                                               borderColor: this.state.phoneStatus === 1 ? COLORS.yellow : COLORS.lightGray ,
                                               backgroundColor: this.state.phoneStatus === 1 ? '#fff' : COLORS.lightGray }]}  />
                                    <Image source={require('../../assets/images/noun_editt.png')} style={styles.img} resizeMode={'contain'}/>
                                </Item>


                                <Item style={[styles.loginItem]} bordered>
                                    <Label style={[styles.label ]}>{ i18n.t('email') }</Label>
                                    <Input placeholder={ i18n.t('enterMail') } onBlur={() => this.unActiveInput('email')} onFocus={() => this.activeInput('email')} placeholderTextColor={COLORS.placeholderColor}
                                           onChangeText={(email) => this.setState({email})} keyboardType={'email-address'}
                                           style={[styles.input , {borderTopRightRadius:25 , paddingRight:33 ,
                                               borderColor: this.state.emailStatus === 1 ? COLORS.yellow : COLORS.lightGray ,
                                               backgroundColor: this.state.emailStatus === 1 ? '#fff' : COLORS.lightGray }]}  />
                                    <Image source={require('../../assets/images/noun_editt.png')} style={styles.img} resizeMode={'contain'}/>
                                </Item>

                                <TouchableOpacity onPress={this._toggleModal} style={[styles.yellowBtn , styles.mt25, styles.mb10]}>
                                    <Text style={styles.whiteText}>{ i18n.t('changePass') }</Text>
                                </TouchableOpacity>

                                <TouchableOpacity  style={[styles.yellowBtn , styles.mb10]}>
                                    <Text style={styles.whiteText}>{ i18n.t('confirm') }</Text>
                                </TouchableOpacity>
                            </Form>
                        </KeyboardAvoidingView>
                    </View>
                    <Modal onBackdropPress={()=> this.setState({ isModalVisible : false })} isVisible={this.state.isModalVisible}>
                        <View style={styles.modalStyle}>
                            <View style={styles.modalHead}>
                                <Text style={[styles.whiteText , {fontSize:15}]}>{ i18n.t('changePass') }</Text>
                            </View>
                            <Form style={{ width: '100%' , padding:20}}>

                                <Item style={styles.loginItem} bordered>
                                    <Label style={[styles.label ]}>{ i18n.t('oldPass') }</Label>
                                    <Input placeholder={i18n.t('enterOldPass')} placeholderTextColor={COLORS.placeholderColor} autoCapitalize='none' onChangeText={(oldPass) => this.setState({oldPass})} secureTextEntry={this.state.showOldPass === true ? true : false} style={[styles.input  ,{borderTopRightRadius:25,paddingRight:40}]}  />

                                    <TouchableOpacity style={styles.eye} onPress={() => this.setState({showOldPass: !this.state.showOldPass})}>
                                        <Icon type={'FontAwesome'} name={ this.state.showOldPass === true ? 'eye' : 'eye-slash'} style={[styles.eyeIcon]} />
                                    </TouchableOpacity>
                                </Item>

                                <Item style={styles.loginItem} bordered>
                                    <Label style={[styles.label ]}>{ i18n.t('newPass') }</Label>
                                    <Input placeholder={i18n.t('enterNewPass')} placeholderTextColor={COLORS.placeholderColor} autoCapitalize='none' onChangeText={(newPass) => this.setState({newPass})} secureTextEntry={this.state.showNewPass === true ? true : false} style={[styles.input  ,{borderTopRightRadius:25,paddingRight:40}]}  />

                                    <TouchableOpacity style={styles.eye} onPress={() => this.setState({showNewPass: !this.state.showNewPass})}>
                                        <Icon type={'FontAwesome'} name={ this.state.showNewPass === true ? 'eye' : 'eye-slash'} style={[styles.eyeIcon]} />
                                    </TouchableOpacity>
                                </Item>

                                <Item style={styles.loginItem} bordered>
                                    <Label style={[styles.label ]}>{ i18n.t('verifyNewPass') }</Label>
                                    <Input placeholder={i18n.t('enterConfirmPass')} placeholderTextColor={COLORS.placeholderColor} autoCapitalize='none' onChangeText={(verifyNewPass) => this.setState({verifyNewPass})} secureTextEntry={this.state.showVerifiedPass === true ? true : false} style={[styles.input  ,{borderTopRightRadius:25,paddingRight:40}]}  />

                                    <TouchableOpacity style={styles.eye} onPress={() => this.setState({showVerifiedPass: !this.state.showVerifiedPass})}>
                                        <Icon type={'FontAwesome'} name={ this.state.showVerifiedPass === true ? 'eye' : 'eye-slash'} style={[styles.eyeIcon]} />
                                    </TouchableOpacity>
                                </Item>

                                <TouchableOpacity onPress={this._toggleModal}  style={[styles.yellowBtn , styles.mb10]}>
                                    <Text style={styles.whiteText}>{ i18n.t('confirm') }</Text>
                                </TouchableOpacity>
                            </Form>
                        </View>
                    </Modal>
                </Content>
            </Container>

        );
    }
}

export default Profile_client;