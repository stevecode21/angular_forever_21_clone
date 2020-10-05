//Aplicaremos el servicio de forma global para todo el proyecto, esto es un tipo de inyección
export class DataService{
    obtenerAlumnos(){
        return [
            {"nombre": "Adiela", "apellido": "López"},
            {"nombre": "Ruben", "apellido": "Solano"}
        ]
    }
}