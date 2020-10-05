import {Component} from '@angular/core';
/*Las directivas en angular son la representación de los ciclos y condicionales que usamos en la logica js normalmente */
@Component({
    selector: 'directiva-if',
    template: `
    <div *ngIf="Cargar">
    <h1>Bienvenido</h1>
    </div>
    `
})
export class DirectivaIfComponent{
    Cargar: Boolean = true;
}

