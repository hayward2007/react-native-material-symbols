import {Text} from 'react-native'
import MaterialSymbolsOutlinedFilled from '../MaterialSymbolsOutlinedFilled.ttf';
import MaterialSymbolsOutlinedNormal from './MaterialSymbolsOutlinedNormal.ttf';
import MaterialSymbolsRoundedFilled from './MaterialSymbolsRoundedFilled.ttf';
import MaterialSymbolsRoundedNormal from './MaterialSymbolsRoundedNormal.ttf';
import MaterialSymbolsSharpFilled from './MaterialSymbolsSharpFilled.ttf';
import MaterialSymbolsSharpNormal from './MaterialSymbolsSharpNormal.ttf';

const Icon = ({
  name,
  style="outlined",
  color = "black",
  fill = false,
  size = 24,
  weight = '400',
  grade = 0
}: {
  name: string,
  style: "outlined" | "rounded" | "sharp",
  color?: string,
  fill?: boolean,
  size?: number,
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
  grade?: number
}) => {
  return (
    <Text>
      {name}
    </Text>
  );
}
export default Icon;