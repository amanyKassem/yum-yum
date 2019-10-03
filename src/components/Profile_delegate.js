import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    ImageBackground, FlatList, KeyboardAvoidingView, I18nManager,
} from "react-native";
import {Container, Content, Header, Button, Form, Item, Label, Input, Icon,} from 'native-base'
import styles from '../../assets/styles'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'
import Modal from "react-native-modal";
import StarRating from 'react-native-star-rating';



const clientsComments=[
    {id:1 , name:'اسم المستخدم', image:require('../../assets/images/profile_pic.png')},
    {id:2 , name:'اسم المستخدم', image:require('../../assets/images/profile_pic.png')},
    {id:3 , name:'اسم المستخدم', image:require('../../assets/images/profile_pic.png')},
    {id:3 , name:'اسم المستخدم',  image:require('../../assets/images/profile_pic.png')},
    {id:4 , name:'اسم المستخدم',  image:require('../../assets/images/profile_pic.png')},
]


const height = Dimensions.get('window').height;
class Profile_delegate extends Component {
    constructor(props){
        super(props);

        this.state={
            orderType:0,
            clientsComments,
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
            starCount:3,
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


    _keyExtractor = (item, index) => item.id;



    _comments = (item) => {
        return(
            <View style={[styles.notiBlock , {padding:7}]}>
                <Image source={item.image} resizeMode={'cover'} style={styles.notiImg}/>
                <View style={[styles.directionColumn , {flex:1}]}>
                    <View style={[styles.directionRowSpace ]}>
                        <Text style={[styles.boldGrayText ]}>{item.name}</Text>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={this.state.starCount}
                            fullStarColor={COLORS.yellow}
                            starSize={13}
                            starStyle={styles.starStyle}
                        />
                    </View>
                    <Text style={[styles.grayText , {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',fontSize:12} ]}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
                </View>
            </View>
        );
    }


    renderInfo(){
        if(this.state.orderType === 0){

            let image = this.state.userImage;

            return(
                <View>
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

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('home_delegate')} style={[styles.yellowBtn , styles.mb10]}>
                                <Text style={styles.whiteText}>{ i18n.t('confirm') }</Text>
                            </TouchableOpacity>
                        </Form>
                    </KeyboardAvoidingView>
                </View>
            )
        }   else {
            return(
                <FlatList
                    data={this.state.clientsComments}
                    renderItem={({item}) => this._comments(item)}
                    numColumns={1}
                    keyExtractor={this._keyExtractor}
                />
            )
        }
    }



    render() {


        return (
            <Container>


                <Header style={[styles.header ]} noShadow>
                    <Button onPress={() => this.props.navigation.openDrawer()} transparent style={styles.headerBtn}>
                        <Image source={require('../../assets/images/noun_menu.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                    </Button>

                    <Text style={[styles.headerText , {right:0} ]}>{i18n.t('profile')}</Text>

                    <Button onPress={() => this.props.navigation.navigate('notification_delegate')} transparent style={styles.headerBtn}>
                        <Image source={require('../../assets/images/notification.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                    </Button>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={{}} >
                    <ImageBackground source={require('../../assets/images/bg.png')} resizeMode={'cover'} style={styles.imageBackground}>


                        <View style={styles.orderTabs}>
                            <TouchableOpacity onPress={ () => this.setState({orderType:0})} style={this.state.orderType === 0 ? styles.activeTab : styles.normalTab}>
                                <Text style={this.state.orderType === 0 ? styles.activeTabText :styles.normalTabText} >{i18n.t('profile')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => this.setState({orderType:1})} style={this.state.orderType === 1 ? styles.activeTab : styles.normalTab}>
                                <Text style={this.state.orderType === 1 ? styles.activeTabText :styles.normalTabText} >{i18n.t('reviews')}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.homeSection, {marginTop:20} ]}>
                            { this.renderInfo() }
                        </View>
                    </ImageBackground>
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

export default Profile_delegate;