import React, { useEffect, useState } from 'react';
import MCI from 'react-native-vector-icons/EvilIcons'
import MCA from 'react-native-vector-icons/FontAwesome5'
import MCB from 'react-native-vector-icons/FontAwesome5'
import { View, Text, StyleSheet, Button, Dimensions, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';



function DashBoard() {
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation()



    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => { setIsLoading(false); }, 800);
    }, []);


    return (
        <ScrollView>

            {isLoading ? (
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Image style={{ resizeMode: 'contain', width: width * 0.900, height: height * 0.720, padding: 30 }}
                        source={require('../../../image/hum.png')} />
                    <ActivityIndicator size="large" color="orange" />
                    <Text>Loading...</Text>
                </View>
            ) : (

                <View style={{ alignItems: 'center', justifyContent: 'center', margin: 5 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Recommended Jobs for you</Text>


                    <View style={styles.container}>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Relationship Officer</Text>
                            <Text style={{ fontSize: 17 }}>Svasti Microfinance Private Limited</Text>
                            <Text style={{ fontSize: 17 }}>&#8377;15000-17000 Per Month</Text>

                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', margin: 2, justifyContent: 'space-between' }}>

                            <View style={styles.buttons} backgroundColor={'#198754'}>
                                <TouchableOpacity style={styles.buttons}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <MCI name="location" size={26} style={{ marginTop: 2, color: 'white' }} />
                                        <Text style={styles.buttonsText}>Maharashtra</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttons} backgroundColor={'#DC3545'}>
                                <TouchableOpacity style={styles.buttons} >
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <MCA name="book-reader" size={16} style={{ marginTop: 1, color: 'white' }} />
                                        <Text style={styles.buttonsText}> 12th or above</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttons} backgroundColor={'#0D6EFD'}>
                                <TouchableOpacity style={styles.buttons} >
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <MCB name="business-time" size={16} style={{ marginTop: 2, color: 'white' }} />
                                        <Text style={styles.buttonsText}> Fresher</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={styles.box} >
                                <TouchableOpacity >
                                    <Text style={{ fontSize: 20, color: '#FF4500', }} onPress={() => { navigation.navigate('Jobs') }}>Apply Now</Text>
                                </TouchableOpacity>
                            </View>

                            <View >
                                <TouchableOpacity style={styles.boxs}  >
                                    <Text style={{ fontSize: 24, color: '#AA66CC', }} onPress={() => { navigation.navigate('Jobs') }}>Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>



                    <View style={{ display: 'flex', flexDirection: 'row', }}>
                        <View>
                            <LinearGradient colors={['#ff9900', 'red']} style={styles.buttonss} >
                                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => { navigation.navigate('DashBoard') }}>
                                        <Text style={[styles.tests]}>Next</Text>
                                    </TouchableOpacity>
                                </View>
                            </LinearGradient>
                        </View>

                        <View style={{ marginLeft: 10 }}>
                            <LinearGradient colors={['#ff9900', 'red']} style={styles.buttonss} >
                                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => { navigation.navigate('DashBoard') }}>
                                        <Text style={[styles.tests]}>Last >></Text>
                                    </TouchableOpacity>
                                </View>
                            </LinearGradient>
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 15 }}>
                            <Text>Page 1 of 113</Text>
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
        height: height * 0.28,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5, // Required for Android shadow
        margin: 20
    },
    box: {
        width: width * 0.4,
        height: height * 0.07,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // For Android
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    boxs: {
        width: width * 0.27,
        height: height * 0.059,
        backgroundColor: 'white',
        borderWidth: 4,
        borderColor: '#AA66CC',
        shadowColor: '#AA66CC',
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttons: {
        width: width * 0.308,
        height: height * 0.042,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,

    },
    buttonsText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    buttonss: {
        width: width * 0.25,
        height: height * 0.055,
        // backgroundColor: 'orange',
        borderColor: '#F2F2F2',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    tests: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',

    },
});


export default DashBoard;
