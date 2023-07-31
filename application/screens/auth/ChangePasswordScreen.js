import { View, Text, TextInput, Button, ScrollView,} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, toastConfig } from '../../../style';
import Toast from 'react-native-toast-message';
import { useNavigation } from "@react-navigation/native";

const ChangePasswordScreen = () => {
  const navigation = useNavigation()
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [set_password,setset_password] =useState('set_password')

    const clearTextInput = () => {

        setPassword('')
        setConfirmPassword('')
        setset_password
    }

    // const handleFormSubmit = () => {
    //     if (password && confirmpassword) {
    //         if (password === confirmpassword) {
    //             console.log("Password Change Successfully")
    //             const formData = { password }
    //             console.log(formData)
    //             clearTextInput()
    //             Toast.show({
    //                 type: 'done',
    //                 position: 'top',
    //                 topOffset: 0,
    //                 text1: "Password Change Successfully "
    //             })
    //         } else {
    //             console.log(" New Password and confirm password doesn't match")
    //             Toast.show({
    //                 type: 'warning',
    //                 position: 'top',
    //                 topOffset: 0,
    //                 text1: "New Password and confirm password doesn't match"
    //             })

    //         }
    //     } else {
    //         console.log("All fields are required")
    //         Toast.show({
    //             type: 'warning',
    //             position: 'top',
    //             topOffset: 0,
    //             text1: "All fields are required"
    //         })
    //     }
    // }

    const handleFormSubmit = async () => {
        if (password===confirmpassword) {
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
        // await storeToken(data.status.token)
        
      }
    
      const PostRequestExample = async () => {
    
    
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password:password,work:set_password  })
        };
        try {
          await fetch(
            'https://humhai.in/forget-pass-app/', requestOptions)
            .then(response => {
              response.json()
                .then(data => {
                  console.log(data, "data")
                  if (data.status == 200) {
                    clearTextInput()
                    navigation.navigate('UserLogin')

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
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={{ marginHorizontal: 30 }}>
                    <View style={[styles.inputWithLabel, { marginHorizontal: 15 }]}>
                        <Text style={styles.labelText}>New Password</Text>
                        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Write Your New Password"  secureTextEntry={true} />
                    </View>
                    <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                        <Text style={styles.labelText}>Confirm New Password</Text>
                        <TextInput style={styles.input} value={confirmpassword} onChangeText={setConfirmPassword} placeholder="Write Your New Confirm Password" secureTextEntry={true} />
                    </View>
                    <View style={{ width: 200, alignSelf: 'center', margin: 20 }}>
                        <Button title="Save" onPress={handleFormSubmit} color="orange"></Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChangePasswordScreen