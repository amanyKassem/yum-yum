import {Dimensions , I18nManager , Platform} from "react-native";import COLORS from '../../src/consts/colors'const width = Dimensions.get('window').width;const height = Dimensions.get('window').height;const styles = ({	flexGrow:{		flexGrow: 1	},	imageBackground: {		width: null,		height: null,		flex: 1,	},	keyboardAvoid: {		width:'100%',		height: null,		flex: 1,	},	directionColumn:{		flexDirection:'column',	},	directionColumnCenter:{		justifyContent:'center' ,		alignItems:'center' ,		flexDirection:'column'	},	directionRow:{		flexDirection:'row',	},	directionRowCenter:{		flexDirection:'row',		justifyContent:'center',		alignItems:'center'	},	directionRowSpace:{		flexDirection:'row',		justifyContent:'space-between',		alignItems:'center'	},	mb15:{		marginBottom:15	},	tAC:{		textAlign:'center'	},	mt15:{		marginTop:15	},	mt25:{		marginTop:25	},	mt50:{		marginTop:50	},	ml10:{		marginLeft:10	},	mb10:{		marginBottom:10	},	mb100:{		marginBottom:100	},	p20:{		padding:20	},	w100:{		width:'100%'	},	BoldText:{		fontFamily: I18nManager.isRTL ? 'cairoBold' : 'openSansBold'	},	normalText:{		fontFamily: I18nManager.isRTL ? 'cairo' : 'openSans'	},	// Auth	headerbg:{		width:'100%' ,		height:230	},	headerLogo:{		position:'absolute' ,		top:0 ,		width:'40%' ,		alignSelf:'center'	},	yellowText:{		color:COLORS.yellow,		fontSize:19,		fontFamily: I18nManager.isRTL ? 'cairoBold' : 'openSansBold',	},	grayText:{		color:COLORS.gray,		fontSize:13,		fontFamily: I18nManager.isRTL ? 'cairo' : 'openSans',	},	boldGrayText:{		color:COLORS.boldGray,		fontSize:14,		fontFamily: I18nManager.isRTL ? 'cairo' : 'openSans',	},	titleText:{		color:'#575757',		fontSize:16,		fontFamily: I18nManager.isRTL ? 'cairo' : 'openSans',	},	whiteText:{		color:'#fff',		fontSize:13,		fontFamily: I18nManager.isRTL ? 'cairoBold' : 'openSansBold',	},	yellowBtn:{		backgroundColor:COLORS.yellow,		width:'100%',		height:40,		justifyContent:'center',		alignItems:'center',		borderRadius:25,	},	redBtn:{		backgroundColor:COLORS.red,		width:'100%',		height:40,		justifyContent:'center',		alignItems:'center',		borderRadius:25,	},	authMainView:{		alignItems:'center' ,		paddingTop:20 ,		paddingBottom:20 ,		paddingHorizontal:25,		flex:1,	},	// Login Screen Styles	authBack:{		height:45 ,		width:45 ,		position:'absolute' ,		zIndex:1 ,		top:30	},	eye:{		height:25 ,		width:25 ,		position:'absolute' ,		zIndex:1 ,		top:47,		right:10	},	eyeIcon:{		fontSize: 15,		color:COLORS.boldGray ,		width:25,		height:25,		position:'absolute' ,	},	loginItem : {		borderBottomWidth: 0,		marginTop: 0,		flexDirection:'column',		marginLeft:0,		marginBottom:20	},	label:{		alignSelf: 'flex-start',		fontFamily: I18nManager.isRTL ? 'cairo' : 'openSans',		fontSize: 14,		color: COLORS.boldGray,		marginBottom:10	},	input:{		width: '100%',		backgroundColor: COLORS.lightGray,		borderColor: COLORS.lightGray,		borderWidth: 1,		textAlign: I18nManager.isRTL ?  'right':'left',		fontSize: 13,		fontFamily: I18nManager.isRTL ? 'cairo' : 'openSans',		height:40,		borderRadius:25,		borderTopRightRadius:0,		color:COLORS.gray,		paddingLeft:15,		paddingRight:15	},	img:{		width: 22,		height: 22,		right: 8,		bottom: 8,		position: 'absolute',		flex: 1	},	forgetPass:{		alignSelf:'center',		marginTop:15,		flexDirection:'row'	},	checkBox:{		left:0,		marginRight:5,		marginLeft:0,		paddingRight:2,		borderRadius:3	},	termText:{		color:COLORS.yellow,		fontFamily: I18nManager.isRTL ? 'cairoBold' : 'openSansBold',		textDecorationLine: 'underline'	},	// side menu	sideImgView:{		position:'absolute',		flexDirection:'column',		justifyContent:'center',		alignItems:'center',		top:50	},	sideImg:{		width:50 ,		height:50	},	sideProfileImg:{		width:60,		height:60 ,		borderRadius:50,		overflow:'hidden' ,		borderWidth:4 ,		borderColor:'#5d5d5d26'	},	sideName:{		color:'#fff',		fontSize:20,		fontFamily: I18nManager.isRTL ? 'cairoBold' : 'openSansBold',	},	bgSideMenu:{		width: '100%',		height: 200	},	drawerLabel:{		color: '#5d5d5d' ,		fontSize:15 ,		marginLeft: 0 ,		marginRight: 0 ,		marginBottom:10 ,		marginTop:10  ,		fontWeight: 'normal',		fontFamily: I18nManager.isRTL ? 'cairo' : 'openSans',	},	sideView:{		alignItems: 'center' ,		justifyContent:'center',		marginBottom:5	},	drawerImg:{		height: 20,		width: 20	},	drawerIcon:{		marginHorizontal:20	},	drawerItemStyle:{		// marginBottom:10 ,		// paddingBottom:5 ,		marginTop:0 ,		paddingTop:0,	},	// home	homecontent:{		zIndex: -1,		marginTop: -100,	},	header : {		height: 100,		backgroundColor: COLORS.black,		borderBottomWidth:0,		width: '100%',		flexDirection: 'row',		justifyContent: 'space-between',		paddingHorizontal: 15,		alignItems:'center',		paddingTop: 30	},	animatedHeader:{		width: '100%',		flexDirection: 'row',		justifyContent: 'space-between',		paddingHorizontal: 15,		height: 100 ,		marginTop:-50 ,		alignItems:'center',		paddingTop: 30	},	headerMenu:{		width: 22,		height: 22,	},	headerText:{		color:'#fff',		fontFamily: I18nManager.isRTL ? 'cairoBold' : 'openSansBold' ,		fontSize:15,		right:20	},	headerBtn:{		width:40,		height:40 ,		justifyContent:'center' ,		alignItems:'center',		paddingLeft:0,		paddingRight:0,		paddingTop:0,		paddingBottom:0,	},	topHead : {		height: 90,		backgroundColor: COLORS.black,		width: '100%',		alignItems:'center',		justifyContent:'center'	},	cartNum : {		backgroundColor: COLORS.yellow,		color:'#fff',		width:16,		height:16,		lineHeight:16,		textAlign:'center',		borderRadius:50,		position:'absolute',		top:8,		left:2	},	eventdoteStyle:{		backgroundColor:'#cfcfcf',		borderRadius: 50,		width: 10,		height: 10,		left:  9,		bottom:0,	},	eventactiveDot:{		borderRadius: 50,		borderWidth: 2,		borderColor: COLORS.yellow,		backgroundColor: COLORS.yellow,		width: 10,		height: 10,		left:  9,		bottom:0,	},	eventswiper:{		width: '100%',		height: 200,		position:'absolute',		top:10,	},	swiperimage:{		width: '100%',		height: '100%',	},	swiperimageEvent : {		width: 280,		height: 150,		overflow:'hidden',		alignSelf:'center',		borderRadius:10	},	homeSection : {		width: '100%',		paddingHorizontal:23,		marginTop:130,		marginBottom:20	},	catView : {		width: '100%',		height: 180,		overflow:'hidden',		borderRadius:10,		marginTop:20	},	overlay : {		width: '100%',		backgroundColor:'#00000091',		position:'absolute',		bottom:0,		flexDirection:'row',		paddingVertical:10,		paddingHorizontal:25,		alignItems:'center'	},	catText:{		color:'#fff',		fontSize:13,		fontFamily: I18nManager.isRTL ? 'cairo' : 'openSans',	},	catImg:{		width:20,		height:20,		marginRight:10	},	// notification	notiBlock:{		borderWidth:1,		borderColor:'#f2f2f2',		borderRadius:5,		flexDirection:'row',		padding:5,		alignItems:'center',		marginBottom:10	},	notiImg:{		width:40,		height:40,		borderRadius:50,		marginRight:10,		flex:0	},	// restaurants	inputView : {		borderRadius: 35,		borderWidth: 1,		borderColor: '#313131',		height: 45,		padding: 5,		flexDirection: 'row',		marginHorizontal: 15,		backgroundColor: '#313131',		marginTop:Platform.OS === 'ios' ?30 : 10,		marginBottom:10	},	inputItem :{		borderBottomWidth: 0,		width:'100%',		paddingHorizontal: 10	},	modalInput:{		alignSelf: 'center',		backgroundColor: 'transparent',		color: '#fff',		fontFamily: I18nManager.isRTL ? 'cairo' : 'openSans',		paddingBottom:0,		textAlign: I18nManager.isRTL ?'right' : 'left',		fontSize:14,		paddingRight:25	},	searchImg : {		width: 18,		height: 18,		right: 15,		top: 13,		position: 'absolute',		flex: 1	},	restImg:{		width:65,		height:65,		borderRadius:5,		marginRight:10,		flex:0	},	starStyle:{		color: COLORS.yellow,		marginHorizontal: 2,	},	locationImg:{		width:12,		height:12,		marginRight:5	},	locationView:{		flexDirection:'row',		alignItems:'center',		marginTop:10	},	resProfileImg:{		width:70,		height:70 ,		borderRadius:50,		overflow:'hidden' ,		borderWidth:5 ,		borderColor:'#fffffd1f',		marginBottom:7	},	headImg:{		width:'100%' ,		height:300	},	mainScroll:{		borderBottomWidth:2,		borderBottomColor:'#efefef',		height:50	},	scrollView:{		width:60,		justifyContent:'center',		alignItems:'center',		height:'100%',		marginHorizontal:1,		paddingHorizontal:5,		paddingVertical: 20,	},	scrollText:{		fontSize:13,		fontFamily: I18nManager.isRTL ? 'cairo' : 'openSans',	},	triangle: {		width: 0,		height: 0,		backgroundColor: 'transparent',		borderStyle: 'solid',		borderLeftWidth: 4,		borderRightWidth: 4,		borderBottomWidth: 7,		borderLeftColor: 'transparent',		borderRightColor: 'transparent',		position:'absolute',		bottom:0	},	productName:{		color:'#575757',		fontSize:16,		fontFamily: I18nManager.isRTL ? 'cairoBold' : 'openSansBold'	},	line:{		borderWidth:.5 ,		borderColor:'#e6e6e6' ,		width:'100%' ,		marginVertical:20	},	quesCheckBox:{		borderColor:COLORS.yellow ,		marginRight:10,		paddingRight:2,		left:0,		marginLeft:0,	},	check:{		color: '#575757',		fontSize: 14,		fontFamily: I18nManager.isRTL ? 'cairo' : 'openSans'	},	counterParent:{		flexDirection:'row' ,		width:'100%' ,		justifyContent:'center' ,		alignItems:'center'  ,		marginVertical:10	},	touchPlus:{		backgroundColor:COLORS.yellow ,		borderRadius:3,		height:30,		width:30,		justifyContent:'center',		alignItems:'center'	},	touchMinus:{		backgroundColor:COLORS.placeholderColor ,		borderRadius:3,		height:30,		width:30,		justifyContent:'center',		alignItems:'center'	},	countText:{		fontSize:22 ,		color:COLORS.yellow,		width:120,		textAlign:'center',		height:30,		lineHeight:30,	},	plus:{		fontSize:22 ,		color:'#fff'	},	minus:{		fontSize:22 ,		color:'#575757'	},	total:{		flexDirection:'row',		justifyContent:'center',		alignItems:'center',		marginVertical:20	},	orderNowBtn:{		backgroundColor:'#575757',		width:'90%',		height:40,		justifyContent:'center',		alignItems:'center',		borderRadius:25,		alignSelf:'center'	},	backTitle:{		backgroundColor:'#f5f5f5' ,		paddingHorizontal:30 ,		paddingVertical:10,		width:'100%'	},	profileImgView:{		flexDirection:'column',		justifyContent:'center',		alignItems:'center',		marginTop:10	},	profileImg:{		width:75,		height:75 ,		borderRadius:50,		borderWidth:1 ,		borderColor:'#5d5d5d26',		backgroundColor:'#fff',		justifyContent:'center',		alignItems:'center',	},	profImg:{		width:60,		height:60,		borderRadius:50,	},	profileName:{		color:COLORS.yellow,		fontSize:16,		fontFamily: I18nManager.isRTL ? 'cairo' : 'openSans',		marginTop:5	},	cameraTouch:{		position:'absolute',		bottom:0,		right:0,		backgroundColor:'#fff',		padding:2,		borderRadius:50,	},	camera:{		width:18,		height:18,	},	modalStyle:{		flex: 1 ,		backgroundColor:'#fff' ,		position:'absolute' ,		width:'100%',		borderRadius:5,		flexDirection:'column',		justifyContent:'center',		alignItems:'center',		overflow:'hidden'	},	modalHead:{		backgroundColor:COLORS.yellow ,		width:'100%' ,		justifyContent:'center' ,		alignItems:'center' ,		padding:10	},	wallet:{		width:120,		height:120	},	grayBack:{		backgroundColor:'#f5f5f5' ,		height:120,		width:200,		justifyContent:'center' ,		alignItems:'center' ,		marginTop:50,		borderRadius:10	},	social:{		height:30,		width:30,		marginHorizontal:7	},    orderTabs: {        flexDirection:'row' ,        justifyContent:'space-between' ,        alignItems:'center' ,        flexWrap: 'wrap',        marginTop:20,        borderBottomWidth:1,        borderBottomColor: '#f2f2f2'    },    activeTab:{        width:'50%',        height:35,        justifyContent:'center',        alignItems:'center',        borderBottomWidth:2,        borderBottomColor: COLORS.yellow,        paddingBottom:10,        paddingHorizontal:7    },    normalTab:{        width:'50%',        height:35,        justifyContent:'center',        alignItems:'center',        paddingBottom:10,        paddingHorizontal:7    },    activeTabText:{        color: COLORS.yellow,        fontSize: 14,        fontFamily: I18nManager.isRTL ? 'cairoBold' : 'openSansBold',        textAlign:'center',    },    normalTabText:{        color: '#575757',        fontSize: 14,        fontFamily: I18nManager.isRTL ? 'cairoBold' : 'openSansBold',        textAlign:'center',    },	followBlock:{		paddingHorizontal:30,		width:'100%',		marginTop:25	},	yellowCircle:{		backgroundColor:COLORS.yellow,		borderColor:COLORS.yellow,		borderWidth:1,		width:20,		height:20,		justifyContent:'center',		alignItems:'center',		borderRadius:50,		marginRight:10	},	checkCircle:{		fontSize:15,		color:'#fff',	},	followStep:{		flexDirection:'row',		alignItems:'center',		marginBottom:25	},	stepLine:{		height:30,		backgroundColor:COLORS.yellow,		width:1.5,		position:'absolute',		left:9,		top:22	},	arrowIcon:{		color:'#575757',		top:2,		fontSize:20	},	accordion:{		borderWidth:0,		marginBottom:10	},});export default styles;