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
        // addcardbtn.style.display = "none";
        // addcardclose.style.display = "none";
        cardbtnandclose.style.display = "none"
    }
});

function addnewcard(text){
    let addedcards = document.createElement("div")
    addedcards.id= "added-card"
    addedcards.setAttribute('draggable' , 'true')
    addedcards.innerHTML = text

    createdcard.appendChild(addedcards)
    storecard(text)
}

function storecard(text){
    let cards = JSON.parse(localStorage.getItem("cards")) || []
    cards.push(text)
    localStorage.setItem('cards' , JSON.stringify(cards))
}



function loadcards(){
    let cards = JSON.parse(localStorage.getItem("cards")) || []
    if(cards){
    cards.forEach((text) => {
        addnewcard(text)
        
    })
    }  
}

cardinputform.addEventListener("submit" , (event) =>{
    event.preventDefault()
    let text = addcard.value
    if(text.trim() === ""){
        alert("Please enter text")
    }else{
        addnewcard(text)
        addcard.value = ""
    }
    // if(text !== ""){
        //     addnewcard(text)
        // }
        
    })


    document.addEventListener("DOMContentLoaded" , () =>{
        loadcards()
    })
