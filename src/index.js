import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <ChakraProvider>

    <App />
  </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
