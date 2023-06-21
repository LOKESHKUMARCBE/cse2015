function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("VALID E-MAIL ADDRESS!");
document.emailcheck.text1.focus();
return true;
}
else
{
alert("INVALID EMAIL ADDRESS");
document.emailcheck.text1.focus();
return false;
}
}