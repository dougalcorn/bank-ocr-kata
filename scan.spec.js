var scan = require('./scan');

test("matches all zero", () => {
  let input = `
 _  _  _  _  _  _  _  _  _
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|

`.trim();
  expect(scan(input)).toBe('000000000');
});
