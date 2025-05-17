// URL для создания нового лида
const url = '<BITRIX_WEBHOOK>/crm.lead.add.json';

// Данные нового лида
const leadData = {
  fields: {
    TITLE: "Заявка с сайта",
    STATUS_ID: "NEW",
    SOURCE_ID: "CALL",
    COMMENTS: "[p]\nНеобходимо авто с германии\n[/p]",
    CURRENCY_ID: "PLN",
    OPPORTUNITY: "0.00",
    IS_MANUAL_OPPORTUNITY: "N",
    OPENED: "Y",
    ASSIGNED_BY_ID: 5,
    CREATED_BY_ID: 5,
    CONTACT_ID: 7,

    // Кастомные поля
    UF_CRM_1742918062333: "",
    UF_CRM_1747506866305: "Осмотр одного авто",
    UF_CRM_1747506893883: "Седан",
    UF_CRM_1747506949814: "Audi",
    UF_CRM_1747507025622: "A5",
    UF_CRM_1747507050101: "F30",
    UF_CRM_1747507097639: "2000",
    UF_CRM_1747507142563: "Автоматическая",
    UF_CRM_1747507182659: "Дизель",
    UF_CRM_1747507204879: "50000",
    UF_CRM_1747507226113: "50000 USD",
    UF_CRM_1747507352891: [
      "Apple CarPlay",
      "Android Auto",
      "Интерфейс Bluetooth",
      "Разъем USB",
      "Беспроводная зарядка устройств"
    ]
  }
};

// Выполнение запроса
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(leadData)
})
.then(response => response.json())
.then(data => {
  console.log('Lead created:', data.result);
})
.catch(error => {
  console.error('Error creating lead:', error);
});