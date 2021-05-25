const getCountryInfo = async (countryName) => {
    const response = await fetch('https://restcountries.eu/rest/v2/alpha/' + countryName);
    const countryInfo = await response.json();
    
    console.log(countryInfo);

    //population
    console.log(countryInfo.population);

    //capital
    countryInfo.capital;

    //flag image
    countryInfo.flag;
}

getCountryInfo('USA');
