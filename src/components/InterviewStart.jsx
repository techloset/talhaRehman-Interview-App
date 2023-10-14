import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Label1 from "../assets/images/YellowLabel1.svg"
import Label2 from "../assets/images/YellowLabel2.svg"
import Label3 from "../assets/images/YellowLabel3.svg"
import Label4 from "../assets/images/YellowLabel4.svg"
import Label5 from "../assets/images/YellowLabel5.svg"

const InterviewStart = () => {
    return (
        <View style={{ borderRadius: 5, marginHorizontal: 20, marginTop: 18, backgroundColor: "#FFFFFF", justifyContent: "center", height: 250, alignItems: "center" }}>
            <Label1 style={styles.label1}/>
            <Label2 style={styles.label2}/>
            <Label3 style={styles.label3}/>
            <Label4 style={styles.label4}/>
            <Label5 style={styles.label5}/>
            <Text style={styles.first}>Try Your First Interview
                for free</Text>
                <View style={{marginTop:29}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>START</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default InterviewStart

const styles = StyleSheet.create({
    first: {
        color: "#4A4E57",
        textAlign: "center",
        fontSize: 18,
        fontFamily: "Poppins-Medium",
        lineHeight: 24,
        width: "60%",
        marginTop:24
    },
    buttonText:{
        color:"#FFFFFF",
        fontSize:14,
        fontFamily: 'Poppins-SemiBold'
      },
    button:{
        width:142,
        height:47,
        borderRadius:3,
        backgroundColor:"#F17720",
        justifyContent:"center",
        alignItems:"center"
      },
      label1:{
        position:"absolute",
        top:20,
        left:14,
      },
      label2:{
        position:"absolute",
        top:26,
        left:150,
      },
      label3:{
        position:"absolute",
        top:0,
        left:269,
      },
      label4:{
        position:"absolute",
        top:132,
        left:7,
      },
      label5:{
        position:"absolute",
        top:136,
        left:162,
      },
})