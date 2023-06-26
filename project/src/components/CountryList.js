import React, { Fragment, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
// import 'react-paginate/dist/react-paginate.css';
import Country from './Country';


function CountryList() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoaded, setisLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v2/all?fields=name,region,area');
                const countries = await response.json();
                setData(countries);
                setTotalPages(Math.ceil(countries.length / 5));
                setisLoaded(true);
                console.log(Math.ceil(countries.length / 5))

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <Fragment>
            {data.map(item => <Country key={item.name} country={item} />)}
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                breakClassName="break"
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                // onPageChange={handlePageChange}
                containerClassName="pagination"
                activeClassName="active"
            />
        </Fragment>
    )
}

export default CountryList