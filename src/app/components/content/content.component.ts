import { Component } from '@angular/core'

@Component({
    selector: 'miContenido',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})

export class ContentComponent {
    datosPag = {
        img1: '../assets/img1.jpg',
        img2: '../assets/img2.jpg',
        img3: '../assets/img3.jpg',
        img4: '../assets/img4.jpg',
        img5: '../assets/img5.jpg',
        //Insertar texto para enviarlo al html
        infoPag: 'Ven y conoce nuestras nuevas colecciones de invierno y participa por un pase doble para el concierto de THE OFFSPRING'
    }
    // Two way binding
    chat={
        data: ''
    }
}