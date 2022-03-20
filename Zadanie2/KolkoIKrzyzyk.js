//tworzymy Listę naszych pól gry
const listaPol = document.querySelectorAll(".pole");
let activePlayer = "X";
let active = false;
let stanGryPomoc = ["", "", "", "", "", "", "", "", ""];
document.getElementById("start").addEventListener("click", Start);
document.getElementById('stan').innerHTML = "Gra jest nieaktywna, proszę kliknąć Start";
document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";

listaPol.forEach(function(pole) {
    pole.addEventListener("click", PoKliku);
    
});
document.getElementById("reset").addEventListener("click", Reset);


function Start(){
    console.log(stanGryPomoc.includes('X'));
    if(!stanGryPomoc.includes('X') && !stanGryPomoc.includes('O')){
        document.getElementById('stan').innerHTML = "Gra jest aktywna"
        document.getElementById('gracz').innerHTML = "Ruch gracza: " + activePlayer;
        active = true;
    }
    
    
}
function Reset() {
    stanGryPomoc = ["", "", "", "", "", "", "", "", ""];
    
    document.getElementById('wynik').innerHTML = "";
    document.getElementById('stan').innerHTML = "Gra jest nieaktywna, proszę kliknąć Start";
    document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    
    if(activePlayer=="O") activePlayer ='X';
    for (let i = 0; i < listaPol.length; i++) {
        if (listaPol[i].classList.length > 1) {
            if (listaPol[i].classList[1] == 'pole--X') {
                listaPol[i].classList.remove('pole--X');
            }
            if (listaPol[i].classList[1] == 'pole--O') {
                listaPol[i].classList.remove('pole--O');
            }

        }


    }
    



}
function SprawdzenieStanuGry() {
    console.log(stanGryPomoc);
    if(stanGryPomoc[0] == 'X' && stanGryPomoc[1] == 'X' && stanGryPomoc[2] == 'X'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa X";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if (stanGryPomoc[3] == 'X' && stanGryPomoc[4] == 'X' && stanGryPomoc[5] == 'X'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa X";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(stanGryPomoc[6] == 'X' && stanGryPomoc[7] == 'X' && stanGryPomoc[8] == 'X'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa X";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(stanGryPomoc[0] == 'X' && stanGryPomoc[3] == 'X' && stanGryPomoc[6] == 'X'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa X";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(stanGryPomoc[1] == 'X' && stanGryPomoc[4] == 'X' && stanGryPomoc[7] == 'X'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa X";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(stanGryPomoc[2] == 'X' && stanGryPomoc[5] == 'X' && stanGryPomoc[8] == 'X'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa X";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(stanGryPomoc[0] == 'X' && stanGryPomoc[4] == 'X' && stanGryPomoc[8] == 'X'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa X";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(stanGryPomoc[2] == 'X' && stanGryPomoc[4] == 'X' && stanGryPomoc[6] == 'X'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa X";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(stanGryPomoc[0] == 'O' && stanGryPomoc[1] == 'O' && stanGryPomoc[2] == 'O'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa O";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if (stanGryPomoc[3] == 'O' && stanGryPomoc[4] == 'O' && stanGryPomoc[5] == 'O'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa O";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(stanGryPomoc[6] == 'O' && stanGryPomoc[7] == 'O' && stanGryPomoc[8] == 'O'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa O";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(stanGryPomoc[0] == 'O' && stanGryPomoc[3] == 'O' && stanGryPomoc[6] == 'O'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa O";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(stanGryPomoc[1] == 'O' && stanGryPomoc[4] == 'O' && stanGryPomoc[7] == 'O'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa O";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(stanGryPomoc[2] == 'O' && stanGryPomoc[5] == 'O' && stanGryPomoc[8] == 'O'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa O";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(stanGryPomoc[0] == 'O' && stanGryPomoc[4] == 'O' && stanGryPomoc[8] == 'O'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa O";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(stanGryPomoc[2] == 'O' && stanGryPomoc[4] == 'O' && stanGryPomoc[6] == 'O'){
        active = false;
        document.getElementById('wynik').innerHTML = "Wygrywa O";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }else if(!stanGryPomoc.includes("")){
        active = false;
        document.getElementById('wynik').innerHTML = "Remis";
        document.getElementById('stan').innerHTML = "Koniec gry, proszę kliknąć reset";
        document.getElementById('gracz').innerHTML = "Brak aktywnego gracza";
    }
}
function PoKliku(e) {
    if(active == true){
        if (!e.target.classList.contains("pole--X") && !e.target.classList.contains("pole--O")) {
            if (activePlayer === "X" && e.target.classList.length < 2) {
                e.target.classList.add('pole--X');
                stanGryPomoc[e.target.id] = "X"
                activePlayer = "O"
                document.getElementById('gracz').innerHTML = "Aktywny gracz: " + activePlayer;
            } else {
                if (e.target.classList.length < 2) {
                    e.target.classList.add('pole--O');
                    stanGryPomoc[e.target.id] = "O"
                    activePlayer = "X"
                    document.getElementById('gracz').innerHTML = "Aktywny gracz: " + activePlayer;
                }
    
            }
        } else if (e.target.classList.contains("pole--X")) {
            alert("To pole jest wypełnione przez X");
            
    
        } else {
            alert("To pole jest wypełnione przez O");
        }
    }
    
    SprawdzenieStanuGry();
    

}
