# Bitrix24 Інтеграція

Цей репозиторій містить код для передачі даних з форми сайту до CRM Bitrix24 через REST API.

## Як це працює

1. Користувач заповнює форму на сайті.
2. Дані збираються та надсилаються до Bitrix24 за допомогою методу `crm.lead.add` та  `crm.contact.add`.
3. У CRM автоматично створюється новий лід з відповідними заповненими полями.

## Структура проєкту

* `/docs/` — документація та технічне завдання.
* `/src/` — основний код інтеграції (скрипти для відправлення та отримання даних).

## Авторизація

Використовується Webhook наступного формату:
[https://autorevizor.bitrix24.pl/rest/5/](https://autorevizor.bitrix24.pl/rest/5/)

## Контакти

Telegram: [@islyvenko](https://t.me/islyvenko)
