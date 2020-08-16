// @ts-ignore
console.log('lesson 8');

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else
// https://learn.javascript.ru/ifelse
// https://learn.javascript.ru/type-conversions
// https://habr.com/ru/company/ruvds/blog/347866/
// https://medium.com/@sergeybulavyk/%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-%D0%B2-javascript-35a15ddfc333

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B9_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80
// https://habr.com/ru/post/348298/

// https://learn.javascript.ru/switch
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch

// let age5: number = 50;
//
// if (age5 < 18) {
//     console.log('you are too young');
// } else if (age5> 17 && age5 < 60) {
//     console.log('cool, come in!');
// } else {
//     console.log('you are too old');
// }
//
// switch (true) {
//     case age5 < 18:
//         console.log('you are too young');
//         break;
//     case age5 > 17 && age5 < 60:
//         console.log('cool, come in!');
//         break;
//     default:
//         console.log('you are too old');
//         break;
// }
// let para = age5 === 18
//     ? "cool"
//     : age5 === 60
//         ? 'you are too old'
//         : age5 === 100
//             ? 'wow'
//             : 'bxcvxb';


// Task 01
// Дан массив minMax создайте 2 переменных min и max которые будут содержать соответствующие значения из
// массива minMax с помощью:
// 1. оператора If else
// 2. Тренарнго оператора

const minMax: Array<number> = [9, 1];

//1
// let min = 0;
// let max = 0;
// if (minMax[0] > minMax[1]) {
//     [max, min] = minMax;
// } else {
//     [min, max] = minMax
// }
//2
const [min, max] = minMax[0] > minMax[1] ? minMax : minMax.reverse();

//**
// у нас есть 2 переменные source1 =[1,2,3] и source2=[4,5,6]
// либо любое число, хочу получить результат который будет иметь вид [1,2,3,4,5,6] или [1,2,3,4,10]

// const result = Array.isArray(source2) ? [...source1, ...source2] : [...source1, source2];
// const result = [...source1, ...Array.isArray(source2) ? source2 : [source2]];


// Task 02
// написать функцию access котороя принимает число в качестве аргумента, если число меньше 0 или больше 90
// функция должна вывести в консоль 'access denied', если число меньше 18 вывести 'you are too young',
// если число в диапазоне от 18 до 60 включительно 'access confirmed', если больше 60 - 'you are too old',
// реализовать логику функций через:
// 1. if else
// 2. switch case
// 3. тренарный оператор

//1
// function access(num: number): void {
//     if (num < 0 || num > 90) console.log('access denied');
//     if (num < 18) console.log('you are too young');
//     if (num >= 18 && num <= 60) console.log('access confirmed');
//     if (num > 60) console.log('you are too old');
// }

//2
// function access(num: number): void {
//     switch (true) {
//         case num < 0 || num > 90:
//             console.log('access denied');
//             break;
//         case num < 18:
//             console.log('you are too young');
//             break;
//         case num >= 18 && num <= 60:
//             console.log('access confirmed');
//             break;
//         case num > 60:
//             console.log('you are too old');
//     }
// }

//3
// function access(num: number): void {
//     const result = (num < 0 || num > 90)
//         ? 'access denied'
//         : (num < 18)
//             ? 'you are too young'
//             : (num >= 18 && num <= 60)
//                 ? 'access confirmed'
//                 : 'you are too old';
//     console.log(result);
// }

// Comp1, Comp2
// ifTrue
// {ifTrue ? Comp1 : Comp2}
// {Comp2}
// {ifTrue && Comp1}
// {Comp2}

// Task 03
// дана следующая струкутура:

enum ACTION_TYPES  {
    INIT = 'INIT',
    SET_CURRENTPAGE = 'SET_CURRENTPAGE',
    SET_PAGE_AMOUNT = 'SET_PAGE_AMOUNT',
    CHANGE_ACTIVE_STATUS = 'CHANGE_ACTIVE_STATUS',
    COMPLICATED_ACTION = 'COMPLICATED_ACTION',
};

type StateType = {
    currentPage: number;
    pageAmount: number;
    isActive: boolean;
};

const initialState: StateType = {
    currentPage: 1,
    pageAmount: 1,
    isActive: false,
};

type complicatedPayloadType = {
    currentPage?: number;
    pageAmount?: number;
    isActive?: boolean;
}

type ActionType = {
    type: ACTION_TYPES,
    payload?: complicatedPayloadType,
};

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_CURRENTPAGE:
            return { ...state, ...action.payload }
        case ACTION_TYPES.SET_PAGE_AMOUNT:
            return { ...state, ...action.payload }
        case ACTION_TYPES.CHANGE_ACTIVE_STATUS:
            return { ...state, ...action.payload }
        case ACTION_TYPES.COMPLICATED_ACTION:
            return { ...state, ...action.payload }
        default:
            return state;
    }
    // const objAction = {
    //     [ACTION_TYPES.COMPLICATED_ACTION]: (state, action) => { ...state, ...action.payload },
    //     [ACTION_TYPES.CHANGE_ACTIVE_STATUS]: (state, action) => { ...state, ...action.payload },
    //     [ACTION_TYPES.SET_PAGE_AMOUNT]: (state, action) => { ...state, ...action.payload },
    //     [ACTION_TYPES.SET_CURRENTPAGE]: (state, action) => { ...state, ...action.payload },
    //     [ACTION_TYPES.INIT]: (state) => state,
    // };
    //
    // return objAction[action.type] ? objAction[action.type](state, action) : state;
}

// ниже приведен простой пример, который необходимо взять за основу

let initAction: ActionType = {
    type: ACTION_TYPES.INIT,
};

let state: StateType = reducer(initialState, initAction);
// console.log(state === initialState); // true

// Необходимо заполнить action и дописать код функции reducer c использование switch case, что бы
// следующие действия работали корректно:

let setCurrentPageAction: ActionType = {
    type: ACTION_TYPES.SET_CURRENTPAGE,
    payload: { currentPage : 2 },
};

state = reducer(state, setCurrentPageAction);
//console.log(state.currentPage === 2); //true
//console.log(state.currentPage === initialState.currentPage); //false
//console.log(initialState.currentPage === 1); //true
//
let setPageAmountAction: ActionType = {
    type: ACTION_TYPES.SET_PAGE_AMOUNT,
    payload: {pageAmount: 58},
};

state = reducer(state, setPageAmountAction);
// console.log(state.pageAmount === 58); //true
// console.log(state.pageAmount === initialState.pageAmount); //false


let setActiveStatusAction: ActionType = {
    type: ACTION_TYPES.CHANGE_ACTIVE_STATUS,
    payload: {isActive: true}
};

state = reducer(state, setActiveStatusAction);
// console.log(state.isActive); //true
// console.log(state.isActive === initialState.isActive); //false
//
let complicatedAction: ActionType = {
    type: ACTION_TYPES.COMPLICATED_ACTION,
    payload: {currentPage: 15, pageAmount: 95, isActive: false}
};

state = reducer(state, complicatedAction);
console.log(state.currentPage === 15); // true
console.log(state.pageAmount === 95); // true
console.log(state.isActive); //false