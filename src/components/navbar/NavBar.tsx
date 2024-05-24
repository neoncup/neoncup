import { Navbar } from './styled'
import { useNavigate } from 'react-router-dom'
import { BsFolder, BsLayersHalf, BsHouse, BsFillPinFill } from 'react-icons/bs'
import { FaHandshake } from 'react-icons/fa'

import logotipo from '../../assets/MYLOGO.png'



const NavBar: React.FC = () => {
    const navigate = useNavigate();

    /* my routes functions */
    const buttonHome = () => { navigate('/') }
    const buttonFolio = () => { navigate('/portifolio') }
    const buttonServics = () => { navigate('/serviços') }
    const buttonContacts = () => { navigate('/contactos') }
    const buttonAbout = () => { navigate('/sobre') }

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

    return (
        <Navbar>
            <div className = "contain">
                <div>
                    <button className = "button" onClick = { (event) =>{ enableButton(event); buttonHome () } }>
                        <div className = "actived"></div>
                        <span><BsHouse /></span>
                    </button>
                    <button className = "button" onClick = { (event) =>{ enableButton(event); buttonFolio () } }>
                        <div className = "actived"></div>
                        <span><BsFolder /></span>
                    </button>
                    <button className = "button" onClick = { (event) =>{ enableButton(event); buttonServics () } }>
                        <div className  = "actived"></div>
                        <span><BsLayersHalf /></span>
                    </button>
                    <button className = "button" onClick = { (event) =>{ enableButton(event); buttonContacts () } }>
                        <div className = "actived"></div>
                        <span><FaHandshake /></span>
                    </button>
                </div>

                <div>
                    <button className = "button" onClick = { (event) =>{ enableButton(event); buttonAbout () } }>
                        <div className = "actived"></div>
                        <div className = "logo" id="m"><img src = { logotipo } /></div>
                    </button>
                    <button className = "button" onClick = { (event) =>{ enableButton(event); buttonAbout () } }>
                        <div className = "actived"></div>
                        <span><BsFillPinFill /></span>
                    </button>
                </div>
            </div>
        </Navbar>
    )
}

export default NavBar;
