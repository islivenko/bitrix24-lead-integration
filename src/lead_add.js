const baseUrl = '<BITRIX_WEBHOOK>';

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// 1. Створення контакту
async function createContact(contactData) {
  const response = await fetch(`${baseUrl}/crm.contact.add.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: contactData })
  });
  const result = await response.json();
  if (result.error) throw new Error(result.error_description);
  return result.result; // Повертає ID створеного контакту
}

// 2. Створення ліда з прив'язкою до контакту
async function createLead(leadData) {
  const response = await fetch(`${baseUrl}/crm.lead.add.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: leadData })
  });
  const result = await response.json();
  if (result.error) throw new Error(result.error_description);
  return result.result; // Повертає ID створеного ліда
}

(async () => {
  try {
    // Крок 1: створюємо контакт
    const contactId = await createContact({
      NAME: "Artem",
      PHONE: [{ VALUE: "+48 503 900 890", VALUE_TYPE: "WORK" }],
      EMAIL: [{ VALUE: "Artem.ochigava@gmail.com", VALUE_TYPE: "WORK" }]
    });

    console.log("Створено контакт ID:", contactId);

    // Крок 2: створюємо лід, пов'язаний з цим контактом
    const leadId = await createLead({
      TITLE: "Заявка з сайту",
      STATUS_ID: "NEW",
      CONTACT_ID: contactId,
      ASSIGNED_BY_ID: 5,
      UF_CRM_1747506949814: "Audi",
      UF_CRM_1747507025622: "A5",
      UF_CRM_1747506893883: "Седан",
      UF_CRM_1747507050101: "F30",
      UF_CRM_1747507097639: "2000",
      UF_CRM_1747507142563: "Автоматична",
      UF_CRM_1747507182659: "Дизель",
      UF_CRM_1747507204879: "50000",
      UF_CRM_1747507226113: "50000 USD",
      UF_CRM_1747506866305: "Підбір",
      UF_CRM_1747507352891: [
        "Apple CarPlay",
        "Android Auto",
        "Інтерфейс Bluetooth"
      ],
      COMMENTS: "Заявка з форми сайту"
    });

    console.log("Створено лід ID:", leadId);
  } catch (error) {
    console.error("Помилка:", error.message);
  }
})();