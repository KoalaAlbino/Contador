const anoNovo ="1 Jan 2023";

function contador() {
    const diaAnoNovo = new Date(anoNovo);
    const dataAtual = new Date();
  
    const segundosTotais = (diaAnoNovo - dataAtual) / 1000;

    const dias = Math.floor(segundosTotais / 3600 / 24);
    
    const horas = Math.floor(segundosTotais / 3600) % 24;

    const minutos = Math.floor(segundosTotais / 60) % 60;

    const segundos = Math.floor(segundosTotais) % 60;
    
    const diasRe = document.getElementById("dias").innerHTML = formatTime(dias);
    const horasRe = document.getElementById("horas").innerHTML = formatTime(horas);
    const minutosRe  = document.getElementById("minutos").innerHTML = formatTime (minutos);
    const segundosRe = document.getElementById("segundos").innerHTML = formatTime(segundos);
 
   
 

}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//Chamando função de contagem regressiva
//Não chamar função, já sendo executava no setInterval
setInterval(contador, 1000);


