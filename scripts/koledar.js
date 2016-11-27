var danes;
var mesec;
var leto;

function posodobiKoledar(d_mesec) {
    var l = leto;
    var m = mesec+d_mesec;
    if(m >= 12) {
        l += Math.floor(m/12)
        m = m%12
    }else if(m < 0) {
        l += Math.ceil(m/12)
        m = m%12
    }
    
    narisiKoledar(new Date(l, m, 1));
}

function narisiKoledar(datum) {
    var meseci = new Array("Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "Septemeber", "Oktober", "November", "December");

    if(datum == null)
        datum = new Date();
    
    danes = datum.getDate();
    mesec = datum.getMonth();
    leto = datum.getFullYear();
    
    var next_arrow = '<div class="arrow-right" onclick="posodobiKoledar(1)"></div>'
    var prev_arrow = '<div class="arrow-left" onclick="posodobiKoledar(-1)"></div>'
    var koledar_html = "";
    koledar_html += "<tr>";
    koledar_html += "<th colspan=\"7\" id=\"mesec-leto\">" + prev_arrow + " " + meseci[mesec] + " " + leto + " " + next_arrow + "</th>";
    koledar_html += "</tr>";
    koledar_html += "<tr>";
    koledar_html += "<th>Ne</th>";
    koledar_html += "<th>Po</th>";
    koledar_html += "<th>To</th>";
    koledar_html += "<th>Sr</th>";
    koledar_html += "<th>Če</th>";
    koledar_html += "<th>Pe</th>";
    koledar_html += "<th>So</th>";
    koledar_html += "</tr> ";

    var curr_mesec = new Date(leto, mesec, 1);
    var prvi_dan_meseca = curr_mesec.getDay();
    var st_dni = new Date(leto, mesec+1, 0).getDate();

    var dan_v_tednu = 0;
    for(var dan = 1; dan <= st_dni+prvi_dan_meseca; dan++) {
        if(dan_v_tednu == 0) {
            koledar_html += "<tr>"
        }

        if(dan <= prvi_dan_meseca) {
            koledar_html += "<td></td>";
        }else {
            let trenutni_datum = new Date();
            if(dan-prvi_dan_meseca == trenutni_datum.getDate() && mesec == trenutni_datum.getMonth() && leto == trenutni_datum.getFullYear())
              koledar_html += '<td class="koledar-dan" id="danes">' + (dan-prvi_dan_meseca) + '</td>';
            else
              koledar_html += '<td class="koledar-dan">' + (dan-prvi_dan_meseca) + '</td>';
        }

        if(dan_v_tednu == 6) {
            koledar_html += "</tr>"
        }
        dan_v_tednu++;
        dan_v_tednu %= 7;
    }

    document.getElementById("koledar").innerHTML = koledar_html;
}