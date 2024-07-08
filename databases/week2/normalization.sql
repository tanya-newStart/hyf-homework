use hyfdatabase2

-- initial table

CREATE TABLE student (
    student_id INT,
    student_name VARCHAR(255),
    student_address VARCHAR(255),
    PRIMARY key(student_id)
);

CREATE TABLE course (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(255),
    PRIMARY key(course_id))

CREATE TABLE student_courses (
    student_id INT,
    course_id INT,
    grade char(1),
    primary key(student_id,course_id),
    FOREIGN key(student_id) REFERENCES student(student_id),
    FOREIGN key (course_id) REFERENCES course(course_id))

CREATE Table courses_instructors (
    course_id INT,
    instructor_name VARCHAR(255)
    Foreign Key (course_id) REFERENCES course(course_id)
)
-- 1NF
-- Rule: Eliminate repeating groups by ensuring that each field contains only atomic (indivisible) values and that each record is unique.


-- 2NF
--Rule: Remove partial dependencies. Ensure that all non-key attributes are fully functional dependent on the primary key.


-- 3NF
-- Rule: Remove transitive dependencies. Ensure that non-key attributes are not dependent on other non-key attributes. 

CREATE TABLE product_float (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price FLOAT NOT NULL
);

INSERT INTO product_float (name, price) VALUES ('Product A', 19.99);
INSERT INTO product_float (name, price) VALUES ('Product B', 19.999999);
INSERT INTO product_float (name, price) VALUES ('Product A', 0.01);

drop Table product_float;

