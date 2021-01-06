import countriesTpl from '../templates/countries.hbs';
import oneCountryTpl from '../templates/one-country.hbs';
import { notice } from './notifications';

const refs = {
    ulRef:document.querySelector(".country_query_results")
  }

function updateMarkup(data) {
    if (data.length === undefined) {
        notice({
            text: "Такой страны не существует, укажите более точные данные!",
            hide: true,
            delay: 2000,
        })
    }else if (data.length > 1 & data.length <= 10) {
        const markup = countriesTpl(data)
        refs.ulRef.insertAdjacentHTML('beforeend', markup)
    } else if (data.length > 10) {
        notice({
            text: "Найдено много совпадений, укажите более точные данные!",
            hide: true,
            delay: 2000,
 });
    } else if (data.length = 1) {
        const card = oneCountryTpl(data)
        refs.ulRef.insertAdjacentHTML('beforeend', card)
    } 
}

export default updateMarkup;