import React, {children} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const ScreenBtn = ({children, onBtnPress}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onBtnPress}
        android_ripple={{color: '#808080'}}
        style={({pressed}) =>
          pressed
            ? [(styles.innercontainer, styles.pressed)]
            : styles.innercontainer
        }>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    margin: 4,
    overflow: 'hidden',
    backgroundColor: 'oldlace',
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'poppins',
  },
  pressed: {
    opacity: 0.75,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#00A86B',
  },
  innercontainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#00A86B',
    elevation: 10,
  },
});

export default ScreenBtn;
