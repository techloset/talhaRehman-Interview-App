import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Left from "../../assets/images/LeftArrow.svg"
import Select from "../../assets/images/Select.svg"
import Idea from "../../assets/images/Idea.svg"
import Article from "../../assets/images/Article.svg"
import Application from "../../assets/images/Application.svg"
import ArticlesSlider from '../../components/ArticlesSlider'


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
            <View style={styles.main}>
                <View style={styles.topRow}>
                        <Select/>
                        <Text style={styles.text1}>All</Text>
                </View>
                <View style={styles.topRow1}>
                        <Idea/>
                        <Text style={styles.text2}>Main</Text>
                </View>
                <View style={styles.topRow1}>
                        <Article/>
                        <Text style={styles.text2}>Web</Text>
                </View>
                <View style={styles.topRow1}>
                        <Application/>
                        <Text style={styles.text2}>Other</Text>
                </View>
            </View>
            <ArticlesSlider/>

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
    },
    main:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap",
        backgroundColor:"#FFF2EB",
        marginTop:14,
        gap:66
    },
    topRow:{
        alignItems:"center",
        marginLeft:37,
        marginTop:55
    },
    text1:{
        color:"rgba(241, 119, 32, 1)",
        fontSize:14,
        fontFamily:"Poppins-Medium",
        marginTop:3,
        // marginBottom:21
    },
    text2:{
        color:"rgba(1, 53, 81, 1)",
        fontSize:14,
        fontFamily:"Poppins-Medium",
        marginTop:3,
        // marginBottom:21
    },
    topRow1:{
        alignItems:"center",
        marginTop:55
    }
})