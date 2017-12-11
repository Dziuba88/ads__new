
// Chart 1 //
  function genData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 4500);
    var visits = 30;
    var hints = 40;

    for (var i = 0; i < 12; i++) {
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + 366*i);
        visits = randomInteger(10, 20);
        hints = randomInteger(5, 30);;
        function randomInteger(min, max) {
          var rand = min + Math.random() * (max + 1 - min);
          rand = Math.floor(rand);
          return rand;
        }
        chartData.push({date: newDate,value1: visits,value2: hints,});
    }
    return chartData;
  };

  var chart = AmCharts.makeChart("chart1", {
    "type": "serial","theme": "light","hideCredits": true,
    "marginBottom": 5,"marginLeft": 0,"marginRight": 0,"marginTop": 10,
    "colors": ["#78BE2D","#7A569F"],
    "dataDateFormat": "YYYY",
    "valueAxes": [{"id": "v1"}],
    "balloon": {"borderThickness": 1,"shadowAlpha": 0},
    "graphs": [
      {
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value1",
        "type": "smoothedLine",
        "balloonText": "<span style='font-size:18px;'>visits: [[value1]]</span>"
      }, {
        "id": "g2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value2",
        "type": "smoothedLine",
        "balloonText": "<span style='font-size:18px;'>hints: [[value2]]</span>"
      }
    ],
    "chartCursor": {
        "valueLineEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#212121",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "categoryBalloonDateFormat": "YYYY",
        "zoomable": false
    },

    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
    },

    "dataProvider": genData()
  });

// Chart 2 //
  AmCharts.makeChart("chart2", {
    "type": "serial","theme": "light","hideCredits": true,
    "marginBottom": 5,"marginLeft": 0,"marginRight": 0,"marginTop": 10,
    "colors": ["#78BE2D","#7A569F"],
    "dataDateFormat": "YYYY-MM-DD",
    "precision": 2,
    "valueAxes": [{
      "id": "v1",
      "title": "",
      "position": "left",
      "autoGridCount": false,
      "labelFunction": function(value) {
        return "$" + Math.round(value) + "M";
      }
    }, {
      "id": "v2",
      "title": "",
      "gridAlpha": 0,
      "position": "right",
      "autoGridCount": false
    }],
    "graphs": [{
      "id": "g3",
      "valueAxis": "v1",
      "lineColor": "#EFEFEF",
      "fillColors": "#EFEFEF",
      "fillAlphas": 1,
      "type": "column",
      "title": "Actual Sales",
      "valueField": "sales2",
      "clustered": false,
      "columnWidth": 0.5,
      "legendValueText": "$[[value]]M",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
    }, {
      "id": "g4",
      "valueAxis": "v1",
      "lineColor": "#7a569f",
      "fillColors": "#7a569f",
      "fillAlphas": 1,
      "type": "column",
      "title": "Target Sales",
      "valueField": "sales1",
      "clustered": false,
      "columnWidth": 0.3,
      "legendValueText": "$[[value]]M",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
    }, {
      "id": "g1",
      "valueAxis": "v2",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "bulletSize": 5,
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "lineColor": "#cc3333",
      "type": "smoothedLine",
      "title": "Market Days",
      "useLineColorForBulletBorder": true,
      "valueField": "market1",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
    }, {
      "id": "g2",
      "valueAxis": "v2",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "bulletSize": 5,
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "lineColor": "#78BE2D",
      "type": "smoothedLine",
      "dashLength": 5,
      "title": "Market Days ALL",
      "useLineColorForBulletBorder": true,
      "valueField": "market2",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
    }],
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "dashLength": 1,
      "minorGridEnabled": true
    },
    "balloon": {
      "borderThickness": 1,
      "shadowAlpha": 0
    },
    "export": {
    "enabled": true
    },
    "dataProvider": [{
      "date": "2013-01-16",
      "market1": 71,
      "market2": 75,
      "sales1": 5,
      "sales2": 8
    }, {
      "date": "2013-01-17",
      "market1": 74,
      "market2": 78,
      "sales1": 4,
      "sales2": 6
    }, {
      "date": "2013-01-18",
      "market1": 78,
      "market2": 88,
      "sales1": 5,
      "sales2": 2
    }, {
      "date": "2013-01-19",
      "market1": 85,
      "market2": 89,
      "sales1": 8,
      "sales2": 9
    }, {
      "date": "2013-01-20",
      "market1": 82,
      "market2": 89,
      "sales1": 9,
      "sales2": 6
    }, {
      "date": "2013-01-21",
      "market1": 83,
      "market2": 85,
      "sales1": 3,
      "sales2": 5
    }, {
      "date": "2013-01-22",
      "market1": 88,
      "market2": 92,
      "sales1": 5,
      "sales2": 7
    }, {
      "date": "2013-01-23",
      "market1": 85,
      "market2": 90,
      "sales1": 7,
      "sales2": 6
    }, {
      "date": "2013-01-24",
      "market1": 85,
      "market2": 91,
      "sales1": 9,
      "sales2": 5
    }, {
      "date": "2013-01-25",
      "market1": 80,
      "market2": 84,
      "sales1": 5,
      "sales2": 8
    }, {
      "date": "2013-01-26",
      "market1": 87,
      "market2": 92,
      "sales1": 4,
      "sales2": 8
    }, {
      "date": "2013-01-27",
      "market1": 84,
      "market2": 87,
      "sales1": 3,
      "sales2": 4
    }, {
      "date": "2013-01-28",
      "market1": 83,
      "market2": 88,
      "sales1": 5,
      "sales2": 7
    }, {
      "date": "2013-01-29",
      "market1": 84,
      "market2": 87,
      "sales1": 5,
      "sales2": 8
    }, {
      "date": "2013-01-30",
      "market1": 81,
      "market2": 85,
      "sales1": 4,
      "sales2": 7
    }]
  });
