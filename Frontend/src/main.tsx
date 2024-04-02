import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import "./styles/style.css";
import { FoodProvider } from './contexts/FoodContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FoodProvider>
      <App />
    </FoodProvider>
  </React.StrictMode>,
);
