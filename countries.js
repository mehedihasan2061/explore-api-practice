const loadData = () => {     //array function no parameter declare
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data=>displayCountries(data))
}

const displayCountries =countries  => {
    const contain=document.getElementById('main-container') 
    countries.forEach(country => {
        
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('test')
        countryDiv.innerHTML = `
          <h1>Name: ${country.name.common} </h1>
          <h2>Capital: ${country.capital ? country.capital[0] :'No Capital' } </h2>
          <h3>Continent: ${country.continents[0]} </h3>
          <button onclick="loadDataDetail('${country.cca2}')" >Detail</button>
        `
        contain.appendChild(countryDiv)
    })
}

const loadDataDetail = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data=> countryDetail(data[0]))
}

const countryDetail = country => {
    
    const flagContain = document.getElementById('flag-contain')
        flagContain.innerHTML=''
        const flagDiv = document.createElement('div')
        flagDiv.innerHTML = `
          <h2>Country Name: ${country.name.common}</h2>
          <img src="${country.flags.png}">
        `
        flagContain.appendChild(flagDiv)
    
    
 }

loadData();   //function call