// Chart 4 //
  var chart = AmCharts.makeChart("chart4", {
    "type": "serial","theme": "light","hideCredits": true,
    "marginBottom": 5,"marginLeft": 0,"marginRight": 0,"marginTop": 10,
    "colors": ["#78BE2D","#7A569F"],
    "dataDateFormat": "YYYY",
    "valueAxes": [{"id": "v1"}],
    "balloon": {"borderThickness": 1,"shadowAlpha": 0},
    "graphs": [
      {
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value1",
        "type": "smoothedLine",
        "balloonText": "<span style='font-size:18px;'>visits: [[value1]]</span>"
      }, {
        "id": "g2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value2",
        "type": "smoothedLine",
        "balloonText": "<span style='font-size:18px;'>hints: [[value2]]</span>"
      }
    ],
    "chartCursor": {
        "valueLineEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#212121",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "categoryBalloonDateFormat": "YYYY",
        "zoomable": false
    },

    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
    },

    "dataProvider": genData()
  });

// Chart 3 //
  AmCharts.makeChart("chart3", {
    "type": "serial","theme": "light","hideCredits": true,
    "marginBottom": 5,"marginLeft": 0,"marginRight": 0,"marginTop": 10,
    "colors": ["#78BE2D","#7A569F"],
    "dataDateFormat": "YYYY-MM-DD",
    "precision": 2,
    "valueAxes": [{
      "id": "v1",
      "title": "",
      "position": "left",
      "autoGridCount": false,
      "labelFunction": function(value) {
        return "$" + Math.round(value) + "M";
      }
    }, {
      "id": "v2",
      "title": "",
      "gridAlpha": 0,
      "position": "right",
      "autoGridCount": false
    }],
    "graphs": [{
      "id": "g3",
      "valueAxis": "v1",
      "lineColor": "#EFEFEF",
      "fillColors": "#EFEFEF",
      "fillAlphas": 1,
      "type": "column",
      "title": "Actual Sales",
      "valueField": "sales2",
      "clustered": false,
      "columnWidth": 0.5,
      "legendValueText": "$[[value]]M",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
    }, {
      "id": "g4",
      "valueAxis": "v1",
      "lineColor": "#7a569f",
      "fillColors": "#7a569f",
      "fillAlphas": 1,
      "type": "column",
      "title": "Target Sales",
      "valueField": "sales1",
      "clustered": false,
      "columnWidth": 0.3,
      "legendValueText": "$[[value]]M",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
    }, {
      "id": "g1",
      "valueAxis": "v2",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "bulletSize": 5,
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "lineColor": "#cc3333",
      "type": "smoothedLine",
      "title": "Market Days",
      "useLineColorForBulletBorder": true,
      "valueField": "market1",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
    }, {
      "id": "g2",
      "valueAxis": "v2",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "bulletSize": 5,
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "lineColor": "#78BE2D",
      "type": "smoothedLine",
      "dashLength": 5,
      "title": "Market Days ALL",
      "useLineColorForBulletBorder": true,
      "valueField": "market2",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
    }],
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "dashLength": 1,
      "minorGridEnabled": true
    },
    "balloon": {
      "borderThickness": 1,
      "shadowAlpha": 0
    },
    "export": {
    "enabled": true
    },
    "dataProvider": [{
      "date": "2013-01-16",
      "market1": 71,
      "market2": 75,
      "sales1": 5,
      "sales2": 8
    }, {
      "date": "2013-01-17",
      "market1": 74,
      "market2": 78,
      "sales1": 4,
      "sales2": 6
    }, {
      "date": "2013-01-18",
      "market1": 78,
      "market2": 88,
      "sales1": 5,
      "sales2": 2
    }, {
      "date": "2013-01-19",
      "market1": 85,
      "market2": 89,
      "sales1": 8,
      "sales2": 9
    }, {
      "date": "2013-01-20",
      "market1": 82,
      "market2": 89,
      "sales1": 9,
      "sales2": 6
    }, {
      "date": "2013-01-21",
      "market1": 83,
      "market2": 85,
      "sales1": 3,
      "sales2": 5
    }, {
      "date": "2013-01-22",
      "market1": 88,
      "market2": 92,
      "sales1": 5,
      "sales2": 7
    }, {
      "date": "2013-01-23",
      "market1": 85,
      "market2": 90,
      "sales1": 7,
      "sales2": 6
    }, {
      "date": "2013-01-24",
      "market1": 85,
      "market2": 91,
      "sales1": 9,
      "sales2": 5
    }, {
      "date": "2013-01-25",
      "market1": 80,
      "market2": 84,
      "sales1": 5,
      "sales2": 8
    }, {
      "date": "2013-01-26",
      "market1": 87,
      "market2": 92,
      "sales1": 4,
      "sales2": 8
    }, {
      "date": "2013-01-27",
      "market1": 84,
      "market2": 87,
      "sales1": 3,
      "sales2": 4
    }, {
      "date": "2013-01-28",
      "market1": 83,
      "market2": 88,
      "sales1": 5,
      "sales2": 7
    }, {
      "date": "2013-01-29",
      "market1": 84,
      "market2": 87,
      "sales1": 5,
      "sales2": 8
    }, {
      "date": "2013-01-30",
      "market1": 81,
      "market2": 85,
      "sales1": 4,
      "sales2": 7
    }]
  });
