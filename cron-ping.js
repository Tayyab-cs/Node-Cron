const cron = require('node-cron');

const cronSchedule = '* * * * * *'; // running after every 1 min. first star is optional.
// const cronSchedule = '* * * January,September Sunday'; // running on Sundays of January and September.
// const cronSchedule = '* * * Jan,Sep Sun';    // In-short
// const cronSchedule = '*/2 * * * *'; // running a task every two minutes.
// const cronSchedule = '1-5 * * * *'; // running every minute to 1 from 5.
cron.schedule(cronSchedule, function () {
  console.log('running a task every minute');
});
