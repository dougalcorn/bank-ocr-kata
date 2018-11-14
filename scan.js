function scan(input) {
  let lines = input.split('\n');
  if (lines[0] === "") { lines.shift(); };
  return digits(lines[0], lines[1], lines[2]).join('');
};

function digits(line1, line2, line3) {
  let digits = [],
      length = Math.max(line1.length, line2.length, line3.length);
  for(var i = 0; i < length; i = i+3) {
    let line1Chars = line1.slice(i, i+3),
        line2Chars = line2.slice(i, i+3),
        line3Chars = line3.slice(i, i+3);
    digits.push(parseDigit(line1Chars, line2Chars, line3Chars));
  }
  return digits;
}

function parseDigit(line1, line2, line3) {
  return ["0", "1", "2","3","4","5","6","7","8","9"].find(function(number) {
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


matchers["2"] = matcherBuilder(`
 _ 
 _|
|_ 
`);

matchers["3"] = matcherBuilder(`
 _ 
 _|
 _|
`);

matchers["4"] = matcherBuilder(`
   
|_|
  |
`);

matchers["5"] = matcherBuilder(`
 _ 
|_ 
 _|
`);

matchers["6"] = matcherBuilder(`
 _ 
|_ 
|_|
`);

matchers["7"] = matcherBuilder(`
 _ 
  |
  |
`);

matchers["8"] = matcherBuilder(`
 _ 
|_|
|_|
`);

matchers["9"] = matcherBuilder(`
 _ 
|_|
 _|
`);

function matcherBuilder(digit) {
  return function(line1, line2, line3) {
    let input = [line1, line2, line3].join("\n").trim(),
        match = digit.trim();
    return input === match;
  };
};

module.exports = scan;