// Column Chart #1 //
  AmCharts.makeChart( "column1", {
    "type": "serial", "hideCredits": true,
    "dataProvider": genData(),
    "categoryField": "day","autoMargins": false,
    "marginLeft": 0,"marginRight": 0,"marginTop": 0,"marginBottom": 0,
    "graphs": [ {
      "valueField": "value1",
      "type": "column",
      "fillAlphas": 1,
      "lineColor": "#cc3333",
      "showBalloon": false
    } ],
    "valueAxes": [ {
      "gridAlpha": 0,
      "axisAlpha": 0
    } ],
    "categoryAxis": {
      "gridAlpha": 0,
      "axisAlpha": 0
    }
  });

// Column Chart #2 //
  AmCharts.makeChart( "column2", {
    "type": "serial", "hideCredits": true,
    "dataProvider": genData(),
    "categoryField": "day",
    "autoMargins": false,
    "marginLeft": 0,"marginRight": 0,"marginTop": 0,"marginBottom": 0,
    "graphs": [ {
      "valueField": "value2",
      "type": "column",
      "fillAlphas": 1,
      "showBalloon": false,
      "lineColor": "#78BE2D",
    } ],
    "valueAxes": [ {"gridAlpha": 0,"axisAlpha": 0} ],
    "categoryAxis": {
      "gridAlpha": 0,
      "axisAlpha": 0
    }
  });












$(document).ready(function() {

  // NavBar //
    $(".navbar--toggle").click(function() {
      $(this).toggleClass('active')
      $('.navbar__body').toggleClass('is-show');
    });

  // Filter //
    if($('.filters')[0]) {
      $('.filters li a').click(function() {
          var $container = $(this).closest('.filters');
          if($(this).hasClass('active') == false){
              $container.find('a').removeClass('active');
              $(this).addClass('active');
          };
      });
    };
  // DatePicker //
    $('input[name="daterange"]').daterangepicker({
      parentEl : "form.filters-datepicker",
      "opens": "left",
      "linkedCalendars": false,
      locale: {format: 'YYYY.MM.DD'},
      startDate: '2017.01.01',
      endDate: '2017.12.31'
    });

  // NiceScroll Select //
    $(".select--menu").niceScroll({
      autohidemode: false,
      cursorborder:'none',
      cursorwidth:6,
      cursoropacitymax: .2,
      cursorcolor: "#000",
      railpadding: {
        top: 2,
        right: 2,
        left: 2,
        bottom: 2
      }
    });  

  // Validation forms //
    if($(".form--validate").length) {
      $('.form--validate').each(function() {
        $(this).validate({
          focusInvalid: false,
          errorElement: "small",
          errorPlacement: function(error, element) {{
            $( element ).parent().addClass("isError");
            error.insertAfter( element );
          }}
        });
      });
    };


  // Show Passwords
    $('._password > i').click(function(){
      var inp = $(this).closest('.form--row').find('input');

      if ( inp.attr('type') == "password" ) {
        inp.prop("type","text");
        $(this).addClass('show')
      } else {
        inp.prop("type","password");
        $(this).removeClass('show');
      }
    });

});
