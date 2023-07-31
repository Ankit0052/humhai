import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Dimensions, ScrollView, StyleSheet, Button } from 'react-native';
const { width, height } = Dimensions.get('window');
import DocumentPicker from 'react-native-document-picker';
import MCI from 'react-native-vector-icons/FontAwesome5';



const MyDocuments = () => {
    const [formFields, setFormFields] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [selectedFileUri, setSelectedFileUri] = useState(null);


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


    const handleSelectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });

            setSelectedFileUri(res.uri);
        } catch (error) {
            if (DocumentPicker.isCancel(error)) {
                // User cancelled the file selection
                console.log('File selection cancelled');
            } else {
                // Error occurred while selecting the file
                console.log('Error selecting file:', error);
            }
        }
    };


    return (
        <ScrollView>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Documents</Text>
            </View>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 16 }}>No documents yet!!</Text>
            </View>

            <View>
                {formFields.map((value, index) => (
                    <View key={index} style={{ margin: 7 }}>

                        <Text >Select Document Type</Text>
                        <TextInput style={[styles.textInput, isFocused && styles.focusedTextInput, isFocused && styles.focusedTextInputShadow,]}
                            placeholder='Enter Document Name' onFocus={handleFocus} onBlur={handleBlur} />


                        <Text >Upload Document</Text>
                        <TouchableOpacity onPress={handleSelectFile} style={[styles.buttonsss]}>
                            <View style={{display:'flex',flexDirection:'row'}}>
                                <MCI name="file-upload" size={26} style={{ marginTop: 9 }} />
                                {selectedFileUri && (
                                    <Text style={[styles.testsss]}>Selected File: {selectedFileUri}</Text>)}
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => handleRemoveField(index)} style={styles.buttons}>
                            <Text style={[styles.tests]}>- Remove</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleRemoveField(index)} style={styles.buttonss}>
                            <Text style={[styles.testss]}>SAVE CHANGES</Text>
                        </TouchableOpacity>
                    </View>
                ))}

                <View style={{ margin: 10 }}>
                    <TouchableOpacity onPress={handleAddField} style={styles.button}>
                        <Text style={styles.test}>+ ADD DOCUMENTS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({

    textInput: {
        height: height * 0.06,
        width: width * 0.92,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 7,
        margin: 10,
    },
    focusedTextInput: {
        borderColor: 'blue',
    },
    focusedTextInputShadow: {
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        margin: 10,
    },
    button: {
        width: width * 0.54,
        height: height * 0.06,
        backgroundColor: 'white',
        borderColor: '#1e272e',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 7,
        margin: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    test: {
        fontSize: 18,
        color: '#1e272e',
        justifyContent: 'center',
        alignItems: 'center',

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
    buttonss: {
        width: width * 0.48,
        height: height * 0.06,
        backgroundColor: '#0D6EFD',
        borderColor: '#1e272e',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 7,
        margin: 10,
        alignItems:'center',
        justifyContent:'center',
    },
    testss: {
        fontSize: 20,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsss: {
        width: width * 0.92,
        height: height * 0.0642,
        backgroundColor: '#f5f6fa',
        borderColor: 'grey',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 7,
        margin: 10,
        
    },
    testsss: {
        fontSize: 14,
        color: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 11,
    },

})


export default MyDocuments;





