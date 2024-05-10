const equals = document.getElementById("equals");
if(equals) {
    console.log(equals.getAttribute("val"))
}

const inputs = document.getElementsByClassName("input")
const operators = document.getElementsByClassName("operator")
const display = document.getElementById("display")

Array.from(inputs).forEach(input => {
    input.addEventListener("click", function () {
        display.innerHTML+=input.innerHTML
    })
});

function toggleoperators(bool) {
    Array.from(operators).forEach(op => {
        if(bool){
            op.classList.remove("disabled")
        }
        else{
            op.classList.add("disabled")
        }
        
    })
}

const opsymbols = ['*', '+', '-', '/']
let currentoperator = null

Array.from(operators).forEach(operator => {
    operator.addEventListener("click", function () {
        currentoperator=operator.getAttribute("val")
        display.innerHTML+=currentoperator
        toggleoperators(false)
    })
});



const del = document.getElementById("del")
del.addEventListener("click",function () {
    const currentchar = display.innerHTML.charAt(display.innerHTML.length-1)
    if(opsymbols.includes(currentchar)){
        currentoperator=null
        toggleoperators(true)
    }
    display.innerHTML= display.innerHTML.substring(0,display.innerHTML.length-1)
})

const canc = document.getElementById("canc")
canc.addEventListener("click", function() {
    display.innerHTML = ""
    currentoperator=null
    toggleoperators(true)
})


const equal = document.getElementById("equals")
equal.addEventListener("click",function() {
    if(currentoperator){
        let expression = display.innerHTML.split(currentoperator)
        let sp1 = expression[0]
        let sp2 = expression[1]
        if(sp1.length>0 && sp2.length>0){
             let a = parseInt(sp1)
             let b = parseInt(sp2)

             let result = null
             switch (currentoperator) {
                case "/":
                    result = a/b
                    break;
                case "*":
                    result = a*b
                    break;
                case "-":
                    result = a-b
                    break;
                case "+":
                    result = a+b
                    break;
             
                default:
                    break;
             }
             display.innerHTML=result
             
             currentoperator=null
             toggleoperators(true)
        }
    }
    
})
