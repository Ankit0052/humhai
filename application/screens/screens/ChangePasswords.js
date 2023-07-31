import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, Dimensions, Button } from "react-native";
const { width, height } = Dimensions.get('window')
import Icons from "react-native-vector-icons/MaterialCommunityIcons";


export default function ChangePasswords() {
    const [viewPassword, setViewPassword] = useState(false)
    const [password, setPassword] = useState('')


    const handleViewPassword = () => {
        setViewPassword(!viewPassword)
    }




    return (
        <ScrollView>
            <View style={{ margin: 5 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bolder' }}>Change password</Text>
                <View style={{ margin: 10 }}>

                    <Text >Current Password</Text>
                    <View>
                        <TextInput style={[styles.textInput,]}
                            placeholder='Current Password' secureTextEntry={viewPassword ? false : true} value={password} onChangeText={setPassword} />
                        {password ? <Icons name={viewPassword ? 'eye-off' : 'eye'} style={{ fontSize: 26, position: 'absolute', top: 20, marginLeft: 320 }} onPress={handleViewPassword} /> : <></>}
                    </View>


                    <Text >New Paasword</Text>
                    <View>
                        <TextInput style={[styles.textInput,]}
                            placeholder='New Paasword' secureTextEntry={viewPassword ? false : true} />
                        {password ? <Icons name={viewPassword ? 'eye-off' : 'eye'} style={{ fontSize: 26, position: 'absolute', top: 20, marginLeft: 320 }} onPress={handleViewPassword} /> : <></>}
                    </View>


                    <Text >Confirm New Paasword</Text>
                    <View>
                        <TextInput style={[styles.textInput,]}
                            placeholder='Confirm New Paasword' secureTextEntry={viewPassword ? false : true} />
                        {password ? <Icons name={viewPassword ? 'eye-off' : 'eye'} style={{ fontSize: 26, position: 'absolute', top: 20, marginLeft: 320 }} onPress={handleViewPassword} /> : <></>}

                    </View>
                </View>

                <View style={{ width: width * 0.7, margin: 10, borderRadius: 10 }}>
                    <Button title="CHANGE PASSWORD" color="#198754"></Button>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // margin: 5,
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 20,
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

});