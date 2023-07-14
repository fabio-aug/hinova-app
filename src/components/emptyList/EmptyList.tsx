import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './EmptyList.styles';

function EmptyList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Nenhum dado disponível no momento
      </Text>
    </View>
  );
}

export default EmptyList;
