function validateForm(){

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

if(name==""){

alert("Please enter your name");

return;

}

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email address");

return;

}

document.getElementById("greeting").innerHTML="Welcome "+name+"! Your form has been submitted successfully.";

}