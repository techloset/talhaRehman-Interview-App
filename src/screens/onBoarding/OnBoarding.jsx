import { StyleSheet, Text, View ,Button } from 'react-native'
import React from 'react'

const OnBoarding = ({navigation}) => {
  return (
    <View>
      <Text>OnBoarding</Text>
      <Button
        title="Go to Onboarding"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default OnBoarding

const styles = StyleSheet.create({})