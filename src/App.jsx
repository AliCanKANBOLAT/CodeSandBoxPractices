// App.jsx
import React from 'react';
import { ContextProvider } from "./components/title";
import HeaderTitle from "./components/HeaderTitle";
import HeaderButton from './components/HeaderButton';

function App() {
  return (
    <ContextProvider>
        <HeaderTitle />
        <HeaderButton />
    </ContextProvider>
  );
}

export default App;
