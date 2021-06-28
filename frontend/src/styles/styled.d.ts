import 'styled-components';
import { lightTheme, darkTheme } from './themes';

declare module 'styled-components' {
  type ThemeTypeLight = typeof lightTheme;
  type ThemeTypeDark = typeof darkTheme;
  
  export interface DefaultTheme extends ThemeTypeLight extends ThemeTypeDark {}
}