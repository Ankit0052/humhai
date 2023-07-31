import { View, Text, TextInput, Button, ScrollView, TouchableWithoutFeedback } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import { styles, toastConfig } from '../../../style';
import Toast from 'react-native-toast-message';
import Checkbox from 'expo-checkbox';
// import { Button } from 'react-native';

const useWebKit = true;

const RegistrationScreen = () => {
    const navigation = useNavigation()
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState('')
    const [username, setNumber] = useState('')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPassword_confirmation] = useState("")
    const [tc, setTc] = useState(null);
    const [register, setRegister] = useState('register')
    const [viewPassword, setViewPassword] = useState(false)

    const handleViewPassword = () => {
        setViewPassword(!viewPassword)
    }


    const clearTextInput = () => {
        setFirst_name('')
        setLast_name('')
        setNumber('')
        setEmail('')
        setPassword('')
        setPassword_confirmation('')
        setTc(null)
        setRegister('')
    
    }


    useEffect(() => {

    }, [])

    const handleFormSubmit = async () => {
        const formData = { username, first_name, last_name, email, password, password_confirmation, tc }
        console.log(formData, "fordmata")
        if (password === password_confirmation) {
            // await storeToken(data.status.token)

            PostRequestExample();
        }
        else {
            console.log("Password and confirm password doesn't match")
            Toast.show({
                type: 'warning',
                position: 'top',
                topOffset: 0,
                text1: "Password and confirm password doesn't match"
            })
        }
    }

    const PostRequestExample = async () => {


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, first_name: first_name, last_name: last_name, email: email, password: password, work: register })
        };
        try {
            await fetch(
                'https://humhai.in/register-app/', requestOptions)

                .then(response => {
                    response.json()
                        .then(data => {
                            console.log(data, "data")
                            if (data.status == 200) {
                                // if (password === password_confirmation) {
                                // console.log("Response Data", res.data)
                                // navigation.navigate('ReferralCode')
                                clearTextInput()
                                navigation.navigate('OTPS')


                                // }
                                // else {
                                //     console.log("Password and confirm password doesn't match")
                                //     Toast.show({
                                //         type: 'warning',
                                //         position: 'top',
                                //         topOffset: 0,
                                //         text1: "Password and confirm password doesn't match"
                                //     })
                                // }

                            }

                            if (data.status === 403) {
                                // console.log("Response error", res.error.data.errors)
                                Toast.show({
                                    type: 'warning',
                                    position: 'top',
                                    topOffset: 0,
                                    text1: "user already exist pls login"
                                    // ...(data.status==false ? {text1: res.error.data.error.name[0]} : ''),
                                })
                            }
                            if (data.status === 500) {
                                Toast.show({
                                    type: 'warning',
                                    position: 'top',
                                    topOffset: 0,
                                    text1: "Server error"
                                })
                            }

                            // console.log("Post created at : ",  

                            // data.createdAt); 

                        });
                })
        }
        catch (error) {
            console.error(error);
        }
    }




    // // const [registerUser] = useRegisterUserMutation()

    // const handleFormSubmit = async () => {
    //     const formData = { name, email, password, password_confirmation, tc }
    //     const res = await registerUser(formData)
    //     // console.log("Response",res)
    //     if(res.data){
    //         // console.log("Response Data", res.data)
    //         clearTextInput()
    //         navigation.navigate('UserPanelTab')
    //     }
    //     if(res.error){
    //         // console.log("Response error", res.error.data.errors)
    //         Toast.show({
    //             type: 'warning',
    //             position: 'top',
    //             topOffset: 0,
    //             ...(res.error.data.error.name ? {text1: res.error.data.error.name[0]} : ''),
    //             ...(res.error.data.error.email ? {text1: res.error.data.error.email[0]} : ''),
    //             ...(res.error.data.error.password ? {text1: res.error.data.error.password[0]} : ''),
    //             ...(res.error.data.error.password_confirmation ? {text1: res.error.data.error.password_confirmation[0]} : ''),
    //             ...(res.error.data.error.tc ? {text1: res.error.data.error.tc[0]} : ''),
    //             ...(res.error.data.error.non_feild_errors ? {text1: res.error.data.error.non_feild_errors[0]} : ''),
    //         })
    //     }
    // }

    return (
        <SafeAreaView>
            <Toast config={toastConfig} />
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={{ marginHorizontal: 30 }}>

                    <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                        <Text style={styles.labelText}>First Name</Text>
                        <TextInput style={styles.input} value={first_name} onChangeText={setFirst_name} placeholder="Write Your First Name" keyboardType='email-address' />
                    </View>

                    <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                        <Text style={styles.labelText}>Last Name</Text>
                        <TextInput style={styles.input} value={last_name} onChangeText={setLast_name} placeholder="Write Your Last Name" keyboardType='email-address' />
                    </View>

                    <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                        <Text style={styles.labelText}>Number</Text>
                        <TextInput style={styles.input} value={username} onChangeText={setNumber} placeholder="Enter Your Phone Number" keyboardType='phone-pad' />
                    </View>
                    <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                        <Text style={styles.labelText}>Email</Text>
                        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Write Your Email" keyboardType='email-address' />
                    </View>
                    <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                        <Text style={styles.labelText}>Password</Text>
                        <View>
                            <TextInput style={styles.input} secureTextEntry={viewPassword ? false : true} value={password} onChangeText={setPassword} placeholder="Write Your Password" />
                            {password ? <Icons name={viewPassword ? 'eye-off' : 'eye'} style={{ fontSize: 26, position: 'absolute', top: 8.5, marginLeft: 260 }} onPress={handleViewPassword} /> : <></>}
                        </View>
                    </View>
                    <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                        <Text style={styles.labelText}>Confirm Password</Text>
                        <View>
                            <TextInput style={styles.input} value={password_confirmation} onChangeText={setPassword_confirmation} placeholder="Write Your Confirm Password" secureTextEntry={viewPassword ? false : true} />
                            {password ? <Icons name={viewPassword ? 'eye-off' : 'eye'} style={{ fontSize: 26, position: 'absolute', top: 8.5, marginLeft: 260 }} onPress={handleViewPassword} /> : <></>}
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Checkbox value={tc} onValueChange={setTc} color={tc ? '#4630EB' : undefined} />
                        <Text style={styles.labelText}>I agree to term and condition </Text>
                    </View>
                    <View style={{ width: 200, alignSelf: 'center', margin: 20 }}>
                        <Button title="Join" onPress={handleFormSubmit} color="orange"></Button>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableWithoutFeedback onPress={() => { navigation.navigate('UserLogin') }} style={{ justifyContent: 'flex-end' }}>
                            <Text style={{ fontWeight: "bold" }}>Already Register ? Login</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegistrationScreen