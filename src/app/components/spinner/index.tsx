import React from "react";
import { ActivityIndicator, View } from "react-native";
import { TURQUOISE } from '@constants/colors'

import styles from './styles';

const withSpinner = (Component: any) => (props: any) => {
  const {isLoading, ...otherProps} = props;
  return (
    <>
    {isLoading ?
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={TURQUOISE} />
      </View> :
      <Component {...otherProps} />
    }
    </>
  )
}

export default withSpinner;
