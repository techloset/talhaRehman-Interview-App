import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Frame1 from "../assets/images/Frame1.svg"
import { Color, FontFamily } from '../style/consts/GlobalStyles'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState, useRef } from 'react';

const ArticlesSlider = () => {

    const [entries, setEntries] = useState([
        { title: 'How To work ?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy ' },
        { title: 'How To work ?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy ' },
        { title: 'How To work ?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy ' },
        { title: 'How To work ?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy ' },
        { title: 'How To work ?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy ' },
        { title: 'How To work ?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy ' },
    ]);

    const [activeSlide, setActiveSlide] = useState(0);

    const renderItem = ({ item }) => {
        return (
            <View style={{ marginLeft: 22, height: 420 }}>

                <View style={styles.main}>
                    <Text style={styles.frame}><Frame1 /></Text>
                    <Text style={styles.heading}>{item.title}</Text>
                    <Text style={styles.para}>{item.text} </Text>
                </View>
            </View>
        );
    };


    return (
        <View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View>
                        <Carousel
                            layout="default"
                            data={entries}
                            renderItem={renderItem}
                            sliderWidth={300}
                            itemWidth={300}
                            onSnapToItem={(index) => setActiveSlide(index)}
                        />
                        <Pagination
                            dotsLength={6}
                            activeDotIndex={activeSlide}
                            containerStyle={{ paddingVertical: 20 }}
                            dotStyle={{
                                width: 12,
                                height: 12,
                                borderRadius: 5,
                                marginHorizontal: 0,
                                backgroundColor: Color.primary, 
                            }}
                            inactiveDotStyle={{
                                width: 12,
                                height: 12,
                                borderRadius: 5,
                                marginHorizontal: 0,
                                backgroundColor: Color.grey89,
                            }}
                            inactiveDotOpacity={1}
                            inactiveDotScale={1}
                        />
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>

    )
}

export default ArticlesSlider

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginLeft: 20

    },
    main: {
        width: 283,
        height: 407,
        backgroundColor: Color.orange,
        marginTop: 92,
        marginRight: 30

    },
    heading: {
        color: Color.darkBlue,
        fontSize: 16,
        fontFamily: FontFamily.poppinsSemiBold,
        marginLeft: 21
    },
    para: {
        color: Color.darkBlue,
        fontSize: 13,
        fontFamily: FontFamily.poppinsRegular,
        marginLeft: 21,
        width: "86%",
        lineHeight: 22,
    },
    frame: {
        position: "relative",
        top: -50,
        left: 33
    },
    main2: {
        width: 283,
        height: 407,
        backgroundColor: Color.lightPink,
        marginTop: 92,
        marginRight: 30

    },
    PaginationPic: {
        marginTop: 37,
        margin: "auto",
        alignSelf: "center",
        marginBottom: 55
    }
})