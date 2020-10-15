import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Button, ScrollView } from "react-native";
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from "../components/ResultsList";


const SearchScreen = () => {
    const[term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsbyPrice = (price) => {
     return results.filter(result => {
         return result.price === price;
     });
    };
    return(
        <>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}>
        </SearchBar>
        {errorMessage ? <Text>{errorMessage}</Text> : null }
        <ScrollView>
        <ResultsList results={filterResultsbyPrice('$')} title=" Cost Effective"></ResultsList>
        <ResultsList results={filterResultsbyPrice('$$')} title=" Bit Pricier"></ResultsList>
        <ResultsList results={filterResultsbyPrice('$$$')} title=" Big Spender"></ResultsList>
        </ScrollView>
        </>
    );
}; 

const styles = StyleSheet.create({});

export default SearchScreen;