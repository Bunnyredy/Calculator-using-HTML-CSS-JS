var inp = document.querySelector("input");
// var butt = document.querySelectorAll("button");

var string = "";
var arr = Array.from(document.querySelectorAll("button"));   // Array.from(butt);
arr.forEach(button =>{
    button.addEventListener("click", function(e){
        var x = e.target.innerHTML;
        if(x == '='){
            string = eval(string);
            inp.value = string;
        }
        else if(x == 'AC'){
            string = "";
            inp.value = string;
        }
        else if(x == 'DEL'){
            string = string.substring(0, string.length-1);   //string = string.slice(0, -1);
            inp.value = string;
        }
        else{
            string+=x;
            inp.value = string;
        }
    })
})