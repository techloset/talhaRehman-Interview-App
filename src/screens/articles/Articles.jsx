import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Left from "../../assets/images/LeftArrow.svg"


const Articles = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{flexDirection:"row", alignItems:"center", marginTop:34, marginLeft:18 }}>
                <Left onPress={() => navigation.navigate('Home')} />
                <Text style={styles.articles}>Articles</Text>
            </View>
            <View>
                <Text style={styles.articlesPage}>The Article Page</Text>
            </View>
            <View>
                
            </View>

        </SafeAreaView>
    )
}

export default Articles

const styles = StyleSheet.create({
    articles:{
        color:"#013551",
        fontSize:22,
        fontFamily:"Poppins-SemiBold",
        marginLeft:11
    },
    articlesPage:{
        color:"#47515C",
        fontSize:14,
        fontFamily:"Poppins-Medium",
        marginLeft:28
    }
})