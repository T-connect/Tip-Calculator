
var income = document.getElementById("income");
var tithe = document.getElementById("tithe");
function calc(){
    if(income.value != '' ){
    tithe.value = income.value * 0.1;
    }
}

    function clean(){
        income.value = "";
        tithe.value = ""
    }
