import styled from 'styled-components'



export const Viewport = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: none;
    background: var(--back-color-def);
    animation: backChange_01 .3s;



    .contain {
        position: relative;
        padding: 20px 20px 20px 0;

        .navbar {
            background: var(--back-color-def);
            display: block;
            float: left;
            width: 100px;
            height: calc(100vh - 40px);
            animation: backChange_01 .3s;
        }
        .router {
            background: var(--back-color-alt);
            color: var(--text-color-def);
            display: block;
            float: right;
            padding: 30px;
            height: calc(100vh - 40px);
            width: calc(100vw - 120px);
            border-radius: 20px;
            animation: backChange_02 .3s;
            overflow: hidden;
        }
    }

    @keyframes backChange_01 {
        from { background: var(--back-color-alt); }
        to {background: var(--back-color-def);}
    }

    @keyframes backChange_02 {
        from { background: var(--back-color-def); }
        to {background: var(--back-color-alt);}
    }
`;
