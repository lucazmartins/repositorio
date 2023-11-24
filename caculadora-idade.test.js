const calculaIdade = require('./calculadora-idade');

test('verificar idade de Lucas', () => {
  expect(calculaIdade(10, 9, 2001)).toBe(22);
});
test('verificar idade de Juliana', () => {
    expect(calculaIdade(8, 2, 2001)).toBe(22);
  });
  test('verificar idade de Amelia', () => {
    expect(calculaIdade(14, 3, 2020)).toBe(3);
  });
  test('verificar idade de Lilly', () => {
    expect(calculaIdade(14, 4, 2020)).toBe(3);
  });
      