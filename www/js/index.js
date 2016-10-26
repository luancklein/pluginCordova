// Adicionamos o evento click aos seguintes IDs, e quando determinado ID for clicado, sua respectiva função será chamada;
document.getElementById("dialogAlert").addEventListener("click", dialogAlert);
document.getElementById("dialogConfirm").addEventListener("click", dialogConfirm);
document.getElementById("dialogPrompt").addEventListener("click", dialogPrompt);
document.getElementById("dialogBeep").addEventListener("click", dialogBeep);


function dialogAlert() {
  //Estas são as configurações do alert;
   var message = "Apertou no botão então!";
   var title = "Eu sou um alert";
   var buttonName = "Fechar esse alert feio!";
  
   navigator.notification.alert(message, alertCallback, title, buttonName);// Invocamos o alert, e passamos as configurações definidas acima;
   //Caso não for passado nenhum parametro, será utilizado os valores default;

   function alertCallback() {
      console.log("Aqui você pode colocar seu código!");// Função callback chamada quando o alert é confirmado;
   }
}

function dialogConfirm() {
  //Definição das configurações do confirma
   var message = "Confirma que clicou no botão Confirm?";
   var title = "Eu sou um Confirm!";
   var buttonLabels = "Sim, Claro";
  
   navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
 //Caso não for passado nenhum parametro, será utilizado os valores default;
   function confirmCallback(buttonIndex) {//Função chamada quando ocorrer algum evendo nos botões do confirm; callback
      console.log("Você clicou no " + buttonIndex + " botão!");
   }
}

function dialogPrompt() {
  //Definimos as configurações do Prompt
   var message = "Digite algo o que você quer!";
   var title = "Eu sou o famoso prompt...";
   var buttonLabels = ["Sim","Não", "Talvez"];// O máximo aceitado são três botões;
   var defaultText = "Padrão Fifa"; // Texto que irá aparecer como padrão;
  
   navigator.notification.prompt(message, promptCallback, title, buttonLabels, defaultText);//Chamada do prompt com as configurações definidas acima;
 //Caso não for passado nenhum parametro, será utilizado os valores default;
   function promptCallback(result) {//função chamada quando algum botão do prompt for clicado; Função callback;
      console.log("Você clicou no  " + result.buttonIndex + " botão!");
   }
  
}

function dialogBeep() {
   var times = 2;// Definimos a quantidade de repetições, nesse caso, 2 repetições;
   navigator.notification.beep(times);

}

