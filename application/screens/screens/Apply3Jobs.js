import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import MCI from 'react-native-vector-icons/Ionicons'

export default function Apply3Jobs() {

    return (
        <ScrollView>
            <View style={{ margin: 5, alignItems: 'center' }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Apply for Job in 3 Easy Steps</Text>

                <View style={styles.container} margin={5}>
                    <Text style={styles.text}>Step 1</Text>
                    <Text style={{ fontSize: 22, fontWeight: 'bolder' }}>Login/Register on Humhai.in</Text>
                </View>

                <View>
                    <MCI name={"arrow-down-circle"} size={46} />
                </View>
                
                <View style={styles.container} margin={5}>
                    <Text style={styles.text}>Step 2</Text>
                    <Text style={{ fontSize: 22, fontWeight: 'bolder' }}>Search for preferred Job</Text>
                </View>

                <View>
                    <MCI name={"arrow-down-circle"} size={46} />
                </View>

                <View style={styles.container} margin={5}>
                    <Text style={styles.text}>Step 3</Text>
                    <Text style={{ fontSize: 22, fontWeight: 'bolder' }}>Apply in single click</Text>
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: width * 0.95,
        height: height * 0.13,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5, // Required for Android shadow
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bolder',
        margin: 5
    }
});