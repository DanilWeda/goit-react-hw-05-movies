import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const BASE_LINK = '/goit-react-hw-05-movies'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_LINK}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
