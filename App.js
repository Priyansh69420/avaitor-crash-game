import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AviatorGame from './AvaitorGame'
import Test from './Test';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AviatorGame />
    </GestureHandlerRootView>
  );
}