import styled from 'styled-components'



export const Home = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .cover-full {
        position: absolute;
        width: 100%;
        height: 100%;

        &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            background: rgba();
            backdrop-filter: blur(15px);
        }
    }

    .contain {
        position: relative;
        width: calc(100% - 40px);
        height: calc(100% - 10vh);
        filter: drop-shadow(-2px -2px 2px rgba(255, 255, 255, .3))
                drop-shadow(4px 4px 4px rgba(0, 0, 0, .2))
                drop-shadow(5px 5px 5px rgba(0, 0, 0, .2));
        background: var(--back-color-alt);
        border-radius: 10px;

        .cover-mini {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }
`;
