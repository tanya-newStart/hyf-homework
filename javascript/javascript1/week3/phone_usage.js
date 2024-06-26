//phone usage
const activities = [];
const userLimit = 150;
const warningThreshold = userLimit * 0.8;
const categories = {
  Social: ["Instagram", "Tik Tok", "Messenger", "WhatsApp"],
  Intertainment: ["Netflix", "Games", "YouTube"],
  Health: ["Fitbit"],
};
let totalDuration = 0;

function addActivity(activity, duration) {
  const date = new Date().toLocaleDateString();
  const type = assignCategory(activity);
  const userActivity = {
    date,
    activity,
    duration,
    type,
  };
  activities.push(userActivity);
  totalDuration += duration;
  checkWarningThreshold(totalDuration); //it's probably not the best place for a warning but it'll be nice to notify user about threshold somehow
  return activities;
}
function checkWarningThreshold(time) {
  if (time >= warningThreshold) {
    console.warn("Warning: You are approaching your usage limit.");
  }
}
function assignCategory(activity) {
  for (const category in categories) {
    if (categories[category].includes(activity)) return category;
  }
  return "Other";
}

function calculateCategoriesTimes() {
  const categoryTimes = {};
  for (const activity of activities) {
    if (!categoryTimes[activity.type]) {
      categoryTimes[activity.type] = 0; //initialize the property of obj.
    }
    categoryTimes[activity.type] += activity.duration;
  }
  return categoryTimes;
}

function calculateMaxTime() {
  let maxTime = 0;
  let longestActivity = null;
  for (let activity of activities) {
    if (activity.duration > maxTime) {
      maxTime = activity.duration;
      longestActivity = {
        title: activity.activity,
        duration: activity.duration,
      };
    }
  }
  return longestActivity;
}

function showStatus(date) {
  //date must be correct format though. Is it possible/necessary to be flexible here?
  let selectedDateTotalTime = 0;
  let selectedDateAmountOfActivities = 0;
  for (const activity of activities) {
    if (activity.date === date) {
      selectedDateTotalTime += activity.duration;
      selectedDateAmountOfActivities++;
    }
  }
  if (selectedDateAmountOfActivities === 0) {
    return `No activities found on ${date}`;
  }
  let message = `You have added ${selectedDateAmountOfActivities} ${
    selectedDateAmountOfActivities === 1 ? "activity" : "activities"
  } on ${date}. They amount to ${selectedDateTotalTime} minutes.`;
  if (selectedDateTotalTime > userLimit) {
    message += " You have reached your limit, no more smartphoning for you!";
  }
  return message;
}

// Test code
addActivity("YouTube", 10);
addActivity("Netflix", 40);
addActivity("Netflix", 115);
addActivity("Fitbit", 65);
addActivity("WhatsApp", 40);
addActivity("AccuWeather", 2);
console.log(activities);
const logUsage = showStatus("10/05/2024");
console.log(logUsage);
const logTimes = calculateCategoriesTimes();
console.log(logTimes);
const userMaxData = Object.entries(calculateMaxTime());

console.log(
  `Most of you time, or ${userMaxData[1][1]} minutes, was spent on ${userMaxData[0][1]}. `
);
