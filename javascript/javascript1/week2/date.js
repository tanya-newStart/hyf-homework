function getEventWeekday(num) {
  const today = new Date();
  const weekday = today.getDay();
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day_index = (weekday + num) % 7;
  return week[day_index];
}
console.log(getEventWeekday(1));
console.log(getEventWeekday(2));
