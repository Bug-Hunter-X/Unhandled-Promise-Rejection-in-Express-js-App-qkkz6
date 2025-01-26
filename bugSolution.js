const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(next);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.5; // 50% chance of success
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}