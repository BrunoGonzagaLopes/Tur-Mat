import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor:'#fff',
        padding:3, 
        margin:5,
        width:82,
        alignContent:'center',
        borderRadius:10
    },
    image: {
        width: 21,
        height: 21
    },
    textPoints: {
        fontSize: 16,
        fontWeight: 700,
        fontFamily: 'Roboto'
    }
})