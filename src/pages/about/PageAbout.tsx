import React from 'react'
import { About } from './styled'
import {
    BsArchive,
    BsCupHot,
    BsGlobe2,
    BsHeart,
    BsInstagram,
    BsTwitter,
    BsGithub
} from 'react-icons/bs'


export const PageAbout: React.FC = () => {
    return (
        <About>
            <div className = "contain">
                <div className = "title">Ola wolfs! Eu sou um desenvolvedor web</div>
                <div className = "lessme">
                    <div>
                        <h1><span>M</span>eireles <span>F</span>ernando</h1>
                        <span>[ Artist / Desenvolvedor / Design ]</span>
                    </div>
                    <div>
                        <span><img src="" alt="My Photo" /></span>
                    </div>
                </div>

                <div className="work">
                    <div className = "item">trabalho <BsCupHot /></div>
                    <span className="text"></span>
                    <button>Portifolio</button>
                </div>

                <div className = "bio">
                    <div className = "item">biografia <BsArchive /></div>
                </div>

                <div className="ilove">
                    <div className = "item">eu <BsHeart /></div>

                    <div className = "wrapper">
                        <div className = "container">
                            <input type = "radio" name = "slide" id = "T01" checked />
                            <label htmlFor = "T01" className = "card">
                                <div className = "row">
                                    <div className = "icone">1</div>
                                    <div className = "infor">Musica</div>
                                </div>
                            </label>

                            <input type = "radio" name = "slide" id = "T02" checked />
                            <label htmlFor = "T02" className = "card">
                                <div className = "row">
                                    <div className = "icone">2</div>
                                    <div className = "infor">Anime</div>
                                </div>
                            </label>

                            <input type = "radio" name = "slide" id = "T03" checked />
                            <label htmlFor = "T03" className = "card">
                                <div className = "row">
                                    <div className = "icone">3</div>
                                    <div className = "infor">Fotografia</div>
                                </div>
                            </label>

                            <input type = "radio" name = "slide" id = "T04" checked />
                            <label htmlFor = "T04" className = "card">
                                <div className = "row">
                                    <div className = "icone">4</div>
                                    <div className = "infor">Voleyball</div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="onweb">
                    <div className = "item">na web <BsGlobe2 /></div>
                    <div className= "group">
                        <div className = "web">
                            <i className = "ico"><BsInstagram /></i>
                            <span className = "inf">@craftzwolf</span>
                        </div>

                        <div className = "web">
                            <i className = "ico"><BsTwitter /></i>
                            <span className = "inf">@craftzwolf</span>
                        </div>

                        <div className = "web">
                            <i className = "ico"><BsTwitter /></i>
                            <span className = "inf">@craftzz0ne_app</span>
                        </div>

                        <div className = "web">
                            <i className = "ico"><BsGithub /></i>
                            <span className = "inf">craftzwolf</span>
                        </div>
                    </div>
                </div>

                <div className="discover"></div>
            </div>
        </About>
    )
}
