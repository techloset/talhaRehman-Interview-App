import { StyleSheet, Text, View, SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import Left from "../../assets/images/LeftArrow.svg"
import Select from "../../assets/images/Select.svg"
import Idea from "../../assets/images/Idea.svg"
import Article from "../../assets/images/Article.svg"
import Application from "../../assets/images/Application.svg"
import ArticlesSlider from '../../components/ArticlesSlider'
import ratio from '../../style/consts/ratio'
import { Color, FontFamily } from '../../style/consts/GlobalStyles'
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;


const Articles = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
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
            </ScrollView>
        </SafeAreaView>
    )
}

export default Articles

const styles = StyleSheet.create({
    articles:{
        color: Color.darkBlue,
        fontSize:22,
        fontFamily: FontFamily.poppinsSemiBold,
        marginLeft:pixelSizeVertical(11)
    },
    articlesPage:{
        color: Color.pageColor,
        fontSize:14,
        fontFamily:FontFamily.poppinsMedium,
        marginLeft:pixelSizeVertical(28)
    },
    main:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap",
        backgroundColor: Color.pageLightColor,
        marginTop:14,
        gap:pixelSizeVertical(66)
    },
    topRow:{
        alignItems:"center",
        marginLeft:pixelSizeVertical(37),
        marginTop:55
    },
    text1:{
        color: Color.primary,
        fontSize:14,
        fontFamily:FontFamily.poppinsMedium,
        marginTop:3,
    },
    text2:{
        color: Color.darkBlue,
        fontSize:14,
        fontFamily:FontFamily.poppinsMedium,
        marginTop:3,
    },
    topRow1:{
        alignItems:"center",
        marginTop:55,
    }
})