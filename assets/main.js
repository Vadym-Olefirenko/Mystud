'use strict';

let money, time;

function dayBudjet () {
    money = +prompt('Ваш бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (money == '' || money == null || isNaN(money)) {
        money = +prompt('Ваш бюджет на месяц', '');
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
    };
};

dayBudjet();
    
let appData = {
    moneyData: money,
    timeData: time,
    expences: {
       
    },
    optionalExpences: {

    },
    income: [],
    savings: true,
    calcExpences: function () {
        for( let i = 0; i < 2; i++) {
            let mustExpence = prompt('Введите обязательную статью расходов в этом месяце', ''),
                 howMuch = +prompt('Во сколько обойдется?', '');
     
                 
                 if ((typeof(mustExpence) === 'string') && (typeof(mustExpence) != null) && mustExpence != '' && howMuch !== '' && howMuch !== null && (typeof(howMuch) != null)) {
                     appData.expences[mustExpence] = howMuch;
                 } else {
                     alert("Данные введены не верно!");
                     i--;
                     mustExpence;
                     howMuch;
                 }
     
         console.log(appData.expences);
     };
    },
    chooseOptionalExpences: function () {
        for ( let i = 0; i < 3; i++) {
            let optionalAnswer = prompt('Статья необязательных расходов?', '');
    
            appData.optionalExpences['1'] = optionalAnswer;
    
            console.log(appData.optionalExpences);
        };
    },
    detectLevel: function () {
        appData.perDay = (appData.moneyData / 30).toFixed();

        alert(appData.perDay);
    
        if (appData.perDay < 100) {
            alert("Вы не богатый человек!");
        } else if (appData.perDay > 500) {
            alert('Вы богатый человек!');
        } else {
            alert('Средний достаток!')
        };
    },
    calcSavings: function () {
        if( appData.savings == true) {
            let saves = +prompt('Размер вашего депозита', ''),
                savesParcents = +prompt('Под какие проценты', '');
    
            appData.monthIncome = (saves/100/12*savesParcents).toFixed();
    
            alert(appData.monthIncome);
    
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход?(через запятую)', '');
        if ((typeof(items) === 'string') && items != '' && items != null) {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может ещё что-то?', ''));
            appData.income.sort();
        } else {
            alert("Данные введены не верно!");
            items;
        }

        appData.income.forEach(function(item) {
            alert("Способы доп. заработка: " + item);
        });
      
    }
};

for (let k in appData) {
    console.log("Наша программа включает в себя данные: " + appData[k]);
};