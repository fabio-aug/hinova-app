import { useRoute } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function WorkshopList() {
    const { params }: any = useRoute();

    return (
        <TouchableOpacity
            onPress={() => console.log('Olá tudo bem?')}
        >
            <Text style={{ color: '#000' }}>
                {params?.nome || 'Nome'}
            </Text>
        </TouchableOpacity>
    );
}

export default WorkshopList;
