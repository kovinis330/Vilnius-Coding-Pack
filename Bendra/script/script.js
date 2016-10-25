function fonas() {
  document.body.style.backgroundColor = "blue";
}
function fonas2() {
  document.body.style.backgroundColor = "white";
}

document.addEventListener("keydown", function(event){
  if(event.keyCode === 87) {
    fonas();
  }
});
document.addEventListener("keyup", function(event){
  fonas2();
})


function backgroundOrange(){
  document.getElementById("cont").style.background = "orange";
}
function backgroundRed(){
  document.getElementById("cont").style.background = "#F44336";
}
function backgroundIndigo(){
  document.getElementById("cont").style.background = "#5C6BC0";
}
function backgroundLgreen(){
  document.getElementById("cont").style.background = "#7CB342";
}
function backgroundPurple(){
  document.getElementById("cont").style.background = "#BA68C8";
}
function backgroundYellow(){
  document.getElementById("cont").style.background = "#FFFF8D";
}
function backgroundOff(){
  document.getElementById("cont").style.background = "#CFD8DC";
}
