// TASK 1


var date = new Date();

var title = document.getElementById("title");
var time = date.getHours();

if (time >= 6 && time < 12) {
    title.innerHTML = "Sabahın xeyir";
    document.body.style.backgroundColor = "cyan";
    alert("Saat : " + date.getHours() + ":" + date.getMinutes() + "\nSabahdır");
} else if (time >= 12 && time < 18) {
    title.innerHTML = "Günortan xeyir";
    document.body.style.backgroundColor = "orange";
    alert("Saat : " + date.getHours() + ":" + date.getMinutes() + "\nGünortadır");
} else if (time >= 18 && time <= 24){
    title.innerHTML = "Axşamın xeyir";
    document.body.style.backgroundColor = "gray";
    alert("Saat : " + date.getHours() + ":" + date.getMinutes() + "\nAxşamdır");
} else if (time >= 0 && time < 6){
    title.innerHTML = "Gecən xeyir";
    document.body.style.backgroundColor = "black";
    alert("Saat : " + date.getHours() + ":" + date.getMinutes() + "\nGecədir");
    document.getElementById("title").style.color = "white";
}



// TASK 2

// document.getElementById("title").style.color = "black";
// var r = 4;
// title.innerHTML = Math.PI*Math.pow(r, 2);