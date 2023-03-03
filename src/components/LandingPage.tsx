import React from "react";
import { View,Text,StyleSheet,Image,Button, Touchable, TouchableOpacity, Alert, Dimensions, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";


const Stack = createNativeStackNavigator();

const LandingPageMain = ({navigation})=>{

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.topBox}>
                <Image 
                source = {{
                width:250,
                height:300,
                uri :'https://wallpaperaccess.com/full/922681.jpg'
                }}/>
                <Text style={styles.textStyle1}>Welcome to Tech Ninjas BookStore App</Text>
            </View>
            <View style={styles.bottomBox}>
                <View style={styles.navButtonWrapper}>
                    <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={()=>{
                           navigation.push('SignUp')
                         //alert("I am working")
                        }}>
                    
                        <Text style={styles.textStyle2}>Sign Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={()=>{
                            navigation.push('Login')
                         //alert("I am working")
                        }}>
                    
                    <Text style={styles.textStyle2}>Login</Text>
                  </TouchableOpacity>
                </View>  
            </View>
         
        </SafeAreaView>
    )


}
const LandingPage = ()=>{
    return (
        <Stack.Navigator initialRouteName="BookStore"
            screenOptions={{
               // headerShown:false
            }}
        >
            <Stack.Screen name="BookStore" component={LandingPageMain}/>
            <Stack.Screen name="Login" component={LoginPage} options ={{title:"Login Account"}}/> 
            <Stack.Screen name="SignUp" component={SignUpPage} options ={{title:"Create Account"}}/>  
        </Stack.Navigator>
)}

const styles = StyleSheet.create({
    wrapper: {
        flex:1,   
        //backgroundColor:"blue"    
      },
    topBox:{
        flex:1.5,
        //backgroundColor:"red",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    bottomBox:{
        flex:2,
       // backgroundColor:"blue" ,
        justifyContent:"flex-end",
        padding:30
    },
    navButtonWrapper:{
        height:100,
       // flexDirection:"column",
       // backgroundColor:"green",
        
       // alignItems:"baseline",
       // position:"relative",
        buttom:10

    },
    buttonStyle:{
        backgroundColor:"grey",
        padding:10,
        alignItems:"center",
        marginBottom:2

    },
    textStyle1:{
        fontSize:20,
        fontWeight:"bold",
        marginTop:60
    },
    textStyle2:{
        
        fontWeight:"bold",
     
    },

})

export default LandingPage;