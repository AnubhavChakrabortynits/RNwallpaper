import React, { useEffect, useState } from 'react'
import { View,Text,Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { TouchableOpacity,CameraRollStatic } from 'react-native'
export default function Screen2({route}) {
    const clickedImage=route.params

    const [imageData,setImageData]=useState()

    useEffect(()=>{
        console.log(JSON.parse(clickedImage.clickedImage).cover_photo.urls.regular)
setImageData((JSON.parse(clickedImage.clickedImage).cover_photo.urls.regular))
    },[])
  return (
    <View style={styles.imageCont}>
                {typeof(imageData=='object') && <Image style={styles.image} source={{uri:imageData}}/>}
               <View style={{alignItems:"center"}}>
               <TouchableOpacity style={styles.download} onPress={()=>{}}>
                    <Text style={styles.dtext}>Download</Text>

                </TouchableOpacity>
 
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
width:"100%",height:"100%",backgroundColor:"white",alignItems:"center"
    },
    image:{
width:"100%",height:"100%"
    },maincont:{
        alignItems:"center",backgroundColor:"black"
    },
    download:{
        position:"absolute",
        bottom:10,
        backgroundColor:"yellow",
        paddingVertical:10,
        borderRadius:10,
        marginHorizontal:"auto",width:200,alignItems:"center"
    },
    dtext:{
        color:"black",
        fontWeight:"bold",fontSize:24
    },

 
    
})