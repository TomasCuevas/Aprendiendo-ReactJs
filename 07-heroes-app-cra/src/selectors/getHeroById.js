import { heroes } from '../database/heroes';

export const getHeroById = (id) => {
  const hero = heroes.find(hero => hero.id === id);
  if (!hero) {
    return;
  }

  return hero;
}