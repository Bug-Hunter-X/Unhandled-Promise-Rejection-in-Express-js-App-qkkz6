# Unhandled Promise Rejection in Express.js App

This repository demonstrates a common error in Express.js applications: unhandled promise rejections.  The provided `bug.js` file showcases an asynchronous operation within a route handler that lacks comprehensive error handling.  This can lead to unexpected crashes and a poor user experience.

The `bugSolution.js` file provides a corrected version with improved error handling, demonstrating best practices for preventing such issues.

## Steps to Reproduce (bug.js)

1. Clone the repository.
2. Run `npm install express`.
3. Run `node bug.js`.
4. Refresh the page several times; you might encounter crashes because of unhandled promise rejections.

## Solution (bugSolution.js)

The solution demonstrates proper error handling within the async operation's `.catch` block. It also includes a centralized error handler for uncaught exceptions.