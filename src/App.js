import React, { useState } from "react";
import "./styles.css";
var color = "blue";
var likeCounter = 0;

var emojiDictionary = {
  "😁": "Beaming Face with Smiling Eyes",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤐": "Zipper-Mouth Face",
  "😑": "Expressionless Face",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🥳": "Partying Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  function likeClickHandler() {
    likeCounter = likeCounter + 1;
    console.log("clicked!", likeCounter);
    setLikeCounter(likeCounter);
  }

  var [userInput, setUserInput] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) meaning = "emoji not present in database";
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color, backgroundColor: "yellow" }}>EMOJI INTERPRETER</h1>
      <h2>Paste emoji in the tab below or click the emoji to know meaning </h2>
      <h2>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span style={{ fontSize: "2rem" }} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </h2>
      <input onChange={onChangeHandler}></input>
      <div style={{ color }}>{userInput}</div>
    </div>
  );
}
