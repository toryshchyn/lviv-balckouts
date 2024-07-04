import React from 'react';
import ReactDOM from 'react-dom/client';

import ElectricityStatusApp from './Blackouts';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ElectricityStatusApp />
  </React.StrictMode>
);

