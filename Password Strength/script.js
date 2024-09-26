var pass = document.getElementById("password");
var message = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        message.style.display = "block";
    }
    else{
        message.style.display = "none";
        pass.style.borderColor="black";
    }
    if(pass.value.length<4 && pass.value.length>0){
        str.innerHTML=" weak.";
        pass.style.borderColor="red";
        message.style.color="red";
    }
    else if(pass.value.length>=4 && pass.value.length<8)
        {
            str.innerHTML=" medium.";
            pass.style.borderColor="blue";
            message.style.color="blue";
    
        }
    else if(pass.value.length>=8){
        str.innerHTML=" strong";
        pass.style.borderColor="green";
        message.style.color="green";}

});