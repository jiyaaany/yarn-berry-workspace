import '@emotion/native';
import '@emotion/react';
import { Colors } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
  }
}
