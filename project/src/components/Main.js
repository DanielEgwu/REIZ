import React from 'react'
import Filter from './Filter'
import CountryList from './CountryList'


function Main() {

    return (
        <div className='cover'>
            <h4 className='text-center pb-4'>Countries in the world</h4>
            <div className='px-4 '>
                <div className='wrapper '>
                    <CountryList />
                </div>
            </div>
        </div>
    )
}

export default Main