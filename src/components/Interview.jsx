import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Interview1 from "../assets/images/Interview1.png"
import Interview2 from "../assets/images/Interview2.png"
import Interview3 from "../assets/images/Interview3.png"
import Interview4 from "../assets/images/Interview4.png"
import Meeting1 from "../assets/images/Meeting1.svg"
import Meeting2 from "../assets/images/Meeting2.svg"
import Meeting3 from "../assets/images/Meeting3.svg"
import Meeting4 from "../assets/images/Meeting4.svg"
import ratio from '../style/consts/ratio'

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const Interview = () => {
  return (

    <View style={{marginTop:28}}>
      <ScrollView horizontal={true} style={{position:"relative",zIndex:-10}} >
      <View style={styles.container} >
        <ImageBackground source={Interview1} resizeMode='contain' style={styles.main}>
          <Text style={styles.meeting}> <Meeting1/></Text>
          <Text style={styles.heading}>Interview 1</Text>
          <Text style={styles.para}>Lorem Ipsum
            Doller sit amet
            Recommended</Text>
            <Text style={styles.time}>5 min</Text>
        </ImageBackground>
        <ImageBackground source={Interview2} resizeMode='contain' style={styles.main}>
          <Text style={styles.meeting}> <Meeting2/></Text>
          <Text style={styles.heading}>Interview 2</Text>
          <Text style={styles.para}>Lorem Ipsum
            Doller sit amet
            Recommended</Text>
            <Text style={styles.time}>10 min</Text>
        </ImageBackground>
        <ImageBackground source={Interview3} resizeMode='contain' style={styles.main}>
          <Text style={styles.meeting}> <Meeting3/></Text>
          <Text style={styles.heading}>Interview 3</Text>
          <Text style={styles.para}>Lorem Ipsum
            Doller sit amet
            Recommended</Text>
            <Text style={styles.time}>7 min</Text>
        </ImageBackground>
        <ImageBackground source={Interview4} resizeMode='contain' style={styles.main}>
          <Text style={styles.meeting}> <Meeting4/></Text>
          <Text style={styles.heading}>Interview 4</Text>
          <Text style={styles.para}>Lorem Ipsum
            Doller sit amet
            Recommended</Text>
            <Text style={styles.time}>7 min</Text>
        </ImageBackground>
        <ImageBackground source={Interview1} resizeMode='contain' style={styles.main}>
          <Text style={styles.meeting}> <Meeting1/></Text>
          <Text style={styles.heading}>Interview 5</Text>
          <Text style={styles.para}>Lorem Ipsum
            Doller sit amet
            Recommended</Text>
            <Text style={styles.time}>5 min</Text>
        </ImageBackground>
      </View>
      </ScrollView>
    </View>
  )
}

export default Interview

const styles = StyleSheet.create({
  main: {
    height: 154,
    width: 100,
    marginRight:pixelSizeVertical(20)

  },
  container: {
    flexDirection: "row",
    marginLeft:pixelSizeVertical(19),
  },
  meeting: {
    position: "relative",
    top: -15,
    left:7,
    zIndex:10
  },
  heading: {
    color: "white",
    fontSize:fontPixel(12),
    fontFamily:"Poppins-SemiBold",
    left:9
  },
  para:{
    fontSize:fontPixel(9),
    fontFamily:"Poppins-Medium",
    lineHeight:12,
    color: "white",
    left:pixelSizeVertical(9),
    top:pixelSizeVertical(7)

  },
  time:{
    color: "white",
    fontSize:fontPixel(16),
    fontFamily:"Poppins-SemiBold",
    top:pixelSizeVertical(11),
    left:pixelSizeVertical(25)
  }
})