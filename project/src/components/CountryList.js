import React, { Fragment, useEffect, useState, } from 'react';
import Filter from './Filter';
import Country from './Country';


function CountryList() {
    const [data, setData] = useState([]);
    const [sorted, setSorted] = useState([]);
    const [isLoaded, setisLoaded] = useState(false);
    const [region, setRegion] = useState();


    const desc = () => {
        const new_data = [...data].sort((a, b) => b.name.localeCompare(a.name));
        setSorted(new_data);
    }

    const asc = () => {
        const new_data = [...data].sort((a, b) => a.name.localeCompare(b.name));
        setSorted(new_data);
    }
    const filterArea = () => {
        const areafilter = data.filter(country => country.area < 65300);
        setData(areafilter);
        console.log(areafilter)
    }

    const oceanicRegion = () => {
        const searchfilter = ['Australia', 'New Zealand', 'Tuvalu', 'Samoa', 'Tonga', 'Papua New Guinea',
            'Solomon Islands', 'Vanuatu', 'Fiji', 'Palau', 'Micronesia', 'Marshall Islands', 'Kiribati', 'Nauru'
        ]
        setRegion(1)
        // const searchfilter = ['Afghanistan']
        const filter = data.filter(country => searchfilter.includes(country.name));
        setData(filter);
        console.log(filter)
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
            <Filter desc={desc}
                asc={asc}
                filterarea={filterArea}
                oceanicregion={oceanicRegion}
                region={region}
            />
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