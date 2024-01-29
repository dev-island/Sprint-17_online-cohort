require("dotenv").config();

function helloWorld() {
  console.log("Hello World");

  // or
  process.stdout.write("Hello Process!" + "\n");
}

function showMeTheArguments() {
  console.log(process.argv);
  process.argv.forEach(function (val, index, array) {
    console.log(index + ": " + val);
  });
}

// Getting user input
function sayHello() {
  console.log("What is your name");
  process.stdin.on("data", (data) => {
    console.log(`Hello ${data.toString().trim()}`);
    process.exit();
  });
}

function listenForTheProgramToClose() {
  process.on("exit", (code) => {
    setTimeout(() => {
      console.log("Will not get displayed");
    }, 0);

    console.log("Exited with status code:", code);
  });
}

function showMeTheENVVars() {
  console.log(process.env);
  console.log(process.env.MY_SECRET);
}

helloWorld();
showMeTheENVVars();
// showMeTheArguments()
// sayHello()
