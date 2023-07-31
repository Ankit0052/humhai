import { Text, View, Image, TextInput, Button, ScrollView, TouchableWithoutFeedback, Linking, AppRegistry } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import Toast from 'react-native-toast-message'
import { styles, toastConfig } from "../../../style";
import { useNavigation } from "@react-navigation/native";
import DashBoard from "../screens/DashBoard";
// import RootNavigation from "../../navigation/RootNavigation";
import AppHeader from "../../component/AppHeader";

const useWebKit = true;

const LoginUser = () => {
  const navigation = useNavigation()
  const [username, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState(false)
  const [user, setUser] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  const [viewPassword, setViewPassword] = useState(false)

  const handleViewPassword = () => {
    setViewPassword(!viewPassword)
  }

  const clearTextInput = () => {
    setNumber('')
    setPassword('')
  }

  useEffect(() => {

  }, [])

  const handleFormSubmit = async () => {
    const formData = { username, password }
    console.log(formData, "fordmata")
    // await storeToken(data.status.token)
    PostRequestExample();
  }

  const PostRequestExample = async () => {


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password })
    };
    try {
      await fetch(
        'https://humhai.in/login-app/', requestOptions)
        .then(response => {
          response.json()
            .then(data => {
              console.log(data, "data")
              if (data.status == true) {
                setUser(data)
                setIsLogin(true)
                // console.log("Response Data", res.data)
                clearTextInput()
                navigation.navigate('Home1')
                // console.log(data)
                // alert(JSON.stringify(data))
              }
              if (data.status === 404) {
                // console.log("Response error", res.error.data.errors)
                Toast.show({
                  type: 'warning',
                  position: 'top',
                  topOffset: 0,
                  text1: "User Does Not Exist"
                  // ...(data.status==false ? {text1: res.error.data.error.name[0]} : ''),
                })
              }
              if (data.status === 401) {
                Toast.show({
                  type: 'warning',
                  position: 'top',
                  topOffset: 0,
                  text1: "invalid password"
                  // ...(data.status==false ? {text1: res.error.data.error.name[0]} : ''),
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
  console.log('Response Data1', user)

  return (
    <>

      <SafeAreaView>
        <Toast config={toastConfig} />
        <ScrollView keyboardShouldPersistTaps='handled'>
          {/* {
            !isLogin ? */}
              <View style={{ marginHorizontal: 30 }}>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={require('../../../image/hum.png')} style={{
                    resizeMode: 'contain', width: '60%',
                    height: undefined,
                    aspectRatio: 1,
                  }} />
                </View>

                <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                  <Text style={styles.labelText}>Number</Text>
                  <TextInput style={styles.input} value={username} onChangeText={setNumber} placeholder="Enter Your Phone Number" keyboardType='phone-pad' />
                </View>

                <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                  <Text style={styles.labelText}>Password</Text>
                  <View>
                    <TextInput style={styles.input} secureTextEntry={viewPassword ? false : true} value={password} onChangeText={setPassword} placeholder="Write Your Password" />
                    {password ? <Icons name={viewPassword ? 'eye-off' : 'eye'} style={{ fontSize: 26 ,position:'absolute',top:8.5,marginLeft:260}} onPress={handleViewPassword} /> : <></>}
                  </View>
                </View>

                <View style={{ width: 200, alignSelf: 'center', margin: 20 }}>
                  <Button title="Login" onPress={handleFormSubmit} color="orange"></Button>

                </View>

                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('SendOTPNumber') }} >
                      <Text style={{ fontWeight: "bold" }}>Forgot Password ?</Text>
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Registration') }}>
                      <Text style={{ fontWeight: "bold" }}>New User? Registration</Text>
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </View> 
              {/* :
              <View> */}
                {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={require('../../../image/hum.png')} style={{
                    resizeMode: 'contain', width: '60%',
                    height: undefined,
                    aspectRatio: 1,
                  }} />

                  <View style={{ width: 300, alignSelf: 'center', margin: 14 }}>
                    <Text style={{ fontSize: 22, marginLeft: 8 }}>Welcome <Text style={{ fontWeight: 'bold', borderBottomWidth: 5, borderBottomColor: 'red' }}>{user?.user_data?.first_name} {user?.user_data?.last_name}</Text></Text>
                    <Text style={{ fontSize: 16, width: '100%', marginLeft: 8 }}>Your HumHai id is <Text style={{ fontWeight: 'bold' }}>{user?.user_data?.hh_id}</Text></Text>
                  </View>
                  <View>
                    <Text style={{ fontWeight: '800' }}>To complete your profile click the below link
                    </Text>
                  </View>

                  <View>
                    <Text style={{ color: 'blue', fontSize: 20 }}
                      onPress={() => Linking.openURL('Https://humhai.in')}>
                      Click Here
                    </Text> */}

                  {/* </View> */}
                {/* </View> */}
                {/* <DashBoard/> */}
                {/* <AppHeader/>
              </View>
          } */}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}


export default LoginUser;