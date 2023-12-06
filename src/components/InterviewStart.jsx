import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Label1 from "../assets/images/YellowLabel1.svg"
import ratio from '../style/consts/ratio'
import { Color , FontFamily } from '../style/consts/GlobalStyles'

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const InterviewStart = ({navigation}) => {
    return (
        <View style={{ borderRadius: 5, marginHorizontal: pixelSizeVertical(20), marginTop: 18, backgroundColor: "#FFFFFF", justifyContent: "center", height: 250, alignItems: "center" }}>
            <Label1 style={styles.label1} width="95"> </Label1>
            <Label1 style={styles.label2} width="60"/>
            <Label1 style={styles.label3} width="104"/>
            <Label1 style={styles.label4} width="71"/>
            <Label1 style={styles.label5} width="54"/>
            <Label1 style={styles.label6} width="50"/>
            <Label1 style={styles.label7} width="54"/>
            <Label1 style={styles.label8} width="95"/>
            <Text style={styles.first}>Try Your First Interview
                for free</Text>
                <View style={{marginTop:29}}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Analytics')}>
                        <Text style={styles.buttonText} >START</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default InterviewStart

const styles = StyleSheet.create({
    first: {
        color: Color.lightGrey,
        textAlign: "center",
        fontSize: 18,
        fontFamily: FontFamily.poppinsMedium,
        lineHeight: 24,
        width: "60%",
        marginTop:pixelSizeVertical(24)
    },
    buttonText:{
        color: Color.white,
        fontSize:14,
        fontFamily: FontFamily.poppinsSemiBold
      },
    button:{
        width:142,
        height:47,
        borderRadius:3,
        backgroundColor: Color.primary,
        justifyContent:"center",
        alignItems:"center"
      },
      label1:{
        position:"absolute",
        top:20,
        left:pixelSizeVertical(14),
      },
      label2:{
        position:"absolute",
        top:26,
        left:pixelSizeVertical(150),
      },
      label3:{
        position:"absolute",
        top:0,
        left:pixelSizeVertical(249),
      },
      label4:{
        position:"absolute",
        top:132,
        left:pixelSizeVertical(7),
      },
      label5:{
        position:"absolute",
        top:136,
        left:pixelSizeVertical(162),
      },
      label6:{
        position:"absolute",
        top:120,
        left:pixelSizeVertical(300),
      },
      label7:{
        position:"absolute",
        top:190,
        left:71,
      },
      label8:{
        position:"absolute",
        top:165,
        left:pixelSizeVertical(257),
      },
})