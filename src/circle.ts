import dotenv from 'dotenv';

const getSquare = (radius: number): number => {
  return Math.PI * radius * radius;
}

dotenv.config();

const stringRadius = process.env.radius;

const radius = parseInt(stringRadius, 10);

// есть негласное правило:
// если нормальные языки не могут чего-то сделать, то они выбросят исключение
// typescript же попробует продолжить работать

// python при попытке превратить не-число в число выбрасывал исключение,
// typescript пытается продолжить работать хоть как-то, вернув NaN - Not a number
// поэтому проверять тут надо не через try-catch, а именно через isNaN

if (isNaN(radius)) {
  throw new Error(`Не могу превратить значение ${stringRadius} в число`);
}

if (radius <= 0) {
  throw new Error('Радиус круга должен быть больше нуля');
}

const square = getSquare(radius);

console.log(`Площадь круга радиусом ${radius} равна ${square}`);

