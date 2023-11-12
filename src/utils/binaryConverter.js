export const textToBinary = (text) => {
  let binaryResult = "";
  if (text) {
    for (let i = 0; i < text?.length; i++) {
      // Get the ASCII code for each character and convert it to binary (8 bits)
      const binaryChar = text[i]?.charCodeAt(0).toString(2).padStart(8, "0");
      binaryResult += binaryChar;
    }
    return binaryResult;
  }
  return NaN;
};
