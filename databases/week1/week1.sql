-- Active: 1719823579315@@0.0.0.0@3306@hyfdatabase


-- count the number of tasks (35)
select count (*) from task;

--how many tasks in the task table do not have a valid due date (8)
select count (*) as invalid_due_date
from task
where due_date IS NULL;

-- all the tasks that are marked as done(there are 12)

select t.title as done_tasks
from task t
join status s on t.status_id = s.id
where s.name ="Done";

--all the tasks that are not marked as done (23)
select t.*
from task t
join status s on t.status_id = s.id
where s.name = "Not started" or s.name = "In progress";

-- all the tasks, sorted with the most recently created first
select * 
from task 
order by created desc;

--Get the single most recently created task (Look at apartments in Ørestad)
select *
from task 
order by created desc
limit 1;


--Get the title and due date of all tasks where the title or description contains database(5)
select t.title,t.due_date 
from task t
where t.title like "%database%" or t.description like "%database%";


--Get the title and status (as text) of all tasks
select t.title,s.name as status
from task t
join status s on t.status_id = s.id;

--Get the name of each status, along with a count of how many tasks have that status(not started:8,In progress:15, Done:12)
select s.name as status, count(*) as task_count
from task t
join status s on t.status_id = s.id
group by s.name;

--Get the names of all statuses, sorted by the status with most tasks first
select s.name as status, count(*) as task_count
from task t
join status s on t.status_id = s.id
group by s.name
order by task_count desc;
