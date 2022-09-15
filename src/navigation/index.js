import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Main from '../screens/Main';
import Detail from '../screens/Detail';
import Contact from '../screens/Contact';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen 
        options={{headerShown:false}}
        name="Splash"
        component={Splash} />
        <Stack.Screen 
        options={{headerShown:false}}
        name="Main"
        component={Main} />
        <Stack.Screen 
        name="Detail"
        component={Detail} />
        <Stack.Screen 
        name="Contact"
        component={Contact} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;