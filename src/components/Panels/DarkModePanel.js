import { View, Text, StyleSheet, Dimensions, Image, Switch } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');
const DarkMode = ({ toggle, onToggle }) => {

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Image source={require('../../assets/Images/darkmode.png')} style={styles.icon} />
        <Text style={styles.text}>Dark Mode</Text>

        <Switch 
          value={toggle}
          onValueChange={onToggle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.92,
    height: height * 0.11,
    overflow: 'hidden',
    borderRadius: 10,
    marginVertical: 5,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EEE',
  },
  text: {
    fontSize: 16,
  },
  icon: {
    height: 35,
    width: 35,
  },
});

export default DarkMode;
