/***************************
    VARIABILI GLOBALI
***************************/
const stampaQui = document.querySelector(".main-col");
const seleziona = document.getElementById("filter");
const hexLimit = 6;
const alphaNum = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const optionArray = [];



/***************************
    FUNZIONI DI UTILITà
***************************/
const animalArray = dataArray.filter( (el) => el.type === "animal" );
const vegetalArray = dataArray.filter( (el) => el.type === "vegetable" );
const humanArray = dataArray.filter( (el) => el.type === "user" );

//  ---> COLORE
    // Tutto questo codice non è farina del mio sacco. E' qui solo perché possa studiarlo.
const rdmNumber = (max) => Math.floor(Math.random()*max);
    // Questa sintassi ad esempio, 0 chiara.
const rdmColor = (arr) => arr[rdmNumber(arr.length)];

function coloreCasuale(){
    const arrayColoreEstratto = [];
    for(let i=0; i<hexLimit; i++){
        arrayColoreEstratto.push(rdmColor(alphaNum));
    }
    const coloreHex = arrayColoreEstratto.join("");
    return coloreHex;
}

//  ---> STAMPA
function stampaSchede (arr) {
    arr.forEach(el => {
        const {name, prefix, type} = el;
        stampaScheda(name, prefix, type);
    })
}

function stampaScheda(name, prefix, type){
    stampaQui.innerHTML +=
    `
    <div class="my-card ${type}">
        <i class="${prefix}solid ${prefix}${name} ${type}" style="color: #${coloreCasuale()}"></i>
        <p>${name}</p>
    </div>
    `
}

function stampaSelezionato(){
    seleziona.addEventListener("change", function(){
        if(this.value == 0){
            stampaQui.innerHTML = "";
            stampaSchede(animalArray);
        } else if(this.value == 1){
            stampaQui.innerHTML = "";
            stampaSchede(vegetalArray);
        } else if(this.value == 2){
            stampaQui.innerHTML = "";
            stampaSchede(humanArray);
        } else{
            stampaQui.innerHTML = "";
            stampaSchede(dataArray);
        }
    })
}

//  ---> SELECT DINAMICO
// Creare una funzione; che mi estrapoli da un array di oggetti; non gli oggetti che posseggono una caratteristica, ma la caratteristica stessa.

function estrapolaOpzioni(){
    dataArray.forEach((el) => {
        if(!optionArray.includes(el.type)){
            optionArray.push(el.type);
        }
    })
}

function stampaOpzioni(){
    for(let i=0; i<optionArray.length; i++){
        seleziona.innerHTML += 
        `<option id="${optionArray[i]}" value="${i}">${optionArray[i]}</option>`
        console.log(i);
    }
}



/***************************
    INIZIALIZZAZIONE
***************************/
stampaSchede(dataArray);
stampaSelezionato();
estrapolaOpzioni();
stampaOpzioni();
