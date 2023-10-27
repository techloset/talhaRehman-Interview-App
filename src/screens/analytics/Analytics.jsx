import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Left from "../../assets/images/LeftArrow.svg"
import LeftOrange from "../../assets/images/LeftOrange.svg"
import Video from '../../components/Video'
import Result from '../../components/Result'

const Analytics = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={{flexDirection:"row", alignItems:"center", marginTop:39, marginLeft:18 }}>
            <Left onPress={() => navigation.navigate('Home')}/>
            <Text style={styles.analytics}>Analytics</Text>
        </View>
        <View style={{flexDirection:"row", alignItems:"center", marginTop:40, marginLeft:18, gap:8 }}>
            <LeftOrange/>
            <Text style={styles.job}>Job interview</Text>
        </View>
        <View>
            <Text style={styles.weekness}>01.  What are your weaknesses?</Text>
        </View>
        <View>
            <Text style={styles.video}>Video</Text>
            <Video navigation={navigation}/>
        </View>
        <View>
            <Text style={styles.result}>Result</Text>
            <Result/>
        </View>
        <View>
            <Text style={styles.result}>Summery</Text>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Analytics

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    analytics:{
        color:"#013551",
        fontFamily:"Poppins-SemiBold",
        fontSize:22,
        marginLeft:"27%"
    },
    job:{
        color:"#F17720",
        fontSize:18,
        fontFamily:"Poppins-SemiBold",
    },
    weekness:{
        color:"#000",
        fontSize:14,
        fontFamily:"Poppins-SemiBold",
        marginTop:4,
        marginLeft:17
    },
    video:{
        color:"#2B2C46",
        fontSize:18,
        fontFamily:"Poppins-Medium",
        marginLeft:13,
        marginTop:22
    },
    result:{
        color:"#2B2C46",
        fontSize:18,
        fontFamily:"Poppins-Medium",
        marginTop:23,
        marginLeft:16,
        marginBottom:25
    }
})