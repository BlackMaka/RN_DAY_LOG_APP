import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogContextProvider} from './contexts/LogContext';
import {SearchContextProvider} from './contexts/SearchContext';
import RootSrack from './screens/RootSrack';

export default function App() {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootSrack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
}
