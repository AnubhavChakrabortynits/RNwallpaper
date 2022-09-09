import React, { useEffect, useState } from 'react'
import { View,Text,Image } from 'react-native'
import { StyleSheet } from 'react-native'
export default function Screen2({route}) {
    const clickedImage=route.params

    const [imageData,setImageData]=useState()

    useEffect(()=>{
        console.log(JSON.parse(clickedImage.clickedImage).cover_photo.urls.regular)
setImageData((JSON.parse(clickedImage.clickedImage).cover_photo.urls.regular))
    },[])
  return (
    <View style={styles.imageCont}>
                <Image style={styles.image} source={{uri:imageData}}/>
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
width:"100%",height:"100%",backgroundColor:"white",alignItems:"center"
    },
    image:{
width:"100%",height:"100%"
    },maincont:{
        alignItems:"center",backgroundColor:"black"
    },
    
})