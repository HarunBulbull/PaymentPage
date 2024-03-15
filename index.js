const kartAyGiris = document.querySelector(".kart-ay-giris");
const spanay = document.getElementById("ay");
const spanyil = document.getElementById("yil");
const kartYilGiris = document.querySelector(".kart-yil-giris");
kartAyGiris.addEventListener("input", (e) => {
    if (kartAyGiris.value.length > 0) { spanay.textContent = kartAyGiris.value; }
    else { spanay.textContent = "MM"; }
});
kartYilGiris.addEventListener("input", (e) => {
    if (kartYilGiris.value.length > 0) { spanyil.textContent = kartYilGiris.value; }
    else { spanyil.textContent = "YY"; }
});
const kartHolderGiris = document.querySelector(".kart-holder-giris");
const spanElement = document.getElementById("holder");
kartHolderGiris.addEventListener("input", (e) => {
    if (kartHolderGiris.value.length > 0) { spanElement.textContent = kartHolderGiris.value; }
    else { spanElement.textContent = "Card Holder"; }
});
const kartNumarasiGiris = document.querySelector(".kart-numarasi-giris");
let kareler1 = document.getElementsByClassName("kart-numarasi");
let kareler = document.getElementsByClassName("kart-sayisi");
kartNumarasiGiris.addEventListener("input", (e) => {
    if (kartNumarasiGiris.value.length > 0) {
        kareler[kartNumarasiGiris.value.length - 1].textContent = kartNumarasiGiris.value.charAt(kartNumarasiGiris.value.length - 1);
        kareler1[kartNumarasiGiris.value.length - 1].style.marginTop = "-25px";
        kareler[kartNumarasiGiris.value.length - 1].style.marginTop = "-21px";
        if (kartNumarasiGiris.value.length == 15) {
            for (i = 0; i < 15; i++) {
                kareler[i].style.marginTop = "-21px";
            }
        }
        if (kartNumarasiGiris.value.length == 16) {
            for (i = 0; i < 16; i++) {
                kareler[i].style.marginTop = "0px";
            }
        }
    } else {
        for (i = 0; i < 16; i++) {
            kareler[kartNumarasiGiris.value.length - 1].style.marginTop = "0px";
            kareler1[kartNumarasiGiris.value.length - 1].style.marginTop = "0px";
        }
    }
});
const inputElement = document.getElementById("inp");
inputElement.addEventListener("keydown", (e) => {
    if (e.keyCode === 8) {
        if (kartNumarasiGiris.value.length > 0) {
            setTimeout(function () {
                let i = kartNumarasiGiris.value.length;
                for (i; i < 16; i++) {
                    kareler[i].style.marginTop = "0px";
                    kareler1[i].style.marginTop = "0px";
                }
            }, 1);
        }
    }
});