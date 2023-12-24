import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useCallback } from 'react';
import { axiosInstance } from '../api';
import { setLowDist, setHighDist, setSearchValue } from '../store/filterSlice'
import { setStars } from '../store/starSlice';
import StarCard from '../components/StarCard';
import Breadcrumbs from '../components/Breadcrumbs';

export default function StarListScreen({ navigation }) {
    const dispatch = useDispatch();
    const { stars } = useSelector((state) => state.star);
    const { lowDist, highDist, searchValue } = useSelector((state) => state.filter);

    const handlePressStars = () => {
        navigation.navigate('Список звезд');
    };

    useEffect(() => {
        async function getAllStars() {
            await axiosInstance.get(`/star?name=${searchValue}&dist_bot=${lowDist}&dist_top=${highDist}`)
            .then((response) => dispatch(setStars(response?.data)))
        }
        getAllStars();
    }, [dispatch, searchValue]);

   const onTextChange = (text) => {
       dispatch(setSearchValue(text));
   };

    return (
        <ScrollView>
            <View style={styles.page}>
                <Breadcrumbs pages={[]} navigation={navigation}/>
                <TextInput
                    style={styles.input}
                    onChangeText={onTextChange}
                    value={searchValue}
                />
                {!!stars &&
                    stars.map((star) => <StarCard key={star.star_id} {...star} navigation={navigation} />)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111111',
    },
    input: {
        height: 40,
        margin: 8,
        width: 320,
        padding: 10,
        color: 'white',
        borderWidth: 1,
        backgroundColor: '#222222',
        borderRadius: 8,
        borderWidth: 0,
    },
    text: {color : '#f0f0f0'},
});
