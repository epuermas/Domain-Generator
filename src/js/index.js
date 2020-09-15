/* eslint-disable */
import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/4geeks.ico";
import "../style/index.scss";

/* Declaring the function */
window.onload = function() {
  let pronoun = ["the", "our", "their", "his", "this", "her"];
  let adj = ["great", "friendly", "gigantic", "scary", "invisible"];
  let noun = ["engineer", "man", "helper", "friend", "developer"];
  let ext = [".com", ".net", ".edu", ".io", ".org", ".au"];

  /* Create new empty array and loop all possible names */
  let emptyArray = [];
  /* Concatinate all possible names */
  for (let a in pronoun)
    for (let b in adj)
      for (let c in noun)
        for (let d in ext)
          emptyArray +=
            "http://www." + pronoun[a] + adj[b] + noun[c] + ext[d] + "<br>";

  /* Return the domains */
  console.log(emptyArray);

  document.querySelector(".domains").innerHTML = emptyArray;
};
