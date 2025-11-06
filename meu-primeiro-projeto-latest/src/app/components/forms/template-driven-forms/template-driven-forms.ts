import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule],
  templateUrl: './template-driven-forms.html',
  styleUrl: './template-driven-forms.scss',
})
export class TemplateDrivenForms {
  public listComidas = signal<Array<{nome: string, preco: string}>>([
    { nome: "Comida 1", preco: "100" },
    { nome: "Comida 2", preco: "200" },
    { nome: "Comida 3", preco: "300" },
  ]);
}
