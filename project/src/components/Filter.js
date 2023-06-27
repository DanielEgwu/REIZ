
import React, { useContext } from 'react'
import MyContext from './Context';

function Filter(props) {

    return (

        <div>
            {/* 
                {value => <p onClick={value}>keodek</p >}
            </ MyContext.Consumer > */}
            <div className='d-block d-md-flex justify-content-between'>

                <div className='d-md-flex  gap-3'>

                    <button  className='btn btn-success rounded-3 mb-md-2 mb-3' >Filter by smaller than Lithuania by area.</button>


                    <button className='btn btn-success rounded-3 mb-md-2 mb-3  '>Oceania region</button>
                </div>
                <div className=' d-md-flex d-block gap-3 '> 
                     <button  onClick={props.asc}className='btn btn-warning rounded-3 me-4' >Ascending</button>
                   
                    <button className='btn btn-warning rounded-3 '>Descending</button>
                </div>
            </div>
        </div>
    )
}

export default Filter