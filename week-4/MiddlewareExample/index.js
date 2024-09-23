// Import the Express module to set up a web server
const express = require('express');

// Create an instance of Express to handle routing and middleware
const app = express();

// Middleware function to check if the user is old enough (age >= 14)
function isOldEnoughMiddleware(req, res, next) {
    // Retrieve the 'age' parameter from the query string (URL)
    const age = req.query.age;

    // Check if the age is 14 or more
    if(age >= 14) {
        // If the user is old enough, allow the request to proceed to the next route handler
        next();
    } else {
        // If the user is not old enough, send a JSON response denying access
        res.json({
            "msg": "Sorry you are not allowed to ride"
        });
    }
}

// Apply the 'isOldEnoughMiddleware' to all routes in the application
app.use(isOldEnoughMiddleware);

// Route handler for the '/ride1' endpoint
// If the user passes the middleware check, they can access this route
app.get('/ride1', function(req, res) {
    // Send a JSON response confirming the user can start ride1
    res.json({
        "msg": "You can start the ride1"
    });
});

// Route handler for the '/ride2' endpoint
app.get('/ride2', function(req, res) {
    // Send a JSON response confirming the user can start ride2
    res.json({
        "msg": "You can start the ride2"
    });
});

// Route handler for the '/ride3' endpoint
app.get('/ride3', function(req, res) {
    // Send a JSON response confirming the user can start ride3
    res.json({
        "msg": "You can start the ride3"
    });
});

// Start the Express server and listen for requests on port 3000
app.listen(3000);
