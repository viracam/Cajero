
var resultado = document.getElementById("resultado");
var estado_de_caja = document.getElementById("estado_caja");

class Billete{
	constructor(v,c,n){
		this.imagen = new Image(),
		this.valor= v,
		this.cantidad = c,
		this.nombre = n,
		this.imagen.src = imagenes[this.nombre]
	}
	mostrar(mni){
		/*alert("si esta definido");*/
		var miNuevaimg = document.createElement("span");
		miNuevaimg = this.imagen;
		mni.appendChild(miNuevaimg);
	}
}

var reiniciar_entregado =[];
var cantidad_actual;
var dinero = 0;
var div = 0;
var papeles = 0;
var i = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var t = document.getElementById("dineroreq");

var imagenes =[];
imagenes["cincuenta"] = "images/50.png";
imagenes["veinte"] = "images/20.png";
imagenes["diez"] = "images/10.png";
var caja =[];


var entregado =[];
caja.push(new Billete(50,3,"cincuenta"));
caja.push(new Billete(20,2,"veinte"));
caja.push(new Billete(10,2,"diez"));



//console.log(Billete);
function entregarDinero(){
	resultado.innerHTML = "";
	estado_de_caja.innerHTML = "";
	dinero = parseInt(t.value);
	//console.log(dinero);
	for(var bi of caja){
		
		if(dinero>0){
			
			div =Math.floor(dinero/bi.valor);
			if(div >bi.cantidad){
				papeles = bi.cantidad;

			}
			else{
				papeles = div;
				
			}
			
			cantidad_actual = bi.cantidad -papeles;
			bi.cantidad = cantidad_actual;
			entregado.push(new Billete(bi.valor, papeles, bi.nombre));
			dinero = dinero - (bi.valor * papeles);
			
		}


	}
	

	
	if(dinero>0 && cantidad_actual == 0)
	{
		resultado.innerHTML = "Soy un cajero pobre no tengo dinero";
	}
	else{
	
		//if(dinero==0 && entregado.length >= 1){
			
			for(var e of entregado){
				//var contador_de_billetes= [];

				for(i = 0; i< e.cantidad; i++){
					console.log(i);
					
					e.mostrar(resultado);
					//memoria_billete = e.mostrar(resultado);
					//memoria_billete++;
				}
				
				resultado.innerHTML += "<br/>" + e.cantidad + " billetes de " + e.valor + "<br/>";
				//resultado.mostrar();
				//console.log(entregado);
				//for(var im of caja){
					
					
					console.log(e.mostrar);
				//}


			}


			entregado = [];
			
		//}
		for(var bi of caja){

			estado_de_caja.innerHTML += "<br>"+ bi.cantidad + " billetes de " +bi.valor+"<br/>";
			bi.mostrar(estado_de_caja);
		}
		//console.log(caja);
		//console.log(entregado);
	}
	if(dinero>0 && cantidad_actual > 0)
	{
		resultado.innerHTML = "Elige otra cantidad <br/>";
	}
	
}



//console.log(caja);

