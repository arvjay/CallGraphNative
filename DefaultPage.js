import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput } from 'react-native';

import React, {useState} from 'react';


export default function DefaultPage({navigation})  {
    const [value, setValue] = useState({fileStructure: '', environment: '', IPaddress: 0, keywords: ''});
    
    function action(response) {
        if(response.data === 'success') {
            navigation.navigate('Success!');
        }
        else if(response.data === 'fail') {
            navigation.navigate('Required Data Not Provided');
        }
        else if(response.data === 'post request failed') {
            navigation.navigate('Post Request Failed')
        }
    }

    function post() {
        var fileStructure = value.fileStructure;
        var environment = value.environment;
        var IPaddress = value.IPaddress;
        var keywordList = value.keywords;
        if(!IPaddress) {
            navigation.navigate('Required Data Not Provided');
            return;
        }
        axios.post("http://" + IPaddress + ":3000/submit?fileStructure=" + fileStructure + 
        "&environment=" + environment + "&keywords=" + keywordList)
        .then((response) => action(response)
        ).catch(function (error) {
            console.log(error);
        });
    }

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
        }
    });

    return(
        <View style={styles.container}>
            <TextInput autoCorrect={false} onChangeText={(fileStructure) => 
            setValue({fileStructure : fileStructure, environment : value.environment, IPaddress : value.IPaddress, keywords : value.keywords})}>Enter the file or directory path here</TextInput>
            <TextInput autoCorrect={false} onChangeText={(environment) => 
            setValue({fileStructure : value.fileStructure, environment : environment, IPaddress : value.IPaddress, keywords : value.keywords})}>Enter the python path here</TextInput>
            <TextInput autoCorrect={false} secureTextEntry={true} onChangeText={(IPaddress) => 
            setValue({fileStructure : value.fileStructure, environment : value.environment, IPaddress: IPaddress, keywords : value.keywords})}>Enter your local IPv4 Address here</TextInput>
            <TextInput autoCorrect={false} onChangeText={(keywords) => 
            setValue({fileStructure : value.fileStructure, environment : value.environment, IPaddress : value.IPaddress, keywords : keywords})}>{"(Optional) Enter a comma separated list of keywords here"}</TextInput>
            <Button title="Confirm" onPress={post}/>
            <StatusBar style="auto" />
        </View>
    )
}


