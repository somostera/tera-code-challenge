import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        menu: {
            background: string;
        }
        colors: {
            primary: string;
            background: string;
            text: string;
            bcg_input: string;
        }
    }
}