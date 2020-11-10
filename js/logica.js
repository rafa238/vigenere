var bt1 = document.getElementById("btCifrar");
var bt2 = document.getElementById("btDescifrar");
var textA = document.getElementById("cadena");
var textK = document.getElementById("clave");
var resultado = document.getElementById("resultado");
var pcifrada = [];
var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
'k', 'l', 'm', 'n','ñ', 'o', 'p', 'q', 'r', 's', 't', 'u',  'v', 'w', 'x',
'y', 'z'];
var re = (/([a-z-ñ])/ig);
function codificar(){
    let txt = textA.value;
    txt = txt.replace(/ /g, "");
    let k = textK.value;
    k = k.replace(/ /g, "");
    
    if(k.length> txt.length || txt.length < 1 || k.length < 1 || !re.test(k) || !re.test(txt)){
        alert("eso no se puede hacer");
    }else{
        let posTxt = getPos(txt);
        let posK = getPos(k);
        console.log(posTxt, posK)
        let sumaP = sumPos(posK, posTxt);
        console.log(sumaP);
        let letras = getLetra(sumaP);
        console.log(letras);
        let cadena = "";
        for(let i=0;i<letras.length; i++){
            cadena += letras[i]; 
        }
        resultado.innerHTML = cadena;
    }
}
function decodificar(){
    let txt = textA.value;
    txt = txt.replace(/ /g, "");
    let k = textK.value;
    k = k.replace(/ /g, "");
    if(k.length> txt.length || txt.length < 1 || k.length < 1 || !re.test(k) || !re.test(txt)){
        alert("eso no se puede hacer");
    }else{
        let posTxt = getPos(txt);
        let posK = getPos(k);
        console.log(posTxt, posK)
        let sumaP = resPos(posK, posTxt);
        console.log(sumaP);
        let letras = getLetra(sumaP);
        console.log(letras);
        let cadena = "";
        for(let i=0;i<letras.length; i++){
            cadena += letras[i]; 
        }
        resultado.innerHTML = cadena;
    }
}

function getPos(txt){
    var posiciones = [];
    for(var i=0; i<txt.length; i++){
        var c = txt.charAt(i);
        if(c != " "){
            var p = abc.indexOf(c.toLowerCase());
            posiciones[i] = p;
        }
    }
    return posiciones;
} 

function sumPos(k, txt){
    let sumaPos = [];
    let cont = 0;
    for(let i=0;i<txt.length; i++){
        sumaPos[i] = k[cont] + txt[i];
        cont++;
        if(cont = k.length-1){
            cont = 0;
        }
    }
    return sumaPos;
}

function resPos(k, txt){
    let sumaPos = [];
    let cont = 0;
    for(let i=0;i<txt.length; i++){
        //sumaPos[i] = k[cont] - txt[i];
        sumaPos[i] =txt[i] - k[cont] ;
        cont++;
        if(cont = k.length-1){
            cont = 0;
        }
    }
    return sumaPos;
}

function getLetra(array){
    let letras = [];
    for(let i=0;i<array.length; i++){
        let pos = array[i];
        if(pos >= abc.length){
            pos = pos - abc.length;
        }
        letras[i] = abc[pos];
    }
    return letras;
}
