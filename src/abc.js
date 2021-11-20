
class Character{

    constructor(char) {
        this.repeated = 0;
        this.score = 0;
        this.char = char;
      }

}


function scoreWord(){
    var word  = $('#word-input').val().trim();
    var scoreWordList = [];

    const maxScore = 26 ;
    var count = 0 ;    

    // RECORREMOS LAS LETRAS DE LA PABRALA, SI NO EXISTE LA LETRA SE CREA UN NUEVO OBJETO LETRA, LUEGO SE SUMA CUANTAS VECES SE REPITE
    for (var i = 0; i < word.length; i++) {        
        var charElement = scoreWordList.find( char => char.char === word[i] )
            if(!charElement){
                charElement = new Character(word[i])
                scoreWordList.push( charElement  );
            }
            charElement.repeated += 1;
        }


    // SE ORDENA EL ARRAY DE MAYOR A MENOR POR EL NUMERO DE REPETICIONES DE LA LETRA EN LA PALABRA    
    scoreWordList.sort(function(char1, char2){
        return char1.repeated > char2.repeated ? -1 : 1;
    });
    
    // SE CALCULA EL PUNTAJE MAXIMO QUE SE PUEDE OBTENER POR CADA LETRA
    for (let index = 0; index < scoreWordList.length; index++) {
        
        scoreWordList[index].score = maxScore - index;
        count += (scoreWordList[index].score * scoreWordList[index].repeated);
        
    }

    // SE MUESTRA EL RESULTADO EN UN ALERT DE BOOPSTRAP
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    function alert(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '</div>'

        alertPlaceholder.append(wrapper)
    }
    
    alert('El Puntaje Total secreto de la palabra '+ word + ' es de: ' + count + '  ', 'success')

}