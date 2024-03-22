
//imprimir mensaje de bienvenida en la consola
console.log("Sistema EBAC de Registro de Alumnos");

//Se define un arreglo de registro con datos de alumnos en EBAC 
var registro = [        

//se muestra lista de alumnos por medio de objetos
    {nombre: "Alejandro Medina", edad: 26, zonaResidencia: "Zapopan", nombrePrograma: "Python", email: "meva@gmail.com", numeroTelefono: 33456789, seguroSocial: true},
    {nombre: "Renata Medina", edad: 23, zonaResidencia: "Zapopan", nombrePrograma: "Java", email: "reny@gmail.com", numeroTelefono: 33456123, seguroSocial: false},
    {nombre: "Yara Medina", edad: 57, zonaResidencia: "Celaya", nombrePrograma: "Javascript", email: "yara@gmail.com", numeroTelefono: 33789456, seguroSocial: true},
    {nombre:"Fernanda Perez", edad: 23, zonaResidencia:"Guadalajara", nombrePrograma: "UX/UI", email: "fer@gmail.com",numeroTelefono: 33098765, seguroSocial: false},
    {nombre: "Kevin Camacho", edad: 27, zonaResidencia: "zapopan", nombrePrograma: "Python", email: "kevin@gmail.com", numeroTelefono: 33345123, seguroSocial: true},
];

//funcion que permite agregar un nuevo alumno al arreglo de registro
function agregarAlumno(){

    //se solicita informacion al usuario para el registro de un nuevo alumno
    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
    var edad = prompt("Ingresa la edad del alumno");
    var nombrePrograma = prompt("Ingresa el programa a estudiar");
    var email = prompt("Ingresa el correo electronico del alumno");
    var numeroTelefono = prompt("Ingresa tu numero de teléfono");
    var seguroSocial = prompt("Ingresa tu numero social");

//crea un objeto que se llama nuevo alumno con los datos ingresados 
    var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email, numeroTelefono: numeroTelefono, seguroSocial: seguroSocial};

//agrega la informacion nuevoAlumno al arreglo 
    registro.push(nuevoAlumno); 
};


//funcion para consultar los registros de los alumnos 
function consultarRegistros(){ 

    //Este ciclo for itera sobre cada uno de los registros del arreglo 
  for(var i = 0; i < registro.length; i++){

    //esta lista de console.log permite ver al usuario el registro en la consola
    console.log("nombre: " + registro[i].nombre);
    console.log("edad: " + registro[i].edad);
    console.log("zona de residencia: " + registro[i].zonaResidencia);
    console.log("nombre del programa: " + registro[i].nombrePrograma);
    console.log("email: " + registro[i].email);
    console.log("numero de teléfono: " + registro[i].numeroTelefono);
   };
}


//Esta funcion permite generar un nuevo arreglo que no contenga la informacion del alumno deseado
function eliminarAlumno(){

    //solicilita al usuario el nombre del alumno a eliminar 
    var nombreEliminar = prompt ("Ingresa el nombre del alumno a eliminar")

    //utiliza el metodo filter para crear un nuevo arreglo sin el alumno a eliminar 
    registro = registro.filter(alumno => alumno.nombre !== nombreEliminar);

};


//Esta funcion permite  editar la informacion de un alumno 
function editarAlumno(){

    //solicita al usuario el nombre del alumno a editar
    var alumnoEditar = prompt ("Ingresa el nombre del alumno a editar"); 
};

//Hacer busqueda del alumno
for(var i= 0; i < registro.length; i++){

    //si existe, acceder al alumno a modificar
    if(alumnoEditar === registro[i].nombre){
        alert ("Dato a modificar?");
   
        //preguntar por el dato a modificar 
var opcion = prompt ("Seleccione una opcion: \n1. Editar nombre \n2. Editar edad \n3. Editar lugar de residencia \n4. Editar nombre del programa \n5. Editar email \n6. Editar numero de teléfono \n7. Salir")

// Dato a colocar 
if (opcion === "1"){
    editarNombre();
} else if (opcion === "2"){
    editarEdad();
} else if (opcion === "3"){
    editarResidencia();
} else if (opcion === "4"){
    editarprograma();
} else if (opcion === "5"){
    editarEmail();
} else if (opcion === "6"){ 
    editarTelefono(); 
} else if (opcion === "salir"){
    alert ("Salir del sistema");
} else{
    alert("No existe este alumno" + alumnoEditar);
    }
};
};

//este ciclo do while permite repetir el menu cuando es indicado hasta que no se cumpla la condicion 
do{

//Variable que toa la eleccion del usuario para ejecutar la funcion indicada 
var opcion = prompt ("seleccione una opcion: \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Eliminar registro de alumno \n4. Editar registro de alumno \n5. Salir");

//este if se declara para dar a elegir el usuario la opcion que quiera 

if (opcion === "1"){
    agregarAlumno();
} else if(opcion === "2"){
    consultarRegistros();
} else if(opcion === "3"){
    eliminarAlumno(); 
}else if(opcion === "4"){
    editarAlumno();
} else if("Salida"){
    alert("Salir del sistema");
} else {
    alert("opcion invalida, elige otra");
}

//Esta variable nos permite elegir si hacemos otra accion o cerramos el ciclo 

var continuar = prompt("Desea hacer otra acción? (s/n)")


//while que se encarga de cerrar el ciclo 
} while (continuar === "s");