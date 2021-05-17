import '../App.sass';
import { HiStar } from "react-icons/hi";

export const ContrastRatio = ({ color, background }) => {
  // Remove # from the hex color and match characters in pairs of two => '2C 42 3F'
  const hexColor = color.slice(1).match(/.{1,2}/g);
  const hexBackground = background.slice(1).match(/.{1,2}/g);

  // Convert hex color to rgb
  const rgbColor = hexColor.map(hex => parseInt(hex, 16));
  const rgbBackground = hexBackground.map(hex => parseInt(hex, 16));

  // Calculate luminance
  // https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
  const luminance = (r, g, b) => {
    const rgb = [r, g, b].map(value => {
      value /= 255;

      return value <= 0.03928
        ? value / 12.92
        : Math.pow( (value + 0.055) / 1.055, 2.4 );
    });
    
    return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
  }

  // Calculate contrast
  // https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
  const contrast = (rgb1, rgb2) => {
      const lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
      const lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
      const brightest = Math.max(lum1, lum2);
      const darkest = Math.min(lum1, lum2);
      return (brightest + 0.05) / (darkest + 0.05);
  }

  // If the number is 21 or 1, don't add decimals
  const contrastRatio = contrast(rgbColor, rgbBackground) === 21 || contrast(rgbColor, rgbBackground) === 1 ? contrast(rgbColor, rgbBackground) : contrast(rgbColor, rgbBackground).toFixed(2);

  const textRating = () => {
    if (contrastRatio >= 12 && contrastRatio <= 21) {
      return 'Excellent'
    } else if (contrastRatio >= 7 && contrastRatio < 12) {
      return 'Very good'
    } else if (contrastRatio >= 4.50 && contrastRatio < 7) {
      return 'Good'
    } else if (contrastRatio >= 3 && contrastRatio < 4.50) {
      return 'Poor'
    } else if (contrastRatio >= 1 && contrastRatio < 3) {
      return 'Very poor'
    }
  }

  return (
    <div className="contrastContainer">

      <div className="contrastTop">
        <h1 className="contrastRatioNum">{contrastRatio}</h1>
        <div className="contrastScore">
          <h1 className="scoreTitle">{textRating(contrastRatio)}</h1>
          <div className="stars">
            <HiStar size={24} />
            <HiStar size={24} />
            <HiStar size={24} />
            <HiStar size={24} />
            <HiStar size={24} />
          </div>
        </div>
      </div>

      <div className="contrastBottom">
        <div className="smallTextScore">
          <h1 className="smallTextTitle">Small text</h1>
          <div className="stars">
            <HiStar size={20} />
            <HiStar size={20} />
            <HiStar size={20} />
          </div>
        </div>
        <div className="largeTextScore">
          <h1 className="smallTextTitle">Large text</h1>
          <div className="stars">
            <HiStar size={20} />
            <HiStar size={20} />
            <HiStar size={20} />
          </div>
        </div>
      </div>

    </div>
  );
}