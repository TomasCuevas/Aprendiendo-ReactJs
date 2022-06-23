import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher( publisher );

  return (
    <>
      {
        heroes.map((hero) => (
          <li key={hero.id}>
            { hero.superhero }
          </li>
        ))
      }
    </>
  )
}