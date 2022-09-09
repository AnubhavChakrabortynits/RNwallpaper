import React,{useEffect, useState} from 'react'
import { View,StyleSheet,Text ,FlatList,Image,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useRecoilState } from 'recoil'
import { inputTextWallpaper } from '../atoms/wallPaperinput'
import Navbar from './Navbar'
export default function Screen1() {
const access_key="RG2UxtWyQjzTT-89ce2Wm4XB-rAjsxgc5gu9Y9WTLc4"
    const [searchValue,setSearchValue]=useRecoilState(inputTextWallpaper)
const navigation=useNavigation()
    const [imageCollection,setImageCollection]=useState([])
const getCollections=async()=>{
const data=await fetch(`https://api.unsplash.com/search/collections?page=1&per_page=50&query=${searchValue?searchValue:"all"}&client_id=${access_key}`)

const rdata=await data.json()
setImageCollection(rdata)

}

const showWallpaper=(item)=>{
navigation.navigate("s2",{clickedImage:`${JSON.stringify(item)}`})
}
    useEffect(()=>{
getCollections();
    },[searchValue])

    const screen1=()=>{
        console.log(searchValue)
    }
  return (
    <View style={styles.maincont}>
    <Navbar/>
<View style={styles.container}>
<Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Showing Results for.. <Text style={{color:"red"}}>{searchValue?.toUpperCase()}</Text></Text>
    <FlatList numColumns={2} data={imageCollection.results} renderItem={(item)=>{
        return (
        
        <TouchableOpacity onPress={()=>{
showWallpaper(item.item)
        }}>
        <View style={styles.imageCont}>
            <Image style={styles.image} source={{uri:item.item.cover_photo.urls.regular}}/>
        </View>
        </TouchableOpacity>)
    }}/>
</View>
</View>
  )
}

 
const styles=StyleSheet.create({
    container:{marginHorizontal:20,
        backgroundColor:"grey",
        width:"100%",
        
        alignItems:"center",
        height:"100%",

    },
    imageCont:{
width:200,height:200,backgroundColor:"white",alignItems:"center"
    },
    image:{
width:"100%",height:"100%"
    },maincont:{
        alignItems:"center",backgroundColor:"black"
    },
    
})