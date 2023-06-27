import React, { Fragment, useEffect, useState, } from 'react';
import Filter from './Filter';
import Country from './Country';


function CountryList() {
    const [data, setData] = useState([]);
    const [sorted, setSorted] = useState([]);
    const [reload, setReload] = useState(0);
    const [isLoaded, setisLoaded] = useState(false);
    const [region, setRegion] = useState(0);


    const desc = () => {
        const new_data = [...data].sort((a, b) => b.name.localeCompare(a.name));
        setSorted(new_data);
        setReload(0)
    }

    const asc = () => {
        const new_data = [...data].sort((a, b) => a.name.localeCompare(b.name));
        setSorted(new_data);
        setReload(0)
    }
    const filterArea = () => {
        const areafilter = data.filter(country => country.area < 65300);
        setData(areafilter);
        console.log(areafilter)
        setReload(0)
    }

    const oceanicRegion = () => {
        const searchfilter = ['Australia', 'New Zealand', 'Tuvalu', 'Samoa', 'Tonga', 'Papua New Guinea',
            'Solomon Islands', 'Vanuatu', 'Fiji', 'Palau', 'Micronesia', 'Marshall Islands', 'Kiribati', 'Nauru'
        ]
        setRegion(1)
        const filter = data.filter(country => searchfilter.includes(country.name));
        setData(filter);
        setReload(0);
    }
    const reset = () => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v2/all?fields=name,region,area');
                const countries = await response.json();
                setData(countries);
                setisLoaded(true);
                console.log(Math.ceil(countries.length / 5))
                setRegion(0)
                setReload(1)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
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
                reset={reset}
            />
            {
                sorted.length > 0 && reload == 0
                    ? sorted.map(item => <Country key={item.name} country={item} />)
                    : data.map(item => <Country key={item.name} country={item} />)
                // data.map(item => <Country key={item.name} country={item} />)
            }



        </Fragment>


    )
}

export default CountryList