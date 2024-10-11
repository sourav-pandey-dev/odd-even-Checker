
function OddEvenChecker(event){

    event.preventDefault();

    let num = document.getElementById("num").value;
    let result = document.getElementById("result");


    if(num==""){
        result.textContent = "Please enter a number";

    }
    else if(num%2==0){
        result.textContent= "the number "+ num+ " is an even number";
    }
    else {
        result.textContent = " the number "+num+" is an odd number";
    }


}
