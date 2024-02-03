import Character from '../app';

test('should an error be trown', () => {
  expect(() => {
    new Character('Boomer', 'BabaYaga');
  }).toThrow('Неизвестный тип');
});

test('should an error be trown', () => {
  expect(() => {
    new Character('Boomerrrrrrrr', 'Bowman');
  }).toThrow('Имя не соответствует критериям');
});
