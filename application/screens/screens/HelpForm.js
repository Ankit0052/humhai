import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Dimensions, Text, StyleSheet, Button, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
const { width, height } = Dimensions.get('window');



export default function HelpForm() {
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <ScrollView>
            {isLoading ? (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ resizeMode: 'contain', width: width * 0.900, height: height * 0.720, padding: 30 }}
                        source={require('../../../image/hum.png')} />
                    <ActivityIndicator size="large" color="orange" />
                    <Text>Loading...</Text>
                </View>
            ) : (

                <View style={{ marginTop: 70 }}>
                    <Image style={{ margin: 5, borderRadius: 100, resizeMode: 'contain', width: width * 0.35, height: height * 0.1, padding: 30 }}
                        source={require('../../../image/hum.png')} />
                    <Text style={{ fontSize: 18, margin: 10, fontWeight: 'bold' }}>Humhai helps you connect and provide opportunities.</Text>

                    <View style={styles.container} marginTop={20}>
                        <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                            <Text style={styles.labelText}>Number</Text>
                            <TextInput style={styles.input} placeholder="Enter Your Phone Number" keyboardType='text-pad' />
                        </View>

                        <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                            <Text style={styles.labelText}>Password</Text>
                            <TextInput style={styles.input} placeholder="Enter Your Password" keyboardType='text-pad' />
                        </View>

                        <View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={[styles.test]}> Log In</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <Text style={{ textDecorationLine: 'underline', color: 'blue', fontSize: 19, fontWeight: 'bolder' }}>Forgotten password?</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.horizontalRule} />

                        <View>
                            <TouchableOpacity style={styles.buttons}>
                                <Text style={[styles.tests]}>Create New Account</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            )}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: width * 0.95,
        height: height * 0.57,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5, // Required for Android shadow
        margin: 10,
        alignItems: 'center',
    },
    labelText: {
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        height: height * 0.07,
        width: width * 0.85,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 8,
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center'

    },
    inputWithLabel: {
        marginBottom: 10,
        marginTop: 5,
    },
    button: {
        width: width * 0.85,
        height: height * 0.07,
        backgroundColor: '#ecf0f1',
        borderColor: '#1e272e',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 7,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    test: {
        fontSize: 20,
        color: '#1e272e',
        fontWeight: 'bold'
    },
    horizontalRule: {
        width: width * 0.95,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginTop: 25,
    },

    buttons: {
        width: width * 0.7,
        height: height * 0.07,
        backgroundColor: '#198754',
        borderColor: '#1e272e',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 7,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tests: {
        fontSize: 20,
        color: 'white',

    },

});