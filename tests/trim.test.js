import trimCurrency from '../index';

test('Remove whitespaces', () => {
  const currency = '1000 00';

  expect(trimCurrency(currency)).toBe(100000);
});

test('Remove symbols', () => {
  const currency = '$5000';

  expect(trimCurrency(currency)).toBe(5000);
});

test('Remove all non-digits', () => {
  const currency = '£ 1234.56';

  expect(trimCurrency(currency)).toBe(123456);
});

test('Always return a number', () => {
  const currency = 'R$ 1000,99';

  expect(trimCurrency(currency)).not.toBe('100099');
  expect(trimCurrency(currency)).toBe(100099);
});
