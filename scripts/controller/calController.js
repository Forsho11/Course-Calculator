class CalController {

    constructor(){        

        this._operation = [];
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

        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        })
    }

    clearall(){
        this._operation = [];
    }

    clearEntry(){
        this._operation.pop();
    }

    setError(){

        this.displayCalc = "Error";
    }

    getLastOperation() {
        this._operation[this._operation.length-1];
    }

    addOperation(value){

        this._operation.push(value);
    }

    execBtn(value){
        
        switch(value) {

            case 'ac':
                this.clearall();
                break;
                
            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                
                break;

            case 'subtração':

                break;

            case 'divisão':

                break;

            case 'multiplicação':

                break;

            case 'porcento':

                break;

            case 'igual':

                break;
            case 'ponto':
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5': 
            case '6': 
            case '7': 
            case '8': 
            case '9': 
                this.addOperation(parseInt(value));
                break;
            
            default:
                this.setError();
            break;
        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach(( btn, index) => {

            this.addEventListenerAll(btn, 'click drag', e => {
            
                let textBtn = btn.className.baseVal.replace("btn-","");
            
                this.execBtn(textBtn);

            })

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