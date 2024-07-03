import { Navbar } from './styled'
import { useState } from 'react'
import Switch from 'react-switch'

import { ThemeContext } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'


import { BsMoonFill, BsSunFill, BsGithub, BsList } from 'react-icons/bs'

import logoLua from '../../assets/WOLFFANG01.png'
import logoSol from '../../assets/WOLFFANG02.png'

interface NavbarProps {
    switchTheme(): void;
}


const NavBar: React.FC <NavbarProps> = ({ switchTheme }) => {
    const { title } = useContext(ThemeContext)
    const navigate = useNavigate();

    /* my routes functions */
    const buttonHome = () => { navigate('/') }
    const buttonAbout = () => { navigate('/sobre') }
    const buttonFolio = () => { navigate('/portifolio') }
    const buttonThumbrs = () => { navigate('/serviços') }
    const buttonSource = () => { navigate('/contactos') }

    /* */
    const enableButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        const clickedButton = event.target as HTMLButtonElement;
        const parentElement = event.currentTarget.parentElement;

        if (parentElement){
            const buttons = parentElement.querySelectorAll('button')

            buttons.forEach((button: Element) => {
                button.classList.remove('active')
            })

            clickedButton.classList.add('active')
        }
    }

    /* Toggle Humberguer To Show / Hidde menu. */    
    const [display, setDisplay] = useState(true)
    const buttonHumburguer = () => { 
        setDisplay(!display) 

        const gitIcon = document.getElementById('git')
        if(gitIcon) {gitIcon.style.display = display ? 'none' : 'inline-block'}
    }

    return (
        <Navbar>
            <div className = "contain">
                <div>
                    <button className = "btn_home" onClick = { (event) =>{ enableButton(event); buttonHome () } }>
                        <div className = "actived"></div>
                        <div className = "logo" id="m">
                            <img src = { logoLua } />
                            <img src = { logoSol } />
                        </div>
                        <span>Meireles Fernando</span>
                    </button>

                    <div className='routes' style = {{ display : display ? 'none' : 'flex' }}>
                        <button className = "btn_link" onClick = { (event) =>{ enableButton(event); buttonAbout () } }>
                            <div className = "actived"></div>
                            <span>About</span>
                        </button>
                        <button className = "btn_link" onClick = { (event) =>{ enableButton(event); buttonFolio () } }>
                            <div className = "actived"></div>
                            <span>Works</span>
                        </button>
                        <button className = "btn_link" onClick = { (event) =>{ enableButton(event); buttonThumbrs () } }>
                            <div className  = "actived"></div>
                            <span>Thumbrs</span>
                        </button>
                        <button className = "btn_link" onClick = { (event) =>{ enableButton(event); buttonSource () } }>
                            <div className = "actived"></div>
                            <span><BsGithub className = "icon" id='git' /> Source</span>
                        </button>
                    </div>
                </div>

                <div>
                    <button className = "switch">
                        <Switch className = "theme"
                            onChange={ switchTheme }
                            checked = { title == 'dark' } 
                            checkedIcon = { <BsMoonFill className='icon_lua'/> }
                            uncheckedIcon = {<BsSunFill className='icon_sol'/> }
                            handleDiameter={2}
                            width = {40}
                            height = {40}
                        />
                    </button>
                    <button className = "bars" onClick = { () => buttonHumburguer () }>
                        <div className = "actived"></div>
                        <span><BsList className = "humberger"/></span>
                    </button>
                </div>

            </div>
        </Navbar>
    )
}

export default NavBar;
