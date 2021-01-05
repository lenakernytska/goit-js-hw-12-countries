import countriesTpl from '../templates/countries.hbs';

const refs = {
    ulRef:document.querySelector(".country_query_results")
  }

function updateMarkup(data) {
    const markup = countriesTpl(data)
        console.log(markup);
        refs.ulRef.insertAdjacentHTML('beforeend', markup)
}

export default updateMarkup;