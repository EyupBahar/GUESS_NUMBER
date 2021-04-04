let btn = document.querySelector("#btn")
let result = document.getElementById("result");
let wanted = parseInt(100*Math.random());
btn.addEventListener("click",find)
function find(){
    let num  = document.getElementById("num").value;
    console.log(wanted);
    console.log(result);
    console.log(num)
        if (parseInt(num) === wanted){
            result.textContent = "Congrats!!";
        }else if (parseInt(num) < wanted){
            result.textContent = "Try Higher Numbers!!";
        }else if (parseInt(num) > wanted){
            result.textContent = "Try Lower Numbers!!";
        }
    // location.reload();
    }