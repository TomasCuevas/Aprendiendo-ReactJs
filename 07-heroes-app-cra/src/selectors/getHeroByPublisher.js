import { heroes } from "../database/heroes";

export const getHeroByPublisher = ( publisher ) => {
  const validPublisher = ['DC Comics', 'Marvel Comics'];
  if ( !validPublisher.includes(publisher) ) {
    throw new Error(`Publisher "${publisher}" no es valido.`);
  }
  
  return heroes.filter(heroe => heroe.publisher === publisher);
}