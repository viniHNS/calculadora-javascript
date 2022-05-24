var numero = ''
var numero2 = ''
var operador = ''
var resultado = ''

function insert(num)
{
   if (operador == '' && resultado == '')
   {
      numero += num.toString()
      document.querySelector('#tela').innerHTML = numero
      
   }

   else 
   {
      numero2 += num.toString()
      document.querySelector('#tela').innerHTML = numero2

   }
   
}

function operacoes(simbolo)
{
   operador = simbolo
   document.querySelector('#tela').innerHTML = operador

}

function final()
{
   numero = parseFloat(numero)
   numero2 = parseFloat(numero2)

   if (numero2 == 0 && operador == '/') {
      document.querySelector('#tela').innerHTML = 'Não divida por zero'
   }
   else{
      switch (operador) {
         case '+':
            if(resultado == ''){
               resultado = numero + numero2 
            }
            else {
               resultado += numero2
            }
            document.querySelector('#tela').innerHTML = resultado
            break;
   
         case '-':
            if(resultado == ''){
               resultado = numero - numero2
            }
            else{
               resultado -= numero2
            }
            document.querySelector('#tela').innerHTML = resultado
            break;
   
         case '/':
            if(resultado == ''){
               resultado = numero / numero2
            }
            else{
               resultado /= numero2
            }
            document.querySelector('#tela').innerHTML =  resultado
            break;
   
         case 'x':
            if(resultado == ''){
               resultado = numero * numero2
            }
            else {
               resultado *= numero2
            }
           
            document.querySelector('#tela').innerHTML = resultado
            break;
   
         default:
            break;
      }
   }
   
   operador = ''
   numero = ''
   numero2 = ''

}

function limpar()
{
   document.querySelector('#tela').innerHTML = ''
   numero = ''
   numero2 = ''
   resultado = ''
   operador = ''
}

setInterval(horas, 1000)

function horas(){
   const d = new Date()

   document.querySelector("#horas").innerHTML = d.toLocaleTimeString()
   

   
}