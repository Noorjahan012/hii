// Event registration form email validation
document.getElementById('regForm').addEvenListener('submit',function(e){
e.preventDefault();
var email=document.getElementById('email').value;
var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
if(!pattern.test(email))
{
document.getElementById('msg').textContent=
"enter a valid email address';
return;
}
document.getElementById('msg').textContent=
'registration successful!';
});
