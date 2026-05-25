import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function ImageComponent() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./pngwing.com.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 130,
    height: 130,
  },
});