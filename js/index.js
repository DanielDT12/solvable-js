// OPPGAVE EN
// PUTT IN RIKTIG VARIABEL INNI HVA DISSE BESKRIVER

// variabler: 
// 23
// "per knut"
// "skog", "vann", "mark"
// navn: "Nina", alder: 42, 
// true
// `kaldt inne i ${array[1]}en`
export const string = "per knut"; 
export const number = 23;
export const array = ["skog", "vann", "mark"];
export const object = {navn: "Nina", alder: 42};
export const boolean = true;
export const litteralString = `kaldt inne i ${array[1]}en` 


// OPPGAVE TO
// denne for loopen står feil endre den så han funker
//NB HUSK OG UNCOMMENT

/* Comment fra Daniel:
    Brukte ordiærnt bare (let i = 0; i < 10; i++)
    10 som random tall men da printet den ikke ut løsnings diven,
    så måtte endre den til spesifikt 23 eller "number" variablen som er laget i oppgave 1,
    jeg gikk derfor inn i siteLogic å sjekket hvordan den funktet, fordi jeg kunne
    ikke se noe feil med min første løsning. I siteLogic så fant jeg en if statement
    som sjekker om parameteret i myFunc er lik 23 for å printe ut løsningen på siden, men 
    siden jeg i utgangs punktet hadde satt i < 10; så fikk jeg ikke opp løsnings
    diven på siden selvom den funket å printet 10 i consolen.
*/
export function myFunc(plussAbleNumber) {
    for (let i = 0; i < number; i++) {
        plussAbleNumber++
    };
    console.log(plussAbleNumber)
    return plussAbleNumber
}

// OPPGAVE TRE
// putt inn riktig info med bruk av nina objectet. og send ut infoen (se oppgave 2)

/* Comment fra Daniel:
    Det som skjer hær er at objValue henter ut values fra object å putter det
    i ett array ( objValue = ["Nina", 42] ), etter det putter jeg array indexen til 
    objValue inn i template literalen som da returnerer ${objValue[0]} = "Nina"
    ${objValue[1]} = 42.
*/
const objValue = Object.values(object);
console.log(objValue);

export function oppgave3() {
    let val = `${objValue[0]} kan kode, og er ${objValue[1]} år.`
    return val
}

//OPPGAVE FIRE 
// ta og fjern den som ikke matcher med arrayet og reassign fulført array så den har riktig ting i seg

/* Comment fra Daniel:
    I denne opppgaven bruker jeg .splice() methoden til å skjære ut en del av arrayet
    jeg setter splice = arr1.splice(arrayIndexStart, hvorMangeTingSomSkalFjernes).
    Jeg setter start til 2 som gjør at den starter på "stål" deretter 1 som gjør at den fjerner
    ett element fra arrayet fra array posisjon 2 som er "stål". Etter det reasigner jeg 
    fullførtArray = arr1 som gjør at arr1 som er ferdig kuttet blir til fullførtArray.
*/
export function oppgave4() {
    let fullførtArray = []
    let arr1 = ["suppe", "tomat", "stål", "leverpostei"]
    let splice = arr1.splice(2, 1);
        fullførtArray = arr1;
        console.log(splice);
        console.log(fullførtArray);
    return fullførtArray
}

//OPPGAVE FEM
// endre floating til 640 med matte (*, /, +, -). prøv og gjøre den så intrisang som mulig
export function oppgave5() {
    const static1 = 4 
    const static2 = 20 
    const static3 = 10
    let floating = NaN
    console.log(static1,static2,static3) // fjern denne når dere kommer så langt

    return floating
}
//OPPGAVE SEKS
// lag en if else statment som vil sjekke om bool er true eller false. om den er true return bool. om den e false gjør bool true
export function oppgave6() {
    let bool = false
    return bool
    bool = !bool
}

//OPPGAVE syv 
// lag et div element som blir sendt inn. for og lage deres egen oppgave fulført
export function oppgave7() {
// div (med class "box-style")
// p
// text = godt jobbet :3 oppgave 1 løst
return div
}

//oppgave 8
//ta og vis dere fram med noe kode
function showoff() {
    
}