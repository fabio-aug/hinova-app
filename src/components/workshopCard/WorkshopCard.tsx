import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, Image, View } from 'react-native';

import Mask from '../../modules/Mask';
import { styles } from './WorkshopCard.styles';
import { IWorkshopDTO } from '../../services/workshop/Workshop.interface';

interface IProps {
  workshop: IWorkshopDTO
}

function WorkshopCard({ workshop }: IProps) {
  const history = useNavigation<any>();

  function onPress() {
    history.navigate('WorkshopDetails', workshop);
  }

  return (
    <TouchableOpacity style={styles.containerItem} onPress={onPress}>
      <Image style={styles.image} source={{ uri: Mask.formatBase64(workshop.Foto) }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{workshop.Nome}</Text>
        <Text style={styles.subTitle}>{Mask.stringRedutor(workshop.DescricaoCurta, 30)}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default WorkshopCard;
