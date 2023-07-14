import React, { useState } from 'react';
import { Modal, ScrollView, View } from 'react-native';

import Input from '../input/Input';
import Button from '../button/Button';
import Loading from '../loading/Loading';
import Section from '../section/Section';
import { Log, Mask } from '../../modules';
import { styles } from './IndicationModal.styles';
import { IWorkshopDTO } from '../../services/workshop/Workshop.interface';
import IndicationRequest from '../../services/indication/Indication.request';
import { IIndicationInput } from '../../services/indication/Indication.inteface';

interface IProps {
  visible: boolean,
  closeModal: () => void,
  whorkshop: IWorkshopDTO
}

function IndicationModal({ whorkshop, visible, closeModal }: IProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [associateCpf, setAssociateCpf] = useState<string>('');
  const [associateName, setAssociateName] = useState<string>('');
  const [associateEmail, setAssociateEmail] = useState<string>('');
  const [associatePhone, setAssociatePhone] = useState<string>('');
  const [associateLicensePlate, setAssociateLicensePlate] = useState<string>('');

  const [friendName, setFriendName] = useState<string>('');
  const [friendPhone, setFriendPhone] = useState<string>('');
  const [friendEmail, setFriendEmail] = useState<string>('');

  const [observation, setObservation] = useState<string>('');

  function onPress() {
    const dto: IIndicationInput = {
      Indicacao: {
        NomeAmigo: friendName,
        DataCriacao: new Date(),
        EmailAmigo: friendEmail,
        Observacao: observation,
        TelefoneAmigo: friendPhone,
        CpfAssociado: associateCpf,
        NomeAssociado: associateName,
        EmailAssociado: associateEmail,
        TelefoneAssociado: associatePhone,
        PlacaVeiculoAssociado: associateLicensePlate,
        CodigoAssociacao: whorkshop.CodigoAssociacao,
      },
      Remetente: associateEmail,
      Copias: [],
    };

    setLoading(true);
    IndicationRequest.IndicationFriend(dto).then((res) => {
      if (res.Sucesso) {
        onClose();
        Log.succes(res.Sucesso);
      } else {
        Log.error(res.RetornoErro.retornoErro || 'Não foi possível buscar as oficinas!');
      }
    }).catch((e) => {
      Log.error(e.message || 'Não foi possível buscar as oficinas!');
    }).finally(() => {
      setLoading(false);
    });
  }

  function clearModal() {
    setAssociateCpf('');
    setAssociateName('');
    setAssociateEmail('');
    setAssociatePhone('');
    setAssociateLicensePlate('');
    setFriendName('');
    setFriendPhone('');
    setFriendEmail('');
    setObservation('');
  }

  function onClose() {
    clearModal();
    closeModal();
  }

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <ScrollView style={styles.scroll}>
            <Section
              title="Indicação"
              info="Informte todos os dados corretamenta para indicar a um amigo."
            />
            <Input
              label="CPF"
              multiLines={false}
              value={Mask.applyMask(Mask.masks.cpf, associateCpf)}
              keyboardType="numeric"
              onChange={setAssociateCpf}
            />
            <Input
              label="E-mail"
              multiLines={false}
              value={associateEmail}
              keyboardType="default"
              onChange={setAssociateEmail}
            />
            <Input
              label="Nome"
              multiLines={false}
              value={associateName}
              keyboardType="default"
              onChange={setAssociateName}
            />
            <Input
              label="Telefone"
              multiLines={false}
              value={Mask.applyMask(Mask.masks.phone, associatePhone)}
              keyboardType="numeric"
              onChange={setAssociatePhone}
            />
            <Input
              label="Placa do Veículo"
              multiLines={false}
              value={associateLicensePlate}
              keyboardType="default"
              onChange={setAssociateLicensePlate}
            />
            <Input
              label="Nome do amigo"
              multiLines={false}
              value={friendName}
              keyboardType="default"
              onChange={setFriendName}
            />
            <Input
              label="Telefone do amigo"
              multiLines={false}
              value={Mask.applyMask(Mask.masks.phone, friendPhone)}
              keyboardType="numeric"
              onChange={setFriendPhone}
            />
            <Input
              label="E-mail do amigo"
              multiLines={false}
              value={friendEmail}
              keyboardType="default"
              onChange={setFriendEmail}
            />
            <Input
              label="Observações"
              multiLines={true}
              styleInput={styles.observationInput}
              value={observation}
              keyboardType="default"
              onChange={setObservation}
            />
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button
              text="Confirmar"
              onPress={onPress}
              styleButton={styles.buttonSize}
            />
            <Button
              text="Cancelar"
              type="outlined"
              onPress={onClose}
              styleButton={styles.buttonSize}
            />
          </View>
        </View>
      )}
    </Modal>
  );
}

export default IndicationModal;
