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
// getting all resourses
const url = "https://phase1-backend.vercel.app/games";
fetch(url)
  .then((res) => res.json())
  .then((games) =>
    games.forEach((game) => {
      createGame(game);
    })
  )
  .catch((error) => console.log("ERROR Unexpected Input"));

// function to create a single game card
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

// posting a resourse(single game card)
const form = select("#form");

function events(e) {
  //prevent form from reloading
  e.preventDefault();

  // getting form inputs
  let coverUrl = select("#cover").value;
  let title = select("#title").value;
  let amount = select("#price").value;

  // creating object from form inputs
  const formData = {
    covers: coverUrl,
    name: title,
    price: amount,
  };

  // sending data to the server using fetch api
  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((game) => console.log(game));
}

function handleKeydown(event) {
  console.log("KEY PRESSED:", event.key);
}
const inputs = select('input[type="text"]');

function handleFocus(event) {
  event.target.style.background = "pink";
}
function handleBlur(event) {
  event.target.style.background = "";
}

listen(form, "submit", events);
listen(form, "keydown", handleKeydown);
listen(inputs, "focus", handleFocus);
listen(inputs, "blur", handleBlur);
