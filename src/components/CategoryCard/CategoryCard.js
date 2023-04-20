import React from 'react';
import {View, Text, TouchableNativeFeedback,} from 'react-native';
import styles from './CategoryCard.style';

const data = [
    {
        category: 'business',
    },
    {
        category: 'general',
    },
    {
        category: 'health',
    },
    {
        category: 'science',
    },
    {
        category: 'sport',
    },
    {
        category: 'technology',
    },
    {
        category: 'entertainmet',
    },
];
const CategoryCard = ({category, onSelect}) => {
    return(
        <TouchableNativeFeedback onPress={onSelect}>
        <View>
            <Text style={styles.text}>{category.category}</Text>
        </View>
        </TouchableNativeFeedback>

    )
}
export default CategoryCard;