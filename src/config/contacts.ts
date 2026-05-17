export const contacts = {
  phoneDisplay: '+7 927 289 85 92',
  phoneHref: 'tel:+79272898592',
  secondaryPhoneDisplay: '39 52 11',
  secondaryPhoneHref: 'tel:+78412395211',
  email: 'novaprint58@yandex.ru',
  emailHref: 'mailto:novaprint58@yandex.ru',
  telegramHandle: '@lenasimanova',
  telegramUrl: 'https://t.me/lenasimanova',
  addressText: 'Пенза, улица Каракозова, 44',
  mapUrl: 'https://yandex.ru/maps/?text=%D0%9F%D0%B5%D0%BD%D0%B7%D0%B0%2C+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%B7%D0%BE%D0%B2%D0%B0%2C+44',
  routeUrl: 'https://yandex.ru/maps/?rtext=~53.196039,45.019551&rtt=auto',
} as const;

export const contactsString = `Новапринт — печать на ризографе в Пензе
Телефон: ${contacts.phoneDisplay}
Городской: ${contacts.secondaryPhoneDisplay}
Telegram: ${contacts.telegramHandle}
Email: ${contacts.email}
Адрес: ${contacts.addressText}`;
