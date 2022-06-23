import { HeroCard } from '../components';

export const SearchPage = () => {

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5 mt-5">
          <h4>Searching</h4>
          <hr />

          <form>
            <input 
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />

            <button className="btn btn-outline-primary">
              Search
            </button>
          </form>
        </div>

        <div className="col-7 mt-5">
          <h4>Result</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            Not hero with <b>ABC</b>
          </div>

          {/* <HeroCard /> */}

        </div>
      </div>

    </>
  )
}