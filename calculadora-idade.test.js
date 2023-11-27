const calculaIdade = require('./calculadora-idade');

test('verificar idade de Lucas', () => {
  expect(calculaIdade(10, 9, 2001)).toBe(22);
});
test('verificar idade de Juliana', () => {
    expect(calculaIdade(8, 2, 2001)).toBe(22);
  });
  test('verificar idade de Amelia', () => {
    expect(calculaIdade(24, 11, 1987)).toBe(36);
  });
  test('verificar idade de Lilly', () => {
    expect(calculaIdade(22, 12, 1985)).toBe(37);
  });
  test('verificar idade de Lilly', () => {
    expect(calculaIdade(22, 12, 2050)).toBe("insira um ano válido");
  });