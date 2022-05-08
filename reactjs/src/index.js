import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import HomePage from './Home/HomePage'
import ListPage from './Home/ListPage';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ListPage/>);

// ReactDOM.render(
//   <React.StrictMode>
//     <HomePage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
