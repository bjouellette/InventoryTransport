import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Form from "./components/form";
import Admin from "./components/admin";
import Report from "./components/report"
import Manual from "./components/manual"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="admin" element={<Admin />} />
      <Route path="form" element={<Form />} />
      <Route path="report" element={<Report />}/>
      <Route path="manual" element={<Manual />}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
