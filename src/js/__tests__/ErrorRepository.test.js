import ErrorRepository from '../ErrorRepository';

describe('ErrorRepository', () => {
  test('should return error description for known code and "Unknown error" for unknown code', () => {
    const repo = new ErrorRepository([
      [100, 'Некорректное имя персонажа'],
      [200, 'Недостаточно маны'],
    ]);

    expect(repo.translate(100)).toBe('Некорректное имя персонажа');
    expect(repo.translate(200)).toBe('Недостаточно маны');
    expect(repo.translate(999)).toBe('Unknown error');
  });

  test('should work when initialized with default empty repository', () => {
    const repo = new ErrorRepository();

    expect(repo.translate(1)).toBe('Unknown error');
  });
});