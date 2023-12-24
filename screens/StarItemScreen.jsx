import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { resetStar, setStar } from '../store/starSlice';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { axiosInstance } from '../api';
import Breadcrumbs from '../components/Breadcrumbs';

export default function StarItemScreen({ route, navigation }) {
    const handlePressStars = () => {
        navigation.navigate('Список звезд');
    };

    const { id } = route.params;
    const dispatch = useDispatch();
    const { star } = useSelector((state) => state.star);
    useEffect(() => {
        async function getStarById() {
            await axiosInstance.get(`/star/${id}`)
            .then((response) => {
                dispatch(setStar(response?.data));
            })
            .catch((err) => console.log(err))
        }
        getStarById();
    }, [dispatch]);

    return (
    <ScrollView>
        <View style={styles.page}>
                <View style={styles.bcContainer}>
                    <Breadcrumbs pages={[]} navigation={navigation}/>
                    <Text style={styles.breadcrumb} onPress={handlePressStars}>
                        { " / " + star.name}
                    </Text>
                </View>
            {star != null && star.name != "" && star.image != undefined &&
            <View style={{margin: 15}}>
                <View>
                    <Image style={styles.image} source={{ uri: star.image}}/>
                    <View>
                        <Text style={styles.textTitle}>{star.name}</Text>
                        <Text style={styles.text}> {star.description}</Text>
                        <View>
                            <Text style={styles.text}>
                                Расстояние до звезды: {star.distance} св. лет
                            </Text>
                            <Text style={styles.text}>
                                Возраст звезды: {star.age} млрд лет
                            </Text>
                            <Text style={styles.text}>
                                Светимость звезды: {star.magnitude}
                            </Text>
                        </View>
                    </View>
                </View>
            </View> }
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111111',
    },
    text: { color: '#f0f0f0', fontSize: 16 },
    textTitle: { color: '#f0f0f0', fontSize: 18 , marginTop: 10, marginBottom: 10},
    breadcrumb: { color: '#f0f0f0', fontSize: 16, display: 'flex', marginTop: 10,},
    bcContainer: {
       flexDirection: 'row',
       alignItems: 'center', // выравнивает элементы по центру по вертикали
     },
    image: { height: 320, alignSelf: 'stretch' },
});