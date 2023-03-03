import React from "react";
import { View,Text,StyleSheet,Image,Button,TextInput, Touchable, TouchableOpacity, Alert, Dimensions, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import PrivacyPolicy from "./PrivacyPolicyPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";


const Stack = createNativeStackNavigator();

const LoginPageMain = ({navigation})=>{

    return (
        <SafeAreaView style={styles.wrapper}>
        <View style={styles.topBox}>               
            <Text style={styles.textStyle2} >Welcome To Login Page</Text>
        </View>
        <View style={styles.topBox1}>               
            <TextInput>UserName</TextInput>
        </View>
        <View style={styles.middleBox}>               
            <TextInput>Password</TextInput>
        </View>           
        <View style={styles.bottomBox}>
              <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={()=>{
                     //alert("I am working")
                     navigation.push('PrivacyPolicy')
                     
                    }}>
                
                    <Text>Login</Text>
              </TouchableOpacity>
            </View>  
     
    </SafeAreaView>
)

}

const LoginPage = ()=>{
    return (
        <Stack.Navigator initialRouteName="Log In"
            screenOptions={{
              // headerShown:false
            }}
        >
           <Stack.Screen name="Log In" component={LoginPageMain} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyPage} options ={{title:"Privacy Policy"}}/> 
           
        </Stack.Navigator>
)}

const styles = StyleSheet.create({
    wrapper: {
        flex:1,   
        backgroundColor:"white"    
      },
    topBox:{
        flex:3,
        backgroundColor:"#aad5bb",
        justifyContent:"space-evenly",
        alignItems:"center",
        
    },
    topBox1:{
        flex:0.7,
        backgroundColor:"white",
        justifyContent:"space-evenly",
        alignItems:"center",
       
    },
    middleBox:{
        flex:0.7,
       backgroundColor:"white" ,
    
       justifyContent:"space-evenly",
        alignItems:"center",
      

    },
    bottomBox:{
        flex:2,
        backgroundColor:"#aad5bb",
    
       justifyContent:"space-evenly",
        padding:100,
    },
    buttonStyle:{
        backgroundColor:"white",
        padding:10,
        alignItems:"center",
        marginBottom:50
       // marginBottom:6

    },
    textStyle2:{
    //backgroundColor:"white",
        fontWeight:"bold",
        fontSize:"25"
     
    },

})

export default LoginPage;