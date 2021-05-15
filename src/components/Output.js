import '../App.sass';

export const Output = ({ textColor, backgroundColor }) => {
  return (
    <div className="outputContainer" style={{ background: backgroundColor }}>
      <h1 className="outputTitle" style={{ color: textColor }}>Title name</h1>
      <p className="outputText" style={{ color: textColor }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p className="outputAuthor" style={{ color: textColor }}>Author name</p>
    </div>
  );
}