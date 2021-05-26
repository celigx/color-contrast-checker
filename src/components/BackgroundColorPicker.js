import '../App.sass';

import { HexColorInput } from 'react-colorful';
import { PopoverPicker } from "./PopoverPicker";
import { convertHexCode } from "../utils/util";

export const BackgroundColorPicker = ({ color, setColor }) => {
  return (
    <div className="backgroundPicker">
      <h4>Background Color</h4>
      <div className="inputContainer">
        <div className="hexContainer">
          <span>#</span>
          {/* On input blur, convert 3-digit hex color code to 6-digit */}
          <HexColorInput color={color} onChange={setColor} onBlur={ () => convertHexCode({ color, setColor }) } maxLength={6} /> 
        </div>
        <PopoverPicker color={color} onChange={setColor} />
      </div>
    </div>
  );
}