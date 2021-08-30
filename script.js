function start(){

  if(rodando == false){
    cron = setInterval(function(){
    
      if((milesimos+=1) == 100){
        segundos++
        milesimos = 0
      }
      milesimosText.innerHTML = formatarDados(milesimos)
      segundosText.innerHTML = formatarDados(segundos);
    }, 10)
    rodando = true;
  }

}

function pause() {
  clearInterval(cron);
  rodando = false
}

function reset() {
  clearInterval(cron);
  milesimos = 0
  segundos = 0
  milesimosText.innerHTML = formatarDados(milesimos);
  segundosText.innerHTML = formatarDados(segundos);
  rodando = false
}

function formatarDados(dado){
  return dado >= 10 ? dado : `0${dado}`
}