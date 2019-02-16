export class SetElem {
    constructor() {
        this.addValue = document.querySelector('.add__value');

        this.btn = document.querySelector(".add__btn");
        this.budgetValue = document.querySelector('.budget__value');
        this.budgetIncomeValue = document.querySelector('.budget__income--value');
        this.budgetExpensesValue = document.querySelector('.budget__expenses--value');

        this.container = document.querySelector(".add__container #getBtn");
        this.contain = document.querySelector(".container");

        this.description = document.querySelector(".add__description");
        this.dataSet = document.querySelector('.budget__title--month');

        this.expense = document.querySelector(".expenses__list");
        
        this.income1 = document.querySelector(".add");
        this.income = document.querySelector(".income__list");
        
        this.options = document.querySelector('select').options;  

        this.select = document.querySelector("select");

        this.getBtn = document.querySelector('.ion-ios-checkmark-outline');
    }

    _shoiceOptions() {
        return this.selectVal = this.options[this.select.selectedIndex].text; 
      }


}

