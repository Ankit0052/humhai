import React, { useState, useEffect } from 'react';
import Home from '../screens/screens/Home';

import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import MCB from 'react-native-vector-icons/FontAwesome5';
import MCA from 'react-native-vector-icons/Ionicons';
import MCC from 'react-native-vector-icons/FontAwesome';
import MCD from 'react-native-vector-icons/EvilIcons'

import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import AppHeader from '../component/AppHeader';
import LoginUser from '../screens/auth/LoginUser';
import OTPScreen from '../screens/auth/OTPScreen';
import OTPScreenPass from '../screens/auth/OTPScreenPass';
import ReferralCode from '../screens/auth/ReferralCode';
import RegistrationScreen from '../screens/auth/RegistrationScreen';
import SendOTPNumber from '../screens/auth/SendOTPNumber';
import UserPanelTab from '../screens/auth/UserPanelTab';
import ChangePasswordScreen from '../screens/auth/ChangePasswordScreen';
import DashBoard from '../screens/screens/DashBoard';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import { StackNavigationOptions } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

import Plan from '../screens/screens/Plan';
import AppliedJobs from '../screens/screens/AppliedJobs';
import PaySlip from '../screens/screens/PaySlip';
import SavedJobs from '../screens/screens/SavedJobs';
import OfficialDocument from '../screens/screens/OfficialDocument';
import MyReferrals from '../screens/screens/MyReferrals';
import BGCExecutive from '../screens/screens/BGCExecutive';
import Profile from '../screens/screens/Profile';
import MyDocuments from '../screens/screens/MyDocuments';
import ChangePasswords from '../screens/screens/ChangePasswords';
import SignOut from '../screens/screens/SignOut';
import HelpForm from '../screens/screens/HelpForm';
import HumHaiSilver from '../screens/screens/HumHaiSilver';
import BackgroudForm from '../screens/screens/BackgroundForm';
import PrivacyPolicy from '../screens/screens/PrivacyPolicy';
import BackgroudForm1 from '../screens/screens/BackgroundForm1';
import BackgroudForm2 from '../screens/screens/BackgroundForm2';
import BackgroudForm3 from '../screens/screens/BackgroundForm3';
import BackgroudForm4 from '../screens/screens/BackgroundForm4';
import BackgroudForm5 from '../screens/screens/BackgroundForm5';
import BackgroudForm6 from '../screens/screens/BackgroundForm6';
import Jobs from '../screens/Jobs';
import UploadImage from '../screens/UploadImage';
import OurTeam from '../screens/screens/OurTeam';
import Slider from '../screens/screens/Slider';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function RootNavigation() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);


  const ProjectDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} options={{ headerShown: false, drawerIcon: () => <MCI name={"home-city"} size={24} /> }} />
        <Drawer.Screen name="Slider" component={Slider} options={{ headerShown: false, drawerIcon: () => <MCI name={"home-city"} size={24} /> }} />



        {/* <Drawer.Screen name="DashBoard" component={DashBoard} options={{ headerShown: false, drawerIcon: () => <MCI name={"view-dashboard"} size={24} /> }} /> */}


        <Drawer.Screen name="Applied Jobs" component={AppliedJobs} options={{ headerShown: false, drawerIcon: () => <MCB name={"check"} size={24} /> }} />

        <Drawer.Screen name="Plan" component={Plan} options={{ headerShown: false, drawerIcon: () => <MCB name={"shield-alt"} size={24} /> }} />

        <Drawer.Screen name="Saved Jobs" component={SavedJobs} options={{ headerShown: false, drawerIcon: () => <MCI name={"bookmark"} size={24} /> }} />
      </Drawer.Navigator>
    );
  };




  function CustomDrawerContent(props) {
    return (

      <DrawerContentScrollView {...props}>

        <View style={{ display: 'flex', padding: 15, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ecf0f1' }}>
          <Image style={{ marginBottom: 5, borderRadius: 100, resizeMode: 'contain', width: width * 0.27, height: height * 0.12, padding: 30, backgroundColor: 'white' }}
            source={require('../../image/hum.png')} />
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Ankit Kumar Jha</Text>
          </View>
        </View>
        <View style={styles.horizontalRule} />
        <DrawerItemList {...props} />

        {/* <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate('Home')}
          icon={() => <MCI name={"home-city"} size={24} />}
        /> */}

        {/* <DrawerItem
          label="applied jobs"
          onPress={() => props.navigation.navigate('AppliedJobs')}
          icon={() => <MCB name={"check"} size={24} />}
        />

        <DrawerItem
          label="Plan"
          onPress={() => props.navigation.navigate('Plan')}
          icon={() => <MCB name={"shield-alt"} backgroundColor={'black'} size={24} />}
        /> */}
        {/* <DrawerItem
          label="Saved Jobs"
          onPress={() => props.navigation.navigate('SavedJobs')}
          icon={() => <MCI name={"bookmark"} size={24} />}
        /> */}
        <View style={{ width: width * 0.71, height: height * 0.05, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }} >Employee tools</Text>

        </View>

        <DrawerItem
          label="Payslip"
          onPress={() => props.navigation.navigate('PaySlip')}

          icon={() => <MCA name={"ios-newspaper"} size={24} />}
        />
        <DrawerItem
          label="Official Document"
          onPress={() => props.navigation.navigate('OfficialDocument')}
          icon={() => <MCI name={"printer"} size={24} />}
        />
        <DrawerItem
          label="My Referrals"
          onPress={() => props.navigation.navigate('MyReferrals')}
          icon={() => <MCC name={"users"} size={24} />}
        />

        <View style={{ width: width * 0.71, height: height * 0.05, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>BGC</Text>
        </View>

        <DrawerItem
          label="BGC Executive"
          onPress={() => props.navigation.navigate('BGCExecutive')}
          icon={() => <MCC name={"lock"} size={24} />}
        />
        <DrawerItem
          label="Profile"
          onPress={() => props.navigation.navigate('Profile')}
          icon={() => <MCI name={"account-settings"} size={24} />}
        />

        <DrawerItem
          label="My Documents"
          onPress={() => props.navigation.navigate('MyDocuments')}
          icon={() => <MCB name={"folder-open"} size={24} />}
        />
        <DrawerItem
          label="Change Password"
          onPress={() => props.navigation.navigate('ChangePasswords')}
          icon={() => <MCB name={"key"} size={24} />}
        />
        <DrawerItem
          label="HH29052023A0011"
          icon={() => <MCI name={"account-box"} size={24} />}
        />

        <DrawerItem label="SignOut"
          onPress={() => props.navigation.navigate('SignOut')}
          icon={() => <MCI name={"logout"} size={24} />} />

      </DrawerContentScrollView>
    );
  };

  const screenOptions: StackNavigationOptions = {
    headerStyle: {
      backgroundColor: 'orange',

    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home1"}
      >
        {/* <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'orange' }, headerTintColor: 'white' }}> */}
        <Stack.Screen name='UserLogin' component={LoginUser} options={{ title: "User Login" }} />
        <Stack.Screen name="SendOTPNumber" component={SendOTPNumber} options={{ title: "Forgot Password" }} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ title: "Registration", headerBackVisible: false }} />
        <Stack.Screen name="UserPanelTab" component={UserPanelTab} options={{ title: "HUM Hai" }} />
        <Stack.Screen name="OTPS" component={OTPScreen} options={{ title: "Input OPT" }} />
        <Stack.Screen name="otp" component={OTPScreenPass} options={{ title: "Input OPT" }} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ title: "Change Password" }} />
        <Stack.Screen name="ReferralCode" component={ReferralCode} options={{ title: "Referral Code" }} />

        <Stack.Screen name="DashBoard" component={DashBoard} options={screenOptions} />

        <Stack.Screen name="Home1" component={ProjectDrawer} options={{ header: AppHeader }} />
        <Stack.Screen name="Plan" component={Plan} options={{ header: AppHeader, }} />
        <Stack.Screen name="AppliedJobs" component={AppliedJobs} options={{ header: AppHeader, }} />
        <Stack.Screen name="SavedJobs" component={SavedJobs} options={{ header: AppHeader, }} />
        <Stack.Screen name="SignOut" component={SignOut} options={{ header: AppHeader, }} />


        <Stack.Screen name="AppHeader" component={AppHeader} options={screenOptions} />
        <Stack.Screen name="PaySlip" component={PaySlip} options={screenOptions} />
        <Stack.Screen name="OfficialDocument" component={OfficialDocument} options={screenOptions} />
        <Stack.Screen name="MyReferrals" component={MyReferrals} options={screenOptions} />
        <Stack.Screen name="BGCExecutive" component={BGCExecutive} options={screenOptions} />
        <Stack.Screen name="Profile" component={Profile} options={screenOptions} />
        <Stack.Screen name="MyDocuments" component={MyDocuments} options={screenOptions} />
        <Stack.Screen name="ChangePasswords" component={ChangePasswords} options={screenOptions} />
        <Stack.Screen name="HelpForm" component={HelpForm} options={screenOptions} />
        <Stack.Screen name="HumHaiSilver" component={HumHaiSilver} options={screenOptions} />
        <Stack.Screen name="BackgroundForm" component={BackgroudForm} options={screenOptions} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={screenOptions} />
        <Stack.Screen name="BackgroundForm1" component={BackgroudForm1} options={screenOptions} />
        <Stack.Screen name="BackgroundForm2" component={BackgroudForm2} options={screenOptions} />
        <Stack.Screen name="BackgroundForm3" component={BackgroudForm3} options={screenOptions} />
        <Stack.Screen name="BackgroundForm4" component={BackgroudForm4} options={screenOptions} />
        <Stack.Screen name="BackgroundForm5" component={BackgroudForm5} options={screenOptions} />
        <Stack.Screen name="BackgroundForm6" component={BackgroudForm6} options={screenOptions} />
        <Stack.Screen name="Jobs" component={Jobs} options={screenOptions} />
        <Stack.Screen name="UploadImage" component={UploadImage} options={screenOptions} />
        <Stack.Screen name="OurTeam" component={OurTeam} options={screenOptions} />
        <Stack.Screen name="Slider" component={Slider} options={screenOptions} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

  horizontalRule: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 1,
  },


})