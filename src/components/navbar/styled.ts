import styled from 'styled-components'



export const Navbar = styled.div`
    position: relaive;
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;

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

                .btn_link {
                    background: transparent;
                    border: none;
                    outline: none;
                    font-size: 14pt;
        
                    &:nth-child(1) {
                        display: flex;
                        align-items: center;
                        height: 40px;
        
                        img {
                            width: 50px;
                            height: 50px;
                        }
                        span {
                            font-size: 12pt;
                            font-weight: bold;
                            font-family: 'Metrica';
                            text-transform: uppercase;
                            color: ${props => props.theme.colors.text_color_def};
                            height: 40px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                    &:nth-child(2), &:nth-child(3),
                    &:nth-child(4), &:nth-child(5) {
                        position: absolute;
                        display: none;
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
                    }
                }
            }
        }
    }
`;
