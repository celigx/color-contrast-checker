import '../App.sass';
import { HiStar } from "react-icons/hi";

export const ContrastRatio = ({ color, background }) => {
  const textColor = () => {
    // Remove # from the hex code
    const hexCode = color.slice(1);
    // Convert to 6 digit code => 'convert F82 to FF8822' and match characters in pairs of two => '2C 42 3F'
    const threeDigit = hexCode.split('').map(x => x + x).join('').match(/.{1,2}/g);
    // Match characters in pairs of two => '2C 42 3F'
    const sixDigit = hexCode.match(/.{1,2}/g);
    // If hex code is 3 digit long, return threeDigit, else return sixDigit
    const hexColor = hexCode.length === 3 ? threeDigit : sixDigit;
    // Convert hex color code to rgb
    const rgbColor = hexColor.map(hex => parseInt(hex, 16));

    return rgbColor
  }

  const backgroundColor = () => {
    // Remove # from the hex code
    const hexCode = background.slice(1);
    // Convert to 6 digit code => 'convert 25F to 2255FF' and match characters in pairs of two => '2C 42 3F'
    const threeDigit = hexCode.split('').map(x => x + x).join('').match(/.{1,2}/g);
    // Match characters in pairs of two => '2C 42 3F'
    const sixDigit = hexCode.match(/.{1,2}/g);
    // If hex code is 3 digit long, return threeDigit, else return sixDigit
    const hexColor = hexCode.length === 3 ? threeDigit : sixDigit;
    // Convert hex color code to rgb
    const rgbColor = hexColor.map(hex => parseInt(hex, 16));

    return rgbColor
  }

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
  const contrastRatio = contrast(textColor(), backgroundColor()) === 21 || contrast(textColor(), backgroundColor()) === 1 ? contrast(textColor(), backgroundColor()) : contrast(textColor(), backgroundColor()).toFixed(2);

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

  const colorRating = () => {
    if (contrastRatio >= 12 && contrastRatio <= 21) {
      return '#C7F9CC'
    } else if (contrastRatio >= 7 && contrastRatio < 12) {
      return '#C7F9CC'
    } else if (contrastRatio >= 4.50 && contrastRatio < 7) {
      return '#FFF4AA'
    } else if (contrastRatio >= 3 && contrastRatio < 4.50) {
      return '#FDC4C4'
    } else if (contrastRatio >= 1 && contrastRatio < 3) {
      return '#FDC4C4'
    }
  }

  const smallColorRating = () => {
    if (contrastRatio >= 7 && contrastRatio <= 21) {
      return '#C7F9CC'
    } else if (contrastRatio > 4.50 && contrastRatio < 7) {
      return '#FFF4AA'
    } else if (contrastRatio >= 1 && contrastRatio <= 4.50) {
      return '#FDC4C4'
    }
  }

  const largeColorRating = () => {
    if (contrastRatio >= 4.50 && contrastRatio <= 21) {
      return '#C7F9CC'
    } else if (contrastRatio >= 3 && contrastRatio < 4.50) {
      return '#FFF4AA'
    } else if (contrastRatio >= 1 && contrastRatio < 3) {
      return '#FDC4C4'
    }
  }

  const starRating = () => {
    if (contrastRatio >= 12 && contrastRatio <= 21) {
      return (
        <div>
          <HiStar size={24} />
          <HiStar size={24} />
          <HiStar size={24} />
          <HiStar size={24} />
          <HiStar size={24} />
        </div>
      )
    } else if (contrastRatio >= 7 && contrastRatio < 12) {
      return (
        <div>
          <HiStar size={24} />
          <HiStar size={24} />
          <HiStar size={24} />
          <HiStar size={24} />
          <HiStar size={24} color={'#889EA9'} />
        </div>
      )
    } else if (contrastRatio >= 4.50 && contrastRatio < 7) {
      return (
        <div>
          <HiStar size={24} />
          <HiStar size={24} />
          <HiStar size={24} />
          <HiStar size={24} color={'#889EA9'} />
          <HiStar size={24} color={'#889EA9'} />
        </div>
      )
    } else if (contrastRatio >= 3 && contrastRatio < 4.50) {
      return (
        <div>
          <HiStar size={24} />
          <HiStar size={24} />
          <HiStar size={24} color={'#889EA9'} />
          <HiStar size={24} color={'#889EA9'} />
          <HiStar size={24} color={'#889EA9'} />
        </div>
      )
    } else if (contrastRatio >= 1 && contrastRatio < 3) {
      return (
        <div>
          <HiStar size={24} />
          <HiStar size={24} color={'#889EA9'} />
          <HiStar size={24} color={'#889EA9'} />
          <HiStar size={24} color={'#889EA9'} />
          <HiStar size={24} color={'#889EA9'} />
        </div>
      )
    }
  }

  const smTextStarRating = () => {
    if (contrastRatio >= 7 && contrastRatio <= 21) {
      return (
        <div>
          <HiStar size={20} />
          <HiStar size={20} />
          <HiStar size={20} />
        </div>
      )
    } else if (contrastRatio > 4.50 && contrastRatio < 7) {
      return (
        <div>
          <HiStar size={20} />
          <HiStar size={20} />
          <HiStar size={20} color={'#889EA9'} />
        </div>
      )
    } else if (contrastRatio >= 1 && contrastRatio <= 4.50) {
      return (
        <div>
          <HiStar size={20} />
          <HiStar size={20} color={'#889EA9'} />
          <HiStar size={20} color={'#889EA9'} />
        </div>
      )
    }
  }

  const lgTextStarRating = () => {
    if (contrastRatio >= 4.50 && contrastRatio <= 21) {
      return (
        <div>
          <HiStar size={20} />
          <HiStar size={20} />
          <HiStar size={20} />
        </div>
      )
    } else if (contrastRatio >= 3 && contrastRatio < 4.50) {
      return (
        <div>
          <HiStar size={20} />
          <HiStar size={20} />
          <HiStar size={20} color={'#889EA9'} />
        </div>
      )
    } else if (contrastRatio >= 1 && contrastRatio < 3) {
      return (
        <div>
          <HiStar size={20} />
          <HiStar size={20} color={'#889EA9'} />
          <HiStar size={20} color={'#889EA9'} />
        </div>
      )
    }
  }

  return (
    <div className="contrastContainer">

      <div className="contrastTop" style={{ background: colorRating(contrastRatio) }}>
        <h1 className="contrastRatioNum">{contrastRatio}</h1>
        <div className="contrastScore">
          <h1 className="scoreTitle">{textRating(contrastRatio)}</h1>
          <div className="stars">
            {starRating(contrastRatio)}
          </div>
        </div>
      </div>

      <div className="contrastBottom">
        <div className="smallTextScore" style={{ background: smallColorRating(contrastRatio) }}>
          <h1 className="smallTextTitle">Small text</h1>
          <div className="stars">
            {smTextStarRating(contrastRatio)}
          </div>
        </div>
        <div className="largeTextScore" style={{ background: largeColorRating(contrastRatio) }}>
          <h1 className="smallTextTitle">Large text</h1>
          <div className="stars">
            {lgTextStarRating(contrastRatio)}
          </div>
        </div>
      </div>

    </div>
  );
}