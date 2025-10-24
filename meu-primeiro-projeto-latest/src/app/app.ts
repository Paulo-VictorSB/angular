import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateBinding } from './components/template/template-binding/template-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateBinding],
  template: `
    <router-outlet />
    <h1>Curso de Angular</h1>
    <app-template-binding/>
  `
})
export class App {
  title = 'meu-primeiro-projeto-latest';
}
