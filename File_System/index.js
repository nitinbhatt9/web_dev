import fs from "fs";

fs.writeFileSync("new.js", "//this is the data inside the file", "utf8");
const data = fs.readFileSync("new.js", "utf8");
console.log("data");

fs.appendFileSync("new.js", " this is appended (line) data.", "utf8");
const updatedData = fs.readFileSync("new.js", "utf8");
console.log(updatedData);

fs.renameSync("new.js", "renamed.js");
