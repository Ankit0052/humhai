
import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');

const OurTeam = () => {
    const colorList = ['#A1CCD1', '#F4F2DE', '#E9B384', '#7C9D96',]
    const images = [
        { id: 1, source: require('../../../assets/arun.jpeg'), name: 'Arun Prabhu', field: '(Director)' },
        { id: 2, source: require('../../../assets/shivam.png'), name: 'Shivam Prasad', field: '(Full Stack Devoloper)' },
        { id: 3, source: require('../../../assets/ayyub.png'), name: 'Ayyub', field: '(Python Devoloper)' },
        { id: 4, name: 'Abdul', field: '(Senior Frontend Devoloper)' },
    ];



    return (
        <ScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Our Team</Text>
            </View>
            <View style={[{ marginTop: 5 }]}>
                <Swiper loop={true} showsPagination={false} autoplay={true} dots={false} style={styles.wrapper}  >
                    {
                        images.map((item) => (
                            <View style={styles.slide}>
                                <View style={[styles.slide, styles.container, { backgroundColor: colorList[parseInt(Math.random() * colorList.length)] }]}>
                                    <Image source={item.source} style={styles.image} resizeMode="cover" />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 16, fontWeight: 'bolder' }}>{item.field}</Text>
                                </View>
                            </View>
                        ))
                    }

                </Swiper>
            </View >
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        height: height * 0.02,
        // backgroundColor: '#c7ecee',
        borderRadius: 200,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5, 
        margin: 5
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        height: 410,
    },
    image: {
        width: width * 0.7,
        height: height * 0.32,
        margin: 5,
        borderRadius: 200
    },
});

export default OurTeam;
