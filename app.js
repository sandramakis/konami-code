"use strict";

const pressed = [];
const secretCode = "makis";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);

  //get the length of 5
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  // log the array

  // check for if the array contains 'makis'
  if (pressed.join("").includes(secretCode)) {
    console.log("Yayy!");
    cornify_add();
  }

  console.log(pressed);
});
