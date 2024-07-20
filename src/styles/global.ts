import { createGlobalStyle } from 'styled-components'

import Nordic from '../assets/fonts/Nordic.ttf'
import Metric from '../assets/fonts/Metric.otf'
import PoppinsDef from '../assets/fonts/Poppins-def.ttf'
import PoppinsAlt from '../assets/fonts/Poppins-alt.ttf'

export default createGlobalStyle`


    @font-face {
        font-family: 'Nordic';
        src: url( '${Nordic}' );
    }
    @font-face {
        font-family: 'Metrica';
        src: url( '${Metric}' );
    }
    @font-face {
        font-family: 'Poppins-def';
        src: url( '${PoppinsDef}' );
    }
    @font-face {
        font-family: 'Poppins-alt';
        src: url( '${PoppinsAlt}' );
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins-def';

        .App {
            position: fixed;
            width: 100%;
            height: 100%;
            background: #242424;

            .button {
                position: relative;
                border: none;
                outline: none;
                padding: 10px;
            }

            .title {
                text-transform: uppercase;
                font-family: 'Metrica';
                letter-spacing: 2.5px;
                font-size: 10px;
                font-weight: normal;
            }
        }
    }
`
