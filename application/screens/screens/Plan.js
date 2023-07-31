import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, Button, Dimensions, TouchableOpacity, Modal, Image, ActivityIndicator } from "react-native";
const { width, height } = Dimensions.get('window');
import MA from 'react-native-vector-icons/MaterialCommunityIcons'
import MB from 'react-native-vector-icons/EvilIcons'
import { NavigationContainer } from '@react-navigation/native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';


export default function Plan(props) {

    const [isDialogVisible, setDialogVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    }, []);


    const openDialog = () => {
        setDialogVisible(true);
    };

    const closeDialog = () => {
        setDialogVisible(false);
    };

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

                <View style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'orange' }}>Please Choose Your Plan</Text>
                    <View style={styles.container}>
                        <View style={{ margin: 10 }}>
                            <Text style={{ color: '#00C851', fontSize: 40, }}>Free</Text>
                            <Text style={{ fontSize: 18, marginTop: 30 }}>&#8377;0.00</Text>
                            <Text style={{ fontSize: 18, marginTop: 30 }}>Unlimited Job search</Text>
                            <Text style={{ fontSize: 18, marginTop: 30 }}>Unlimited Document upload</Text>
                            <View style={styles.horizontalRule} marginTop={28} />
                            <View style={styles.box}>
                                <TouchableOpacity style={{ width: width * 0.38, height: height * 0.07, backgroundColor: '#008000', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: 'white' }}>ACTIVATED</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={{ margin: 10 }}>
                            <Text style={{ color: '#FF3547', fontSize: 40, }}>Silver</Text>
                            <Text style={{ fontSize: 18, marginTop: 30 }}>&#8377;100.00</Text>
                            <Text style={{ fontSize: 18, marginTop: 30 }}>Everything included in Free plan</Text>
                            <Text style={{ fontSize: 18, marginTop: 30 }}>Can apply upto 5 Jobs</Text>
                            <View style={styles.horizontalRule} marginTop={28} />
                            <View style={styles.box}>
                                <TouchableOpacity style={{ width: width * 0.38, height: height * 0.07, backgroundColor: '#F96209', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: 'white' }}>ACTIVATE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={{ margin: 10 }}>
                            <Text style={{ color: '#FF3547', fontSize: 40, }}>Gold</Text>
                            <Text style={{ fontSize: 18 }}>&#8377;500.00</Text>
                            <Text style={{ fontSize: 18, marginTop: 7 }}>Everything Included in silver plan</Text>
                            <Text style={{ fontSize: 18, marginTop: 7 }}>Can apply upto 5 Jobs</Text>
                            <Text style={{ fontSize: 18, marginTop: 7 }}>Job assist</Text>
                            <Text style={{ fontSize: 18, marginTop: 7 }}>Profiling assist</Text>
                            <View style={styles.horizontalRule} />

                            <View style={styles.box} >
                                <TouchableOpacity style={{ width: width * 0.38, height: height * 0.07, backgroundColor: '#F96209', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: 'white' }} onPress={openDialog} >ACTIVATE</Text>
                                </TouchableOpacity>
                            </View>

                            <Modal visible={isDialogVisible} animationType="slide" transparent={true} onRequestClose={closeDialog}>

                                <View style={styles.containers}>
                                    <View style={styles.headline}>

                                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                                <Text style={styles.containerss}></Text>
                                                <Text style={styles.item}>Humhai GOLD Plan</Text>
                                                <MA name={"close"} size={20} onPress={closeDialog} style={{ marginTop: 30, color: 'white', marginLeft: 90 }} />
                                            </View>
                                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: 15, }}>
                                                <View style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Text style={{ color: 'white', fontSize: 12 }}>Total Amount</Text>
                                                    <Text style={{ color: 'white', fontSize: 16 }}>₹ 590</Text>
                                                </View>
                                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <MA name={"lock"} size={12} style={{ color: 'white' }} />
                                                    <Text style={{ color: 'white', fontSize: 11 }}> Secured by</Text>
                                                    <Image style={styles.image} source={require('../../../assets/logo.png')} />
                                                    <Text style={{ color: 'white', fontSize: 12, fontStyle: 'italic' }}>Rozorpay</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ margin: 20, display: 'flex', flexDirection: 'row' }}>
                                            <MB name={"user"} size={30} style={{ color: 'black', marginTop: 20 }} />
                                            <Text style={{ fontSize: 14, marginTop: 20 }}> Contact Details</Text>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
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
        height: height * 0.42,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        margin: 20
    },
    horizontalRule: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 40,
    },
    box: {
        width: width * 0.38,
        height: height * 0.4,
        margin: 10,
    },
    containers: {
        width: width * 0.9,
        height: height * 0.92,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        margin: 20,

    },
    headline: {
        backgroundColor: 'orange',
        width: width * 0.9,
        height: height * 0.2,
    },
    item: {

        fontSize: 14,
        marginTop: 35,
        color: 'white'
    },
    containerss: {
        width: width * 0.15,
        height: height * 0.07,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'orange',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        margin: 15
    },
    image: {
        width: width * 0.06,
        height: height * 0.02,
        // margin: 5,

    },

})

// import React, { useState } from 'react';
// import { Button, Modal, Text, View } from 'react-native';

// const Plan = (props) => {
//   const [isDialogVisible, setDialogVisible] = useState(false);

//   const openDialog = () => {
//     setDialogVisible(true);
//     // props.navigation.navigate('HumHaiSilver');
//   };

//   const closeDialog = () => {
//     setDialogVisible(false);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Button title="Open Dialog" onPress={openDialog} />

//       <Modal
//         visible={isDialogVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={closeDialog}
//       >
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           }}
//         >
//           <View
//             style={{
//               backgroundColor: 'white',
//               padding: 20,
//               borderRadius: 10,
//             }}
//           >
//             <Text>This is a dialog</Text>

//             <Button title="Close" onPress={closeDialog} />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default Plan;
