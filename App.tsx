import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/Routes';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </React.Fragment>
  );
}

export default App;
