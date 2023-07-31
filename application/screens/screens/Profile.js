import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text, ScrollView, TextInput, Dimensions, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
const { width, height } = Dimensions.get('window');
import MCI from 'react-native-vector-icons/MaterialIcons';
import ProfileEmployeeDetails from './ProfileEmployeeDetails';
import ProfileProfessionalDetails from './ProfileProfessionalDetails';
import UploadImage from '../UploadImage';



const Profile = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setText(fDate)

    console.log(fDate)
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }



  return (
    <ScrollView>
      <View style={styles.container}>
       <View style={{marginTop:30}}>
        <UploadImage/>
       </View>

        <Text style={{ fontSize: 26, fontWeight: 'bolder' }}>Ankit Jha</Text>
        <Text style={{ fontSize: 22 }}>HH29052023A0011</Text>
      </View>
      <View style={{ margin: 5 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bolder',margin:5 }}>Profile</Text>
        <Text style={{ fontSize: 15,margin:5 }}>Completing your profile will help you get a suitable job soon</Text>
        <Text style={{ fontSize: 18,margin:5 }}>Your Are Referred By Om Pratap.-B040</Text>
        <Text style={{ fontSize: 22 }}>Basic details</Text>

        <Text >First Name</Text>
        <TextInput style={[styles.textInput]}
          placeholder='First Name'/>

        <Text >Last Name</Text>
        <TextInput style={[styles.textInput]}
          placeholder='Last Name'/>

        <Text >Email Address</Text>
        <TextInput style={[styles.textInput]}
          placeholder='Email Address' />

        <Text >Mobile Number</Text>
        <TextInput style={[styles.textInput]}
          placeholder='Mobile Number' />


        <View style={{ margin: 5 }}>
          <Text style={{ margin: 5 }}>Date of Birth</Text>
          <TouchableOpacity title='YYYY/MM/DD' onPress={() => showMode('date')} style={[styles.buttonsss]}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <MCI name="date-range" size={20} style={{ marginTop: 10, }} />

              <Text style={{ marginTop: 10 }}> {text}</Text>
            </View>
            {show && (<DateTimePicker textID='dateTimePicker' value={date} mode={mode} is24Hour={true} display='default' onChange={onChange} />)}
          </TouchableOpacity>
        </View>

        <Text >Pin Code</Text>
        <TextInput style={[styles.textInput]}
          placeholder='Pin Code'/>

        <Text >District</Text>
        <TextInput style={[styles.textInput]}
          placeholder='District' />

        <Text >State</Text>
        <TextInput style={[styles.textInput]}
          placeholder='State' />

      </View>
      <ProfileEmployeeDetails />
      <ProfileProfessionalDetails />

      <TouchableOpacity style={styles.buttons}>
        <Text style={[styles.tests]}>SAVE CHANGES</Text>
      </TouchableOpacity>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  textInput: {
    height: height * 0.06,
    width: width * 0.95,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    shadowColor: 'transparent',
    borderRadius: 7,
    margin: 5,
  },

  buttonsss: {
    width: width * 0.95,
    height: height * 0.064,
    backgroundColor: '#f5f6fa',
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 10,
    shadowColor: 'transparent',
    borderRadius: 7,
  },
  buttons: {
    width: width * 0.5,
    height: height * 0.059,
    backgroundColor: '#4285F4',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    shadowColor: 'transparent',
    borderRadius: 7,
    margin: 10,
    alignItems:'center',
    justifyContent:'center',
},
tests: {
    fontSize: 18,
    color: 'white',

},
});

export default Profile;
