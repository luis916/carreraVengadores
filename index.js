







var iniciarJuego = document.getElementById("iniciarJuego").addEventListener("click", function(event){
    event.preventDefault()

    var jugador1 = document.getElementById("jugador1");
    var jugador2 = document.getElementById("jugador2");
    jugador1.setAttribute("required","true");
    if (jugador1.value == undefined) {alert("nombe");}else
    {
    function ventanaJuego(){

        window.location.href = "ventanaJuego.html";
    }} ventanaJuego();
   
    
  });



//var tiempo = document.getElementById("tiempo");


// colores random



var segundos = 1;
var body = document.getElementById("body");
  setInterval(()=>{
	segundos--;
	document.getElementById("tiempo").textContent = segundos;
    while (segundos == 0)
    {
        var random1 = Math.random()*255;
var random2 = Math.random()*255;
var random3 = Math.random()*255;
       // body.style.backgroundColor = `rgb(${Math.round(random1)}, ${Math.round(random2)}, ${Math.round(random3)}`; 
        segundos = 1;
    }

	
} ,1000)
