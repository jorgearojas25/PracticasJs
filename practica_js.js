let result = 0;
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
  let dato = Number(prompt("Ingresa un numero"));
  alert(
    dato <= 10 ? String.fromCharCode(dato + 96) : "Este no es un valor aceptado"
  );
};

let pistaV = [
  [false, false, false, false, false, false],
  [false, true, true, true, true, false],
  [false, true, false, false, true, false],
  [false, true, false, false, true, false],
  [false, true, true, true, true, false],
  [false, false, false, false, false]
];

const EjericioJuegoVehiculos = (posicionx, posiciony, pista) => {
  console.log(pista);
  let validacion = pista[posicionx][posiciony];
  if (!validacion) {
    alert("Estas fuera de la pista");
  } else {
    alert("Estas en la pista");
  }
};

const EjecutarJuego = () => {
  EjericioJuegoVehiculos(
    Number(prompt("Ingresa la posicion en X")),
    Number(prompt("Ingresa la posicion en y")),
    pistaV
  );
};
//EjecutarJuego();

const user = "danialex15";
const password = "123456";
const ValidarIngreso = () => {
  let insertUser = prompt("User: ");
  let insertPassword = prompt("Password: ");
  try {
    if (user == insertUser && password == insertPassword) {
      alert("Bienvenido: " + insertUser);
    } else {
      throw new Error("Los datos ingresados son incorrectos");
    }
  } catch (error) {
    alert(error.message);
  }
};

const PI = 3.1416;
const EjercicioDiametro = () => {
  let radio = prompt("Ingresa el radio del circulo: ");
  try {
    radio = parseFloat(radio);
    if (isNaN(radio)) {
      throw new Error("El valor ingrsado no es valido");
    }
    if (radio < 0) {
      throw new Error("El numero ingresado no puede ser menor a 0");
    }
    alert("El diametro del circulo es: " + radio * 2 * PI);
  } catch (e) {
    console.error(e.message);
  }
};

const Suma = () => {
  let number1 = prompt("Ingresa un numero: ");
  let number2 = prompt("Ingresa otro numero: ");
  const result = 0;
  try {
    do {
      number1 = parseFloat(number1);
      number2 = parseFloat(number2);
      if (isNaN(number1) || isNaN(number2)) {
        throw new Error("Los datos ingresados no son validos");
      }
      result = number1 + number2;
      return alert("El resultado es: " + result);
    } while (result > 100);
  } catch (e) {
    console.log(e.message);
  }
};

const ARRAYSTOP = () => {
  let dato = "";
  let arrayDatos = [];
  do {
    dato = prompt("ingrese un numero | detengase con 'stop'").toLowerCase();
    if (Number(dato)) {
      arrayDatos.push(dato);
    }
  } while (dato !== "stop");
  alert("los numeros que ingresaste fueron: \n" + arrayDatos);
};

const mostrarAlertas = () => {};

const ArrayStopCero = () => {
  let dato = "";
  let arrayPares = [];
  let arrayImpares = [];
  let arrayNoNumeros = [];
  do {
    dato = prompt("ingrese un dato | detengase con '0'");
    if (Number(dato)) {
      if (dato % 2) {
        if (dato !== 0) {
          arrayImpares.push(dato);
        }
      } else {
        arrayPares.push(dato);
      }
    } else {
      if (dato !== "0" && dato !== "") {
        arrayNoNumeros.push(dato);
      }
    }
  } while (dato !== "0");
  alert(
    "Tus numeros pares fueron: " +
      arrayPares +
      "\n de longitud: " +
      arrayPares.length
  );
  alert(
    "Tus numeros impares fueron: " +
      arrayImpares +
      "\n de longitud: " +
      arrayImpares.length
  );
  alert(
    "Tambien ingresaste datos como: " +
      arrayNoNumeros +
      "\n de longitud: " +
      arrayNoNumeros.length
  );
};

const EjercicioEliminarExtremos = () => {
  let dato = "";
  let numeroMayor;
  let numeroMenor;
  let datos = [];
  do {
    dato = prompt("ingrese un dato | detengase con '0'");
    if (Number(dato) && Number(dato) !== 0) {
      datos.push(Number(dato));
      console.log(`El dato es ${dato}`);
      numeroMayor = numeroMayor > dato ? numeroMayor : dato;
      numeroMenor = numeroMenor < dato ? numeroMenor : dato;
      console.log(
        `ahora numero mayor = ${numeroMayor} y numero menor = ${numeroMenor}`
      );
    }
  } while (dato !== "0");
  console.log(
    `finalmente numero mayor = ${numeroMayor} y numero menor = ${numeroMenor}`
  );
  if (numeroMayor === numeroMenor) {
    alert(
      "El numero mayor y tambien el menor fue: " +
        datos.splice(datos.indexOf(numeroMayor), 1)
    );
  } else {
    console.log(datos);
    console.log(datos.indexOf(numeroMayor));
    console.log(datos.indexOf(numeroMenor));
    alert(
      "El numero mayor fue: " + datos.splice(datos.indexOf(numeroMayor), 1)
    );
    alert(
      "El numero menor fue: " + datos.splice(datos.indexOf(numeroMenor), 1)
    );
  }
  alert("El resto de datos fueron " + datos);
};

