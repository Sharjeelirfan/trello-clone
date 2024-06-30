const addcard = document.querySelector("#add-card")
const cardinputform = document.querySelector("#card-input-form")
const addcardbtn = document.querySelector("#add-card-btn")
const addcardclose = document.querySelector("#card-input-close")
const cardbtnandclose = document.querySelector("#form-btn-and-close")


const createdcard = document.querySelector("#created-cards")


cardinputform.addEventListener("click" , (event) =>{
    event.stopPropagation()
    // addcardbtn.style.display = "inline"
    // addcardclose.style.display = "inline"
    cardbtnandclose.style.display = "block"
})

addcardclose.addEventListener("click" , (event) =>{
        event.stopPropagation()
        addcard.value = "";
        cardbtnandclose.style.display = "none"
        
})
document.addEventListener("click", (event) => {
    if (!cardinputform.contains(event.target)) {
        cardbtnandclose.style.display = "none"
        // addcard.value = ""
    }
});


cardinputform.addEventListener("submit" , (event) =>{
    event.preventDefault()
    let text = addcard.value
    if(text.trim() === ""){
        alert("Please enter text")
    }else{
        addnewcard(text)
        addcard.value = ""
    }
        
    })
    
    
    function addnewcard(text){
        let addedcards = document.createElement("div")
        addedcards.className= "added-card"
        addedcards.setAttribute('draggable' , 'true')
        addedcards.innerHTML = text
    
        createdcard.appendChild(addedcards)

    
        saveCardsToLocalStorage();

        // saveCard(text)

    }

    
    
    function saveCardsToLocalStorage() {
    const cards = [];
    document.querySelectorAll(".added-card").forEach(card => {
        cards.push(card.innerHTML);
    });
    localStorage.setItem("cards", JSON.stringify(cards));
}

function loadCardsFromLocalStorage() {
    const cards = JSON.parse(localStorage.getItem("cards"));
    if (cards) {
        cards.forEach(text => addnewcard(text));
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    loadCardsFromLocalStorage();
});
    


    // from this way cards are incrasing ! idont know why this way is not work. 
    
    // function saveCard(text) {
    //     let cards = JSON.parse(localStorage.getItem("cards")) || [];
    //     cards.push(text);
    //     localStorage.setItem("cards", JSON.stringify(cards));
    // }
    
    // function loadCards() {
    //     let cards = JSON.parse(localStorage.getItem("cards")) || [];
    //     cards.forEach(text => addnewcard(text));
    // }
    
    // document.addEventListener("DOMContentLoaded", (event) => {
    //     loadCards(); 
    // });
        