const translations = {
  kk: {
    'hero-subtitle':        'QYZ UZATU',
    'invite-greeting':      'ҚҰРМЕТТІ<br>АҒАЙЫН-ТУЫС, БАУЫРЛАР,<br>ҚҰДА-ЖЕКЖАТ, НАҒАШЫ-ЖИЕН,<br>ҚҰРБЫ-ҚҰРДАС, ӨПКЕ-ЖЕЗДЕЛЕР,<br>ДОС-ЖАРАНДАР, ӘРІПТЕСТЕР,<br>КӨРШІЛЕР!',
    'invite-sub':           'СІЗ(ДЕР)ДІ ДӘСТҮРІМІЗГЕ САЙ<br>АЯУЛЫ ҚЫЗЫМЫЗ',
    'invite-main':          'ҚЫЗ ҰЗАТУ ТОЙЫНА<br>АРНАЛҒАН САЛТАНАТТЫ АҚ<br>ДАСТАРХАНЫМЫЗДЫҢ<br>ҚАДІРЛІ ҚОНАҒЫ<br>БОЛУҒА ШАҚЫРАМЫЗ!',
    'story-subtitle':       'ҚҰРМЕТТІ ТОЙ ИЕЛЕРІ',
    'event-h2':             'Той туралы',
    'cal-month':            'ТАМЫЗ 2026',
    'cal-day-1':            'ДС',
    'cal-day-2':            'СС',
    'cal-day-3':            'СР',
    'cal-day-4':            'БС',
    'cal-day-5':            'ЖМ',
    'cal-day-6':            'СБ',
    'cal-day-7':            'ЖС',
    'event-time-label':     'БАСТАУ УАҚЫТЫ',
    'event-city':           'ТАРАЗ ҚАЛАСЫ',
    'event-map-btn':        '📍 2GIS-те ашу',
    'countdown-h2':         'Тойға дейін',
    'timer-days':           'КҮН',
    'timer-hours':          'САҒАТ',
    'timer-minutes':        'МИНУТ',
    'timer-seconds':        'СЕКУНД',
    'rsvp-h2':              'Қатысуыңызды растаңыз',
    'rsvp-sub':             'Тойға дейін хабарласуыңызды сұраймыз',
    'label-name':           'Аты-жөніңіз',
    'placeholder-name':     'Аты-жөніңізді енгізіңіз',
    'label-attendance':     'Қатысуыңыз',
    'radio-yes':            'Келемін',
    'radio-no':             'Келе алмаймын, өкінішке орай',
    'radio-with-spouse':    'Иә, жұбайыммен боламын',
    'btn-submit':           'Жіберу',
    'btn-loading':          'Жіберілуде...',
    'form-success':         'Рахмет! Жауабыңыз қабылданды 🤍',
  },
  ru: {
    'hero-subtitle':        'ПРОВОДЫ НЕВЕСТЫ',
    'invite-greeting':      'УВАЖАЕМЫЕ<br>РОДНЫЕ И БЛИЗКИЕ,<br>ДОРОГИЕ СВАТЫ И РОДСТВЕННИКИ,<br>ДРУЗЬЯ, КОЛЛЕГИ И СОСЕДИ!<br>',
    'invite-sub':           'ПРИГЛАШАЕМ ВАС <br>РАЗДЕЛИТЬ С НАМИ РАДОСТНОЕ И ВОЛНИТЕЛЬНОЕ<br>СОБЫТИЕ - ПРОВОДЫ<br>НАШЕЙ ЛЮБИМОЙ ДОЧЕРИ',
    'invite-main':          ' <br> БУДЕМ СЧАСТЛИВЫ ВИДЕТЬ ВАС<br>СРЕДИ ПОЧЁТНЫХ ГОСТЕЙ<br>И ВМЕСТЕ С НАМИ ВСТРЕТИТЬ<br> ЭТОТ СВЕТЛЫЙ И НЕЗАБЫВАЕМЫЙ ВЕЧЕР!',
    'story-subtitle':       'УВАЖАЕМЫЕ ХОЗЯЕВА ТОРЖЕСТВА',
    'event-h2':             'О торжестве',
    'cal-month':            'АВГУСТ 2026',
    'cal-day-1':            'ПН',
    'cal-day-2':            'ВТ',
    'cal-day-3':            'СР',
    'cal-day-4':            'ЧТ',
    'cal-day-5':            'ПТ',
    'cal-day-6':            'СБ',
    'cal-day-7':            'ВС',
    'event-time-label':     'НАЧАЛО',
    'event-city':           'ГОРОД ТАРАЗ',
    'event-map-btn':        '📍 Открыть в 2GIS',
    'countdown-h2':         'До торжества',
    'timer-days':           'ДНЕЙ',
    'timer-hours':          'ЧАСОВ',
    'timer-minutes':        'МИНУТ',
    'timer-seconds':        'СЕКУНД',
    'rsvp-h2':              'Подтвердите участие',
    'rsvp-sub':             'Просим сообщить до начала торжества',
    'label-name':           'Ваше имя',
    'placeholder-name':     'Введите ваше имя',
    'label-attendance':     'Ваше участие',
    'radio-yes':            'Приду',
    'radio-no':             'К сожалению, не смогу прийти',
    'radio-with-spouse':    'Да, приду с супругом(ой)',
    'btn-submit':           'Отправить',
    'btn-loading':          'Отправляется...',
    'form-success':         'Спасибо! Ваш ответ принят 🤍',
  }
};

let currentLang = 'kk';

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  // innerHTML elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // persist
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'kk';
  applyLang(saved);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
});