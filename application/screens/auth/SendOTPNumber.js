import { View, Text, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast  from 'react-native-toast-message';
import { styles, toastConfig } from '../../../style'
import { useNavigation } from '@react-navigation/native';

const SendOTPNumber = () => {
  const [number, setNumber] = useState("")
  const[send_otp,setsend_otp] = useState("send_otp")
  const navigation = useNavigation()
  const clearTextInput = () => {
    setNumber('')
    setsend_otp('')
  }
//   const handleFormSubmit = () => {
//     if (number) {
    //   console.log("OTP sent")
    //   const formdata = { number }
    //   console.log(formdata)
    //   clearTextInput()
    //   Toast.show({
    //     type: 'done',
    //     position: 'top',
    //     topOffset: 0,
    //     text1: "OTP Sent. Please Check Your Massege"
    //   });
    //   navigation.navigate('OTPS')
    // } else {
    //   console.log("Number is required")
    //   Toast.show({
    //     type: 'warning',
    //     position: 'top',
    //     topOffset: 0,
    //     text1: "Number is required"
    //   });
//     }
//   }

const handleFormSubmit = async () => {
    if (number) {
        PostRequestExample();
    }
    // await storeToken(data.status.token)
    
  }

  const PostRequestExample = async () => {


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile: number, work: send_otp  })
    };
    try {
      await fetch(
        'https://humhai.in/forget-pass-app/', requestOptions)
        .then(response => {
          response.json()
            .then(data => {
              console.log(data, "data")
              if (data.status == 200) {
                // console.log("Response Data", res.data)
                clearTextInput()
                navigation.navigate('otp')
              }
              if (data.status === 404) {
                // console.log("Response error", res.error.data.errors)
                Toast.show({
                  type: 'warning',
                  position: 'top',
                  topOffset: 0,
                  text1: "User Does Not Exist"
                })
              }
            });
        })
    }
    catch (error) {
        console.error(error);
      }
    }

  return (
    <SafeAreaView>
      <Toast config={toastConfig} />
      <View style={{ marginHorizontal: 30 }}>
        <View style={[styles.inputWithLabel ]}>
          <Text style={styles.labelText}>Number</Text>
          <TextInput style={styles.input} value={number} onChangeText={setNumber} placeholder="Write Your Phone Number" onPress={console.log(number)} keyboardType='phone-pad'  />
        </View>
        <View style={{ width: 200, alignSelf: 'center', margin: 20 }}>
          <Button title="Send OTP" onPress={handleFormSubmit} color="orange" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SendOTPNumber