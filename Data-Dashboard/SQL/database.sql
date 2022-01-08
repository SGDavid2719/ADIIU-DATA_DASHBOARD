CREATE DATABASE filmsDB;
USE filmsDB;

CREATE TABLE films
(
    idFilm INT
    AUTO_INCREMENT,
    title VARCHAR
    (100),
    cost INT,
    PRIMARY KEY
    (idFilm)
);


    INSERT INTO films
        (title, cost)
    VALUES
        ('Pirates of The Caribbean: On Stranger Tides', 379),
        ('Avengers: Age of Ultron', 365),
        ('Avengers: Endgame', 356),
        ('Avengers: Infinity War', 325),
        ('Justice League', 300),
        ('Pirates of The Caribbean: At Worlds End', 300),
        ('Solo: A Star Wars Story', 275),
        ('Star Wars: The Rise of Skywalker', 275),
        ('John Carter', 264),
        ('Batman v Superman: Dawn of Justice', 262);

    CREATE TABLE incomepergenre
    (
        idG INT
        AUTO_INCREMENT,
    genre VARCHAR
        (100),
    income INT,
    PRIMARY KEY
        (idG)
);

        INSERT INTO incomepergenre
            (genre, income)
        values
            ('Adventure', 705),
            ('Action', 436),
            ('Thriller', 264),
            ('Horror', 247),
            ('Drama', 241),
            ('Comedy', 81),
            ('Black comedy', 44),
            ('Musical', 11),
            ('Romantic comedy', 7),
            ('Western', 5);

        CREATE DATABASE gamesDB;
        USE gamesDB;

        CREATE TABLE games
        (
            idGame INT
            AUTO_INCREMENT,
    title VARCHAR
            (100),
    sells INT,
    PRIMARY KEY
            (idGame)
);


            INSERT INTO games
                (title, sells)
            values
                ('Minecraft', 238),
                ('Grand Theft Auto V', 155),
                ('Tetris (EA)', 100),
                ('Wii Sports', 83),
                ('PlayerUnknowns Battlegrounds', 70),
                ('Super Mario Bros', 58),
                ('Pokemon Red/Green/Blue', 48),
                ('Mario Kart 8 / Deluxe', 47),
                ('Wii Fit / Plus', 44),
                ('Tetris (Nintendo)', 43);


            CREATE TABLE genre
            (
                idGenre INT
                AUTO_INCREMENT,
    genreN VARCHAR
                (100),
    percent FLOAT,
    PRIMARY KEY
                (idGenre)
);


                INSERT INTO genre
                    (genreN, percent)
                values
                    ('Action', 26.9),
                    ('Shooter', 20.9),
                    ('Role playing', 11.3),
                    ('Sport', 11.1),
                    ('Adventure', 7.9),
                    ('Fighting', 7.8),
                    ('Racing', 5.8),
                    ('Strategy', 3.7),
                    ('Other', 4.6);