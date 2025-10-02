import { JwtAutGuard } from './jwt-aut.guard';

describe('JwtAutGuard', () => {
  it('should be defined', () => {
    expect(new JwtAutGuard()).toBeDefined();
  });
});
