const passwordBox=document.getElementById("password");
const length=10;

const upperCase="QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase="qwertyuioplkjhgfdsazxcvbnm";
const number="0123456789";
const symbol="@#$%^&*()_+|{}[]<>/-=";
 function createPassword(){
     let password="";
     password+= upperCase[Math.floor(Math.random()*upperCase.length)];
     password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
     password+= number[Math.floor(Math.random()*number.length)];
     password+= symbol[Math.floor(Math.random()*symbol.length)];

     allChars= upperCase+lowerCase+number+symbol;
     while(length>password.length){
        password+= allChars[Math.floor(Math.random()*allChars.length)];
     }
     passwordBox.value=password;
 }

function copyPassword(){
    passwordBox.select();
    document.exeCommand("copy");
    document.querySelector(".copied").innerHTML="copied";
}