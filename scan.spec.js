var scan = require('./scan');

test("matches all zero", () => {
  let input = `
 _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|

`;
  expect(scan(input)).toBe('000000000');
});
test("matches all ones", () => {
  let input = `

  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |

`;
  expect(scan(input)).toBe('111111111');
});
test("matches all twos", () => {
  let input = `
 _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
|_ |_ |_ |_ |_ |_ |_ |_ |_

`;
  expect(scan(input)).toBe('222222222');
});
test("matches all three", () => {
  let input = `
 _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
 _| _| _| _| _| _| _| _| _|
`;
  expect(scan(input)).toBe('333333333');
});
test("matches all four", () => {
  let input = `
                           
|_||_||_||_||_||_||_||_||_|
  |  |  |  |  |  |  |  |  |

`;
  expect(scan(input)).toBe('444444444');
});
test("matches all fives", () => {
  let input = `
 _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
 _| _| _| _| _| _| _| _| _|

`;
  expect(scan(input)).toBe('555555555');
});
test("matches all six", () => {
  let input = `
 _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
|_||_||_||_||_||_||_||_||_|

`;
  expect(scan(input)).toBe('666666666');
});
test("matches all sevens", () => {
  let input = `
 _  _  _  _  _  _  _  _  _ 
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |

`;
  expect(scan(input)).toBe('777777777');
});
test("matches all eight", () => {
  let input = `
 _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
|_||_||_||_||_||_||_||_||_|

`;
  expect(scan(input)).toBe('888888888');
});
test("matches all nines", () => {
  let input = `
 _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
 _| _| _| _| _| _| _| _| _|

`;
  expect(scan(input)).toBe('999999999');
});
test("matches all digits mixed", () => {
  let input = `
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|

`;
  expect(scan(input)).toBe('123456789');
});
