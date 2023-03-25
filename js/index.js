
//alert("Hola Bienvenido")

let ataqueJugador
let ataqueEnemigo
let resultados
let vidasJugador = 3
let vidasEnemigo = 3
console.log(resultados)

function ataqueFuego(){
    
    ataqueJugador = "FUEGO 🔥"
    //ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "AGUA 💧"
    //ataqueAleatorioEnemigo()
}
function ataqueIierra(){
    ataqueJugador = "TIERRA 🌱"
    //ataqueAleatorioEnemigo()
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorioEnemigo = aleatorio(1,3);
    //console.log(ataqueAleatorioEnemigo);
    if (ataqueAleatorioEnemigo == 1){
        ataqueEnemigo = "FUEGO 🔥"
        //alert(" Te ataca con "+ ataqueEnemigo)
    }else if (ataqueAleatorioEnemigo ==2 ) {
        ataqueEnemigo = "AGUA 💧"
        //alert(" Te atacan con "+ ataqueEnemigo)
    }else if (ataqueAleatorioEnemigo == 3){
        ataqueEnemigo = "TIERRA 🌱"
        //alert(" Te atacan con "+ ataqueEnemigo)
    }

}

function mostrarMensaje(){
    let seleccionMensaje = document.getElementById("resultado");
    let ataqueJugadores = document.getElementById("ataque-jugador");
    let ataqueEnemigos= document.getElementById("ataque-enemigo");

    //let notificacion = document.createElement('p');
    let nuevoAtaqueJugador= document.createElement('p');
    let nuevoAtaqueEnemigo = document.createElement('p');

    seleccionMensaje.innerHTML= resultados;
    nuevoAtaqueJugador.innerHTML = ataqueJugador;
    nuevoAtaqueEnemigo.innerHTML= ataqueEnemigo;
   // seleccionMensaje.appendChild(notificacion);
    ataqueJugadores.appendChild(nuevoAtaqueJugador);
    ataqueEnemigos.appendChild(nuevoAtaqueEnemigo);

}

function mostrarMensajeFinal(resultadoFinal){
    let seleccionMensaje = document.getElementById("mensajes");

    //let parrafo = document.createElement('p')
    seleccionMensaje.innerHTML = resultadoFinal
    //seleccionMensaje.appendChild(parrafo);
    let botonF = document.getElementById("boton-fuego");
    botonF.disabled= true;
    let botonT = document.getElementById("boton-agua");
    botonT.disabled= true;
    let botonA= document.getElementById("boton-tierra");
    botonA.disabled= true;
}


function seleccionMascota(){
    //alert("Seleccionaste tu mascota");
}
function mascota(){
   let mascota1= document.getElementById("pikachu").checked;
   let mascota2 = document.getElementById("bulbasaur").checked;
   let mascota3 = document.getElementById("charmander").checked;
   if(mascota1=== true){
    let mascotaPelea = "Pikachu";
    document.getElementById("mascota").innerHTML= mascotaPelea;
   
   }else if (mascota2===true){
    let mascotaPelea = "Bulbasaur";
    document.getElementById("mascota").innerHTML= mascotaPelea;
    
   }else if (mascota3===true){
    let mascotaPelea = "Charmander";
    document.getElementById("mascota").innerHTML= mascotaPelea;
    
   }
   let seleccionAtaque = document.getElementById("elegir-ataque");
   seleccionAtaque.style.display = 'flex';
   let seleccionm = document.getElementById("elegir-mascota");
   seleccionm.style.display = 'none';

}

function mascotaEnemigo(){
    let mascotaAeleatorio = aleatorio(1,3);
    if (mascotaAeleatorio == 1){
        //alert("pelea contra 1");
        let mascotaEnemigo = "Pikachu";
        document.getElementById("mascota-enemigo").innerHTML= mascotaEnemigo;
        
    }else if(mascotaAeleatorio == 2){
        let mascotaEnemigo = "bulbasaur";
        document.getElementById("mascota-enemigo").innerHTML= mascotaEnemigo;
        
    //alert("pelea contra 2");
    }else if(mascotaAeleatorio == 2){
        let mascotaEnemigo = "Charmander";
        document.getElementById("mascota-enemigo").innerHTML= mascotaEnemigo;
       
        
        //alert("pelea contra 3");
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");


    if(ataqueEnemigo == ataqueJugador) {
        resultados= "empate"
        //crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        resultados = "Ganaste"
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        //crearMensaje("GANASTE")
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        resultados = "Ganaste"
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        //crearMensaje("GANASTE")
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        resultados = "Ganaste"
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        //crearMensaje("GANASTE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'AGUA') {
        resultados = "Ganaste"
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
            resultados = "Ganaste"
            vidasEnemigo-- 
            spanVidasEnemigo.innerHTML = vidasEnemigo;
        }else{
        resultados = "Perdiste"
        vidasJugador-- 
        spanVidasJugador.innerHTML = vidasJugador;
        //crearMensaje("PERDISTE")
    }
    revisarVidas();
}

function revisarVidas(){
    if(vidasEnemigo==0){
        mostrarMensajeFinal("Felicitaciones!! Ganaste")
    }else if(vidasJugador==0){
        mostrarMensajeFinal("PERDISTE, Intentalo otra vez!!")
    }

}
function reiniciarJuego(){
    location.reload();
}
document.addEventListener("DOMContentLoaded", function(e){
    let seleccionAtaque = document.getElementById("elegir-ataque");
    seleccionAtaque.style.display = 'none';


    let elegirJugador = document.getElementById("boton-mascota");
    elegirJugador.addEventListener('click',seleccionMascota);

    document.getElementById('boton-mascota').addEventListener('click',()=>{
        mascota();
        mascotaEnemigo();
        
    })
    document.getElementById('boton-fuego').addEventListener('click',()=>{
        ataqueFuego();
        ataqueAleatorioEnemigo()
        //mostrarMensaje();
        combate();
        mostrarMensaje();
        console.log(ataqueEnemigo);
        console.log(ataqueJugador);
        console.log(mascotaEnemigo);
        console.log(mascota)
         
        
       
    })
    document.getElementById('boton-agua').addEventListener('click',()=>{
        ataqueAgua();
        ataqueAleatorioEnemigo()
        //mostrarMensaje();
        combate();
        mostrarMensaje();
        

       
    })
    document.getElementById('boton-tierra').addEventListener('click',()=>{
       ataqueIierra();
       ataqueAleatorioEnemigo()
       //mostrarMensaje();
       combate();
       mostrarMensaje();
       
    })
    document.getElementById('boton-reinicio').addEventListener('click',()=>{
        reiniciarJuego();
     })

});

// clase  42 y 43 estas clases no las hice son de css. me aburri jajaj
// VAMOS EN 45 NO ORGANIZE EL CODIGO




