import Bowman from '../Bowman';

test('should be right options for Bowman', () => {
  const personage = new Bowman('Boomer', 'Bowman');
  const expected = {
    name: 'Boomer', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(personage).toEqual(expected);
});
