document.addEventListener("DOMContentLoaded", function() {
    datumCounter = 0;
    
    var izbrisGumbi = document.querySelectorAll("#datum-izvajanja span .izbrisi");
    for(var i = 0; i < izbrisGumbi.length; i++) {
        izbrisGumbi[i].addEventListener('click', function() {
            console.log(e.path[1].innerHTML)
        })
    }
});

function dodajDatum() {
    datumi = '<input id="datum-' + (++datumCounter) + '" type="checkbox" name="izbrisi" />\n'
    datumi += '<span>\n'
    datumi += '<span>\n'
    datumi += '<label>Datum:\n'
    datumi += '<input id="date" min="1" type="number" name="date" placeholder="Dan"/>\n'
    datumi += '<input list="months" name="months" placeholder="Mesec"/>\n'
    datumi += '<input type="number" min="1900" name="year" placeholder="Leto"/>\n'
    datumi += '</label>\n'
    datumi += '<label>Ob:\n'
    datumi += '<input type="time" name="cas" placeholder="Čas" />\n'
    datumi += '</span>\n'
    datumi += '<label for="datum-' + datumCounter + '" class="izbirsi">×</label>\n'
    datumi += '</span>\n'
    
    var wrapper = document.createElement('div');
    wrapper.innerHTML = datumi;
    document.querySelector("#datum-izvajanja").appendChild(wrapper);
}