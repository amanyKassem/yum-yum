import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions,  FlatList, I18nManager} from "react-native";
import {Container, Content,  Header, Button, Item, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'
import StarRating from 'react-native-star-rating';


const height = Dimensions.get('window').height;

const restaurants=[
    {id:1 , name:'اسم المطعم', location:'الرياض - المملكة العربية السعودية', image:require('../../assets/images/blurred.png')},
    {id:2 , name:'اسم المطعم', location:'الرياض - المملكة العربية السعودية', image:require('../../assets/images/blurred.png')},
    {id:3 , name:'اسم المطعم', location:'الرياض - المملكة العربية السعودية', image:require('../../assets/images/blurred.png')},
    {id:4 , name:'اسم المطعم', location:'الرياض - المملكة العربية السعودية', image:require('../../assets/images/blurred.png')},
]

class Restaurants_client extends Component {
    constructor(props){
        super(props);

        this.state={
            search:'',
            restaurants,
            starCount:3,
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null,
    });




    _keyExtractor = (item, index) => item.id;

    renderItems = (item) => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('restDet_client')} style={[styles.notiBlock , {padding:7}]}>
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
                        <Text style={[styles.grayText , {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',fontSize:12} ]}>{item.location}</Text>
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

                    <Text style={[styles.headerText , {right:0} ]}>{ i18n.t('restaurants') }</Text>

                    <View style={styles.directionRow}>
                        <Button  transparent  style={styles.headerBtn}>
                            <Image source={require('../../assets/images/noun_filter.png')} style={styles.headerMenu} resizeMode={'contain'} />
                        </Button>
                        <View>
                            <Button onPress={() => this.props.navigation.navigate('cart_client')} transparent  style={styles.headerBtn}>
                                <Image source={require('../../assets/images/shopping_basket.png')} style={styles.headerMenu} resizeMode={'contain'} />
                            </Button>
                            <View style={styles.cartNum}>
                                <Text style={styles.cartNumText}>12</Text>
                            </View>
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

export default Restaurants_client;