import { useState } from 'react';
import './App.sass';

import { Heading } from './components/Heading';
import { TextColorPicker } from './components/TextColorPicker';
import { BackgroundColorPicker } from './components/BackgroundColorPicker';
import { ContrastRatio } from './components/ContrastRatio';
import { Output } from './components/Output';

const App = () => {
  const [textColor, setTextColor] = useState('#1B2524')
  const [backgroundColor, setBackgroundColor] = useState('#AEECEF')

  return (
    <div className="app">
      <Heading />
      <div className="mainContainer">
        <div className="pickerContainer">
          <div className="colorPicker">
            <TextColorPicker color={textColor} setColor={setTextColor} />
            <BackgroundColorPicker color={backgroundColor} setColor={setBackgroundColor} />
          </div>
          <ContrastRatio color={textColor} background={backgroundColor} />
        </div>
        <Output textColor={textColor} backgroundColor={backgroundColor} />
      </div>
    </div>
  );
}

export default App;
