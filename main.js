function login(){
     let username = document.getElementById('username').value
     let password = document.getElementById('password').value


     if (username == "" && password == ""){
          alert("Name & Password must be filled out");
          return false;
     }

     if(username== "Demo" && password== 2468){
          window.location.href = ("./loged.html");
     }
     else{
          alert("Incorrect username or password ")
     }
}