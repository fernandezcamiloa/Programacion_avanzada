
//1 Creaunafunciónllamadasumarquetomedosnúmeroscomo parámetros y devuelva su suma. Prueba la función con diferentesnúmeros.

function sumar(num1, num2) {
    return num1 + num2;
  }
  
console.log(sumar(4, 2));    
console.log(sumar(-5, 15));  
console.log(sumar(0, 10));   

//2 Creaunafunciónllamadamultiplicar que tome dos números como
// parámetros y devuelva su producto. Prueba la función con diferentes valores.

function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
console.log(multiplicar(4, 2));    
console.log(multiplicar(-5, 15));  
console.log(multiplicar(0, 10));   

//3Creaunafunciónllamada saludar que tomeunparámetronombre con unvalor por defecto de "Invitado". La función debe devolver"Hola, [nombre]".
function saludar(nombre) {
    console.log('Hola ' + nombre);
}

saludar('Invitado');

//4CreaunafunciónllamadacrearPersona que tome nombreyedad comoparámetros y devuelva un objeto con esas propiedades.
// Definición de la función crearPersona
function crear_persona(nombre, edad) {
    return {
      nombre: nombre,
      edad: edad
    };
  }
  
const persona = crear_persona('Juan', 20);

console.log(persona); 
  
//5Creaunafunciónllamada actualizarEdad que tome un objeto persona y un númeronuevaEdad, yactualice la propiedad edad delobjeto.
// Definición de la función actualizarEdad
function actualizar_edad(persona, nueva_edad) {
  persona.edad = nueva_edad;
}


console.log("Antes de actualizar:", persona); 


actualizar_edad(persona, 25);

console.log("Después de actualizar:", persona);

//6Creaunafunciónrecursiva llamada factorial que calcule el factorialde unnúmerodado.
function factorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}

console.log(factorial(5));

//7Creaunafunciónllamadadespedir que contenga una función interna adios. despedir debe devolver el resultado de llamar a adios
function despedir() {
  function adios() {
      return "Adiós";
  }
  return adios();
}

console.log(despedir()); 

//8 CreaunafunciónllamadaprocesarArray que tome un array y unafunción como parámetros, y aplique la función a cada elemento del
// array. Usa una función como parámetro para multiplicar cada númeropor2.
// Definición de la función procesarArray
function procesar_array(array, funcion) {
  return array.map(funcion);
}

function multiplicar_por_2(num) {
  return num * 2;
}

const numeros = [1, 2, 3, 4, 5];

const resultado = procesar_array(numeros, multiplicar_por_2);

console.log(resultado); 

//9 CreaunafunciónllamadacrearMultiplicador que tome un número x y devuelva una nueva función que multiplique cualquier número por x.
function crear_multiplicador(x) {
  return function(y) {
      return y * x;
  };
}

const multiplicar_por_3 = crear_multiplicador(3);
const multiplicar_por_5 = crear_multiplicador(5);

console.log(multiplicar_por_3(10)); 
console.log(multiplicar_por_5(10)); 

//10 Creaunafunciónanónimaquesumedosnúmerosylaasignaauna variable llamada sumarAnonima. Luego, invoca la función a través de esa variable.
const sumar_anonima = function(a, b) {
  return a + b;
};

console.log(sumar_anonima(3, 5)); 
console.log(sumar_anonima(10, 12)); 


