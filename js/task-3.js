'use strict';
const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("Введите пароль.");

/* if (message === null) { message = "Отменено пользователем!" }
else if (message === ADMIN_PASSWORD) { message = "Добро пожаловать!" }
else if (message !== ADMIN_PASSWORD) { message = "Доступ запрещен, неверный пароль!" } */

switch (message) {
  case null:
    message = "Отменено пользователем!";
    break;

  case ADMIN_PASSWORD:
    message = "Добро пожаловать!";
    break;
    
  default: message = "Доступ запрещен, неверный пароль!";
}


alert(message);