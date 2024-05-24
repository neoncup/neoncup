import { useState, useEffect } from 'react'
import logo from '../../assets/Logo-w.ico'
import { Loading } from './styled'


interface LoadEventsProps {
    seconds: number;
    openView: () => void;
}




const LoadEvents: React.FC <LoadEventsProps> = ({seconds, openView}) => {

    const [ count, setCount ] = useState(seconds)
    const [ display, setDisplay ] = useState(true)
    let timerID = seconds;

    useEffect(() => {
        timerID = setInterval(() => {
            setCount (prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerID)
    }, [])

    useEffect(() => {
        if (count === 0) {
            setDisplay(false)
            openView()
        }
    }, [count, openView])

    return (
        <Loading style = {{ display: display ? 'flex' : 'none' }} id='animated'>
            <div className="contain">
                <div className="logo"><img src = { logo } /></div>
                <div className="anim"><span className="baranim"></span></div>
                <span className="span">{ count }</span>
            </div>
        </Loading>
    )
}

export default LoadEvents;
