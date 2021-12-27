<?php
    include_once('ELEMENTS/head.php');
?>
<link rel="stylesheet" type="text/css" href="CSS/index.css" />
<!-- Highcharts - Basic bar -->
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="JS/basicBar.js"></script>
</head>
<body>
<?php
    include_once('ELEMENTS/header.php');
?>
    <div id="container" class="m-4">
        <header id="containerHeader">
            <h1>Film Data Dashboard</h1>
            <h3>Modify this text</h3>
        </header>
        <section id="containerSection">
            <article id="containerArticle">
                <div id="graphContainer">
                    <div cclass="row"> 
                        <div id="graph1" class="col">
                            <figure class="highcharts-figure">
                                <div id="graph1Container"></div>
                                <p class="highcharts-description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa?
                                </p>
                            </figure>
                        </div>
                        <div id="graph2" class="col">
                            <figure class="highcharts-figure">
                                <div id="graph2Container"></div>
                                <p class="highcharts-description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa?
                                </p>
                            </figure>
                        </div>
                        <div id="graph3" class="col">
                            <p>Graph3</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </div>
<?php
    //include_once('PHP/connect.php');
    include_once('ELEMENTS/footer.php');
?>
</body>
</html>