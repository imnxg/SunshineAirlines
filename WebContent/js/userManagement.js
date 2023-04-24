$(function(){

    userList(0,"",1);

    function userList(roleId,name,startPage){
        var param = "roleId="+roleId+"&name="+name+"&startPage="+startPage+"&pageSize=10";
        $.ajax({
            type: "post",
            url: "http://localhost:8080/SunshineAirlinesDemo/userList",
            data: param,
            success: function (msg) {
                var userList = msg.data;
                if(msg.flag == "success"){
                    var html = "";
                    for(var i=0;i<userList.length;i++){
                        var Role = userList[i].RoleId==1?"Office User":"Administrator";
                        html+="<tr class='tdcolor'>"+
                        "  <td>"+userList[i].Email+"</td>"+
                        " <td>"+userList[i].FirstName+" "+userList[i].LastName+"</td>"+
                        " <td>"+userList[i].Gender+"</td>"+
                        " <td>"+userList[i].DateOfBirth+"</td>"+
                        " <td>"+userList[i].Phone+"</td>"+
                        " <td>"+Role+"</td>"+
                        " <td><input class='editUser' style='width: 80px;  font-size: 16px;' type='button' value='Edit'/></td>"+
                    "</tr> ";
                    }
                    $(".resultList").html(html);
                }
    
            }
        });

    }




})