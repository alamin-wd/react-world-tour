
import { useState } from 'react';
import './Country.css';
// import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {

    const { name, flags, population, area, cca3 } = country;

    const [visited, setvisited] = useState(false);

    const handleVisited = () => {
        setvisited(!visited);
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <img src={flags.png} alt="" />
            <h3 style={{ color: visited ? 'purple' : 'white' }}>Name: {name?.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>

            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            {visited ? 'I Have Visited This Country.' : 'I Want To Go There.'}

            <br />

            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>

            <button onClick={handleVisitedFlags}>Mark Flag</button>
            <hr />

            {/* <CountryDetail>
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            </CountryDetail> */}
        </div>
    );
};

export default Country;