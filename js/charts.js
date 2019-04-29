google.charts.load('current', {
    packages: ['corechart', 'bar']
  });
  google.charts.setOnLoadCallback(drawRightY);
  
  function drawRightY() {
    var data = google.visualization.arrayToDataTable([
      ['Language', 'Number of Speakers (in Millions)', { role: 'style' }],
      ['Mandarin', 918000000, '#E1756B'],
      ['Spanish', 460000000, '#E99A93'],
      ['English', 379000000, '#E99A93'],
      ['Hindi', 341000000, '#E99A93'],
      ['Arabic', 319000000, '#E99A93'],
    ]);
  
    var materialOptions = {
      chart: {
        title: 'Population of Largest U.S. Cities',
        subtitle: 'Based on most recent and previous census data'
      },
      hAxis: {
        title: 'Total Population',
        minValue: 0,
      },
      vAxis: {
        title: 'City'
      },
      bars: 'horizontal',
      colors:['#E1756B','#E99A93','#E99A93','#E99A93','#E99A93'],
      axes: {
        y: {
          0: {
            side: 'right'
          }
        }
      }
    };
    var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
    materialChart.draw(data, materialOptions);
  }