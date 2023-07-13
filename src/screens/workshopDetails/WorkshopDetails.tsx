import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, SafeAreaView, Image, View, Button } from 'react-native';

import Mask from '../../modules/Mask';
import { styles } from './WorkshopDetails.styles';
import { IWorkshopDTO } from '../../services/workshop/Workshop.interface';
import IndicationModal from '../../components/indicationModal/IndicationModal';

function WorkshopDetails() {
  const { params }: any = useRoute();
  const workshop: IWorkshopDTO = params;

  const [modalStatus, setModalStatus] = useState<boolean>(false);

  function onPress() {
    setModalStatus(true);
  }

  return (
    <SafeAreaView>
      <Image
        style={styles.image}
        source={{ uri: Mask.formatBase64(workshop.Foto) }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{workshop.Nome}</Text>
        <Text style={styles.price}>$ </Text>
        <Text style={styles.description}>{workshop.Descricao}</Text>
        <Button
          onPress={onPress}
          title="Indicar amigo"
        />
      </View>

      <IndicationModal
        visible={modalStatus}
        closeModal={() => setModalStatus(false)}
        whorkshop={workshop}
      />
    </SafeAreaView>
  );
}

export default WorkshopDetails;
