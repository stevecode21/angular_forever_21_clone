import { Component } from '@angular/core'

@Component({
    selector: 'chaquetas',
    templateUrl: './chaquetas.component.html',
    styleUrls: ['chaquetas.component.css']
})

export class ChaquetasComponent {
    // chaquetas: String[] = ['Hola1', 'Hola2'];
    chaquetasImg = {
        chaqueta1: '../assets/chaqueta1.jpg',
        chaqueta2: '../assets/chaqueta2.jpg',
        chaqueta3: '../assets/chaqueta3.jpg',
        chaqueta4: '../assets/chaqueta4.jpg',
        chaqueta5: '../assets/chaqueta5.jpg',
        chaqueta6: '../assets/chaqueta6.jpg',
        chaqueta7: '../assets/chaqueta7.jpg',
        chaqueta8: '../assets/chaqueta8.jpg',
    }
}