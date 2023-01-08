# Financial application

Приложение для учета доходов и расходов по всем имеющимся у пользователя открытым счетам.

## Демо проекта

https://fin-app-eta.vercel.app/

---

### Главная страница

![Dashboard](https://github.com/PavelAxenov/Fin-app/blob/main/src/assets/images/demo/dashboard.jpg)

### Навигация

![menu](https://github.com/PavelAxenov/Fin-app/blob/main/src/assets/images/demo/menu.jpg)

### Авторизация и регистрация

![Autorize](https://github.com/PavelAxenov/Fin-app/blob/main/src/assets/images/demo/autorization.jpg)

![Register](https://github.com/PavelAxenov/Fin-app/blob/main/src/assets/images/demo/registration.jpg)

### Открытые счета

![Wallets](https://github.com/PavelAxenov/Fin-app/blob/main/src/assets/images/demo/wallets.jpg)

### Открытые счета

![reports](https://github.com/PavelAxenov/Fin-app/blob/main/src/assets/images/demo/reports.jpg)

### Редактирование и удаление счета

![edit](https://github.com/PavelAxenov/Fin-app/blob/main/src/assets/images/demo/edit.jpg)

![delete](https://github.com/PavelAxenov/Fin-app/blob/main/src/assets/images/demo/delete.jpg)

## Стек

-   Vue
-   Vuex
-   Vue-router
-   Composition API
-   SCSS

## Функциональность

-   Финансовое приложение с аторизацией регистрацией. Бэкенд отсутсвует.
-   На странице Дашборда можно переключаться между открытыми счетами для просмотра графиков доходов и расходов за год и за месяц
-   Реализован поиск по открытым счетам на странице Wallets.
-   Добавлена фильтрация и возможность экспорта таблицы расходов на странице Reports.
-   Настройки параметров пользователя и создания новых счетов доступны на странице Settings

## Директория /src

-   `/components` - папка содержит основные страницы проекта, блоки, ui-компоненты и вспомогательные элементы сайта
-   `/assets` - папка с картинками шрифтами и стилями
-   `/router` - папка с роутами приложения
-   `/store` - хранилище сайта
-   `/views` - папка с компонентами отображающими страницы приложения

## Запуск проекта

1. Скопировать проект

```bash
git clone https://github.com/PavelAxenov/Fin-app.git
```

2. Установка зависимостей

```bash
npm install
```

3. Запуск проекта

```bash
npm run serve
```
