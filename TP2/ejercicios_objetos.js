//1 Creaunobjetollamadolibro con propiedades como título, autor y añoDePublicacion. Imprime cada propiedad en la consola.

const libro = {
    titulo: 'Harry Potter',
    autor: 'JK Rowling',
    anio_de_publicacion: 2018,
    descripcion: function() {
        return `El libro "${this.titulo}" fue escrito por ${this.autor}.`;
      },

    get anio_de_publicacion() {
        return this.anio_de_publicacionn;
    },
      
    set anio_de_publicacion(año) {
        this.anio_de_publicacion = año;
    },
    descripción: function() {
        return `El libro "${this._titulo}" fue escrito por ${this._autor}.`;
        }
    };


console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);
console.log("Año de Publicación:", libro.anio_de_publicacion);

//2 Creaunobjetollamadoestudiante con propiedades nombre, edad y direccion. direccion debe ser otro objeto con propiedades calle,
//ciudad y pais. Imprime la dirección completa del estudiante.

const estudiante = {
    nombre: 'Juan',
    edad: 20,
    direccion: {
        calle: 'Sarmiento 1564',
        ciudad: 'Concepción del Uruguay',
        pais: 'Argentina'
    }
};

console.log("Dirección del Estudiante:");
console.log("Calle:", estudiante.direccion.calle);
console.log("Ciudad:", estudiante.direccion.ciudad);
console.log("País:", estudiante.direccion.pais);

//3 Añadeunmétodollamadodescripciónalobjeto libro que devuelva una cadenadescribiendo el título y el autor del libro. Invoca este
 //métodoeimprimeelresultado.

console.log(libro.descripcion());

//4  Creaunobjetoproductoconpropiedades comonombre,precio y disponible. Usa un bucle for .in para imprimir todas las propiedades
 //y sus valores.

const productos = {
    nombre:'Arroz', 
    precio:800, 
    disponible: true
}

for (let propiedad in productos) {
    console.log(`${propiedad}: ${productos[propiedad]}`);
}

//5 Modificaelvalor dela propiedad precio del objeto producto y luego
 //imprime el objeto completo para verificar el cambio.
  
productos.precio = 950;
for (let propiedad in productos) {
    console.log(`${propiedad}: ${productos[propiedad]}`);
}

//6 CreaunafunciónllamadatienePropiedad que tome un objeto y una cadena como parámetros, y devuelva true si el objeto tiene una
//propiedad con ese nombre, o false en caso contrario.

function tiene_propiedad (objeto, propiedad) {
    return objeto.hasOwnProperty(propiedad);
}
  
console.log("Tiene propiedad: ",tiene_propiedad( productos, 'nombre')); 
console.log("Tiene propiedad: ",tiene_propiedad(productos, 'peso'));  

//7  Eliminalapropiedad disponible del objeto producto. Imprime el objeto antes y después de eliminar la propiedad.

console.log("Antes de eliminar 'disponible':", productos);
  
delete productos.disponible;
  
console.log("Después de eliminar 'disponible':", productos);

//8  Usa Object.assign para combinar dos objetos, persona1 y persona2,en un nuevoobjeto. Imprime el resultado.
// Creación de los objetos persona1 y persona2
const persona1 = { 
    nombre: 'Ana', 
    edad: 22 
  };
  
  const persona2 = { 
    ciudad: 'Colon', 
    profesion: 'Ingeniera' 
  };
  
  const persona_combinada = Object.assign({}, persona1, persona2);
  
  console.log(persona_combinada);

//9 Crea una copia profunda del objeto estudiante utilizando el método JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
//original no haya sido alterado.

const estudiante_copia = JSON.parse(JSON.stringify(estudiante));

estudianteCopia.nombre = "Juan López";
estudianteCopia.direccion.calle = "San Martin 123";

console.log("Original:", estudiante);
console.log("Copia modificada:", estudiante_copia);    

//10 Añade un getter y un setter al objeto libro para la propiedad añoDePublicacion. Usa el setter para actualizar el año de publicación
//y luego usa el getter para leerlo.
  
console.log("Antes de actualizar el año de publicación:");
console.log(libro);
  
libro.anio_de_publicacion = 2003;

console.log("Después de actualizar el año de publicación:");
console.log(libro);
  