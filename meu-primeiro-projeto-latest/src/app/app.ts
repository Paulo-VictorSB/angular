import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenForms } from './components/forms/template-driven-forms/template-driven-forms';
import { ReactiveForms } from './components/forms/reactive-forms/reactive-forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateDrivenForms, ReactiveForms],
  template: `
    <router-outlet />
    <h1>Curso de Angular</h1>
    <app-template-driven-forms />
    <app-reactive-forms />
  `
})
export class App {
  title = 'meu-primeiro-projeto-latest';
}
