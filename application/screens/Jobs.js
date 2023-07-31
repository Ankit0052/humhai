import React from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import MCA from 'react-native-vector-icons/FontAwesome5';
import MCI from 'react-native-vector-icons/Ionicons'
import MCB from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from '././screens/Footer';
const { width, height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';





export default function Jobs() {
    return (
        <ScrollView >
            <View style={{ margin: 15 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Relationship Officer</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bolder', marginTop: 15 }}>Svasti Microfinance Private Limited</Text>

                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                    <MCA name="book-reader" size={20} style={{ marginTop: 1, color: 'black' }} />
                    <Text style={{ fontSize: 16, fontWeight: 'bolder' }}>  Education: 12th or above</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                    <MCA name="business-time" size={20} style={{ marginTop: 2, color: 'black' }} />
                    <Text style={{ fontSize: 16, fontWeight: 'bolder' }}> Experience:</Text>
                    <View style={styles.buttons} backgroundColor={'black'}>
                        <TouchableOpacity style={styles.buttons} >
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <MCA name="user-graduate" size={16} style={{ marginTop: 2, color: 'white' }} />
                                <Text style={styles.buttonsText}> Fresher</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                    <MCA name="rupee-sign" size={20} style={{ marginTop: 4, color: 'black' }} />
                    <Text style={{ fontSize: 16 }}>  Salary: 15000 - 17000 (Per Month)</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                    <MCI name="location-sharp" size={20} style={{ marginTop: 2, marginLeft: -5, color: 'black' }} />
                    <Text style={{ fontSize: 16 }}> Location: Maharashtra, Wagle I.E., Thane -400604, India</Text>
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={styles.buttons} backgroundColor={'black'}>
                        <TouchableOpacity style={styles.buttons} >
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <MCB name="timer-sand-complete" size={16} style={{ marginTop: 2, color: 'white' }} />
                                <Text style={styles.buttonsText}> Full Time</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={{ fontSize: 18 }}> 21 views</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ marginBottom: 5, resizeMode: 'contain', width: width * 0.39, height: height * 0.12, padding: 30, }}
                            source={require('../../assets/amosta-logo.png')} />
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <LinearGradient colors={['#ff9900', 'red']} style={styles.buttonss} >
                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity >
                                    <Text style={[styles.tests]}>Apply</Text>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>

                        <LinearGradient colors={['#ff9900', 'red']} style={[styles.buttonss, { marginTop: 20 }]} >
                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity >
                                    <Text style={[styles.tests]}>Contact HR</Text>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <View style={styles.container}>
                        <View style={{ textAlign: 'center', marginTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: 'bolder', textAlign: 'center' }}>Skill Set Required</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <MCA name="caret-right" size={24} style={{ marginLeft: 10, marginTop: 1, color: 'green' }} />
                                <Text style={{ fontSize: 18 }}> Convincing skills</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                                <MCA name="caret-right" size={24} style={{ marginLeft: 10, marginTop: 1, color: 'green' }} />
                                <Text style={{ fontSize: 18 }}> Ability to multi-task</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                                <MCA name="caret-right" size={24} style={{ marginLeft: 10, marginTop: 1, color: 'green' }} />
                                <Text style={{ fontSize: 18 }}> Team management</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                                <MCA name="caret-right" size={24} style={{ marginLeft: 10, marginTop: 1, color: 'green' }} />
                                <Text style={{ fontSize: 18 }}> Good Communications Skills</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.horizontalRule} />

                <View>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginRight: 10 }}>Job Description</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 20, marginRight: 10 }}>Relationship Officer (Field Sales) NBFC / MFI industry</Text>
                    <Text style={{ fontSize: 14, marginTop: 10 }}>Location: Wagle Estate</Text>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>Other locations: Malad, Mankhurd, Chembur, GTB Nagar, Kalwa, Dombivali, Titwala, Ulhasnagar, Badlapur</Text>
                    <Text style={{ fontSize: 14, marginTop: 20 }}>It is microfinance company helping to people to fulfill their financial need and providing MSME Loans  1-20 Lakhs.</Text>

                    <Text style={{ fontSize: 14, marginTop: 20 }}>We will be having drive for Relationship Officer on 27th June</Text>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>Education: 10th / 12th passout</Text>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>Exp : Fresher or 1+ years experience</Text>

                    <Text style={{ fontSize: 14, marginTop: 20 }}>Candidate should be willing to do Field Sales Job</Text>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>Candidatw should have Bike with valid license copy.</Text>

                    <Text style={{ fontSize: 14, marginTop: 20 }}>Salary: </Text>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>15000 + petrol allowance + Incentive for 12th passout</Text>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>17000 + petrol allowance + Incentive for Graduate</Text>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>Relivant experienced candidates can negotiate on salary part.</Text>

                    <Text style={{ fontSize: 14, marginTop: 20 }}>Time : 3pm to 4pm ( No entry after that )</Text>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>Please do carry resume + any govt authorised address proof.</Text>

                    <Text style={{ fontSize: 14, marginTop: 20 }}>Contact person: Om</Text>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>Whatsap/Call : 85959 44409</Text>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>Direct whatsap message link: https://wa.me/918595944409</Text>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>Interested candidate's may drop their CV on whatsapp directly.</Text>

                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.horizontalRules} />
                    </View>

                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginRight: 10 }}>Job Posted By</Text>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <MCA name="user-tie" size={19} style={{ marginTop: 0, color: 'black' }} />
                            <Text>  Om Pratap</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                            <MCA name="phone-alt" size={15} style={{ marginTop: 5, color: 'black' }} />
                            <Text>  Contact: 8595944409</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                            <MCB name="email" size={22} style={{ marginTop: 0, color: 'black' }} />
                            <Text> Email-id: ompratap@amosta.com</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>

                            <LinearGradient colors={['#ff9900', 'red']} style={styles.buttonss} >
                                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity >
                                        <Text style={[styles.tests]}>Apply Now</Text>
                                    </TouchableOpacity>
                                </View>
                            </LinearGradient>


                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={styles.buttonsss}>
                                    <Text style={[styles.tests]}>Save Job</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View style={styles.horizontalRule} />


                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginRight: 10 }}>About the Company</Text>
                    <Text style={{ fontSize: 14, marginTop: 20 }}>Svasti believes that the Right to Finance is a fundamental right of all human beings, including ones who do not have collateral to support their bid for finance.</Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <MCI name="location-sharp" size={26} style={{ marginTop: 15, color: 'black' }} />
                        <Text style={{ fontSize: 14, marginTop: 20 }}>  Location:</Text>
                    </View>

                    <Text style={{ fontSize: 14, marginTop: 5 }}>Wagle I.E., Thane, Maharashtra-400604, India</Text>
                </View>
            </View>

            <View style={{ margin: 5 }}>
                <Footer />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        height: height * 0.35,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5, // Required for Android shadow
        marginTop: 20
    },
    buttons: {
        width: width * 0.30,
        height: height * 0.042,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,

    },
    buttonsText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonss: {
        width: width * 0.35,
        height: height * 0.059,
        // backgroundColor: 'orange',
        borderColor: '#F2F2F2',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    buttonsss: {
        width: width * 0.35,
        height: height * 0.059,
        backgroundColor: '#212121',
        borderColor: '#212121',
        borderWidth: 1,
        paddingHorizontal: 10,
        shadowColor: 'transparent',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    tests: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',

    },
    horizontalRule: {
        width: width * 1.2,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginTop: 25,

    },
    horizontalRules: {
        width: width * 0.75,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginTop: 25,

    },

});