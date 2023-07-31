import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PaySlip = () => {
    return (
        <ScrollView>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', }}>Available Referral</Text>
            </View>
            <View horizontal>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableHeader, styles.textColor]}>S.no</Text>
                        <Text style={[styles.tableHeader, styles.textColor]}>Play slip</Text>
                        <Text style={[styles.tableHeader, styles.textColor]}>Link</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>1</Text>
                        <Text style={styles.tableCell}>Ankit</Text>
                        <Text style={styles.tableCell}>8602180052</Text>

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

export default PaySlip;