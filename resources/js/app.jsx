// import './bootstrap';
// import { createInertiaApp } from '@inertiajs/react'
// import { createRoot } from 'react-dom/client'

// createInertiaApp({
//   resolve: name => {
//     const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })
//     return pages[`./pages/${name}.jsx`]
//   },
//   setup({ el, App, props }) {
//     createRoot(el).render(<App {...props} />)
//   },
// })

import './bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/login.jsx';
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Home />);
