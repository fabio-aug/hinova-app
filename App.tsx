import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './src/navigation/Navigator';


function App(): JSX.Element {
    return (
        <React.Fragment>
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </React.Fragment>
    );
}

/* const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
}); */

export default App;
