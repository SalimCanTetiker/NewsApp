import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    body_container: {
        justifyContent: 'space-between',

    },
    title: {
        fontSize: 20,

    },
    author: {
        fontSize: 16,
        borderBottomWidth: 1,
        textAlign: 'right',
    },
    image: {
        height: 100,
        width: 100,
    }
})