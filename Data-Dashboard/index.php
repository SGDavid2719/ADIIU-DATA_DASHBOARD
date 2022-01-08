<?php
    // Head code, includes some scripts and html information 
    include_once('ELEMENTS/Head.php');
?>
<!-- Highchart stylesheet -->
<link rel="stylesheet" href="CSS/Graph.css" />
<!-- Highcharts scripts -->
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<!-- Own script -->
<script src="JS/Main.js"></script>
</head>
<body>
<?php
    // Includes the navigation bar
    include_once('ELEMENTS/Header.php');
?>
    <!-- Web page container -->
    <div id="container" class="m-4">
        <!-- Main header of the container -->
        <header class="d-flex justify-content-center" id="containerHeader">
            <h1>Film Data Dashboard</h1>
        </header>
        <!-- Container of the graph -->
        <div id="graphContainer">
            <!-- Each theme is different a section and it is displayed as a row-->
            <section id="containerFilmSection" class="mt-2">
                <!-- Films' header -->
                <h4 id="filmsHeader">Films<h4>
                <hr>
                <div class="row">
                    <div id="graphOne" class="col-lg-6 col-md-12">
                        <figure class="highcharts-figure">
                            <div id="graphOneContainer"></div>
                            <p class="highcharts-description">
                            In the previous bar chart the most expensive movies ever made were displayed. We can appreciate that 'The Avengers' appear several times in this chart.
                            </p>
                        </figure>
                    </div>
                    <div id="graphTwo" class="col-lg-6 col-md-12">
                        <figure class="highcharts-figure">
                            <div id="graphTwoContainer"></div>
                            <p class="highcharts-description">
                            In this pie chart we can see that Adventures and Action are the most popular genres. There's also a draw between Thriller, Horror and Drama.
                            </p>
                        </figure>
                    </div>
                </div>
            </section>
            <section id="containerVideogameSection" class="mt-2">
                <!-- Videogames' header -->
                <h4 id="videogamesHeader">VideoGames<h4>
                <hr>
                <div class="row">
                    <div id="graphThree" class="col-lg-6 col-md-12">
                        <figure class="highcharts-figure">
                            <div id="graphThreeContainer"></div>
                            <p class="highcharts-description">
                            Here we can see a notorious variety of videogames, going from GTA V to Tetris. It is also curious that there are two versions of 'Tetris'. Note that 5 out of this 10 videogames are published by Nintedo.
                            </p>
                        </figure>
                    </div>
                    <div id="graphFour" class="col-lg-6 col-md-12">
                        <figure class="highcharts-figure">
                            <div id="graphFourContainer"></div>
                            <p class="highcharts-description">
                            This pie chart is similar to the one of movie's genres in the way that there are two prevalent genres above the others (Action and Shooter), and there's also a draw between Role-Playing and Sport and another draw between Adventure and Fighting.
                            </p>
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    </div>
<?php
    // Footer code
    include_once('ELEMENTS/Footer.php');
?>
</body>
</html>