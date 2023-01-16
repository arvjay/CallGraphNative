import DefaultPage from './DefaultPage.js'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Success from './success.js';
import Fail from './fail.js';
import PostReqFail from './postReqFail.js';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {  
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={DefaultPage}/>
            <Stack.Screen name="Success!" component={Success} />
            <Stack.Screen name="Required Data Not Provided" component={Fail} />
            <Stack.Screen name="Post Request Failed" component={PostReqFail} />
          </Stack.Navigator>
        </NavigationContainer>
      );
  }




