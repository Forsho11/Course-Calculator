class CalController {

    constructor(){        

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEL = document.querySelector("#hora");
        this.currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);
    }

    addEventListenerAll(element, events, fn){

        events.split(' ').foreach(event => {
            element.addEventListener(event, fn, false);
        })
    }


    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach( btn => {

            this.addEventListenerAll(btn, 'click drag', e => {
            
                console.log(btn.className.baseVal.replace("btn-",""));
            
            });
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=> {
                btn.style.cursor = 'pointer';
            })
        })
    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

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