import { Text, View, Image, TextInput, Button, ScrollView, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { styles, toastConfig } from '../../../style';
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from 'react-native-toast-message'
import { Linking } from 'react-native';

const UserPanelTab = () => {
    return (
        <SafeAreaView>
            <Toast config={toastConfig} />
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={{ marginHorizontal: 30 }}>

                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../../image/hum.png')} style={{
                            resizeMode: 'contain', width: '60%',
                            height: undefined,
                            aspectRatio: 1,
                        }} />

                        <View>
                            <Text>Thank you for Register </Text>
                        </View>

                        <View>
                            <Text>To complete your profile click the below link
                            </Text>
                        </View>

                        <View>
                            <Text style={{ color: 'blue' }}
                                // onPress={() => Linking.openURL('Https://humhai.in')}>
                                onPress={() => navigation.navigate('Home1')}>
                                Click Here
                            </Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default UserPanelTab