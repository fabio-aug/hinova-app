import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';

function Workshop() {
    const history = useNavigation();

    function onPress() {
        history.navigate('WorkshopList', { nome: 'Rodrigo' });
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ backgroundColor: '#00ff00', height: 100}}
        >
            <Text>
                oi
            </Text>
        </TouchableOpacity>
    );
}

export default Workshop;
