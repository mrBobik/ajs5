import Undead from '../Undead';

test('should be right options for Undead', () => {
  const personage = new Undead('Boomer', 'Undead');
  const expected = {
    name: 'Boomer', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(personage).toEqual(expected);
});
