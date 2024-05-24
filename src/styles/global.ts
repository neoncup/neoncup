import { createGlobalStyle } from 'styled-components'

import Nordic from '../assets/fonts/Nordic.ttf'
import Metric from '../assets/fonts/Metric.otf'
import PoppinsDef from '../assets/fonts/Poppins-def.ttf'
import PoppinsAlt from '../assets/fonts/Poppins-alt.ttf'

export default createGlobalStyle`


    @font-face {
        font-family: 'Nordic'
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
        font-family: 'Poppins-alt'
        src: url( '${PoppinsAlt}' )
    }

    :root {
        --back-color-def: #273348;
        --back-color-alt: #19222B;

        --text-color-def: #FFFFFF;
        --text-color-alt: #BBB7B0;
        --icon-color: #BBB7B0;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        .App {
            position: fixed;
            width: 100%;
            height: 100%;
            background: var(--back-color-alt);

            .button {
                position: relative;
                background: var(--back-color-alt);
                border: none;
                outline: none;
                padding: 10px;
            }
        }
    }
`
