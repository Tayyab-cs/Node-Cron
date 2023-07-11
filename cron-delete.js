const cron = require('node-cron');
const fs = require('fs');

// const cronSchedule = '* * * * *';   // delete file after every 1 min.
// const cronSchedule = '0 0 21 * *';   // delete file on every 21
const cronSchedule = '*/2 * * * *'; // delete file after 2 mins.
cron.schedule(cronSchedule, function () {
  console.log('---------------------');
  console.log('Running Cron Job');
  fs.unlink('./error.log', (err) => {
    if (err) throw err;
    console.log('Error file successfully deleted');
  });
});
