import { SetElem } from './setElements.js';
const elements = new SetElem({});

export class Markup {
    constructor() {
        this.expenses = elements.expense;
        this.income = elements.income;
        this.description = elements.description.value;
        this.value = elements.addValue;
    }

    /**
     * @description - метод addMarkup добавляет разметку в зависимости от значения селекта
     * @param {task} task - передаёться массив со значениями id, description, value
     * @param {elem} elem - передаётся знак (плюс или минус)
     * @return {undefined} - undefined
     */

    addMarkup(task, znak) {
        // this.newAddTask = task;
        // console.log(task);
        if (znak === '+') {
            this.income.insertAdjacentHTML('afterbegin', this.markupElem(task, '+'));
        } else if(znak === '-') {
            this.expenses.insertAdjacentHTML('afterbegin', this.markupElem(task, '-'));

        };       
    }

    /**
     * @description - метод markupElem возвращает гипертекстовую разметку
     * @param {task} task - передаёться массив со значениями id, description, value
     * @param {znak} znak - передаётся знак (плюс или минус)
     * @return {markup} - markup
     */

    markupElem(task, znak) {
        this.value.value < 0 ? this.value.value *= -1 : this.value.value *= 1;
        return `
        <div class="item clearfix" data-id="${Date.now()}">
        <div class="item__description">${document.querySelector('.add__description').value}</div>
        <div class="right clearfix">
    <div class="item__value">${znak}${this.value.value}</div>
            <div class="item__delete">
                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
            </div>
        </div>
    </div>    `
    }
}

