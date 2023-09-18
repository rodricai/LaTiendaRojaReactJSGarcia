import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2s_o7pqpX2gmxtx6CsdX2F3rh6eD9zWY",
  authDomain: "tiendarojareactcoderhouse.firebaseapp.com",
  projectId: "tiendarojareactcoderhouse",
  storageBucket: "tiendarojareactcoderhouse.appspot.com",
  messagingSenderId: "926693650814",
  appId: "1:926693650814:web:b90ba0b7e12e6e5318032f",
  measurementId: "G-9RYSY36DCF"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
