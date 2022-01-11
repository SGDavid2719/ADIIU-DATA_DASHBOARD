// Uses JQuery and waits till the document is loaded
$(document).ready(function () {
  /* Gradient graphic colors */
  GradientColors();
  /* Initialize graph 1 --> Basic Bar */
  InitGraphContainer1();
  /* Initialize graph 2 --> l */
  InitGraphContainer2();
  /* Initialize graph 3 -->  */
  InitGraphContainer3();
  /* Initialize graph 4 --> Pie with gradient fill */
  InitGraphContainer4();
});

// Function: Gets data from MySQL database. It uses ajax GET method and requests PHP/Connect.php.
// In:
//    - pDBName : database name (filmsdb or gamesdb)
//    - pTable  : table name
// Out:
//    - lData   : fetched data as json array
function GetData(pDBName, pTable) {
  // It needs to clear browser buffer before sending data because it sends html tags too
  // and we want just owr 'data' variable.
  var lCleanBuffer = "<?php echo ob_clean();?>";
  var lData;
  $.ajax({
    type: "GET",
    url: "http://localhost/Data-Dashboard/ADIIU-DATA_DASHBOARD/Data-Dashboard/PHP/Connect.php",
    data: { dbname: pDBName, table: pTable },
    async: false,
    success: function (lResult) {
      lData = lResult;
      console.log(lData);
    },
  });
  return lData;
}

// Function: Initialize graph colours. Highcharts' method.
// In:
//    -
// Out:
//    -
function GradientColors() {
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
}

// Function: Initialize graph1. It fetches data from films at filmsdb. It is a graph gradient bar.
// In:
//    -
// Out:
//    -
function InitGraphContainer1() {
  // Returns a JSON
  var lJSON = GetData("filmsdb", "films");
  // JSON to array
  var lDatos = JSON.parse(lJSON);
  var lCategoriesArray = [];
  var lDataArray = [];
  // Format owr array as Highchart it is required
  for (var lIndex = 0; lIndex < lDatos.length; lIndex++) {
    lCategoriesArray.push(lDatos[lIndex]["title"]);
    lDataArray.push(parseInt(lDatos[lIndex]["cost"]));
  }

  Highcharts.chart("graphOneContainer", {
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

// Function: Initialize graph2. It fetches data from incomepergenre at filmsdb. It is a graph gradient pie.
// In:
//    -
// Out:
//    -
function InitGraphContainer2() {
  // Returns a JSON
  var lJSON = GetData("filmsdb", "incomepergenre");
  // JSON to array
  var lDatos = JSON.parse(lJSON);
  var lTotalCost = 0;
  // We get the total income
  for (var lIndex = 0; lIndex < lDatos.length; lIndex++) {
    lTotalCost += parseInt(lDatos[lIndex]["income"]);
  }
  var lDataArray = [];
  // Format owr array as Highchart it is required. In this case a percentage is required
  for (var lIndex = 0; lIndex < lDatos.length; lIndex++) {
    lPercentage = (parseInt(lDatos[lIndex]["income"]) / lTotalCost) * 100;
    lDataArray.push({
      name: lDatos[lIndex]["genre"],
      y: lPercentage,
    });
  }
  console.log(lDataArray);

  // Build the chart
  Highcharts.chart("graphTwoContainer", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Box office receipts for the top ten film genres in the United States and Canada in 2020 ",
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

// Function: Initialize graph3. It fetches data from genre at gamesdb. It is a graph gradient bar.
// In:
//    -
// Out:
//    -
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

  // Build the chart
  Highcharts.chart("graphThreeContainer", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Video game sales in the United States in 2018, by genre",
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

// Function: Initialize graph4. It fetches data from games at gamesdb. It is a graph gradient pie.
// In:
//    -
// Out:
//    -
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

  Highcharts.chart("graphFourContainer", {
    chart: {
      type: "bar",
    },
    title: {
      text: "List of best-selling video games",
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
