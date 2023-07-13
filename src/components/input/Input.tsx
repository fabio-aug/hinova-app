import React from 'react';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';

import { styles } from './Input.styles';
import { colors } from '../../global/Styles';

interface IProps {
  value: string,
  label: string,
  multiLines: boolean,
  onChange: (value: string) => void,
  keyboardType: KeyboardTypeOptions
}

function Input({
  label,
  value,
  onChange,
  keyboardType,
  multiLines,
}: IProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={label}
        style={styles.input}
        multiline={multiLines}
        onChangeText={onChange}
        keyboardType={keyboardType}
        numberOfLines={multiLines ? 3 : 1}
        placeholderTextColor={`${colors.dark}77`}
      />
    </View>
  );
}

export default Input;
