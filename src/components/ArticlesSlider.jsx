import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Frame1 from "../assets/images/Frame1.svg"
import PaginationPic from "../assets/images/Pagination.svg"

const ArticlesSlider = () => {
    return (
        <View>

            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    <View style={styles.main}>
                        <Text style={styles.frame}><Frame1/></Text>
                        <Text style={styles.heading}>How To work ?</Text>
                        <Text style={styles.para}>Lorem Ipsum is simply dummy text
                            of the printing and typesetting
                            industry. Lorem Ipsum has been
                            the industry's standard dummy 
                        </Text>

                    </View>
                    <View style={styles.main2}>
                        <Text style={styles.frame}><Frame1/></Text>
                        <Text style={styles.heading}>How To work ?</Text>
                        <Text style={styles.para}>Lorem Ipsum is simply dummy text
                            of the printing and typesetting
                            industry. Lorem Ipsum has been
                            the industry's standard dummy 
                        </Text>

                    </View>
                </View>
            </ScrollView>
            <Text style={styles.PaginationPic}><PaginationPic/></Text>
            
        </View>
    )
}

export default ArticlesSlider

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginLeft:20
        
    },
    main: {
        width: 283,
        height: 407,
        backgroundColor:"rgba(255, 211, 193, 1), rgba(254, 199, 179, 1)",
        marginTop:92,
        marginRight:30

    },
    heading: {
        color: 'rgba(1, 53, 81, 1)',
        fontSize: 16,
        fontFamily: "Poppins-SemiBold",
        marginLeft:21
    },
    para:{
        color:"rgba(1, 53, 81, 1)",
        fontSize:13,
        fontFamily:"Poppins-Regular",
        marginLeft:21,
        width:"86%",
        lineHeight:22,
    },
    frame:{
        position:"relative",
        top:-50,
        left:33
    },
    main2: {
        width: 283,
        height: 407,
        backgroundColor:"rgba(251, 229, 231, 1), rgba(245, 203, 204, 1)",
        marginTop:92,
        marginRight:30

    },
    PaginationPic:{
        marginTop:37,
        margin:"auto",
        alignSelf:"center",
        marginBottom:55
    }
})