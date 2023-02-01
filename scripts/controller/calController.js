class CalController {

    constructor(){

        this.displayCalc = "0";
        this.currentDate;
        this.initialize();
    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEL = document.querySelector("#hora");
        
        displayCalcEl.innerHTML = "4567"
        dateEl.innerHTML = "01/05/2022"
        timeEL.innerHTML = "00:00"
    }

    get displayCalc(){
        return this._displayCalc;
    }
    
    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }
}