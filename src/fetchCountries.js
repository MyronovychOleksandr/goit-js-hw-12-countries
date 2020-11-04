import template from './template.hbs'
import listCountriesTpl from './listcontriestemplate.hbs'

import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "../node_modules/@pnotify/core/dist/PNotify.css";

const countries = document.querySelector('.countries');
let baseUrl = `https://restcountries.eu/rest/v2/name/`


export default function fetchCountries(searchQuery) {
    countries.innerHTML = ''
    let url = `${baseUrl}${searchQuery}`
    fetch(url)
    .then(res => {
        if(res.status > 200) {
            error({
                title: "Country not found",
                text:
                  "Country not found",
                  delay: 2000
              })
        } else {
        return res.json()}
    })
    .then(countriesData => {
        if(countriesData.length > 10) {
            error({
                title: "Attention",
                text:
                "Too many matches found. Please enter a more specific query!",
                delay: 2000
              })
        } else if(countriesData.length >=2 && countriesData.length <= 10) {
            contriesListMarkap(countriesData)
        } else {
            countryMarkap(countriesData)
        }
    })
    .catch(error =>console.log(error))
}

function countryMarkap(data) {
    let countriesMarkap = template(data)
    countries.insertAdjacentHTML("afterbegin", countriesMarkap)
}

function contriesListMarkap(data) {
    const counriesList = listCountriesTpl(data)
    countries.insertAdjacentHTML('afterbegin', counriesList)
}

 









