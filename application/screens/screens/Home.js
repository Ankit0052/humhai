import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import Footer from './Footer';
import Apply3Jobs from './Apply3Jobs';
import JobCategory from './JobCategory';
import CompanyLogo from './CompanyLogo';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import OurTeam from './OurTeam';



export default function Home() {
   const navigation = useNavigation()
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      setTimeout(() => { setIsLoading(false); }, 2000);
   }, []);



   return (

      <ScrollView>
         {isLoading ? (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
               <Image style={{ resizeMode: 'contain', width: width * 0.900, height: height * 0.720, padding: 30, }}
                  source={require('../../../assets/help..png')} />
               <ActivityIndicator size="large" color="orange" />
               <Text>Loading...</Text>
            </View>
         ) : (
            <View>
               <View style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                  <Text style={{ fontSize: 24, fontWeight: 'bold' }}>India's leading</Text>
                  <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#FF7700' }}> OPPORTUNITY</Text>
                  <Text style={{ fontSize: 24, fontWeight: 'bold' }}>providing platform!</Text>
               </View>

               <View style={styles.container}>
                  <Image style={styles.image} source={require('../../../assets/A12.png')} />
                  <Text style={styles.text}>Looking for Job</Text>

                  <LinearGradient colors={['#ff9900', 'red']} style={styles.buttonss} >
                     <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('DashBoard') }}>
                           <Text style={[styles.tests]}>Go</Text>
                        </TouchableOpacity>
                     </View>
                  </LinearGradient>
               </View>


               <View style={styles.container}>
                  <Image style={styles.image} source={require('../../../assets/B2.jpg')} />
                  <Text style={styles.text}>Post Jobs</Text>
                  <LinearGradient colors={['#ff9900', 'red']} style={styles.buttonss} >

                     <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('HelpForm') }}>
                           <Text style={[styles.tests]}>Go</Text>
                        </TouchableOpacity>
                     </View>
                  </LinearGradient>
               </View>

               <View style={styles.container}>
                  <Image style={styles.image} source={require('../../../assets/A13.png')} />
                  <Text style={styles.text}>Voluteer</Text>

                  <LinearGradient colors={['#ff9900', 'red']} style={styles.buttonss} >
                     <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                           <Text style={[styles.tests]}>Go</Text>
                        </TouchableOpacity>
                     </View>
                  </LinearGradient>

               </View>

               <View style={styles.container}>
                  <Image style={styles.image} source={require('../../../assets/b4.jpg')} />
                  <Text style={styles.text}>Self Employement</Text>
                  <LinearGradient colors={['#ff9900', 'red']} style={styles.buttonss} >
                     <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                           <Text style={[styles.tests]}>Go</Text>
                        </TouchableOpacity>
                     </View>
                  </LinearGradient>
               </View>

               <View style={{ marginTop: 15 }}>
                  <Apply3Jobs />
               </View>

               <View style={{ marginTop: 15 }}>
                  <JobCategory />
               </View>

               <View style={{ marginTop: 15 }}>
                  <OurTeam />
               </View>

               <View style={{ marginTop: 15 }}>
                  <CompanyLogo />
               </View>

               <View style={{ marginTop: 15 }}>
                  <Footer />
               </View>

            </View>
         )}
      </ScrollView >

   )
}

const styles = StyleSheet.create({
   container: {
      width: width * 0.95,
      height: height * 0.39,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 5, // Required for Android shadow
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center'
   },
   image: {
      width: width * 0.9,
      height: height * 0.25,
      margin: 5,
   },
   text: {
      fontSize: 18,
      fontWeight: 'bolder',
      margin: 10,
      alignItems: 'center'
   },
   buttonss: {
      width: width * 0.25,
      height: height * 0.055,
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
   tests: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',

   },
});

