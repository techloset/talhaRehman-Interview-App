import { StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import VideoBg from "../assets/images/VideoBg.png"
import PlayButton from "../assets/images/PlayButton.svg"

const Video = ({navigation}) => {
  return (
    <View>
        <ImageBackground source={VideoBg} resizeMode='cover' style={styles.container} >
            <PlayButton onPress={() => navigation.navigate('Articles')}/>
            <View style={{flexDirection:'row',gap:12, marginBottom:16,marginTop:24}}>
                <TouchableOpacity style={styles.cancelBtn}>
                    <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextBtn}>
                    <Text style={styles.next}>NEXT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.retryBtn}>
                    <Text style={styles.retry}>Retry</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
      
    </View>
  )
}

export default Video

const styles = StyleSheet.create({
    container:{
        marginHorizontal:12,
        height:199,
        marginTop:14,
        justifyContent:"flex-end",
        alignItems:"center",
       borderRadius:10
    },
    cancelBtn:{
        width:96,
        height:34,
        borderRadius:5,
        backgroundColor:"#FBE0CA",
        justifyContent:"center",
        alignItems:"center",
    },
    cancel:{
        color:"#F17720",
        fontSize:14,
        fontFamily:"PoppinsBold",
       
    },
    nextBtn:{
        width:96,
        height:34,
        borderRadius:5,
        backgroundColor:"#F17720",
        justifyContent:"center",
        alignItems:"center",
    },
    next:{
        color:"#FFFFFF",
        fontSize:14,
        fontFamily:"PoppinsBold",
       
    },
    retryBtn:{
        width:96,
        height:34,
        borderRadius:5,
        backgroundColor:"#F4B733",
        justifyContent:"center",
        alignItems:"center",
    },
    retry:{
        color:"#FFFFFF",
        fontSize:14,
        fontFamily:"PoppinsBold",
       
    },

})