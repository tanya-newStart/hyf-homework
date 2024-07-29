-- Active: 1720951943323@@127.0.0.1@3306@meals

CREATE TABLE Reservation (
  id int AUTO_INCREMENT PRIMARY KEY,
  number_of_guests int,
  meal_id int,
  created_date date,
  contact_phonenumber varchar(255),
  contact_name varchar(255),
  contact_email varchar(255),
  constraint fk_meal Foreign Key (meal_id) REFERENCES Meal (id) on Delete CASCADE
);

CREATE TABLE Meal (
  id int AUTO_INCREMENT PRIMARY KEY,
  title varchar(255),
  description text,
  location varchar(255),
  meal_when datetime,
  max_reservations int,
  price decimal,
  created_date date
);

CREATE TABLE Review (
  id int AUTO_INCREMENT PRIMARY KEY,
  title varchar(255),
  description text,
  meal_id int,
  stars int,
  created_date date,
  constraint fk_review Foreign Key (meal_id) REFERENCES Meal (id) on delete cascade
);

INSERT INTO Meal (title, description, location, meal_when, max_reservations, price, created_date) VALUES
('Italian Dinner', 'An exquisite Italian meal with pasta and wine.', '123 Pasta St.', '2024-07-20 19:00:00', 20, 25.00, '2024-07-10'),
('Sushi Night', 'Fresh sushi prepared by our experienced chefs.', '456 Sushi Ave.', '2024-07-22 18:30:00', 15, 40.00, '2024-07-12'),
('BBQ Feast', 'A hearty BBQ with all the fixings.', '789 BBQ Blvd.', '2024-07-25 17:00:00', 30, 30.00, '2024-07-15');

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES
(2, 1, '2024-07-11', '23-45-90-45', 'John Dewland', 'john.dew@yahoo.com'),
(4, 2, '2024-07-13', '24-67-89-01', 'Sanne Lock', 'sanne.lock@gmail.com'),
(3, 3, '2024-07-14', '35-78-90-12', 'Line Wein', 'linew@yahoo.com');

INSERT INTO Review (title, description, meal_id, stars, created_date) VALUES
('Fantastic Dinner', 'The dinner was fantastic. Highly recommend!', 1, 5, '2024-07-21'),
('Delicious Sushi', 'Sushi Night was amazing. Will come again!', 2, 4, '2024-07-23'),
('Great BBQ', 'BBQ was delicious and filling.', 3, 5, '2024-07-26');


--Meal Queries

--select all meals
Select * from `Meal`;

--add a new meal
INSERT INTO `Meal`(title,description,location,meal_when,max_reservations,price,created_date) VALUES
("Spanish Tapas","Savory meats, cheeses, fresh seafood and vegetables", "101 Tapas Blvd","2024-08-01 18:30:00", 10, 35.00,"2024-07-16");

--Get a meal with any id, fx 2
SELECT * from `Meal` WHERE id = 2;

--Update a meal with any id, fx 4. Update any attribute fx the title or multiple attributes

UPDATE `Meal`
set max_reservations = 1
where id = 3; 

--delete meal
delete from `Meal`
where id = 4;


-- Reservation queries
--get all reservations
select * from `Reservation`;
--add a new reservation
Insert into `Reservation`(number_of_guests,meal_id,created_date,contact_phonenumber,contact_name,contact_email) VALUES
(4, 1, '2024-07-20', '55-05-98-76', 'August Klutz', 'augustk@gmail.com');

--get a reservation with any id, fx 1
select * from `Reservation`
where id =1;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update `Reservation`
set number_of_guests = 2
where id = 4;

--Delete a reservation with any id, fx 1
DELETE from `Reservation`
where id = 4;

--Review queries
--get all reviews
select * from `Review`;

-- add a new review 
INSERT INTO `Review`(title,description,meal_id,stars,created_date) VALUES
('Nice Sushi', 'Their specialty rolls are yummy!', 2, 4, '2024-07-16');

--update review
UPDATE `Review`
set title ="Ok sushi",
description ="Their specialty roll are average",
stars = 3
where id = 4;

--delete a review with any id
DELETE from `Review`
where id =2;

INSERT INTO `Meal`(title,description,location,meal_when,max_reservations,price,created_date) VALUES
('Rød grød med fløde','A classic Danish dessert made from red berries and served with cream','Lonevej 12A','2024-08-10 14:00:00',10,8.00,'2024-07-16');
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 5, '2024-07-20', '55-56-78-09', 'Anna Andersen', 'anna.andersen@yahoo.com');
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES
(2,5, '2024-07-21', '55-56-78-19', 'Anna Morten', 'anna.morten@yahoo.com')

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES
(3,5, '2024-07-21', '50-56-78-19', 'Claus Morten', 'claus.morten@yahoo.com')

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Delicious', 'The Rød grød med fløde was an absolute treat!', 5, 5, '2024-07-26');

--additional queries
--Get meals that has a price smaller than a specific price
select * from `Meal`
where price < 30;

--Get meals that still has available reservations
select m.* from `Meal` m
LEFT JOIN `Reservation` r on m.id = r.meal_id
GROUP BY m.id
HAVING count (r.id)< m.max_reservations;

--Get meals that partially match a title
select m.* from `Meal` m
where m.title LIKE '%rød grød med%';

--Get meals that has been created between two dates
SELECT m.* FROM `Meal` m
WHERE created_date BETWEEN '2024-07-15' and '2024-07-17';

--Get only specific number of meals
SELECT * FROM `Meal`
ORDER BY id DESC
LIMIT 2;

--Get the meals that have good reviews
select m.*, r.stars from `Meal` m
join `Review` r on m.id = r.meal_id
where r.stars > 3;

--Get reservations for a specific meal sorted by created_date
SELECT r.*,m.title from `Reservation` r
JOIN `Meal` m on r.meal_id = m.id
where m.id = 5
ORDER BY r.created_date ASC;

--Sort all meals by average number of stars in the reviews
select m.title,AVG(r.stars) as average_stars from `Meal` m
join `Review` r on m.id = r.meal_id
GROUP BY m.title
ORDER BY average_stars ASC;