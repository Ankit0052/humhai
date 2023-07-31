import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, Button } from 'react-native';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';



function JobCategory(props) {
    const navigation = useNavigation()


    return (

        <ScrollView>
            <View style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>

                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Endless Job Categories for All</Text>
            </View>
            <View style={styles.container}>
                <Image style={styles.image } source={require('../../../assets/A1.jpg')} />
                <View style={{display:'flex',position:'absolute',top:125}}>
                <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>Sales Executive</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Image style={styles.image } source={require('../../../assets/c1.jpg')} />
                <View style={{display:'flex',position:'absolute',top:125}}>
                <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>HR</Text>
                </View>                
            </View>
            <View style={styles.container}>
                <Image style={styles.image } source={require('../../../assets/c2.jpg')} />
                <View style={{display:'flex',position:'absolute',top:125}}>
                <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>Developer</Text>
                </View>                
            </View>
            <View style={styles.container}>
                <Image style={styles.image } source={require('../../../assets/c3.jpg')} />
                <View style={{display:'flex',position:'absolute',top:125}}>
                <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>Delivery Boy</Text>
                </View>                
            </View>
            <View style={styles.container}>
                <Image style={styles.image } source={require('../../../assets/c4.jpg')} />
                <View style={{display:'flex',position:'absolute',top:125}}>
                <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>Verification Jobs</Text>
                </View>                
            </View>
            <View style={styles.container}>
                <Image style={styles.image } source={require('../../../assets/c5.jpg')} />
                <View style={{display:'flex',position:'absolute',top:125}}>
                <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>Telecaller</Text>
                </View>                
            </View>
            <View style={styles.container}>
                <Image style={styles.image } source={require('../../../assets/c6.jpg')} />
                <View style={{display:'flex',position:'absolute',top:125}}>
                <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>Team Leader</Text>
                </View>                
            </View>
            <View style={styles.container}>
                <Image style={styles.image } source={require('../../../assets/c7.jpg')} />
                <View style={{display:'flex',position:'absolute',top:125}}>
                <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>Accountant</Text>
                </View>                
            </View>
          

        </ScrollView >

    )
}
const styles = StyleSheet.create({
    container: {
        width: width * 0.95,
        height: height * 0.35,
        backgroundColor: '#636e72',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5, // Required for Android shadow
        margin: 10,
        alignItems: 'center',
    },
    image: {
        width: width * 0.95,
        height: height * 0.35,
        // margin: 10,
        opacity: 0.45,
        backgroundColor:'black',
        borderRadius: 20,

    },
    text: {
        fontSize: 20,
        fontWeight: 'bolder',
        margin: 10
    },

});
export default JobCategory;
