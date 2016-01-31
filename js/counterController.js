workHereApp.controller("CounterCtrl", function() {
  $('#action-button').click(function() {
     $.ajax({
        url: 'http://www.luxtripper.co.uk/Tracking/PageCounter',
        data: {page: "WorkHere"},
        error: function() {
          var data = { visitors: { today: 3, total: 10 } }
          displayData(data);
          // $('#info').html('<p>An error has occurred</p>');
        },
        dataType: 'json',
        success: function(data) {
          displayData(data);
        },
        type: 'GET'
     });
  });

  displayData = function(data) {
    var $todayVisitors = $("span.today").text(data.visitors.today);
    var $totalVisitors = $("span.total").text(data.visitors.total);
  }

});
