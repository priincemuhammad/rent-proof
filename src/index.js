import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Preloader = React.lazy(() => import('./components/Preloader'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Suspense fallback={<Preloader />}>
    <App />
  </React.Suspense>
);
