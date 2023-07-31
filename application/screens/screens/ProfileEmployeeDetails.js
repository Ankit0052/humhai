import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Dimensions, ScrollView, StyleSheet, Button, } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Picker } from '@react-native-picker/picker';



const ProfileEmployeeDetails = () => {
    const [formFields, setFormFields] = useState([]);
    const [selectedFileUri, setSelectedFileUri] = useState(null);
    const [selectedValue, setSelectedValue] = useState('');

    const handleValueChange = (itemValue) => {
        setSelectedValue(itemValue);
    };


    const handleInputChange = (value, index) => {
        const updatedFields = [...formFields];
        updatedFields[index] = value;
        setFormFields(updatedFields);
    };

    const handleAddField = () => {
        setFormFields([...formFields, '1']);
    };

    const handleRemoveField = (index) => {
        const updatedFields = [...formFields];
        updatedFields.splice(index, 1);
        setFormFields(updatedFields);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };




    return (
        <ScrollView>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bolder' }}>Educational details</Text>
            </View>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 16 }}>No educational data added yet</Text>
            </View>

            <View >
                {formFields.map((value, index) => (
                    <View key={index} style={styles.container}>

                        <TextInput style={[styles.textInput]}
                            placeholder='Board/University Name' />

                        <TextInput style={[styles.textInput]}
                            placeholder='School/Collage Name' />

                        <View style={styles.containers}>
                            <Picker selectedValue={selectedValue} onValueChange={handleValueChange} style={styles.picker}>
                                <Picker.Item label="Select your qualification" />
                                <Picker.Item label="10th" value="10th" />
                                <Picker.Item label="12th" value="12th" />
                                <Picker.Item label="Graduation/UG" value="Graduation/UG" />
                                <Picker.Item label="Post Graduation/PG" value="Post Graduation/PG" />
                            </Picker>
                        </View>

                        <TextInput style={[styles.textInput]}
                            placeholder='Branch/Major field of study' />

                        <Text style={{ fontSize: 16, margin: 5 }}>Currently studing here.</Text>

                        <TextInput style={[styles.textInput]}
                            placeholder='Year of addmission' />

                        <TextInput style={[styles.textInput]}
                            placeholder='Year of passing' />

                        <TextInput style={[styles.textInput]}
                            placeholder='Grade' />

                        <View style={styles.containers}>
                            <Picker selectedValue={selectedValue} onValueChange={handleValueChange} style={styles.picker}>
                                <Picker.Item label="Percentage" />
                                <Picker.Item label="GPA" value="GPA" />
                                <Picker.Item label="Grade" value="Grade" />
                            </Picker>
                        </View>

                        <TextInput style={[styles.textInput]}
                            placeholder='City,State & Country' />


                        <TouchableOpacity onPress={() => handleRemoveField(index)} style={styles.buttons}>
                            <Text style={[styles.tests]}>- Remove</Text>
                        </TouchableOpacity>
                    </View>
                ))}

                <View style={{ margin: 10 }}>
                    <TouchableOpacity onPress={handleAddField} style={styles.button}>
                        <Text style={styles.test}>+ ADD Educational Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        width: width * 0.95,
        height: height * 0.89,
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
        width: width * 0.65,
        height: height * 0.06,
        backgroundColor: 'white',
        borderColor: '#1e272e',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 7,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    tests: {
        fontSize: 18,
        color: 'red',
    },
    containers: {
        height: height * 0.061,
        width: width * 0.9,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        // paddingHorizontal: 10,
        // paddingVertical: 5,
        margin: 10,


    },
    picker: {
        marginTop: -2
    },

})


export default ProfileEmployeeDetails;





