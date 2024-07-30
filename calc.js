let string = " ";
const buttons = document.querySelectorAll("button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",function(e){
        if(e.target.innerHTML == "="){
            string = eval(string)
            document.querySelector("input").value = string;
            
        }
        else if(e.target.innerHTML == "C"){
            string = "";
            document.querySelector("input").value = string;
        }
        else if (e.target.innerHTML == "M+") {
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == "M-"){
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == "Sqrt"){
            string = Math.sqrt(string)
            document.querySelector("input").value = string;
           
         }
        // else if(e.target.innerHTML == "%" || "-" || "+" || "."||"*"|| "/") {
            
        // }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
        }
        // if (lastPressedEqual) {
        //     e.target.innerHTML = string;
        //     lastPressedEqual = false;
        //     document.querySelector("input").value = string;
        // }
        // else{
        //     e.target.innerHTML += string;
        //     document.querySelector("input").value = string;
        // }
    })

});

