import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WorkshopDetails, WorkshopList } from '../screens';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WorkshopList"
        component={WorkshopList}
        options={{ headerTitle: 'Oficinas' }}
      />
      <Stack.Screen
        name="WorkshopDetails"
        component={WorkshopDetails}
        options={{ headerTitle: 'Detalhes da oficina' }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
