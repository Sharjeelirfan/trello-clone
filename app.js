// this way to save data in local storage is not work !from this way cards are incrasing ! idont know why.

// function saveCard(text) {
//     // let 
//     let cards = JSON.parse(localStorage.getItem("cards")) || [];
//     cards.push(text);
//     localStorage.setItem("cards", JSON.stringify(cards));
// }

// function loadCards() {
//     let cards = JSON.parse(localStorage.getItem("cards")) || [];
//     cards.forEach(text => addnewcard(text));
// }

// document.addEventListener("DOMContentLoaded", () => {
//     loadCards();
// });

function saveCard(listName, text) {
  let lists = JSON.parse(localStorage.getItem("lists")) || {};
  if (!lists[listName]) {
    lists[listName] = [];
  }
  if(!lists[listName].includes(text)){
    lists[listName].push(text);
  localStorage.setItem("lists", JSON.stringify(lists));
 }
}

function loadCards() {
  let lists = JSON.parse(localStorage.getItem("lists")) || {};
  // for (const [listName, cards] of Object.entries(lists)) {
  //   addlist(listName);
  //   cards.forEach((text) => addnewcard(listName, text));
  // }

    document.querySelectorAll(".card").forEach((card) => card.remove());

  let listNames = Object.keys(lists);

  for (let i = 0; i < listNames.length; i++) {
    let listName = listNames[i];
    let cards = lists[listName];
    addlist(listName);

    for (let j = 0; j < cards.length; j++) {
      let text = cards[j];
      addnewcard(listName, text);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadCards();
});






const bodydiv = document.querySelector("#body");
const addmorelistform = document.querySelector("#add-more-list-form");
const morelist = document.querySelector("#more-lists");
const addordellistbtn = document.querySelector("#addordellist");
const addlistinput = document.querySelector("#add-list");
const closelist = document.querySelector("#close");
const addlistbtn = document.querySelector("#add-list-btn");

addmorelistform.addEventListener("submit", (event) => {
  event.preventDefault();
  let listname = addlistinput.value;
  if (listname.trim() === "") {
    alert("Please enter text");
  } else {
    addlistinput.value = "";
    addlist(listname);
  }
});

function addlist(listname) {
  let myCard = document.createElement("div");
  myCard.className = "card";
  let cardtop = document.createElement("div");
  cardtop.className = "card-top";
  let h3 = document.createElement("h3");
  h3.className = "card-heading";
  h3.innerHTML = listname;
  let moreimg = document.createElement("img");
  moreimg.src = "more.png";
  moreimg.className = "more";
  let textdiv = document.createElement("div");
  textdiv.className = "created-cards";
  let cardinput = document.createElement("div");
  cardinput.className = "card-input";
  let form = document.createElement("form");
  form.id = "card-input-form"; ///////////////
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "+  Add a card");
  input.className = "add-card";
  let divforbtnnicon = document.createElement("div");
  divforbtnnicon.className = "form-btn-and-close";
  let btn = document.createElement("button");
  btn.className = "add-card-btn";
  btn.innerText = "Add card";
  let closeimg = document.createElement("img");
  closeimg.src = "./close.png";
  closeimg.className = "card-input-close";

  bodydiv.appendChild(myCard);
  myCard.appendChild(cardtop);
  cardtop.appendChild(h3);
  cardtop.appendChild(moreimg);
  myCard.appendChild(textdiv);
  cardinput.appendChild(form);
  myCard.appendChild(cardinput);
  form.appendChild(input);
  form.appendChild(divforbtnnicon);
  divforbtnnicon.appendChild(btn);
  divforbtnnicon.appendChild(closeimg);

  bodydiv.insertBefore(myCard, morelist);


  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let text = input.value;
    if (text.trim() === "") {
      alert("Please enter text");
    } else {
      input.value = "";
      addnewcard(listname, text);
    }
  });







  form.addEventListener("click", (event) => {
    event.stopPropagation();
    // addcardbtn.style.display = "inline"
    // addcardclose.style.display = "inline"
    divforbtnnicon.style.display = "block";
  });

  closeimg.addEventListener("click", (event) => {
    event.stopPropagation();
    input.value = "";
    divforbtnnicon.style.display = "none";
  });

  document.addEventListener("click", (event) => {
    if (!form.contains(event.target)) {
      divforbtnnicon.style.display = "none";
      // addcard.value = ""
    }
  });

}



  function addnewcard(listname, text) {
    let cardsContainers = document.querySelectorAll('.card');
  
  for (let i = 0; i < cardsContainers.length; i++) {
    let card = cardsContainers[i];
    let heading = card.querySelector('.card-heading');
    
    if (heading.innerHTML.trim() === listname) {
      let cardsContainer = card.querySelector('.created-cards');
    


    let addedcards = document.createElement("div");
    addedcards.className = "added-card";
    addedcards.setAttribute("draggable", "true");
    addedcards.innerHTML = text;

    let del = document.createElement("div");
    del.innerHTML = '<img src="./delete.png">';
    del.className = "del-btn";
    del.addEventListener("click", () => {
      // saveCard(listname , text);
      addedcards.remove();
      deleteCard(listname, text);
    });

    saveCard(listname, text);

    addedcards.appendChild(del);
    cardsContainer.appendChild(addedcards);

    }
  }
}



function deleteCard(listName, text) {
  let lists = JSON.parse(localStorage.getItem("lists")) || {};
  if (lists[listName]) {
    lists[listName] = lists[listName].filter((card) => card !== text);
    localStorage.setItem("lists", JSON.stringify(lists));
  }
}
addmorelistform.addEventListener("click", (event) => {
  event.stopPropagation();
  addordellistbtn.style.display = "block";
});

closelist.addEventListener("click", (event) => {
  event.stopPropagation();
  addordellistbtn.style.display = "none";
});

document.addEventListener("click", (event) => {
  if (!addmorelistform.contains(event.target)) {
    addordellistbtn.style.display = "none";
  }
});

