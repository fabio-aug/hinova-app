import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView, Image, ScrollView, View } from 'react-native';

import { Mask } from '../../modules';
import { styles } from './WorkshopDetails.styles';
import { Section, Button } from '../../components';
import { IWorkshopDTO } from '../../services/workshop/Workshop.interface';
import IndicationModal from '../../components/indicationModal/IndicationModal';

function WorkshopDetails() {
  const { params }: any = useRoute();
  const workshop: IWorkshopDTO = params;

  const [modalStatus, setModalStatus] = useState<boolean>(false);

  function onPress() {
    setModalStatus(true);
  }

  function fomartPhone(): string {
    let aux1 = workshop.Telefone1;
    let aux2 = workshop.Telefone2;

    if (aux1 && aux2) { return `${aux1} - ${aux2}`; }
    if (aux1 && !aux2) { return aux1; }
    if (!aux1 && aux2) { return aux2; }

    return '--';
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: Mask.formatBase64(workshop.Foto) }} />
        </View>
        {workshop.Nome && (
          <Section
            title="Nome"
            info={workshop.Nome}
          />
        )}
        {(workshop.Telefone1 || workshop.Telefone2) && (
          <Section
            title="Telefone"
            info={fomartPhone()}
          />
        )}
        {workshop.Endereco && (
          <Section
            title="Endereço"
            info={workshop.Endereco}
          />
        )}
        {workshop.Email && (
          <Section
            title="E-mail"
            info={workshop.Email}
          />
        )}
        {workshop.Descricao && (
          <Section
            title="Sobre a oficina"
            info={workshop.Descricao}
          />
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button onPress={onPress} text="Indicar amigo" />
      </View>
      <IndicationModal
        whorkshop={workshop}
        visible={modalStatus}
        closeModal={() => setModalStatus(false)}
      />
    </SafeAreaView>
  );
}

export default WorkshopDetails;
