import '../App.sass';

import { HexColorInput } from 'react-colorful';
import { PopoverPicker } from "./PopoverPicker";

export const TextColorPicker = ({ color, setColor }) => {
  return (
    <div className="textPicker">
      <h4>Text Color</h4>
      <div className="inputContainer">
        <div className="hexContainer">
          <span>#</span>
          <HexColorInput color={color} onChange={setColor} className="colorInput" /> 
        </div>
        <PopoverPicker color={color} onChange={setColor} />
      </div>
    </div>
  );
}