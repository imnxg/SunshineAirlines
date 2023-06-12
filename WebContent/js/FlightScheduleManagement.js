var searchObj = {}
$(function(){

    $.ajax({
        type:"get",
        url: "http://localhost:8080/SunshineAirlinesDemo/getCityNames",
        success: function(msg){
            if(msg.flag=="success"){
                var htmlStr = "";
                for(var i=0;i<msg.data.length;i++){
                    console.log(msg.data[i].CityName);
                    htmlStr += " <option value='"+msg.data[i].CityName+"'>"+msg.data[i].CityName+"</option>";
                }
                console.log(htmlStr)
                $(".fromCity").html(htmlStr);
                $(".toCity").html(htmlStr);
            }
        }
    })

    
    $(".searchBtn").click(function(){
        getTicketStatistics();
    })

    $(".changeicon").click(function(){
        var fromCity = $(".fromCity").val();
        var toCity = $(".toCity").val();
        $(".fromCity").val(toCity);
        $(".toCity").val(fromCity);
    })
})


function getTicketStatistics( ){
    var fromCity = $(".fromCity").val();
    var toCity = $(".toCity").val();
    var startDate  = $(".startDate").val();
    var endDate  = $(".endDate").val();
    var param = "fromCity="+fromCity+"&toCity="+toCity+"&startDate="+startDate+"&endDate="+endDate;
    $.ajax({
        type: "get",
        url: "http://localhost:8080/SunshineAirlinesDemo/getSchedule",
        data: param,
        success: function(msg){
            if(msg.flag=="success"){
                var htmlStr="";
                var list = msg.data;
                for(var i=0;i<list.length;i++){
                    var statusButtonName = "Confirmed";
                    var statusNum = 0;
                    if(list[i].Status=="Confirmed"){
                        statusButtonName = "Cancel";
                        statusNum = 1;
                    }
                    htmlStr+=" <tr class='tdcolor'>"+
                    "<td >"+list[i].Date+"</td>"+
                    "<td>"+list[i].Time+"</td>"+
                    "<td>"+list[i].DepartCityName+"/"+list[i].DepartureAirportIATA+"</td>"+
                    "<td>"+list[i].ArriveCityName+"/"+list[i].ArrivalAirportIATA+"</td>"+
                    "<td>"+list[i].Name+"</td>"+
                    "<td>"+list[i].EconomyPrice+"</td>"+
                    "<td>"+list[i].FlightNumber+"</td>"+
                    "<td>"+list[i].Gate+"</td>"+
                    "<td>"+list[i].Status+"</td>"+
                    "<td><input type='button' value='"+statusButtonName+"' onclick='changeFlightStatus("+list[i].ScheduleId+","+statusNum+")' /></td>"+
                    "</tr>";
                }
                $(".resultList").html(htmlStr);
            }
        }
    })
}

function changeFlightStatus(scheduleId,status){
    var newStatus = "Confirmed";
    if(status==1){
        newStatus = "Cancel";
    }
    var param = "scheduleId="+scheduleId+"&status="+newStatus;
    $.ajax({
        type: "get",
        url: "http://localhost:8080/SunshineAirlinesDemo/updateSchedule",
        data: param,
        success: function(msg){
            if(msg.flag=="success"){
                getTicketStatistics();
            }else{
                alert(msg.data);
            }
        }
    })
}