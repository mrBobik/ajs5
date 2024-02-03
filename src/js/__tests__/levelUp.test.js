import Magician from '../Magician';

test('should change options with method levelUp', () => {
  const personage = new Magician('Boomer', 'Magician');
  personage.health = 50;
  personage.levelUp();
  const expected = {
    name: 'Boomer', type: 'Magician', health: 100, level: 2, attack: 12, defence: 48,
  };
  expect(personage).toEqual(expected);
});

test('should an error be trown', () => {
  expect(() => {
    const personage = new Magician('Boomer', 'Magician');
    personage.health = 0;
    personage.levelUp();
  }).toThrow('Персонаж мертв');
});
