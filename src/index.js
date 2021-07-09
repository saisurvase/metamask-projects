import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal'

import 'react-toastify/dist/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.min.css'
import "react-datepicker/dist/react-datepicker.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root')
const modalElement = Modal.setAppElement(document.getElementById('root'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
  modalElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
