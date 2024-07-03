import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            back_color_def: string;
            back_color_alt: string; 
            back_color_blur: string;

            text_color_def: string;
            text_color_alt: string;

            theme_icon_color: string;
            theme_back_color: string;
        }

        displays: {
            lua_display: string;
            sol_display: string;
        }
    }
}