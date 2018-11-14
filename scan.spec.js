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
