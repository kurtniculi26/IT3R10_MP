import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

const Avatar = (props) => {
  const size = props.width ?? 150;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Images/user.jpg')}
        style={{
          width: size,
          height: size,
          borderRadius: size / 0.2,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 75
  },
});

export default Avatar;
