import { Component } from '@angular/core';
/*Las directivas en angular son la representación de los Switch, ciclos y condicionales que usamos en la logica js normalmente */
@Component({
    selector: 'directiva-switch',
    //
    template: `
        <div [ngSwitch] = "valor">
            <div *ngSwitchCase = "'angular'">Angular</div>
            <div *ngSwitchCase = "'react'">React</div>
            <div *ngSwitchDefault>No hay nada</div>
        </div>
    `
})
export class DirectivaSwitchComponent {
    valor: String = 'angular';
}