import React from 'react';
import { KeyboardTypeOptions, StyleProp, Text, TextInput, TextStyle, View } from 'react-native';

import { styles } from './Input.styles';
import { colors } from '../../global/Styles';

interface IProps {
  value: string,
  label: string,
  multiLines: boolean,
  onChange: (value: string) => void,
  keyboardType: KeyboardTypeOptions,
  styleInput?: StyleProp<TextStyle>
}

function Input({
  label,
  value,
  onChange,
  multiLines,
  styleInput,
  keyboardType,
}: IProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={label}
        multiline={multiLines}
        onChangeText={onChange}
        keyboardType={keyboardType}
        style={[styles.input, styleInput]}
        numberOfLines={multiLines ? 3 : 1}
        placeholderTextColor={`${colors.dark}77`}
      />
    </View>
  );
}

export default Input;
