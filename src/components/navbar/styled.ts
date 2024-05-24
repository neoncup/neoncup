import styled from 'styled-components'



export const Navbar = styled.div`
    position: relaive;
    width: 100%;
    height: 100%;

    .contain {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;

        div {
            display: flex;
            flex-direction: column;

            &:nth-child(1) {
                height: 80%;
            }
            &:nth-child(2) {
                height: 20%;
            }

            .button {
                margin: 10px;
                width: 40px;
                height: 40px;
                font-size: 16pt;
                color: var(--icon-color);
                transition: color .3s;
                border-radius: 5px;
                overflow: hidden;
                cursor: pointer;
                filter: drop-shadow(-1px -1px 1px rgba(255, 255, 255, .3))
                        drop-shadow(4px 4px 4px rgba(0, 0, 0, .2))
                        drop-shadow(5px 5px 5px rgba(0, 0, 0, .2));

                &:hover, &actived:hover {
                    color: var(--text-color-def);
                }

                .actived {
                    position: absolute;
                    width: 2px;
                    height: 15px;
                    background: var(--icon-color);
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    border-radius: 2px;
                }
                div {
                    position: relative;
                    width: 100%;
                    height: 100%;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    overflow: hidden;

                    img {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .active {
                color: var(--text-color-def);

                .actived {
                    position: absolute;
                    width: 2px;
                    height: 15px;
                    background: var(--text-color-def);
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    border-radius: 2px;
                }
            }
        }
    }
`;
