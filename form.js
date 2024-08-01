

const Name = document.getElementById('name');
const Email = document.getElementById('email');
const phone_no = document.getElementById('phone-no');
const form = document.getElementById('form');

const name_error = document.getElementById('name-error');
const email_error = document.getElementById('email-error');
const phone_no_error = document.getElementById('phone-no-error');

form.addEventListener('submit',(e)=>
{

    var email_check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var Name_check = /^[a-zA-Z\s-]+$/;
    var phone_check = /^\d{10}$/;

    if(Name.value.trim() == '' || Name.value.trim() == null)
    {
       e.preventDefault();
       name_error.innerHTML = "Name is required" ;   
     }
    else if(!Name.value.match(Name_check)) 
    {
        e.preventDefault();
        name_error.innerHTML = "Invalid name" ;  
    } 
    else{
        name_error.textContent="";
    }   
     if(!Email.value.match(email_check)) 
    {
        e.preventDefault();
        email_error.innerHTML = "Invalid Email" ;  
    }
    else{
        email_error.textContent="";
    }    
    if(!phone_no.value.match(phone_check))
    {
        e.preventDefault();
        phone_no_error.innerHTML = "Invalid number" ;   
    }
    else{
        phone_no_error.textContent="";
    }
}) 