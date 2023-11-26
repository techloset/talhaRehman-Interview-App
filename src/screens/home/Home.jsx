import { StyleSheet, Text, View, Button, SafeAreaView,ScrollView, Image } from 'react-native'
import React from 'react'
import RightArrow from '../../assets/images/rightArrow.svg'
import InterviewStart from '../../components/InterviewStart'
import Interview from '../../components/Interview'
import ratio from '../../style/consts/ratio'
import { Color , FontFamily } from '../../style/consts/GlobalStyles'


const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
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
      <View style={{flexDirection:"row", marginBottom:pixelSizeVertical(58)}}>
        <View style={{marginLeft:20,marginTop:13,flexDirection:"row"}}>
        <View style={styles.cat}></View>
        <View style={styles.cat}></View>
        <View style={styles.cat}></View>
        <View style={styles.cat}></View>
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
    color: Color.lightGrey,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: 22
  },
  tem: {
    color: Color.primary,
    fontSize: 16,
    fontFamily: FontFamily.poppinsSemiBold
  },
  last:{
    color: Color.darkGray,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: 16,
  },
  details:{
    color: Color.grey,
    fontSize:14,
  },
  cat:{
    width:ratio.widthPixel(100),
    height:ratio.widthPixel(50),
    marginRight:15,
    backgroundColor: Color.white
  }
})