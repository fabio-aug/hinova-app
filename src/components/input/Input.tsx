import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';

import React from 'react';

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
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        multiline={multiLines}
        onChangeText={onChange}
        placeholder={label}
        keyboardType={keyboardType}
        numberOfLines={multiLines ? 3 : 1}
      />
    </View>
  );
}

export default Input;
