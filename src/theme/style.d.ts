import 'styled-components';

import { OriginTheme } from './originTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultTheme, OriginTheme {}
}
