use hyfdatabase1;

--Add a task
INSERT INTO task (title, description, created, updated, due_date, status_id)
values ("Debug","Debug the javascript code in the project","2024-07-07","2024-07-08","2024-08-01",1);

-- Assign the task to the user with user_id = 16
INSERT INTO user_task (user_id,task_id)
values (16,38);

--Change the title of a task
UPDATE task
SET title = "Cook dinner"
where title LIKE "Wash%"; 

--Change a task due date
UPDATE task
SET due_date ="2024-08-07 18:00"
where title = "Cook dinner";

--Change a task status
UPDATE task
SET status_id ="2"
where title like "%billionaire%";

--Mark a task as complete (mark Tanya's D tasks as complete)
UPDATE task
JOIN user_task on task.id = user_task.task_id 
JOIN user on user_task.user_id = user.id 
SET status_id ="3"
where user.name like "Tanya%";

--Delete a task created earlier than "2017-09-04"

DELETE FROM task WHERE created<"2017-09-04";
