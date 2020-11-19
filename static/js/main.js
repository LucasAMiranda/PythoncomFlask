let userLogin = function() {
    let form = document.getElementById("login-form");
    let email = form.elements.namedItem("email").value;
    let password = form.elements.namedItem("password").value;
    let credentials = "email = " + email + "&password=" + password;

    //instanciando um novo objeto Construtor Api
    const xml = new XMLHttpRequest();

    xml.onreadystatechange = function(){
        if(xml.status == 200){
            console.log(xml.response);
        }
    };

    xml.open("POST", "main.py")
    xml.open("POST", "/login")
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(credentials);

    
};