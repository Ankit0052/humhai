import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native';
// import CheckBox from 'react-native-check-box';
const { width, height } = Dimensions.get('window');
import MCI from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'expo-checkbox';




function BackgroudForm() {
  const navigation = useNavigation()

  const [autoFillData, setAutoFillData] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

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

  const handleAutoFill = () => {
    // Perform the auto-fill logic here
    const dataToFill = 'Auto-filled Data';
    setAutoFillData(dataToFill);
  };

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue);
  };

  return (

    <ScrollView>
      <View style={styles.containe}>

        <View style={styles.container}>
          <Text style={{ fontSize: 30, marginTop: 30 }}>Background Verification</Text>
          <View style={styles.containers}>

            <Text style={{ fontSize: 30, marginTop: 30, fontWeight: 'Bold', }}>       CANDIDATE

              <Text style={{ color: 'orange' }}> PERSONAL
                <Text style={{ fontSize: 29, fontWeight: 'Bold', color: 'black' }} > DETAILS</Text></Text></Text>

            <View style={styles.containerss}>

              <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                <Text style={styles.labelText}>Name of the Applicants:</Text>
                <TextInput style={styles.input} placeholder="Enter Your Name" keyboardType='text-pad' />
              </View>

              <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                <Text style={styles.labelText}>Fathers/Husband/Wife Name</Text>
                <TextInput style={styles.input} placeholder="Enter Your F/H/W Name" keyboardType='text-pad' />
              </View>

              <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                <Text style={styles.labelText}>Mother's Name</Text>
                <TextInput style={styles.input} placeholder="Enter Your Mother's Name" keyboardType='text-pad' />
              </View>

              <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                <Text style={styles.labelTexts}>Gender</Text>
                <View style={[styles.input]}>
                  <Picker selectedValue={selectedValue} onValueChange={handleValueChange} style={styles.inputs}>
                    <Picker.Item label="Choose" />
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Other" value="Other" />
                  </Picker>
                </View>
              </View>

              <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                <Text style={styles.labelTexts}>Date of Birth</Text>
                <TouchableOpacity title='YYYY/MM/DD' onPress={() => showMode('date')} style={[styles.input]}>
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <MCI name="date-range" size={20} style={{ marginTop: 10, }} />
                    <Text style={{ marginTop: 10 }}> {text}</Text>
                  </View>
                  {show && (<DateTimePicker textID='dateTimePicker' value={date} mode={mode} is24Hour={true} display='default' onChange={onChange} />)}
                </TouchableOpacity>
              </View>

              <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                <Text style={styles.labelText}>Email Id</Text>
                <TextInput style={styles.input} placeholder="Enter Your Email Id" keyboardType='text-pad' />
              </View>

              <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                <Text style={styles.labelText}>Contact Number</Text>
                <TextInput style={styles.input} placeholder="Enter Your Contact Number" keyboardType='phone-pad' />
              </View>

              <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                <Text style={styles.labelText}>Emergency Contact</Text>
                <TextInput style={styles.input} placeholder="Enter Your Emergency Contact" keyboardType='phone-pad' />
              </View>

              <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                <Text style={styles.labelText}>Name of the client</Text>
                <TextInput style={styles.input} placeholder="Enter Your Name of the client" keyboardType='text-pad' />
              </View>

              <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                <Text style={styles.labelText}>Languages Known</Text>
                <TextInput style={styles.input} placeholder="Enter Your Languages Known" keyboardType='text-pad' />
              </View>

              <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                <Text style={styles.labelText}>Blood Group</Text>
                <TextInput style={styles.input} placeholder="Enter Your Blood Group" keyboardType='text-pad' />
              </View>




              <View>
                <Text style={{ fontSize: 30, marginTop: 20 }}>Permanent Address</Text>

                <View style={[styles.inputWithLabel, { marginHorizontal: 10, marginTop: 20 }]}>
                  <Text style={styles.labelText}>House No./Building/Appartment:</Text>
                  <TextInput style={styles.input} placeholder="Enter Your H No./B/A" keyboardType='text-pad' />
                </View>

                <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                  <Text style={styles.labelText}>Area/Locality/Sector</Text>
                  <TextInput style={styles.input} placeholder="Enter Your Area/Locality/Sector" keyboardType='text-pad' />
                </View>

                <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                  <Text style={styles.labelText}>Post Office</Text>
                  <TextInput style={styles.input} placeholder="Enter Your Post Office" keyboardType='text-pad' />
                </View>

                <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                  <Text style={styles.labelText}>Police Station</Text>
                  <TextInput style={styles.input} placeholder="Enter Your Police Stationt" keyboardType='text-pad' />
                </View>

                <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                  <Text style={styles.labelText}>District</Text>
                  <TextInput style={styles.input} placeholder="Enter Your District" keyboardType='text-pad' />
                </View>

                <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                  <Text style={styles.labelText}>Tehsil</Text>
                  <TextInput style={styles.input} placeholder="Enter Your Tehsil" keyboardType='text-pad' />
                </View>

                <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                  <Text style={styles.labelText}>Landmark</Text>
                  <TextInput style={styles.input} placeholder="Enter Your Landmark" keyboardType='text-pad' />
                </View>

                <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                  <Text style={styles.labelText}>Pin Code</Text>
                  <TextInput style={styles.input} placeholder="Enter Your Pin Code" keyboardType='phone-pad' />
                </View>

                <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                  <Text style={styles.labelText}>State</Text>
                  <TextInput style={styles.input} placeholder="Enter Your State" keyboardType='text-pad' />
                </View>


                <View>
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View>
                      <Text style={{ fontSize: 18, marginTop: 20, marginLeft: 15 }}>Same as above?</Text>
                    </View>
                    <View>
                      <CheckBox value={isSelected} onValueChange={setSelection} style={[styles.checkbox, { marginTop: 20, marginLeft: 15 }]} />
                    </View>
                  </View>


                  <Text style={{ fontSize: 30, marginTop: 20 }}>Current Address</Text>

                  <View style={[styles.inputWithLabel, { marginHorizontal: 10, marginTop: 20 }]}>
                    <Text style={styles.labelText}>House No./Building/Appartment:</Text>
                    <TextInput style={styles.input} placeholder="Enter Your H No./B/A" keyboardType='text-pad' />
                  </View>

                  <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                    <Text style={styles.labelText}>Area/Locality/Sector</Text>
                    <TextInput style={styles.input} placeholder="Enter Your Area/Locality/Sector" keyboardType='text-pad' />
                  </View>

                  <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                    <Text style={styles.labelText}>Post Office</Text>
                    <TextInput style={styles.input} placeholder="Enter Your Post Office" keyboardType='text-pad' />
                  </View>

                  <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                    <Text style={styles.labelText}>Police Station</Text>
                    <TextInput style={styles.input} placeholder="Enter Your Police Stationt" keyboardType='text-pad' />
                  </View>

                  <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                    <Text style={styles.labelText}>District</Text>
                    <TextInput style={styles.input} placeholder="Enter Your District" keyboardType='text-pad' />
                  </View>

                  <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                    <Text style={styles.labelText}>Tehsil</Text>
                    <TextInput style={styles.input} placeholder="Enter Your Tehsil" keyboardType='text-pad' />
                  </View>

                  <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                    <Text style={styles.labelText}>Landmark</Text>
                    <TextInput style={styles.input} placeholder="Enter Your Landmark" keyboardType='text-pad' />
                  </View>

                  <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                    <Text style={styles.labelText}>Pin Code</Text>
                    <TextInput style={styles.input} placeholder="Enter Your Pin Code" keyboardType='phone-pad' />
                  </View>

                  <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                    <Text style={styles.labelText}>State</Text>
                    <TextInput style={styles.input} placeholder="Enter Your State" keyboardType='text-pad' />
                  </View>
                </View>

              </View>



            </View>
            <TouchableOpacity style={styles.buttons}>
              <Text style={[styles.tests]} onPress={() => navigation.navigate('BackgroundForm1')}>Next</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </ScrollView >
  );
}
const styles = StyleSheet.create({
  containe: {
    height: height * 4.2,
    backgroundColor: '#F1F1F1',
  },
  container: {
    width: width * 0.95,
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 120,
    alignItems: 'center',
    marginLeft: 10
  },
  containers: {
    width: width * 0.85,
    height: height * 1,
    backgroundColor: '#F1F1F1',
    borderRadius: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 40,
    alignItems: 'center',
  },
  containerss: {
    width: width * 0.85,
    // height: height * 3.115,
    backgroundColor: '#F8F9FA',
    borderRadius: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginTop: 50,
    elevation: 5,
    alignItems: 'center',
  },
  labelText: {
    marginBottom: 5,
    marginLeft: 10,
    fontSize: 16,
  },
  input: {
    width: width * 0.8,
    height: height * 0.05,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
  },
  inputWithLabel: {
    marginBottom: 10,
    marginTop: 5,
  },
  labelTexts: {
    marginBottom: 5,
    marginRight: 195,
    fontSize: 16,
  },
  inputs: {
    marginTop: -7

  },
  buttons: {
    width: width * 0.35,
    height: height * 0.059,
    backgroundColor: 'orange',
    borderColor: 'orange',
    borderWidth: 1,
    paddingHorizontal: 10,
    shadowColor: 'transparent',
    borderRadius: 2,
    marginLeft: 195,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tests: {
    fontSize: 18,
    color: 'white',

  },

  containersss: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  checkboxContainersss: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    height: 32,
    width: 32,

  },
  label: {
    margin: 8,
  },

})

export default BackgroudForm;