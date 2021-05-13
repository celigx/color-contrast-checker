import { useState } from 'react';
import '../App.sass';

import { HexColorInput } from 'react-colorful';
import { PopoverPicker } from "./PopoverPicker";

export const BackgroundColorPicker = ({ color, setColor }) => {
  return (
    <div className="inputContainer">
      <div className="hexContainer">
        <span>#</span>
        <HexColorInput color={color} onChange={setColor} className="colorInput" /> 
      </div>
      <PopoverPicker color={color} onChange={setColor} />
    </div>
  );
}