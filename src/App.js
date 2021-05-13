import './App.sass';

import { TextColorPicker } from './components/TextColorPicker';
import { BackgroundColorPicker } from './components/BackgroundColorPicker';
import { useState } from 'react';

const App = () => {
  const [textColor, setTextColor] = useState('#2C423F')
  const [backgroundColor, setBackgroundColor] = useState('#AEECEF')

  return (
    <div className="app">

      <div className="heading">
        <h1 className="title">Color Contrast Checker</h1>
        <p className="subtitle">Calculate the contrast ratio of text and background colors</p>
      </div>

      <div className="borderContainer">
        <div className="leftContainer">
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
        </div>
      </div>

    </div>
  );
}

export default App;
