import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackground,TouchableOpacity, ScrollView,Image,StatusBar } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/logo.svg'
import Yellow from '../../assets/images/YellowBackground.png'
import Tabel from '../../assets/images/TalkingTabel.png'
import { useNavigation } from '@react-navigation/native'
import ratio from '../../style/consts/ratio'
import { Color, FontFamily } from '../../style/consts/GlobalStyles'
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const OnBoarding = () => {
   const navigation = useNavigation();
  return (
   <SafeAreaView>
    <StatusBar hidden/>
    <ImageBackground source={Yellow} style={styles.bgImg}>
      <View style={styles.logoContainer}><Logo width={266}/></View>
      <View style={styles.tableContainer}>
        <Image style={styles.tableImg} source={Tabel}/>
      </View>
      <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing
              and  typesetting industry.  Lorem Ipsum has been
              the industry's standard dummy text ever since</Text>
      </View>
      <View style={{marginTop:pixelSizeVertical(21), alignItems:"center",paddingBottom:30}}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Navigation')}>
              <Text style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>
          </View>
 
      </View>
    </ImageBackground>
   </SafeAreaView>
  )
}

export default OnBoarding

const styles = StyleSheet.create({
  button:{
    width:widthPixel(212),
    height:widthPixel(47),
    borderRadius:widthPixel(3),
    backgroundColor: Color.primary,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText:{
    color: Color.white,
    fontSize:fontPixel(14),
    fontFamily: FontFamily.poppinsSemiBold
  },
  textContainer:{
    alignItems:"center",
    marginTop:pixelSizeVertical(100)
  },
  text:{
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontSize:ratio.fontPixel(14),
    width:pixelSizeVertical(359),
  },
tableContainer:{
  alignItems: 'center',
  marginTop:pixelSizeVertical(120),
  width:widthPixel(390),
  alignSelf:'center'
},
tableImg:{
  width:'100%',
},
logoContainer:{
  alignItems: 'center',
  marginTop:pixelSizeVertical(50)
},
bgImg:{
  height:widthPixel(896),
}
})