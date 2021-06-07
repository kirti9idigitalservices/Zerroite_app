import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from "./App/Screens/HomePage";
import Login from './App/Screens/Login';
import Cart from './App/Screens/Cart';
import Category from './App/Screens/Category';
import Signin from './App/Screens/Signin';
import Shoplocator from './App/Screens/ShopIocator';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Shoplocator" component={Shoplocator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

