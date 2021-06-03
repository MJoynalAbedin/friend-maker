import React from 'react'
import { styleSheet} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {RectButton} from 'react-native-gesture-handler'
import SwipeImage from '../SwipeImage'

export default function Swipes(users, currentIndex) {
    const renderLeftActions = () => {
        return (
    
            <RectButton style = {styles.container}>
            <SwipeImage users ={users[currentIndex + 1]}>
        
            </SwipeImage>
        </RectButton>
        )

    }

    const renderRightActions = () => {
return (
    
    <RectButton style = {styles.container}>
    <SwipeImage users ={users[currentIndex + 1]}>

    </SwipeImage>
</RectButton>
)

    }
    return (
       <Swipeable
       friction = {2}
       leftThreshold ={40}
       rightThreshold = {40}
       renderLeftActions = {renderLeftActions}
       renderRightActions = {renderRightActions}
       
       >
<SwipeImage user={users[currentIndex]} />
       </Swipeable>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

