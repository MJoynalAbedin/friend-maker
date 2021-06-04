import React,{useState} from 'react'
import { StyleSheet} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {RectButton} from 'react-native-gesture-handler'
import SwipeImage from '../SwipeImage/SwipeImage'

export default function Swipes(users, currentIndex, handleLike, handlePass) {
    const [ willLike, setWillLIke] = useState(false);
    const [ willPass, setWillPass] = useState(false);
    
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
       onSwipeableLeftOpen ={()=>{
        setWillLIke(false)
        handleLike ()
       }}
       onSwipeableRightOpen = {() =>{
        setWillPass(false)
        handlePass ()
       }}
       onSwipeableLeftWillOpen = {() => setWillLIke(true)}
       onSwipeableRightWillOpen = {() => setWillPass(true)}
       
       >
<SwipeImage user={users[currentIndex]} willLike ={willLike} willPass={willPass} />
       </Swipeable>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

