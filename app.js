const addcard = document.querySelector("#add-card")
const createdcard = document.querySelector("#created-cards")


addcard.addEventListener("keyup" , (event) =>{
    if(event.key === "Enter"){
    event.preventDefault()
    let text = addcard.value
    if(text.trim() === ""){
        alert("Please enter text")

    }else{
        addnewcard(text)
        addcard.value = ""
    }
}
    // if(text !== ""){
    //     addnewcard(text)
    // }
})

function addnewcard(text){
    let addedcards = document.createElement("div")
    addedcards.id= "added-card"
    addedcards.setAttribute('draggable' , 'true')
    addedcards.innerHTML = text

    createdcard.appendChild(addedcards)
}