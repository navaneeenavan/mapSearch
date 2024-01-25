const fs = require('fs');

const CODE_LENGTH = 3;
const TOTAL_CODES_GENERATED = 100;

function generateCode(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let retVal = 'KRI-';
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n)).toUpperCase();
  }
  return retVal;
}

for (let index = 0; index < TOTAL_CODES_GENERATED; index++) {
  const code = `${generateCode(CODE_LENGTH)}\n`;
  fs.appendFile('codes.txt', code, (err) => {
    if (err) throw err;
  });
}
