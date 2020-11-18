import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './views/Login/LoginView';
import Main from "./views/Main/Main"
import Player from './views/Player/Player';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {

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
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}

export default App