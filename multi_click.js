const robot = require('robotjs');

// Function to perform multiple clicks
function performMultipleClicks(numClicks) {
    for (let i = 0; i < numClicks; i++) {
        robot.mouseClick(); // Perform a mouse click
        // You can add a delay here using setTimeout if needed
    }
}

// Call the function to perform 5 clicks
performMultipleClicks(5);
