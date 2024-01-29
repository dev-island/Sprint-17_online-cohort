const fs = require("fs");

function createFile() {
  console.log("what would you like to name your file?");
  process.stdin.on("data", (data) => {
    const fileName = data.toString().trim();
    fs.writeFile(fileName, "Hello World", (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
      process.exit();
    });
  });
}

async function updateFile() {
  console.log("what file would you like to update?");
  const fileName = await process.stdin.on("data", (data) => {
    return data.toString().trim();
  })
  console.log("what would you like to add to the file?");
  process.stdin.on("data", (data) => {
    const fileName = file;
    fs.appendFile(fileName, data, (err) => {
      if (err) throw err;
      console.log("The file has been updated!");
      process.exit();
    });
  });
}

function readFile() {
  console.log("what file would you like to read?");
  process.stdin.on("data", (data) => {
    const fileName = data.toString().trim();
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
      process.exit();
    });
  });
}

function deleteFile() {
  console.log("what file would you like to delete?");
  process.stdin.on("data", (data) => {
    const fileName = data.toString().trim();
    fs.unlink(fileName, (err) => {
      if (err) throw err;
      console.log("The file has been deleted!");
      process.exit();
    });
  });
}

// a function that reads the number of files in the current directory
function countFiles() {
  fs.readdir("./", (err, files) => {
    if (err) throw err;
    console.log(files.length);
  });
}

function app() {
  console.log(
    "what would you like to do? \n 1. Create a file \n 2. Read a file \n 3. Count files in current directory \n 4. Delete a file \n 5. Update a file"
  );
  process.stdin.on("data", (data) => {
    const choice = data.toString().trim();

    switch (choice) {
      case "1":
        createFile();
        break;
      case "2":
        readFile();
        break;
      case "3":
        countFiles();
        break;
      case "4":
        deleteFile();
        break;
      case "5":
        updateFile();
        break;
      default:
        console.log("invalid choice");
    }
  });
}

app();
