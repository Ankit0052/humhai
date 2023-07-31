import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


const BGCExecutive = () => {
    return (
        <ScrollView horizontal >
            <View>
                <View style={styles.table} >
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableHeader, styles.textColor]}>S.no</Text>
                        <Text style={[styles.tableHeader, styles.textColor]}>Name</Text>
                        <Text style={[styles.tableHeader, styles.textColor]}>Contact Name</Text>
                        <Text style={[styles.tableHeader, styles.textColor]}>Client</Text>
                        <Text style={[styles.tableHeader, styles.textColor]}>Details</Text>

                        <Text style={[styles.tableHeader, styles.textColor]}>Client Details</Text>
                        <Text style={[styles.tableHeader, styles.textColor]}>Court Check</Text>
                        <Text style={[styles.tableHeader, styles.textColor]}>Doc Data</Text>
                        <Text style={[styles.tableHeader, styles.textColor]}>Applied</Text>

                        <Text style={[styles.tableHeader, styles.textColor]}>Report</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>1</Text>
                        <Text style={styles.tableCell}>Ankit</Text>
                        <Text style={styles.tableCell}>8602180052</Text>
                        <Text style={styles.tableCell}>HH29052023A0011</Text>

                        <Text style={[styles.tableCell ,styles.tableTextLine]}>View</Text>
                        <Text  style={[styles.tableCell ,styles.tableTextLine]}>other</Text>
                        <Text  style={[styles.tableCell ,styles.tableTextLine]}>court check</Text>
                        <Text  style={[styles.tableCell ,styles.tableTextLine]}>doc data</Text>
                        <Text style={styles.tableCell}>July 3, 2023, 8:42 p.m.</Text>
                        <Text style={styles.tableCell}></Text>


                    </View>

                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    table: {
        borderWidth: 1,
        borderColor: '#dfe6e9',
        margin: 15,
        color: 'white',

    },
    tableRow: {
        flexDirection: 'row',
        width: 900,
        height: height * 0.07,
    },
    tableTextLine:{
        textDecorationLine: 'underline',
    },
    tableHeader: {
        flex: 1,
        padding: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#dfe6e9',
        backgroundColor: 'black',
    },
    tableCell: {
        flex: 1,
        padding: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#dfe6e9',
    },
    textColor: {
        color: 'white',
        fontSize: 14
    },
});

export default BGCExecutive;