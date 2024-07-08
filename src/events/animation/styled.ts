import styled from 'styled-components'



export const Contain = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 990;

    .sphere {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 240px;
        height: 240px;
        overflow: hidden;

        .sphere_outside {
            position: relative;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            cursor: default;

            .tagcloud {
                display: block;
                width: 100%;
                height: 100%;
                font-weight: 600;
                letter-spacing: 2.4px;
            }

            .tagcloud--item {
                font-size: 10px;
                text-transform: uppercase;
                color: ${ props => props.theme.colors.text_color_def };
                &:hover {color: ${ props => props.theme.colors.theme_back_color }}
            }

        }
        
    }
    .images {
        position: absolute;
        width:100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .contain {
            position: relative;
            width: 280px;
            height: 280px;

            .image_1, .image_2 {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 50%;
                left: 50%;
                object-fit: cover;
                border-radius: 50%;
                transform: translate(-50%, -50%);
                filter: blur(15px);
                transition: display .5s;
            }
            .image_1 { display: ${props => props.theme.displays.wolf1_display}; }
            .image_2 { display: ${props => props.theme.displays.wolf2_display}; }
        }
    }
`;