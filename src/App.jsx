
import './App.css';
import { router, } from "./Pages/index";
import { RouterProvider } from "react-router-dom";
import React from 'react'
import { PrimeReactProvider } from "primereact/api";


function App() {


  return (
    <PrimeReactProvider value={{ unstyled: true }}>


      <RouterProvider router={router} />
    </PrimeReactProvider>

  );
}

export default App;
