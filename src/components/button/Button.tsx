import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';

import { styles } from './Button.styles';

interface IProps {
  text: string,
  onPress: () => void,
  type?: 'primary' | 'outlined',
  styleButton?: StyleProp<ViewStyle>
}

function Button({ onPress, text, styleButton, type = 'primary' }: IProps) {
  const textType = type === 'primary' ? styles.textPrimary : styles.textOutlined;
  const buttonType = type === 'primary' ? styles.buttonPrimary : styles.buttonOutlined;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, buttonType, styleButton]}
    >
      <Text style={[styles.text, textType]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
