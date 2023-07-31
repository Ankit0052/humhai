import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MyReferrals = () => {
    return (
        <ScrollView >
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', }}>Available Referral</Text>
            </View>
            <View>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableHeader, styles.textColor]}>S.no</Text>
                        <Text style={[styles.tableHeader, styles.textColor]}>Name</Text>
                        <Text style={[styles.tableHeader, styles.textColor]}>Mobile No.</Text>
                        <Text style={[styles.tableHeader, styles.textColor]}>HH ID</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>1</Text>
                        <Text style={styles.tableCell}>Ankit</Text>
                        <Text style={styles.tableCell}>8602180052</Text>
                        <Text style={styles.tableCell}>HH29052023A0011</Text>
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
        margin: 10,
        color: 'white'
    },
    tableRow: {
        flexDirection: 'row',
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

export default MyReferrals;