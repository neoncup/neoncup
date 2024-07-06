import { Viewport } from './styled'
import NavBar from '../navbar/NavBar'
import Sphere from '../../events/animation/SphereAnimation'
import Router from '../../pages/RouterFunc'







interface ViewportProps {
    value: boolean;
    switchTheme: () => void;
}

const ViewPort: React.FC <ViewportProps> = ({ value, switchTheme }) => {
    return (
        <Viewport style = {{display: value ? 'block' : 'none'}}>
            <div className = "contain">
                <div className = "navbar"><NavBar switchTheme = {switchTheme} /></div>
                <div className = "router">
                    <Sphere />
                    <Router />
                </div>
            </div>
        </Viewport>
    )
}

export default ViewPort
