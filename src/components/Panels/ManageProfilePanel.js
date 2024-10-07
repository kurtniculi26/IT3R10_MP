import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window'); // Get the screen width for responsive sizing

const ManageProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Image source={require('../../assets/Images/manageprofile.png')} style={styles.icon}/>
        <Text style={styles.text}>Manage Profile</Text>
        <Image source={require('../../assets/Images/go.png')} style={styles.goIcon}/>
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
    justifyContent: 'space-between',  // Ensure space between items
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EEE'
  },
  text: {
    fontSize: 20,
  },
  icon: {
    height: 35,
    width: 35,
  },
  goIcon: {
    height: 25,
    width: 25,
  }
});

export default ManageProfile;
