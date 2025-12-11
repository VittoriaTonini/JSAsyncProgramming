// //fetch è async
// let response = fetch("https://images.unsplash.com/photo-1486944859394-ed1c44255713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
// console.log(response); //mi restituisce una promise in pending, quindi non abbiamo ancora l'immagine
// let blob = response.blob(); //blob = binary large object

//esempio con le callback (modo vecchio)
//una callback è una funzione che noi chiamiamo quando abbiamo finito di fare determinate cose
function loadAsset(url, type, callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;

    xhr.onload = function (){
        callback(xhr.response); //prendi la risposta che ti è arrivata e la butti nella funzione di callback (che sarà displayImage in questo caso)
    }

    xhr.send();
}

function displayImage(blob) { 
    let objectURL = URL.createObjectURL(blob); //crea un URL temporaneo a partire dal blob: blob è il risultato di xhr.response
    let image = document.createElement("img"); //crea un nuovo elemento <img>
    image.src = objectURL; //imposta l'URL temporaneo come sorgente dell'immagine
    document.body.appendChild(image); //aggiunge l'immagine al body della pagina
}

loadAsset("https://images.unsplash.com/photo-1486944859394-ed1c44255713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 'blob', displayImage);
