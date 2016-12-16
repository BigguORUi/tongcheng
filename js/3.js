 $.getJSON("json/loadInfo.json", function(data) {
    $(".myDiv1").html("");//清空info内容
    $.each(data.mobile, function(i, item) {
      $(".myDiv1").append("<li>"+item.brand+"</li>")
    });
    })