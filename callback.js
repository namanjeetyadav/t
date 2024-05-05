// function loadScript(src, Callback) {
//     var script = document.createElement("script");
//     script.src = src;

//     script.onload = function () {
//         console.log("Loaded script with SRC: " + src)
//         Callback();
//     }
//     document.body.appendChild(script);
// }

// function hello() {
//     alert('Hello World');
// }

// function goodmorning() {
//     alert('good morning');
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)


function makePizza(callback) {
    console.log("Making pizza...");
    // Simulating pizza making time with setTimeout
    setTimeout(function () {
        console.log("Pizza is ready!");
        // Once done, call back
        callback();
    }, 2000); // Simulating 2 seconds of making time
}

function pizzaReady() {
    console.log("Pizza callback function is executed!");
}

// Ordering pizza
makePizza(pizzaReady);
