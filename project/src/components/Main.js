import React from 'react'
import CountryList from './CountryList'


function Main() {
    return (
        <div className='cover'>
            <h4 className='text-center pb-4'>Countries in the world</h4>
            <div className='px-4 '>
                <div className='d-md-flex gap-3 d-block  justify-content-between m-2 w-50'>
                    {/* <div className='d-md-flex d-block gap-3'> */}
                        <button className='btn btn-success rounded-3 mb-md-2 mb-3 w-100'>Filter by smaller than Lithuania by area.</button>
                        <button className='btn btn-success rounded-3 mb-md-2 mb-3 w-100'>Oceania region</button>
                    {/* </div> */}
                    <button className='btn btn-warning rounded-3 mx-auto'>Ascending</button>
                </div>
                <div className='wrapper'>
                    <CountryList/>
                </div>
            </div>
        </div>
    )
}

export default Main