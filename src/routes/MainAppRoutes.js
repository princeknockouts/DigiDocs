import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import Register from '../components/Register';

const RootStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const HomeScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Dashboard" component={Dashboard} />
    </HomeStack.Navigator>
  );
};

function MainAppRoutes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />
        <RootStack.Screen name="Home" component={HomeScreens} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
export default MainAppRoutes;
