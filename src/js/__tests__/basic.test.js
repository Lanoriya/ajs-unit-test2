import { sortHealth } from '../health';

test('health sort', () => {
  const heroes =
  [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const sortedHeroes = sortHealth(heroes);
  
  const expectedSortedHeroes =
  [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortedHeroes).toEqual(expectedSortedHeroes);
})