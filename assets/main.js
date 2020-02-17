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
       let mustExpence = prompt('Введите обязательную статью расходов в этом месяце', ''),
            howMuch = +prompt('Во сколько обойдется?', '');

            
            if ((typeof(mustExpence) === 'string') && (typeof(mustExpence) != null) && mustExpence != '' && howMuch !== '' 
            && howMuch !== null && (typeof(howMuch) != null)) {
                appData.expences[mustExpence] = howMuch;
            } else {
                alert("Данные введены не верно!");
                i--;
                mustExpence;
                howMuch;
            }

    console.log(appData.expences);
};

appData.perDay = appData.moneyData / 30;

alert(appData.perDay);

if (appData.perDay < 100) {
    alert("Вы не богатый человек!");
} else if (appData.perDay > 500) {
    alert('Вы богатый человек!');
} else {
    alert('Средний достаток!')
};