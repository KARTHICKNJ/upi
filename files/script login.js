function validateLogin(){
    var email = document.getElementById("email").value.toLowerCase();//converts all the user inputs from uppercase to lowercase
    console.log(email);
    var password = document.getElementById("password").value;
    var cpass = document.getElementById("cpassword").value;
    var ph = document.getElementById("ph").value;
    var user = document.getElementById("uname").value.trim();//-->get user name by removing the spaces in the starting and in the end of the input 
    console.log("The user name is",user);
    var show = ("Hi {{name}} welcome to our website")
    var enameKey = 0;
    var PassKey =0;
    var CpassKey =0;
    var PhoneKey =0;
    var UnameKey =0;
    if(user)
    {
    console.log(show.replace("{{name}}",user));//This is used to replace a string with another string.
    var divide = user.split(" ");//-->split() used to divide the string based upon the entity given insite the split() function
    console.log("The user name is divided based on space",divide)
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phformat = /^\d{10}$/; 
    if(email)
    {
    if(mailformat.test(email)==true){
      document.getElementById("email").style="border:3px solid green;";
    document.getElementById("mailerror").style="display:none;"
    document.getElementById("mailvalid").style="display:none;"
    document.getElementById("lgo").style="display: inline-block;"
    enameKey = 1;
    }
    else {
    document.getElementById("email").style="border:3px solid red"
    document.getElementById("mailvalid").style="display:block;color:red"
    document.getElementById("mailerror").style="display:none"
    document.getElementById("lgo").style="display: none;"
    enameKey = 0;
       
    }
  }
    else {
      document.getElementById("email").style="border:3px solid red";
    document.getElementById("mailerror").style="display:block;color:red"
    document.getElementById("mailvalid").style="display:none"
    document.getElementById("lgo").style="display: none;"
    enameKey = 0;
    }

 if(password){
  document.getElementById("password").style="border:3px solid green;";
  document.getElementById("passworderror").style="display:none;"
  document.getElementById("lgo1").style="display: inline-block;"
  console.log("Yes goto username");
   PassKey =1;
 }
 else{
  document.getElementById("password").style="border:3px solid red;"
  document.getElementById("passworderror").style="display:inline;color:red"
  document.getElementById("lgo1").style="display: none;"
  PassKey =0;
 }
if(cpass){
if(cpass!=password)
{
document.getElementById("cpassword").style="border:3px solid red;"
  document.getElementById("cpassworderror").style="display:inline;color:red"
  document.getElementById("lgo1.1").style="display:none;"
  document.getElementById("cpassnull").style="display:none;"
  CpassKey =0;
}
else if(cpass==password && password)
{
document.getElementById("cpassword").style="border:3px solid green;"
  document.getElementById("cpassworderror").style="display:none;"
  document.getElementById("lgo1.1").style="display: inline-block;"
  document.getElementById("cpassnull").style="display:none;"
  CpassKey =1;
}
}
else{
document.getElementById("cpassnull").style="display:inline;color:red"
document.getElementById("cpassworderror").style="display:none;"
document.getElementById("cpassword").style="border:3px solid red;"
document.getElementById("lgo1.1").style="display:none;"
CpassKey =0;
}
 if(ph){
 if(phformat.test(ph)==true)
 {
  document.getElementById("ph").style="border:3px solid green;"
  document.getElementById("pherror").style="display:none;"
  document.getElementById("phvalid").style="display:none;"
  document.getElementById("lgo2").style="display: inline-block;"
  PhoneKey =1;
 }
else{
document.getElementById("ph").style="border:3px solid red;"
document.getElementById("phvalid").style="display:block;color:red"
document.getElementById("pherror").style="display:none;"
document.getElementById("lgo2").style="display: none;"
PhoneKey =0;
}
}
else{
document.getElementById("ph").style="border:3px solid red;"
document.getElementById("pherror").style="display:block;color:red"
document.getElementById("phvalid").style="display:none;"
document.getElementById("lgo2").style="display: none;"
PhoneKey =0;
}
if(user)
{
if(user.length>=3)
{
  document.getElementById("uname").style="border:3px solid green;"
  document.getElementById("uerror").style="display:none;"
  document.getElementById("uvalid").style="display:none;"
  document.getElementById("lgo3").style="display: inline-block;"
  UnameKey =1;
}
else{
  document.getElementById("uname").style="border:3px solid red;"
  document.getElementById("uvalid").style="display:block; color:red"
  document.getElementById("uerror").style="display:none;"
  document.getElementById("lgo3").style="display: none;"
  UnameKey =0;
}
}
else{
document.getElementById("uname").style="border:3px solid red;"
document.getElementById("uerror").style="display:block; color:red"
document.getElementById("uvalid").style="display:none;"
document.getElementById("lgo3").style="display: none;"
UnameKey =0;
}
const redirectvalue = document.getElementById('redirect');
redirectvalue.addEventListener('click', function () {
                      if(enameKey==1 && PassKey==1 && CpassKey == 1 && PhoneKey==1 && UnameKey==1) {            
                window.location.href = "./UPI/index.html"; 
                // console.log("redirection");
            }        
        });
}
// var enameKey = 0;
// var PassKey =0;
// var CpassKey =0;
// var PhoneKey =0;
// var UnameKey =0;