import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// import CheckBox from 'react-native-check-box';
import MCI from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
import DocumentPicker from 'react-native-document-picker';
import MCA from 'react-native-vector-icons/FontAwesome5';





function BackgroudForm4() {
    const navigation = useNavigation()

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [selectedFileUri, setSelectedFileUri] = useState(null);


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

    const handleValueChange = (itemValue) => {
        setSelectedValue(itemValue);
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
            <View style={styles.containe}>

                <View style={styles.container}>
                    <Text style={{ fontSize: 30, marginTop: 30 }}>Background Verification</Text>
                    <View style={styles.containers}>

                        <Text style={{ fontSize: 30, marginTop: 30, fontWeight: 'Bold', textAlign: 'center' }}>CANDIDATE

                            <Text style={{ color: 'orange', }}> PREVIOUS
                                <Text style={{ color: 'orange' }}> EMPLOYEMENT

                                    <Text style={{ fontSize: 29, fontWeight: 'Bold', color: 'black' }} > DETAILS</Text></Text></Text></Text>

                        <View style={styles.containerss}>

                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelText}>Company Name</Text>
                                <TextInput style={styles.input} placeholder="Enter Your Company Name" keyboardType='text-pad' />
                            </View>

                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelText}>Designation</Text>
                                <TextInput style={styles.input} placeholder="Enter Your Designation" keyboardType='text-pad' />
                            </View>


                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelText}>Employee Id</Text>
                                <TextInput style={styles.input} placeholder="Enter Your Employee Id" keyboardType='text-pad' />
                            </View>

                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelText}>HR Number</Text>
                                <TextInput style={styles.input} placeholder="Enter Your HR Number" keyboardType='text-pad' />
                            </View>



                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelText}>HR Email Id</Text>
                                <TextInput style={styles.input} placeholder="Enter Your HR Email Id" keyboardType='text-pad' />
                            </View>

                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelText}>Salary</Text>
                                <TextInput style={styles.input} placeholder="Enter Your Salary" keyboardType='text-pad' />
                            </View>


                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelText}>Reason of leaving</Text>
                                <TextInput style={styles.input} placeholder="Enter Your Reason of leaving" keyboardType='text-pad' />
                            </View>

                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelText}>Supervisor/Manager Name</Text>
                                <TextInput style={styles.input} placeholder="Enter Your Supervisor/Manager Name" keyboardType='text-pad' />
                            </View>

                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelTexts}>From</Text>
                                <TouchableOpacity title='YYYY/MM/DD' onPress={() => showMode('date')} style={[styles.input]}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <MCI name="date-range" size={20} style={{ marginTop: 10, }} />
                                        <Text style={{ marginTop: 10 }}> {text}</Text>
                                    </View>
                                    {show && (<DateTimePicker textID='dateTimePicker' value={date} mode={mode} is24Hour={true} display='default' onChange={onChange} />)}
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelTexts}>To</Text>
                                <TouchableOpacity title='YYYY/MM/DD' onPress={() => showMode('date')} style={[styles.input]}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <MCI name="date-range" size={20} style={{ marginTop: 10, }} />
                                        <Text style={{ marginTop: 10 }}> {text}</Text>
                                    </View>
                                    {show && (<DateTimePicker textID='dateTimePicker' value={date} mode={mode} is24Hour={true} display='default' onChange={onChange} />)}
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelText}>Location</Text>
                                <TextInput style={styles.input} placeholder="Enter Your Location" keyboardType='text-pad' />
                            </View>

                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelText}>Work Responsibility</Text>
                                <TextInput style={styles.input} placeholder="Enter Your Work Responsibility" keyboardType='text-pad' />
                            </View>



                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelTextss}>Offer Letter</Text>
                                <TouchableOpacity onPress={handleSelectFile} style={[styles.input]}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <MCA name="file-upload" size={26} style={{ marginTop: 9 }} />
                                        {selectedFileUri && (
                                            <Text style={[styles.input]}>Selected File: {selectedFileUri}</Text>)}
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelTextss}>Pay Slip</Text>
                                <TouchableOpacity onPress={handleSelectFile} style={[styles.input]}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <MCA name="file-upload" size={26} style={{ marginTop: 9 }} />
                                        {selectedFileUri && (
                                            <Text style={[styles.input]}>Selected File: {selectedFileUri}</Text>)}
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.inputWithLabel, { marginHorizontal: 10 }]}>
                                <Text style={styles.labelTextss}>Resignation Letter</Text>
                                <TouchableOpacity onPress={handleSelectFile} style={[styles.input]}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <MCA name="file-upload" size={26} style={{ marginTop: 9 }} />
                                        {selectedFileUri && (
                                            <Text style={[styles.input]}>Selected File: {selectedFileUri}</Text>)}
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ marginRight: 20 }}>
                                <TouchableOpacity style={styles.buttonss}>
                                    <Text style={[styles.testss]} onPress={() => navigation.navigate('BackgroundForm3')}>Previous</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginLeft: 40 }}>
                                <TouchableOpacity style={styles.buttons}>
                                    <Text style={[styles.tests]} onPress={() => navigation.navigate('BackgroundForm5')}>Next</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>

            </View >
            {/* </View> */}
        </ScrollView >
    );
}
const styles = StyleSheet.create({
    containe: {
        height: height * 2.35,
        backgroundColor: '#F1F1F1',
    },
    container: {
        width: width * 0.95,
        // height: height * 2.12,
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
        // height: height * 1.520,
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
    },
    label: {
        margin: 8,
    },

    labelTextss: {
        marginBottom: 5,
        marginRight: 15,
        fontSize: 16,
    },
    buttonss: {
        width: width * 0.35,
        height: height * 0.059,
        backgroundColor: '#BBBBBB',
        borderColor: '#BBBBBB',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 2,

        alignItems: 'center',
        justifyContent: 'center',
    },
    testss: {
        fontSize: 18,
        color: 'white',

    },

})

export default BackgroudForm4;