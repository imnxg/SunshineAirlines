$(function(){

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var monthStr = month<10?"0"+month:month;
    var maxMonth = year+"-"+monthStr;
    $(".startDate").prop("max",maxMonth);
    $(".endDate").prop("max",maxMonth);

    $(".endDate").change(function(){
        var startDate = $(".startDate").val();
        var endDate = $(".endDate").val();
        if(new Date(startDate)>new Date(endDate)){
            alert("开始日期不能大于结束日期");
            $(".startDate").val("");
        }
    })

    $(".stat").click(function(){
        var startDate = $(".startDate").val();
        var endDate = $(".endDate").val();
        //http://localhost:8080/SunshineAirlines/getTicketStatistics?startDate=2019-08&endDate=2019-09
        var param = "startDate="+startDate+"&endDate="+endDate;
        $.ajax({
            type: "get",
            url: "http://localhost:8080/SunshineAirlinesDemo/getTicketStatistics",
            data: param,
            success: function (msg) {
                if(msg.flag=="success"){

                    var htmlStr = "";
                    for(var i=0;i<msg.data.length;i++){
                        htmlStr+="<tr class='tdcolor'>"+
                        "<td>"+msg.data[i].Month+"</td>"+
                        "<td>"+msg.data[i].FlightsAmount+"</td>"+
                        "<td>"+msg.data[i].TicketsAmount+"</td>"+
                        "<td>"+msg.data[i].TicketsRevenue+"</td>"+               
                    "</tr>";
                    }
                   $(".resultList").html(htmlStr);
                }else{
                    alert("添加失败"+msg.data);
                }
                
            }
        })
    })



})