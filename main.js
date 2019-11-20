function validation(){
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cPassword= document.getElementById('cPassword').value;
    var mobile = document.getElementById('mobile').value;
    var comment = document.getElementById('coment').value;

    var usercheck = /^[A-Za-z. ]{3,30}$/;
    var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/; 

    var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

    var mobilecheck = /^[789][0-9]$/;

    if(usercheck.test(fName)){
        document.getElementById('fnameerror').innerHTML = " ";
    }else{
        document.getElementById('fnameerror').innerHTML = " First name is Invlaid";
    }

    if(passwordcheck.test(password)){
        docuemnt.getElementById('passworderror').innerHTML = "";
    }else{
        document.getElementById('passworderror').innerHTML = " Password is Invlaid";
    }

    if(usercheck.test(fname)){
        docuemnt.getElementById('cPassword').innerHTML = "";
    }else{
        document.getElementById('cPassword').innerHTML = "** First name is Invlaid";
    };
};
