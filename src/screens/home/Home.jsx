import { StyleSheet, Text, View, Button, SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import RightArrow from '../../assets/images/rightArrow.svg'
import InterviewStart from '../../components/InterviewStart'
import Interview from '../../components/Interview'
import ratio from '../../style/consts/ratio'

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20, marginTop:35}}>
        <View><Text style={styles.dashboard}>Dashboard</Text></View>
        <View><Text style={styles.tem}>30 C</Text></View>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20, marginTop:28}}>
       <View><Text style={styles.last}>Last Interview</Text></View>
       <View style={{flexDirection:"row",alignItems:"center",gap:3}}><Text style={styles.details}>Details</Text><RightArrow/></View>
      </View>
      <InterviewStart navigation={navigation} />
      <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20, marginTop:18}}>
       <View><Text style={styles.last}>Interviews</Text></View>
       <View style={{flexDirection:"row",alignItems:"center",gap:3}}><Text style={styles.details}>More</Text><RightArrow/></View>
      </View>
      <Interview/>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20, marginTop:18}}>
       <View><Text style={styles.last}>Interview by Category</Text></View>
       <View style={{flexDirection:"row",alignItems:"center",gap:3}}><Text style={styles.details}>More</Text><RightArrow/></View>
      </View>
      <View style={{flexDirection:"row", marginBottom:pixelSizeVertical(40)}}>
        <View style={{marginLeft:20,marginTop:13,flexDirection:"row"}}>
        <Text style={styles.cat}></Text>
        <Text style={styles.cat}></Text>
        <Text style={styles.cat}></Text>
        <Text style={styles.cat}></Text>
        </View>
      </View>
      </ScrollView>
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
    fontSize: 16,
  },
  details:{
    color:"#666775",
    fontSize:14,
  },
  cat:{
    width:ratio.widthPixel(100),
    height:ratio.widthPixel(50),
    marginRight:15,
    backgroundColor:"white"
  }
})