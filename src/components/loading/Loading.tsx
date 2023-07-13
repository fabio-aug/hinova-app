import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './Loading.styles';
import { colors } from '../../global/Styles';

function Loading() {
  return (
    <View style={styles.containerLoading}>
      <ActivityIndicator size={50} color={colors.medium} />
    </View>
  );
}

export default Loading;
