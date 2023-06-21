$(function(){

    $(".submit").click(function () {
        var email = $(".email").val();
        var firstName = $(".firstName").val();
        var lastName = $(".lastName").val();
        var dateOfBirth = $(".dateOfBirth").val();
        var address = $(".address").val();
        var phone = $(".phone").val();
        var photo = $(".photo").attr("src");

        var gender = "F";
        if($(".genderMale").prop("checked")){
            gender = "M";
        }
        var roleId = 2;
        if($(".roleUser").prop("checked")){
            roleId = 1;
        }        
        //对图片base64编码进行作为URI组件的编码
        photo = encodeURIComponent(photo);
        //使用encodeURIComponent原因是防止特殊字符出现导致的错误，比如&符号，会被解析成参数分隔符，而不是参数值
        //图片传给后端后,servlet会将？处理为空格

        var param = "email="+email+"&firstName="+firstName+"&lastName="+lastName+"&gender=+"+gender+
        "&dateOfBirth="+dateOfBirth+"&phone="+phone+"&photo="+photo+"&address="+address+"&roleId="+roleId;
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/SunshineAirlinesDemo/addUser",
            data: param,
            success: function (msg) {
                if(msg.flag=="success"){
                    alert("Add user success");
                    location.href = "./UserManagement.html";
                }else{
                    alert("添加失败"+msg.data);
                }
                
            }
        })

    })

    //上传图片,将图片转换成base64编码,然后将编码传给后端
    $(".upload-input").change(function(){
        //获取文件
        var file = this.files[0];
        //创建文件读取对象
        var reader = new FileReader();
        //读取文件,当读取完成后会触发onload事件,然后将读取的结果赋值给img的src属性,就可以显示图片了
        reader.onload = function(event){
            $(".photo").attr("src",event.target.result);
        }
        //将文件读取为Data URL,也就是base64编码
        reader.readAsDataURL(file);
    })
    //取消按钮
    $(".cancel").click(function () {
        $(".email").val("");
        $(".roleUser").prop("ckecked",true);
       
        $(".genderMale").prop("ckecked",true);
      
        $(".firstName").val("");
        $(".lastName").val("");
        $(".dateOfBirth").val("");
        $(".address").val("");
        $(".phone").val("");
         $(".photo").attr("src","");
    })
})