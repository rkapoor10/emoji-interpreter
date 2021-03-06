import React, { useState } from "react";
import "./styles.css";
var color = "blue";

var emojiDictionary = {
  "ð": "Beaming Face with Smiling Eyes",
  "ð": "Grinning Face with Sweat",
  "ðĪĢ": "Rolling on the Floor Laughing",
  "ð": "Face with Tears of Joy",
  "ð": "Slightly Smiling Face",
  "ð": "Upside-Down Face",
  "ð": "Winking Face",
  "ð": "Smiling Face with Smiling Eyes",
  "ð": "Smiling Face with Halo",
  "ð": "Smiling Face with Heart-Eyes",
  "ðĪĐ": "Star-Struck",
  "ð": "Face Blowing a Kiss",
  "ð": "Winking Face with Tongue",
  "ðĪŠ": "Zany Face",
  "ð": "Squinting Face with Tongue",
  "ðĪ": "Money-Mouth Face",
  "ðĪ": "Hugging Face",
  "ðĪ": "Zipper-Mouth Face",
  "ð": "Expressionless Face",
  "ð": "Smirking Face",
  "ð": "Unamused Face",
  "ð": "Face with Rolling Eyes",
  "ðŽ": "Grimacing Face",
  "ðĪĨ": "Lying Face",
  "ð": "Relieved Face",
  "ðī": "Sleeping Face",
  "ð·": "Face with Medical Mask",
  "ðĪ": "Face with Thermometer",
  "ðĪĒ": "Nauseated Face",
  "ðĪŪ": "Face Vomiting",
  "ðĪ§": "Sneezing Face",
  "ðĨĩ": "Hot Face",
  "ðĨķ": "Cold Face",
  "ðĩ": "Dizzy Face",
  "ðĪŊ": "Exploding Head",
  "ðĨģ": "Partying Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  function emojiClickHandler(emoji) {
    setEmoji(emoji);
    var meaning = emojiDictionary[emoji];
    setUserInput(meaning);
  }

  var [emoji, setEmoji] = useState("");

  var [userInput, setUserInput] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setEmoji(userInput);
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
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                cursor: "pointer",
                fontSize: "2rem",
                padding: "1rem",
                outerWidth: "80%"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </h2>
      <input onChange={onChangeHandler}></input>

      <div style={{ fontSize: "3rem" }}>{emoji}</div>

      <div style={{ color, fontSize: "1.5rem" }}>{userInput}</div>
    </div>
  );
}
