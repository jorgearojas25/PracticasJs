let result = 0;
let edades = [];
let mayoresEdad = 0;

const EjercicioSuma1 = () => {
  for (let index = 0; index < 5; index++) {
    result += Number(prompt("Ingresa un numero:"));
  }
  alert("El resultado es: " + result);
};

const MostrarPromedio = () => {
  alert("El promedio es: " + result / 5);
};

const EjercicioEdades = () => {
  let edad = 1;
  do {
    edad = Number(prompt("Ingrese la edad: "));
    if (edad >= 17) {
      mayoresEdad++;
    }
  } while (edad !== 0);
  alert("Los mayores de edad fueron: " + mayoresEdad);
};

const EjercicioPromedioCondicion = () => {
  let dato = "";
  let result = 0;
  let count = 0;
  do {
    dato = prompt(
      "Ingresa numeros para obtener su promedio \nEscribe 'Salir' para terminar"
    );
    if (parseInt(dato)) {
      console.log("Se ingreso el numero: " + dato);
      result += parseInt(dato);
      count++;
    } else {
      dato = dato.toLowerCase();
      console.log("El dato que no es numero: " + dato);
    }
  } while (dato != "salir");
  console.log("Suma total: " + result);
  console.log("Numero de envios: " + count);
  console.log("Promedio: " + result / count);
};

const EjercicioParesImpares = () => {
  let numeroPar = 0;
  let numeroImpar = 0;
  let dato;
  while (dato !== 0) {
    dato = parseInt(prompt("Ingresa numeros | Termina con 0"));
    if (dato !== 0) {
      if (dato % 2 === 0) {
        numeroPar++;
      } else {
        numeroImpar++;
      }
    }
  }
  console.log("Numeros Impares: " + numeroImpar);
  console.log("Numeros Pares: " + numeroPar);
  alert("Diferencia: " + MensajeDiferencia(numeroImpar - numeroPar));
};

const MensajeDiferencia = diferencia => {
  let mensaje = "Escribiste mas numeros ";
  switch (diferencia) {
    case diferencia > 0:
      return mensaje + "impares";
    case diferencia < 0:
      return mensaje + "pares";
    default:
      return "Hubo empate!";
  }
};

const EjercicioAbc = () => {
  let dato =  Number(prompt("Ingresa un numero"))
  alert(dato <= 10 ? String.fromCharCode((dato + 96)) : "Este no es un valor aceptado")
}

let pistaV = [[false, false, false, false, false, false],
              [false, true, true, true, true, false],
              [false, true, false, false, true, false],
              [false, true, false, false, true, false],
              [false, true, true, true, true, false],
              [false, false, false, false, false]]

const EjericioJuegoVehiculos = (posicionx, posiciony, pista) => {
  console.log(pista);
  let validacion = pista[posicionx][posiciony]
  if (!validacion) {
    alert("Estas fuera de la pista");
  }else{
    alert("Estas en la pista");
  }
}

const EjecutarJuego = () => { 
  EjericioJuegoVehiculos(Number(prompt("Ingresa la posicion en X")),Number(prompt("Ingresa la posicion en y")),pistaV);
}

EjecutarJuego();
//Estadisticas del vehiculo(tipo seleccionar) : Tipo de vehiulo
//Tunear el vehiculo()
//Elegir el personaje()
//Escoger la pista()
//Salir de los limietes(posicionx, posicion y, pista?) : salioCampo : boolean || tiempoPenitencia : int 