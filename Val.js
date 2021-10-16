    
    var Email = document.forms['form']['Email'];
    var Password = document.forms['form']['Password'];

    
    var E_Error  = document.getElementById("E_Error");
    var Pas_Error = document.getElementById("Pas_Error");

    Email.addEventListener('textInput',E_Verify);
    Password.addEventListener('textInput',Pas_Verify);

  function validated() {
    if(Email.value.length < 9){
      Email.style.border = "1px solid red";
      E_Error.style.display="block";
      Email.focus();
      return false;
    }
    if(Password.value.length < 6){
      Password.style.border = "1px solid red";
      Pas_Error.style.display="block";
      Password.focus();
      return false;
    }
}
function E_Verify(){
    if(Email.value.length >=8){
    Email.style.border = "1px solid black";
    E_Error.style.display="none";
    return true;   
    }
}
function Pas_Verify(){
    if(Pass.value.length >=5){
        Password.style.border = "1px solid black";
        Pas_Error.style.display="none";
        return true;
    }
}
function check(){
    window.location.href="Form.html"
}