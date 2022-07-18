
function openLayout() {
    var userName = document.forms["myForm"]["Uname"].value;
    var passWord = document.forms["myForm"]["Pass"].value;

    if(userName=="admin" && passWord=="321")
    {
        window.location.href="layoutpage.html";
    }
    else
    {
        alert("Invalid Username or password");
    }

}