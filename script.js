
let valorUnidad=820000;
let porcentaje;
let subt3 = document.getElementById('h4');

  const convertir = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    minimumFractionDigits: 0
 })

 function finestraSecundaria (url){
   window.open(url, "Almacen de Computadores", "width=800, height=800")
   }

 
// /////////Funcion para escuchar el elemento imput mediante click
 boton.addEventListener("click",()=>{
 const imprimir=document.getElementById('unidadCpu').value
 document.getElementById("myDIV2").style.display = "block";

  valorCompra=imprimir*valorUnidad;
 
 //Aplica el descuento como corresponda
     
if(imprimir<=2){ porcentaje=valorCompra*0;
         subt3.textContent=("No hay descuento para la compra");}

 else if(imprimir>2&&imprimir<=4){porcentaje=valorCompra*0.15; }

 else if(imprimir>4&&imprimir<=8){porcentaje=valorCompra*0.30;} 

  else if(imprimir>8&&imprimir<=12){porcentaje=valorCompra*0.35;}

  else if(imprimir>12){porcentaje=valorCompra*0;
  subt3.textContent=("No hay descuento para la compra");

 }
   else{ alert("El valor proporcionado no es valido");}

   total=valorCompra-porcentaje;
//funcion para mostrar etiqueta p los valores de descuento
  
  let subt=document.getElementById('p1');
  subt.textContent=convertir.format(valorCompra);

  let subt1= document.getElementById('p2');
   subt1.textContent=convertir.format(porcentaje);

   let subt2 = document.getElementById('p3');
    subt2.textContent=convertir.format(total);

 })

 