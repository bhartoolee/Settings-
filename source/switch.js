import React,{useState} from 'react'
import { View,Switch,StyleSheet } from 'react-native'

const swithchTheme=()=>{
    const [backgroundColor,setBackgroundColor]= useState('white')
    const [isDarkMode,setisDarkMode]= useState(false)

    const toggleTheme =()=>{
        setisDarkMode(!isDarkMode)
        setBackgroundColor(isDarkMode? 'white' : 'black')
    }

    return(
        <View>
            <Switch 
            trackColor={{false:'3e3e3e',true:'blue'}}
            thumbColor={isDarkMode? '3e3e3e': '#fff'}
            onValueChange={toggleTheme}
            value={isDarkMode}
            style={styles.switch}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center'
    },

    switch:{
        // margin:10,
        alignItems: 'flex-end'
    }
})

export default swithchTheme