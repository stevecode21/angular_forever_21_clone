import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Two way binding
import {FormsModule} from '@angular/forms'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
/*Importando componentes*/
import {HeaderComponent} from './components/header/header.component';
import {ContentComponent} from './components/content/content.component';
// import {ChaquetasComponent} from './components/chaquetas/chaquetas.component';
import {FooterComponent} from './components/footer/footer.component';
import {DirectivaIfComponent} from './components/directiva-if.component';
import {DirectivaForComponent} from './components/directiva.for.component';
import {DirectivaSwitchComponent} from './components/directiva-switch.component';
import {DataService} from './datos.service'

@NgModule({
  //Aqui se importan componentes
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    routingComponents,
    FooterComponent,
    DirectivaIfComponent, 
    DirectivaForComponent,
    DirectivaSwitchComponent
  ],
  //Aqui se importan modulos, paquetes y librerías
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Two way binding
    FormsModule
  ],
  //Aqui se importan servicios
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
