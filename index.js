const form =document.querySelector('.box');
const username=document.querySelector('#username');
form.addEventListener('login',(e)=>
{
    e.preventDefault();
    console.log(username.value);
})