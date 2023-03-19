import React, { useEffect, useState } from 'react'
import axios from 'axios'


const NewUserMain = () => {
    const [casesByCountry, setCasesByCountry] = useState([]);
    const [searchInput, setSearchInput] = useState('');
  
    useEffect(() => {

      axios.get('https://disease.sh/v3/covid-19/countries')
        .then(response => {

          setCasesByCountry(response.data);
        })
        .catch(error => {
          console.error('Error fetching COVID-19 data:', error);
        });
    }, []);
  

    const filteredCasesByCountry = casesByCountry.filter(country => {
      return country.country.toLowerCase().includes(searchInput.toLowerCase());
    });
  
    return (
      <div>
        
        <form>
            <div className='m-auto flex justify-center items-center mt-11 mb-11 align-middle'>
          
          <input
            id="search"
            className="block w-2/12  p-2 pl-10 text-sm text-black border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            value={searchInput}
            placeholder="Search a Country"
            onChange={event => setSearchInput(event.target.value)}
          />
          </div>
        </form>
        <table className="w-5/12 text-sm  m-auto text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              <th>Country</th>
              <th>Cases</th>
              <th>Deaths</th>
              <th>Recovered</th>
            </tr>
          </thead>
          <tbody>
            {filteredCasesByCountry.map(country => (
              <tr className="bg-white border-b text-black dark:border-gray-700 text-center" key={country.country}>
                <td className="px-6 text-black py-4">{country.country}</td>
                <td className="px-6 text-black py-4">{country.cases}</td>
                <td className="px-6 text-black py-4">{country.deaths}</td>
                <td className="px-6 text-black py-4">{country.recovered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default NewUserMain