import React, {Component} from 'react';
import Colors from '../../theme/colors';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'iconsax-react-native';

const CustomButton = props => {
  const {backColor, title, titleColor = Colors.BLACK} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: backColor}]}>
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    padding: 8,
    borderRadius: 5,
    margin: 5,
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: Colors.WHITE,
  },
});

export default CustomButton;
