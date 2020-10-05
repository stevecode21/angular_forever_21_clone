import { Component } from '@angular/core';
import { DataService } from './datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class1-ang';
  //Una variable que será de cualquier tipo de datos (any) la cual será un arreglo
  datosAlumnos: any = [];
  //private -> Hará que el dato solo se podrá ver dentro de la clase, solo se podrá manejar dentro de la clase
  //dataservice:DataService = dataservice = new DataService(); --> En este caso lo estamos haciendo con TypeScript
  constructor(private dataservice: DataService) {
    this.datosAlumnos = dataservice.obtenerAlumnos()
  }
}
