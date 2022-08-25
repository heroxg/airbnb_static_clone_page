import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './responsive.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './components/Card';
import Banner from './components/Banner';
import CardDetails from './components/CardDetails';
import productData from '../src/components/CardDetails'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='main--wrapper'>
      <App />
      <Banner />
      {productData}
        <CardDetails />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
