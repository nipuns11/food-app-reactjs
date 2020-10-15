import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import yelp from '../api/yelp';

export default () => {
const [results, setResult] = useState([]);
const [errorMessage, setErrorMessage] = useState('');

const searchApi = async searchTerm => {
    try{
    const response = await yelp.get('/search', {
        params: {
            limit: 50,
            term: searchTerm,
            location: 'ottawa'
        }
    });
    setResult(response.data.businesses);
}
catch(err)
{
    setErrorMessage('something went wrong');
}
};

useEffect(() => {
    searchApi('pasta');
}, []);

return [searchApi, results, errorMessage];
};