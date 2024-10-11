
const btnBerechnenAbstand = document.getElementById("btnBerechnenAbstand");



//------------------------- Abstandsbereich ------------------------------

function abstand550(){
    let eingabeA = document.getElementById("inputIstAbstand").value;
    eingabeA = Number(eingabeA);
    const sollabstand = 1665;
    const minabstand = 1600;
    const maxabstand = 1700;
    // Wenn die Eingabe größer als der Mindestabstand und kleiner als der Max Abstand ist dann geht es weiter
    if(eingabeA >= minabstand && eingabeA <= maxabstand){
        // Wenn der IST Abstand kleiner als der Sollabstand ist dann gehört das Gleis weg vom Bahnsteig
        if(eingabeA < sollabstand){
            let ergebnis = sollabstand - eingabeA;
            document.getElementById("resultAbstand550").textContent = `Das Gleis muss um  ${ergebnis} mm weg vom Bahnsteig!`;
            document.getElementById("inputIstAbstand").value = "";
            setTimeout(textVerschwinden, 6000);
        }
        // Wenn der IST Abstand größer als der Sollabstand ist dann gehört das Gleis zum vom Bahnsteig
        else if(eingabeA > sollabstand){
            document.getElementById("resultAbstand550").textContent = `Das Gleis muss um ${ergebnis} mm zum Bahnsteig!`;
            document.getElementById("inputIstAbstand").value = "";
            setTimeout(textVerschwinden, 6000);
        }else{
            document.getElementById("resultAbstand550").textContent = `Das Gleis hat 0 mm Verschiebung`;
            document.getElementById("inputIstAbstand").value = "";
            setTimeout(textVerschwinden, 6000);
        }
    } else{
        alert("Achtung IHP RW 06.01.01 Verletzung!! Techniker verständigen!");
    }

}


// ------------------- Höhenbereich -----------------------

function höhe550(){
    let eingabeH = document.getElementById("inputIstHöhe").value;
    const sollhöhe = 550;
    const minhöhe = 500;
    const maxhöhe = 600;
    if (eingabeH > minhöhe && eingabeH < maxhöhe){
        if (eingabeH < sollhöhe){
            let ergebnis = sollhöhe - eingabeH;
            ergebnis = Number(ergebnis);
            document.getElementById("resultHöhe550").textContent = `Das Gleis ist um ${ergebnis} mm zu hoch!`;
            document.getElementById("inputIstHöhe").value = "";
            setTimeout(textVerschwinden,6000)
        }
    }
}



// Funktion um den Text verschwinden zu lassen
function textVerschwinden(){
    document.getElementById("resultAbstand550").textContent = "";
    document.getElementById("resultHöhe550").textContent = ";"
}

