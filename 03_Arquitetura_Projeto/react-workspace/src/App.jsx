import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Splash from './screens/Splash.jsx'
import Home from './screens/Home.jsx'
import Scanner from './screens/Scanner.jsx'
import Receitas from './screens/Receitas.jsx'
import Impacto from './screens/Impacto.jsx'
import Doacao from './screens/Doacao.jsx'
import Perfil from './screens/Perfil.jsx'

/* ------------------------------------------------------------------------- */
/*  Placeholder screens — to be replaced with full implementations           */
/* ------------------------------------------------------------------------- */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/impacto" element={<Impacto />} />
        <Route path="/doacao" element={<Doacao />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
