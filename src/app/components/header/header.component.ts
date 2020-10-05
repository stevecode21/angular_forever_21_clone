import { Component } from '@angular/core'

@Component({
    selector: 'miHeader',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    mensaje: Boolean = false;
    datoUser(user) {
        this.mensaje = true;
        return `¡Bienvenido ${user}!`;
    }
}