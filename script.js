class{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear(){
        this.current-operand = ''
        this.previous-operand = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(Number){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){

    }
}






const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operations]');
const equalsButtons = document.querySelectorAll('[data-equals]');
const deleteButtons = document.querySelectorAll('[data-delete]');
const allClearButtons = document.querySelectorAll('[data-all-clear]');
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]');
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]');