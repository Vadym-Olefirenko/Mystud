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

    countBtn.addEventListener('click', function () {

        if (appData.moneyData != undefined) {
            
        appData.perDay = (appData.moneyData / 30).toFixed();
    
        if (appData.perDay < 100) {
            values[2].textContent = "Вы не богатый человек!";
        } else if (appData.perDay > 500) {
            values[2].textContent = "Вы богатый человек!";
        } else {
            values[2].textContent = "Средний достаток!";
        };

        values[1].textContent = appData.perDay;
        } else {
            alert("Нажмите кнопку 'Начать расчет'!")
        }

    });

    chooseIncome.addEventListener('input', function () {
        let items = this.value;
        if ((typeof(items) === 'string') && items != '' && items != null) {
            appData.income = items.split(', ');
        } else {
            alert("Данные введены не верно!");
            items;
        }

        appData.income.forEach(function(item, i) {
            values[5].textContent = appData.income;
        });
    });

    checkSavingsBtn.addEventListener('click', function () {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    chooseSum.addEventListener('input', function () {
        if(appData.savings == true) {
            let saves = +chooseSum.value,
                savesParcents = +choosePercent.value;

                appData.monthIncome = (saves/100/12*savesParcents).toFixed(1);
                appData.yearIncome = (saves/100*savesParcents).toFixed(1);

            values[6].textContent = appData.monthIncome;
            values[7].textContent = appData.monthIncome;
        }
    });

    choosePercent.addEventListener('input', function () {
        if(appData.savings == true) {
            let saves = +chooseSum.value,
                savesParcents = +choosePercent.value;

                appData.monthIncome = (saves/100/12*savesParcents).toFixed(1);
                appData.yearIncome = (saves/100*savesParcents).toFixed(1);

            values[6].textContent = appData.monthIncome;
            values[7].textContent = appData.yearIncome;
        }
    });


    
let appData = {
    moneyData: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false,
};




