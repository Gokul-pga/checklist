import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToDolist from './Components/ToDolist';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<ToDolist/>} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
