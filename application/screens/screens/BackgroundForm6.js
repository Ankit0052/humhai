import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');




function BackgroudForm6() {
    const navigation = useNavigation()


    return (

        <ScrollView>
            <View style={styles.containe}>

                <View style={styles.container}>
                    <Text style={{ fontSize: 30, marginTop: 30 }}>Background Verification</Text>

                    <View style={{ display: 'flex', flexDirection: 'row',marginTop:50 }}>
                        <View style={{ marginRight: 20 }}>
                            <TouchableOpacity style={styles.buttonss}>
                                <Text style={[styles.testss]} onPress={() => navigation.navigate('BackgroundForm5')}>Previous</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 40 }}>
                            <TouchableOpacity style={styles.buttons}>
                                <Text style={[styles.tests]} onPress={() => navigation.navigate('BackgroundForm6')}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView >
    );
}
const styles = StyleSheet.create({
    containe: {
        // height: height * 0.6,
        backgroundColor: '#F1F1F1',
    },
    container: {
        width: width * 0.95,
        height: height * 0.25,
        backgroundColor: 'white',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        marginTop: 120,
        alignItems: 'center',
        marginLeft: 10
    },


    buttons: {
        width: width * 0.35,
        height: height * 0.059,
        backgroundColor: 'orange',
        borderColor: 'orange',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tests: {
        fontSize: 18,
        color: 'white',

    },

    containersss: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    buttonss: {
        width: width * 0.35,
        height: height * 0.059,
        backgroundColor: '#BBBBBB',
        borderColor: '#BBBBBB',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 2,

        alignItems: 'center',
        justifyContent: 'center',
    },
    testss: {
        fontSize: 18,
        color: 'white',

    },

})

export default BackgroudForm6;