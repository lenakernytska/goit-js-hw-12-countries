import './styles.css';
import debounce from 'lodash/debounce';
import fetchCountries from './js/fetchCountries';
import updateMarkup from './js/updateMarkup'


const refs = {
    inputRef: document.querySelector(".country_query"),
    ulRef:document.querySelector(".country_query_results")
  }

refs.inputRef.addEventListener('input', debounce(inputHandler, 500));

function inputHandler(event) {
    event.preventDefault()
    console.log(event)
    let name = refs.inputRef.value;
    console.log(name)
    refs.ulRef.innerHTML = "";
    fetchCountries(name).then(updateMarkup);
}

