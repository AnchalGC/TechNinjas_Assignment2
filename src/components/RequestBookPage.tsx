import React from "react";
import { View,Text,StyleSheet,Image,Button, Touchable, TouchableOpacity, Alert, Dimensions, SafeAreaView } from "react-native";


const RequestBookPage = ()=>{

   return (

       <SafeAreaView style={styles.wrapper}>

           <View style={styles.topBox}>               
               <Text style={styles.textStyle2} >Please click below botton to request this Book</Text>
               
           </View>
           <View style={styles.middleBox}>               
               <Text>Book Name - 1947</Text>
               <Text>Author Name - Shreya</Text>
               <Text>Publish Year - 1994</Text>
           </View> 
                    
           <View style={styles.bottomBox}>
                 <TouchableOpacity 
                       style={styles.buttonStyle}
                       onPress={()=>{
                           
                        alert("Book Requested.You will get an email shortly.")
                        
                       }}>                    
                       <Text>Request this book</Text>
                 </TouchableOpacity>
               </View>         
       </SafeAreaView>
   )


}

const styles = StyleSheet.create({
   wrapper: {
       flex:1,   
       backgroundColor:"#86ccdc"    
     },
   topBox:{
       flex:3,
       backgroundColor:"#86ccdc",
       justifyContent:"space-evenly",
       alignItems:"center",
       //backgroundColor:"grey" ,
   },
   
   middleBox:{
       flex:1,
      backgroundColor:"white" ,
   
      justifyContent:"space-evenly",
       alignItems:"center",
      // marginTop:10,
       margin:15

   },
   bottomBox:{
       flex:2,
     backgroundColor:"#86ccdc",
      // justifyContent:"flex-end",
      justifyContent:"space-evenly",
       padding:100
   },
   buttonStyle:{
       backgroundColor:"lightgrey",
       padding:10,
       alignItems:"center",
     
   },
   textStyle2:{
       //textDecorationColor:"white"
       fontWeight:"bold",
       fontSize:25
    
   },
   

})

export default RequestBookPage;