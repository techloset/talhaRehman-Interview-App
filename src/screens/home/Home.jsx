import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'
import RightArrow from '../../assets/images/rightArrow.svg'
import InterviewStart from '../../components/InterviewStart'
const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20, marginTop:35}}>
        <View><Text style={styles.dashboard}>Dashboard</Text></View>
        <View><Text style={styles.tem}>30 C</Text></View>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20, marginTop:28}}>
       <View><Text style={styles.last}>Last Interview</Text></View>
       <View style={{flexDirection:"row",alignItems:"center",gap:3}}><Text style={styles.details}>Details</Text><RightArrow/></View>
      </View>
      <InterviewStart/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  dashboard: {
    color: "#4A4E57",
    fontFamily: "Poppins-Medium",
    fontSize: 22
  },
  tem: {
    color: "#F17720",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold"
  },
  last:{
    color:"#2B2C46",
    fontFamily:"Poppins-Medium",
    fontSize: 16
  },
  details:{
    color:"#666775",
    fontSize:14,
  }
})