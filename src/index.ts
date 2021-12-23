//1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.Правила:-Яйца варить 5 минут-Вместительность емкости не более 5 яиц одновременно
function getCookingTime(eggsAmount: number): number {
  const timeCooking = 5;
  const capacity = 5;
  const result = Math.ceil(eggsAmount / capacity) * timeCooking;
  return result;
}
getCookingTime(0);
getCookingTime(5);
getCookingTime(9);

//2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.
function getNumber(array: Array<number>): number[] {
  let result;
  let parityArr: string = parityCheckArr(array);
  if (parityArr === 'even') {
    result = array.filter((el) => el % 2 !== 0);
  } else {
    result = array.filter((el) => el % 2 === 0);
  }
  return result;
}

function parityCheckArr(arr: Array<number>): string {
  let even = 0;
  let odd = 0;
  arr.forEach((item) => {
    item % 2 === 0 ? even++ : odd++;
  });
  /*
  for (let i = 0; i < 3; i++) {
    arr[i] % 2 === 0 ? even++ : odd++;
  }
*/
  if (even > odd) {
    return 'even';
  } else {
    return 'odd';
  }
}

getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]);
getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]);

//3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).
interface elementArray {
  [propName: string]: string;
}
/*
interface T{
  [index: string]:string;
}
*/
function findTitle(arr: Array<elementArray>, str: string) {
  let arrIncludesTitle = arr.filter((el) => el.hasOwnProperty('title'));
  let result = arrIncludesTitle.map((el: elementArray) => {
    if (el.title.toLowerCase().indexOf(str) >= 0) {
      return el;
    }
  });
  return result.filter(Boolean);
}

let arr: Array<elementArray> = [{ title: 'Some title1' }, { title: 'I like JS' }, { user: 'This obj doesn’t have key title js' }, { title: 'Js - is the best!' }];
findTitle(arr, 'js'); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]

//4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке
function countCharacters(string: string) {
  string = string.replace(/[^a-zа-я0-9]+/g, '');
  const arrLetter: Array<string> = string.split('');
  const uniqueArr: Array<string> = uniqueArrLetters(arrLetter);
  const resultArr = createArr();

  function uniqueArrLetters(arrLetter: Array<string>) {
    let result: Array<string> = [...new Set(arrLetter)];
    return result;
  }

  function createArr() {
    let sumArr = [];
    for (let i = 0; i < uniqueArr.length; i++) {
      let tempArr = [];
      tempArr.push(uniqueArr[i]);
      tempArr.push(char_count(string, uniqueArr[i]));
      sumArr.push(tempArr);
    }
    return sumArr;
  }

  function char_count(string: string, letter: string) {
    let letter_Count = 0;
    let arrayLetter = string.split('');
    arrayLetter.forEach((letterArray) => {
      if (letterArray === letter) {
        letter_Count++;
      }
    });
    /*
    for (let position = 0; position < string.length; position++) {
      if (string.charAt(position) == letter) {
        letter_Count++;
      }
*/
    return letter_Count;
  }
  return Object.fromEntries(resultArr);
}

countCharacters('sparrow');
countCharacters('aabcddeffge');
countCharacters('a 2ab !d');

//5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.Палиндром - это слово, фраза, число или другая последовательность символов, которая читается так же, как вперед и назад, например, «мадам».
function getNextPalindrome(number: number) {
  if (number < 10) {
    return 11;
  }
  let result = number++;
  for (let i = number; i !== result; i++) {
    result = Number(i.toString().split('').reverse().join(''));
    if (i === result) {
      return result;
    }
  }
}

getNextPalindrome(7);
getNextPalindrome(99);
getNextPalindrome(132);
getNextPalindrome(888);
getNextPalindrome(999);

//6. Создать структуру данных Set, используя объект, создать методы add, remove, has
function ObjSet() {
  let items: any = {};
  let sizes = 0;
  class PublicSet {
    has(item: string) {
      return items.hasOwnProperty(item);
    }
    add(item: string) {
      if (this.has(item)) {
        return false;
      }
      items[item] = item;
      sizes++;
      return true;
    }
    remove(item: string) {
      if (!this.has(item)) {
        return false;
      }
      delete items[item];
      sizes--;
      return true;
    }
    size() {
      return sizes;
    }
  }
  return new PublicSet();
}

let newObjSet = new (ObjSet() as any)();
newObjSet.add('1');
newObjSet.add('2');
console.log(newObjSet.size());
newObjSet.add('1');
console.log(newObjSet.size());
console.log(newObjSet.has('1'));
newObjSet.remove('1');
console.log(newObjSet.has('1'));
console.log(newObjSet.size());
