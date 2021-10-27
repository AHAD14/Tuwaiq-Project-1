let user=document.querySelector("#email")
let user=document.querySelector("#password")
let user=document.querySelector("login")



regisBtn.addEventListener('click', function(){


    if(email.value === ""||password.value === ""){
alert("please enter your Data");

    }else{
        window.localStorage.setItem('email', email.value);
        window.localStorage.setItem('password', password.value);
    }
setTimeout(()=>{

    window.localStorage='ahadp.html';
},1500)

});