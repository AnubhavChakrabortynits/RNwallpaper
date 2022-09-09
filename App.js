import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './views/Screen1';

import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen2 from './views/Screen2';
export default function App() {
  const navigator=createStackNavigator()
  return (

    <RecoilRoot>
     <NavigationContainer >
      <navigator.Navigator initialRouteName='s1'>
        <navigator.Screen name="s1" component={Screen1}
          options={{
headerStyle:{
  backgroundColor:"black"
},headerTitle:{fontWeight:"bold",},
headerTitleAlign:"center",
title:"Home",headerTintColor:"red"
          }}
        />

        <navigator.Screen name="s2" component={Screen2}
          options={
            {
              headerStyle:{
                backgroundColor:"black"
              },headerTintColor:"white",
              title:"Go Back",headerTitle:{fontWeight:"bold"},headerTitleAlign:"center"
             
            }
          }
        />
      </navigator.Navigator>
     </NavigationContainer> 
     
      </RecoilRoot>
   
  );
}

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
    backgroundColor: '#fff',
   alignItems: 'center',
   // justifyContent: 'center',

    backgroundColor:"black",
    height:"100%"
  },
});
