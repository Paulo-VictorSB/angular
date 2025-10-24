import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateVariables } from './components/template/template-variables/template-variables';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateVariables],
  template: `
    <router-outlet />
    <h1>Curso de Angular</h1>
    <app-template-variables />
  `
})
export class App {
  title = 'meu-primeiro-projeto-latest';
}
