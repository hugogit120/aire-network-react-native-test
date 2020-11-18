import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './views/Login/LoginView';
import Main from "./views/Main/Main"
import Player from './views/Player/Player';
import Error500 from './views/errorPages/Error500';

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginView}
        />
        <Stack.Screen
          name="Main"
          component={Main}
        />
        <Stack.Screen
          name="Player"
          component={Player}
        />
        <Stack.Screen
          name="Error"
          component={Error500}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;