import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator } from 'react-native';
import Logo from './assets/logo.png'

export default function App() {
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [buttonPressed, setButtonPress] = useState(false)

  useEffect(() => {

    if (buttonPressed) {
      setTimeout(() => {
        setLoginSuccess(true)
        setButtonPress(false)
      }, 3000)

    }


  }, [buttonPressed])


  const handleLogin = () => {
    setButtonPress(true)
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {buttonPressed &&
          <View style={styles.logingLoading}>
            <ActivityIndicator size={'large'} color={"white"}/>
          </View>
        }
        {loginSuccess && <Text style={[styles.text, { fontSize: 15 }]} >Login succesfull</Text>}
        <View style={{ marginBottom: 30, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.headerText}>LOGIN</Text>
          <Text style={styles.text}>Come back with your ID</Text>
          <Text style={[styles.text, { fontSize: 15 }]} >For easy, fast and secure login</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder='enter username'
          placeholderTextColor={'#4C8E8E'}
        />
        <TextInput
          style={styles.input}
          placeholder='enter password'
          placeholderTextColor={'#4C8E8E'}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#023332',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logingLoading: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5
  },
  logo: {
    width: 100,
    height: 100
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  text: {
    color: '#4C8E8E',
    fontSize: 20
  },
  input: {
    width: '80%',
    borderRadius: 50,
    height: 50,
    borderWidth: 3,
    borderColor: '#4C8E8E',
    marginVertical: 10,
    padding: 10
  },
  button: {
    marginTop: 20,
    width: '30%',
    height: 35,
    backgroundColor: '#3ED9D3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
});