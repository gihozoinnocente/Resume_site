const form = document.querySelector("form");
const table = document.querySelector("table");
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");



const tableHead = data =>{
    let ObjectKeys;
    for(let items of data){
        ObjectKeys = Object.keys(items);
    }

let row = document.createElement("tr");
for(let key of ObjectKeys){
    let heading = document.createElement("th");
    heading.innerText = key;
    row.appendChild(heading);
}
tableHead.appendChild(row);
tableHead.appendChild(thead);
}


const tableBody = data =>{
    for(let items of data){
        let Object = Object.values(items);
        let row = document.createElement("tr");
        for(let values of ObjectKeys){
            let cell = document.createElement("td");
            cell.innerText = values;
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    tableBody.appendChild(tbody);
    console.log(table)
}


const readItem = () =>{
    const storage = JSON.parse(localStorage.getItem("articles"))
    if(storage && storage.length> 1){
        tableHead(storage);
        tableBody(storage);
    }else {
        return;
    }

};