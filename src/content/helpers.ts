import qs from 'qs';
import type { PageProps } from 'gatsby';
import { LANG_EN, Languages } from './constant';

import { data } from './data';

export const getLangFromLocation = (location: PageProps['location']) => {
  const { search } = location;
  const query = qs.parse(search.replace(/\?/g, ''));
  return query.lang || LANG_EN;
};

export const getLangData = (lang: Languages) => {
  const langData = data[lang];
  if (!langData) {
    throw new Error(`Lang "${lang}" does not exist.`);
  }
  return langData;
};
