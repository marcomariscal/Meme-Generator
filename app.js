let memeForm = document.getElementById("new-meme-form");
let memeContainer = document.getElementById("meme-container");

function addMeme(e) {
  e.preventDefault();

  let url = e.target[0].value;
  let topText = e.target[1].value;
  let bottomText = e.target[2].value;

  let newMeme = document.createElement("figure");
  newMeme.innerHTML = `<img src="${url}" />`;
  let figCaptionTop = document.createElement("figcaption");
  let figCaptionBottom = document.createElement("figcaption");

  figCaptionTop.innerText = topText;
  figCaptionBottom.innerText = bottomText;
  figCaptionTop.classList = "caption-top";
  figCaptionBottom.classList = "caption-bottom";

  memeContainer.appendChild(newMeme);
  newMeme.appendChild(figCaptionTop);
  newMeme.appendChild(figCaptionBottom);

  memeForm.reset();
}

function removeMeme(e) {
  let targetTagToLowerCase = e.target.tagName.toLowerCase();
  if (targetTagToLowerCase === "img") {
    e.target.parentNode.remove();
  }
}

memeForm.addEventListener("submit", addMeme);
memeContainer.addEventListener("click", removeMeme);
