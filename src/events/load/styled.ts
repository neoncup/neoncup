import styled from 'styled-components'



export const Loading = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .contain {
        position: relative;
        height: 100%;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;

        .logo {
            position: relative;
            height: 100px;
            width: 100px;
            margin-bottom: 20px;
            overflow: hidden;

            img {
                position: absolute;
                height: 100%;
                width: 100%;
            }
        }

        .anim {
            position: relative;
            width: 100px;
            height: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            overflow: hidden;

            .baranim {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 5px;
                background: #D4D0CC;
                animation: barAnimated 3s infinite;
            }
        }

        .span {
            position: absolute;
            padding: 10px;
            font-size: 12pt;
            color: transparent;
        }
    }

    @keyframes barAnimated {
        from {
            width: 0px;
        } to {
            width: 80px;
        }
    }
`;
