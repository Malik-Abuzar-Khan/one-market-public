import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "../../../store/counter_slice";

export default function CounterComp() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <View styles={styles.container}>
    <View style={{marginTop:140}}>
      <Button title="increment" onPress={() => dispatch(increment())} />
      <Text>{count}</Text>
      <Button title="decrement" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 1400,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"red",
    height:100,
  },
});
