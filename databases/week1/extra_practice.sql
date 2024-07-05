SELECT user.name,task.title
FROM (user JOIN task on user.id =task.user_id)
WHERE user.name = "Pablo Kisbee";

Select user.name, task.title
from (user LEFT Join task on user.id = task.user_id)
where task.user_id is NULL;

select user.name,task.title
from (user RIGHT JOIN task on user.id = task.user_id)
where user.id is NULL;

desc `user`;

insert into user(name,email,phone)
values("Tanya", "tanya.dewland@gmail.com", "45-50-45-21");

select * 
from user;

update user 
set email = "zlata.dewland@yahoo.com"
where id = 13;

select * from user;
