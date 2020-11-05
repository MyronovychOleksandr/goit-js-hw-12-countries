// import css from "./css/style.css";
// const debounce = require("lodash.debounce");
import fetchCountries from './fetchCountries.js'
import debounce from 'lodash.debounce'


const input = document.getElementById('searchInput');


input.addEventListener('input', debounce((e) => {
  fetchCountries(e.target.value)
  
},700))

  
    


  // let baseUrl = `https://restcountries.eu/rest/v2/name/${e.target.value}`
  // return fetch(baseUrl)
  //   .then(res => console.log(res.json))
    // .then(data => console.log(data))

  // fetchCountries(e.target.value)
  // console.log(e.target.value);





















