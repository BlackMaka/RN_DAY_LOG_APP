import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogContextProvider} from './contexts/LogContext';
import RootSrack from './screens/RootSrack';

export default function App() {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootSrack />
      </LogContextProvider>
    </NavigationContainer>
  );
}
