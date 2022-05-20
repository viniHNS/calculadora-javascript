var numero = ''
var numero2 = ''
var operador = ''
var resultado = ''

function insert(num)
{
   if (operador == '')
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
            resultado = numero + numero2
            document.querySelector('#tela').innerHTML = resultado
            break;
   
         case '-':
            resultado = numero - numero2
            document.querySelector('#tela').innerHTML = resultado
            break;
   
         case '/':
            resultado = numero / numero2
            document.querySelector('#tela').innerHTML =  resultado
            break;
   
         case 'x':
            resultado = numero * numero2
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


}

