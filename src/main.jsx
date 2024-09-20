import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'animate.css/animate.min.css'; // Import Animate.css
import * as WOW from 'wowjs';

import App from './App.jsx';
import './index.css';

// Initialize WOW.js
if (typeof window !== 'undefined') {
  new WOW.WOW().init();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
