function dClock(){
    let t = new Date();
    let hora = t.getHours().toString().length < 2 ? "0" + t.getHours() : t.getHours();
    let minutos = t.getMinutes().toString().length < 2 ? "0" + t.getMinutes() : t.getMinutes();
    let segundos = t.getSeconds().toString().length < 2 ? "0" + t.getSeconds() : t.getSeconds();

    let timeclock = `${hora}:${minutos}:${segundos}`;
    document.getElementById("time").innerHTML = timeclock;
    console.log("Por : P@co")

}

setInterval(() => {
    dClock();
},1000);