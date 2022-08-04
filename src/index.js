import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
import 'bootstrap/dist/css/bootstrap.css';

Kommunicate.init("2ca4ffc6e348b32012c83b95310c57800" , {"popupWidget":true,"automaticChatOpenOnNavigation":true});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

