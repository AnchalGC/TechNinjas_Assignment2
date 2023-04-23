import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import BookType from "./BookType";

const Stack = createNativeStackNavigator();

const PrivacyPolicyPageMain = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.boxStyle, styles.box1]}>
        <View style={styles.box1_1} />
        <View style={styles.box1_2}>
          <Text style={styles.textH1Style}>Welcome to Privacy Policy Page</Text>
        </View>
      </View>
      <View style={[styles.boxStyle, styles.box2]}>
        <Text style={styles.textH1Style}>
          At Bookstore, we take your privacy seriously. This Privacy Policy
          outlines how we collect, use, and protect your personal information.
          Information we collect: When you make a purchase on our website or
          sign up for our newsletter, we may collect your name, email address
          and data. We may also collect non personal information such as IP
          address, browser type and operating system. Your rights: You have the
          right to access, correct or delete your personal information that we
          hold. Contact Us: If you have any questions or concerns about this
          privacy policy or any other information, please contact us at
          tech.ninjas@gmail.com
        </Text>
        <View style={styles.box2_1} />

        <TouchableOpacity
          style={styles.box2_2}
          onPress={() => {
            navigation.navigate("BookTypePage");
          }}
        >
          <Text style={styles.textStyle2}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const PrivacyPolicyPage = () => {
  return (
    <Stack.Navigator
      initialRouteName="Policy"
      screenOptions={
        {
          // headerShown:false
        }
      }
    >
      <Stack.Screen name="Policy" component={PrivacyPolicyPageMain} />
      <Stack.Screen
        name="BookTypePage"
        component={BookType}
        options={{ title: "Book Types" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    //alignItems:'center',
    //justifyContent:'space-evenly',
    //backgroundColor: 'white' ,
  },
  boxStyle: {
    padding: 10,
  },
  box1: {
    flex: 1,
    //backgroundColor: 'red'  ,
    backgroundColor: "#2e87a3",
    justifyContent: "flex-end",
  },
  box2: {
    flex: 2,
    //backgroundColor: 'green' ,
    justifyContent: "flex-end",
    /*width:100,
      height: 100,
      position:"absolute",
      bottom: 15,
      right:15,*/
  },
  box1_1: {
    height: 80,
    width: 80,
    backgroundColor: "purple",
    marginTop: 5,
    alignSelf: "center",
    position: "relative",
    bottom: 50,
  },
  box1_2: {
    flex: 0.5,
    height: 40,
    //backgroundColor:"purple",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  box2_1: {
    height: 80,
    backgroundColor: "purple",
    marginTop: 5,
  },
  box2_2: {
    height: 40,
    backgroundColor: "purple",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textStyle2: {
    fontSize: 20,
  },
  //Text Style
  textH1Style: {
    ...Platform.select({
      ios: {
        fontSize: 15,
        fontWeight: "700",
      },
      android: {
        fontSize: 30,
        fontWeight: "bold",
      },
    }),
    color: "black",
  },
});

export default PrivacyPolicyPage;
