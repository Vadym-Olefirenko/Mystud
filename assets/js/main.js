'use strict';

let money, time;

let start = document.getElementById('start'),
    resTable = document.querySelector('.result-table'),
    values = resTable.querySelectorAll('[class*="value"]'),
    expencesItems = document.getElementsByClassName('expenses-item'),
    acceptBtn1 = document.getElementsByTagName('button')[0],
    acceptBtn2 = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavingsBtn = document.getElementById('savings'),
    chooseSum = document.getElementById('sum'),
    choosePercent = document.getElementById('percent'),
    yearVal = document.querySelector('.year-value'),
    monthVal = document.querySelector('.month-value'),
    dayVal = document.querySelector('.day-value');

    start.addEventListener('click', function () {
        money = +prompt('Ваш бюджет на месяц', '');
        time = prompt('Введите дату в формате YYYY-MM-DD', '');

        while (money == '' || money == null || isNaN(money)) {
            money = +prompt('Ваш бюджет на месяц', '');
            time = prompt('Введите дату в формате YYYY-MM-DD', '');
        };

        appData.moneyData = money;
        appData.timeData = time;

        values[0].textContent = money.toFixed();

        yearVal.value = new Date(Date.parse(time)).getFullYear();
        monthVal.value = new Date(Date.parse(time)).getMonth() + 1;
        dayVal.value = new Date(Date.parse(time)).getDate();
    });

    acceptBtn1.addEventListener('click', function () {
        let expSum = 0;
        for( let i = 0; i < expencesItems.length; i++) {
            let mustExpence = expencesItems[i].value,
            howMuch = +expencesItems[++i].value;

            
            if ((typeof(mustExpence) === 'string') && (typeof(mustExpence) != null) && mustExpence != '' && howMuch !== '' && howMuch !== null && (typeof(howMuch) != null)) {
                appData.expences[mustExpence] = howMuch;
                expSum += howMuch;
            } else {
                alert("Заполните поля!");
            }
        }

        values[3].textContent = expSum;
           
    });

    acceptBtn2.addEventListener('click', function () {

        optionalExpItems.forEach(function (item, i) {
            let optionalAnswer =  item.value;
    
            appData.optionalExpences[i] = optionalAnswer;
            
            values[4].textContent += appData.optionalExpences[i] + '; ';
        });
  
    });

    
let appData = {
    moneyData: money,
    timeData: time,
    expences: {
       
    },
    optionalExpences: {

    },
    income: [],
    savings: true,
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

        appData.income.forEach(function(item, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + item);
        });
      
    }
};

// for (let k in appData) {
//     console.log("Наша программа включает в себя данные: " + k + " - " + appData[k]);
// };



