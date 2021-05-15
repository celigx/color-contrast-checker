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
            {/* Text color hex input and color picker */}
            <div className="textPicker">
              <h4>Text Color</h4>
              <TextColorPicker color={textColor} setColor={setTextColor} />
            </div>

            {/* Background color hex input and color picker */}
            <div className="backgroundPicker">
              <h4>Background Color</h4>
              <BackgroundColorPicker color={backgroundColor} setColor={setBackgroundColor} />
            </div>
          </div>

          <ContrastRatio />
        </div>

        <Output textColor={textColor} backgroundColor={backgroundColor} />
      </div>
    </div>
  );
}

export default App;
