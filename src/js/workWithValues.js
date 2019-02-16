import { SetElem } from './setElements.js';
const element = new SetElem();

/**
 * @description - функция workWithValues необходима для того, чтобы считать цифры на табло и в полях формы income и expense
 * @param {e} e - элемент, на котором было произведено событие
 * @return {undefined} - undefined
 */

export function workWithValues (e) {
    // Найдем элемент галочку и крестик на странице, привяжем их к событию
    if (e.target.classList.contains('ion-ios-checkmark-outline') || e.target.classList.contains('ion-ios-close-outline')) {
        const itemValue = document.querySelectorAll('.item__value');
        let sumIncome = 0; // Наш счётчик для доходов
        let sumExpense = 0; // Наш счётчик для расходов
        
        for (let i = 0; i < itemValue.length; i++) {
            // Будем проводить проверку на наличие родителя инкам по родительскому элементу income__list и для expense__list, если
            // элементов нет, то обнулим наш счётчик доходов и расходов
            if (itemValue[i].closest('.income__list')) {
                sumIncome += Number(itemValue[i].textContent);
                console.log(sumIncome + ' sumIncome');
            } else if (itemValue[i].closest('.expenses__list')) {
                sumExpense += Number(itemValue[i].textContent);
                console.log(sumExpense + ' sumExpense');
            } else if (element.income.children.length === 0 || element.expense.children.length === 0) {
                sumIncome = 0;
                sumExpense = 0;
            }
        }
        element.budgetIncomeValue.textContent = '+' + sumIncome + ' $'; // Выведем значения на табло для доходов
        element.budgetExpensesValue.textContent = sumExpense + ' $'; // Выведем значения на табло для расходов
        element.budgetValue.textContent = sumIncome + sumExpense + ' $'; // Выведем значения на табло общей суммы доходов с расходами
        }
    }

           

