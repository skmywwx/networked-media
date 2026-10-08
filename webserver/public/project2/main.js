// reference: class8 demo
let date = new Date();
console.log(date.toString());

// message show & disappear
// reference: https://www.youtube.com/watch?v=Az5J_EkhYCY&t=16s

// showing message
// reference: class8 demo; w3Schools HOW To 
function showMessage(){
    var message = document.getElementById("message");
    if(message.style.display === "none"){
        message.style.display = "block"; 
    }else{
        message.style.display="none"; 
    }
    
}

let intervalId = setInterval(showMessage, 10000); 