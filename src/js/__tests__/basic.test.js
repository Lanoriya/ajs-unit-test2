test('health display', () => {
  const about = 
  [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]
  about.sort((a, b) => b.health - a.health);

  const received = about.map(character => character.health);
  const expected = [100, 80, 10];
  expect(received).toEqual(expected);

  const sortedNames = about.map(character => character.name);
  const expectedName = ['маг', 'лучник', 'мечник'];
  expect(sortedNames).toEqual(expectedName);
})