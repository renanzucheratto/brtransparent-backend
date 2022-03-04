export function convertNumberToRoman(num: number) {
    const convert = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  
    let result = '';
  
    for (const [key, value] of Object.entries(convert)) {
      const symbolCount = Math.floor(num / value);
  
      if (symbolCount > 0) {
        result += key.repeat(symbolCount);
        num = num % value;
      }
    }
  
    return result;
  }