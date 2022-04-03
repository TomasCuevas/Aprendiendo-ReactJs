import { heroes } from '../database/heroes';

export const getHeroById = (id) => {
  const hero = heroes.find(hero => hero.id === id);
  if (!hero) {
    throw new Error(`No se encontro ningun hero con el ID ingresado. "${id}"`);
  }

  return hero;
}