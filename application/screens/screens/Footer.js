import react from "react";
import { View, Image, ScrollView, Dimensions, Text, StyleSheet, Linking } from "react-native";
const { width, height } = Dimensions.get('window');
import MCI from 'react-native-vector-icons/Entypo';
import MCA from 'react-native-vector-icons/Foundation';
import MCB from 'react-native-vector-icons/MaterialCommunityIcons';
import MCC from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';


export default function () {
    const navigation = useNavigation()

    const handleLinksPress = () => {
        Linking.openURL('https://humhai.in/talent-hunt/login');
    }
    const handleLinkssPress = () => {
        Linking.openURL('https://www.amosta.com/');
    };
    const handleLinksssPress = () => {
        Linking.openURL('https://www.facebook.com/humhai.in');
    };
    const handleLinkssssPress = () => {
        Linking.openURL('https://twitter.com/i/flow/login?redirect_after_login=%2FHum__Hai');
    };
    const handleLinksssssPress = () => {
        Linking.openURL('https://www.youtube.com/channel/UCm8070ECsCvTsMflF8sSR5A');
    };
    const handleLinkssssssPress = () => {
        Linking.openURL('https://www.linkedin.com/feed/?trk=seo-authwall-base_google-one-tap-submit');
    };
    const handleLinksssssssPress = () => {
        Linking.openURL('https://www.instagram.com/humhai.in/');
    };
    const handleLinkssssssssPress = () => {
        Linking.openURL('mailto: enquiry@humhai.in');
    };
    const handleLinksssssssssPress = () => {
        Linking.openURL('tel:+91-87500 60033');
    };


    return (
        <ScrollView style={{ backgroundColor: '#E2E4E2' }}>
            <View style={{ margin: 10 }}>
                <Image style={{ margin: 5, borderRadius: 100, resizeMode: 'contain', width: width * 0.35, height: height * 0.1, padding: 30 }}
                    source={require('../../../image/hum.png')} />
                <View style={{ display: 'flex', flexDirection: 'row', margin: 10, fontWight: 'bolder' }}>
                    <MCI name={"location-pin"} size={26} />
                    <Text style={{ fontSize: 16 }}>301-B, Flatkhted Factory Complex Hartron
                        Technology Park Plot No. 25A, Electronic City
                        Sector 18, Gurugram, Haryana 122015</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', margin: 10, fontWeight: 'bolder' }}>
                    <MCA name={"telephone"} size={26} />
                    <Text style={{ fontSize: 16 }} onPress={handleLinksssssssssPress}>  +91-87500 60033</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', margin: 10, fontWeight: 'bolder' }}>
                    <MCA name={"mail"} size={26} />
                    <Text style={{ fontSize: 16 }} onPress={handleLinkssssssssPress}>   enquiry@humhai.in</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Quick Links</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }} onPress={() => navigation.navigate('DashBoard')}>Jobs</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }} >Internships</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }} >Hum Hai Seva Kendra</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }} onPress={() => navigation.navigate('BackgroundForm')}>background-verification</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }} onPress={handleLinksPress}>talent hunt</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }} onPress={() => navigation.navigate('PrivacyPolicy')}>Privacy Policy</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Subscribe to our newsletter!</Text>
                    <View style={{ margin: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <MCB name={"facebook"} size={40} style={{ margin: 5 }} onPress={handleLinksssPress} />
                        <MCB name={"twitter"} size={40} style={{ margin: 5 }} onPress={handleLinkssssPress} />
                        <MCB name={"youtube"} size={40} style={{ margin: 5 }} onPress={handleLinksssssPress} />
                        <MCC name={"linkedin-square"} size={40} style={{ margin: 5 }} onPress={handleLinkssssssPress} />
                        <MCB name={"instagram"} size={40} style={{ margin: 5 }} onPress={handleLinksssssssPress} />
                    </View>
                    <View style={styles.horizontalRule} />
                    <View style={{ display: 'flex', flexDirection: 'row', margin: 10, fontWeight: 'bolder' }}>

                        <MCB name={"copyright"} size={20} style={{ margin: 1 }} />
                        <Text>All Rights Reserved with
                            <Text style={{ color: '#0D6EFD' }} onPress={handleLinkssPress}> Hum Hai</Text> | Designed &
                            Developed by
                            <Text style={{ color: '#0D6EFD' }} onPress={() => navigation.navigate('Home')}> Amosta Solutions Private Limited</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    horizontalRule: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 20,
        width: width * 0.95
    },

})