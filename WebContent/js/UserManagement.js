$(function(){
    //定义全局变量
    var searchObj = {};
    //初始化页面
    getUserList(0,"",1);

    //搜索按钮，通过查询条件获取用户列表
    $(".searchBtn").click(function(){
       var roleId = $(".roleId").val();
       var username =  $(".userName").val();
       getUserList(roleId,username,1);
    });

    //上一页、下一页、首页、尾页
    $(".step-backward").click(function(){
        if(searchObj.startPage == 1){
            alert("已经是第一页了");
        }else{
            getUserList(searchObj.roleId,searchObj.name,1);
        }
    });

    $(".chevron-left").click(function(){
        if(searchObj.startPage == 1){
            alert("已经是第一页了");
        }else{
            getUserList(searchObj.roleId,searchObj.name,searchObj.startPage -1);
        }
    });

    $(".chevron-right").click(function(){
        if(searchObj.startPage == searchObj.pages){
            alert("已经是最后一页了");
        }else{
            getUserList(searchObj.roleId,searchObj.name,searchObj.startPage +1);
        }
    });

    $(".step-forward").click(function(){
        if(searchObj.startPage == searchObj.pages){
            alert("已经是最后一页了");
        }else{
            getUserList(searchObj.roleId,searchObj.name,searchObj.pages);
        }
    });

    //下拉框选择第几页
    $(".pageSelect").change(function(){
        var startPage = parseInt($(this).val());
        getUserList(searchObj.roleId,searchObj.name,startPage);
    });

    $("#goAddUser").click(function(){
        //修改UserId缓存为0,用于区分新增操作
        localStorage.setItem("userId",0);
        location.href = "./AddUser.html";
    })

    //展示用户列表信息，分页
    function getUserList(roleId,name,startPage){
        searchObj.roleId = roleId;
        searchObj.name = name;
        searchObj.startPage = startPage;

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
                        var gender = userList[i].Gender == "F"? "FeMale":"Male";
                        var Role = userList[i].RoleId==1?"Office User":"Administrator";
                        html+="<tr class='tdcolor'>"+
                        "  <td>"+userList[i].Email+"</td>"+
                        " <td>"+userList[i].FirstName+" "+userList[i].LastName+"</td>"+
                        " <td>"+gender+"</td>"+
                        " <td>"+userList[i].DateOfBirth+"</td>"+
                        " <td>"+userList[i].Phone+"</td>"+
                        " <td>"+Role+"</td>"+
                        " <td><input class='editUser' style='width: 80px;  font-size: 16px;' type='button' value='Edit' onclick='editUser("+userList[i].UserId+")'/></td>"+
                    "</tr> ";
                    }
                    //展示用户列表
                    $(".resultList").html(html);

                    //获取查询到总条数
                    var total = msg.page.total;
                    initPage(total);

                }
    
            }
        });

        //初始化分页数据
        function initPage(total){
            //处理分页
            var pages = parseInt(total/10);
            if(total%10!=0){
                pages+=1;
            }
            //存储分页数据，用于分页查询，pages为共多少页数据
            searchObj.pages = pages;
            $(".totalpage .pageNum").text(pages);
            $(".totals").text(total);

            var optionHtml = "";
            for(var i=1;i<=searchObj.pages;i++){
                if(searchObj.startPage == i){
                	optionHtml += "<option  value='"+i+"' selected>"+i+"</option>";
                }else{
                	optionHtml += "<option  value='"+i+"'>"+i+"</option>";
                }
            }
            $(".pageSelect").html(optionHtml);

        }

        //编辑用户
        function editUser(userId){
            alert(userId);
            localStorage.setItem("userId",userId);
            // location.href = "./EditUser.html";
        }

    }

})