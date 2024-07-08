import styled from 'styled-components'



export const Navbar = styled.div`
    position: fixed;
    align-items: center;
    display: flex;
    width: 100%;
    height: 80px;
    background: ${ props => props.theme.colors.back_color_blur };
    backdrop-filter: blur(15px);
    z-index: 999;

    .contain {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;

        div {
            &:nth-child(1) {
                display: flex;

                .btn_home {
                    background: transparent;
                    border: none;
                    outline: none;
                    font-size: 14pt;
        
                    display: flex;
                    align-items: center;
                    height: 40px;
    
                    .logo {
                        position: relative;
                        width: 30px;
                        height: 30px;
                        margin-right: 5px;
                        img {
                            position: absolute;
                            width: 100%;
                            height: 100%;

                            &:nth-child(1) {
                                display: ${ props => props.theme.displays.sol_display };
                            }
                            &:nth-child(2) {
                                display: ${ props => props.theme.displays.lua_display };
                            }
                        }
                    }
                    span {
                        margin-top: 8px;
                        font-size: 12px;
                        font-weight: bold;
                        font-family: 'Metrica';
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        color: ${props => props.theme.colors.text_color_def};
                        height: 40px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
                .routes {
                    position: absolute;
                    top: 90px;
                    right: 10px;
                    width: 190px;
                    padding: 10px;
                    border-radius: 5px;
                    transition: color .3s;
                    filter: drop-shadow(-1px -1px 1px rgba(255, 255, 255, .3))
                            drop-shadow(4px 4px 4px rgba(0, 0, 0, .2))
                            drop-shadow(5px 5px 5px rgba(0, 0, 0, .2));

                    background: ${ props => props.theme.colors.back_color_alt };
                    color: var(--icon-color);
                    margin-left: 10px;

                    display: none;
                    flex-direction: column;
                    transition: display 3s;

                    .btn_link {
                        background: transparent;
                        border: none;
                        outline: none;
                        font-size: 14pt;
                        text-align: end;
                        line-height: 35px;
                        width: 100%;
                        transition: border 3s ease-in-out;
                        cursor: pointer;

                        &:hover {
                            border-bottom: 1px solid ${props => props.theme.colors.text_color_def};
                            color: #fff;
                        }

                        span {
                            top: 0;
                            font-size: 12px;
                            font-family: 'Metrica';
                            text-transform: uppercase;
                            letter-spacing: 4.5px;    
                            padding: 5px;       
                            border-radius: 5px;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             : ;
                            color: ${props => props.theme.colors.text_color_def};
                            background: ${ props => props.theme.colors.back_color_alt + 80};
                        }

                        #git { display: inline-block; }
                    }
                }
            }

            &:nth-child(2) {
                display: flex;
                
                .switch {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    border: none;
                    outline: none;
                    font-size: 16pt;
                    cursor: pointer;
                    overflow: hidden;
                    border-radius: 5px;
                    transition: color .3s;
                    color: var(--icon-color);
                    background: ${ props => props.theme.colors.theme_back_color };
                    filter: drop-shadow(-1px -1px 1px rgba(255, 255, 255, .3))
                            drop-shadow(4px 4px 4px rgba(0, 0, 0, .2))
                            drop-shadow(5px 5px 5px rgba(0, 0, 0, .2));
        
                    .theme {
                        display: none;
                    }
        
                    .icon_lua{
                        position: absolute;
                        display: ${ props => props.theme.displays.lua_display };
                        top: 50%;
                        left: 50%;
                        color: ${ props => props.theme.colors.theme_icon_color };
                        font-weight: bold;
                        transform: translateY(-50%);
                    }
        
                    .icon_sol {
                        position: absolute;
                        display: ${ props => props.theme.displays.sol_display };
                        top: 50%;
                        left: -50%;
                        color: ${ props => props.theme.colors.theme_icon_color };
                        font-weight: bold;
                        transform: translateY(-50%);
                    }
                }

                .bars {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    border: none;
                    outline: none;
                    font-size: 16pt;
                    cursor: pointer;
                    overflow: hidden;
                    font-weight: bold;
                    border-radius: 5px;
                    transition: color .3s;
                    filter: drop-shadow(-1px -1px 1px rgba(255, 255, 255, .3))
                            drop-shadow(4px 4px 4px rgba(0, 0, 0, .2))
                            drop-shadow(5px 5px 5px rgba(0, 0, 0, .2));
                    background: ${ props => props.theme.colors.back_color_alt };
                    color: var(--icon-color);
                    margin-left: 10px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    
                    .div {
                        position: absolute;
                    }
                    .humberger {
                        margin-top: 8px;
                        color: ${ props => props.theme.colors.text_color_def };
                        transition: color .3s;
                    }
                    &:hover .humberger { color: #fff; }
                }
            }
        }
    }
`;
