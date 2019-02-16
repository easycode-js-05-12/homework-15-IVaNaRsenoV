import { condition } from './condition.js';

/**
 * @description - функция resetValue служит для обнуления данных после нажатия на кнопку
 * @param {elem} - elem, это параметр в который будет вставлен экземпляр класса setElem
 * @return {undefined} - undefined
 */

export function resetValue(elem) {
    if (elem.description.value === '') { condition(elem); }
    elem.description.value = ''; // Обнуляем данные описания
    elem.addValue.value = ''; // Обнуляем данные значения
}
