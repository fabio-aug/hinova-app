import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Workshop, WorkshopList } from '../screens';

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Workshop" component={Workshop} />
            <Stack.Screen name="WorkshopList" component={WorkshopList} />
        </Stack.Navigator>
    );
}

export default Navigator;
