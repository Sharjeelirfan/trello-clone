    // this way to save data in local storage is not work !from this way cards are incrasing ! idont know why. 
    
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
        


    const bodydiv = document.querySelector("#body")
    const addmorelistform = document.querySelector("#add-more-list-form")
    const morelist = document.querySelector("#more-lists")
    const addordellistbtn = document.querySelector("#addordellist")
    const addlistinput = document.querySelector("#add-list")
    const closelist = document.querySelector("#close")
    const addlistbtn = document.querySelector("#add-list-btn")

    
addmorelistform.addEventListener("submit" , (event) =>{
    event.preventDefault()
    let listname = addlistinput.value
    if(listname.trim() === ""){
        alert("Please enter text")
    }else{
        addlistinput.value = ""
        addlist(listname)
    }  
    })

    function addlist (listname){
        let myCard = document.createElement("div") 
        myCard.id  = 'card'
        let cardtop = document.createElement("div")
        cardtop.id = 'card-top'
        let h3 = document.createElement("h3")
        h3.id = 'card-heading'
        h3.innerHTML = listname
        let moreimg = document.createElement("img")
        moreimg.src = 'more.png'
        moreimg.id = 'more'
        let textdiv = document.createElement("div")
        textdiv.id = 'created-cards'
        let cardinput = document.createElement("div")
        cardinput.id = 'card-input'
        let form = document.createElement("form")
        form.id = 'card-input-form'
        let input = document.createElement("input")
        input.setAttribute("type" , "text")
        input.setAttribute("placeholder" , "+  Add a card")
        input.id = 'add-card'
        let divforbtnnicon = document.createElement("div")
        divforbtnnicon.id = 'form-btn-and-close'
        let btn = document.createElement("button")
        btn.id = 'add-card-btn'
        btn.innerText = 'Add card'
        let closeimg = document.createElement("img")
        closeimg.src = "./close.png"
        closeimg.id = 'card-input-close'


        
        bodydiv.appendChild(myCard)
        myCard.appendChild(cardtop)
        cardtop.appendChild(h3)
        cardtop.appendChild(moreimg)
        myCard.appendChild(textdiv)
        cardinput.appendChild(form)
        myCard.appendChild(cardinput)
        form.appendChild(input)
        form.appendChild(divforbtnnicon)
        divforbtnnicon.appendChild(btn)
        divforbtnnicon.appendChild(closeimg)
        

        bodydiv.insertBefore(myCard , morelist)



        form.addEventListener("submit" , (event) =>{
            event.preventDefault()
            let text = input.value
            if(text.trim() === ""){
                alert("Please enter text")
            }else{
                input.value = ""
                addnewcard(text)
            }
                
            })


    function addnewcard (text){                   
        let addedcards = document.createElement("div")
        addedcards.className= "added-card"
        addedcards.setAttribute('draggable' , 'true')
        addedcards.innerHTML = text 

        let del = document.createElement("div")
        del.innerHTML =  '<img src="./delete.png">' 
        del.className = 'del-btn'
        del.addEventListener("click" , () => {
            addedcards.remove()
            // saveCardsToLocalStorage(); 
        })
        // saveCardsToLocalStorage();
        
        addedcards.appendChild(del)
        textdiv.appendChild(addedcards)

        
            

        
    }

    
form.addEventListener("click" , (event) =>{
    event.stopPropagation()
    // addcardbtn.style.display = "inline"
    // addcardclose.style.display = "inline"
    divforbtnnicon.style.display = "block"
})



closeimg.addEventListener("click" , (event) => {
    event.stopPropagation()
    input.value = "";
    divforbtnnicon.style.display = "none"
    
})


document.addEventListener("click", (event) => {
    if (!form.contains(event.target)) {
        divforbtnnicon.style.display = "none"
        // addcard.value = ""
    }
});


// const cards = JSON.parse(localStorage.getItem("cards")) || [];
// cards.forEach(cardText => addnewcard(cardText, textdiv));

    }
    
    addmorelistform.addEventListener('click' , (event) => {
        event.stopPropagation()
        addordellistbtn.style.display = "block"
    })

    document.addEventListener("click", (event) => {
        if (!addmorelistform.contains(event.target)) {
            addordellistbtn.style.display = "none"
            
        }
    });

    
    





//     function saveCardsToLocalStorage() {
//     const cards = [];
//     document.querySelectorAll(".added-card").forEach(card => {
//         cards.push(card.firstChild.textContent);
//     });
//     localStorage.setItem("cards", JSON.stringify(cards));
// }

//     function loadCardsFromLocalStorage() {
//     const cards = JSON.parse(localStorage.getItem("cards"));
//     if (cards) {
//         cards.forEach(text => addnewcard(text));
//     }
// }
    