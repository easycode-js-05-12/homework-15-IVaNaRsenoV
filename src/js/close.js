/**
 * @description - функция clear очищает блок в доходах и в расходах по нажатию на крестик
 * @param {e} e - элемент, на котором будет происходить событие
 * @return {undefined} - undefined
 */

export function clear(e) {
    if (e.target.classList.contains('ion-ios-close-outline')) {
    let id = e.target.closest('[data-id]').dataset.id; // Привязыеваем id к датасет родительского элемента
    deleteTodoFromView(id); // удаляем родительский элемент по id
    }
}

/**
 * @description - функция deleteTodoFromView удаляет блок в доходах и в расходах
 * @param {id} id - идентификатор
 * @return {undefined} - undefined
 */

function deleteTodoFromView(id) {
    const target = document.querySelector(`[data-id="${id}"]`);
    target.parentElement.removeChild(target);
}

