// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo.trim().length === 0) {
        alert('PorFavor, Ingrese un nombre valido')
        limpiarCaja();
    } else {
        listaAmigos.push(nombreAmigo);
        let amigosHTML = listaAmigos.join('<br>');

        // Asignar la cadena al contenido HTML del <ul>
        document.getElementById('listaAmigos').innerHTML = amigosHTML;
        limpiarCaja();
    }
    
}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}


function sortearAmigo(){
    let numeroGenerado =  Math.floor(Math.random()*listaAmigos.length);
    let elementoHTML = document.querySelector('#resultado');
    let nombreGenerado = listaAmigos[numeroGenerado];
    elementoHTML.innerHTML = (`El amigo secreto es ${nombreGenerado}`);
// esta ultima parte ayuda a desaparecen el listado de amigos
    let elementoHTMLlu = document.querySelector('#listaAmigos');
    elementoHTMLlu.style.display = 'none';

}