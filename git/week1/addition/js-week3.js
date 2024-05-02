const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

names.splice(names.indexOf(nameToRemove), 1);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function calculateTime(travelObject) {
  const time = travelObject.destinationDistance / travelObject.speed;
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);
  return `${hours} hours and ${minutes} minutes.`;
}
const travelTime = calculateTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
  {
    title: "Breaking Bad",
    days: 2,
    hours: 3,
    minutes: 40,
  },
];
function timeSpendOnSeries() {
  const avgLifeSpan = 80; //in years
  const avgLifeSpanInMin = avgLifeSpan * 365 * 24 * 60; //in minutes
  let totalSeriesTime = 0;
  seriesDurations.forEach((element) => {
    const daysInMin = element.days * 24 * 69;
    console.log(daysInMin);
    const hoursInMin = element.hours * 60;
    console.log(hoursInMin);
    const minutes = element.minutes;
    console.log(minutes);
    const totalTime = daysInMin + hoursInMin + minutes;
    totalSeriesTime += totalTime;
    console.log(`You spent ${totalTime} minutes watching ${element.title}`);
  });
  console.log(`You spent ${totalSeriesTime} watching your favorite shows.`);
}
//const timeTotalInMin = seriesDurations[0].days * 24 * 60;
//console.log(timeTotalInMin);
/*Game of thrones took 0.01% of my life
Sopranos took 0.012% of my life
The Wire took 0.007% of my life

In total that is 0.2% of my life*/
//console.log(timeSpendOnSeries());
const notes = [];
const compliments = [
  "Awesome job!",
  "Well done!",
  "Great work!",
  "Fantastic!",
  "Impressive!",
  "Superb!",
  "Bravo!",
  "Excellent!",
  "Outstanding!",
  "Amazing!",
];
function saveNote(content, id, done = false) {
  // The saveNote function should push an object to the notes array with the keys content and id
  let note = { content: content, id: id, done: done };
  return notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
  for (let note of notes) {
    if (note.id === id) {
      return note;
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  for (let note of notes) {
    console.log(
      `The note with id:${note.id}, has the following note text: ${note.content}`
    );
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
function markAsDone(id) {
  for (let note of notes) {
    if (note.id === id) {
      note.done = true;
      const randomNumber = Math.floor(Math.random() * compliments.length);
      const praise = compliments[randomNumber];
      console.log(`${praise} The task "${note.content}" is done.`);
      return;
    }
  }
}
markAsDone(2);

//phone usage
const activities = [];
const USER_LIMIT = 120;
const WARNING_THRESHOLD = USER_LIMIT * 0.8;
const categories = {
  Social: ["Instagram", "Tik Tok", "Messenger"],
  Intertainment: ["Netflix", "Games", "YouTube"],
};
let totalDuration = 0;

function addActivity(date, activity, duration) {
  const type = getActivity(activity);
  const userActivity = {
    date,
    activity,
    duration,
    type,
  };
  activities.push(userActivity);
  totalDuration += duration;
  if (totalDuration >= WARNING_THRESHOLD) {
    console.warn("Warning: You are approaching your usage limit.");
  }
  return activities;
}
function getActivity() {}
console.log(addActivity("23/7-18", "Youtube", 100));
addActivity("23/7-18", "Netflix", 40);
addActivity("23/04/2024", "Netflix", 15);

const groups = categories.map((category) => {
  return {
    category,
    items: activities.filter((activity) => activity.type === category),
  };
});
console.log(groups);

function showStatus(activities) {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }
  const amountOfActivities = activities.length;
  let totalTime = 0;
  for (let activity of activities) {
    totalTime += activity.duration;
  }
  if (activities.length === 1) {
    console.log(
      `You have added ${amountOfActivities} activity. It amounts to ${totalTime} min of usage.`
    );
  } else {
    console.log(
      `You have added ${amountOfActivities} activities. They amount to ${totalTime} min of usage.`
    );
  }
  if (totalTime > USER_LIMIT)
    console.log("You have reached your limit, no more smartphoning for you!");
}
showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"

/*
activities should now look like this
[{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
}]
*/
