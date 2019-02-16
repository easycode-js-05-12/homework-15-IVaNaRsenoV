/**
 * @description - функция condition вставляет элемент в разметку
 * @param {elem} - этот параметр является экземпляром класса SetElem
 * @return {undefined} - undefined
 */

export function condition (elem) {
    elem.contain.insertAdjacentHTML('beforebegin', alert ());
    deleteAlert(elem);
}

const style = 'style="text-align:center; background:#fbff10a1; padding:10px; font-size:18px; width:70%; margin:0 auto; margin-top:10px; margin-bottom:10px; border-radius:15px;"';

/**
 * @description - функция alert выводит разметку для алерта
 * @return {markup} - markup
 */

function alert () {
    return `
	<div ${style} class="alert"> <span>Введите пожалуйста описание !</span> </div>
    `;
}

/**
 * @description - функция deleteAlert удаляет окно алерт по истечению времени
 * @return {undefined} - undefined
 */

function deleteAlert () {
    setTimeout(function(){
        let alert = document.querySelector('.alert');
        alert.parentElement.removeChild(alert);
    }, 5000);
} 