function scan(input) {
  let lines = input.split('\n');
  if (lines[0] === "") { lines.shift(); };
  digits(lines[0], lines[1], lines[2]);
  return '000000000';
};

function digits(line1, line2, line3) {
  var digits = [];
  for(var i = 0; i < 12; i = i+3) {
    let line1Chars = line1.slice(i, i+3),
        line2Chars = line2.slice(i, i+3),
        line3Chars = line3.slice(i, i+3);
    digits.push(parseDigit(line1Chars, line2Chars, line3Chars));
  }
  return digits;
}

function parseDigit(line1, line2, line3) {
  ["0", "1"].find(function(number) {
    return matchers[number](line1, line2, line3);
  });
}

var matchers = [];

matchers["0"] = matcherBuilder(`
 _ 
| |
|_|
`);

matchers["1"] = matcherBuilder(`
   
  |
  |
`);

function matcherBuilder(digit) {
  return function(line1, line2, line3) {
    let input = [line1, line2, line3].join("\n").trim(),
        match = digit.trim();
    console.log("'" + input + "'");
    console.log("'" + match + "'");
    return input === match;
  };
};

module.exports = scan;

