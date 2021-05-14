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
        </div>

        {/* Display output */}
        <div className="outputContainer" style={{ background: backgroundColor }}>
          <h1 className="outputTitle" style={{ color: textColor }}>Title name</h1>
          <p className="outputText" style={{ color: textColor }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="outputAuthor" style={{ color: textColor }}>Author name</p>
        </div>

      </div>

    </div>
  );
}

export default App;
