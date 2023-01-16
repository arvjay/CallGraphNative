import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Success() {

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
        }
    });

    const imageStyle= StyleSheet.create({
        container:{
            height: 520,
            width: 520,
            transform: [{rotate: '90deg'}]
        }
    })

    return(<View style={styles.container}>
        <Text>{"<-- Rotate"}</Text>
        <Image source={require('./example.png')} style={imageStyle.container}/>
    </View>);
    
}