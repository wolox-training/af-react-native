import React, { useState } from 'react';
import { View, TextInput, ImageBackground, Image } from 'react-native';
import Button from '../../components/button';

import background from '@assets/bc_inicio.png';
import logo from '@assets/Group.png';

import styles from './styles';

const USER = 'Usuario';
const PASSWORD = 'Password';
const LOGIN = 'Ingresar';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <Image source={logo}/>
        <View style={styles.inputsContainer}>
          <TextInput style={styles.inputs} value={user} onChangeText={setUser} placeholder={USER}/>
          <TextInput style={styles.inputs} value={password} onChangeText={setPassword} placeholder={PASSWORD}/>
          <Button title={LOGIN} onPress={() => console.log('login')} style={styles.button} textStyle={styles.buttonText}/>
        </View>
      </ImageBackground>
    </View>
  )
};

export default Login;
