import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TextInput,
  Touchable,
  TouchableOpacity,
  Alert,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import PrivacyPolicy from "./PrivacyPolicyPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

const Stack = createNativeStackNavigator();

const LoginPageMain = ({ navigation }) => {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  const onLogin = () => {
    const email = userName;
    const pass = password;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.push("PrivacyPolicy");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topBox}>
        <Text style={styles.textStyle2}>Welcome To Login Page</Text>
      </View>
      <View style={styles.topBox1}>
        <TextInput
          placeholder="Username"
          onChangeText={(userName) => setUserName(userName)}
        ></TextInput>
      </View>
      <View style={styles.middleBox}>
        <TextInput
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
        ></TextInput>
      </View>
      <View style={styles.bottomBox}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            //alert("I am working")
            onLogin();
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const LoginPage = () => {
  return (
    <Stack.Navigator
      initialRouteName="Log In"
      screenOptions={
        {
          // headerShown:false
        }
      }
    >
      <Stack.Screen name="Log In" component={LoginPageMain} />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyPage}
        options={{ title: "Privacy Policy" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  topBox: {
    flex: 3,
    backgroundColor: "#aad5bb",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  topBox1: {
    flex: 0.7,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  middleBox: {
    flex: 0.7,
    backgroundColor: "white",

    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bottomBox: {
    flex: 2,
    backgroundColor: "#aad5bb",

    justifyContent: "space-evenly",
    padding: 100,
  },
  buttonStyle: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    marginBottom: 50,
    // marginBottom:6
  },
  textStyle2: {
    //backgroundColor:"white",
    fontWeight: "bold",
    fontSize: "25",
  },
});

export default LoginPage;
