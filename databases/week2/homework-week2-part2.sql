use schooldatabase;

CREATE TABLE class (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL,
    CONSTRAINT pk_class_id PRIMARY KEY (id)
);

CREATE TABLE student(
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    phone VARCHAR (255) NOT NULL,
    class_id INT,
    CONSTRAINT pk_student_id PRIMARY KEY (id),
    CONSTRAINT fk_class_id Foreign Key (class_id) REFERENCES class(id)
);

SELECT * FROM class;

INSERT INTO class (name,begins,ends)
values ("Node.js","2024-08-01", "2024-09-01");

INSERT INTO student (name,email,phone,class_id)
values ("Tanya","tanya.dewland@yahoo.com","40-56-77-99",1),
       ("Mike","mike.kline@gmail.com","77-99-03-22",1);

--Create index on name in the student table
CREATE INDEX idx_name
ON student(name);

--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished
ALTER TABLE class
ADD status ENUM('not-started','ongoing','finished') NOT NULL
DEFAULT 'not-started';