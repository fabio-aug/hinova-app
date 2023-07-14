import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/Routes';
import { StatusBar } from 'react-native';
import { colors } from './src/global/Styles';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </React.Fragment>
  );
}

export default App;
