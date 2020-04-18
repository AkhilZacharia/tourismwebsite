// email validation
function emailValidation(){
    var email = document.getElementById("email").value ;
    let format =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

   if (format.test(email)) {
        return true;
    }
    else{
        alert("Expected abc@mail.com or abc@mail.co.in");
        return false;
    }
}
// Password validation
function passTest(){
    var password = document.getElementById("password").value ;
    let passFormat =/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
    if((passFormat.test(password))){
        // alert("valid") ;
        return true;
    }
    else{
        alert("Password must contain Minimum 8 Characters with at least one number , one uppercase and one lowercase each");
        return false;
    }
}
// Strength validation
function passStrength(){
    var password = document.getElementById("password").value ;
    var text = document.getElementById('password-strength-text');
    if(password.length>10){
        text.innerText ="Strong";
        text.style.color = "green";
     }
    else if((password.length>=8) && (password.length<=10)){
        text.innerText ="Medium";
        text.style.color = "orange";
     }
    else{
        text.innerText ="Poor";
        text.style.color = "red";
     }
}
// phone validation
function phoneValid(){
    var phNo = document.getElementById("phNo").value ;
    let formatPhNo =/^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    if((formatPhNo.test(phNo))){
        // alert("valid") ;
        return true;
    }
    else{
        alert("Accepted phone number formats xxx xxx xxxx,xxx-xxx-xxxx,xxx.xxx.xxxx with 10 numbers");
        return false;
    }
}