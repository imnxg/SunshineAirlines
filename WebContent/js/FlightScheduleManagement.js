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

    var searchObj = {}
    $(".searchBtn").click(function(){
        var fromCity = $(".fromCity").val();
        var toCity = $(".toCity").val();
        var startDate  = $(".startDate").val();
        var endDate  = $(".endDate").val();
        console.log(startDate+",---,"+endDate);

        getTicketStatistics( fromCity,toCity,startDate,endDate);
    })

    function getTicketStatistics( fromCity,toCity,startDate,endDate){
        searchObj.startDate = startDate;
        searchObj.endDate = endDate;
        searchObj.fromCity = fromCity;
        searchObj.toCity = toCity;

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
                        "<td><input type='button' value='Cancel'/></td>"+
                        "</tr>";
                    }
                    $(".resultList").html(htmlStr);
                }
            }
        })
    }


})