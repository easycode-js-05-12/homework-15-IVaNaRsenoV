import { Markup } from './markup.js';
import { clear } from './close.js'
import { workWithValues } from './workWithValues.js';
import { resetValue } from './reset.js';
const markupAdd = new Markup();

/**
 * @description - функция setEvents необходима для работы с событиями
 * @param {elem} elem - передаём экземпляр класса SetElem (где мы назначали классы переменным)
 *  @returns {undefined} - undefined
 */

export function setEvents(elem) {
    elem.select.addEventListener('change', () => elem._shoiceOptions()); // Тут происходит реагирование на изменение селекта
    elem.getBtn.addEventListener('click', () => markupAdd.addMarkup('description', elem._shoiceOptions())); // Тут добавляется разметка
    elem.contain.addEventListener('click',  (e) => clear(e)); // Тут очищается разметка
    document.querySelector('body').addEventListener('click', (e) => workWithValues(e)); // Тут происходит работа с таблом
    elem.getBtn.addEventListener('click', () => resetValue(elem)); // Обнуляем данные в полях ввода описания и значения после нажатия на кнопку
}