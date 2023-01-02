let nameInput = document.querySelector("#name-input");
let addBtn = document.querySelector("#add-btn");
let content = document.querySelector(".content");

addBtn.addEventListener("click", generateName);

function generateName(event) {
  event.preventDefault();
  if (nameInput.value === "") {
    return;
  } else {
    let card = document.createElement("div");
    card.className = "card";
    content.appendChild(card);

    let close = document.createElement("i");
    close.classList.add("fa-solid", "fa-xmark");
    card.appendChild(close);
    close.addEventListener("click", removeCard);

    let hello = document.createElement("h3");
    hello.textContent = "Hello";
    card.appendChild(hello);

    let para = document.createElement("p");
    para.textContent = "My Name Is";
    card.appendChild(para);

    let nameTage = document.createElement("h2");
    nameTage.textContent = nameInput.value;
    card.appendChild(nameTage);
  }
  nameInput.value = "";
  nameInput.focus();
}

function removeCard(event) {
  event.target.parentElement.remove();
}
