-- Active: 1719823579315@@0.0.0.0@3306@hyfdatabase1

--Get all the tasks assigned to users whose email ends in @spotify.com
select task.title
from task JOIN user_task on task.id = user_task.task_id
join user on user.id = user_task.user_id
where user.email like "%@spotify.com";

--Get all the tasks for 'Donald Duck' with status 'Not started'

select task.title,task.id
from task
join user_task on task.id = user_task.task_id
join user on user.id = user_task.user_id
join status on status.id=task.status_id
where status.name = "Not started"
AND user.name = "Donald Duck" ;

--Get all the tasks for 'Maryrose Meadows' that were created in september

select task.title,user.name,task.created
from task
join user_task on task.id = user_task.task_id
join user on user.id = user_task.user_id
where user.name ="Maryrose Meadows" AND
month(task.created) = 09;

--How many tasks where created in each month

select MONTHNAME(task.created) as month, count(*) as task_count
from task 
GROUP BY 
MONTHNAME(task.created);