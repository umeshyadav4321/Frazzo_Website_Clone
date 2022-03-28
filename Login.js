document.querySelector("#button").addEventListener("click", CONTINUE);
  var regdUsers = JSON.parse(localStorage.getItem("userDatabase"));
  function CONTINUE() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    
      var final=false;
      for (var i = 0; i < regdUsers.length; i++) {
        
        if (regdUsers[i].emailAdd == email && regdUsers[i].pass == password) {
          final=true;
        }
        
      }
      if(final==true)
      {
        alert("Login Successfull!");
          window.location.href = "index.html"
      }
      else{
        alert("Invalid Username of password")
      }
    }
  

  import { navbar } from "./components/navbar.js";
document.querySelector("#navbar-container").innerHTML= navbar()




import { footer } from "./components/footer.js";
document.querySelector("#footerContainer").innerHTML= footer()