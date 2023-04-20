import React from 'react';
import { ScrollView, Text, Image} from 'react-native';

import styles from './Detail.style';

import Buttonn from '../../components/Buttonn/Buttonn';


const Detail = ({route}) => {
    const {description, urlToImage, content, url} = route.params

    return(
        <ScrollView>
            <Image style={styles.image}source={{uri: urlToImage }} />
            <Text style={styles.text}>Description: {description}</Text>
            <Text style={styles.text}>Content: {content}</Text>
            <Buttonn title='Go to Web' url={url}/>
        </ScrollView>
    )
}
export default Detail;