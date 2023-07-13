import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './Button.styles';

interface IProps {
  onPress: () => void,
  text: string
}

function Button({ onPress, text }: IProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
