import React, { Component } from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Image, Dimensions, ScrollView, AsyncStorage, Keyboard} from 'react-native';
import { StackNavigator } from 'react-navigation';


import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class Login extends Component {
  constructor(props){
  		super(props)
  		this.state={
  			userEmail:'',
  			userPassword:''
  		}
  	}

  	login = () =>{
  		const {userEmail,userPassword} = this.state;
  		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  		if(userEmail==""){
  			//alert("Please enter Email address");
  		  this.setState({email:'Please enter Email address'})

  		}

  		else if(reg.test(userEmail) === false)
  		{
  		//alert("Email is Not Correct");
  		this.setState({email:'Email is Not Correct'})
  		return false;
  		  }

  		else if(userPassword==""){
  		this.setState({email:'Please enter password'})
  		}
  		else{

  		fetch('https://musixblvd.com/login.php',{
  			method:'post',
  			header:{
  				'Accept': 'application/json',
  				'Content-type': 'application/json'
  			},
  			body:JSON.stringify({
  				// we will pass our input data to server
  				email: userEmail,
  				password: userPassword
  			})

  		})
  		.then((response) => response.json())
  		 .then((responseJson)=>{
  			 if(responseJson == "ok"){
  				 // redirect to profile page
  				 alert("Successfully Login");
  				 this.props.navigation.navigate("Profile");
  			 }else{
  				 alert("Wrong Login Details");
  			 }
  		 })
  		 .catch((error)=>{
  		 console.error(error);
  		 });
  		}


  		Keyboard.dismiss();
  	}



  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

          <MyStatusBar backgroundColor="#00A3EE" barStyle="dark-content" />


          <Image style={{position:'absolute', top:50, width:150, height:150, alignSelf:'center', }} source={require('./images/MB_LOGO_SPLASH_SCREEN.jpg')}/>


          <Text style={styles.header}>Welcome</Text>

          <TextInput
            style={styles.textInput}
            placeholder='Email'
            onChangeText ={(text) => this.setState({userEmail:text})}
            underlineColorAndroid='transparent'
            returnKeyType="next"
            keyboardType='email-address'
            autoCorrect={false}
            onSubmitEditing={() => this.passwordInput.focus()}
          />

          <TextInput
            style={styles.textInput}
            placeholder='Password'
            onChangeText ={(text) => this.setState({userPassword:text})}
            underlineColorAndroid='transparent'
            secureTextEntry={true}
            returnKeyType="go"
            ref={(input)=> this.passwordInput = input}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this.loginPush}>

            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>

            <Text style={{bottom:190, position:'absolute', color:'#00A3EE', }}>OR CONTINUE WITH</Text>

            <View style={{position:'absolute', backgroundColor:'transparent', left:75, bottom:130, width:50, height:50, borderRadius:25, }}>
              <Image source={require('./images/Twitter-Logo.png')}/>
            </View>

            <View style={{position:'absolute', backgroundColor:'transparent', right:75, bottom:130, width:50, height:50, borderRadius:25, }}>
              <Image source={require('./images/Google-logo-2015-G-icon.png')}/>
            </View>

            <View style={{position:'absolute', backgroundColor:'transparent', bottom:130, width:50, height:50, borderRadius:25,}}>
              <Image style={{borderRadius:25}}    source={require('./images/facebook_logo.png')}/>

            </View>




            <Text style={styles.noAcctLabel}>Dont have an Account?</Text>
            <Text  onPress={this.signUpPush} style={styles.SignUp}>JOIN HERE</Text>
        </View>

      </KeyboardAvoidingView>

    )
  }


  signUpPush =() => {
    this.props.navigation.navigate('SignUp');
    console.warn('Sign Up Push');

  }

  loginPush =() => {
    this.props.navigation.navigate('DrawerNavigator');
    console.warn('Login is OK');
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container: {
    flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', paddingLeft: 40, paddingRight: 40,
  },
  header: {
    fontSize: 24, marginBottom: 20, color: 'black', fontWeight: 'bold',
  },
  textInput:{
    alignSelf: 'stretch', padding:16, marginBottom:20, backgroundColor:'white', borderRadius:10, borderColor:'#00A3EE', borderWidth:2,
  },
  button:{
    alignSelf: 'stretch', padding:16, marginBottom:20, backgroundColor:'#00A3EE', alignItems: 'center', borderRadius:10,
  },
  btnText:{
    color: 'white', fontWeight:'bold',
  },
  noAcctLabel:{
    color:'black', fontSize:10, position:'absolute', bottom:50,
  },
  SignUp:{
    color:'#00A3EE', fontWeight:'bold', fontSize:14, position:'absolute', bottom:30,
  },
  image:{
    width:150, height:150, position:'absolute', backgroundColor:'black', top:50,
  },
});
