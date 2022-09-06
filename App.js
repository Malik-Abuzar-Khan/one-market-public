import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import SignIn from "./src/pages/sign_in";
import SignUp from "./src/pages/sign_up";
import Home from "./src/pages/home";
import CustomizeShop from "./src/pages/customize_shop";
import { styles } from "./global-styles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./store/configure-store";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* <StatusBar style="auto"  /> */}
     
        <Stack.Navigator>
        {/* <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="sign-in"
            component={SignIn}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="register-user"
            component={SignUp}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen name="customize-shop" component={CustomizeShop} options={{ headerShown: false }}/>
          {/* <SignIn /> */}
          {/* <Text>app is running....ok!</Text> */}
          {/* <SignIn /> */}
          
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
