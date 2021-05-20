import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './layouts/Main';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import './styles/App.css'


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}


export default App;
