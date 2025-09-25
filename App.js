import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CounterApp from './CounterApp.js';
export default function App() {

return(
  <view style ={styles.container}>
<CounterApp/>
  </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
