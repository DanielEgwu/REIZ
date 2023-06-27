import React, { Fragment, useEffect, useState,  } from 'react';
import Filter from './Filter';
import Country from './Country';


function CountryList() {
    const [data, setData] = useState([]);
    const [sorted, setSorted] = useState([]);
    const [isLoaded, setisLoaded] = useState(false);

    const desc = () => {
        const new_data = [...data].sort((a, b) => b.name.localeCompare(a.name))
        setSorted(new_data)
    }

    const asc = () => {
        const new_data = [...data].sort((a, b) => a.name.localeCompare(b.name))
        setSorted(new_data)
    }
    const filterArea = () =>{

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
            <Filter desc={desc} asc={asc} />
            {
              sorted.length > 0
              ? sorted.map(item => <Country key={item.name} country={item} />)
              : data.map(item => <Country key={item.name} country={item} />)
                // data.map(item => <Country key={item.name} country={item} />)
            }



        </Fragment>


    )
}

export default CountryList