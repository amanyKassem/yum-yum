import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager, Animated} from "react-native";
import {Container, Content,  Header, Button, Item, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from '../../locale/i18n'
import COLORS from '../../src/consts/colors'
import MapView from 'react-native-maps';


const height = Dimensions.get('window').height;


class Location_delegate extends Component {
    constructor(props){
        super(props);

        this.state={
            latitude: 37.78825,
            longitude: -122.4324,
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null,
    });



    render() {


        return (
            <Container>

                <Header style={[styles.header ]} noShadow>
                    <Button onPress={() => this.props.navigation.openDrawer()} transparent style={styles.headerBtn}>
                        <Image source={require('../../assets/images/noun_menu.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                    </Button>

                    <Text style={[styles.headerText , {right:-19} ]}>{ i18n.t('location') }</Text>

                    <View style={styles.directionRow}>
                        <Button onPress={() => this.props.navigation.navigate('notification_delegate')} transparent style={styles.headerBtn}>
                            <Image source={require('../../assets/images/notification.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                        </Button>
                        <Button onPress={() => this.props.navigation.goBack()} transparent  style={styles.headerBtn}>
                            <Image source={require('../../assets/images/arrow_left.png')} style={[styles.headerMenu , styles.transform]} resizeMode={'contain'} />
                        </Button>
                    </View>
                </Header>

                <Content contentContainerStyle={styles.flexGrow} style={{}} >
                    <View style={[styles.w100 , {flex:1}]}>
                        <MapView
                            style={styles.mapView}
                            initialRegion={{
                                latitude: Number(this.state.latitude),
                                longitude: Number(this.state.longitude),
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <MapView.Marker
                                coordinate={({
                                    latitude: Number(this.state.latitude),
                                    longitude: Number(this.state.longitude),
                                })}
                            >
                                <Image source={require('../../assets/images/marker.png')} resizeMode={'contain'} style={styles.mapMarker}/>
                            </MapView.Marker>
                        </MapView>

                    </View>
                </Content>
            </Container>

        );
    }
}

export default Location_delegate;