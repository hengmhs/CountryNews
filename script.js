const searchCountryInfo = async (countryName) => {
    
    const img = document.getElementById('flag');

    const response = await fetch('https://restcountries.eu/rest/v2/name/' + countryName);
    const countryInfo = await response.json();

    //countryInfo is returned as an array
    console.log(countryInfo[0].capital);

    //flag image
    img.src = countryInfo[0].flag;

    //acronym form to be passed to News API
    countryAcronym = countryInfo[0].altSpellings[0];

    getHeadlines(countryAcronym);
}

const getCountryInfo = () => {
    const countryName = document.getElementById('country').value;
    return searchCountryInfo(countryName);
}

const getHeadlines = async (countryAcronym) => {
    const headlines = document.getElementById('headlines');
    headlines.innerHTML = '';
    const response = await fetch('https://gnews.io/api/v4/top-headlines?token=' + API_KEY + '&country=' + countryAcronym.toLowerCase())
    const news = await response.json();
    for (const article of news.articles){
        console.log(article.title);
        let headline = document.createElement('li');
        headline.appendChild(document.createTextNode(article.title));
        headlines.appendChild(headline);
    }
}

getCountryInfo();