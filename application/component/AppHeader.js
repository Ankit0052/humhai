import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { Image, Dimensions, View, Text, TouchableOpacity, Button, TextInput, StyleSheet } from 'react-native';
import MBI from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import Icons from "react-native-vector-icons/FontAwesome5";
import Toast from 'react-native-toast-message'
import { toastConfig } from '../../style';




const { width, height } = Dimensions.get('window');


export default function AppHeader() {
  var navigation = useNavigation();
  return (
    <View>
       <Toast config={toastConfig} />
      <View
        style={{
          alignItems: 'center', backgroundColor: 'orange', display: 'flex', width: width, height: height * 0.08,
          justifyContent: 'space-between', flexDirection: 'row', padding: 5,
        }}>

        <MBI name="menu" size={26} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{marginLeft:5}} />

        <Image style={{ resizeMode: 'contain', width:width*0.25, height: height*0.1 }} source={require('../../image/hum.png')} />
        <View style={{display:'flex',flexDirection:'row',marginRight:10}}>
          {/* <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Search For Job"
          /> */}
          <Icons name="user-circle" size={30} 
          onPress={() =>navigation.navigate('UserLogin')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 15
  },
});
