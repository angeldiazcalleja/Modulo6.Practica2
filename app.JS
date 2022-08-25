//ENIGMA//


var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' ñ";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ñ";
var textA = document.getElementById("encrypted")
var textB = document.getElementById("decrypted")


function transformadora(plainAlphabet, encryptedAlphabet, textoTransformar, id) {

  var buscarIndice = (alphabet, letra) => {
    for (var i = 0; i < alphabet.length; i++) {
      if (alphabet[i] === letra) return i;
    }
  }

  var transformarLetra = letra => {
    var indiceLetra = buscarIndice(plainAlphabet, letra);
    var letraTransformada = encryptedAlphabet[indiceLetra];
    return letraTransformada;
  }

  var transformarMensaje = mensaje => {
    let mensajeMinuscula = mensaje.toLowerCase();
    var resultado = "";
    for (var letra of mensajeMinuscula) {
      resultado += transformarLetra(letra);
    }
    return resultado;
  }
  var textoTransformado = transformarMensaje(textoTransformar);

  document.getElementById(id).value = textoTransformado
}



document.getElementById("encryptButton").addEventListener("click",() => transformadora(plainAlphabet, encryptedAlphabet, textB.value, "encrypted"))

document.getElementById("decryptButton").addEventListener("click",() => transformadora(encryptedAlphabet, plainAlphabet, textA.value, "decrypted"))




//GENERADOR ALEATORIO//


function randomPick(n, min, max) {
  var array = []
  for (i = min; i <= n; i++) {
   var numAleat = Math.floor(Math.random() * max + 1);
    if (!existeNum(array,numAleat)) {
      array.push(numAleat);
    }
  }
  console.log(array)
}
randomPick(10, 1, 100)

function existeNum(array, n) {
  for (i = 0; i <= array.length; i++) {
    if (array[i] === n) {
      return true
    }
  }
 return false
}