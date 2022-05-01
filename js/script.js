/*
**Milestone 1**
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
**Milestone 2**
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
**Milestone 3**
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

**BONUS**
1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
*/

/***************************
    VARIABILI GLOBALI
***************************/
const selezionatoreFiltro = document.getElementById("filter");
const stampaQui = document.querySelector(".main-col");

let arrayAnimali = [];
let arrayVegetali = [];
let arrayUtenti = [];


/***************************
    FUNZIONI DI UTILITà
****************************/
const pulisci = () => stampaQui.innerHTML="";

function stampaScheda(name, prefix, type, color){
    stampaQui.innerHTML += `
    <div class="my-card ${type}">
        <i class="${prefix}solid ${prefix}${name} ${type}" style="color:${color}"></i>
        <p>${name}</p>
    </div>
    `
}

function smistatore(data, type){
    //Qua devo solo smistare gli array.

	if(type.includes("animal")){
		arrayAnimali.push(data);
	} else if(type.includes("vegetable")){
		arrayVegetali.push(data);
	} else if(type.includes("user")){
		arrayUtenti.push(data);
	}

}

function ristampaSelezionato(){
    //Qua ristampo le cose selezionate

    selezionatoreFiltro.addEventListener("change", function(){

        if(this.value == 1){
            stampaQui.innerHTML = "";
			arrayAnimali.forEach((data) => {
				const {name, prefix, type, color} = data;
				stampaScheda(name, prefix, type, color);	
			})
        } else if (this.value == 2){
			stampaQui.innerHTML = "";
			arrayVegetali.forEach((data) => {
				const {name, prefix, type, color} = data;
				stampaScheda(name, prefix, type, color);		
			})
        } else if (this.value == 3){
			stampaQui.innerHTML = "";
			arrayUtenti.forEach((data) => {
				const {name, prefix, type, color} = data;
				stampaScheda(name, prefix, type, color);		
			})
        } else{
			stampaQui.innerHTML = "";
			dataArray.forEach((data) => {
				const {name, prefix, type, color} = data;
				stampaScheda(name, prefix, type, color);		
			})
        }
    });
}


/***************************
    INIZIALIZZAZIONE
****************************/
inizia();

function inizia(){
    
    // for(let data of dataArray){
    //     const {name, prefix, type, color} = data;
    //     stampaScheda(name, prefix, type, color);
    // }
    dataArray.forEach((data) => {
        const {name, prefix, type, color} = data;

        stampaScheda(name, prefix, type, color);

		smistatore(data, type);

    })

	selezionatoreFiltro.addEventListener("change", ristampaSelezionato);
}

