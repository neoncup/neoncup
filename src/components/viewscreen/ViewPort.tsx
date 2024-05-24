import { Viewport } from './styled'
import NavBar from '../navbar/NavBar'
import Router from '../../pages/RouterFunc'







interface ViewportProps {
    value: boolean;
}

const ViewPort: React.FC <ViewportProps> = ({ value }) => {
    return (
        <Viewport style = {{display: value ? 'block' : 'none'}}>
            <div className = "contain">
                <div className = "navbar"><NavBar /></div>
                <div className = "router"><Router /></div>
            </div>
        </Viewport>
    )
}

export default ViewPort
