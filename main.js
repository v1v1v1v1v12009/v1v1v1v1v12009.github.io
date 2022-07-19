div = document.getElementById("divi");
text = document.getElementById("texti");
pass = 2009

function check(){
  if (text.value == pass){
    div.style.visibility = "visible";
    alert("מחובר בהצלחה!");
  }
}
