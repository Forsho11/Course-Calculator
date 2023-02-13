class CalController {

    constructor(){        

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEL = document.querySelector("#hora");
        this.currentDate;
        this.initialize();
    }

    initialize(){
        setInterval(()=>{
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        }, 1000);
    }

    get displayTime(){
        this._timeEL.innerHTML = "00:00";
    }

    set displayTime(value){
        this._timeEL.innerHTML = value;
    }
    
    get displayDate(){
        this._dateEl.innerHTML = "01/05/2022";
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
    
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}