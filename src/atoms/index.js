import {atom} from 'recoil';

export const titlesState = atom({
  key: 'titles',
  default: []
});

export const searchState = atom({
  key: 'search',
  default: {}
});

export const pageState = atom({
  key: 'page',
  default: {page:1}
});

export const loadingState = atom({
  key: 'loader',
  default: false
});

export const aContent = atom({
  key: 'switch',
  default: false
});