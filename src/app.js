/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const whoCollection = ["The dog", "My grandma", "His turtle", "My bird"];
const actionCollection = ["ate", "peed", "crushed", "broke"];
const whatCollection = ["my homework", "the keys", "the car"];
const whenCollection = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const getRandomValueFromArray = arr =>
  arr[Math.floor(Math.random() * arr.length)];
const generateExcuse = (who, action, what, when) => {
  const excuse = `${getRandomValueFromArray(who)} ${getRandomValueFromArray(
    action
  )} ${getRandomValueFromArray(what)} ${getRandomValueFromArray(when)}`;
  return excuse;
};

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse(
    whoCollection,
    actionCollection,
    whatCollection,
    whenCollection
  );
});

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse(
    whoCollection,
    actionCollection,
    whatCollection,
    whenCollection
  );
};
