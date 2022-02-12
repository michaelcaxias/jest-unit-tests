const answerPhone = require('../src/asyncJest');

describe('1 - O retorno do telefonema', () => {
  test('atende', async () => {
    const resolve = await answerPhone(true);
    return expect(resolve).toBe('Oi!');
  });
  test('ocupado', async () => {
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error.message).toEqual('Infelizmente não podemos atender...');
    }
  });
});
