import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Design= () => {
  const [bgColor, setBgColor] = useState('white');

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Color Changer App</Text>
      <View style={styles.buttonContainer}>
        <Button title="White" onPress={() => setBgColor('white')} />
        <Button title="Light Blue" onPress={() => setBgColor('lightblue')} />
        <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default Design;