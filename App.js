import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './views/Screen1';
import Navbar from './views/Navbar';
import { RecoilRoot } from 'recoil';
export default function App() {
  return (
    <View style={styles.container}>
    <RecoilRoot>
      <Navbar/>
      <Screen1/>
      </RecoilRoot>
    </View>
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
