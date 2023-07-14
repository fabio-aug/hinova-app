import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import Log from '../../modules/Log';
import { styles } from './WorkshopList.styles';
import { WorkshopCard, Loading, EmptyList } from '../../components';
import WorkshopRequest from '../../services/workshop/Workshop.request';
import { IWorkshopDTO } from '../../services/workshop/Workshop.interface';

function WorkshopList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [listWorkshop, setListWorkshop] = useState<IWorkshopDTO[]>([]);

  function getWorkshopList() {
    setLoading(true);
    WorkshopRequest.GetWorkshopList(601).then((res) => {
      if (res.ListaOficinas.length >= 1) {
        setListWorkshop(res.ListaOficinas);
      } else {
        Log.error(res.RetornoErro.retornoErro || 'Não foi possível buscar as oficinas!');
      }
    }).catch((e) => {
      Log.error(e.message || 'Não foi possível buscar as oficinas!');
    }).finally(() => {
      setLoading(false);
    });
  }
  useEffect(getWorkshopList, []);

  function renderItem(item: IWorkshopDTO) {
    return (
      <WorkshopCard workshop={item} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.containerList}
          data={listWorkshop}
          ListEmptyComponent={(<EmptyList />)}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.Id.toString()}
        />
      )}
    </SafeAreaView>
  );
}

export default WorkshopList;
