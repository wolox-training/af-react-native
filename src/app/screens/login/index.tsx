import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, TextInput, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/button';
import { actionCreator } from '../../../redux/auth/actions';

import background from '@assets/bc_inicio.png';
import logo from '@assets/Group.png';

import styles from './styles';

const USER = 'Usuario';
const PASSWORD = 'Password';
const LOGIN = 'Ingresar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('entro')
    dispatch(actionCreator.login({email, password}))
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <Image source={logo}/>
        <View style={styles.inputsContainer}>
          <TextInput style={styles.inputs} value={email} onChangeText={setEmail} placeholder={USER}/>
          <TextInput style={styles.inputs} value={password} onChangeText={setPassword} placeholder={PASSWORD} secureTextEntry={true} />
          <Button title={LOGIN} onPress={onSubmit} style={styles.button} textStyle={styles.buttonText}/>
        </View>
      </ImageBackground>
    </View>
  )
};

export default Login;
