import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import './index.css';


const firebaseConfig = {
  apiKey: "AIzaSyDRKvNHlbSRLsbajz2qqyStj9-aJOI4Uas",
  authDomain: "ecommercemimeli.firebaseapp.com",
  projectId: "ecommercemimeli",
  storageBucket: "ecommercemimeli.appspot.com",
  messagingSenderId: "1013232653072",
  appId: "1:1013232653072:web:b508a6a95e98bdeba08b95"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
