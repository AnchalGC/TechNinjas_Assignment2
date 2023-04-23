import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlexBoxTry from "./src/components/FlexBoxTry";
import PageHeader from "./src/components/Header";
import LandingPage from "./src/components/LandingPage";
import LoginPage from "./src/components/SignUpPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ABC from "./src/components/RequestBookPage";
import PrivacyPolicy from "./src/components/PrivacyPolicyPage";
import BookType from "./src/components/BookType";
import RequestBookPage from "./src/components/RequestBookPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LandingPage />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "white",
    flex: 1,
  },
});
