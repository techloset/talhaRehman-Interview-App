import { StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import VideoBg from "../assets/images/VideoBg.png"
import PlayButton from "../assets/images/PlayButton.svg"
import { Color, FontFamily } from '../style/consts/GlobalStyles'

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
        backgroundColor: Color.lightFullOrange,
        justifyContent:"center",
        alignItems:"center",
    },
    cancel:{
        color: Color.primary,
        fontSize:14,
        fontFamily: FontFamily.poppinsBold,
       
    },
    nextBtn:{
        width:96,
        height:34,
        borderRadius:5,
        backgroundColor: Color.primary,
        justifyContent:"center",
        alignItems:"center",
    },
    next:{
        color: Color.white,
        fontSize:14,
        fontFamily:FontFamily.poppinsBold,
       
    },
    retryBtn:{
        width:96,
        height:34,
        borderRadius:5,
        backgroundColor: Color.lightOrange,
        justifyContent:"center",
        alignItems:"center",
    },
    retry:{
        color: Color.white,
        fontSize:14,
        fontFamily:FontFamily.poppinsBold,
       
    },

})