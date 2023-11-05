import ErrorRepository from '../errorRepository';

describe('ErrorRepository', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
  });

  test('should add and translate errors', () => {
    errorRepo.addError(404, 'Page not found');
    errorRepo.addError(500, 'Internal server error');

    expect(errorRepo.translate(404)).toBe('Page not found');
    expect(errorRepo.translate(500)).toBe('Internal server error');
  });

  test('should return "Unknown error" for unknown error code', () => {
    expect(errorRepo.translate(403)).toBe('Unknown error');
  });
});
