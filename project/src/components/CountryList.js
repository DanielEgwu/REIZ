import React, { Fragment, useEffect, useState, createContext } from 'react';
import ReactPaginate from 'react-paginate';
import MyContext from './Context';
import Filter from './Filter';
import Country from './Country';


function CountryList() {
    const [data, setData] = useState([]);
    const [sorteddata, setsortedData] = useState([]);
    const [isLoaded, setisLoaded] = useState(false);

    const ASC = () => {
        const sorteddata = data.sort((a, b) => b.name.localeCompare(a.name))
        setData(sorteddata)
        console.log(data)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v2/all?fields=name,region,area');
                const countries = await response.json();
                setData(countries);
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
            <Filter asc={ASC} />
            {
              sorteddata.length > 0
              ? <Country country='me'>me</Country>
              : data.map(item => <Country key={item.name} country={item} />)
                // data.map(item => <Country key={item.name} country={item} />)
            }



        </Fragment>


    )
}

export default CountryList