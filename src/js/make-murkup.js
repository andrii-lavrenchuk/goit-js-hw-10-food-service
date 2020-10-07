import '../styles.css';
import markupTmpl from '../templates/markup.hbs';
import markupData from '../menu.json';

export const menuRef = document.querySelector('.js-menu');

export const markup = markupTmpl(markupData);

menuRef.insertAdjacentHTML('beforeend', markup);
