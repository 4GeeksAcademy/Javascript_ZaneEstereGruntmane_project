/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  function generateExcuse() {
    const whoSentence = getRandomSentence(whoCollection);
    const actionSentence = getRandomSentence(actionCollection);
    const whatSentence = getRandomSentence(whatCollection);
    const whenSentence = getRandomSentence(whenCollection);

    return `${getRandomSentence()} ${actionSentence} ${whatSentence} ${whenSentence}`;
  }

  function getRandomSentence(wholeCollection) {
    const randomIndex = Math.floor(Math.random() * wholeCollection.length);
    return wholeCollection[randomIndex];
  }

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
};
