import getRockets from './rocketsAPI';

test('getRockets function', async () => {
  const rockets = await getRockets();
  expect(rockets.length).toBeGreaterThanOrEqual(0);
});
