import '../App.sass';

import { HexColorInput } from 'react-colorful';
import { PopoverPicker } from "./PopoverPicker";
import { convertHexCode } from "../utils/util";

export const TextColorPicker = ({ color, setColor }) => {
  return (
    <div className="textPicker">
      <h4>Text Color</h4>
      <div className="inputContainer">
        <div className="hexContainer">
          <span>#</span>
          <HexColorInput color={color} onChange={setColor} className="colorInput" onBlur={ () => convertHexCode({ color, setColor }) } maxLength={6} /> 
        </div>
        <PopoverPicker color={color} onChange={setColor} />
      </div>
    </div>
  );
}