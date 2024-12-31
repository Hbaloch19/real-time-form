function data(){
let name     = document.getElementById("name").value ;
let password = document.getElementById("password").value ;
let email    = document.getElementById("email").value ;
let gender    = document.getElementById("gender").value ;
alert("Sign in Successfully");
document.write("<h2>Your User Name:</h2>" + name + "</br>" + "</br>");
document.write("<h2> Your Password: </h2>" + password + "</br>" +"</br>");
document.write("<h2> Your Email: </h2>" + email + "</br>"+ "</br>");
document.write(" <h2>Your Gender: </h2>" + gender );
}
