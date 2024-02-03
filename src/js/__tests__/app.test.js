import Character from '../app';

test('Should be correct name', () => {
  const personage = new Character('Boomer', 'Bowman');
  expect(personage.name).toEqual('Boomer');
});
