  var chartData = genData();
  var chart1 = AmCharts.makeChart("chart1", {
      "type": "serial","theme": "light", "hideCredits": true,
      "dataProvider": chartData,
      "synchronizeGrid":true,
      "legend": {"useGraphSettings": true},
      "valueAxes": [{"id":"v1"}],
      "graphs": [{
          "valueAxis": "v1",
          "lineColor": "#0C4C9D",
          "bullet": "round",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "visits",
          "valueField": "visits",
        "type": "smoothedLine",
      "fillAlphas": 0
      }, {
          "valueAxis": "v1",
          "lineColor": "#7A569F",
          "bullet": "triangleUp",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "hints",
          "valueField": "hints",
        "type": "smoothedLine",
      "fillAlphas": 0
      }],
      "chartCursor": {
          "cursorPosition": "mouse"
      },
      "categoryField": "date",
      "categoryAxis": {"parseDates": true},
  });
  function genData() {
      var chartData = [];
      var firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 100);
          var visits = 20;
          var hints = 24;

      for (var i = 0; i < 10; i++) {
          var newDate = new Date(firstDate);
          newDate.setDate(newDate.getDate() + i);
          visits += Math.round((Math.random()<0.9?1:-1)*Math.random()*30+30);
          hints += Math.round((Math.random()<0.3?1:-1)*Math.random()*50+50);
          chartData.push({date: newDate,visits: visits,hints: hints,});
      }
      return chartData;
  }














$(document).ready(function() {
  $(".navbar--toggle").click(function() {
    $(this).toggleClass('active')
    $('.navbar__body').toggleClass('is-show');
  });

  // Change STATUS Filter ... 
  if($('.filters')[0]) {
    $('.filters li a').click(function() {
        var $container = $(this).closest('.filters');
        if($(this).hasClass('active') == false){
            $container.find('a').removeClass('active');
            $(this).addClass('active');
        };
    });
  };
  $('input[name="daterange"]').daterangepicker({
    parentEl : "form",
    "opens": "left",
    "linkedCalendars": false,
    locale: {format: 'YYYY.MM.DD'},
    startDate: '2017.01.01',
    endDate: '2017.12.31'
  });

  
});



