import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, ScrollView, Linking } from 'react-native';
import MA from 'react-native-vector-icons/Entypo';
import Footer from './Footer';
const { width, height } = Dimensions.get('window');

function PrivacyPolicy() {
    const handleLinkPress = () => {
        // Open the URL in the device's default browser
        Linking.openURL('https://humhai.in/contact-us');
    };

    const handleLinksPress = () => {
        // Open the URL in the device's default browser
        Linking.openURL('https://www.privacypolicies.com/privacy-policy-generator/');
    };

    return (
        <ScrollView style={{ margin: 8 }}>
            <Text style={styles.test1}>Privacy Policy</Text>

            <Text style={styles.test2}>Last updated: November 26, 2022</Text>

            <Text style={styles.test2}>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</Text>

            <Text style={styles.test2}>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the

                <Text style={{ color: '#0D6FED' }} onPress={handleLinksPress}> Privacy Policy Generator.</Text></Text>

            <Text style={styles.test3}>Interpretation and Definitions</Text>

            <Text style={styles.test4}>Interpretation</Text>

            <Text style={styles.test2}>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</Text>

            <Text style={styles.test3}>Definitions</Text>

            <Text style={styles.test2}>For the purposes of this Privacy Policy:</Text>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• Account</Text>
                    <Text style={styles.test5}> means a unique account created for</Text>
                </View>
                <Text style={styles.test7}>You to access our Service or parts of our Service.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• Affiliate</Text>
                    <Text style={styles.test5}> means an entity that controls, is</Text>
                </View>
                <Text style={styles.test7}>party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• Application</Text>
                    <Text style={styles.test5}> means the software program</Text>
                </View>
                <Text style={styles.test7}>provided by the Company downloaded by You on any electronic device, named Humhai</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• Company</Text>
                    <Text style={styles.test5}> (referred to as either "the</Text>
                </View>
                <Text style={styles.test7}>Company", "We", "Us" or "Our" in this Agreement) refers to Amosta Solutions pvt ltd, Sector 18, Gurugram.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={styles.listItem}>• Country</Text>
                <Text style={styles.test5}> refers to: Haryana, India</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• Device</Text>
                    <Text style={styles.test5}> means any device that can access the</Text>
                </View>
                <Text style={styles.test7}>Service such as a computer, a cellphone or a digital tablet.</Text>

            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• Personal Data</Text>
                    <Text style={styles.test5}> is any information that relates</Text>
                </View>
                <Text style={styles.test7}>to an identified or identifiable individual.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={styles.listItem}>• Service</Text>
                <Text style={styles.test5}> refers to the Application.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• Service Provider</Text>
                    <Text style={styles.test5}> means any natural or legal</Text>
                </View>
                <Text style={styles.test7}>person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to
                    facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• Usage Data</Text>
                    <Text style={styles.test5}> refers to data collected</Text>
                </View>
                <Text style={styles.test7}>automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• You</Text>
                    <Text style={styles.test5}> means the individual accessing or using</Text>
                </View>
                <Text style={styles.test7}>the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</Text>
            </View>

            <Text style={{ fontSize: 28, fontWeight: 'bolder', marginTop: 15 }}>Collecting and Using Your Personal Data</Text>

            <Text style={{ fontSize: 26, fontWeight: 'bolder', marginTop: 10 }}>Types of Data Collected</Text>

            <Text style={{ fontSize: 26, fontWeight: 'bolder', marginTop: 5 }}>Personal Data</Text>

            <Text style={styles.test2}>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</Text>

            <View>
                <Text style={styles.listItem1}>• Email address</Text>
                <Text style={styles.listItem1}>• First name and last name</Text>
                <Text style={styles.listItem1}>• Phone number</Text>
                <Text style={styles.listItem1}>• Usage Data</Text>
            </View>

            <Text style={{ fontSize: 26, fontWeight: 'bolder', marginTop: 15 }}>Usage Data</Text>
            <Text style={styles.test2}>Usage Data is collected automatically when using the Service.</Text>
            <Text style={styles.test2}>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</Text>
            <Text style={styles.test2}>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</Text>
            <Text style={styles.test2}>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</Text>

            <Text style={{ fontSize: 26, fontWeight: 'bolder', marginTop: 15 }}>Use of Your Personal Data</Text>
            <Text style={styles.test2}>The Company may use Personal Data for the following purposes:</Text>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Text style={styles.listItem}>• To provide and maintain our Service</Text>
                <Text style={{ fontSize: 15 }}> including to monitor the usage of our Service.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• To manage Your Account:</Text>
                    <Text style={styles.test5}> to manage Your</Text>
                </View>
                <Text style={styles.test7}>registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• For the performance of a contract:</Text>
                    <Text style={styles.test5}> the</Text>
                </View>
                <Text style={styles.test7}>regdevelopment, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• To contact You:</Text>
                    <Text style={styles.test5}> To contact You by email,</Text>
                </View>
                <Text style={styles.test7}>telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• To provide You</Text>
                    <Text style={styles.test5}> with news, special offers</Text>
                </View>
                <Text style={styles.test7}>and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• To manage Your requests:</Text>
                    <Text style={styles.test5}> To attend and</Text>
                </View>
                <Text style={styles.test7}>manage Your requests to Us.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• For business transfers:</Text>
                    <Text style={styles.test5}> We may use Your</Text>
                </View>
                <Text style={styles.test7}>information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• For other purposes:</Text>
                    <Text style={styles.test5}> We may use Your</Text>
                </View>
                <Text style={styles.test7}>information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</Text>
            </View>

            <Text style={{ fontSize: 16, fontWeight: 'bolder', margin: 15 }}>We may share Your personal information in the following situations:</Text>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• With Service Providers:</Text>
                    <Text style={styles.test5}> We may share Your</Text>
                </View>
                <Text style={styles.test7}>personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• For business transfers:</Text>
                    <Text style={styles.test5}> We may share or</Text>
                </View>
                <Text style={styles.test7}>transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• With Affiliates:</Text>
                    <Text style={styles.test5}> We may share Your</Text>
                </View>
                <Text style={styles.test7}>information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• With business partners:</Text>
                    <Text style={styles.test5}> We may share</Text>
                </View>
                <Text style={styles.test7}>Your information with Our business partners to offer You certain products, services or promotions.</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• With other users:</Text>
                    <Text style={styles.test5}> when You share personal</Text>
                </View>
                <Text style={styles.test7}>information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.listItem}>• With Your consent:</Text>
                    <Text style={styles.test5}> We may disclose Your</Text>
                </View>
                <Text style={styles.test7}>personal information for any other purpose with Your consent.</Text>
            </View>

            <Text style={{ fontSize: 26, fontWeight: 'bolder', marginTop: 15 }}>Retention of Your Personal Data</Text>
            <Text style={styles.test2}>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</Text>
            <Text style={styles.test2}>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</Text>

            <Text style={{ fontSize: 26, fontWeight: 'bolder', marginTop: 15 }}>Transfer of Your Personal Data</Text>
            <Text style={styles.test2}>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</Text>
            <Text style={styles.test2}>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</Text>
            <Text style={styles.test2}>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</Text>

            <Text style={{ fontSize: 26, fontWeight: 'bolder', marginTop: 15 }}>Delete Your Personal Data</Text>
            <Text style={styles.test2}>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</Text>
            <Text style={styles.test2}>Our Service may give You the ability to delete certain information about You from within the Service.</Text>
            <Text style={styles.test2}>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</Text>
            <Text style={styles.test2}>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</Text>

            <Text style={{ fontSize: 26, fontWeight: 'bolder', marginTop: 15 }}>Disclosure of Your Personal Data</Text>
            <Text style={{ fontSize: 24, fontWeight: 'bolder', marginTop: 15 }}>Business Transactions</Text>
            <Text style={styles.test2}>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</Text>

            <Text style={{ fontSize: 24, fontWeight: 'bolder', marginTop: 15 }}>Law enforcement</Text>
            <Text style={styles.test2}>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</Text>

            <Text style={{ fontSize: 24, fontWeight: 'bolder', marginTop: 15 }}>Other legal requirements</Text>
            <Text style={styles.test2}>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</Text>

            <Text style={styles.test2}>• Comply with a legal obligation</Text>
            <Text style={styles.test2}>• Protect and defend the rights or property of the Company</Text>
            <Text style={styles.test2}>• Prevent or investigate possible wrongdoing in connection with the Service</Text>
            <Text style={styles.test2}>• Protect the personal safety of Users of the Service or the public</Text>
            <Text style={styles.test2}>• Protect against legal liability</Text>

            <Text style={{ fontSize: 26, fontWeight: 'bolder', marginTop: 15 }}>Security of Your Personal Data</Text>
            <Text style={styles.test2}>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</Text>

            <Text style={{ fontSize: 32, fontWeight: 'bolder', marginTop: 15 }}>Children's Privacy</Text>
            <Text style={styles.test2}>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</Text>

            <Text style={styles.test2}>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</Text>

            <Text style={{ fontSize: 32, fontWeight: 'bolder', marginTop: 15 }}>Links to Other Websites</Text>
            <Text style={styles.test2}>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</Text>

            <Text style={styles.test2}>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</Text>
            <Text style={{ fontSize: 32, fontWeight: 'bolder', marginTop: 15 }}>Changes to this Privacy Policy</Text>
            <Text style={styles.test2}>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</Text>
            <Text style={styles.test2}>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</Text>
            <Text style={styles.test2}>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</Text>
            <Text style={{ fontSize: 32, fontWeight: 'bolder', marginTop: 15 }}>Contact Us</Text>
            <Text style={styles.test2}>If you have any questions about this Privacy Policy, You can contact us:</Text>
            <Text style={styles.test2}>By visiting this page on our website:
                <Text style={{ color: '#0D6FED' }} onPress={handleLinkPress} >https://humhai.in/contact-us </Text> </Text>
            <View style={{ marginTop: 20 }}>
                <Footer />
            </View>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    test1: {
        fontSize: 26,
        fontWeight: 'bolder',
        marginTop: 50,
    },
    test2: {
        fontSize: 15,
        marginTop: 15,

    },
    test3: {
        fontSize: 26,
        fontWeight: 'bolder',
        marginTop: 15,
    },
    test4: {
        fontSize: 25,
        fontWeight: 'bolder',
        marginTop: 5,
    },
    test5: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 15,
        marginTop: 15,

    },
    test6: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 16,
        fontWeight: 'bold'
    },
    test7: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 15,
        marginLeft: 15,
        marginBottom: 5,

    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        fontSize: 17,
        fontWeight: 'bold'
    },
    listItem1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        fontSize: 15,

    },

})

export default PrivacyPolicy;