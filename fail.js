import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


export default function Fail() {
    
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
        }
    });

    return(<View style={styles.container}>
        <Text numberOfLines={3}>You must provide the file or directory path, the environment path, and your IPv4 Address in the first three inputs respectively</Text>
    </View>);
    
}