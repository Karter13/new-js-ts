// Lesson 7

// https://learn.javascript.ru/settimeout-setinterval
// https://developer.mozilla.org/ru/docs/Web/API/WindowTimers/setTimeout
// https://learn.javascript.ru/callbacks
// https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F_%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2%D0%B0
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B0%D0%B8%CC%86%D0%BC%D0%B5%D1%80%D0%BE%D0%B2-%D0%B2-javascript-callback-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-settimeout-setinterval-%D0%B8-requestanimationframe-f73c81cfdc9d


//@ts-ignore
console.log('lesson 7');

// Task 01
// Написать функцию которая выводит в консоль фразу "I am a programmer".
// Вызвать эту функцию с задержкой 1с.

const printText = (): void => console.log("I am a programmer");
//setTimeout(printText, 1000);


// Task 02
// Написать функцию которая в качестве рагумента принимает переменную {name} и выводит в консоль фразу "My name is {name}".
// Вызвать эту функцию с задержкой 1с и передать в качестве аргумента любое имя.

const printText2 = ( name: string): void => console.log(`My name is ${name}`);
//setTimeout(printText2, 1000, 'Vital');

function printText3(name: string): void {
    setTimeout(() => console.log(`My name is ${name}`), 1000, name);
}
//printText3('Alex');

// Task 03
// Написать функцию которая  принимает 3 аргумента (перве 2 - колличество милисекунд, 3й - любое имя) и которая
// интервально вызывает функции из тасок 01 и 02 в соответствии с переданными аргументами

type ReturnedIdsType = {
    id1: NodeJS.Timeout;
    id2: number;
}

function intervalPrint(num1: number, num2: number, name: string): ReturnedIdsType {
    const id1:NodeJS.Timeout = setInterval(printText, num1);
    const id2:number = setInterval(printText2, num2, name);
    return {
        id1,
        id2
    }
}

//intervalPrint(1000, 3000, 'Eugene');


// Task 04
// модернизировать функцию из Task 03 так, что бы можно было остановить вызовы вложенных функций

const idsObj = intervalPrint(1000, 3000, 'Eugene');
clearInterval(idsObj.id1);
clearInterval(idsObj.id2);

// Task 05
// Написать функцию (randomNum) которая генерирует целое число от 0 до 20.
// Написать функцию (sumRandomNums) которая принимает 2 аргумента: 1) функция randomNum, 2) число сгенерированное randomNum
// функция sumRandomNums должна вернуть сумму всех сгенерированных randomNum чисел, количество этих чисел определяется
// 2ым аргументом sumRandomNums

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
// }

// const randomNum = (): number => Math.floor(Math.random() * 20);
//
// const sumRandomNums =(callBack: () => number, num: number): number => {
//     let sum: number = 0;
//     for (let i = 0; i <= num; i ++) {
//         const tempNum: number = callBack();
//         console.log(tempNum)
//         sum += tempNum;
//     }
//     return sum;
// }

const randomNum=():number=>Math.floor(Math.random()*20);

const sumRandomNums = (callback:()=>number,num:number, acc = 1):number=>{
    if(num===1){
        return acc;
    } else {
        let tempSum = acc + callback();
        return sumRandomNums(callback,num-1, tempSum);
    }
}

console.log(sumRandomNums(randomNum, 100));

//console.log(sumRandomNums(randomNum, randomNum()))

// Task 06**
// 1. написать функцию которая принимает число в качестве аргумента и возвращает функцию которая
// в свою очередь возвращает случайное целое число от 0 до числа передонного в  оригиальную функцию включительно.
// 2. спомощью функции из первого условия сделать 2 функции которые гененируют числа до 4 и 8 соответственно.
// 3. Написать функцию которая принимает в качестве аргументов объект functionObj, функции из условия 2 и любое число.
// данная функция должна в произвольном порядке применять функции из объекта к полученному числу столько раз, сколько
// сгенерирует функция с диапазоном до 8.

type FunctionsObjectType = {
    [key: number ] : (n: number) => number;
}

const functionObj: FunctionsObjectType = {
    '0': (n): number => n + 2,
    '1': (n): number => n * n,
    '2': (n): number => n - (n * 0.5),
    '3': (n): number => n * (n * 0.5),
    '4': (n): number => n * (n / 3),
}

type randomNumberType = () => number;

const getRange = (max: number):randomNumberType  => (): number => Math.floor(Math.random() * (max + 1));

const getFour: randomNumberType = getRange(4);
const getEight: randomNumberType = getRange(8);

const complexFunc = (obj: FunctionsObjectType, generateFour: randomNumberType, generateEight: randomNumberType, num: number) => {
    let resultNum = num;
    const countOfiteration = generateEight()
    for (let i = 0; i <= countOfiteration; i++) {
        resultNum = obj[generateFour()](resultNum);
    }
    return resultNum;
}

// console.log(complexFunc(functionObj, getFour, getEight, 5));

const key = '[object Object]';

let obj = {
    name: 'Eugene',
    age: 32,
    [key]: 'bla',
}

const getKey = () => Promise.resolve();

//@ts-ignore
obj['Hello world!'] = 'Yo Yo Yo';
//@ts-ignore
//console.log(obj[getKey()])
