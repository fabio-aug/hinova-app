import React, { useState } from 'react';
import { Button, Modal, ScrollView } from 'react-native';

import Input from '../input/Input';
import { Log } from '../../modules';
import Loading from '../loading/Loading';
import { IWorkshopDTO } from '../../services/workshop/Workshop.interface';
import IndicationRequest from '../../services/indication/Indication.request';
import { IIndicationInput } from '../../services/indication/Indication.inteface';

interface IProps {
  visible: boolean,
  whorkshop: IWorkshopDTO,
  closeModal: () => void
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
      Remetente: '',
      Copias: [],
    };

    setLoading(false);
    IndicationRequest.IndicationFriend(dto).then((res) => {
      if (res.Sucesso) {
        Log.succes(res.Sucesso);
      } else {
        Log.error(res.RetornoErro.retornoErro || 'Não foi possível buscar as oficinas!');
      }
    }).catch((e) => {
      Log.error(e.message || 'Não foi possível buscar as oficinas!');
    }).finally(() => {
      setLoading(true);
    });
  }

  return (
    <Modal
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <Input
            label="CPF"
            multiLines={false}
            value={associateCpf}
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
            value={associatePhone}
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
            value={friendPhone}
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
            value={observation}
            keyboardType="default"
            onChange={setObservation}
          />

          <Button
            onPress={onPress}
            title="Indicar"
          />
        </ScrollView>
      )}
    </Modal>
  );
}

export default IndicationModal;
