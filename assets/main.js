'use strict';

let money = +prompt('Ваш бюджет на месяц', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    


let appData = {
    moneyData: money,
    timeData: time,
    expences: {
       
    },
    optionalExpences: {

    },
    income: [

    ],
    savings: false,
};

for( let i = 0; i < 2; i++) {
    let = mustExpence = prompt('Введите обязательную статью расходов в этом месяце', ''),
        howMuch = +prompt('Во сколько обойдется?', '');

    appData.expences[mustExpence] = howMuch;
};

// some

alert(appData.moneyData / 30);