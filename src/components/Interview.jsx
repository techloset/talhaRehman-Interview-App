import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import Meeting1 from "../assets/images/Meeting1.svg";
import Meeting2 from "../assets/images/Meeting2.svg";
import Meeting3 from "../assets/images/Meeting3.svg";
import Meeting4 from "../assets/images/Meeting4.svg";
import ratio from '../style/consts/ratio';
import { Color, FontFamily } from '../style/consts/GlobalStyles';

const { widthPixel, fontPixel, pixelSizeVertical } = ratio;

const interviewsData = [
  { image: require("../assets/images/Interview1.png"), meeting: <Meeting1 />, heading: "Interview 1", para: "Lorem Ipsum Doller sit amet Recommended", time: "5 min" },
  { image: require("../assets/images/Interview2.png"), meeting: <Meeting2 />, heading: "Interview 2", para: "Lorem Ipsum Doller sit amet Recommended", time: "10 min" },
  { image: require("../assets/images/Interview3.png"), meeting: <Meeting3 />, heading: "Interview 3", para: "Lorem Ipsum Doller sit amet Recommended", time: "7 min" },
  { image: require("../assets/images/Interview4.png"), meeting: <Meeting4 />, heading: "Interview 4", para: "Lorem Ipsum Doller sit amet Recommended", time: "7 min" },
  { image: require("../assets/images/Interview1.png"), meeting: <Meeting1 />, heading: "Interview 5", para: "Lorem Ipsum Doller sit amet Recommended", time: "5 min" },
];

const Interview = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ position: "relative", zIndex: -10 }} >
        <View style={styles.container} >
          {interviewsData.map((interview, index) => (
            <ImageBackground key={index} source={interview.image} resizeMode='contain' style={styles.main}>
              <Text style={styles.meeting}>{interview.meeting}</Text>
              <Text style={styles.heading}>{interview.heading}</Text>
              <Text style={styles.para}>{interview.para}</Text>
              <Text style={styles.time}>{interview.time}</Text>
            </ImageBackground>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Interview;

const styles = StyleSheet.create({
  main: {
    height: 154,
    width: 100,
    marginRight: pixelSizeVertical(20)
  },
  container: {
    flexDirection: "row",
    marginLeft: pixelSizeVertical(19),
    paddingTop: 28
  },
  meeting: {
    position: "relative",
    top: -17,
    left: 7,
    zIndex: 10
  },
  heading: {
    color: Color.white,
    fontSize: fontPixel(12),
    fontFamily: FontFamily.poppinsSemiBold,
    left: 9
  },
  para: {
    fontSize: fontPixel(9),
    fontFamily: FontFamily.poppinsMedium,
    lineHeight: 12,
    color: Color.white,
    left: pixelSizeVertical(9),
    top: pixelSizeVertical(7)
  },
  time: {
    color: Color.white,
    fontSize: fontPixel(16),
    fontFamily: FontFamily.poppinsSemiBold,
    top: pixelSizeVertical(11),
    left: pixelSizeVertical(25)
  }
});
