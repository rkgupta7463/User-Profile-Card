import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//select the div to inject dynamic contents
const root = ReactDOM.createRoot(document.getElementById('root'));
// const form = ReactDOM.createRoot(document.getElementById('form'));
// console.log(form);

root.render( < React.StrictMode > < App > < /App></React.StrictMode > );