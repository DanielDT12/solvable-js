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

/* Comment fra Daniel:
    Prøvde å gjøre den så kul som mulig, men e kanskje ikke så veldig komplisert.
*/
export function oppgave5() {
    const static1 = 4 
    const static2 = 20 
    const static3 = 10
    let twoHundred = static2 * static3;
    let forty = static2 * 2;
    let floating = (twoHundred * static1) - twoHundred + forty;
    console.log(floating) // fjern denne når dere kommer så langt

    return floating
}
//OPPGAVE SEKS
// lag en if else statment som vil sjekke om bool er true eller false.
// om den er true return bool.
// om den e false gjør bool true

/* Comment fra Daniel:
    else statement gjør bool = !bool som setter bool til true hvis den er false eller
    omvendt, siden if statement returner bool og går ut av statementen hvis bool er true. 
    Hvis bool ikke er true i if statement så går den vidre til else å gjør bool = !bool 
    før den returnerer bool. Er litt usikker på om man burde returne inne i else statement
    eller returne under selve funksjonen. Vet heller ikke helt hvorfor den dobbel logger samme
    statement i consol loggen. Brukte consol log til å sjekke om den returnerer den koden som
    er i de forskjellige blokkene, hvis man endrer let bool = false til true så logger den if
    statementen til consolen, hvis den er false så går den vidre å logger else statementen til
    consolen.
*/
export function oppgave6() {
    let bool = false
    if(bool) {
        console.log(`If statement log ${bool}`)
        return bool
    } else {
        bool = !bool;
        console.log(`Else statement log ${bool}`)
    };
    return bool
};

//OPPGAVE syv 
// lag et div element som blir sendt inn. for og lage deres egen oppgave fulført

/* Comment fra Daniel:
    document.createElement("div") setter at div variabelen som er laget, lager en div i dokumentet.
    document.createElement("p") gjør det samme bare med en p tag istedet.
    document.createTextNode("den teksten som skal være inne i en annen tag") denne lagrer tekst
    som kan puttes inne i en annen tag, i dette tilfellet en p tag.
    div.appenChild(p) putter p taggen inne i diven som er laget.
    p.append(text) legger teksten inne i p taggen.
    div.classList.add("class") denne legger til en class til enten eksisterende liste eller lager 
    en ny class med det som er gitt i parameteret. Return avslutter funksjonen å gir tilbake
    den ferdige diven med alt som er inne i den. Går utifra at siden jeg ikke trengte å appende 
    diven til page containeren, så er det noe i site logic som gjør det for meg. Hvis ikke det var
    det kunne man gjort "minContainer.appendChild("div")" å lagt den til i funksjonen. Den må først 
    lagres inne i javascript som en variabel som
    for eksempel "minContainer = document.querySelector("#min-container")". 
*/
export function oppgave7() {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let text = document.createTextNode("godt jobbet :3 oppgave 7 løst")
        div.appendChild(p)
        p.append(text)
        div.classList.add("box-style")
    return div
}

//oppgave 8
//ta og vis dere fram med noe kode


/* Comment fra Daniel:
    randomNumberArray printer ut et array med random tall, du kan definere lengde på arrayet,
    det minste og største tallet som skal være med i arrayet for eksempel: et array med lengde på 
    50 tall, som inneholder tall mellom 1 og 100. Detter er satt opp som en arrow function
    så (length, min, max) blir parameter for funksjonen som er definert foreløpig som 
    randomNumberArray(50, 1, 100); dette lager et array med tall i random rekefølge og inneholder
    50 tall og tall mellom 1 og 100. Etter funksjone er kjørt logger den random arrayet i consolen.
*/
const randomNumberArray = (length, min, max) => { // initialiserer arrow funksjonen med parameter
    const numberArray = []; // lager et tomt array for å putte inn tallene
    for(let i = 0; i < length; i++) { // starter en for loop som printer ut random tall med funksjon parameter som loop lengden
        numberArray.push(Math.floor(Math.random() * (max - min + 1) + min)); // genererer randome hell tall med max og min parametre fra funksjonen, så man kan velge hvilken tall rekke som skal inkluderes, f.eks min = 10 max = 200, da får man en tall rekke mellom 20 og 200. så putter den alle tallene inne i et array.
    }
    return numberArray; // denne returnerer det ferdige arrayet med de randome tallene.
}

const randomArray = randomNumberArray(50, 1, 100); // setter bare funksjonen til en egen variabel for å bruke i sorting algoritmen. Du kan bytte parameter selv

console.log(randomArray); // Console logger det randomet arrayet.


/* Comment fra Daniel:
    Dette er en sorterings algoritme kalt bubble sort. Jeg bruker det samme arrayet som er laget
    med den forige funksjonen til å kjøre igjennom denne sorterings algoritmen. funksjonen har et
    parameter som heter numbers som jeg da kan sette in hvilket som helts number array, i dette
    tilfellet bruker jeg randomArray fra den forige funksjonen.
*/
function bubbleSort(numbers) {
    for(let i = 0; i < numbers.length; i++) { // Denne loopen velger hvor mange gang arrayet, skall sorteres
        for(let j = 0; j < numbers.length - (i + 1); j++) { // Denne loopen velger hvordan ting skal sorteres
            const left = numbers[j]; // Dette setter "venstre siden" til "mitt array"[j] hvor j er hvor langt i loopen den har kommet
            const right = numbers[j + 1]; // Dette gjør det samme som den over bare at det er 1 posisjon over i arrayet
            if(left > right) { // Når man kommer hit sjekker den om det tallet som er på "venstre siden" er størret en "høyre siden"
                numbers[j] = right; // Hvis tallet er høyere bytter de plass slik at tallet på venstre siden går 1 plass opp i arrayet
                numbers[j + 1] = left;
            };
        };
    };
    return numbers // når loopen har kjørt igjennom hele arrayet returnerer den det ferdig sorterte arrayet
};

console.log(bubbleSort(randomArray)) // Så printer jeg ut det ferdig sorterte arrayet.

/* Comment fra Daniel:
    tok en sorterings algoritme fordi jeg syntes det var litt kult at jeg kan generere et random
    array å så sortere det arrayet rett etter på og når man da console logger begge to kan
    man se at hver gang man refresher pagen så kommer det ut et random array og det samme arrayet
    ferdig sortert rett under.
*/