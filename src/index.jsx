import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Styles/index.css';
import App from './Pages/App/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Housing from './Pages/Housing/Housing';
import About from './Pages/About/About';
import Error from './Pages/404/404';
import Header from './Components/Header/Header';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/logements/:id',
    element: <Housing/>
  },
  {
    path: '/a-propos',
    element: <About/>
    
  },
  {
    path: '/*',
    element: <Error/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <RouterProvider router={routes} />
    </main>       
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
