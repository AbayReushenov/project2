let rub = prompt('Какая сумма у Вас в рублях?', 100),
    usd = 75,
    eur = 85;
const usdSumm = rub/usd,
      eurSumm = rub/eur;  
alert (`На сумму ${rub} рублей вы сможете приобрести ${usdSumm.toFixed(2)} долларов США, или ${eurSumm.toFixed(2)} евро`); 
