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
  {
    title: "Endeavour",
    days: 4,
    hours: 8,
    minutes: 10,
  },
];

const avgLifeSpan = 80; //in years
const avgLifeSpanInMin = avgLifeSpan * 365 * 24 * 60; //in minutes

function timeSpendOnSeries() {
  const percentages = [];
  let totalPercentage = 0;
  seriesDurations.forEach((element) => {
    const daysInMin = element.days * 24 * 60;
    const hoursInMin = element.hours * 60;
    const minutes = element.minutes;
    const totalTime = daysInMin + hoursInMin + minutes;
    const percentage = (totalTime / avgLifeSpanInMin) * 100;
    percentages.push({
      title: element.title,
      percentage: percentage.toFixed(3),
    });
    totalPercentage += percentage;
  });
  return {
    percentages,
    total: totalPercentage.toFixed(3),
  };
}
const timeLog = timeSpendOnSeries();

for (let i = 0; i < timeLog.percentages.length; i++) {
  const series = timeLog.percentages[i];
  console.log(`You spent ${series.percentage}% watching ${series.title}`);
}
console.log(`In total, that is ${timeLog.total}% of your life`);
