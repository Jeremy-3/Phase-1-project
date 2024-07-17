// UTILITY FUNCTIONS

function createAnElement(element) {
  return document.createElement(element);
}

function addText(element, text) {
  return (element.innerText = text);
}

function appendChild(child, parent) {
  return parent.appendChild(child);
}

function select(selector) {
  return document.querySelector(selector);
}

function listen(element, event, callback) {
  return element.addEventListener(event, callback);
}

const url = "http://localhost:3000/games";

fetch(url)
  .then((res) => res.json())
  .then((games) =>
    games.forEach((game) => {
      createGame(game);
    })
  )
  .catch((error) => console.log("ERROR Unexpected Input"));

function createGame(game) {
  const list = select("#game-list");
  const divcard = createAnElement("div");
  divcard.className = "game";
  const html = `
<div>
<img src=${game.covers} alt="game cover should be here">
</div>
<div>
<h2>Title :${game.name}</h3>
</div>
<div>
<h3>price :${game.price}</h3>
</div>
<div class ="btn">
<button type="button" id="buy">GET YOURS TODAY</button>
<div>
`;
  divcard.innerHTML = html;
  appendChild(divcard, list);
}
