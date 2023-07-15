(function(){

let screen1 = document.querySelector(".display")
let buttons1 = document.querySelectorAll(".button")
let equalsto1  = document.querySelector(".btn-equalsto")
let clear1 = document.querySelector(".btn-clear")

    buttons1.forEach(function(button){
        button.addEventListener("click",function(e){
             let getvalue = e.target.dataset.num;
             screen1.value += getvalue;
        })
    })
    

    equalsto1.addEventListener("click",function(e){
        if(screen1.value == ""){
            screen1.value="Please Enter";
        }
        else
        {
            let finalanswer= eval(screen1.value);
            screen1.value = finalanswer;
        }
        
    })

    clear1.addEventListener("click",function(e){
        screen1.value="";
    })
}
)()
