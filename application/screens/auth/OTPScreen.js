import React, {useState} from 'react';
import {SafeAreaView, Text, View,StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';
import {CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell,} from 'react-native-confirmation-code-field';
import { useNavigation } from "@react-navigation/native";

const CELL_COUNT = 6;

const OTPScreen = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation();
  const [register, setRegister] = useState('verify_otp');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
    setRegister,
  });
  const PostRequest = async (otp) => {

    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // work verify_otp otp otp
      body: JSON.stringify({ verify_otp: otp, work: register })
    };
    try {
      await fetch(
        'https://humhai.in/register-app/', requestOptions)
        .then(response => {
          response.json()
          .then(data => {
              console.log(data, "data")
              if (data.status == 200) {
                navigation.navigate('ReferralCode')
              }
              if (data.status === 400) {
                Toast.show({
                  type: 'warning',
                  position: 'top',
                  topOffset: 0,
                  text1: "Incorrect OTP"
                })
              }
            });
        })
    }
    catch (error) {
      console.error(error);
    }
  }
  const onchangedHandle = (e)=>{
    console.log(value,"abc");
    if(value.length==6){
        // console.log("ss");
    PostRequest(value);
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Input your OTP code sent via SMS</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View 
          onPress={onchangedHandle()}
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30,marginTop:30},
  codeFieldRoot: {
    marginTop: 70,
    padding:10,
    width: 350,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
})

export default OTPScreen;