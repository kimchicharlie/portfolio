import qs from 'qs';

import data from './data';

export const getLangFromLocation = location => {
  const { search } = location;
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
