import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SitesRoutes from './pages/siteRoutes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SitesRoutes/>
  </React.StrictMode>
);
