import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Top from "./pages/Top";
import NotFound from "./pages/NotFound";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projets" element={<Project/>}/>
        <Route path="/top" element={<Top/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
