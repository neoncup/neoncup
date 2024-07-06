import { Contain } from './styled'

import { useEffect } from 'react'
import TagCloud from 'TagCloud'



const SphereAnimation: React.FC = () => {

    useEffect(() => {
        const container = ".tagcloud"
        const texts = [ "HTML", "CSS", "JavaScript", "React", "Vite", "Vue", "ES6", "NodeJs", "Git", "GitHub" ]

        const options = {
            radius: 90,
            maxSpeed: "normal" as "normal",
            initSpeed: "normal" as "normal",
            keep: true,
        }

        TagCloud ( container, texts, options )
    }, [])

    return (
        <Contain>
            <div className="sphere">
                <div className="sphere_outside">
                    {/*  */}
                    <span className="tagcloud"></span>
                </div>
            </div>
        </Contain>
    )
}

export default SphereAnimation