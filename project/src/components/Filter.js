
import React from 'react'

function Filter(props) {
    const customclass = 'btn btn-success rounded-3 mb-md-2 mb-3'
    return (

        < div >
            {/* 
                {value => <p onClick={value}>keodek</p >}
            </ MyContext.Consumer > */}
            < div className='d-block d-md-flex justify-content-between' >

                <div className='d-md-flex  gap-3'>

                    <button onClick={props.filterarea} className={`${props.region == 1 ? 'disabled':''} ${customclass} `}>Filter by smaller than Lithuania by area.</button>

                    <button onClick={props.oceanicregion} className='btn btn-success rounded-3 mb-md-2 mb-3  '>Oceania region</button>
                </div >
                <div className=' d-md-flex d-block gap-3 '>
                    <button onClick={props.asc} className='btn btn-warning rounded-3 me-4' >Sort by Ascending</button>

                    <button onClick={props.asc} className='btn btn-warning rounded-3 me-4' >Sort by Ascending</button>

                    {/* <button onClick={props.desc} className='btn btn-warning rounded-3 '> Sort by Descending</button> */}
                </div>
            </div >
        </div >
    )
}

export default Filter