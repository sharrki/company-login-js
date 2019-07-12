// COMPANY LOGIN
"use strict"

// GLOBAL VARIABLES

//EVENT LISTENERS
document.getElementById("login").addEventListener("click",check );

// EVENT FUNCTIONS
function check (){

    let company = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (company == "wo2" && password == "www34567w"){
        alert("Sign In Successful");
    }else {
        alert("Sign In Unsuccessful");
    }
}


