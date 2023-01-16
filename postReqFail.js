import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


export default function PostReqFail() {
    
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
        }
    });

    return(<View style={styles.container}>
        <Text>Failed post request, please verify your inputs.</Text>
    </View>);
    
}