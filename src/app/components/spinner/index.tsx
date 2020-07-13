import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useSelector } from 'react-redux';
import { State } from '@interfaces/books';


const withSpinner = (Component: any) => () => {
  const isLoading = useSelector((state: State) => state.books.loading);
  return (
    <>
    {true ?
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View> :
      <Component />
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
