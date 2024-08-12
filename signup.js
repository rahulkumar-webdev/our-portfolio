// let inputs = document.querySelectorAll("input");
// let btn = document.querySelector("button");
// let h1 = document.querySelector(".hh");


// function res(){
    
//     let name = document.getElementById("name").value;
//     document.write(`hello ${name} thanks you we will try respone as soon as possiable`)
//     console.log(h1);
    
// }


// btn.addEventListener("click",res);


function emailsend() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rahul.me.your@gmail.com",
        Password : "00B8AE1DC2B412F14742C7C2C6D232BE1C8A",
        To : 'rahul.me.your@gmail.com',
        From : "rahul.me.your@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}