class usuario {
  constructor(name, lastName, email, edad) {
    (this.name = name),
      (this.lastName = lastName),
      (this.email = email),
      (this.edad = edad);
  }
  isAdult = () => {
    return Number(this.edad) > 18;
  };
  fullName = () => {
    return `${this.name} ${this.lastName}`;
  };
}

const createUser = () => {
  let myUser = new usuario(
    prompt("Ingresa tu nombre"),
    prompt("Ingresa tu apellido"),
    prompt("Ingresa tu email"),
    prompt("Ingresa tu edad")
  );
  alert(
    `Hola ${myUser.name} ${myUser.lastName} tu correo es: ${myUser.email} y tienes ${myUser.edad} años`
  );
  alert(
    `Tu nombre completo es ${myUser.fullName()} y ${
      myUser.isAdult() ? "Eres mayor de edad" : "No eres mayor de edad"
    }`
  );
};

class dog {
  constructor(race, name, weight, age) {
    (this.race = race),
      (this.name = name),
      (this.weight = weight),
      (this.age = age);
  }
}

const myDogs = [];

const getDataDog = dog => {
  return console.log(
    `El perro de raza ${dog.race} se llama ${dog.name} pesa ${dog.weight}kg y tiene ${dog.age} años`
  );
};

const ejericioPerros = () => {
  let race = "";
  do {
    race = prompt("Ingresa la raza del perro");
    if (race.toLocaleLowerCase() !== "stop") {
      name = prompt("Ingresa el nombre del perro");
      weight = prompt("Ingresa el peso del perro");
      age = prompt("Ingresa la edad del perro");
      myDogs.unshift(new dog(race, name, weight, age));
    }
  } while (race.toLocaleLowerCase() !== "stop");
  alert("Mira la consola");
  myDogs.map(dog => getDataDog(dog));
};

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const factorial = num => {
  if (num === 1) {
    return num;
  } else if (num === 0) {
    return 1;
  } else if (num < 0) {
    return "No se puede tener el factorial de un numero negatvo";
  } else {
    return num * factorial(num - 1);
  }
};

const calc = (num, callback) => {
  console.log(
    `Hola calc \nEl cuadrado del numero ${num} es: ${Math.pow(num, 2)} 
    y ${isPrime(num) ? "es primo" : "no es primo"}`
  );
  return callback(num);
};

const EjecutarEjercicioCallback = () => {
  calc(Number(prompt("Ingrese un numero:")), n => {
    console.log(
      `Hola callback, \nla raiz cuadrada de ${n} es: ${Math.sqrt(
        n
      )} \nsu factoria es ${factorial(n)}`
    );
  });
};

const myBrandPromise = () => {
  console.log("wait");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("exitoso");
    }, 2000);
  });
};

const myBrandRejectPromise = () => {
  console.log("wait");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, 1000);
  });
};

const myPromise = number => {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`El numero ${number} es par`);
    } else {
      reject(`El numero ${number} es impar`);
    }
  });
};

const EjercicioPromesa1 = () => {
  Promise.race([Promise1(), Promise2()])
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.error(e);
    });

  // myPromise(Math.floor(Math.random() * 101)).then(data => {
  //   console.log(`Resultado: ${data}`);
  // }).catch(e => {
  //   console.log(`[Promesa MyBrandReject] Error: ${e}`)
  // });
};

const Promise1 = () => {
  let time = Math.floor(Math.random() * 1001);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promesa 1 se ejecuto en ${time}`);
    }, time);
  });
};

const Promise2 = () => {
  let time = Math.floor(Math.random() * 1001);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promesa 2 se ejecuto en ${time}`);
    }, time);
  });
};

const GetUsersPromise = () =>{
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => {
        data.json().then(data => {
          data.map(d => console.log(d.name))
        })
      })
      .catch(e => {
        console.error(`[Get users promise] ${e}`)
      })
  })
}


const GetUsers = async () => {
    let response = "";
    try {
      response = await fetch('https://jsonplaceholder.typicode.com/users')
      data = await response.json()
      for (const d of data) {
        console.log(d.name)
      }
    } catch (error) {
      console.error(error)
    }
    return response;

}

const GetUsersGithub = async (users) => {
  let response = [];
  try {
    for (const user of users) {
      let dataUser = await fetch('https://api.github.com/users/'+user)
      let jsonUser = await dataUser.json()
      if(jsonUser.message != 'Not Found'){
        response.push(jsonUser);
      }
    }
  }catch (error) {
    console.log(`[Get users github] No se encontro el usuario ${error}`)
  }
  return response;
}

const GetUsersGithubData = async () => {
  
  let users = ['jorgearojas25', 'damartinezrus', 'rembrandtsx', 'jfmt01', 'chrisdev12']
  let response = await GetUsersGithub(users)
  for (const user of response) {
    console.log(user.login)
    fetch(user.followers_url).then(data => data.json().then(data => console.log(data)))
  }
}






