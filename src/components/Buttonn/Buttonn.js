import React from "react";
import {TouchableOpacity, Linking, Text} from 'react-native';

import styles from './Button.style';

const Buttonn = ({title, url}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(url)}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>

    )
}
export default Buttonn;