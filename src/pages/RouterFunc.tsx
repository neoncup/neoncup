import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PageProjects, PageWork, PageAbout } from './pages'




const RouterFunc: React.FC = () => {
    return (
        <Routes>
            <Route path = "/sobre" element = {<PageAbout />} />
            <Route path = "/portifolio" element={<PageProjects />} />
            <Route path = "/serviços" element={<PageWork />} />
            
            <Route path='*' element={<Navigate to="/sobre" />} />

        </Routes>
    )
}

export default RouterFunc;
