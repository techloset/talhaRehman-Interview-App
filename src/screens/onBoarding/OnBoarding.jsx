import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/logo.svg'
import Yellow from '../../assets/images/YellowBackground.png'
import Tabel from '../../assets/images/TalkingTabel.svg'
import BottomYellow from '../../assets/images/BottomYellow.png'
import { useNavigation } from '@react-navigation/native'

const OnBoarding = () => {
   const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <ImageBackground source={Yellow} resizeMode='cover' >
          <View style={styles.logo}>
            <Logo />
          </View>
        </ImageBackground>
      </View>
      <View >
        <Tabel />
      </View>
      <View>
        <ImageBackground source={BottomYellow} resizeMode='cover'>

          <View style={{width:"100%", alignItems:"center"}}>
            <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing
              and  typesetting industry.  Lorem Ipsum has been
              the industry's standard dummy text ever since</Text>
          </View>
          <View style={{marginTop:21, alignItems:"center",paddingBottom:30}}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Navigation')}>
              <Text style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

export default OnBoarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 140
  },
  text:{
    color:"#3B4A58",
    fontFamily: 'Poppins-Medium',
    fontSize:14,
    alignItems:"center",
    width:"90%",
    marginTop:108
  },
  button:{
    width:212,
    height:47,
    borderRadius:3,
    backgroundColor:"#F17720",
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText:{
    color:"#FFFFFF",
    fontSize:14,
    fontFamily: 'Poppins-SemiBold'
  }

})