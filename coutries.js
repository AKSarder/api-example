const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = (countries) => {

    const countriesContainer = document.getElementById("countries");
    countries.forEach(countries => {
        // console.log(countries.name.common);
        const div = document.createElement('div');
        div.classList.add("countries");

        div.innerHTML = `
        <h3>${countries.name.common}</h3>
        <p>${countries.name.official}</p>
        <button onclick="displayByName('${countries.name.common}')">Details</button>
        `;

        // const h3 = document.createElement('h3');
        // h3.innerText = countries.name.common;
        // div.appendChild(h3);

        // const p = document.createElement('p');

        // p.innerText = countries.name.official;

        // div.appendChild(p);
        countriesContainer.appendChild(div);
    })
}
const displayByName = (countryName) => {
    // console.log(countryName);
    const url = `https://restcountries.com/v3.1/name/${countryName}`;

    fetch(url)
        .then(res => res.json())

        .then(data => displayCountryDetail(data))
}

const displayCountryDetail = (counrty) => {
    console.log(counrty);

    const counrtyDiv = document.getElementById("countryDiv");
    for (const countryDetail of counrty) {
        console.log(countryDetail.name.common);

        counrtyDiv.innerHTML = `
        <h3>name of Country: ${countryDetail.name.common}</h3>

        <img width="200px" src ="${countryDetail.flags.svg}"/>
        <a href="${countryDetail.maps.googleMaps}">Maps</a>
        `;

    }






}

