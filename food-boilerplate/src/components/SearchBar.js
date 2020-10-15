import React from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.background}>
        <Feather name="search" size ={30} style={styles.iconStyle}></Feather>
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle} placeholder="Search"
        value={term}
        onChangeText= {newTerm => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
        />
        </View>
    );
}; 

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#F0EEEE',
        marginTop: 10,
        height: 50,
        borderRadius: 5,
        marginHorizontal:15,
        flexDirection: 'row',
        marginBottom:10
    },
    inputStyle:{
        borderColor: 'black',
        borderWidth: 1,
        flex:1
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center'
    }
});

export default SearchBar;