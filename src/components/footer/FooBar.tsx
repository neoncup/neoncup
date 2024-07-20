import { Foobar } from './styled'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { useState, useEffect } from 'react'


const FooBar: React.FC = () => {
    const [year, setYear] = useState (new Date().getFullYear())
    useEffect(() => { setYear(new Date().getFullYear()) }, [])
    return (
        <Foobar>
            <div className = " contain">
                <span><AiOutlineCopyrightCircle /> { year } <label>Meireles Fernando. Direitos Reservados.</label></span>
            </div>
        </Foobar>
    )
}

export default FooBar;
