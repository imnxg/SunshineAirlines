$(function(){
    //实现七天自动登录
    //判断是否记住密码
    var user = localStorage.getItem("user");
    if(user != null){
        try{
            var userInfo = JSON.parse(user);
            var loginDate = new Date(userInfo.LoginDate);
            loginDate.setDate(loginDate.getDate()+7);

            if(new Date() < loginDate){
                if(userInfo.RoleId == 1){
                    location.href = "./ModifyPassword.html";
                }else{
                    location.href = "./UserManagement.html";
                }
            }
        }catch(e){
        }
        
    }
    //实现登录
    $(".loginbutton").click(function(){
        var email = $(".email").val();
        var password = $(".password").val();
        var param = "email="+email+"&password="+password;

        if(email == ""){
            $(".alertInfo").text("邮箱不能为空！");
            return;
        }
        if(password == "" || password.length < 0){
            $(".alertInfo").text("密码不能为空！");
            return;
        }
        //发送ajax请求
        $.ajax({
            type: "get",
            url: "http://localhost:8080/SunshineAirlinesDemo/login",
            data: param,
            success: function(msg){
                var flag = msg.flag;
                if(flag == "success"){
                    $(".alertInfo").text(" ");
                    var userInfo = msg.data[0];
                    if($(".is7day").is(":checked")){
                        userInfo.LoginDate = new Date();
                    }
                    localStorage.setItem("user", JSON.stringify(userInfo));
                    
                    if(msg.data[0].RoleId == 1){
                        location.href= "./ModifyPassword.html";
                    }else {
                        location.href = "./UserManagement.html";
                    }
                }else{
                    $(".alertInfo").text(msg.data);
                }
            }
        })
    });

});