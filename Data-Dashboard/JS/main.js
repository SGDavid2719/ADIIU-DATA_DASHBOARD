$(document).ready(function () {
  /* Initialize graph 1 --> Basic Bar */
  InitGraphContainer1();
  /* Initialize graph 2 --> l */
  InitGraphContainer2();
  /* Initialize graph 3 -->  */
  //InitGraphContainer3();
  /* Initialize graph 4 --> Pie with gradient fill */
  InitGraphContainer4();
});

function GetData(pDBName, pTable) {
  var lCleanBuffer = "<?php echo ob_clean(); ?>";
  var lData;
  $.ajax({
    type: "GET",
    url: "http://localhost/Data-Dashboard/ADIIU-DATA_DASHBOARD/Data-Dashboard/PHP/connect.php",
    data: { dbname: pDBName, table: pTable },
    async: false,
    success: function (lResult) {
      lData = lResult;
    },
  });
  return lData;
}

function InitGraphContainer1() {
  var lJSON = GetData("filmsdb", "films");
  var lDatos = JSON.parse(lJSON);
  var lCategoriesArray = [];
  var lDataArray = [];
  for (var lIndex = 0; lIndex < lDatos.length; lIndex++) {
    lCategoriesArray.push(lDatos[lIndex]["title"]);
    lDataArray.push(parseInt(lDatos[lIndex]["cost"]));
  }

  Highcharts.chart("graph1Container", {
    chart: {
      type: "bar",
    },
    title: {
      text: "Most expensive film productions worldwide as of September 2021",
    },
    xAxis: {
      categories: lCategoriesArray,
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Population (millions)",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    tooltip: {
      valueSuffix: " millions",
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Year 2021",
        data: lDataArray,
      },
    ],
  });
}

function InitGraphContainer2() {
  var lJSON = GetData("filmsdb", "incomepergenre");
  var lDatos = JSON.parse(lJSON);
  console.log(lDatos);
  var lTotalCost = 0;
  for (var lIndex = 0; lIndex < lDatos.length; lIndex++) {
    lTotalCost += parseInt(lDatos[lIndex]["income"]);
  }
  var lDataArray = [];
  for (var lIndex = 0; lIndex < lDatos.length; lIndex++) {
    lPercentage = (parseInt(lDatos[lIndex]["income"]) / lTotalCost) * 100;
    lDataArray.push({
      name: lDatos[lIndex]["genre"],
      y: lPercentage,
    });
  }
  console.log(lDataArray);
  // Radialize the colors
  Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
      return {
        radialGradient: {
          cx: 0.5,
          cy: 0.3,
          r: 0.7,
        },
        stops: [
          [0, color],
          [1, Highcharts.color(color).brighten(-0.3).get("rgb")], // darken
        ],
      };
    }),
  });

  // Build the chart
  Highcharts.chart("graph2Container", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Box office receipts for the top ten film genres in the United States and Canada in 2020",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          connectorColor: "silver",
        },
      },
    },
    series: [
      {
        name: "Share",
        data: lDataArray,
      },
    ],
  });
}

function InitGraphContainer3() {
  var lJSON = GetData("gamesdb", "genre");
  var lDatos = JSON.parse(lJSON);
  console.log(lDatos);
  var lDataArray = [];
  for (var lIndex = 0; lIndex < lDatos.length; lIndex++) {
    lDataArray.push({
      name: lDatos[lIndex]["genreN"],
      y: parseFloat(lDatos[lIndex]["percent"]),
    });
  }
  console.log(lDataArray);
  // Radialize the colors
  Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
      return {
        radialGradient: {
          cx: 0.5,
          cy: 0.3,
          r: 0.7,
        },
        stops: [
          [0, color],
          [1, Highcharts.color(color).brighten(-0.3).get("rgb")], // darken
        ],
      };
    }),
  });

  // Build the chart
  Highcharts.chart("graph3Container", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Box office receipts for the top ten film genres in the United States and Canada in 2020",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          connectorColor: "silver",
        },
      },
    },
    series: [
      {
        name: "Share",
        data: lDataArray,
      },
    ],
  });
}

function InitGraphContainer4() {
  var lJSON = GetData("gamesdb", "games");
  var lDatos = JSON.parse(lJSON);
  var lCategoriesArray = [];
  var lDataArray = [];
  for (var lIndex = 0; lIndex < lDatos.length; lIndex++) {
    lCategoriesArray.push(lDatos[lIndex]["title"]);
    lDataArray.push(parseInt(lDatos[lIndex]["sells"]));
  }
  console.log(lCategoriesArray);
  console.log(lDataArray);

  Highcharts.chart("graph4Container", {
    chart: {
      type: "bar",
    },
    title: {
      text: "Most expensive film productions worldwide as of September 2021",
    },
    xAxis: {
      categories: lCategoriesArray,
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Population (millions)",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    tooltip: {
      valueSuffix: " millions",
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Year 2021",
        data: lDataArray,
      },
    ],
  });
}
