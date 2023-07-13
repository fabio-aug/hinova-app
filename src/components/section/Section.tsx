import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './Section.styles';

interface IProps {
  title: string,
  info: string,
}

function Section({ title, info }: IProps) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        {title}
      </Text>
      <Text style={styles.sectionDescription}>
        {info}
      </Text>
    </View>
  );
}

export default Section;
