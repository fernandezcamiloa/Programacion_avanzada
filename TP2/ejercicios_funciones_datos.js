//1 CreaunafunciónllamadaobtenerUsuarios que haga una petición HTTPalaAPIhttps://jsonplaceholder.typicode.com/users usando fetch. 
//Luego, imprime en la consola la lista de usuarios obtenida.
function obtener_usuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
           
            if (!response.ok) {
                throw new Error('Error en la peticion');
            }
            return response.json(); 
        })
        .then(data => {
            console.log(data); 
        })
        .catch(error => {
            console.error('Hubo un problema con la peticion:', error);
        });
}

obtener_usuarios();

//2 UsandolafunciónobtenerUsuarios, crea otra función llamadaimprimirNombresDeUsuarios que filtre y muestre solo los nombresde los usuarios.
function obtener_usuarios2() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            return response.json(); 
        })
        .catch(error => {
            console.error('Hubo un problema con la petición:', error);
        });
}


function imprimir_nombres_de_usuarios() {
    obtener_usuarios2().then(usuarios => {
        if (usuarios) {
            const nombres = usuarios.map(usuario => usuario.name); 
            console.log(nombres); 
        }
    });
}

imprimir_nombres_de_usuarios();

//3 CreaunafunciónllamadaautenticarUsuario que tome un objeto credenciales con usuario y contraseña, y verifique si coinciden con
// unusuario predefinido. La función debe devolver true si la autenticación es exitosa y false en caso contrario.
function autenticarUsuario(credenciales) {
    const usuarioPredefinido = {
        usuario: 'admin',
        contraseña: '1234'
    };

    if (
        credenciales.usuario === usuarioPredefinido.usuario &&
        credenciales.contraseña === usuarioPredefinido.contraseña
    ) {
        return true; 
    } else {
        return false; 
    }
}

const credenciales = {
    usuario: 'admin',
    contraseña: '1234'
};

const esAutenticado = autenticarUsuario(credenciales);
console.log(esAutenticado); 

const credencialesIncorrectas = {
    usuario: 'usuario',
    contraseña: 'incorrecta'
};

const esAutenticadoFallo = autenticarUsuario(credencialesIncorrectas);
console.log(esAutenticadoFallo); 

//4 CreaunafunciónllamadamapearUsuarios que tomeunarray de usuarios obtenidos de la API y devuelva un nuevo array con solo las
//propiedades nombre y email de cada usuario.
function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => {
        return {
            nombre: usuario.name, 
            email: usuario.email  
        };
    });
}

function obtener_usuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Hubo un problema con la petición:', error);
        });
}

obtener_usuarios().then(usuarios => {
    if (usuarios) {
        const usuariosMapeados = mapearUsuarios(usuarios);
        console.log(usuariosMapeados); 
    }
});
