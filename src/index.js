import React from 'react';
import { createRoot } from 'react-dom/client';
import CafeApps from './components/CafeApps';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<CafeApps />);
