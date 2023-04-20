import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';

import styles from './NewsCard.style';

const NewsCard = ({newsProp, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Image style={styles.image}source={{uri: newsProp.urlToImage}}/>
            <View style={styles.body_container}>
            <Text style={styles.title}>{newsProp.title}</Text>
            <Text style={styles.author}>{newsProp.author}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}
export default NewsCard;