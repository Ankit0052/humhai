import { View, Text, TextInput, Button, ScrollView, TouchableWithoutFeedback } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles, toastConfig } from '../../../style';
import Toast from 'react-native-toast-message';
import Checkbox from 'expo-checkbox';
// import { Button } from 'react-native';

const useWebKit = true;

const ReferralCode = (props) => {
    const navigation = useNavigation()
    const [referral_code,setReferral_code]=useState('')


    const handleFormSubmit = async () => {
        const formData = { referral_code:referral_code }
        console.log(formData, "fordmata")
        if (password === password_confirmation) {
            // await storeToken(data.status.token)
            // PostRequestExample();
        }
        else {
            console.log("Referral doesn't match")
            Toast.show({
                type: 'warning',
                position: 'top',
                topOffset: 0,
                text1: "Referral doesn't match"
            })
        }
    }



    return (
        <SafeAreaView>
            <Toast config={toastConfig} />
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={{ marginHorizontal: 30 }}>

                    <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                        <Text style={styles.labelText}>Referral Code</Text>
                        <TextInput style={styles.input} value={referral_code} onChangeText={setReferral_code} placeholder="Write Your Refrral Code" keyboardType='email-address' />
                    </View>
                    <View style={{ width: 200, alignSelf: 'center', margin: 20 }}>
                        <Button title="Join" color="orange" onPress={handleFormSubmit}></Button>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableWithoutFeedback onPress={() => { navigation.navigate('Home1') }} style={{ justifyContent: 'flex-end' }}>
                            <Text style={{ fontWeight: "bold" }}>Skip</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ReferralCode;