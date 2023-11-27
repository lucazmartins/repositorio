const calculaIdade = require('./calculadora-idade');

test('verificar idade de Lucas', () => {
  expect(calculaIdade(22, 7, 1987)).toBe();
});
test('verificar idade de Juliana', () => {
    expect(calculaIdade(27, 11, 1980)).toBe();
  });
  test('verificar idade de Amelia', () => {
    expect(calculaIdade(28, 12, 1980)).toBe();
  });
  test('verificar idade de Lilly', () => {
    expect(calculaIdade(30, 11, 1980)).toBe();
  });
      