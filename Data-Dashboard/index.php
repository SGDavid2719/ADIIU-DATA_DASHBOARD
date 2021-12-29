<?php
    include_once('ELEMENTS/head.php');
?>
<link rel="stylesheet" type="text/css" href="CSS/basicBar.css" />
<!-- Highcharts - Basic bar -->
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="JS/main.js"></script>
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
        <section id="containerSection" class="mt-2">
            <article id="containerArticle">
                <div id="graphContainer">
                    <h4>Films<h4>
                    <hr>
                    <div class="row"> 
                        <div id="graph1" class="col-lg-6 col-md-12">
                            <figure class="highcharts-figure">
                                <div id="graph1Container"></div>
                                <p class="highcharts-description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa?
                                </p>
                            </figure>
                        </div>
                        <div id="graph2" class="col-lg-6 col-md-12">
                            <figure class="highcharts-figure">
                                <div id="graph2Container"></div>
                                <p class="highcharts-description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa?
                                </p>
                            </figure>
                        </div>
                    </div>
                    <h4>Games<h4>
                    <hr>
                    <div class="row">
                        <div id="graph3" class="col-lg-6 col-md-12">
                            <figure class="highcharts-figure">
                                <div id="graph3Container"></div>
                                <p class="highcharts-description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa?
                                </p>
                            </figure>
                        </div>
                        <div id="graph4" class="col-lg-6 col-md-12">
                            <figure class="highcharts-figure">
                                <div id="graph4Container"></div>
                                <p class="highcharts-description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, culpa?
                                </p>
                            </figure>
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