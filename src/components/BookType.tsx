import React from "react";
import { View,Text,StyleSheet,Image,Button, Touchable, TouchableOpacity, Alert, Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import RequestBookPage from "./RequestBookPage";

const Stack = createNativeStackNavigator();

const BookTypeMain = ({navigation})=>{
  const {wrapper,textStyle} = styles
    return (
        
        <View style={wrapper}>
             <TouchableOpacity style={styles.box1}
                onPress = {()=>{
                
                    alert("It shows list of Horror movies") 
                }}>
                <Text style={styles.textStyle}>Horror</Text>
                </TouchableOpacity>
       
        <TouchableOpacity style={styles.box2}
                    
                    onPress={()=>{
                      alert("It shows list of History movies") 
                    
                     
                    }}>
                <Text style={styles.textStyle}>History</Text>
                  
              </TouchableOpacity>
        <TouchableOpacity style={styles.box3}
          onPress = {()=>{
           
            alert("It shows list of Mystery movies")      
          }}>
           <Text style={styles.textStyle}>Mystery</Text>
     
        </TouchableOpacity>
        <TouchableOpacity style={styles.box4}
          onPress = {()=>{
             navigation.push('BookTypePage')
                  
          }}>
          <Text style={styles.textStyle} >Request a Book</Text>
       
        </TouchableOpacity>
   </View>
    ) 
}

const BookType = ()=>{
  return (
      <Stack.Navigator initialRouteName="Book Genres"
          screenOptions={{
            //headerShown:false
          }}
      >
         <Stack.Screen name="Book Genres" component={BookTypeMain} />
          <Stack.Screen name="BookTypePage" component={RequestBookPage} options ={{title:"Request a book"}}/> 
         
      </Stack.Navigator>
)}


const styles = StyleSheet.create({
    wrapper: {
      flex:1,
      backgroundColor: '#f1f1f1',
     // alignItems: 'center',
      //padding: 10
    },
    textStyle:{
        textAlign: 'center',
        fontSize:40
    },
    
box1:{
  flex:1,
 width:"100%",
  backgroundColor:"#f5b849",

  justifyContent:"center",
  alignItems:"center",

},
box2:{
    flex:1,
    width:"100%",
  backgroundColor:"#86ccdc",
  justifyContent:"center",
  alignItems:"center"
  
},
box3:{
    flex:1,
height: 40,

backgroundColor:"pink",
justifyContent:"center",
  alignItems:"center"

},
box4:{
    flex:1,
    height: 30,
    backgroundColor:"lightblue",
    justifyContent:"center",
  alignItems:"center"
 
  },
  

  });
  export default BookType
