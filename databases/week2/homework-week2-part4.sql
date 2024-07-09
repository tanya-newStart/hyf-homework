--2024 Olympics in France

CREATE TABLE country (
    country_id INT AUTO_INCREMENT PRIMARY KEY,
    country_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE sport (
sport_id INT AUTO_INCREMENT PRIMARY KEY,
sport_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE event (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(255) UNIQUE NOT NULL,
    gender ENUM('Male','Female','Mixed'),
    sport_id INT,
    Foreign Key (sport_id) REFERENCES sport(sport_id)
);

CREATE TABLE athlete (
    athlete_id INT AUTO_INCREMENT PRIMARY KEY,
    athlete_name VARCHAR(255) NOT NULL,
    country_id INT,
    gender ENUM('Male','Female') NOT NULL,
    Foreign Key (country_id) REFERENCES country(country_id)
)

CREATE TABLE participation (
    athlete_id INT,
    event_id INT,
    PRIMARY KEY (athlete_id, event_id),
    Foreign Key (athlete_id) REFERENCES athlete(athlete_id),
    Foreign Key (event_id) REFERENCES event (event_id)
)

CREATE TABLE medal (
    medal_id INT AUTO_INCREMENT PRIMARY KEY,
    medal_type ENUM('Gold','Silver','Bronze') NOT NULL,
    athlete_id INT,
    event_id INT,
    Foreign Key (athlete_id,event_id) REFERENCES participation(athlete_id,event_id)
);
