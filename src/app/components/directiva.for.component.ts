import { Component } from '@angular/core';
/*Las directivas en angular son la representación de los ciclos y condicionales que usamos en la logica js normalmente */
@Component({
    selector: 'directiva-for',
    template: `
        <ul>
            <li *ngFor="let nombre of nombres">
                {{nombre}}
            </li>
        </ul>
    `
})
export class DirectivaForComponent {
    nombres: String[] = ['Stiven', 'Johan', 'Pablo', 'Andrea']
}