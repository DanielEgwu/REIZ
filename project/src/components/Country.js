import React from 'react'

function Country({ country }) {
  return (
    <div>
      <div className='country-wrapper m-3'>
        <ul>
          <li>Name: {country.name}</li>
          <li>Region: {country.region}</li>
          <li>Area: {country.area}</li>
        </ul>
      </div>
    </div>
  )
}

export default Country