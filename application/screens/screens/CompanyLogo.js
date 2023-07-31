import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView,Text } from 'react-native';
const { width, height } = Dimensions.get('window');


export default function CompanyLogo() {
    return (
        <ScrollView style={{margin:5}}>
            <View style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Trusted by many renowned companies!</Text>
            </View>
            <View>
                <Image style={styles.image} source={require('../../../assets/D2.jpg')} />
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    image: {
        width: width * 1.0349,
        height: height * 0.3,
    },

});