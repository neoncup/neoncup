import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {PageHome, PageProjects, PageWork, PageContacts, PageAbout} from './pages'




const RouterFunc: React.FC = () => {
    return (
        <Routes>
            <Route path = "/" element={<PageHome />} />
            <Route path = "/portifolio" element={<PageProjects />} />
            <Route path = "/serviços" element={<PageWork />} />
            <Route path = "/contactos" element={<PageContacts />} />
            <Route path = "/sobre" element = {<PageAbout />} />
            <Route path='*' element={<Navigate to="/" />} />

        </Routes>
    )
}

export default RouterFunc;
