import { View, Text } from 'react-native';
import React from 'react';

const ProfileText = ({ toggle }) => {
  return (
    <View>
      <Text style={{ 
        fontSize: 18, 
        fontWeight: 'bold', 
        paddingBottom: 15, 
        color: toggle ? '#FFF' : '#000'
      }}>
        Profile
      </Text>
    </View>
  );
};

export default ProfileText;