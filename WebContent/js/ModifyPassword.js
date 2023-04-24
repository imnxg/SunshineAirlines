$(function(){
    var user = localStorage.getItem("user");
    var userId;
    if(user != null){
         var userInfo = JSON.parse(user);
         userId = userInfo.UserId;
         var username = userInfo.FirstName + " "+ userInfo.LastName;
            $(".email").val(userInfo.Email);
            $(".name").val(username);
    }

    $(".submit").click(function(){

        var newPassword = $(".newPassword").val();
        var newPasswordAgain = $(".newPasswordAgain").val();
        if(newPassword == ""){
            alert("newPassword密码不能为空！");
            return;
        }
        if(newPasswordAgain == ""){
            alert("newPasswordAgain密码不能为空！");
            return;
        }
        if(newPassword.length < 8 || newPassword.length > 16 || newPasswordAgain.length < 8 || newPasswordAgain.length > 16){
            alert("请输入符合要求的密码!");
            return;
        }
        if(newPassword != newPasswordAgain){
            alert("两次输入密码不一致，请重新输入！");
            return;
        }
         
        var param = "userId="+userId+"&password="+newPassword
        $.ajax({
            type: "get",
            url: "http://localhost:8080/SunshineAirlinesDemo/updatePassword",
            data: param,
            success: function(msg){
                if(msg.flag == "success"){
                    alert("修改成功！");
                    location.href = "./Login.html";
                    localStorage.setItem("user", null);
                }
            }
        })
    })

    $(".cancel").click(function(){
         $(".newPassword").val("");
         $(".newPasswordAgain").val("");
    })

});