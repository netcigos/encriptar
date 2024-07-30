let textoTextareaED;
let arregloAccionEncriptar=[];
let arregloResulatadoEncriptar=[];



//Copia al portatapapeles
function copiarPortapapel()
{ 
    let elementoPresultado=document.getElementById('mensajeResultado');
    let mensajeResultado=elementoPresultado.innerText;
    console.log(mensajeResultado);
    navigator.clipboard.writeText(mensajeResultado)
    .then(() => {
      console.log('Texto copiado al portapapeles')
    })
    .catch(err => {
      console.error('Error al copiar al portapapeles:', err)
    })
  
}


function encriptarTexto()
{  
    //copiar al arreglo global
    
    textoTextareaED=document.getElementById('textareaED').value;
    console.log(textoTextareaED);

    arregloAccionEncriptar=Array.from(textoTextareaED);
    arregloResulatadoEncriptar=[];

    console.log(arregloAccionEncriptar);
   
    if(textoTextareaED!='')
    {
       console.log('paso condicional');
       
       for(i=0 ; i<arregloAccionEncriptar.length; i++ )
       {
          
         arregloResulatadoEncriptar.push(matchReglaEncriptar(arregloAccionEncriptar[i]));


       }
        
        console.log(arregloResulatadoEncriptar);
        AsignarTextoElemento('mensajeTitulo',"! Mensaje Encriptado ¡");
        let textAsignar=arregloResulatadoEncriptar.join("");
        AsignarTextoElemento('mensajeResultado',textAsignar);
      
        document.getElementById('container_right__parrafoDescriptado').style.display='none';
        
    }else
    {
        document.getElementById('container_right__parrafoDescriptado').style.display='initial';
        AsignarTextoElemento('mensajeTitulo',"Ningun Mensaje Fue Encontrado");
        AsignarTextoElemento('mensajeResultado',"Ingrese un Texto para Encriptar o Desencriptar");

    }
          



}



//Funcion que machea una vocal con su correspondiente palabra secreta
function matchReglaEncriptar(item)
{ 
    let letraMatch=item;

    switch(letraMatch)
    {
       case 'a':
            letraMatch='ai';
            break;
        case 'e':
            letraMatch='enter';
            break;
        case 'i':
            letraMatch='imes';
            break;
        case 'o':
            letraMatch='ober'
            break;
        case 'u':
             letraMatch='ufat';
             break;

    }
    
    return letraMatch;

}

function desencriptarTexto()
{

   var textoResultadoDesencriptado;


    var textoTextareaED=document.getElementById('textareaED').value;
    

       
    if(textoTextareaED!='')
    {
     console.log('paso condicional');
    
     textoResultadoDesencriptado=desencriptar(textoTextareaED);       
    

     AsignarTextoElemento('mensajeTitulo',"! Mensaje Desencriptado ¡");

     var textAsignar=textoResultadoDesencriptado;

     AsignarTextoElemento('mensajeResultado',textAsignar);

     console.log(textAsignar);

     document.getElementById('container_right__parrafoDescriptado').style.display='none';


    }
    else
    {
        document.getElementById('container_right__parrafoDescriptado').style.display='initial';
        AsignarTextoElemento('mensajeTitulo',"Ningun Mensaje Fue Encontrado");
        AsignarTextoElemento('mensajeResultado',"Ingrese un Texto para Encriptar o Desencriptar");

    }
          
}


function desencriptar(texto)
{
   var textoDesencriptar=texto;
   
   let resultadoA=textoDesencriptar.replace(/ai/g,"a");
   let resultadoE=resultadoA.replace(/enter/g,"e");
   let resultadoI=resultadoE.replace(/imes/g,"i");
   let resultadoO=resultadoI.replace(/ober/g,"o");
   let resultadoU=resultadoO.replace(/ufat/g,"u");
   let resultado=resultadoU;
 
   return resultado;


}


function AsignarTextoElemento(ID,texto)
{
  let ElementoHml=document.getElementById(ID);
  ElementoHml.innerHTML=texto;


}