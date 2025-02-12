import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { ClerkProvider } from "@clerk/clerk-react";

const clerkPublishableKey = "pk_test_ZWxlY3RyaWMtbXVzdGFuZy02My5jbGVyay5hY2NvdW50cy5kZXYk";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ClerkProvider publishableKey={clerkPublishableKey}>
  <Provider store={store}>
    <App />
  </Provider>
</ClerkProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
