
const searchInput = document.querySelector("input");
const li = [...document.querySelectorAll("ul li")];
const ul = document.querySelector("ul");

const searchWord = e => {
	const currentWord = e.target.value.toUpperCase();
	let result = li;
	result = result.filter(li => li.textContent.toUpperCase().includes(currentWord));
	ul.textContent = '';
	result.forEach(city => ul.appendChild(city));
}
searchInput.addEventListener('input', searchWord);



function czas() {
        var data = new Date(); //tworzymy obiekt typu data
        var dzien = data.getDate();
        var miesiac = data.getUTCMonth()+1;
        var rok = data.getFullYear();
        var godzina = data.getHours(); //pobieramy godzinę
        var minuta = data.getMinutes(); //pobieramy minutę
        var sekunda = data.getSeconds(); //pobieramy sekundy
 
        // przypisanie zera do godziny, minuty i sekundy, czyli np. 05 a nie 5
        if (godzina < 10) {
            godzina = "0" + godzina;
        }
        if (minuta < 10) {
            minuta = "0" + minuta;
        }
        if (sekunda < 10) {
            sekunda = "0" + sekunda;
        }
        if (dzien < 10){
            dzien ="0" + dzien;
        }
        if (miesiac < 10){
            miesiac = "0" + miesiac;
        }
 
        //wyświetlenie zegarka w divie o id zegar
        document.querySelector("#zegar").innerHTML =   dzien + "/" + miesiac + "/" + rok + " | " + godzina + ":" + minuta + ":" + sekunda;
 
        setTimeout(czas, 1000); //samowywołanie się funkcji po 1s
    }
    window.addEventListener("load", czas); //wywołanie funkcji czas po załadowaniu strony  