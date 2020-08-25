import qs from 'qs';

import data from './data';

export const getLang = () => {
  const { search } = window.location;
  const query = qs.parse(search.replace(/\?/g, ''));
  return query.lang || 'en';
};

export const getLangData = lang => {
  const langData = data[lang];
  if (!langData) {
    throw new Error(`Lang "${lang}" does not exist.`);
  }
  return langData;
};

export const getData = () => {
  const lang = getLang();
  const langData = getLangData(lang);
  return langData;
};

export const getTranslation = (key, lang = 'en') => {
  const langData = getLangData(lang);
  const value = langData[key];
  if (!value) {
    throw new Error(`Key "${key}" does not exist in lang "${lang}".`);
  }
  return value;
};
