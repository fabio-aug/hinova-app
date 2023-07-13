import React from 'react';
import { Text } from 'react-native';
import { styles } from './EmptyList.styles';

function EmptyList() {
  return (
    <Text style={styles.text}>
      Nenhum dado disponível no momento
    </Text>
  );
}

export default EmptyList;
