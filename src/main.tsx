import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SessionProvider } from './services/auth.service.tsx';
import { UserProvider } from './services/user.service.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SessionProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </SessionProvider>
  </React.StrictMode>
);
