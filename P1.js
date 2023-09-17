let round = prompt("มึงอยากเล่นกี่รอบว่ามาไอหน้าหี")
for(var i = 0; i < round ; i++){
var answer=prompt("หัว หรือ หาง ว่ามาเลย")
var answer_random=""
if (Math.floor(Math.random()*10) <=4 ){
    answer_random="หัว"
}
else{
    answer_random="หาง"
}
if(answer == answer_random){
    alert("ยินด้วย คุณได้หัวล้าน")
}
else{
    alert("เสียใจด้วย คุณได้หางเต่า")
}
document.getElementById("game").innerHTML +="รอบที่ " + (i+1) + answer + ":" + answer_random+"<br>"
}
