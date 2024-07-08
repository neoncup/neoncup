import styled from 'styled-components'



export const Viewport = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: none;
    color: ${ props => props.theme.colors.text_color_def };
    background: ${props => props.theme.colors.back_color_def};
    animation: backChange_01 .3s;

    .router {
        position: relative;
        width: 100%;
        margin-top: -70px;
    }
`;
