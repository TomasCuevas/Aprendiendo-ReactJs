import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search )
  const heroes = getHeroesByName( q );
  
  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = ( e ) => {
    e.preventDefault();

    navigate(`?q=${searchText}`);
  } 

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5 mt-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input 
              aria-label="search-input"
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button 
              aria-label="search-button"
              type="submit"
              className="btn btn-outline-primary mt-2"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7 mt-5">
          <h4>Result</h4>
          <hr />

          {
            (q.length <= 1) && (
              <div className="alert alert-primary">
                Search a hero
              </div>
            )
          }

          {
            (q.length > 0 && heroes.length === 0) && (
              <div className="alert alert-danger">
                Not hero with <b>{ q }</b>
              </div>
            )
          }

          {
            ( heroes.length > 0 ) && (
              heroes.map((hero) => (
                <HeroCard key={ hero.id } { ...hero } />
              ))
            )
          }

        </div>
      </div>

    </>
  )
}