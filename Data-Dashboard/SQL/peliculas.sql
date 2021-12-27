CREATE DATABASE filmsDB;
USE filmsDB;

CREATE TABLE films
(
    idPeli int
    AUTO_INCREMENT,
    titulo varchar
    (100),
    coste int,
    PRIMARY KEY
    (idPeli)
);


    INSERT INTO films
        (titulo, coste)
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