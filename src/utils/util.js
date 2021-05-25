export const convertHexCode = ({ color, setColor }) => {
  // Remove # from the hex code
  const hexCode = color.replace(/\W/g, '');
  // Convert to 6 digit hex color code => 'convert F82 to FF8822'
  const threeDigit = hexCode.split('').map(x => x + x).join('');
  // Six digit hex color code
  const sixDigit = hexCode

  // If hexCode is 3 digit long, return threeDigit, else return sixDigit
  return hexCode.length === 3 
    ? setColor(threeDigit) 
    : setColor(sixDigit)
}