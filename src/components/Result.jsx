import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import green from "../assets/images/greenProgress.png"
import blue from "../assets/images/blueProgress.png"
import orange from "../assets/images/orangeProgress.png"
import purple from "../assets/images/purpleProgress.png"
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { Color, FontFamily } from '../style/consts/GlobalStyles'


const Result = () => {
  return (
    <View style={styles.mainContainer}>
         <View style={styles.container}>
             <ImageBackground source={green} resizeMode='contain' style={styles.green}>
                <Text style={styles.greenInner}>70 %</Text>
             </ImageBackground>
                <Text style={styles.gexpression}>Expression 2</Text>
        </View>
         <View style={styles.container}>
             <ImageBackground source={blue} resizeMode='contain' style={styles.green}>
                <Text style={styles.blueInner}>40 %</Text>
             </ImageBackground>
                <Text style={styles.bexpression}>Expression 1</Text>
        </View>
         <View style={styles.container}>
             <ImageBackground source={orange} resizeMode='contain' style={styles.green}>
                <Text style={styles.orangeInner}>100 %</Text>
             </ImageBackground>
                <Text style={styles.oexpression}>Expression 4</Text>
        </View>
         <View style={styles.container}>
             <ImageBackground source={purple} resizeMode='contain' style={styles.green}>
                <Text style={styles.purpleInner}>30 %</Text>
             </ImageBackground>
                <Text style={styles.pexpression}>Expression 3</Text>
        </View>
         <View style={styles.container}>
             <ImageBackground source={purple} resizeMode='contain' style={styles.green}>
                <Text style={styles.purpleInner}>30 %</Text>
             </ImageBackground>
                <Text style={styles.pexpression}>Expression 3</Text>
        </View>
        <View style={styles.container}>
             <ImageBackground source={orange} resizeMode='contain' style={styles.green}>
                <Text style={styles.orangeInner}>100 %</Text>
             </ImageBackground>
                <Text style={styles.oexpression}>Expression 4</Text>
        </View>
        <View style={styles.container}>
             <ImageBackground source={blue} resizeMode='contain' style={styles.green}>
                <Text style={styles.blueInner}>40 %</Text>
             </ImageBackground>
                <Text style={styles.bexpression}>Expression 1</Text>
        </View>
        <View style={styles.container}>
             <ImageBackground source={green} resizeMode='contain' style={styles.green}>
                <Text style={styles.greenInner}>70 %</Text>
             </ImageBackground>
                <Text style={styles.gexpression}>Expression 2</Text>
        </View>
        <View style={styles.container}>
             <ImageBackground source={blue} resizeMode='contain' style={styles.green}>
                <Text style={styles.blueInner}>40 %</Text>
             </ImageBackground>
                <Text style={styles.bexpression}>Expression 1</Text>
        </View>
        <View style={styles.container}>
             <ImageBackground source={green} resizeMode='contain' style={styles.green}>
                <Text style={styles.greenInner}>70 %</Text>
             </ImageBackground>
                <Text style={styles.gexpression}>Expression 2</Text>
        </View>
        <View style={styles.container}>
             <ImageBackground source={purple} resizeMode='contain' style={styles.green}>
                <Text style={styles.purpleInner}>30 %</Text>
             </ImageBackground>
                <Text style={styles.pexpression}>Expression 3</Text>
        </View>
        <View style={styles.container}>
             <ImageBackground source={orange} resizeMode='contain' style={styles.green}>
                <Text style={styles.orangeInner}>100 %</Text>
             </ImageBackground>
                <Text style={styles.oexpression}>Expression 4</Text>
        </View>
       
        
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:"row",
        flexWrap:"wrap"
    },
    container:{
        width:responsiveWidth(24),
        alignItems:"center"
    },
    green:{
        width:86,
        height:85,
        justifyContent:"center",
        alignItems:"center",
    },
    greenInner:{
        color: Color.green,
        fontSize:14,
        fontFamily: FontFamily.poppinsSemiBold,
    },
    gexpression:{
        color: Color.green,
        fontSize:10,
        fontFamily: FontFamily.poppinsMedium,
        textAlign:"center"
    },
    blueInner:{
        color: Color.blue,
        fontSize:14,
        fontFamily: FontFamily.poppinsSemiBold,
    },
    bexpression:{
        color: Color.blue,
        fontSize:10,
        fontFamily: FontFamily.poppinsMedium,
        textAlign:"center"
    },
    orangeInner:{
        color: Color.primary,
        fontSize:14,
        fontFamily: FontFamily.poppinsSemiBold,
    },
    oexpression:{
        color: Color.primary,
        fontSize:10,
        fontFamily: FontFamily.poppinsMedium,
        textAlign:"center"
    },
    purpleInner:{
        color: Color.darkPink,
        fontSize:14,
        fontFamily: FontFamily.poppinsSemiBold,
    },
    pexpression:{
        color: Color.darkPink,
        fontSize:10,
        fontFamily: FontFamily.poppinsMedium,
        textAlign:"center"
    },
})