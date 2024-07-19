
    function validationform(){
       var username=document.validateform.username.value;
       var password=document.validateform.password.value;
        if(username==null || username==""){
            alert("name should be more than six character");
            return false;
        }
       else if(password.length<6){
        alert("Password length must be Greater than six character");
        return false;
       }
    }