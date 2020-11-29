'use strict';
let country = prompt('Укажите страну доставки.');

const china = 100;
const chile = 250;
const australia = 170;
const india = 80;
const jamaica = 120;

switch (country) {
  case null:
    country = 'Отменено пользователем!';
    break;
    
  case 'китай':
    country = `Доставка в Китай будет стоить ${china} кредитов.`;
    break;
    
  case 'чили':
    country = `Доставка в Чили будет стоить ${chile} кредитов.`;
    break;

  case 'австралия':
    country = `Доставка в Австралию будет стоить ${australia} кредитов.`;
    break;
    
  case 'индия':
    country = `Доставка в Индию будет стоить ${india} кредитов.`;
    break;
    
  case 'ямайка':
    country = `Доставка в Ямайку будет стоить ${jamaica} кредитов.`;
    break;

  default: country = 'В вашей стране доставка не доступна.';
}

alert(country);