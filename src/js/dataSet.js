/**
 * @description - функция dataSet необходима для установки даты, мясяца и года в нашу разметку
 * @param {elem} elem - сюда передаём экземпляр класса SetElem
 * @return {undefined} - undefined
 */

export function dataSet(elem) {
    const mounths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const data = new Date();
    elem.dataSet.textContent = `${data.getDate()} ${mounths[Number(data.getMonth())]} ${data.getFullYear()}`;
}