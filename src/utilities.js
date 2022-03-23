module.exports.convertToJson = (data) => {
  let str = `{\n`;
  for (let idx = 0; idx < data.length; idx++) {
    let line = `    "`;
    let isColonSet = 0;
    let spaceSet = 0;
    while (idx < data.length && data[idx] !== "\n" && data[idx] !== "\r") {
      if (data[idx] === ":" && isColonSet === 0) {
        line += `": "`;
        isColonSet = 1;
        spaceSet = 1;
      } else if (data[idx] === " " && spaceSet === 1) {
        spaceSet = 0;
      } else {
        line += data[idx];
      }
      idx++;
    }
    str += line + `",\n`;
  }
  str += `}`;
  return str;
};
