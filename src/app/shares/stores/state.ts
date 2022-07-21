import { Hero } from '../../hero';

export interface HeroListFilter {
  nameFilter: string;
}

export interface State {
  heroList: {
    items: Hero[];
    filter: HeroListFilter;
  };
  heroDetail: {
    data?: Hero | null;
  };
}

export const initialState: State = {
  heroList: {
    items: [],
    filter: {
      nameFilter: '',
    },
  },
  heroDetail: {},
};
