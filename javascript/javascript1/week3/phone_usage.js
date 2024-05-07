//phone usage
const activities = [];
const USER_LIMIT = 150;
const WARNING_THRESHOLD = USER_LIMIT * 0.8;
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
  checkWarningThreshold(totalDuration); //it's probably not the best place for a warning but it'll be nice to notify user about threshold
  return activities;
}
function checkWarningThreshold(time) {
  if (time >= WARNING_THRESHOLD) {
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
  for (let activity of activities) {
    if (activity.duration > maxTime) {
      maxTime = activity.duration;
    }
  }
  return maxTime;
}

function showStatus(date) {
  //date must be correct format though. Is it possible/necessary to be flexible here?
  let totalTime = 0;
  let amountOfActivities = 0;
  for (let activity of activities) {
    if (activity.date === date) {
      totalTime += activity.duration;
      amountOfActivities++;
    }
  }
  if (amountOfActivities === 0) {
    return `No activities found on ${date}`;
  }
  let message = `You have added ${amountOfActivities} ${
    amountOfActivities === 1 ? "activity" : "activities"
  } on ${date}. They amount to ${totalTime} minutes.`;
  if (totalTime > USER_LIMIT) {
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
const logUsage = showStatus("06/05/2024");
console.log(logUsage);
const logTimes = calculateCategoriesTimes();
console.log(logTimes);
console.log(calculateMaxTime());
