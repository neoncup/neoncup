import React from 'react'
import { Home } from './styled'



export const PageHome: React.FC = () => {
    return (
        <Home>
            <div className = "cover-full"></div>
            <div className = "contain">
                <div className = "cover-mini"></div>
                <div className = ""></div>
            </div>
        </Home>
    )
}
