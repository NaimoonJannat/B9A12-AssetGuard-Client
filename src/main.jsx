import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  RouterProvider, 
 } from "react-router-dom";
 import { HelmetProvider } from 'react-helmet-async'; 
import router from './Routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
   <RouterProvider router={router} />
   <ToastContainer />
   </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
