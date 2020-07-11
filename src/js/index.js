/* eslint-disable */
import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "../style/index.scss";

window.onload = function() {
  let pronoun = ["the", "our", "their", "his", "her"];
  let adj = ["great", "friendly", "gigantic", "scary", "invisible"];
  let noun = ["engineer", "man", "helper", "friend", "developer"];
  let ext = [".com", ".net", ".edu", ".io", ".org", ".int"];

  let emptyArray = [];
  for (let a in pronoun)
    for (let b in adj)
      for (let c in noun)
        for (let d in ext)
          emptyArray.push(
            "http://www." + pronoun[a] + adj[b] + noun[c] + ext[d] + "<br>"
          );

  let emptyArrayJoined = emptyArray.join(" ");

  console.log(emptyArrayJoined);

  document.querySelector(".domains").innerHTML = emptyArray;
};
