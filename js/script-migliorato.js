/***************************
    VARIABILI GLOBALI
***************************/
const animalArray = dataArray.filter(el=>(el.type === "animal"));
const vegetalArray = dataArray.filter(el=>(el.type === "vegetable"));
const humanArray = dataArray.filter(el=>(el.type === "user"));

const stampaQui = document.querySelector(".main-col");
// const AF = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(AF);


/***************************
    FUNZIONI DI UTILITà
***************************/
function stampaSchede (arr) {
    arr.forEach(el => {
        const {name, prefix, type, color} = el;
        stampaScheda(name, prefix, type, color);
    })
}

function stampaScheda(name, prefix, type, color){
    stampaQui.innerHTML +=
    `
    <div class="my-card ${type}">
        <i class="${prefix}solid ${prefix}${name} ${type}" style="color:${color}"></i>
        <p>${name}</p>
    </div>
    `
}

function stampaSelezionato(){
    document.getElementById("filter").addEventListener("change", function(){
        if(this.value == 0){
            stampaQui.innerHTML = "";
            stampaSchede(dataArray);
        } else if(this.value == 1){
            stampaQui.innerHTML = "";
            stampaSchede(animalArray);
        } else if(this.value == 2){
            stampaQui.innerHTML = "";
            stampaSchede(vegetalArray);
        } else if(this.value == 3){
            stampaQui.innerHTML = "";
            stampaSchede(humanArray);
        }
    })
}


/***************************
    INIZIALIZZAZIONE
***************************/
stampaSchede(dataArray);
stampaSelezionato();

