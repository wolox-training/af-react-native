import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import WithSpinner from '@components/spinner';
import { actionCreator } from '@redux/auth/actions';
import { State } from '@interfaces/books';

const AuthWithSpinner = WithSpinner(View);

const AuthLoading = ({ navigation }: any) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(actionCreator.authSetup(navigation));
  // },[])

  const loading = useSelector((state: State) => state.auth.authLoading)
  
  return (
    <AuthWithSpinner isLoading={loading} />
  );
};

export default AuthLoading;
