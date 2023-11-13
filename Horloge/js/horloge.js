var heure = document.getElementById("heure");
var minute = document.getElementById("minute");
var seconde = document.getElementById("seconde");

var horloge = setInterval(

    function temps() {
        var date_actuelle = new Date();
        var hr = date_actuelle.getHours();
        var min = date_actuelle.getMinutes();
        var sec = date_actuelle.getSeconds();

        if (hr < 10) {
            hr = "0" + hr;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }

        heure.textContent = hr;
        minute.textContent = min;
        seconde.textContent = sec;

    },1000
)

var date = setInterval(
    (function montre_date(){
        var actuel = new Date()
        document.getElementById("partie_date").innerText = actuel.toDateString();
    })(),1000
)

var am_pm = setInterval(
    (function session() {
        var sessi;
        
        var dat_actuel = new Date();
        var hre = dat_actuel.getHours();

        if (hre >= 0 && hre <=12) {
            sessi = 'AM';
        }
    
        else if (hre > 12) {
            sessi = 'PM'
        }

        var bon = sessi;

        document.getElementById("partie_session").innerText = bon;
        
    })(),1000

)







