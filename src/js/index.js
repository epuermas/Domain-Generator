/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "../style/index.scss";

window.onload = function() {
  let pronoun = ["the", "our", "their", "his", "her"];
  let adj = ["great", "friendly", "gigantic", "scary", "invisible"];
  let noun = ["engineer", "man", "helper", "friend", "developer"];

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
