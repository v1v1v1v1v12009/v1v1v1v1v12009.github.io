text = document.getElementById("texti");
div = document.getElementById("divi");

function check(){
    if (text.value == 20000000000000000000000000000000000000000000000000000000000009){
        alert("סיסמא נכונה!");
        div.style.visibility = "visible";
    }else{
        alert("סיסמא לא נכונה!");
    }
}
