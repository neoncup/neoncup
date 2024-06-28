import styled from 'styled-components'



export const Viewport = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: none;
    background: ${props => props.theme.colors.back_color_def};
    animation: backChange_01 .3s;
`;
