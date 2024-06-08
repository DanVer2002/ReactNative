import React from 'react';
import { NewsProvider } from './contexts/NewsContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <NewsProvider>
      <AppNavigator />
    </NewsProvider>
  );
}
