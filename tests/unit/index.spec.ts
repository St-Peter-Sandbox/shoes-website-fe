import { SERVICE_NAME } from '../../src/index';

describe('shoes-web', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('shoes-web');
  });
});