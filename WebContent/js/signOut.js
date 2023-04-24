$(function(){

    $(".list_out").click(function(){
        localStorage.setItem("user", null);
        location.href = "./Login.html";
    })
});