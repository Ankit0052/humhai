import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Dimensions, ScrollView, StyleSheet, Button, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
const { width, height } = Dimensions.get('window');
import MCI from 'react-native-vector-icons/MaterialIcons';



const ProfileProfessionalDetails = () => {
    const [formFields, setFormFields] = useState([]);

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

    const handleAddField = () => {
        setFormFields([...formFields, '1']);
    };

    const handleRemoveField = (index) => {
        const updatedFields = [...formFields];
        updatedFields.splice(index, 1);
        setFormFields(updatedFields);
    };

  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    }
  
  

    return (
        <ScrollView>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bolder' }}>Professional details</Text>
            </View>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 16 }}>No professional data added yet.</Text>
            </View>

            <View >
                {formFields.map((value, index) => (
                    <View key={index} style={styles.container}>

                        <TextInput style={[styles.textInput]}
                            placeholder='Organisation Name'/>

                        <TextInput style={[styles.textInput]}
                            placeholder='Designation'/>

                        <Text style={{ fontSize: 16, margin: 5 }}>Currently working here.</Text>

                        <View style={{ margin: 10 }}>
                            <Text style={{ margin: 5 }}>Date of Joining</Text>
                            <TouchableOpacity title='YYYY/MM/DD' onPress={() => showMode('date')} style={[styles.buttonsss]}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <MCI name="date-range" size={20} style={{ marginTop: 10, }} />

                                    <Text style={{ marginTop: 10 }}> {text}</Text>
                                </View>
                                {show && (<DateTimePicker textID='dateTimePicker' value={date} mode={mode} is24Hour={true} display='default' onChange={onChange} />)}
                            </TouchableOpacity>
                        </View>

                        <View style={{ margin: 10 }}>
                            <Text style={{ margin: 5 }}>Date of leaving</Text>
                            <TouchableOpacity title='YYYY/MM/DD' onPress={() => showMode('date')} style={[styles.buttonsss]}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <MCI name="date-range" size={20} style={{ marginTop: 10, }} />

                                    <Text style={{ marginTop: 10 }}> {text}</Text>
                                </View>
                                {show && (<DateTimePicker textID='dateTimePicker' value={date} mode={mode} is24Hour={true} display='default' onChange={onChange} />)}
                            </TouchableOpacity>
                        </View>

                        <TextInput style={[styles.textInput]}
                            placeholder='City,State & Country'/>


                        <TouchableOpacity onPress={() => handleRemoveField(index)} style={styles.buttons}>
                            <Text style={[styles.tests]}>- Remove</Text>
                        </TouchableOpacity>
                    </View>
                ))}

                <View style={{ margin: 10 }}>
                    <TouchableOpacity onPress={handleAddField} style={styles.button}>
                        <Text style={styles.test}>+ ADD Professional Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        width: width * 0.95,
        height: height * 0.63,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5, // Required for Android shadow
        margin: 10,

    },
    labelText: {
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },

    textInput: {
        height: height * 0.06,
        width: width * 0.9,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 7,
        margin: 10,
    },
    textInput1: {
        height: height * 0.06,
        width: width * 0.92,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 7,
        margin: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        margin: 10,
    },
    button: {
        width: width * 0.68,
        height: height * 0.065,
        backgroundColor: 'white',
        borderColor: '#1e272e',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 7,
        margin: 10,
        alignItems:'center',
        justifyContent:'center',
    },
    test: {
        fontSize: 18,
        color: '#1e272e',
 
    },
    buttons: {
        width: width * 0.28,
        height: height * 0.05,
        backgroundColor: 'white',
        borderColor: 'red',
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
        color: 'red',

    },
    containers: {
        height: height * 0.065,
        width: width * 0.9,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        // paddingHorizontal: 10,
        // paddingVertical: 5,
        margin: 10

    },
    picker: {
        marginTop: -5
    },
    buttonsss: {
        width: width * 0.9,
        height: height * 0.064,
        backgroundColor: '#f5f6fa',
        borderColor: 'grey',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 7,
      },

})


export default ProfileProfessionalDetails;





