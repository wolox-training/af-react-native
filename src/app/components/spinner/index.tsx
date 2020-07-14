import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const withSpinner = (Component: any) => (props: any) => {
  const {isLoading, ...otherProps} = props;
  return (
    <>
    {isLoading ?
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View> :
      <Component {...otherProps} />
    }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default withSpinner;
