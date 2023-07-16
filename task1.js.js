
const fs = require("fs");
//1
const person = {
  fname: "Ahmed",
  lname: "Hossam",
  age: 20,
  city: "Alex",
};
//2
const personJson = JSON.stringify(person);
//3
fs.writeFileSync("person.json", personJson);
//4
const fileData = fs.readFileSync("person.json", "utf-8");
//5
const retrievedPerson = JSON.parse(fileData);
//6
retrievedPerson.fname = "Adel";
retrievedPerson.lname = "Ahmed";
retrievedPerson.age = 40;
retrievedPerson.city = "Cairo";
//7
const updatedPersonJson = JSON.stringify(retrievedPerson);
//8
fs.writeFileSync("updatedPerson.json", updatedPersonJson);
