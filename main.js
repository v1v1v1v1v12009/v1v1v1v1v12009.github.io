div = document.getElementById("divi");
text = document.getElementById("texti");

function check(){
  if (text.value == 2009){
    div.style.visibility = "visible";
    alert("מחובר בהצלחה!");
  }else{
    alert("סיסמא שגויה!")
  }
}
