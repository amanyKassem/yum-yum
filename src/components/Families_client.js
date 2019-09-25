import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager, ScrollView} from "react-native";
import {Container, Content,  Header, Button, Item, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'
import StarRating from 'react-native-star-rating';


const height = Dimensions.get('window').height;

const families=[
    {id:1 , name:'اسم الاسرة', location:'الرياض - المملكة العربية السعودية', image:require('../../assets/images/blurred.png')},
    {id:2 , name:'اسم الاسرة', location:'الرياض - المملكة العربية السعودية', image:require('../../assets/images/blurred.png')},
    {id:3 , name:'اسم الاسرة', location:'الرياض - المملكة العربية السعودية', image:require('../../assets/images/blurred.png')},
    {id:4 , name:'اسم الاسرة', location:'الرياض - المملكة العربية السعودية', image:require('../../assets/images/blurred.png')},
]

class Families_client extends Component {
    constructor(props){
        super(props);

        this.state={
            search:'',
            families,
            starCount:3,
            activeType:0,
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null,
    });




    _keyExtractor = (item, index) => item.id;

    renderItems = (item) => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('familyDet_client')} style={[styles.notiBlock , {padding:7}]}>
                <Image source={item.image} resizeMode={'cover'} style={styles.restImg}/>
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
                    <View style={[styles.locationView]}>
                        <Image source={require('../../assets/images/maps.png')} style={[styles.locationImg]} resizeMode={'contain'} />
                        <Text style={[styles.grayText , {fontSize:12} ]}>{item.location}</Text>
                    </View>
                </View>
            </TouchableOpacity>
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

                    <Text style={[styles.headerText , {right:0} ]}>اسر منتجة</Text>

                    <View style={styles.directionRow}>
                        <Button  transparent  style={styles.headerBtn}>
                            <Image source={require('../../assets/images/noun_filter.png')} style={styles.headerMenu} resizeMode={'contain'} />
                        </Button>
                        <View>
                            <Button onPress={() => this.props.navigation.navigate('cart_client')} transparent  style={styles.headerBtn}>
                                <Image source={require('../../assets/images/shopping_basket.png')} style={styles.headerMenu} resizeMode={'contain'} />
                            </Button>
                            <Text style={styles.cartNum}>1</Text>
                        </View>
                    </View>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={{}} >
                    <View style={styles.topHead}>
                        <View style={styles.inputView}>
                            <Item  style={styles.inputItem} bordered>
                                <Input autoCapitalize='none' onChangeText={(search) => this.setState({ search })} placeholder={ i18n.t('search') } placeholderTextColor={'#fff'} style={styles.modalInput}   />
                            </Item>
                            <Image source={require('../../assets/images/magnifying.png')} style={[styles.searchImg , styles.transform]} resizeMode={'contain'}/>
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
                            data={this.state.families}
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

export default Families_client;