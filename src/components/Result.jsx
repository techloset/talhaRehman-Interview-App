import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import green from "../assets/images/greenProgress.png"
import blue from "../assets/images/blueProgress.png"
import orange from "../assets/images/orangeProgress.png"
import purple from "../assets/images/purpleProgress.png"
import { responsiveWidth } from 'react-native-responsive-dimensions'


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
        color:"#3BB13A",
        fontSize:14,
        fontFamily:"Poppins-SemiBold"
    },
    gexpression:{
        color:"#3BB13A",
        fontSize:10,
        fontFamily:"Poppins-Medium",
        textAlign:"center"
    },
    blueInner:{
        color:"#4449D5",
        fontSize:14,
        fontFamily:"Poppins-SemiBold"
    },
    bexpression:{
        color:"#4449D5",
        fontSize:10,
        fontFamily:"Poppins-Medium",
        textAlign:"center"
    },
    orangeInner:{
        color:"#F17720",
        fontSize:14,
        fontFamily:"Poppins-SemiBold"
    },
    oexpression:{
        color:"#F17720",
        fontSize:10,
        fontFamily:"Poppins-Medium",
        textAlign:"center"
    },
    purpleInner:{
        color:"#DD52D7",
        fontSize:14,
        fontFamily:"Poppins-SemiBold"
    },
    pexpression:{
        color:"#DD52D7",
        fontSize:10,
        fontFamily:"Poppins-Medium",
        textAlign:"center"
    },
})