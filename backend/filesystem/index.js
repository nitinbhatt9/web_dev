import fs from "fs";

// this command is to write/create new file:
fs.writeFileSync("write.js", "new file", "utf8");

// this command is to read that created file:
const data = fs.readFileSync("write.js", "utf8");
console.log(data);

// this command is to add/make update on that file:
fs.appendFileSync("write.js", "//This is appended line", "utf8");
const updatedData = fs.readFileSync("write.js", "utf8");
console.log(updatedData);

fs.renameSync("write.js", "UpDated.js");
