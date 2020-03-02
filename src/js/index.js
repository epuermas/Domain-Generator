/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  var pronoun = ["the", "our", "their", "his", "her"];
  var adj = ["great", "big", "gigantic", "scary", "furry", "friendly"];
  var noun = ["cat", "dog", "helper", "friend", "developer"];

  let emptyArray = [];
  for (let i in pronoun)
    for (let b in adj)
      for (let c in noun)
        emptyArray.push(
          "http://www." + pronoun[i] + adj[b] + noun[c] + ".com <br>"
        );
  console.log(emptyArray);
  document.querySelector(".domains").innerHTML = emptyArray;
};
