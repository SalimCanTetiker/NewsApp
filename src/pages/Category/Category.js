import React from 'react';
import {FlatList, View, Text, TouchableNativeFeedback,} from 'react-native';

import CategoryCard from '../../components/CategoryCard/CategoryCard';

import styles from './Category.style';

import data from '../../assests/data.json';

const Category = ({navigation}) => {
    const renderCategory = ({item}) => <CategoryCard category={item} onSelect={() => CategoryOnSelect(item.category)}/>
    const CategoryOnSelect = (category) => navigation.navigate('NewsPage', {category})
    return(
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderCategory}/>
        </View>
    )
}
export default Category;