import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function BottomBar(handleLikePress, handlePassPress){
   return(
       <View style={styles.container}>
           <View/>
           <TouchableOpacity style={styles.button}>

           </TouchableOpacity>

           <TouchableOpacity style={styles.button}>

           </TouchableOpacity>

           <View/>
       </View>
   ) 
}


const styles = StyleSheet.create({
    container: {
        height:75,
        flexDirection: "row",
        justifyContent:'space-around',
        alignItems: 'center',

    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius:25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowcolor: '#000',
        shadowOffset:{
            width: 0,
            height: 0,
        },
        shadowOpacity:0.15,
        shadowRadius: 6.46,
        elevtion: 9,
    },
})