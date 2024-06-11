
const alertUsername = document.querySelector('.username-alert');
const alertEmail = document.querySelector('.gmail-alert');
const alertNumber=document.querySelector('.mobile-alert');
const alertPass=document.querySelector('.pass-alert');
const usernameClick=document.querySelector('.username');
usernameClick.addEventListener('click',()=>{
    setInterval(()=>{ 
        userNameValid(); 
    },1000);
});
const mailClicked=document.querySelector('.gmail');
mailClicked.addEventListener('click',()=>{
    setInterval(()=>{ 
        mailValid(); 
    },1000);
});
const mobileClicked=document.querySelector('.mobile');
mobileClicked.addEventListener('click',()=>{
    setInterval(()=>{ 
        mobileValid(); 
    },1000);
});
const passClicked=document.querySelector('.pass');
passClicked.addEventListener('click',()=>{
    setInterval(()=>{ 
        passValid(); 
    },1000);
});
function userNameValid(){
    let userName=document.querySelector('.username');
    const specialCharacters=/[`!@#$%^&*()_+=/?]/;
    const digits=/[1234567890]/;
    if(!specialCharacters.test(userName.value) && !digits.test(userName.value)){
        alertUsername.style.display='block';
        alertUsername.style.color='red';
        alertUsername.innerHTML=`special character and digit needed`;
        userName.classList.add('alertBox-red');
    }
    else if(!specialCharacters.test(userName.value)){
        alertUsername.style.display='block';
        alertUsername.style.color='red';
        alertUsername.innerHTML=`One special character needed`;
        userName.classList.add('alertBox-red');
    }
    else if(!digits.test(userName.value)){
        alertUsername.style.display='block';
        alertUsername.style.color='red';
        alertUsername.innerHTML=`One numerical needed`;
        userName.classList.add('alertBox-red');
    }
    else if(userName.value.length<=6){
        alertUsername.style.display='block';
        alertUsername.style.color='red';
        alertUsername.innerHTML=`MIN 7 digits required`;
        userName.classList.add('alertBox-red');
    }
    else{
        alertUsername.style.display='none';
        userName.classList.add('alertBox-green');
    }
}
function mailValid(){
    let Gmail=document.querySelector('.gmail');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(Gmail.value)){
        alertEmail.style.display = 'block';
        alertEmail.style.color='red';
        alertEmail.innerHTML = 'Invalid Email Address';
        Gmail.classList.add('alertBox-red');
    }
    else {
        alertEmail.style.display = 'none';
        Gmail.classList.add('alertBox-green');
    }

}
function mobileValid(){
    let mobile=document.querySelector('.mobile');
    if(mobile.value.length<10){
        alertNumber.style.display='block';
        alertNumber.style.color='red';
        alertNumber.innerHTML=`Enter valid number`;
        mobile.classList.add('alertBox-red');
    }
    else{
        alertNumber.style.display='none';
        mobile.classList.add('alertBox-green');
    }
}
function passValid(){
    let pass=document.querySelector('.pass');
    const specialCharacters=/[`!@#$%^&*()_+=/?]/;
    const digits=/[1234567890]/;
    if(!specialCharacters.test(pass.value) && !digits.test(pass.value)){
        alertPass.style.display='block';
        alertPass.style.color='red';
        alertPass.innerHTML=`special character and digit needed`;
        pass.classList.add('alertBox-red');
    }
    else if(!specialCharacters.test(pass.value)){
        alertPass.style.display='block';
        alertPass.style.color='red';
        alertPass.innerHTML=`One special character needed`;
        pass.classList.add('alertBox-red');
    }
    else if(!digits.test(pass.value)){
        alertPass.style.display='block';
        alertPass.style.color='red';
        alertPass.innerHTML=`One numerical needed`;
        pass.classList.add('alertBox-red');
    }
    else if(pass.value.length<=6){
        alertPass.style.display='block';
        alertPass.style.color='red';
        alertPass.innerHTML=`MIN 7 digits required`;
        pass.classList.add('alertBox-red');
    }
    else{
        alertPass.style.display='none';
        pass.classList.add('alertBox-green');
    }
}