<h1 align="center">Movies Controll</h1>

<p align="center">
  <a href="https://github.com/lucasrmagalhaes/movies_controll-mysql/blob/main/frontend/public/movies-controll.gif">
    <img 
         src="https://github.com/lucasrmagalhaes/movies_controll-mysql/blob/main/frontend/public/movies-controll.gif" 
         alt="Movies Controll" 
    />
  </a>
</p>

[Back-end](http://localhost:5000/ "Back-end")
<br />
[Front-end](http://localhost:3000/ "Front-end")

```
CREATE TABLE movies(
    id INT PRIMARY KEY AUTO_INCREMENT,
    type INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    total_ep INT,
    atual_ep INT,
    last_view DATE DEFAULT CURRENT_TIMESTAMP
)
```

```
INSERT INTO 
    movies(`id`, `type`, `name`, `total_ep`, `atual_ep`, `last_view`) 
VALUES 
    (1, 0, 'Friends', 10, 1, current_timestamp())
```

```
INSERT INTO 
    movies(id, type, name, total_ep, last_view) 
VALUES 
    (2, 1, 'Avengers', NULL, current_timestamp())
```

```
UPDATE 
    `movies` 
SET 
    `last_view` = '2021-11-07' 
WHERE
    `movies`.`id` = 1;
```

```
DELETE FROM
    movies 
WHERE 
    id = 2
```
