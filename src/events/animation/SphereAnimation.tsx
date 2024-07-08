import { Contain } from './styled'
import image_1 from '../../assets/CRAFTZWOLF01.png'
import image_2 from '../../assets/CRAFTZWOLF02.png'

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

            <div className = "images">
                <div className = "contain">
                    <img src = { image_1 } className = "image_1"/>
                    <img src = { image_2 } className = "image_2"/>
                </div>
            </div>
        </Contain>
    )
}

export default SphereAnimation