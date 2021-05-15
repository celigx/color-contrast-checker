import { useState } from 'react';
import './App.sass';

import { Heading } from './components/Heading';
import { TextColorPicker } from './components/TextColorPicker';
import { BackgroundColorPicker } from './components/BackgroundColorPicker';
import { ContrastRatio } from './components/ContrastRatio';
import { Output } from './components/Output';

const App = () => {
  const [textColor, setTextColor] = useState('#2C423F')
  const [backgroundColor, setBackgroundColor] = useState('#AEECEF')

  return (
    <div className="app">
      <Heading />
      <div className="borderContainer">
        <div className="pickerContainer">
          <div className="colorPicker">
            <TextColorPicker color={textColor} setColor={setTextColor} />
            <BackgroundColorPicker color={backgroundColor} setColor={setBackgroundColor} />
          </div>
          <ContrastRatio />
        </div>
        <Output textColor={textColor} backgroundColor={backgroundColor} />
      </div>
    </div>
  );
}

export default App;
