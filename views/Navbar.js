import React from 'react'
import { View,Text,StyleSheet,TextInput,Image, } from 'react-native'
import { useRecoilState } from 'recoil'
import { inputTextWallpaper } from '../atoms/wallPaperinput'

export default function Navbar() {
const [searchValue,setSearchValue]=useRecoilState(inputTextWallpaper)
    const onChangeTextInput=(text)=>{
setSearchValue(text)
console.log(searchValue)
    }
    console.log("navbar")
  return (
   <View style={styles.container}>
    <View style={styles.SearchContainer}>
    <Image style={{width:40,height:40,borderRadius:20}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRu5yniGfaTv42kxwtvGzqUwm8poi-eVzoSQ&usqp=CAU"}}/>

<TextInput onChangeText={onChangeTextInput} style={{width:"100%",fontWeight:"bold",fontSize:20,paddingLeft:5}} placeholder='Search Images'/>
    </View>
   </View>
  )
}


const styles=StyleSheet.create({
    container:{
        
       
        width:"90%",
        marginVertical:20, 
        borderColor:"white",
        borderWidth:3,
        borderRadius:25,elevation:10
    },
    SearchContainer:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#DD4129",
        elevation:10,
       borderRadius:20,
       paddingVertical:10
        
    }
})