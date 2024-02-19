//DOM ELEMENT
const contactForm = document.getElementById("contactForm");
const queriesContainer = document.querySelector(".queries");
const nameInput = contactForm["name"];
const textInput = contactForm["text"];
const emailInput = contactForm["email"];


const queries = JSON.parse(localStorage.getItem("queries")) || [];
   
const addMessage = (name,text,email) =>{
    // localStorage.setItem("queries",JSON.stringify(queries)) /// to re-read
        queries.push({
        name,
        text,
        email,
    })
    localStorage.setItem("queries",JSON.stringify(queries))

    return { name,text,email};
};
const createQueriesElement = ({text,name,email}) =>{
    const queriesDiv = document.createElement("div");
    const queriesName = document.createElement("h3");
    const queriesText = document.createElement("p");
    const queriesEmail = document.createElement("p");

    queriesName.innerText = "queries Name: " + name;
    queriesText.innerText = "queries Text: " + text;
    queriesEmail.innerText = "queries Email: " + email;

    queriesDiv.append(queriesName,queriesText,queriesEmail);
    queriesContainer.appendChild(queriesDiv);

}

queries.forEach(createQueriesElement);

contactForm.onsubmit = e =>{
    e.preventDefault ();

const newQueries = addMessage(
    nameInput.value,
    textInput.value,
    emailInput.value,
)

createQueriesElement(newQueries);
    
    nameInput.value = "";
    textInput.value = "";
    emailInput.value = "";
};



// console.log(addMessage())